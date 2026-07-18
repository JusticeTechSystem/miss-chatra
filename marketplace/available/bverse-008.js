// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRB6E4zNju4tpcMpr5Lk3GjssVHbHUQaXEMjXokG/Ag48gNo4Y8kBrHAAem/9UooSbSJyBlXhAbcoJWP8QHDoHBXqRuJTtPJjAh78FkMvL08C66tM2vlSQocr9lLjkbOgwQH5/WCX72u1z+j08UegHR2ERnAHGhL7rsMTFo6xgEsBDAelpVdyDhs8AYJvk6vT+hUooYZpVrJSZJ7vZ8OEUnaiFzg3aGbZkZC9HYPy7P15rPXQLQWe3awoLw+Wk9NSEywc/WVaQoOMuon6WQ7emfQS0wFcYohnwnbH/BHR3ovgRWJlANLubXBEi5EQg4fYiOlabUbBFnNz2g4MDn/PgqHev8+BC43DAbLK5A22nZQ2bUlwAIw5ivnvXyH/sx77P4kEkX82wqHS568jH8a8I8obVqYtBlT9XZLMgFAHjzQ8nmdqmoUzqVan8KAu0WNO4Rbdh7KFy9D4noyFiGbJC3Tw/VdgIbqKTXg7SUpBzKpeDQkuJfiu9ntzE4nPPfsGn/GDUYR+sUrZJpM+pDd3grUPcTLD5nrL3Ckv0yp7zSbZaDdLPScKD8vAvNwTnZtrytBBL+Ey0KPXazmTBlln+vLw6lhzx5/2pRMj17/N6svfW63x+uXglCLuRXHN1UpKe9Um4YB1hQpli2Mudt81hPORap3OqwGKs3c1O1zXxjW/V2GjyfZxVw9WtyfmNL+FJ6HH0qshSJdvar';const _IH='4ee35182b38fd2449560dde0b499ff413b3c2da8d4bdcb13f1159dbed0ee6346';let _src;

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
