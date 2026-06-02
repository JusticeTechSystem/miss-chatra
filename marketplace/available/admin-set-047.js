// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e8whQcSmANgBQ/D6l6tzuTONobzx/8hWAjx7mNZqQbW+XdUfG5Y5EEWpPYTe4QDjMEHzH9eF66jQHyKtK5PXN+8OVx5WIsJnGBAzkLcTJHz2HGzgU3wYWYQevPt0y4IVFGHyjIbKmBNBaYKFcck5y7QCazPdRDOBx4pyJMqkYXXJ0u7Pzi7o/JXDwu1N37ax/RMrJKkMNlHJMJqN1lN0w0WHL2SQiaZPYElvIeqiYJ3spad1alqFMEkFez6q+APUgN3CyhVoquXmT6qxsbduG1nwoUc3fOwFLbBILmFkOYcw8aqS/CnmP32aXpypaWN2b9SPGr0kgOqeD5EziMFCAJrqE40/xMheDo64eYlrvCidZTyHK9zGSj3jWodKXOMl0btPlM3S6oAZJq32SLApD+0+iimXSLbjpelaDPkqmeuLEsZvtsR1PIOLNb/KpE/U8GaxLGEBAGaulGFJ5NchBsIc++LUac1l/f4C4rDhfacApU9ccciKJwAtB/3l6OV7wjVWxXtUsugo/Gp5gH/SbhHkNjdN22LhEB+pvPrBTfD+8wInUPqKBO/2ccSyV8cEhBRwvCuJLOCMwAcgbMVc3SAUEvV1UcpV84ABHqmkIjBiBks41Oy69rsJRWVzQwQecBNph3lT2s1v/khNY0kw7TZJ5Wg4ByF9G3SmeczXo8UZhukTZd71LvlVM+ucJkuHlhA0OHzrj1xhZkMfseRVEKMi9ibakj/xydoCpPE/3Ucn5Y6zptBufcuC2keli+tOIarFcbClPJcFLAj4AofCCCLn6q7EtNMFmNAvTKzwJx2NnhSQ7O4602ox8FPg2uQ/yiWFurHw3jO5EcOTouTys18sLXR0kOX4uA3pLONmHtpOvwK9uGcN2kkZQhg348N0DhLb5t8uaoaQrZGgEqDCQR9k/L0iKPoIlnc3xqhxfh/pQF2e2MpYOgjyyzGYyZxL6oTK+7VV/3jTry1SZ0FrUIRU3N8yigGZ';const _IH='bd7113e422e3c8646106d348891fc76e7894f01825ac4969c5e14773b4fc26d8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
