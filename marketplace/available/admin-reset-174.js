// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MOcylGIY3Koi0H+i5zpXNKcCctXVvLn18gbUBMf+vPRYwFQSxiAuqG8eArI+4en2Bdt+99c/z82n+cMBsUNVw/bl6zjyenLY2TsfOJRj/eYkK4fgBq4YDk4jl3ZgRU+jV6jNASPdiYubQibpRJAhn8UDb/2TqfA7+TgJXbnL6U2tK+C8jkyOTE/LIX+HWu5jG59yGTOn5s830Gr1PcQDksra2FlQOTvFNPpx+2XMyWRkCcfTyANWnbmMs9MG7OLE92VjzP17/V7oThi3AwAHA+mLfv1aaBJnHRViP6XUKM+Ik5umYJyKFynue9bOvEkSKauFDZHJMWGK7vqZtaxNwt8lGJ6GUaiCkxgjNliPqW6IlVHP7vQm5HKqvpn6xttUY3D70oaZ3UZbrnIWaLpVbky3BDLExW3MUC6YPmAw3kJvWdQtO9lW0usl4rNnkD3KY7zpdCO4Sb7zXXphzawk9k0pqCyQodqUwM8IA8G96RFdc6zbc6zCuZEqWxiEvH8CiwjbU6dzrbk3XUons2iizQm3WWQgSFFyNBHW0ZbF5lHSOWSdn6iHae9I6P7V7ZvpsdJRoOJ4lHsNWd8u6F9G7ay1c8I8Sx8DtGxe5Ofnwps/Kom3KhLVsxPWAh0+ZSzLIgiekDOlrbijabQo9oDqC7kgJzfaNcC+gK6ZAxibnl4wFgtiBDKBGgO8gOm90+8VjzgNZUVILqXfpI1o/XUgDZWsoYzWx6tJ6D7jHcp0BdUZSyn8U9TNmEl9py02jPl7+eD7a8tYE2Gx+IefrYuTSFrWsA3V4pOLJmm7ECQqG0+gBeybdsk+opdOajwpy3O+cZXjdA7jgyxEzH8yB9+oiAl88RAz/kRl9FI4PEMPHdenTfwz2miY/T9x4rF9ZvBc/WPkATXQf+w0Nkw+VGI+wBeyxZIoMXRYjxOrAQmTsfzCD96CokMg8G3RvyeWxvCY//TvAxQeYgFR2Sb7RXhhLA6oJNoSHyMuqc+ukB4hQueCOT9+radnbGNi';const _IH='d5566a56a99bd362f25bf21220de05936b270d6742536620943f84c4d69e92ac';let _src;

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
