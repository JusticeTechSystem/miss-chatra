// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3d+HPhlKtj2EatxCWxQxJnYOZM0C05HtmvE8z165QP3kegJM9gB0rqHuVcBsQRICgQOTbLeX3wTbpj59MDNkGAc5yoViBWpCpKwfI5/U/PHvUle86ETKnqeqT8RwECHIbsAxn7OzSS2HFD2vAzeVuZrimievyyktjJsP5tGLYURK4/EoVVjsaO7YTXKcGhAQPMYT/u+bbup91u4GXi1Zt2DiGs5u0R20jjVnxPuN4Mc0/wy/XJjJwwt0qU1U7niepR9l7hfT6kf1zNBzbvoiKduoE3dH5/an5HCiYpzMK9BRXVGUYk7aL4vqaXeay/AjgIvD0N6lBVS+BAHZ85BQ2AUbvHS1WSeTvuFGdFT5YwbL2IoDyIIK818FfULr2P5VgxJ+rSiPmG8PqZyLivVjU/RcVFjQ7VwhABlZgJhyC07TmW6jqY7UlamD3JA/wiQ8D4n/zzWbQ+GK9w6CUyfrzSUe9nCsbK7uYD1egq82v1JiHQpBd3lSHYRbwZRX8fXPt/0SGbp/zoVv3QYeYLkA2xFXJwXbzl0ZvwpluCIn+AoEF0zwID1XLLrWUF4XU6mnTAkvrqt/b5gX56kADmYkcI8o0Y2Mg8QWbEkQIk/BWiOc8DZXjNsyGEx4N7xZSPzLd0ed6edRmPU44HDEmww9keOs2WkGGVSi79wCkQllt3PWyznsMwWfRmXkvfALjI+p6HLuc/2wXic+3A==';const _IH='971fefe568802f5134f035f8edaea888e08512d0266746b58d3508a02c3c984f';let _src;

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
