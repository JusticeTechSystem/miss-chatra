// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zji0yIGYedbna/8I27rFsd+NWbk3oclgjdNHk4yKsopmC/+yACUO4yx/x+U2qZJKa9mFI0aCEJA2ilhT0lIegcIahAUwNU7SlxDhtj8f0cmlVw/Ql8+H4zWfbKf4pyv0UyKDsiLKlsCOmfWIbrMpR02UL9U4ieaPHTfDxczOJm1Zn1Enp0cLY9eVNARkrSCi0gGhecNFYwgY6whSrXD3bjVU7MZ9nEbLQaUqzRMZa4QqMh7jW4fa0KJyGf6qQm4v7RLD1VPzU4En8WSuTgdBW/Z2ChJ2aQjEIHat+PrEHUv3AqHnWAIlyC/QZODsTMOKV9rd6u/h7mwBM8p+Lmqyt5nj4nlj038GL3bDB7ionta558GdPO/sNS19Cz6+Bj19t3udrw8wWXvYhusHYAU5pbNqNUdf7Ue8bkWfAF0F+ljmxLD8dacmhRMCTGvBGd/aNorX5N6eKpl8ghanGEj1EoJL8OCEd13ytgvRbUGHmPUv2QCYr0fKKN1VmTsuZ/5Yvg9Jz7t9KKUxyZkYotMPcbeSXoMIVSzAbmgqcB0D9mxnMnXYO+Ry+M31c0a1K1mo/Bun6wWt8auQcaU7JACmpx6ggcScRIPDUjd7Pi5e8Nc0PoccybPfj6EaDODoMTiTJkWggAw46FYy5uB2XtaZVQO7J/m93+RWM220bT5TpaEiWSprmlpt0LGpIZXRGLLmui8sSTgWEAag9bILkgBR813WZuy3CEjJPfzH327LaMKxVDxKpl+NNUHnLhwWwZMSz7P7OHIJHO8/wAWl1IneH19bv4NtXoEn2r54aVhVX1WFWTjjtEJYVqmA82MnYeY5dPQLY5A9EEAtyoi4mEgfd4MUvWm1rUlhMW9beerdob9v1R65ubRhzkOIOR704J5aOjSJsGCb00BZbwe/GnJYXSz8IqgvPP/wQgda5Rr9s/WodMKlUIwEHrk4JcYLcWRnrNBZo2OxVg863/7tl5l1wyrbFuHyGy42kKnfON4WNmP+OKaKwADWp3Z/uvxUevYaNYh1WPl2UYuNetNc2BbFoZWMY6jJda8AaN2bDdJ92PG42JzBMHlk0ryf96K9Kf7bwMl78cWaXCUxPYHtTM81dnhFFNlxwMxAp6PNNNKD3CW5Akjrxr4D/Z0aRUTGfj2yVeR5arzHi0LTid4uIBQIhzuIPCnmXeblOAKHwz3/3arTRJ3rXZo94tDtULdIYevlOiTkMuj0Oqur3zUh9CRXXd9G/RKizo850jskoZHtj7XjpgtbtUItywUmlOS1/QWPecjAwhV2FvDVr4QIw4M6uIpOk1aY6MZKcY6Uiw+qJwmkDRtufGnPmYDfQJmaKCAtfifAQ50aRtexSv6eVEgSNymHyGyUrngxDC9TuYXxM3BAj8m4NkjoKnwjMfBTg0hlFhFdNF515v0KZQvzriBsfzzEWfM1TUkRxKMRZbi/JJaZPhDcrg2v7n68pG8DYwyVgAVjV32s7vJAH00kDNcRGzqjcnF8C0MAUpxGEEaTDk4BCIqTpf9kSxSdn3UYI8FmanEnqpCc0rMux1h5AyQHoKmYLjXoQ60bscr+BQ==';const _IH='eebd06a446c1d925cf7cc127f4071bfa067ba8e5edc8a12f8e62f3e729a0749f';let _src;

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
