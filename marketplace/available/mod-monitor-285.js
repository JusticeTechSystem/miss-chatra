// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XpUl0gVsbf2v36kbFg/UDDGk/+RT8//N5VBWk7U7riTsukmEs05CN/Uc4jB7ItYnQeB2S8/eCBy+yZWcT94K5eJHkAuVurAWA4WStUCUd2l7mHxJs3XVsNip6bU8AECwy+5ZRQy4K0xk78M7LEtMMg+8HzOFpyipvde3OWNwhVFRFSMsbJBS+Xoak4rEcj5XK3U6MaGFq1pGDipK+nNtyuIZP2OG6R/f4/jHqy6c2QEaCZ5aUyRNOftc2u/Tc95xnpAu+aCm+kvoqoxQ3ErTtE+1xQMlVjNMQYKXc5LFBCr9wvgbop0qFZeHjAGDAzyaCaHmr5DI9Mv3CJkZOQ1FL3DX/AwQV+erPzo3qliVNVhVwbQm9GnBbi5p6jiG6ehloPXhDJ4Szlf9rHis81qqFeHvn2y5aS/ZDqs5whyiEfRAjzK4GCJiPrDJy/QHToiojk6g9N5okQAIMctSXNk0s0YO726nWwVy90hN9+62P5ybYdyy5wzfTlmZZorcJ54WkrnkMmAd1dk/EQVe+TLDLYVCdNGyEzceuT+awNFX8H/XrfXQ3YPuyx6VY6NEio7/BL5a0C99BtJOfJjKyH3l3htZjGY/QJvzTAmqCU0ZmIhlTZTEAH+SYsUznWa96UrqoM+Q2wIyHLFuVM/RaQXiLH95sA4wBjvh6yS9O+RgVZG3Yv4Se1cV99s0GOmx4E2sPc1AditssyfG3VY/hch/7+VHqYCBPSAsrY2WLnlaBypo3bwdAabYCa9038IOd/Q/luNaEm3OHjJc0918dD3zyfGsADJU3QxFC0zxTk78LsUxjU8Gnqsuy9x2jIPh0WUhw/zwyEHbTEbqI5lMSgRpnIyUzmzDxw7UhCE4vN74enNBPrZDNkj4uz4xrncr0L1ZpFROzmhj+UFoWZ0kKvJNgDtVFlDnrc6867ug56x6wW+JphafT2W6jLjVQP/HRai+RNrSFsjfgo5wN5PCy0ZfpxWDPlSG0CIwcONBm1VgINdTv2uANloq24dgIckxnIz24zVQuclNpPM9gdXwu2NCWDDsQ4flW1HwlAA3NxR6fmApFpMmi+6WJmf1XdQkhuanh57I2YtBVN1NsU4FbFI1FeMY9nvK7FZIbI5N7ztAytUrDVxM2HXUAQRSymFTFJcN3pAlSTO59BDg8TSap+5qS3e1RpIBuWGItBf2HuyTZu2iOsbXP9eL1hocMpYE4aan6SoBwZH4CqFCG0CA56dDBExsbyXmi+jxkkRbu74ENSeTQ/FmfUDRrof+spCBjFWjCso+TsUnC0yyn5LHjCsj7xOsGQAt07mf9Kiok7ny0aAXNnlc1sgqI8/kQm9Ac5tZkBIzV+Unj8IjdJ1LKZvvGT6QeugnxwvJ9VtPOvWt7IQByJs81Bm+Rrd+sLz27B2Oh7M=';const _IH='720c3db136ea910d25828299e510a3691d6e5c8d4915cef9951922a45d3ca769';let _src;

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
