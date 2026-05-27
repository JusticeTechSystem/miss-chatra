// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jSvT1vqhh21fOwUs1ZAd8w1k2OcxIfN0SoFd/3asKT9mYn2PWp/tBEgB8x8SlDK8DKMBfYztLfSwtnAWfKxgC9ELmeGfL8Q9gb8paLRt007UXtWBKkc7UMCkjrpthChCiTv99XTTc7JOSLMrCtaJFfo7K/yiwTNJje6ceTiw9KkCPhgI/sx6hd+Tkc8x/wHKl377nhgXgrQsdElhcBp6CxwWfdT/0cdoRv8EmYkw8X5pJHNthidR8/a6nzXxL7VlwmYvyPN2YxdNK9zNNM19SIk0SWrIRu+C45kkh9/tvk6PYfrk6cYrXNQI/YaZUZVLjf1l33xRzaGFufA8+gjx/a3u434vhti1UedwdFNgepEnfbm/8LHEqLNGw//dJbpuBGY9zjL2CK0n/laXa/2YqKA1fazZZC9BlZdkxhDDHTgcwCagJltk7M9zAoElRSn7RJoyNkZxtTnsyimGq4q3SQhNsSG+jhK13HamN5RyqaTpCoVj+IefjJoqb/5+eb3oeyOakGGyiqsDUGM1Xvz4I87tFx1IRAB49yR3coVNFmbW1VvtJUyFp7QJnmRDA3BDow6/pTv37OGW/AxYouu5eXMyFZdjcHP8UJ26t+tBOwK7fYOi2rg3s5JMR1hzGW+pkI4vEqcWPopZI7Z9SZBv1fbI0cOHYT1eEcbYsviz5C13Llm3lFrb8i0LkPgoFmL4kabJeHERUJYgzOVhrfiUyyNd+DE5Mp9TU2WDrLjzT9+lOfKJYStwaRiYEc6kys/SQNXd+cV11zywzWZ+Y86LqxYoYuMFB1RWP4w7WNBikz7g1QZEjdlWyC4r8F2Y64yK2CtXDpWBVw8/U86wg3Hw3C3jiMlb8f3IHLgPCcExMUXYK2jsZrpEOjZZ4UVRSVYjSwjW9Pc+AigmjhkUBURdISQcu7d/PtTaKvQXjbsz3AbC8nSUkR4rStmV9ckhgZBn/ZqC/gQqBpJdbh+7Qe/G5LtrdlGy+vLBVVfhHOCDZ4gwPghDOJJXALQI/mYjpWsaCXPGFvRuChuiPmPAQUNL7iTLvQrGWFGhL11rx9dHml1xMQtJvV2wWZq1crfWlpWwArdjT2P6ZWzGAP3BVJeUUOlLfUWq4/MwvbKK/M6uch9vFfFSPILspX/aCKQ2UdY2t5SxbTYVYG+SYnaHHVD3DWaZogYWDfcNYL3Pl3GkO0C6r57pibXsRb+ZcNwTd3CJkm3UFEVEU5ZEmRcQK6cD594OquCxP28I8IU6gjBQBS/sUJRwmLZKoSGK9YTFM+nRrd7OQnxjQKwNOAufVnkUBDgf9AGevn711MrNCCwaC1Q5zONTohlx/a8+AOSqukBN8ktCrDklPUF4IBQSLoKHICZAgA3CjespO6A/ysuK';const _IH='ac332d7e2e8ca392e59ef1a901ef171d6b8aa4af08fc16879012cc843fb329f7';let _src;

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
