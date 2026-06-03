// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RiesfNBFL+1bAnqu2WhtpB6rMezWmFwzNmhHF7ouKe1RpudX1kkKbjdAL5ramMEvLjan4wUpAfje7RuPL1CJzIOqMGP8twvIlToAj/MCMRq7KoGhYLJdyo3a4dN4DvPAlqJrcLHy/fe6EGaAwVkJxCg3mF/NhvzDRvuzJMv+20O30M9SitqHJHqJu4Aw3o0Tg17QQ6d9y3R8EoXOxMcDVlM7npnEC7wYsHa16oeBN2DXqUcdNzeqjw+T9ku1U0KK0VG2xg4UB6QPiXvbrQ7tLqPPJK4dDvoJe3gCOCZAyAU7VdRURi2O5E1YAAKpHfeoCpbZgoGHNV4P8373puP7R0IMnuBmZvHyOKdTs+Frlu9FYtsz5tjeHYG60kkPxbSjqwZK4PyvWDuc/ctAxsi+Iu0MbcfGd2jyFXx+V0Trnp+VRxmfPbpbhqIwURYzOo8lgSC9L8w+dM4JcoF+7yYUtcGKDdPrinZCR6DX9A4FdVfGk4rNC8Lvx1BxTBE81Bmtx9D4lKT3IzdZgtjaufUWNvEh/qEQRvPVN3d3URb7Bg8SHLOyBt4U0k3oIjIScEH7PVqSyq1AJjwuNGyKQYSw+SnutcsACA+mk7lSlBkZVVEQBpNIloRUhSyE1RHlYCF0XMSwbM5tPO20LkUrNjpRmkjsR55wKMiZ+HK1sl7Y/SHLhqCwzXjivTLQHcZj5SHk+oaba7vE0kR/Zr960UJorls14FfHBiq4YZPEgW9wPj0gyXI=';const _IH='37b0d1e115d077a1c755de78ca2ede784f585978bd918bfcb936c7fb6a8c7551';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
