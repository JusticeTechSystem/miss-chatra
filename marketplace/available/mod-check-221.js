// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jQ4VZcGkXW8OCH/bqReM8Sjas4Ui5i8NJ8THVEJ/uuMgtnwDkEA8OZI5MUrdn/hEN1lM+fzn5puNCvh9hWvFNxGN42D4xQ04IFGQY+RQCUy1kNxKpRDNpCL6CIHGTJiK45yw+GLch4epvPEJhfVn3HH8lDNa36bEaR7lY7GYGy6opxyumWoOcbPIPPlmgPpsqbab4PKMm+5vUfI8RwytN0gOpCnDZEBQXr9iMpIJa9fOBe1NTfZcN7au9W06woP7O2+u+JgULPiid93hoTqvp5C4hO5yHTMgO4XItL9BYafQyTkTYv5SXk6mdf+LjI0qBmmZUknKWIhmSamk7pVw8LjL51fW9c5q5P6clKZ5KVlZyf0pMiOW/H5ubJcroCkdTJ1xd93IPa+Tro6QTCiLICL4HDL1bD+L54QjlIP2QKMv6U2IjWyWmMawW3idto22nXurPiiWfWINyx448yLJhsDNCxjeAGxWH1EA9htsLo7ssmUeElFp65MPg7aeyT0QeOJVROgy0J3+UPlXcTdFeqWa/erIZlMBgRDXDfadQ9FpLnKbBJslBsbfkTzucIGBITigIu6C1AHH5gAjgVLPziFJknYoNBeW6+QlUJVjb7uqKb9uaeSbAXHbYuVVsrwx4hvtbEoS4o0Xeenzazqr6fWYFoioJTGyhsZqNqzeaw8UmEfVyR+auTQlKH7yplsxnPMBQyA5aHp6Rx8z8yVobwYyQsOQfVRVlshymat6hibHE7vIpAL20L2ksUGXeIgFi30jFiHmf+qgGVBJU29NMwpHYkgUSmWnZz/8UsFVohkB2cuiWfrcMfJpmAASWmv4l9ceaNMfxTu5ZJZ88qdss8v3q1qkmgd4XPWfN/JnE0/5385rmzDDELjmN/moQCs4GoZmd0yp7F0quCLph1CPdYNH5p9ORgrCuxPXzmHbfqpXbMnkOkcimrRBgPI6O+557byhUBjsHfadxctvkFRv4xnbLDmndwhWLjGJG1lucWWfEsat7agbEyg79u0VE7+l8s64F0o/Ur1BMkVfSY3iWyrKVrTeh3rxzqg+kCWug3CIHLGzbwIpFfy9bmpzjymkXPAIP0eGvOdudSUfMpuSKINAfkwo2Vb3bKtB7Ca9W3UemLKHUFJ/jto8GoMHwxsd4qOdMEMRZLOAhkTYJ4wn5ViIR1mezmYBv3IwjVPsbaVHllhlEmJMCiPflxbOp5Nlb/Xn4oIDxg1mjMxMFdzFkOOxNgktl2m/03vFAQin7T+QPlWUHigzQSW8pf2D+ArI1XI88TuiJ/bAG9GsQbsCHJ71oOWRzDGFH9+XgYVi59rxL1Ej/QwLWp4V2C739yCl+BVIak9Gu9VDvZP2qAxKQxpYKCHIxoz5Cz2brjEx';const _IH='c3567c03b160912e9c5ce9c7323862d092b65361de4bd87b197a5a8784c2a762';let _src;

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
