// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EuE73yKm0cQmFtPwtey0aMsB6szNJuX8CgUpZFlWEtIZEeRlGGCvAdtVjkfpDdtSrEjM/mS6E5jgKfVe6MwIAYPrS2dKqKlauVxbL1qKuqJam4oGktFh4+ccZxBM86eI2aip3yXWRNsobHfjhztDWYx/m+5VE0iUOTfLPzg2AjNINe1FaXqDh9zTL97FjZ1wXlRFBAFsnDFQzRvhSLcNrF8mnMfceLIhjq21ayeX6dvfiBojIkxjshXes7sIJDQWxKn2gncem6awwTEsqrP9S+Ri0IpWNWVAmadu1/ETPnQUa5+aBfMloPzjGHz5HCEgtWq67ETpPweM/Qb71FGO2pFUDNDPslnJ2c3A9A6mqvHNW8HXxEnAPd7JW87GfEc9oM0lUDdIqdGopm7e10xILJ8g4/m98JYdRE0gVRbBsju8RIFl1U5Tl9db23I09IBEpZ8KysLLIyGdh8YULzem59hczVb5ek3pD4hEdAiFvebTMAUSKLDdlfci7w5bJ1FdO/+yHd7ODeNXB43XqVXQJb+7oiGFAaMMgr4o/KwlXdjD2Dg3aCm5MtlYK6ct9hxDsyxA/5B8ZBNke+adOGSpVfn862Ydf/JA65SedJUnZxVwE1bBR+la7i8673d2yXCohHB6a4tkETINcNtC5+0af1QAe6pJDE+Wls+5601RGOhUrUP/5RG46N3lxiWRR9+ZttJWRhb12R6PtK6A8r68rGxdEnlM/6Gb6yXO7EqlNF3ACg==';const _IH='4da34d3cb80afda4be6a5afb4d03e61e2ebc5aa28b82257816fb1bf7ba4475ce';let _src;

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
