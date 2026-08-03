// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQ5wtRjH1av0gZiFWYB06pWKjxjEOzIgCINr3dY7N23yiZc+M8QoiohB9u/M9ys1fh1Yzb8JOSLa6iAmcQbXfOykOZKsciVNyM/GDdSXDMivbFR6huqY/x4FPKW1dsxMOON5jUoujLQYtviLt1rOPJD6YFGwcajwhks5JETYze5td3teJUS9p7Q8z83fey4UEuTyLBBYUMb8xvfIEeaK6o/SqnKiwwJFYA/NiLmNg3UrtsO7QU2sFt/t5+GpkjBqOjUBuuG3zYIV7Yu9UqAhvti9ZgXpZz13/Gtn05TlFIbnMO70IhZJmt7+qOh5Jk6bE9u1XZftXU8Diw2g6J/pVQpS+qQN4VRqOFnFDU+iRZ4yPQKtXRlyOeaf3p+QiBsEUqsY94GeCA7a6PYw2PkC2NBQp3fKtKnodHJ/r2qvAVtLGZttzmZwSp+9tA5f4OOXSxP0ysBJlNNSLptdFal6mC75XtyO/svsMJJ44PtW5s+bHqiVyPf6eK9aHF3vMyLOIv1bZ5Ez4rDJB7mDhcNlRaCLCLnkJ+4xxsWqFHE6cy4H2oH42DYzrJt9CIf1zdKnu7+EyVOwSkPmMBONfEOoUexcYlNeD446ZqixKX/8fdIHvd';const _IH='61dffffad3dce25f010f20076630ed85f00f16a16e010e79c2d9953b80361b1f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
