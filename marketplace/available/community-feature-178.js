// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yDkZ3K5sQDL0xLVh8u0bqSXoAOfdYKxeRpEZbv25mdy03SxeS0+9eeCA7S1tAwUNtlR2QqbzuT6CcLOq9j42RBdd0Y4W2xpmYpoLDQNS8ryqnEnfgDB6OPp4cZ9MncepwVos3rORyEbM+xafdYoq2fHe/BvuFFBvzkhEjaJsLvo05Tlftr9U7JYbylkMCiNtUV5oZj76CI37o+pJnF5A57+0fyYhyUjHwqRScegm2N91RuE98JlKfNtHJJWDPbnaaaF9z7ZwKEZ6E1txYBrENB/jUtJGL4WQZ6Fth0VD9LZDBjX9K8e7iCHvS4Se15wnq5SYeGqs8FUGVUI5wjVqhRFHSpn3OnDmO2fhi7Bi18/92Cu4vsGu4hseRYei5mBkaL+u+4vNcAOYVufDQNY1Adfw5Cui0999A6S0HnN+DjarnAABeijsTFFQ6+54eToj7s1UNLzBOM4jxnE23OoC29WVs1lL/EI1/FIlP1x4tZSa7opJ0Q2MUhAsu0MVBTMdd4MShT+XBL5ZRBAgFjItX9/c/viCl1Zh+OJZ75C5fyk34mBCmoXw/z1XjVR2ty5F1cmNXv6UZWOTCLIsdkQUVDMEkgOHOHY+lY+zvKTxUgJPQ9fsFGWiIAeWTmFulhrt2ApN1w9nKmOVHLj11xthkwgVDPm8euRSRWPHudu5LkpvmGAWHqhHXjJrL6TiRJA2xWzMfW5WJZiLHP98M7SJtGX2MZ8eFqWBh0ZK7Wk=';const _IH='a798bf86b469a91c82f546b2251477a2a75c30f4821f8b005f31634c11518182';let _src;

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
