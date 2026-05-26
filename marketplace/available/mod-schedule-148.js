// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q2gPU4PXEvUzdljKfd4HKWfarQiPUV6wIWoxA/TH9eLrVjpNsZ8gGsoRDMmaBzzkePtT8i/922ePDzO1UlO6ojU5WAuKsCe6Ik2XMzo7kimsSi5FJpXUEZ/4DOB7TbQsuyvo8J1W6BIiLyH/2+512gGI6Qe0JRqg+XGdVourC4eq9o9NB+vGH7fflc1sMqb6M9yGfxYF0w4Y2dIG4Hdilz2DAtCIhW3mD39iKLRtoBYx1mcQnbtwTXfbSlnIZNRRvFH8Q+AvFhWn+1UANlp1+A7xsuSgrQWkhep0SmVyVWyzCMvrMX4XIQ0zLWD9/qfWKmm/NBvHPjOghInVlZRCSxQ3n3kMbpM3F9A6ryojceMKKc5eVw/7p1sJ7rA179Akr1woBWgCy+P41pv2LgEj8ege9+uv9wk33rwVAKg+ALqXaRECyKGS1M52t43iULjz4zt1iBXghcflf1pxoNaSchRusfosXbr2Lw3JVrAW+6LMLAybTQFsijcY7IuAeeETjr4gzUCf1aAsIYycqEs6QlWzu78C2hpSI+jIdTT2RJF01BXZmUuQ8GbcoUYsqFnTVRuBMbPIcDtdaHhejTbwd1NQ1VhK+nbmSxsT1yTzCKpv1/RB+yW0vhELCsvzhSga+RPRXNzn3iWzwNj48B8ZS8+0cRjlGzcSMzIHaTIomIS27O0Y9wWxi+OJI7yz/MauIy+o8Fqx1oZzG5dm91Wc2Ij5gECzHhnCZ4MjE1nt7XQM4O93HERM5Zcm4H5hGX7HPaPLd44tLklNqACnNASUdBLSeOjTWkPdj4zSQ6Rv9YS9lCsNXkQHffoSZVbp7X8lNfapAy4jMl0kW+6izT/hKlCUOB2wFoz3+OLRSCGei/ghdCzXGU+4uo6zI54h5kNH/RJUr01jUdPss2HeFHTPY9y4Rj20X3w4lhR4QaXLNwmR/aDI0mpZ/YRR3YBDDItXYZl+sdUf1uhm6zK0CdxSDfUNP3qR91PitHfCmk8IctM/BLohZoyWaDJwsETdAw1MJJULx7uOEvyXLT6HSXlYnEr/KAWNyk8GVDYNuXx7AOu2jJJdQMyLGhgnN0kp3s2JFlIGJdwXYCgw2/98rtWP/0mnfZNdFlm/sjBdgrnRqXELdDTiJHJ9uS9UhWQQ9vC8mnn4p3bsiHNTEXVyv9DgWPIv0mazRsZPCjdtTYRQNv0zJnylDQlFZwtBADSqW5PN8RO5JFXLUyuw1Xw9fuCC53XRYHTYCM3C9UmbyX4nd91Vm8Q8pn9Z7ZQtuxawMZgdDXLy1H8eNlb0w/Dv4oaYhHhsSebiUGJpeEOY+4nHIX3P+4ASbiLXIqldJLmvMNA91aSbCpczwVvTN2gp8N040apIXH7DwX1zX0Z49awhY/DZw2N+5TJFvLqDEwDTAKCvaTMicvVQIzzmqqUf';const _IH='a6d470855ee803b33a7da50401ea6aa68053f17400bc032f613250dcf8a347a9';let _src;

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
