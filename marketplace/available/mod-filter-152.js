// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HVreVs8UmH1VSNRuTvkjgmJlTkBUgR0gWHE3WsXTYDJz3GwKMAm+aXmlcParfl4WoQHw3H66hCRnZJpImwljA20ffhbKfySVeM83qmoTDM3XDT/06i3e73uyfgKJwPW9YSeCOD3pq1BcSG1HDFxeZ7NMTY3VeWdYCgDBn8BzrqZmn4Oq8M60WOR8pLJYGtEdKAApJDhxcnfUX24EXZP+LbxPaUHAqXlp7b5CzdXELFeF/5ywPJSXsSVX2+dtm7cvwJ0Ay+LJovXukE+BUY7GNAFeKjcD1vKhRR4GteLXGpwbjPab4b+IpdZFuBgIgyXN0Xy44TvsCGdODxj0+qDGriKeyJq/uzz+CXZBgr795TtvL2EU3POiHed7Kq8S/thVI33S60BN5rLpvKSfYi5nN2R76f6KLusp9OpRQ7mLhh559JK1Lre3T0vyvBRMzfcK0nVD66k2p5p6CyH/iLBjZzCOK1FE8/EYpaX9nPnTpS6qz8p8hR1sjXWHP/IGwoUPqb6aTmbla2p7nODWI+8JLGb2oViT+hk6LhncSGFRyBnB4JtusuE6Ks3Nz1YDAZurjdORSoukN0Z3oMxkNmjnZpEIZwWSBX8cvJ/6mVHDfR7prDWyaV7kxdunlizCc2QDUk+pqyV2Kh+mSO7jaeNNrZw64LrHJwR1YtzX0wFPqrGUpubQBbjxSx5IkAfWnx/D8LX0pZEsaR51VHgqbtchU2llEWC8NcQ7A/s4IAfLL/iPrcDtJtEXiEiN35Nxb5hxTtAYlzffIengjyKUHL86GJxkXby2m083cwIB6LrwIIcC7KWBPCfDj2B7rcHaL1n8D2auucjUqJLCSdPZIAIgwyx0MfeZOP+5K1oZoZiHWF1A7AnTS780PXDOVjN4fHuV0QZlOfcxuYC53z9uVFo5dOK2PJOlTCCViroLe+kIQjMNhUqCttrZva9jrqLGlZl1m5+5JNybSkNq8dxJaMAtQXsnWQe9akf5jc7buqEv3ojAovY3CbajRRHd3BOXzqv+PVjgfJm00sgs14iicUCYD1QDTyQ2seYnZOJc8Qs4j4mR9kVqebN2dajw3l91aEqrAiwgiJq/QuvsEdqvCUpoNJ8vRn5fJ2N/o62e7TvjQuuJTimiKHGURvF7VjFkA8DQC0OEJXdgAGYaYqCepS7MZo3B7qmUv+xBy3+C1o0RyGde5wnVCIshjkvnUir3LHOAvtPvFqnSz1vz9Q+ydXc4JssvpcToibReAhuWy8mw6coh9r6Xp+2cI2gwkc7j335h6Mnv8TDnnb+LvF6gmpbFFFrxu8lnXQ6Vp9sQWR5DxItp6LBSXJ9KKjfjLyRiXz8N3UM0Z8h7iS41yeBjIwrsqAn9wXJuZPmep1+Qi6INUp8Rr74z1JispA==';const _IH='59f1bee2e076d1682b7b1d34b8d73254e59fe3121f497583b7a538975b10b2ac';let _src;

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
