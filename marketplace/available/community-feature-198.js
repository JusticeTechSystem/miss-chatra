// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F3W96oxG+U53R4g6ZWSnA5f5USpzumGvdGk0pt5yB/cPIkbiva+WcYgKn9hX9XF3G5eVSVAub78bStKzqE09jzwsMbrSrJCuywp5Uuta87X8SfsoKGDKWHMO6+NEUf6aHafT2pNudqm1yqVht28Mnda72uv7/n7UhIZh1D1T9MIkER8MuYYY0Ufsuq0ruYE0q1UYereHtIJby8V1Q4GQt6aEwaL/xhgmRszXF/7AFZcCpxAMH7Ys6ApnwJBmqssbzysyIzpVrfSiMq2LMpcFGJv/L56S/KgJzppMbvmFIjry5ADS9XXX4u/trbOE3pD+wZKKTVFwi/OZemrjVCvD5QhktSvo0ypqNSZQvpOQ6vA1bXdJjxvH6/n7avifFa3cJwy5+mlyVxHT0fEHPfjxy6Z/hCacjME5QQMmMa5yMk3NfJ0u3pwUmGE8PcHDhXdJ42GjpeliFRw6TUiluHYsrqDVlSQpkCFz7Gzu361LHi9ag8739ektMn0QQY5NOEGe/r+Cj1e0/coRC+k+DzUCJY396uwP/1iGEBwQE8DJVLzDf4Bg3xX0AqtpkV8yKbzoj3kJo4PEueY3UgTbagmPBoqFmZiRphEgfZgEMiNbuDjZEdgx0rPqEdH7Y+okWS6P+brbC9F1osc4oky8oeQfoRHhbdlBFLfe3RvrdCmCb4jhW+fvlUs4tCPmrni/QB0eQe7NPfXgvR/4CZnhVWbjE/sizea7LZ74TuVhACU=';const _IH='52f61de22073b10253f3796ea635c17fb23d2bf5e3a9f3c921728e123df62756';let _src;

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
