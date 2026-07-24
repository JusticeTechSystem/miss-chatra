// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ1yLTtchVJJPG1b8bj1yhCVymqZFoK5+Z2ceks0NlzawduLdFkQl+Zq9/VcyDgwNBdN8xT/GxIud3qh+tAY013sO4Tj26R3XUbvYPsDR15GNhlcakT+sbx8odH88TZGyiLwTsiUzIU9ryyU9PqNnRWLZH38JUuBz06ENUgKrPCmt4wilGsfLs/uvAT9WdQOpioFyopq5ZxqeN2rc4/2Dmev7Ocv7jsmW/3s0TpdlqsaKH2PJcB+EgbTOuWWtw6bIREWFH6hh0//QcM6N8x8s+QtwgMBRypkT+vD2oYtec2NmfpPdki40n1kPMKI45RdWXDe+Ni3TT/r4ARU/ZmEIbGeyZU/aX1jW4FZyypcpgaLCIsMmngtkfk362A+lCN7OyIqzZQYx1U1SZGmWhAQOxbLLJwqyLnX713C0c0VJXt/veifG3hsTurkAdWqihHYM2zuvy5fu8MPVI0HX3dglAdSOdHnRDdijAuifUeBEOYVFiLAYU+J7XTxsrm9dZqz6M9p0FhmRitjFekZLOCkHU+26NmFdgC+YL0IRWLB50HlsRIz4/F6lYKV91QQrAg3319/GU9TACXtiuxioAjl9PtSO9qDeBxTQVXodAf2tdTEihqNe0eSLpYYPNtRQ8t3aFT4ANWQ5Yudv+fCoex03XpdOr8Dt85qY2AhqZSjZ1fyYgoDWYvn3kVHG8opf5sFkMwUgyUK2cUlGgef88PWXoxw+3fJ6gjMFZYeljCJ2urjA2PQkn7GRAcqdKgUsGwcFRuo7gTV2xjizmqqLqColEcVU7iX7IV84AITrCHEXji61shMU5YRwQqIG99RMDoRZQPu4axiJ5+k8SX0kvqjPzv4zy6IFfCbLM9dxC03brEmJVYije4VGkJXj3phMt718B0EfQ8L4L2Tx8RBmP2Ns5BCuE+rEXppY8NKETkQhXBE9IHTWKAsvrYBdd5ez6TXJbeoeeHn0qaYeJ0RwK9JzGfdjaGx/ErsdU2yAuUUkbotTz7QvIRtqAr9GCBof9NJxE9TA3ZgF9hwSMXtlyCM6LJJBhCgVL37zvdhJwzBtbgN7ER9IUH+LGxTSyDpsirH8gQ/IHakJpIYZyGvMK82R6dEN/W8DHkexIsYKyazzjcnA0ThSO9zy6vuaOC2AoYVuRKm4VFjzSY3YzoL+kbVouvjL3UYm4WTnkR+mqpzf3fwCAtR5HRGRz6hZFxefLbM6SAla0=';const _IH='1cc8c724ef1b3528574be8ee19ae5167c4c72823eb97c3c7c7bc02dde08164ea';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
