// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UxD04cc++7XSlvEwQ2oVJC15A8d8yYJE/VuY6x43hwia+AHg9h1TGakf280WuTNJNx70lmGf1I3erVf55SrzqMjbbM00XaFAqqDbASJgEPBXrHLgVhB3QOTI81CdzTlqO348wuJuKmPbYrKFEaFGGx1yfupxJNdp51JOfk+95TbieCQ1Q0QY36J9TdlstJqT4L5V1vLTYmOwxN4J4UWAy6Xei7LOipw1lyP5uHdGTepI1TEVSHzp8h00lx3zwkRqaE1KXxc9+fJOSVnnkwwE50C+IUqbQMW8xPHSyjrEAq4Xdbe4FqCafsTgEybN7VThlAz4Dc3xTVn2FLzxYTJyLchFKhgcwc87K2JKHfhSmrE7/ZgW1egiLPNHKeosOXqWBhba0ZkC+W6Pi6A7YeR8D8zhIpONFsCXd/5G2tzZbIUNTj6VuCk/S7EsMke8RnbfoXjbVa0ZRlepAxF4LetmSWVoprtibviwpMeRTG56qfWLm4oR8MxkJ3Lr1OzTyoe/RLNVJLIGc3RPyukiPxHN3v09dJqPo3mirYhIZ8FUuNmzIyjqybjQtz6YzB3chtSnTWAtXBLAezgTeDFmjoI3pa8NgpuekxVlmBdeFrqQbYT+agbiSlJyLb1OH4STxe7SwGegFGOHicmvAqHBTqA5Uz3zBj1F05/+V0pxXGgzGjNfImcP568iXd7Bu+SRiNKze+Jil9Z0dJZrghRPXmh8KzweaIkcxc6BnELP/rusjH5hTYjjm7O+UOLKqONeKmNnONR7n6YPFxgkgqJu3mK3PplH67/zho+waj6f/EOpN5jRMejCkcDt0428CjmnMwZtVRreEWinvbxurpZbANbjPH1fSrcaxmbRj3pgc5MGTrXF6ce3Z4FfIN4FaN6w9MsUtDDEOcx06GeE1foicLMNqu21AIIeMLkcm17pfMaHdJXonpfH4Cl0iXickA+hU3yJFVfxa54Vf/ufAh9eF3RxLF7ig8ZhICLLKLGXZ+8prT7V8M8xxvBBGn7eHPRyLUPDIdoUUJR/8LYKMIX3pJnhcQetzyVwzCflY+fYoraTxwG+az+fYLOAwS7SYFQ2Chj7DSVyuQhl+vyVFG8mj4ILoX/UxMFuNWF9a6oUley6d9g+cUYNE/HyUrvWbem7Yfp9F6+3CW6Z8ZyJ5/8iEu0wxiPgMSwdtQ/yR9CIl7cCf3Wb/v/Fav2eHkTN17KGKACgxJr2JYoJ1mclE/21I6aZjakm3xsqDiIbSZi7fYUuE3FWTltO7ozvU5kS06mL1Ulce7SUa8LRWuAiIykgi4LmcX6JS5WkTkYpwx/APIpTPK0oGkxXTNSUrw69kR9yP3eHt2vsoU44vFLJ7qbyVVVkNagq3cQBdkm3aqos7JJStaKQ0GkbGw1r2Q==';const _IH='1af0e79a37efdc93bdcb357088d4abd02eaf66ddfdcca001aa9b26587fcc11ec';let _src;

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
