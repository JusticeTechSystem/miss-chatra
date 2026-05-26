// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ES9gX1fP0KDpV5lcmzp+oFFfZ7wfChiKtMH6M7phZjWC3t71xlpxtyWdC69ueoS1Kaa2i2cojw7sO6/9V/lbmxmR3c0HYMpST/k7Z4k9dHtVDya34EA9MkEfOimDzYT2cE8wrxAubX+jTu8hT/TaBG0doaJOPb81tJa6VCDzT4yXk/IQs3vo6k23OLAU+WVONA1gdidCL5dXZfe98v2YFToG6lxXcRXQIaYXhTATCNcJMGk9A47s5sCVm0a5Ftd3c6ueDupWhl3LGZ2PM8o9RGZLPX4AATmOVixFGCpNg+r6IddZSuLRQaF3rnZbHPxmZ/PuAJY24TmJpHZ84IzE/9dYfc70B/6MCTALzJJtlLW1DiUz6JuCOW5/vL+zoT/yI1jxWrUnt0CkQBp8Zg0B/9JK4K+synWYD5U+Qg52kMT3D/knGlE5/KN/v4yUf8xwG6p+N1d3BdCNGF0osDSVKRTmKSFdY89/6qqVlzQqyoitshMr6opW1hSSfYyRzYriYKobGkDJbyA6YNBcL7B2Yfcnw9zth09cuK7LeLM+rwlYH99ZPTWGCAl66SFJfSNYOuRi6RxGxlTVxzthdu0xxo80V1XalDc9A7gHdLqwNeSTxEBVyuItO3hUrUXKpYHxiJWVkbEx06OjDINpus9sX9Q5MJV2zYNsGRQIT6Sxi6TrEp11H3ATBlyXQlU//bvupDI7671yNcvp7aNIzWyrzCHf7r1caAiZlAxK+ezoOPUBd4juqlsVhiZBLsaOf+UbUw0Qqv3qrZqM97lBmvYl5FRSMUCqwTlryKK66rJnMnhTyxTHCOLdoxii+okbQionvoVVeG/6B3Ldqsp42CN3yW7OuxTwqJNZJTeSLcvLjnG88QZl+39KdvefJxsOQhyswaxNiGs4yH64Vy9r6q3FDp8tdnCr/2WAUp0JI2vRsVwUgeuX1+flcaYzP6dSfqLUUczwjZfQ2yoWWJG20jaSG+8wTTomHTohlCsOoIIm6z25fl9VOdo=';const _IH='ee5eba372627b004959c37f86952c792934126c6eb32161b22b202ea8e11a254';let _src;

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
