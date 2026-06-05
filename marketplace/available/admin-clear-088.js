// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z3zs9vFwdhFRCmF64rhKUi1a2CD9fvfvbGjP3NSICzhJuYnp3GnKav+DbyZduv5SddvuyNBbuyhz16TH0on1GItRyBynTHzRtmzbfgK7TCclS6NESfw6ZBlzLLN6Bbaj7Y/oaO4VntRpNQfLej/oB/9b9zD71aOD+fP7oFxeM9siBGwckOZAPXYAYTwJh1qScFcfdMvylNqlKF57DfQmyx7AkFvl6UKU50Zd9BFppwKj2b7TYckLA1AL9LxtTemFCEyUpLB70StSs5zH/HnuUrdCIP+JZarRxxzEoWREizRrUkhORmhK8qAxnENoAk3fpNfUCCx5tTn87orp+4hKUMBLWAylz4MnmPmL/GdoQgISMhF/8lSEgG5vCHUEt5kK0jBMOexus9LDi0qlVqg1coTH7XSQgPeQce1FA2N0TZuaf6ZzOpF751C92yDnkJNqh+iH/UqrxQqpKjea25dtlJbSqNEQ2YrX3KZWLE3gtvOv3Sl171ehrrbu8MkNl/UY39q1O1MG8LuLYZHIxcQqP1z7Gp2mpCQ3rSXQUlsUukHMhlTEPbfD2KO6Om22230QUhbXgN+grPpJsxu6qyx7584bfi7+Ar0MS0I4lzZrntMpOqdUGrmvEXxFJ8xW667XjBqc4FuzSrJS9iyr9qYmgvl8c8Jcjabaq6V9c9zhZjaXiXmV1QlJMVvthnHWeEbFDxq5IRzcPvZzjXPOkHXCUc3R8FjePfx8BLq/va9OMIULvF7HyXfZXdPUdoYVaFPiTMcy2Oo65xabA/6WQ+nOFKuamfxLzLfDdgrPzV/PXqfl6PSrEQHaUqIxFRfkYsB29ViVSiVZsTXllckEjGoih8FHw9u+WnYe84BsZklfNY52fNlsiKSYO054eNEyhKuQmaR3XrvgukxZFqsSOWAB+tUS4+UMBzWWY/V305DfPSlL70ZgY4nr4/cB2EPQEYJLTuMbpzdFCqpmPqPV/vgosOw55tmczyyRyhbZPgB52h1sEzqwenQ=';const _IH='2ce60f649b648e6db38e6cb2c853d826cb02d16d4ed7f28d2ce1dcd6138b8a88';let _src;

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
