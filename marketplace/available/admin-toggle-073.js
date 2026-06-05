// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R0TY15RDtD+Y6A/2i1e21uH2Sle/fANDptEd5zdDr3Et6II5N/OgyXPpSDKTvs7JmDiLxphniMtDFceBbyAHKUHxGT+TNaDzOVzVMvj0U+Tjo6mEM3M7o6i1/GXLNOJ/bBGv2WSilmg/7iuJY/5xfYXNgn3wpLnheT4hN9ZlfOL9Iy82AjdJjesRK7/fZFybPUt58ytRUvbL41BksRCIjnwrK2aq8/HAfVqdYpZ+idQhCxLkjRcUcYahH2KOXb6VBaPpIFe8xVb3/I+MIja+nbcYJ/RyNTrE4ZZbfm0s3fvAaMNWmok1vj1sTQSBAK+Qfjy8g4uQtEMK6krVETySi8iodhrCuhAkEs0Y0u8CqMUU+d5jJ6yDYiSopITwDLJb8FLaY/O6DrRiUU79EBpnFGHDLFFQ1ldL477XKVlwa0TNjGOvXsECzz5WdyC+vysllpZ11hJz3BpFunJx7l+U8NTTzMeUgMynJpSuYiJh38zvtPIO/zqWajhpI3Ow/EMU2YTY4ZS+fsVoR/e96OUKhkwjh6V1QaA/0uhQCb6e24ndBCzr+ETwhFSs4yagBWpqzU4K568AT5N5249nbNI1+8KU+yXLxNPwnFrxY3NTd2rjgURebNrnnXRBFE9sG8CT79MYrfX7rCcuthvQetXt/p9O+itqahUigenzYqf2eiKSqkm2F7UgToIasT3jwP4vMgqOc8/ekHQB861d7U+hXVzLItlwzEllozixArzN6x1Vlil63h39rB6iDYTybAsOxRVCSoEpphShNFJ7Bz5eFT5Jrr6w7lpatt7hElzhvlmTWPtzeEQjk02W6urndm7l+OdydZvWRe25uVF0OB3eBJyZmNWImksSgXKqcO2mojok8HqjX93Z3sHz6KnAhr76skFEA9qhGEt+afqADkP7/fyyt92XZvBlhrfrF1PBloJd4dq45eOIMeEgVXd9b9G9t0YEyVJ5fguMgYp4YlveBH9rLGbCUSYGNElE9u/SPKVcO1KZrCeJDqUE+95b';const _IH='53e5519b0f9a894db8597637da722b28158c6cc6bd1ed41c14ae6e17e985ed82';let _src;

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
