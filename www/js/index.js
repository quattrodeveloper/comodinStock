


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


  

