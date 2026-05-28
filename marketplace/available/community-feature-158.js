// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2lNutrZoTcOoulIe45ETs2I9nJR0rVL3AzX7QDu7KOgZrMUBuabgEI423c7hwkyJzXjdAM4Sih/VzfirDwfhsB4VkkHhxVI8oo38eUJQ3OFwXD7JhHvY0OxsdshUoo84kT0+v45XsnZ+xSNry9ul/pLuM56CKIY0eA2mAqTsGHDDqcYhKdZrVcKOpJKgKyZqkfiuHRzJYelxdgmFM+nkFTw6CX1AFF3rBhjwSkCy6AvYCS84N/8QBZWcxzaUb91wE1GSYYUwRW3S+XnpryYTTGIcZSg2xrSI6KZAosNkzKDxF0pI65anmEjuSo4afGGzs/ZZPGCB8reYLBzkx+asm8liK0rZjm6h1pdbWnigtdGy+N2BCCHehZjxgqjpIDWlkXA7MkrYtAzXXDtDiHJfUSOV5q6EmRoIIP3NoEFVHj97eDm+0v7AKv+W5a2GXynMDG/n0UR5mwKKJ1TNk4plJLp/rxXj4LeZinhu2oPDSgez8E75b083vv7J4vx9TLx7GUxj6HOLRFA+rdVXK1XUXreVitI6d5cFltNFaobj/UKmpUi6d7j1sf424OwETKECUuua7yCsbxi4HMG3pqp/YwstnKziRSAIKQWvodxOyB4Oyd6u78g+iYSXZzkRpJYyDYbzOdIs8iIwTBse7a1V22c40ln4ZxJsyHVSTv+CK0JZDVgsTcwfX487SnpBldgYe9G0w253/jbJsDjpYSuCGgqUjw9S7Qkhm/FzfdE=';const _IH='9351189b5675ae61db89354057cfd2adcab73c17d2cadf6f0797b8c491776e33';let _src;

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
