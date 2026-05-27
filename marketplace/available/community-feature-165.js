// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wWYIhX6RXBBYmFueU6vPzOXRfE8+VPGXVZu8/dHmOKFgAlwgrTvqv0ISYqMSCYIySyGOaPIXg2p+GyY/Y727agUe2s+P0tlUGjA6CZt9E27wmVp79Rlfg/7uUTaec+9DvqLE1wT4eLgGWEfi7/wVk9oGgZYY4dprFQVZMHFDfxB8eVEcjamKFlIKxXA/K6bxkj4NccEoeZSUM8KRc8f3Yg1mBaUod+q06R64jGNn9AqtYzz2kYg9ePvPYsrpFbcdHWCE4NHeMHk+aqpOACgzXF+9YTd/8kCwmj/VndcAgyvRh113z/8xFzHwZcEbJdgCrEl/tsQ7KV9gQ4rfgH8eoUMfYzs37fJSfe6cEEH/1xhIUMF5O2yt+Pd8F81KAueN/Y18iIoTiQdG0aIJBsHelB+WBb+rTav+xX+R1B/NeYZ5T9fHzhhJ0PJaeheFozH09EXGYayKYDPWPqLF+zb02I2XoXutHKbqJxprsQYEXIbgoZgHyjK16OuXE8x9r2dQK/HBOaUbFiOaszzj5dFpAsvS5c9D5Zizbu9otSZplDpq5ltAVcf9Bu9PA7HkUKbu3KSX/Q6Abgnjg7Pi0NNFebPxvC47+uEG3RkHUqfBrjoYhZbG/8Gtmb9xTgwEFXbJQq8SFC5ZPEM9M+fCa1eZx3/cVdo9gFT8shnwIL9dg4uWz7Lz9R12JimB/0N7bkLaft43ZhfNGwyjFi8vNOc8KpjfQUSslRCwa1sg0ZIKydFwJroFOAvzHFlW';const _IH='ace54c9e996fdd7626392c3ed68bb57cd5fc3fc3999397e04396e3074139e49f';let _src;

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
