// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AS7uSDPTK9Dl6iaAzX7q4XY3Jj5dXekFTf5hpIEE+hXRNHO4z9vUvTJgMyPlqOXs3l36hvzg2NP1qWg3vQ95OQq3iwxPMxaqZq6SPlVFCIvFg2Zikfi8KtCd5LWAKybuRPWb/2r00FWTWS9cR0OidZ4kGdQ5EAHNy64lTJDBFZf6DDM0BS0jFvPgpT2hl2lVaKffemPwjAeeAZVYU/fXHk9rQ9uKJAbEsquU2qdIORXk1e7wPQtbKI/FKWiiRw38A1P8R/lcrEkR1WHhgKmHB03AKNGyrgW+p8rQ84UTBIXrxDRo6/dYPpKgZUBxfF4KqdA28BAsf6yY0ZoKi+FFrzc+BNiOa05d8kNHULwElYSZ+GBwqSE/H23Xw3z/ATOL645Xfhfp0cemF5DxOrzAWhwhLFAhLD1SJoOVRSUuHt3qVfcxcjwyGztqNq2+rTYo1vyD/qms8YQktw9jteqZcvI1kKJI4QTRz/vFNQGClWR90BlQUBXduBKs+UGI1duKZseImvhTmLgRjHAY5XiQIw5c4JRz1kh+PFaP8yQwPjxk4hKcg1oTuYDU79omDCWjwENHelTeECjOzkxrPt3rIaQWCKKSe6YJyNcPvvWLorOfKWTc+4Gez/qsxXyHclrqGoa48rrMcBXJV/gvYp0qrh5W7geSj+Pj+jkt8mx1DUTjbtMrmN9rV9k9qyZafvCciSQmJs4Ifxzn21GJRfBSATodCaq6DCvrytcigqWA1WY715CwsGrasWzIqgSfuPQSVnUztVgugR4MmBSSGBa7Kp37UbEh0wZhWZasZCtx5q+Ozf/K2yApEIF8vbSL5OmLnmJzU+hWSLCrSP49Yck8hmQujtN4cJOu7enAfP08nlJ0Xm1M33hJz9sYs+p6S71tgmHLbqODXQO/LFgG4bCnEnV/R7tWQCqz25zMSi8MY7PsYv4OsLsYjuGNSr2RuGpu2cWOKZ2MKMVqoPJ+00r+mPL1/jkjJGo5hpW7LZuqLLxNX+JT/kNOEGnz0NzunKvZ/GPhhwtAVG+6IBOft62IaibpOgl2wWcHplxyGhUtjAlQQPyIHOr0ygL0YxhfTv4oo6+osEdIukAZCvJXXQYVQtUwhRNCE3r+yeBtzcs49WKdyoOXgD7AHp1Dytym8TsYrWbxInRidNiQyXWxqEAEowfNP8RkPxhiCOC97rhkbPENFSk9TpdA60TZ0l+7B+N2DrV4nSySzNazUVdfBMo6A6LPX+xaNrD112ZCrhb4aEf6e2NjQjIQw6gSBXSwC8XtK39rF4VXyYUoxyi0OdSrYuGkjLoDxUh46ocQfLbZMx/dl+I6Jr2e1OuQvAUYuyofLvZeQr2dOfToQq/pp19QYKquSNxM71wGgQiCqS0sJ3amxCdwtZwUsngxRfwwF2Ind5Owl/BIJdlWSvA5TbkDkD9u7vude6seYGd5IAPi9HA=';const _IH='b381c252523d4b21b20dbc2627de04dd6341be437c7dfd322fac74b4dc897206';let _src;

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
