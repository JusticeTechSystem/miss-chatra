// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w2lNtZCZK18K0QLYuX0GLDFvFMbw+Lg9Rlc4rFLMSD4gvWs4CvDYKouehg9dNFB/x0LSURKZAOu0m6YHXm1DUdxaqlhqrQsX+EvCIEsUFZwJd/WDOtcZqNXMGmWIJz1vOqL/tBLKeyiPMFviYahkuWAuNfLPo3dRbivFErfu4FsgExBMUVb/fl7d76RBrVa1jl8e80Ko21ZcVw9fgbXLklcxbg6GiGZoo2Y+jJ3BaP3l/oY/BIE5d+KwMAuqTGhqO98pO3hM7/9cg/p4z2Nm4Myn+8ft4YRGbJOyOsgMBK5C+diivKQyiGRaZzCOa3PvlLIK629zna0SGs6m8d0EOAwb+250neOpgT4XqYAiRhHz4geC0//o/s/0eiu585lMdsEH/Cm6v4Nf0Wh9o8ZYfCVGOOM820Qkr/Pv/91gqFsi7G8Q8MAH93Prk9BWhad5nrARc7iCMLeXV+IhsJuIdrOxD1ioBtonhjSKHomzyFVkzvO6jIHAZpNFaDiX2M9dLnzYCZ1Lc0IsBhUakraw0Pb5eV2GqcANztMTMKDRLmtJpI5HGGdxxt+Be/t6ZAi5N4cYUIhA86xpMRJ2ejT4qSqq+KxFXw+f3h5nj+Uov3cFMZaOknpkPvIh798uHggGCg4bJTGYzWCu+Im4OV8s/XEUERWyP9/KpcdsSc8B9WBXnKc+7oF4AYljDkkaeJ1vVuPWj6Lr5yd2StkrvZJRdL510by5u2chSvaJGiiBez6+lLnAyoai/N+Ai3y47s9FL8iLYk8yI+fgdDgwapIXo/H4j4tLHwVFhJ7x0RbNoeqsCM9wlTPSQOxS2XC0KIm3X/ATJTMYpQcuvpKzpNetEkfJVmhWt7yyqTwTkYCP8fu6F7/QyC5MPskje+grwRrryz4YZpCZNDf64F3iQKPITc5eJ6QNxcGS5iYDZ/PeqLsOcGWJ/RGBVcEKPuh7IycAA6bUYm31Gge510dIJhafjNK4Ke0Fz4SQDhTGVplhhn8/dsk4e5y2Q0RxhYZ+sZLEUEeRBEVZps+1sUXAf13rSElIfZ+d29Nhis3vP4GZEwGQsUCHxC54GZrFsIjhMQjYvSvRVqAlKNv4h00ecXU9/zXFvrSxbvN6y1GTXvDpBpEXIK+SbtMdGdkyJUmODVf/+oA0zg+vHK6N8YzvI3vKoDApfapJ4p0HQcs5m3HN+PP1AwEeDkT0ztCjUWKXNozF9iyWQzhSpknpm1Vlf0bZB2SbnI+Yg2Phw1UX6MFJq4ux+nmL2iKUf77FNIh5qHzKP9KnGjzhKClg4Dk3KM8LKFc3tX9L33mT1bibVCCFmLEMyFb6DgE7GM+nQ/kzdJq6+cej/YJTV2TRcQ==';const _IH='67d5edc29240eaffb0a8b56de215c9136eca53228070c7a0379302be1899882a';let _src;

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
