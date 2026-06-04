// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bVrRuzX8w1DhxF6fBiN2paofOB45uTXq5e+mKV5j2uri8BDw2UTPxZfULsalbhXB7Zgb3rVzgJvpxMQnI5bLuNKGyGyGQS8F0es2cF73j1Jr3+nOMPQ3giwVEXg08uLR/yrF3lfmzDvejfq8AfgTbp16UftrQ0Z9OuX1CCR8sWIAHMeeX5Yo5R7vXiGSKHX36mumttdkObGrVHBr9uWRvd6Yf6TZ2H5WfEgV6EYc2MGvI1qnaCY0B/EeGK8nNRctsrj8QbBJTc6ukWarnvzvPnNdyNLri+euyLlYge5zohB6LPt7V9qOzCSYZo4OsGXY8SzAjPCw3jb/XK+qA51zv8u+Fzz+Ugw7w/FLvlsUhHhuecKdgOUB2+CU1ph14mrAlFIrLsX1rLLY+aSxx4V8eTOa5eYXiS6Mj5j6TnbLDp8LUT+i5w1nbYi6oFfV1mv1qvCN4O95Nsv8rQ+YNdmeAQPr3yPRG2W6uawhDvY8637N1itxYo2DfNyd0vNH+iBLRKnO2qdH99Z7VqPKbrlSPuozvjLFjt9HyuAtqC/GmZokaOpC0IQvZEcjkYJdTfC2/lWWSOxDHGLXYX/Bsm1rH+e4PvKeGDB8WRcqHoOLInS9SMTZcfGBnE5c/FDVfIL2PCBEEhjyXlAv00lBet5E3qV/YcPg3E65yRjxFUb5XH2UsiEf/CfMWuQRNTpeynUlYuyuypTSKOWmiVRzoj1aQoKiUqYw+Z3Aj03zObc7CUSnVLi6IMnXoAJ1t4E33tYrgQdPJb8wzAeeymLeFVGA0F+ZJ1+4V+f3lPxoWPpph1So3kr7oty5mdLZu2x1BrQPeLkN/Mz55llczYfQwHparHVywTkX0/iLZGJVSgiFCBkYL4wRBCYzhL/CD/RLUJZPLwqRpKNYMQ/7Du+yPJ5x3URP319oqdm4osuoOhhwxQGcS1XY3Iw8ec8HfwKmKBV5x/L5fy9OmYMsqAtSiH1CB6a3NYn2YJIxd/0/4ij/2afMZmOJm7A=';const _IH='d23947ca496b52be6f53f7dffc00bcdf03e2197b76c2b044df4d1b7c7933d8c5';let _src;

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
