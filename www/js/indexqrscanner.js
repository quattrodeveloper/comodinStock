document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    iniciarQR()
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}


function onDone(err, status){
  if (err) {
   // here we can handle errors and clean up any loose ends.
   console.error(err);
  
  }
  if (status.authorized) {
    // W00t, you have camera access and the scanner is initialized.
    // QRscanner.show() should feel very fast.

  } else if (status.denied) {
   // The video preview will remain black, and scanning is disabled. We can
   // try to ask the user to change their mind, but we'll have to send them
   // to their device settings with `QRScanner.openSettings()`.
  } else {
    // we didn't get permission, but we didn't get permanently denied. (On
    // Android, a denial isn't permanent unless the user checks the "Don't
    // ask again" box.) We can ask again at the next relevant opportunity.
  }
}



document.addEventListener('ondeviceready', iniciarQR, false);


function prepare(){
  QRScanner.prepare();  
}

  function scan(){
    QRScanner.scan(
    function(err, result){
      if(err) {
        console.log('scan error:', result);
      } else {
        if (confirm('Cód.: ' + result['result'] + '¿Desea continuar?')) {
          // Save it!
          console.log('Thing was saved to the database.');
        } else {
          // Do nothing!
          console.log('Thing was not saved to the database.');
        }

        console.log(result['result']);
      }
    });
  }

  function cancelScan(){
    QRScanner.cancelScan();
  }
  function frontCamera(){
    QRScanner.useFrontCamera();
  }
  function backCamera(){
    QRScanner.useBackCamera();
  }
  function show(){
    QRScanner.show();
  }
  function hide(){
    QRScanner.hide();
  }
  function pausePreview(){
    QRScanner.pausePreview();
  }
  function resumePreview(){
    QRScanner.resumePreview();
  }
  function destroy(){
    QRScanner.destroy();
  }
  function getStatus(){
    QRScanner.getStatus(console.log);
  }


  
  function iniciarQR(){
    console.log('Destroying QRScanner to test everything...');
    QRScanner.destroy();
    console.log('Preparing QRScanner...');
    QRScanner.prepare(function(err, status){
      if(err){
        console.error(err._message);
      } else {
        console.log('QRScanner is initialized. Status:');
        console.log(status);
        console.log('Showing QRScanner...');
        QRScanner.show(function(){
          console.log('Starting scan...');
          $('#linkqr').hide();
          QRScanner.scan(
            function(err, result){
              if(err) {
                console.log('scan error:', result);
              } else {
                console.log('scan:', result);

                
                let codigo  = '';
                if (result['result']) {
                  codigo = result['result'];
                } else {
                  codigo = result;
                }
                if (confirm('Cód.: ' + codigo + ' ¿Desea continuar?')) {
                  // Save it!
                  

                  $.ajax({
                    url: 'http://local.quattropy.com/comodin_stock/s1/public/api/stock/existeqr?qr='+codigo,
                    data: '',
                    cache: false,
                    contentType: false,
                    processData: false,
                    method: 'GET'
                  })
                  .done(function(data) {
                    console.log(data.data.existeqr) 
                    id = parseInt(data.data.existeqr);
                    if(id===0) {
                      var url_string = window.location.href; //window.location.href
                      var url = new URL(url_string);
                      var id = url.searchParams.get("id");
                      window.location = '/altaprod_3.html?qr='+codigo+'&idProducto='+id

                      $('#consola').html(result);
                      $('#consola').html(console.log(result));
                      console.log('Thing was saved to the database.');
                    } else if(id===1) {
                        alert('Este Código QR ya se encuentra en uso')
                        iniciarQR()
                    }
                  })
                  .fail(function() {alert("error de red");
                  });


                } else {
                  // Do nothing!
                  iniciarQR()
                  console.log('Thing was not saved to the database.');
                }
        
                console.log(result['result']);
              }
            });
        });
      }
    });
  }

