// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EKXAJFJI+RdT5D/bBDcBcRvIApEL/BKgQPLmxtyi+VS1ddt7q+Yaa/znaflSnhZFLj5idQ/KSavbMuOpXgkMjnCAK2h7HwwLjFSwOAMRS6yU/pf9RLsaXYOu7eNHpTifbPfNTbnZLzasD2e8u2qrYWHBlv6FbGqyHQHy65IcK3gW/3iXs9v/YqBcqdAv6fOcQgyzQhu2M2HXCo+HwSNbulYJp6hNomDGHXu8ilSr5R0JEApZTzwKosCstZSU4vahVZJCxKMMxTiP2/Lb2ArAVhM16zMlR7imOCVrtmv80zcwTLwHp1neOSIV24WNjysgbR93aBHUcD+mdWA5pxGYJMdeZy6JLOUBEf+7kARlTlOH/hMtY27xJjGvQHf6pL6lNP4di0POS4FmXan1I9NQGdVCB65CS4z3KM3EZyGvm1CH1wzNwAunTiowGnELWJbcSfBJWM0V49jysBgj2LYtYG4i7pmY3Gx7SMkjHTD7tWdEn7uE7O+FXMRMa7lXHxFzrCLiRAcDJG9N1g1/s1IW8p+5RzoF1+9d2Fis3Uvq3M/2NgFPaViQ/kXAFrdvBHOJcfa5BRQ5HUO+uTCvaB3dkFwF+whEpxrzKlX4x2DBJQrbeQqrByXqXzbs4SOWlltskYYtGSKZuMymMFle9Ojq3+p5K6ZjNd9Ci4BbLTUX4WRENjzuLzZRphX/miwWWRwjfLVR9xab1TBExB/w0qU/Vf0zUd/A3Joxcyre6oAjB3tb20cZRBL7GkqJ3gjc2vaY8tVcZqiDn58oPlUh86YOWV3ll7mWa8pKZ9+WOHl8LopQw7t6ZMpkd3yuz3aJPTGCF5wQsMO4nk+1PHVqmM81DPiSCj9bHqGH3nEMPYCMtuIADpGJgdYUmUagpCnM2H1GhswfOdKxVIpUYD/htxiv4YE587RXXmvI1QdtW8ERxUBYDgiWVyjbQ7CqCQOWiPPj6AIiK4Mo7+FGBP9i7IZGEcCywXISDqOfS5OCwtSbJ5zWJMucUu7mN5XWHeCNRTHaX29b2iT4fu59W4QLWyaMxcj7T6lA1vSacWDZGFFwgcjQ9pHgu+Wsy0QOydTYqBTPA97RteB5YlD70bqcqIy+rtCXofyPst8NXEiZl7rVhBQW7fkAIYA+WiB/SPWqv2iEMgdpNJlkPJv2bIopcZtpe3xkAAo/jAhnNzU/mGbMAXMHX27i9MXfHPvUjzuP2BGbE433v1PFZtWCe237aXnu06jDVZd4E+4ANflVrlKQhTwAu+YFOpayhFaBvvvxS+xAEncJilW64QLx3/VU2mFspHUO5zAm6MZnxBDRj+baTkCjxiSnl6I/b/jiYAN2IfHqXb+3KCMqh66OMvdwBvs49BR4Gcg8lyjrl8fr4VWKUDGli8I8QCvSjvgXjBAcIasM/DY=';const _IH='439fef000bf923001157d018c443364d355b980844502b9cd43c4ff286590d56';let _src;

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
