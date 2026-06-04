// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x/ZIII5xLDJLulBId9L1o8OMoM9dDs6ejzPQV62WPsOPZXObPTQhGa3PONFoMvdp39RwcYcGF4KkVsMBJjl+kWSz0TjirnkrWjgpWxbgTsSIEVTZsacLvAw4SJf7oVjrrkE5heC8nRpu45FRK8vqt5qGqsQkluvwxMy4UQ6SFqm3pzsLXnxKUVhgWeji6bTjBnx+Xj1gkyDQt5mqu2sxq5CvASFwfCOSmMhn8LtLRQ4NEnfjseKWrcmubMU9XCW5NYJtBCNaLv2pie+TQxS3dfBg9zRBP5Ub5aPLcytlTC81zU7GNMc3TRtWox4Iih6EsiY3QSkUaD+Gc5shOLo6ZIEbBrApdG1rufydgWjzTUbZ1SLB+w2mTyoennfQL2jwmFbaEe4dzEU1KbXUtZ4NCg2KkQYGidX+lcqfLPPW8wlpZo5TINNmml7UfVK6QUa34kvM9j9OE6OA6AtjaR+KL88m+hicxgC/EK4Ifo+LJSKLKCgWKDb3HgmZU/brZU+WtDVunT7HKOigzup74Bl7DSzhcWLpUhqKcxe4o8TBJe5Gw1R/7No+lvKtNGJbYsIbiH4arYsz6v0aTuGT47qc8zRYZwmHfBmFU4GfOWw2SSkKv+I/KGH6hKhaqniX0dUVAXQVqocA+E+zZyVYVQ0nNYzRN8s4dgF1fvSFEiwjzvwYLRorAwaNMVYrbpI7RdQ8fL4eo6LQZP4IPkSSnhNDWqzLicqwEPEqCNTpoFQoZA==';const _IH='ffa27c91a33a25acacc295f499e537956c6b14dd791adda6cf5b26c1232a51ef';let _src;

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
