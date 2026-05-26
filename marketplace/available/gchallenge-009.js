// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4whgg3c0vdQ7KEKtNvVkMM1T3Oj8UjhdsO6x2p0jZD4+jjLYTJG3PxsY6us1jSMojl0arjg4LlRdnxB6Ap5EjfIlByWE4cfGcahCR/tLBL2FopBhTKBav2VnOEsgM3G00gIDfTc0zQWj9vFY4dUgPEJSPhiqxGh0/nN4ezJPMMIfYWSMFyt2ecMJQN0h+fD6srGxwBjSF6/DKPoln9hV4YT2dsgNTDs6NgnuoKTW+ydsIXHgrLFC89mwOyUgJg3K08jFql4JJWBf4qgO8sYABJcGaHXm4dGc5h3f8YO+nldMK2pMQI9NXENb+C+qTop3x1ttMNnAOwz75fTlSvh7j/QPduZBibQKPS4/WZa5TIlEmHnx5Qc2YjJIu9V+aF6VzuyAkWXllLjyh20cgbo34QRNLN8bRMvvnE13irhpiVBYBDx7n7uDFvM9a4ZV8IZCAbpvllO4VNtcZEqhN1DwqnR3v5vdwuTvjCA683Avn5gVX6lfwLa3hWt1tNoIIiR9ulzCuj7Nkle9z9wFWxgnezIJSW+NmM9M6jwSJhqB968BffDKLr9l5AomTdTP5oEMidi+XXmj35yLEqnSBdsswzsaYrtzDtJZHtztVbn3mi6z4L5o5zBk5ceivMyyhZwBdVUKZrY=';const _IH='d1f56fbaf397f213da487b4120890945896c5134aa463164c3d19cbfce6707d7';let _src;

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
