// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0F6uwC7r8Hv4+R83jnK7eYW0nl4xM8S5YE5A/Hb5eMkkKmSmhZnMoj5FA+eU57MO2a5q4PGo1JjZ/FR+WzN/9j+7ysXj7iiKllRTjdbY05ZJdbpPtILWwPuvh6PIxNUmBKMAsNwCHrFO4lBnkU4fsxLYQX9QoY6O5F9HmnTA4aBdMmQUZeC5hzAunUfFMydET/zPH7p3J81zWXLDWMKeHaN9KPrhq7hYNVzeJ0A2PWrdWzwHll7fdqMmNnhnliP2Q/50GzZw5Nv7kQHCVdUMVARYNBHee3l3Ns00dcJcpJAZuV83qp3I11AH2//AqIRv46KBTUjHbkX487vu9l0C5nETBglVNd+mXF/ENazr4wQWjj7+NcLiz+8Ii7xRfAhiwUhBwWf/nAhwrLr7RBemAlJestivVa4jhlzg3khxFxN2ErYDR/9Eswxl7jko8rsRzBVvqCJiUYr/ccYbn8lnnzTsCTJL0cvfp7IAln+iopWjuh+Gh0QYfE66cUm1lzf/Ju88JesBcHDqTK5CvCmmrIs1r4h0pzj1xsxQtmJZLl5yrjcy8eAtJflQrLMN1wwCpDuWkmP/x67Sa/wPK3KteQ2MKP5OL/xXGTOZwrQpXZH2fiiBIVvdBLqxk8oJN8qk52M9Q9M0ISNOJncVCKd79EPybSW3pRzB69wYzGrbiQ/HU6ogsxTaFc+M+elvV2PWQOr6RXnmmKsIukLUA8jPvzEjMXyN48c9d185sjdskZQ+egg0iElSuPDhnoRIOCLmtY/FYwnVzwjAfFq2OZjhwGqXr8OIJVaC2a7rrJMoGkJyKJR4TkR6DLgm6Ltzznm9a87BG1FK/FP8hSCaiUBuoDV3srzVbil5/Dj5KGxm6/S6UQ2FZljx1Y1GstneZahxq0DyIOUAEXJQL/8VBLmyYc7WGMwr7/vgpe1+6NiC6zGppnqnLfJZDBX6H4RhvlSgjI56BJR0O1inqYhdgtPTeyX481gPzUG8mCNrj/XbJgcZu8I5CzHTmiNygy9r4p1Nk1FPRudZ86wAKcO7448NbAWvUY7bYE9nENCKZlQY2ww1ifkOSDMrycbChYJt4lvA/WN4FYb9HDNkySyQ2mFYmACxYPJ83YwRhlsedSn5Vfd3SjrlAt/Pb1LWuMo4iRbZlYiP/RnXF64zMssCkkM3JEqITaIK2dovw4Bq66bIQFOJzb6bXQwtZwQ1e7Odh3ly57xSBj49ja7+PLi+2vLpc69ayQg45IuMMmGBu87vZL0cmme26a54uUsg9H3YdrPRQ82S93kwGfiw4pu2BXb3m3lYD39KFr4I1um4hsoS88mUZ+hnsjNFTIzdxohthlkGPJcdp9W6pLHZoU154KaeYBEDqYhk20AiZt4VrojS13gNon8D2EQCC0=';const _IH='de2c4c65219793313d2a606e84deb481b186ffb7a501eb4105621cf64b838170';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
