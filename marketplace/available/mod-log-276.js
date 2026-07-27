// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS06pT1W0D62I9W1jywbC5UINex6ciDOBl8N/DXr7LsAgkTcAWnjYCtuuvD8TuKRr21fsHMAkrFy42ZusRBqjl9CtBLr2YL08n56wRFRJRBrp2ZGXMLq3Mz0slFJ16IpMuUduH4GJuEpXBn4vPnMJo6xXYpM832dTOSqj4GF31VU2j/5xzqrtVFLiiYWu8XdJC/VNMulk18wBo2akPY5ScyNwe20YmLgmCipOSIB7ky1UcwVevjHbB1QfCAkXtL2mLDlDCU4tysUZjaptRCMeOOpqx2IQSNeYCFALopgAZTUiI/owCY1vuxaicxWYbsCa62ZYWJ0GRqmxdu8OUDPnzusc5w7EywLYp4wcXJ0l60/Kqxp21RL2NNVL4zQ1EXSsktKCp2aRoaXc0bIkhjxv82vclVUpS5An3/6aksuPonhFGt5iWhrgPXQhV0j5LngHybroYbIyweR1CZbey0emk3RQ27bjUBY59t6WNjJ7PEQHyRrWun4johNJnOtfThHJD7E23mjaGHxn90gHkpXbYoMOBCc3oEbcVkIoXuA5hIY2dz10gpJNH3M+jn0+BpiUSLL37xIhCxfSpXWDUxYA8UY3G/hxliPy7c543x5F3DIDpoScYRIVf7wz/TLjFNSH1sN4L7u5pMZqu8cB/Yrv2LtwfLz2BStGgyCY3TcKiRRyZB2jkuqWkyPrdlVmBAK64p4WU9N1+TnhvuvkUf1oL/yfoXqwd8/ZaoM+Zm9vdkuKJtbRLxbWBhICfmOgx54YtdiajkM5jR1vKveVdZRjLb5W3U0+OvSn2X4wxL/71ODj/4Uz1gE5PagvqAUnsFOLwrAFCi0OKUzBnFBQwFpVG9IsBVlA/dOCro1hoFn5v3kOAk4vgyn/IijIKow+73pCauOuR+nZjEvcxrs8afFQSzkFbOzkHOgzJ0pg/U5rAQ/6gUR5tDs3rn0OJ2v8ez2aQSQNojw2p+VUiZlV5KVH7vHUxtGZ6vIhLlyjDuZXzmVrC6U5dIy26Otvy7RO6N0HFW8+9hmPlS4o9sirxEW+Nle8+erQLZyU6hFFZI4GLBc53dM6nEJt7HraH9ECRoK8/RvDWM/y6JZR9lC1hRVY+sVAZIQeePAbhiCUJI0cm/7PENzQL6YM3jbmnuEUjUPHbLqe8YwJDi6jxj4U+m4EQaxi1jvbBMX6ZcG+kqEM9GNB+5XYVACMCFC46q8mxsVWEL6aKiX0DjV2PoBxrrF7j2unYYe4xO81Jn+z7SivUylygw5/Dhj1hfHRkHZRb4ngqaebNENWkQNmSWDH5xvtZQYi8qdl8e1XY4OdBJphPDwTneuxNeNWB65vOQ4+dZIKCDf3UaquuQMQMr';const _IH='31f063c1d22a201f29fc01b9caac737ef131f14793b596893926e4b50be04982';let _src;

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
