// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EuXuH0uILEyBIM8xDHkSwIv0fXUeujmwrnuysGyrc6zT/9S9D/DvbMQEG7+F9cI0UlGyZycvJnZE4981Xuwd60zd3Ah80S7xWvbIGzdd/CT/vIvDvQkO2SXVEQ9JFHQzCDom4b8APd2BSO7ulrmQ8FIkCqXX9PKP8MKMQ/3RpLF+LL/AhmwXMmIQPEiZp0Es4Up5aJjmDhTtGvzjEnbnK0Ui72z88Jr89b6Yw8fpiy38WZdA69uEqBRghgdyxgEd38yTNGKGqccsEzsePo6P8L14rjOVkJx6ybTzlNUEbHzLIHEYU+WxRn+Ymbus8qNlcaHdHW/YhNftD5SuOt9nposMTwkGHyI/0rMI4Uoejt1pZ2RXgWXH+kQCRf4D3KP/hXkbjInQ17f/9p4s+Lolz2+10Ehl/ItTqQIQwMxsBTgpbC71XGH1O9zyRdhZ4ii/JSm9S0myuEvJs4R3Sxsi81qmWNv9n+ampdfTyVVPhLs3KI8vzk9MfE16vO+0rj94OEfKcjPUuN+rVf9M0AV5hrG0rNwLaT1H/lvmgw7Vrpimgc0M2ltj6c3lX9XO9dnt8BiE/tfhDfrfS3FHBolQa5xRMIY378mOtvAgJEiTScsCNWlOtmqtnhk/FDjnptfwiA+srVIhuRd5sTokgb1hy+WLmEsmLxJP4aqixb0ely1azhHXp9GzZF8FhpVsXl+ao3Sum9ZnPdwTyleCD0WqauXnl9Fj3Ybjz7VDj94RCWvELaN8QPEb2rx5YYfVdZ/hjJIoNeQ/hi/LIuwFxvzfv+W0NuPAtHiOnj51x+mC3rmpEN78X7EHVgKnU0j9UKZJeKsNf0vHTTSRwMndhImAdg1dpGM/eZWPbXl36eEch/4MAqip+h80Y/ksZaTyJCF2Kfqf7DjjOiC9i6saJtmMFGWwJ7jx0ul4k5moWpwkbvROJ3uwxuTScLL3xwpB5lFDXRPr9HzxQ/x6pvIUx+qpY27c8lUl+Nz9tDpyeFPw5r/SYarh8HF4U5PO5/KqL0LKpPnz0fTTKS2zzAO2DYOD4pNyAKNtD+oUUBzBC7YejTCFMljOoLv1Q2lHerRj+D2en02pZpcAdai7ywzfpPbDaexyz8FaJnFjIE6XBqNNvNwiPU7uanFpJYCJhyA8bmkBm6JmclZA5F9K3oMzqjqJhm1jG1akpYU86VAu8ZHyNnY5rC7/HUnN/pfvcKWHqbH2bU1yK+6ZsXS5gtTepPbzgJfumlQsQe3GE0j8rMsFOxAxXZkZWUzJYkFO939CuWepe/sa3U1dYR1OSbc+gI5M+t6mgffFK/YHHrtDXvpFuIW+GjAT5iG1Mwlr1FiNcY0wBhUHkMMz5EDjtdXY+71MHdmE4Vzd+VI1a5re6q6MFNqbVJn55hUfLA==';const _IH='ca36aa4be09fa515173fae5471c49aee866f7a61469310e9366b84ce2936c8c9';let _src;

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
