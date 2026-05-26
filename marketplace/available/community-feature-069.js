// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UuulkOdU1PGTVkygyotPrXhBbL7RGeiQ8o4+gzG1YrGft1iVfTYEhuXyF1VIRAeArDw1ehnoZSeGAsIsE7Dw29Gt75Cs7766eyDqMhxW62n0nPQ9D4CGOnkpIM6TrQX7iDJf4ISuNLeC5ng9CG0loLyV6nWCL0rMcCUGHJ+IIOABJRh7fZTVDHiYJ8ohLcHmyxnUPIyPWYLUiZVU0r6/5RR9daTj9tow3g3KnePtyMeKPxjCl1vIbDjHx4iaC1+2YrwBsuuCge+STG/7iMGA/yoJABhSKs7Huqg3KNhI+fy8nMacpKMx1fJBgcr+Q3IZBXwBgNEUbg7RyPqb8U5R0AWA+HwIccNpfmbsMyn0sdMbiRyoGjWXv0exZxZLNequb9+AMmJ96nelU9cXHPhGLaXUQ6HwIxHnic6RIRSYAmekj/bgSV8Eq/IWtZblH9uYQfpU+zpIJjXdjGNYdPIOMWil3+xPoIJi7xS6MrwvIubDeoPPQ++UXx5f0FZrlnfTZHkkzxWEvgXAQ7ezyuTvi8Tipk8lmMlpAFNTbT22D8PaqUnCpDgidhMK1vW5LH+lhuGN8AHMCtxliMDWGXgeonzsBqWU+CszNKS4Q08j/snOubT5g2OC8KcFCZUiAJBr8u7Xezf7uMw5ByrYd65//CRfsyAA9SzrW0lio35x/k/gLjZ99Jhyw0nJeIMNEYnx4dhnsLtjOuKBC9/yhgiwh6DeC0JmPQR599tQUCexVhI21w==';const _IH='bb5828ca0946e7642cc695bf7f9bd8f88c30b6bbe1d0ba18b081bea63fe66c0b';let _src;

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
