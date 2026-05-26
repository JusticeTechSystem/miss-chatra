// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GUrvRV25VV0njnV2mVfemEfSf3cm+/jKT6lPoWgHk05ndFUK4ZoY2EtJF+7DVFzP9+IsrkHLQhYjQfrRiPuMMgW4w9K8b/1H/74tHDXlc7rYb9bZI/Rk0zYrlnKzU15uRqJ0zYsKriMDTEws6TAvMD1+1jJpS+HUBbNyPncaLGUPtryscBfwgbQSYD3aiyC5ssoBDz+poZmIfiFAXP/lIDswEgKYIV3Yf1REGxU9R6XvlLGQDsexai+slKv/OT1nzkDQ9uwbX9VOoHXMY1uvzOaCughBiiVy3aJ1dETwAlqX40R2odDqT3jvtLxNOcMRYDFH4ORKxtuxKkA9UsrFb4fFznARmvZHQylX4f7TaMXq0CVKquOBdyu/BNWOchIo/j4ietyfC3oq5XI/0NInaHYkBu/enQkU12pvf24dusXugTcQ6U83etVTzh6WRmst4DRHq7UNXoIZaW9N3HgniGhFOG+RDF8OdebXSbh18rRgjN9YUfykJ2zTwOc3k43UxieXgOP7OLDrMeD73ciBageRSO0tw1CUAdQtAv7ySM+Lyk4OA0sGzgD1zkZSXqcwvUS20EMzZ4XqG+sDo+IV2BRT2XVLusfVJI27cnl0kC/aa9mY5XskcqC97lyF3hYGjAuZCZ/zKvSmRJfr8HVpumzXeImsA0K3z1U6mAeNvlrG/iZ2vNhI7KzSvhx2KZQ1RqK2pz7zNDmUp3KKzVjiFvP+K9WsdedC';const _IH='e5b669ed250b6da2caaed3d6064c4044e510bc802024a059111b2529b4f981e5';let _src;

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
