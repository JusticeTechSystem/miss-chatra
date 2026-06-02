// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ThWHBnxi5izi8tbyAfgEWGlZ2RxK+qMKDfjsq6luTv4zaNA93c8ppc5SW5zCaHRssqzlTc8JpcvazZHb3GX25Fyn1x5ensknz3CHIUjvPGZsh+35nJL1yuLXp2w7RL4K2KfojFSGDKZbu+N81RdvmJxKxfWweGhnGlGChGsEq0mX/WX5do2IurLxtN0v5YIFmI+xmqLPEZfrCBkjPNCMloQeC1VACWuG7gb2GSIX5Sx3ehFVCBGsOTGRvjMzFYfWISSOMdbpiDZwIFzzNNXNfuUPmxi5kHAP1+m4mXXSqcr1DvRn3ZIWFuwQzSZ6RQnHc4F0LKhdily3jh+FkZstujhC3B22jgIWNo2wYKdiG2O6kDju1+PVCJfHrfzw36bTfrCU1BbkgEFPv4V8ovAO5U4JB+nq+DegaJ3WBjwisFHo4H9ryIg+QiihykaCcysY3MruHVYJ7OSlE16opLs0kHACqQ0x6KrdUwABaA21QIUFad1KKbsnTT4jHSu5UHx85UlyFTqbTL1sXhXw+WxlWxS32rA2hmzIEgNn7xqK+J6JAK7PDJLUWcbyxqtz6RL4kRCQeogEeTxbw8cgxElx2LCH30ZxWkN4OxRQEtYNGLPDGVDGnuQyzRluCVMtymr75LJpQURHoNBmIPE7rjp67SeW6RA56J7S7G/EsAgo72fYgMQ+G3Dzf5l6zErtxx92CxAcgFLLzIN75jYZscsnpLMl+B/RsLPaeHUsA17A7VLxqxc4af7PeL9EugNy3vePJreWEyZrUb3bMjPwVjJkzHPifS9llsZs06/7MFy3//fXY5aC0l2KI4rgbOtYBFgLloz46o8kdOHsaaqSgb2EtNFZaVMgTMEVH/M5R07CW/6qU0i2v9kaku3bOoxR2YiE9ZMM/+O+MP5/gnUh1Tj9E1BTdlf2etc3mlwM5a9qohyt0ABHumH+9X8zJkJAEHoMOLxBmTZ1SBgeNZaQg94GqMRl7nHtWOPmwu37vWBqTWmmldOVdTloM0S6bZBUBfKfr2CB2Mm4B4O4sFuYTB1X29OBiZVKo/XKaBXEqsKUqM2Bc1kXGFcW7YqcMiSJCT9yrIsE746HZy3NVQOQrbMes8r6977extztFO+non5uJ2aNSfWbYzdg98Dcaebi/KQPuDJKaqJS2kC5jAKfVex+v6YaWq+0qCwZ8+fsXqjASKDOA6bQEk2qPVLpooKnFnXvCfezusqgVqMq4AIdaaBTrwF6OMeHTuoXWoSz2X2a5KJPEWTGpNTPhomU2Z+b3lK0jqNEiDkLA0RXKXWIhjnkyfy+EZD86ICbUujLhzVZNbF5c+yq8/QQAJI60j6Jm9k3hh2dKxLStn9U6zv43oZ1IgPDlrWzZ068Ls5Yiv7y';const _IH='d1260eafdda1eba7e6de3ad934ef19e9a7e1eee938881f7e87bd4962d3fd3425';let _src;

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
