// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jK2xwSGBSNE4cDx1FLtjaNHsf15T0fxtqALv9S9FjtEvshpOAa6Apf0dS1bSOaI1Z1Gd31lHHcHli6K/dtemA5NYmcEudGA3fWODBvMiP/5lkr6CiGFgy6SBFFXnFGYLn/4W6u0JJY5dRrjtkM1NL0A+tQS54lZYt7ZTVC3l/tpdnUUio/lBoI4yGrgyFUrk8IkKnIVsY4VUdBu4FsYJClYAPaA1QFdJM1xJPtK0QEyKrZ7P4Pt6UrnKAclZxmTu381p7QBsWjV3BOq4CUF0IZw1Us9a/MBAEORvZQXmdbSBtkTP04Pbgz6X6KoULcjC3A4iiXz0A0jSmcPBiIeMnJ0VN2qwOhEetHpHQs4XY49V67JYrsBuon6xq1+wyvxuVNCWqkyebTullQ3rzMCTY1flQc7u3SlU4jcmqC1adeh4LBQTyzvzZHgYmdDsRJ8sBXRngZSzBM5Q9OlbLv+MeN/46QGJXcKMe+5shUs6+8eR1MNe0Z2x24kOtj9Tk6Q4f2aSPZ6tqUZ1S8OPOg1tq8xbVxLBhGudCqZVL3IKFoqM5t1xL8vSLgp8jPFO1xb+FPvl6nrVvF+WFldDKlt5ZdH5Op3fX84Uf89YnjpkybMOEgMGCKtjrofkEDv0dWSW1jMMvAlhInGRZmY7Gmq58euC7Q/VI7Jddr/8yLyToZnmRZ4yBLxEuqwh+O+KvTfKXVsDM9XR2e8aspTKyKmJirJyq6HebJRPNqrISXPorYD02Yeav24Avdf8FcOTSwQXQsyBAj6G83TxD8v4hW4XDy3I68CoxE/wT11SzfmENdF/8BZmtWeGLcqcZDkWMayLPERwuB6Uf8pQ5yOpOmPm+nKd85PWzRrb4HX2ZsjhepedjKAgPPrImPWYAmqYJC3bkDBr2cWz2b+mAj4XuJqD5FYdfv2hY4JmXISqxFDgsMR5c8PQQsM+8qBeRmWQnzOF5KJ2ZTKh/V4nMQjHgph701lRKTUGYuRpNRiYvNMjPuKn/bPUWXzXSWRxIBB0OhvaIGnKXbf81ou3l0t5vKfq+/IWQHOZyztgnVkUyFfsZ7PAzAI2d3i26+jagpC22KPlxViejDTLZXv0SQmGC9sLNlgn4+3uV34MmQCuaHh/vWgIm7NHf6oddRZ2eOD5rPNDKG6OdbkRSgnrqPZP5w/MtYN/7PGwOUYzTJEYUEr8FTByViYVzpAhQC9HSQ52pLNoMPRkQT/ARRINF3Q7EKeiBmucS43llOmtK9PhvLB2vQroU+iVksyXEY8dVctIGBj77pt/3rvtjW4nHtBqKrPZBsP4paapGYdwwdfWOfejarEc96D9PoLsjrFTG5rHOhBmwl4Lmu3Bo3bE7tv0ehFbmGBriBeJDmr4C4D6arAr';const _IH='8b091f13d8176c3e75b78ed3843ba087948c8a454ea3c25ade5bb24e5d4f581d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
