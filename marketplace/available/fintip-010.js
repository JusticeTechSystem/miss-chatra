// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='grWAtijOHI0ga3/9os7uBnSemMjTIgCkdg9xB9eVKhEE5qGFCaeTFVdQJvnTyptB+hqDIMLDLT44j3WWt2sHcXKmWn0qxfCGkecy3i8r+4BFtIniIeNMdflngyqxsnpLNRFQAd+JHtIMY40tGpbMJ/XgHMk64nJvHm/RDQBGjKK00IvmsKhsJBTnKXy1GzhLn7tiX+WWodTAqVOUz97Oo3h6QW37qmcvVVGdePzZg7NganVvPYVqlzQaVb2nRpiCSCYgScVZx52vt+PiiyWFnDBLKUs4Dtqs0d2+BmlR0+2vvV7twWkV7fY4oE4vpSLFaNVv+B0AJp2EWDv5j3anK2ma5LK0JFKtS911hoUxLgXw8Cuy7HbUyyIdZIHrgHCwhkbsOQygS0vS/DsO1Af+AV2lFCdFDsGi3EJV6TreliVZo4GB7Tf2fq431zneChSBDqM6rIoMHywfLFmoUDZgfcbXzSEcLJkb6KMEOgcBFgtSQ+hTCQ/EkQPP5cEv68oWT9taO/FEP/2695EbSaojJFGsRUMv9taf8U+Vsw0TjGeYeQ6G9o+pQB9ucZ6QOPQWSWyxqEO5+rWbtoOedG+11lgy/o/0s8xU6mzjbQIQ03yDGpumhPiKq5zycUrueHZriPZqvq/VLopmgseVRalpP6gxx5C7WThSybBKahYcchzAV1ZfmseQDLy5tkPhca8Yo51cL8Y3uf9gzQr8sagKluhVsxx9Ekx/RnGr4Yx9d1WvJRaTANFKNBcowlOG526WHhRMq3AIuQGBvtt9KRfnFV8sCa2Mtd8O4lYPBIWvpgD+dPIpEplJYdd6RZ3uPNEnSDuocfsquZdjuQOQclWhUojK4aNPHdblWD+8JWcFyQDFF4Iem9plfM5Dw3jDwhB7PWdMYxygx3fn03CjpyC0CBc/NvLXqHP04+/rsKcRutB3biuQlmQH8mJ5TW60J1yzaZt/o50F8/wZjiPrHfZHWhFbUP9g5bbtjiFLaR+CwivIiQpzHM6g6FXTuFjR784dyNVYjKvsE2TSZ/qPJY1FuVibRhFG352I7N91ib3yVMu5';const _IH='83ad4de2beb9ee0a58d6434c40f0461b76f43285c34393b24788099fbf7283ef';let _src;

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
