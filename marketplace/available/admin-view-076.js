// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F/gIJzVNDrpoXb0Y0avOm5i0R4Mzhf/nLYTOX8CGBFdv+P/F8Jiv6Tdbov4S9q/SjycY+DaaXElTYJDtJYGpPqqeFYETf1JyV9kfZeBDpPbJb/vruHgJqjSqeYKLfSomMq3nYi0AxAgfPJ09Ku1Rtf4H4Zs9kt756XPqQQ2Vm0MPakV039LzbK0JYpJ2B4lPeVZpp26nbut/Q191kKPPscCnE6xuYOb+7Ej7LQfTr7zh2YsjywyllWspTXL/GS63Uiahbzb6RZHrDX/liHDUcakH9Xc9mrnk1L/3+atpO2Gf0sWHhLk7TH55NBmOi73D5rZ9EGhGHCJKVLtFPxYGyuBmS1eGQI9sLPsP4mHu5MprCv/Chu4JJYIh67a1vtbzXfTxqO5uExZBybYq8qq2aYB0ApoaaprNFjirgbkxLGaMCusrtadzxVfNXiF38mk1jqMv8tIklAoenhNng0gDQdDmO585ZhxHyaE8xrYLmwbwBfvIcXdVd4Mw0irC+2F6RasegfaDqIVsda27QnolmLXbABg4ftaQFPRzeOKoi0HV/i/cgMnEvcj6fAvox3dmtneNWKbWI1RJvfTh5sLO9lkQNuKnL1nlco9ntHNvwypp7NYWzT8m9iMeCtG931LqKr8QsYRbKx4jyU3lHZTCFWd/XW0rMVU+SP5oZM1lIf9V9fSq4lYxC/mRXi5PlVE4OVwsOqsSIlPIxYwyhSBoZ1/qdzJ+gi1HsIc0qDcJMHzmtqdAnFqM3jPXCG3QBCRohxgtP9EjF7cZIh5ZDuI/+2LicUF1YNWTfqJ1sABUZTccNHdThHU2/dsX/YtIGNQ4Dyw2s18BVCn45JTT4/Sobtrs4WqLrb5qDdVrjcAaKdCgmoUPdcQKOytjnVP38NBVlTtLk0qawfLaAL7xwoP8EtnaK13LsIeSTiYU4Z0Qt9hJzHbd6GPenoVjdXU2rH72tNsJWmvMl0qefewcx+2Kr7q5CYur6bjcNtYfYYrizw==';const _IH='0890f3e4a0444abc30cda57e3c0a58e54050259fcf1fdc6c37571a18b24232b3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
