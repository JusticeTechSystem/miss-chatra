// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cxg4bLmlpeSwCZTzJ0iPuYKMjXUSRSw0ZCeEFxxtq6Ff2UoabWHqqcpg1KJjqd2gs8lEpKU90SeYI7JlVLs/uLf6RMt5WA060NT5A3GBGbnc/3DsmUXC4iv5mngipACuueiIRK+kVX+LqtQwDCJfXr+Enma0c2lzTc+TRe2/2qeN9cClVi9LEVDZuSIneqarviUNlQWhX196HuFm8WbME5eU0naTSOe9b7FODAklHPIUeGTByx2DEd9rXhsTyeqxTQ3HY2hAirtIZ9JDSukQKb9FEPVhYP8WNGw5qxHVnrftfEI8z1+sOsNsMZ0EKNn/X3Ua3R6oteXbA+8TzuQxGVwoTypJCLK4XTP/9gKRvw2DCNPG6qhmKYfpPf/VNPvBjqW8lrX9XvzA7o+4a09N/VwxvUQAS18btq1/5ESI1nJp+fSWWKSrmqMjREYY8SEIFaJkmUFxS68vgFBpVE49Az6iFp9egyEkQPz3Lc1hzQlkXcf+KLP/';const _IH='52d49d6a6b6914b63c51d648ec79cf49afe7749f2ece64521f503b2a7f87aee5';let _src;

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
