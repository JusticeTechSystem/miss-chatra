// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQGiNk5AMUgm8wHwtO4yU+HiM1N4/TNrcG+UHGcTpFWt8pBJ2KifFWSeHtHRg3Q1XLbpoXDI+irluJedPfo5R/YD65z86loOs3uLFRZ58dpvabE6woNxLGqcy4IQPn6djrm9vjDbcApJWYRfHhUVWdFD4KOgYDf4wE7qEkQejGZtGQcB5KSzAmoYa/1gFevfVOsqe5ru7i8sKsyReAtuoAbzft40wx4AuVj6XrvN8Xxtv/knx2xba788ciHcv7y7veJT+tFKFCZhMplbI8EkNaPwS2W5+McfVyX1ll6UZBsUP3VBYTo+VL+2DTOwHWT0DNUP/r5ghHY44UQvRU/CUHiysZK0Nn/qxmw1DhvOESUBLWETDFRHbB8Hh0apCHg7fu38NWxJ9tQau5ENaVf1YMrB9IzCZN9hMS2xuTFW9j8HG6n9MVoRW17Fq63M6H5AwK2Oe26l7c8JUDO9it0PYt1g5sg6vzfipp4J/zbEfGgHVH0ZFmdz68azLneF6QBnERluLwgKPZlPpdqiIBeCOuWMDyFSESnzEfYz/CoHOeHWLGQjPavbYXnSeO4+l1GYLCvb3wQcm7CvnVWvJ047ohYD2/eQzTkwIvQ5CWK13zTWI7gR+/RtwA3f/tiVVH495vnQVT+0+3a4CCVawq9XYK1UCII2Nl3SyUy8OThNPCutTUyNGLDaqwtEgLtc3QRxQNmI0DLSmuFvi+2oiwS4FOtcI5bShC5OUjYSs9NvK+dpaecsGdfx73PDgMJ48zBtg4NWpwj1hfQn7m/8sJCxlLP/QqHwFGGEIc09+dDkXWv9pJftyaJbdY3YIdJPkfj6dV8Ott6H7ZPHx3uYssrcOr4tUQ5INstMmOVAqFibqukMWsZ/u+bFTZtYpXHMVUH9fACRWVipAAX0ujZ+EKgSmXBVaFFKRbNX8JKkP9rkI2W+2Zfdp4w/nxcMS8dFZzRh4hFQz6HA4MRsq1ZHDFghMgLGgBAVOdawjDqgkUj7tPfAmesoo/dMWX3ogE2eB1GsXxl+NchZIatt/SDSSs5BjJbJXFB0XGbUT+62usLInaCak42Atr9+4kN/+Xsy0Z1MGvz8S0vx7dYJS0zHzke3Iejyd/MFPPJjdG1im7fkmx2i5SqiykatCmhLLKMk6m9LMUWJUWo4TETbbcLwdI2ZMw63W2n1Sy3SMmHPqJapey69iBa22XPR6kAwdBTjecuQxl+KvHPqs6IbSod91CK2A==';const _IH='2041c53c3858325323c9fa409446ba264d06d2fc2927a6b6c441e15da596d9e5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
