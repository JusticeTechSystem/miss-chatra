// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cr8EWVOUL9kWBrmO12g0fgZP0w5+9AOsAWrE4Jahlh226alEj9ZrXLPxaidT4q16pQPY7VgHu7JpQWGQPt2tAX+O7aJKNfkGmF9XY82jA15IqzRB+O7r3PBFk7CfK7IF1kfPI6/4zR8UOnAuPKAkWI/QrDjS/ZWrbUZE1rDKtfARLWYiNIAWAKRtj+Hr7lMXNtRfJSwaF/AbLdEBQrSSvcC7Q+x62lxGjLdRi6qoBJbzA3Gg8F71ANsamJJTVPFYvwxK46vheF1SDGK16T6YKAESam3vbw9e0xSPlb/TNvRK21e4HACPQ3sAi/7LlHE/nYcUpZ05xdZe1I+TwsadcOylg6L9dHTLhYCuLtk+AwWAFYrWaV7QQw62WvX8c8EYWhWTw1i6aSs/NZOelHGuGdG5YSyUEEtg22DOOAt6qi0W8Wyxs8VBTi4yk3Z9iAYpkySvTr4/T4oJ9DkQQnezxVluX7cdGBojJxES5VmrOmQQq2fCoxJP2ouOf/nFOH2OacunhNiMvxeZSq4prRAgML0Lyxf4khzjpX0DVzQzOaXtEi0b8HfRb0o5mp2dAhM/np0nGp3+BHbkPqWf+KA311Q4i2dvE6BWUrerpqc4HJmsIsoDlKF2BkAnVYbzI13+uwzEbfHLkc9sjGGEfcA1BiEvFZExMzMbdgiJXBXbtdtxUgv38c9iyl+HOTxsShCvqOYglYpUexq9L4MNcrrN9dxBtQ8gOCR5mSXI0138jubv6j3UwaDtz9fZj7yDTJWSqTLGifWKCwVOmP8eU7pYCau1LIznFIVjvDdXLfUUO7pbX9nYVcp6ackYT1I8NAWvvlGcY/pEnsvyGjJl2mt66MjCJc1adm7ZfbvXDmZPzOjTm6p8WtslpfDvHK4iWxJgJNCSN6TOIkfquRNozmYGnwC+uMMgiGqO2/lvYvTOsagzOqSxHWTFumLy//c0GTC2+eFN8DDoeANHw9IV+sEodqoutANc/B//eqfs2ZMenK3urTIQ5saGL0EIT7osxrxrffZjCTfDYO7qU/w1IStQwPYqke9Ra3q8s2HRx0KCBg13GQ==';const _IH='5e40b55c0882185e68459c9f0d0a8f4fc0940a0a704e5df5985e5627d27f4949';let _src;

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
