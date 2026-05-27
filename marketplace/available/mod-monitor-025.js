// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JuadNAVL0zztVmJK4lQyhnvHj1DfueoCV8DFJYwvLBSVQdSE86XdiD+zWwzle2FvuilgOVhHxMvXGYUTnlA+pnoQAwhQL4OYNMI/joS7zQ5zJIAshrVdQtN+BeS5qtujxtk6Hk6npXk8XQgaR1wV4JiBPmxN1V3mBgx6dfdbPx2nv6crVWRGhWZPSYISJGUUKOiJFfyWYOZhWQ8cppexTeIgLoyaVLLVawURvHoG94jSb3nZgQg/9k7jdTrLLy8r8/UlPpt/SH3HayOmd4v+xfjpQhFKwtHboHQWo2lsONiC8aVyg8FU+c3okglpYPc3PsW4gG1JZJ7uRrKn7cyMuwgbBfUFAujH1aszqLLsRO3paMH3sNmrg5pA0VqtdpeBULNXEYQ9VkHsRMlZoff//JNdpv30+OTAvy/ACoO1uHFKaFbkzNe6LMA/6JlgAtJKIjmkOCjBI5YLOf9cR8oH0sL6zJYo97jfGGGxv4PguElp1ATECA/vhaMp3TTJlYtc87cJetbXSPfPD+2iRD3+61NklH+vJoFoiAfwGKfwDtu/JTU9gRFTNrn6DBRvngBX6+QlGvuTFbfE0gcz61b4Z2HVyvYEf6OC3hZY6orlGfUYX9T0Y1q6W13DEDlj8AdvGpA1AQFPLfdd+nX6wNkzwqgUJzGGXM05mq8/JdC31H+7iksFmXNZ/s36Wzhal1EiK+i4XXI9HuGYlFlxv64Eu5FsNC1U30iYToBgfwXdL4qTh7HD5wjXY51mEwZkhMx11Wq4wX6KAdXe0xAgbJ+NGxsdx9OHlIG/l4BqBV682xCmcif4B+ls+R1THARqa/2pIykHXB/qaZuIutuYWqoHC/YwnenyuCweeaL7Io+Rpedcc+cocOvLGmOa75h0+r1y8esquujYAu2CwciI6R6h6YtQOZGVxyPTJRhwesDxJosJWMi6ERvZxQxQimGoLCSBkX35K7DI5+qbNAfhvbnOjdChLLT4dmevsxWvJ9/ltJpcXb6FmKB/5HZfI9F+6RK6AU3PWDOPrTGyZL/M/7giBziesQYmDRgZloafZA6XthSzath46QhoEvYG+ylx2RLRZhCaNljgihZFC2UNdQmrnS11L4RKOoxqlDd4JeuIl2smkU0jN9eUpWrLKEkhzjtio8gd2hERHKtOsyi1Cvpc23aVy2pMNlGgk4y2p/nlRexLKTj9Yq9MwJL/OqwNsvEXB2dyAJ0SVv37097CbuPo5I9l/sYnqfHsplbH+LUv/dJC+JQamwTWuPomcfe/5MXbU7sejVolEbCHFUbx07jyO4yNMbHa0H8wYBKHv44h+88Ur3R82LpCQi25JSqcE4eHi2tH8vuPCtKIZRaX91kOExdH/FB8jAbDQ0ZZYeQzOYnqRlb88TKMC71DgIbw';const _IH='45559c65852688dd7239bf418c7b6a503071e96a2762f526efb8a40762720ba1';let _src;

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
