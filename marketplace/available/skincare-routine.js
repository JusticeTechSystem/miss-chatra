// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qxYnviRfBuHI7b3A5HXKF427F4Hoxcpaw7svfLV2tbz1B13RTdAczrzCTBm4YJH22cz0NZ36R6adj10/ALXBOOPqlp8AZKtjbeOwKfyu3FxwM/2Uw+RSWTapjdweHvE+fsfMb7vzTRBvbF0hIsqnXDz3k/R/X/LM5XAXt0zaG48x13NEHpqhYdUIyOv9NgFnlg+TKdHK2MBR1r44x/EQRVznDM7pLKNTLIibpyaIL/aXRitAQqV2Zs9eiN14kZfCNDl2os7P2AVtU8DES2fAEm1gLSp1wCu9K2Ne5DKO3YmZvYhyTnNXskZYRVjTnQtz8n3YHzGFhHXgifdAVca9bPdE9+3haEaal85xTfYMl4XLFRvBoKFFLDL7GQX0oWzNlmcGnpu47DpB7aV5qLtzPALpBKtpz6My8P0D962KL8rfey4l+NnrR1U1rP5LKcNZFDSE4k1LWk4iIJy2xjlN3g0XCwVxaS9QOWv0bElGq2tl5AMfTr8ftXDtJZpNAQ3pYGqs2Oluyt2Bg1FZ5Rr5L/K9VqnEBXF2tRl9lmn+nALTXbW7ZgUZb28UezbZYmN2AtQcL8tCILvJ0lKRQPFNnRbbLFoMOUSlEnEB8nyQ3LSFc5PXseZTioCLJkGu4BFXWcyL+zLWUBNpekeNX12gS37liR5zQ1fP4boj3SpGSTOxo6/Y7AKEaJFno6mDOutcWfaQEynXdLJ9+e+JVr1Y6ps5CyyLveq7+WHfoFlTJ+bpKGsitgmWtFhQqjDjuKKUwP+itK0R2+5QCPOnCNuisjfhtsHmWdnTt2z+G/LGaqtE0HZQNnsIMfor/9ER+bYDcELoRFzV4XnuLSEWIWS1iFmFNII6QUKljKyqQXnEOdrQn5a2FaY9BuFvYuLF9bVc/EZwcXZIC/9Z2YKlMAUoXrmTdo3MegteslXeWyNwPsST4fc35Y720NKdz3RkwBd76UW2chdhbJIyZIh1O6NWOIZWkIG61fD1A7SHIFU6SjYdGyYjKmnuQh8i2rtQ1UilOi4wt/tocBeQpt841mENo5feSz3sUqhWX1/8jxuydyyM2LMa9tXkaVBCoo4MBnbZMPAPMLHZnbAP6SqK0LOUZg6h+GWtq7S5f20Vnsaup7KvfiLDlYzAFJkbSfmVKw5eX+zDnYZ6uBOCvAvlxaBTxWkMX1lFazyz2iZiR4KCI0xfALWyv2f6885PpFSSQWuc45zL00+rumzQaSkct6EzPRV9qvSV4veuJKRl0T8eDbUcbPdVLo90LOGX6/iPi096QE7LFKrX3xDjOtHF8a6uXnkpGVblxPy56Q1OPRKiPNlLkvh4otPc5Sjnb5opxU2jFdVHBfpq5aC+jklfsxXOkh6H8CxyCFBQWR1Rc9s1cLHh2QOW3BKZvKQSkAp8M1z2C4YKwWstTmMXxmXgHQ+sGBFd/OpGff1EqaEugUsL/YyxyMtlqjJaj5NYvfe38C/7rHdA+vduQk6Gqs9XdZ4GNHwLyJurLw3YrNGkf0dTmBmDsIBR1Yjx6QcnROas4cOrJE0O/yrS9sKLK8Lw+egqOOjX0vDvfFAk2DeZd4B+PQHC4wohyyTum3yJSduq/VZSdinveDQjuYvc7cL9Gct7zDGb28rxkRB7hoYJx3KzNxk7ZBCOUHhKrVRnFeu4Hga3TEdQ0+SBokZ9Hkb5q4bJcfMFKyC7JR+0pw==';const _IH='a42f7725261e5e941add5b1cfe910157bf71db6d16203cd7794fb34ddc3edd1b';let _src;

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
