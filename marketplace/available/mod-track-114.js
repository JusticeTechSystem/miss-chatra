// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r00muPSDUItxpI7i+TRyu49d3ghO5J+SL0cD7JRoyQUN/lTgd0H6AcfxDjoiO2h7JggzXB085cf4xN6ebFFKTyTH6Vuj0SSRUd/nV8h4D9Dr5qw9AqK+bH48aMrDuDT78DK/2i8TCouh/1T/mknNgVlfN54mZu96NaANV2Hwij2gwCaFEjSpBkmgsLTF5QQn5V8fEOS+k7+4XScWFwAApJgAK9fh8x8zEi2sXkV2gkDBrzYe1LkiW00har0G12sMcnRorV6SmchI1mUcbXD/bjTmLKmboJC3vLiriFtvu3WEhz5kPT0krB68G44U9uW/xOYhA0zvXodDNS1+2meuWmAXWDLn2573eMGNuKvMkEYI9T55Wj5Up31WGMgyNU+z+c4Xlg445/mjpLKqagkgkYJ0JToUh++efzwEMGMiwOsrNW2kP5rY17fj/1vd/FYpjsVUD8z/DVL4l5RMvkeKJMQQeRwWuQS4gVmk+L17lWu1ODKXHtIyKYXXatxNRoT9q/NGjFNNfsCNLSUt6VvbQkGDLI+5tLuAWfMFIi351Q02qXw4SQ8T0+Ru8dKrkr7trsnQDIC+jBlkqRDRVSNdD1WtdB7i7rzMZEmwkm2loE4xvwDmm6XdoNub/U018Yjh+3iEz6rxQQnpK+3FnNudCDn2wFeGrPJ0Gx9T7aHuB1lh4fpBEecmO0ZXI9AFPIcLh6JJqTQFYEXiCkL32W7dCFAm5jg5ezBl1ZJ3h/YyB8jHzHMoKvZSf503Zv9IASJftMIkXPiw2HGdiaD7UcuostrPlIpe6cjTp/TuUEMKI/D3QfWiDAqiUqmzrOlpNmFEjmDSmae04EMDVXXTXkW7VcoGkWoy9E2L2G+DtCe8kPO5iv4mNpYhwWUL5fKGsY9g+8uuvKJKRIqyRjJfRPi93vvptP26trTT+/ZH+iZmHYupcgZLKyFiN88X2hdaKigAk99MZUffyUmLGNJPJLNRifkRBOqJU+IqOODkkUaVwjKRfQaZeNsFfXXSgbe+Ss/00iSF2LFxCNf6Mw8Wm4DHeLKBSVStpOQg26yx3Kezz506TMxsKc0Y7/FMAR3TwX9VR6OfgMfQqDz0BTvG+dF417ABRP00nUAJDJN3m0rP1vsg2CQyjzRVrApWgFCARBiT/WJlPcf8V72dzJeSJLlAzse3pvEfBohixYIwYXNu6I2UoYMfE5ZpvHc1yBPsRKfsA5jbL0fqnGRAQM9Y5E4vUdZzZUuMOut8hrC3ds2PwOuiO8mrFQkcZ3CfVD57AR8XaRisDADBbOZkhg5DAPF2aGtYbwWQZ9lue3JNy/ZrBvhBUU5wqu3yP7kRtKgFyZRVXMUimakB3Y8RX2MDNqoyFVr/O6pySL6j6WOguTAO';const _IH='88b00aecff71d7e312c6c675b73ac0b57361542bb0627b705d53cd2a19686312';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
