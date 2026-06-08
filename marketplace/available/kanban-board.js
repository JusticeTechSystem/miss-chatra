// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7bX+OMHFGywgycleThZh5UccYyor4mGLtTfGcgnnHNbAh1pPkjM0K93CnzJZ8hWcniVPDrvytb3hd6/1Hc5TntkvHqsYGz/LPu4jjNrv6H5ha0TC7CkP0rPZJD/SAyLwjdawVKxBqcEY3jIKI77+52JSPqraLbXXkuyxIAAtkLYA2QOCSbcIlIfh7TM3SN/jHwuDqys9MJ7XSR1lDKHZB1ikgyqJ6Pq2wKLJI1wQLEi4XI5kc6tdVOHKuWqAUH9ayuL5c1retHrgttqjc+jtthjajsB/9r/udX1Mt9AqgF8DgKA/dqlcGM5NV7mFlYifGDrjz0b3XZvLmj7UKxj/VZTtniOuGLjX6jxU34qfuTYGIe7A87asbMr5OqNzgZUnWXbcCLE3NZlCtLvQUUylB8UFyw7zZ1WvReooIzksQpYSio3uYjEPYw4blgKKM1Kp9tEQ0yQaKbPhQsIQjSQ+aYRxfNuKWcGcyJptKLRlRL1lPGYGWGJWhkv1aj9FePHwTrNVnB1Ol6+wMZ++lMpCoyNy18TKpBBaGcwC4t1SyeoSK1LUzH9ZN4zxy8r4eb7dB8gyVI7ar+XI0GrT';const _IH='1c437ab7d97a3e76f8f15ffaca31e7cb528cfc47c34be8147825948ffcac0e97';let _src;

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
