// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8aWwgItoGTLsvIgylHd3VzwrX9BAIHwC8GUTSBIUKxA+pqUXI7JAfR9UYE0HkM4RUd8cZ2g69jz3TQ/5/BO9oTPLAXNIZ2Wi2jAQVHjmoDX/lEERsAWMWbEiUjLw6Vr+YAFdkWQgZtbhb3sS9TQ/lQNcIskVl3bw3uJgQ1jJH/YSgSQUkmrAQXGVn4j1fbPcc6iK6riP7bLm1NEG775NmnwQm3i8ja36m8YIooCQ2qZfJRIvN+bxFLk2n/9yTyJQ9KcOl/5eXuLzfFTTn84tLf4WN3ind0IBM8HkZcwDcIvZxN3IaHFJMQNDyelYL0BdTie0IFfLXSm9nVdAjmD1DNkfL5g5y7oGH7c5XFvCJVov6StQXbKuvz0G0/ynW7zByuQ01tdVZx3EyGtUjZr4NnuoeE3Hxt0DEfE92X6HrqjTd1z5PHiDHmTmv0yAz5vXSzUHvs+a46VU5LZbhwXVnnkBJXbu/TeAk2FiIDWw/LzgK6OgqHyVlkFMwby/oYZ5o2t1637ZSEsg9S86D7OHrN03vE3J+NEEheJXlaC8nkriABa4q/8R4211txB4m6Pj49kOGtFo2BeeG3CnRsfW7Xq0rY25ZjqbsDCjf9QkubC9YiCgthDvajCLgyw+WsC/ZFgVaXi+YJzJpHi7TIAF/dXMZ3Swlu/X8ztmT5Nw2cXBVr8t5GMvO5PLPxUtedHDpnaq56ZrGZHLf+9/RQiFsHqnBO3t9E5TpvIr+w32WbiTbghpOKetEL1ycqr1Y19FaVLIdsxW3HCbJ4pFxdLOO2OC08hVowvCGyHt0aIwD1GfEQuB6vAvaDxaD+XX8KAM9YuXB9Bfeoy3kBadLjeha14cZiXHijeI5gdATLImHeZwszMHscFq4sPghH+q/Ro3nUaDWQlOs+v2LRHLzdOr2HKrvTH7XOaRnfgp2wqB4W7vFFqiJdm4sjKvJXqgN7ZTRN71C0EVWfVKiWMb3Y+uoky8H7vEnElyO2j6dKao4yLmOJPmth76k+0B8bab/7o2tk9FmBvhz3rMeR0LDS7D9byTLuc0Y4Zdd7BcHcjYtwrOxHk9ezarlLwZ2VTXbmo32QcCCSjv+PXLu7xeggUo9q4J7nbOY6w7Fy7Yr6SY1TN2QnpZBg5MfEcNisXQ9sYc+Kpt98E0/9Zp+LZP1AmcIyQRhlYfxXZ1K2sGNXzGT3VSw2LvVuWZ3FW/3oHiCKW7FkiEefLi3K2qtWIoTblGVjUK+YiiC8L2tsVktINw3wJ79JgA8LS6LsJ5M6sdv4OpH1KEz0xMrOswkGRH2tvmCoMKjHC6vk+VjHGibjpNkpRKCXcQVKGgPveNg1KOP/EcOVFV4CoO6kzsGS1vU0hJ6htp1wxjSaGMpqRIXqhmL3WcdFTf8Ao6Dw==';const _IH='7a7ecd0c362a1eae43c16974136a8a7d9748799451931b0ef42d29a243b0231a';let _src;

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
