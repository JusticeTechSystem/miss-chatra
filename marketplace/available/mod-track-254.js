// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FKn2uLTenQvZNLnbCeEQ2N4KMLKw9e6LCRqOW+ztIdmma4PkzfhBC14UmJUvgfZYW+g06Ug7K/3CbozjQWnUuWVvtOO7v6m+3Dpu77Wg3jpCthMGPRSBs0PRPhFYTXmQolF1RudKvNmf+8GU2O9faxY6rwpo3uS8XLiUlGgOMLYDRX+rpqgu3vU1sWC7vkOqImsDS99X0c/r0dvbBcFidcpu1HvuuAWZC4YwOJH+Bb6ABENId4gi0CldnDr1Xez3+B7oZYcHqfyCYBUo7W+7XiC1lz4ZXhw1dUfxK1DrYOddYiyhwqjj7KnQhGiWCECH03tXWQX92Y4IpNWMs84fD2ho5lIv8yTN6WdScnyJ9ry1G7DDWw37dxSI11fHM44Tg7GaYYB+N6KmGAfzHHIzn82xwZY/caXJQJH/jxwnp9KopUGaFr1zw4nwfXs3jGirZLh7wlAtCjYo8kJGJkt6ZoUxKCB0TX4BUw+KOofBP+1lB+Y2nYB4xCrwpF01kW5NT19Hy8VerHs+7PHnTsdYswXRARLRUCXnYsB0dsHemsmK80qEPkGKDVjplU0UCtFHQhEfJsrGvQmMRAm853vWSROtdhGsSE6z3Af/stVj+3z5lOgg0zGZoxKNPQJ6EfXEMfLGFELBOdnVDY5n4zpQq1VKDsCmMJeOOLTpuFIq3dRvE4ECeAbT9AvHQqqOaZ7Gs8H6/Kn8VPW75DoEOlZyD1Mgr0psYoWHzTUqfRANdYTe+gu/jpTaI5mxtAnkXDPJkU+Kuc5N4j/otz0HxPVKafrCetkL7+5YxT9KwH8tHhpMABCO2JFkn2INoORtWgJujXpN+1ROEPVPpVBF09ED4+v3ikIM8kpuqMHJo+AI+vKQBSxIFGRtIOHeuvwwEKJ/TyLz4mCJ9MJARLoGdrMdyxX3gir0l3/bkdz2ZwC26v+u4YQXwtjl3+YpC2xTiC98JDMBDydtb5YqbbObq3dpkvDyEr+GkBj0GHP8PNY1IH4J+RKwvmjB8YUaYwpM0+B9vl2D/KSKHsVRdLJXO3P7W2fQ5LspMNYXdWZtHrFJ5Uz8TVNGmw24s2I+n0ksUO4gvVsa9pk6bGOOf9Cymprf4wIiucuW6uTncJ2KBnAxj/An8DccXKI6XoP7o2UcwiR/kXn9G/AcR/BGdeWn/cxZIttPVHgxJhsiBRJt8dq/hKHDQ7fWvDx0dsqjgXC+90ZqLmyAR8L2mHG07zNpPEuewD5+R5QGypI9WjtH9wSOnKZ2udnWfjSrbapWn6LJPz/JjaUN/0WD5Yeg3ZYbm+8cI1ob5TihjrErnpo+dWWTOHTWeqYbLsvRCVF363QMFEXvy9Zi/WFnvRkmS7K8OaqxfEgIKJetJQ+t9JBBhZOC';const _IH='7e5158406d017c2dc3deb83a61a0a4673bc86d06efea2a26682e7b07260643f5';let _src;

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
