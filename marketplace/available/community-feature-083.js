// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u0tykDF6bgulDRnwdFXNxt148UopTABPlxYUv5XQk7AdAK8EzGpIENQcemyUWk2ITBBtWk42EQz5hL8wcBxJkCWftAFwBEL8GZXoVZGF6QjBq9jD3fvSrqMJ392gp8davfrihIQAEOaGnfNddkgsy9xJrr3XTR8OhJPdp5v4pr65VXC8jc2BYDJYGltLewzVwrEt6xB8KzfH9x58CurN8WIHcnA5ML6P61Js6T3dl6Ao2sTZViVVl1RReLUgG9tQPTZsuHGwlSfVjsimbi0Thuw+Hqxa4n5BpFOCxQfuo1iZMCMYrcKiA9ZakihR5tg+iwAeXY6q99f0XfQlQUIicUPbwhfrPfM5b1Awb+wXHHbtEykJWj3860vGxweUYNj0wgAHDY9xvIRmblH0XcxbqZ+KsLueB+5vJwjXQOjU9+QpM5Dr8oBAVB7kkfuCBSW9QwFf4TQbAJUOTqjdqT10FZZyqxGTyCU9LTDW4KQPICTJS11Pf85GMx787ucRImRmdqrg07bsZ/whG3YpPO7hweBYYLEAAtEWxBbi3qG4i4+oNpK4Bjd0pri5iX0KdMhKmXqEKnKa5nQBWQq/tv8I40537rB1rTYkn+njwi2a7pNBDTn3lf/Hp1C2BYp5mSFKrXWisXzhIlJiDZhUBqhDHiTW2G7gki6l+Nft+FcCrN/B63N0C01Ofo9zuxYMS2FgL/fPBWXALrxeLDUeMJuPurw06V46TgXoAg==';const _IH='2f3562f990f9b0573cb3c188d87e2f2b2640d6b8c50426c05909787a0f532c70';let _src;

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
