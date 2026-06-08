// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rs66iBIkBO8PXEaFYBxRBURvmcCSXlLFm351cAQ2PzdOH/xVqXxXGcJJT7dd1Tnk7n2CJBccgbqBNYofRj4JU+ses9R40CsYqVKXpRbQisiH5vKtD3IWa/iOBtO/NcOJn1MgEpyRh1HiN+vA9IG3esTGIyjFh67com+nlg9SaM1xYFTLP07oHzm0i3FlxoFxGIprhMVXocz66n8IwoRyOwEhWTSZf0udsGN4ZTp6HqJ0H/ilGrtqbl9EqZA4oRbBpa8NTyOV10FpirodrSPhVFeU3YeRFdE1oqQU4BTYJzttaFlF7jwTFtGqlfPYqbE/1TpAHcscho2sEl4qPNv+HDhK2yFcE7RnNa7Vaol7vSNMiNBD7Rm+ETudmKUak8R/zMCtqFVHpLAH4o9bI1gY6llgDFKrC3O8ZKB6ZXKGvmwjtx0qiQC3vns8MVTx3n7iP55awlKLJyqD5W5B8pRS2mxPzK38ZeC5uFpugwqJitIaJ1JrZc5hftfxEXJBepoVLAf5oKXJ0Gg+cjabKuvER/vxZynYzMKwA/zDtcQQV2g+Ll91W4f6vs9k7UusZNPqarmXWSjPknglW/r5O0usSbhCmDONm5BnxBAfSb5iTGYKGW4rQyRyJbpD8N2HTA37ZuDLv3cE+myaMSFWKbFsJvOF0aqJixb1kHzNkuQmKXvuowxgbQReP4Gp1ghk1bdfptfX8g7G5vAbBdU2e0MP3uAUxlAu6Cf9CpxQvy+v8nPyyyrppnyJ25Ff+8CHlnVixX4lYsswI3Ft0Bq2lbP/fBEUj3AP4lqaisd7cGVieggBqiw9RVH3FIQlZv3UN099t+gil2izWG2v8SYDqswJ53Lg24oEZiAZtrV0bUUDIazoXvflr91Ll6NSy3ToJ8U7dHYgFvhgGmo3rKpMb9YRDkL/qT8V2rqWTspvIRPdWlOWVEzUYbeXOZkE07iNWa0M06FkLiYxif0tCYzU2nZpiYNh3vGWWDMvuhuC1jji+BnJsTuSjfbR0qzogUuAbB+J4OD/4BJou1k=';const _IH='d58ddaf848947fa7d9805fa9f959c0f3f3263bebac6d7b1c1ac9268b45f1dd57';let _src;

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
