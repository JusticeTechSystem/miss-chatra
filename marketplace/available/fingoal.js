// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tylaXBLNquv74VfJztm8BHS05MsLSJVfXyjRoqqRIBxjb1wEtc0rK+V1+GMhMy0ofB9kTQMYsH+NDgVS45pIgg+VkpOLWOBTf2hmGxKNTZuJQcL0EGkGr81rYYG6lXlT/DgZmQi9yM7kzttTqo3WwFPTfUB6eo122S8MOYvUtgeftxyr1Iqd7UtSjYevN470rmBOgIrlTPv346T9qT2zvkvwSwpql0ZI7X+0Zx3CFQ9ahR0wE4ModyKIIFDcK8d0jNjj+HjkoPZTndN/yN2oInMTnfLdtDZBRVBTZEiEeweSYL348fIBxWYUJ06vgZIEdmPN10f41HG5ms5HF2jyLhwwgt6blv2N+80bV24iRGzle7w25/kstiUmnNIw5eQcrPyGSXiZKMzLST4jmWFyOQVSFafupvoett5Uq91aKYg58llHfdiAVFOlEyPHu8j4qmc1Gu9BXVUX5Nb/EcTY9hppLuaucvvuhhMyMniMFCZkIvuguc6xJIZd8ljpoJ/j9pYA/BVkbRksjpq7v7BKDKY/QZcWv7Kgzjxv8puJ/MIMm4bxpLt3iSCAOlmFV1Os/+Mh3yl3ha7FBc49UlGfdf0k8cHc1zS8Gpm79khXW5kuFlgm45O1rzCEbvhQhp3ljFaUkSFH0A1JA4HDzPHwA9ZyyoGzrGhfJmgL18gPw9DcpDR6ai4EOPAejqneMObfpXyXOqE2ipT6HzPHkU7icYkGvEU4lq2WVtXnDebt5yonC/DFZwcuZjGsoYEguFb1uh5NW/KUAwStaivmfKG7D98tRSqp2TZ0RlF0Ipj1pLWslt2tC8H9UuGau45CtsqqtjYyWGYWYLXKc887gZHtQt21yDiMiAFFnvSOr0rSKuB0S1pe4XC63ABjJUU/0LVvrqHY5L18Q4M+/kF+3pRPxdiwdGBLzVPN1+rDF/35r/QTp6mVOnCvMHY/+YWP2GBswkfReJc3MdDVA5QfgsP5jIAIGW6sEJBOaUyVe7ihk7bZeCnXyEbH7V86wA5BEaDJj2PQ3JkqW0F1FfR1oQmNGmzQ3jrR8k+UqiK51Q0V+7pQaOu+X8O31B4jfWvJ4oI2yQAqVCPn+NBQtYzA0IbKaaE3WJq7QfoTMOFC4sQzo6Ey3QpRAjUOALR7zvt6ruhlpb8ShDMG7TUwo24Sn+KMhg9Kvo/48WKF9rAVmsHD+pIDihtKTTHgGoNKGyDLWAIHsF8=';const _IH='72df9c96299a3afa44a1c915bb90db8224de7ec20bd3506c2707c344c7120204';let _src;

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
