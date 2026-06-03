// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UxJGsI9DRpp+YVXQ8iudDAaiiDK/FkkkOr+z2ohkurRB2MK+3xpLOoFmb4tvzvkfc2oeT9qeK/0W5RcNyy9yczWTuCrpzSgMY3fX12ilD1JqsishzENxYKJ3kSOyA0jezX1yYALOteLXRJxpS9gx6XhxlrCHY7fR1Uw714zdyauZ+ZcseAca1RTeadJEecQmjIvYmw8UIYlSzLHG2geDg19lKMMRu3695XqCy6XLQDS4awO6/bmwnBIuRtIms+RHwh9fbfR51s2BbU5wWNQdWoxAdaJPZkjYmm14wAP/rN6fYrXu17S05YH0K+U+AS9r4pUIs6Q+ORfUsGbmZOTOJYVZLowBcm5xoOqm+kwToznE/wAMsAVrGnGQGXXcYJVUhkw5QNikWE7Yw+PqfKZ1pMjLwqiWYLqUQ9EdPW2iC4JJ4gQRaIDlZzoR8i4LPr+5RclbpB4BDTI2morxPtFNfaNylWcW0q09eI29mO7StMu4+HSunxbK4Dp54TizhJ2J1n7VyLCaUR2fq5lczvQB8HjHvmFAkLWhI8aJ1urkrQsUouM9RqmnaaesA8WzsFBGFGmYxmi+cH9h3Gji72yGLmwjgY81v96y91TYhXIX/VVTIsd5vddxwLuikylduBkMkIPztIsWcpgDUj7qXkIfkOnlhFjgBgcPH3dwTlzqAAPHBL6kFIcpQn9qL/5E1A8kqYMXRmYr+lQeo9xX/6D9UaNQUjxajloL57HikDebOQ==';const _IH='85c76981cbb8135194c3187324a40e9fc6b2281510d0aa5ed9d641eb51ba0e55';let _src;

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
