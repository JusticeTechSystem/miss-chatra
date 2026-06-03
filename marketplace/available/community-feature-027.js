// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J4I5baLxXz2VP67EJ2HQrGgurRKSH4r0u+XFkQ4Dc1ZD5YFxNrPlgsYS8BISVFYQOUjB2vTziuN/M1pqFVDG0cBZr8Qd2hG6UMoRSrzRlRByg29WbkTPz6uNKHM8mFqdEjQESWxsZepXG5/BncveIEUozWgadq1Ug8R0N7YFJZQPrOIk4q7gUksWAOmyV4t/aJ/5b/JJWbKN1VQ0LfL5HRNneSA21SMGbFYYBI482boTlBnxh3j7CkBzjgTDijfVtUri8VueoUIxE+RgTiiLPJHBXEeSuaegTKi+w7GJ4jXqvTZOFvD145+pYMtWwUlDXh0QR48VsAvobR0yowELAU0weEsgD3PWMdnzBKyRwJ6w9LSh1q8WXjDWYjW+jfp5iZVxrHXGlUSlN9pNdzLy+Kz5XAN7if0GMWhiGPTX2WcM4/w8vtQG8/nm+45bllJBOWAlwLS4vLjx2Emwv0pIj/ESR53DqrP0HURxbE5ChriIdl/Ro7zr7gl6EaXCoxy4pQMpX8YQ2+nidXMLxu6vIvB8JjRgjNizT2uT4jlRTpA/8Je2Jv/fBcFy8pZyyD6MJuNwo8/UJsjP0YXxXjEqBaj6UCSNOnTmnnpUWa2iVpAxfyjXRjxESmp3SI2AGvEKBM53C2iS0O6KEAM1H4iBuIP5O5BSQ1VBPqjtX2XBwlNxD2X6ZaJH7kNPeLlpuXGjYPTYVMtDdzmZ3wkXUJtyXm9macSXhALFmqmvCl5B+w==';const _IH='09c552b0c682e7c7720f1bc1d07917171630c818bd4647f5be261e8474123d85';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
