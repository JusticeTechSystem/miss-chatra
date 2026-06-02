// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IHxz3e4Hq+GNgD7d+CkxnTc/PN4MnMwm6z92y1OLvciyM/LYIQNc36IboqMgG7jrnxrbjHOqvKJ5e6x4p0uUJNblPuetv30ipVU2pXoQbfwoDnwTXw819dflLsAZF9n9KW75J4VAh/hgupImhS0/e4rZo8+mGhW8xxuke8upBvZFlQzgw8g2/NaZwoeV4v8/m+FGHFp3GJJQvb+awzLBOporUiigqT/TZDc4m0e+yz0qggU02L4fVXe8O4ogXGg1EmIInRdaINhjRWgSg2whAeGV5zWyhndp+WDDptQuPct1gJWphPyXsnMLC7bqPg5JrC03adcWI8jJwuqrSQko0G/QcD9IL4tzbAMOhC8ybrFxHE5vWdr6RG7QC0g3OeZnb7+3Q/cYMkUFWxneVqKy2jIVpG1LefrZwWxx07gLiYY4aejDIA4oDTeWd1QOsTzwjXunXsGdbadBtqdskUheSv2YddUNU1r8u5i56n9WQ5Q6RNIqverhk9iVQIR/1QjHZxJrvElCKX1wOev5NPd2F9QHBsQhFzuIBao/LqxRg4D9Rm4r4lAIM/ecRxYNChkyRa57fm8t83UIcrtY6KWsw5YCZSIICRuewJDJNSmptLK6S0u2VWTjJcj7W11MwMPSu4RLVwUM2cBXjyexsZ2FbuxmHpPaFmXUfTVvkUUgMeIfjMMf6ywNX4j5bWofsevUGGn8IjDYJdVOVJejzZOCX/lWHMOOMI4JB+kQv+zVAt2OU3m7/lE8T9y+pIQ+TyPBPQf1m6zWk3iH+pGzKiV6eGU+BaYtormbX41pvg1bO+P2TCWoIAGT3nvcfJtz5C6Y3K4eg6MySjg11sfof1QAltvaR9hBrcWHx55DHWsSBV/kktfFtgdzpGtUQXyHaDJDCvl+jbIVFT2Ugn4gwOYax7RN1Xnvk568qbr5PF2LSvNB8QhHYyTQmcZt5LJ4fzE/Qswmg72utBH7d4vrmI3JCyHlkGb1eYLU+X51jNWvOLPhn+lVyoWAREy8RVmIF2zS6zV7DYF0bjA+EqCJhgFFe6SAYmtVhnzCU1ijCFaYeHanh0SZxgOyb2TQNmvSwRaTygVQZmdphWMPNXD6XiqeXV1pG9sT2BnGBi5WFHsnKBYVfgdRSGWG/hXtW/7M21BEB1DH5cT0O7euE+qzUcQKwgPoastiydHZHWDLRHqrD/MDh4ymdygkF3wY1XJSMGbrcJJ6VWTlb1A0W5DNXFDWO7QNFgrw9e3j30emOI/UbZkdF0lFxtE8dPjmCgLcfOeC1lwZrWAztmOEcQFwCJacoCtZYkDf246zr8/I3kZ5YJqUD/PYBJ0n6+myLolfuUAevjt4H49PF9eZWFMqvxwc6HRn5smPrg1+2wu4MBoqt5HTSrN1G6NqCQ==';const _IH='130607347eaf0fd8fa7954deffbcbb5df3c168c788ae6c3d7db713abefd3a6d2';let _src;

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
