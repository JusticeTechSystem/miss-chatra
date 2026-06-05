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
  const _b64='fqkGwrCG80oA1MlVeavng7afB2RY9e3L4OFAw6K6DzeGoeIpAzjvf7jfba8E6rsIArfuHei+8O7y/StlYF3pOS2f1rJSw1/Zs7/WMqyVr4mbKWfPKzvoZExLMd4i5uhexx5dUmV2Fg7V0Nwu4b/rUmQttIa3to6swxX50oOCyp0xHlz5WswIJ4q8PuHPmS47RbB+nBThLs/ZobmFrH8i5gKZvwSVp+dDbY0FTnT3HfrPl8hKa7pTmC4yDW5qLflmXs4ODa/d7BkeHzbmkfhKJJEMu6zdDrUpDyUcMJOpn6M1iza24d78rMfRnNG9KEtMHz4Zrw/YnsCWqFH9lFSJEpoAUCxxLHMhvkmZNwuWAMr/EWr7OhXTZzclDitLqcTiDk8PtqmqCB8PXe1mLslzeZg1EtDNw9U7lB1K6pQCSZ6Q5cyMoKxQ1rPCHReIShAD+lfYWI+mwPf71n2pwnYx7LYPmRE7Fx3Cd/H6d9UwTS8LW3SX/ZWqIkbG0NWvc8BuarU5x/rrts5jDWK3kPanUnssGAj89HjFOyD3edOCuzmhHRMSxT2Ij/8kuiRyrjIG9HndxpEGpzw4voltxZ7cUk3JjchaHkO9koIp8DHgckg74DrastgTvUY8gnOlfyBnZb3inx8Esc8rIw3gqamLv809SRv+j6qW0jS1s1OP2QnAp4s54oSHYWHiI/YAy7T70sNv0AO3bj+wNnsqRx/TmYu3A1cFjWdP';const _IH='9b43b35d28e0e824c02e0d459ef303055572350a9e0f33424e9c8eb0336fa61a';let _src;

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
