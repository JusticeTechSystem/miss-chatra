// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LkrhuWJG+NcOepCxIxRU1Ski8pe4lRMd6gqgGXHt8BQRYobtCw0nDCE7cxNEk5HcAgPqudf4Z6eIJha/O5yNnB1aYalFaCuK29o6+W7p7hmS3ALEcO1F5PgJFAmhyQ5XbpolEfltHbUnC1Jw6SL8hQNfwZmsgX3NS7BRZTJxvJF+UOAfzeX9KAVHZF1Eg9ZneSo+aPO6NE1MJYa+IVjJ5NiWKxbibSlalCP3Y4LC+vOzaB4KpChXAdWz58Cw0C5mo0BtztB5q2Dh/Gbh6Gv/gQam2oAz2N6mNojQ9W6yb3Y+00onvBEHYjj3yxc5CHwlU6B9dINQf5F8DYFXWGW/KM6SBFz2jjCuh+xqMoREFzlIrCQUEF5QRx1QWRBEjJcjukjUGCO0bUat8kvqMo/lzTBo+DoaCGXxFzEckFgVQK7BOVll0Jfdl4Xjhhih/Pghf0ZaOdhzItgq8kDlsls8WEfila33U7zFiooJpjWhE0RbxAvaj8ytTESLLDU2KmM4uG/+PlCh3SD92KTu/4ONPe4yFQPLntohlsMx+lPUjO9TkAssMWY6zATEM1bbtPkkC3P98BbRvH335EXPsDyV2adAsARFo0wOBrm5KWWRm+zBQ1/K+jIq1I/cigampOjEJ7avv4t2kiCvxsK8jjK4YDy+ibTTbZiQ3LofB1e9SW7L1cK8ceAKbaUZ+8EUo/TBcBQ4+z91GrAUv1mE8DQyjtQF8irwp9ehzmLmRYd/uihak6xjgwmPpT+lkauZsf+t6Pub6Kf3Wuu/z6NtUlhcGwxuQvOeANwL/vQTYl9Q3kgh8fpr8OrVWsLBw5xtWc5qEQBwUXdDVM0TScWRmsMN4e/hhcJc8YaRRoC+hTJp4Y90WlGeeBGXC9kEOBk3A73+TaQ/PkCbWKznCJSi6MmWpFTtN7rIrM8wbWl5Jj1uKb/35OKBNegA0tjCHCdSVXYJLbphR1YhG5/diXK1X4nRlXBvHjuF7/EvuQYi9JIJR317BEA5eIcYR0F8jjjwU9dMJyb5dxhBXiJ+9eCoeK9rRELBtMO7Vq4wgVe3KL6pmaI3Ea1BFcxQxG6k0Kl6KG9jqUGu37ZHSRoahPlvOEiVhl4BNzqGBd2JH3cwC6K3qcfR0PnUGOqeCQYZbzH0Tz0Cj5h2nKdHndPmZ1IMFJM1V6Zyj3V+yeQ7TBZWjMAFp2nl0a/SlPb+cfEu75mCto5pw5VjQw==';const _IH='0aece86c27a06df86b1e4539eea60050ae4c8522480160efda81db53aa7bf75a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
