// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxRksAgQ0f6biD2MOz4tocEPmNnAAjC3sVWR5xihNa6SroifOv96iYYBn92+F0/AugeHGANi15UmN+KcCKFbztda0+jsVYRq6eMbMO8vD3/lAcKNX6z53uEAJaswt7oMxl+JZ7UAqz0hD3pH9bJSMYFHT51PHjVa1QgSThWKLrfQDm16wfMMsv4nxJq0eJ5ggk4TIIHVM8eoHbX5W7p19v/87AkKYbP55rcvGKVixKV+DVP2CllDOgw4KATtfL59JMkF2I6Q4AfioPPZo+SdoEG+A5Yzpt2lW9YmFMBFvkrILG7UDRNaiQE/fEi29EpiADQih2K1hS/9nmzrzZh4bmPgjo3P9BImoi4n5Q8X58yYjFvQi0JGTwxO/91syAHUIX3ZWiX9Acpp2dDhWYyq/WOS5Z96RIIA54lOxM1icJAjQB+Qk+Yyx9+XSY0m7iKTf/7F8p0AEy2f2ph03W6gM+d3TeifO4fO05ZtlApFGde/hUousBatggwx3meu1L9QN/AMLGcArOpdvMoEGL/zIK+9j5jqJG6TW3g2BaaLjDx0JsNWeSYTpMTnDBD9Qgb2X5IX1GYRNCa8OHgctPaUuXRXwit1rYpBkBbCcUmotxkjRqv1/d6J+qJOyPqH/mmPqzSxx5plZ9d9Ydj7JWbFEljBggXSicz2JtnzJ7ehXg8m2C7b2cnabKFrn44Kq2IzKA9RL4iG0zmsKR5ypP2dEXIRky43yZx23DxNFCWbgUlnWZQ4li9MD/brulHmPZD7pidcS76mUOeAFtr3dndgiZq+E7EgKyWCYBK9ekUe594y4xZ88x2YVSBLteVUaItSbTVeGls3TZbFUYN4THZgqXjCA6w91CAEci831ziGNC0Q9Alk6fU1k55+xUojnABim1JKOmTX1v8Cb+oGu1Z2mcVpF5HyTEqaGAv/eCM1gufq7n6j7tVOrUJMQ+cHgX3agcTibwM8rrOCoqgNatJimWkVQxEzyRN23TvCgZfEQLOmR9glxMEyZ/GsCOTwepRlf0WfxJwzd+PwP31nQFArqNfR5NnkXAOyaxyF1hCl/u1lwezRjeMmcOIFUX0LG+KxxhVanGm97Tl9re6eIsNWb1b8CulnNQO43woQGw11jklnTs2UtPWtqiDMF/AEJXKs/CFzjkcpQkg8IGzHEaQnZe/7CuV2hNap62swuVtd26W/g3Ike2/bsMQ9FrylrnpmO6KZcBSHH79GLoHMrmQ5vGfAcN3pA2SStzPfJjqaU626bTG2uxsTU+69GrCvGxynKAM+W1OgNCIMH1htrR1tU1XLBbybUsxw0UMBZ32j4QM/AwNj2JJlQMDzAmG7WsejEU6w/rvO6EWarH5D+TK6ZA90BCTbOqMkEhBwTMOZ0xuDSCp0m4/IhI6njfIynYk6d6q1';const _IH='2496e742a00ab0306da5ea1b3dca6c925c5f5e709383a5974ac1c8852c4920c0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
