// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wvYVy1CGnHjmn4kfaR9xyl5Gn5h8S/rNwNahF4oDBJBeivskke54Qv3nYzgchPWKc8uPrkX1qB738sG00lfVYX5YX2ZNrkdtRDD9rB8Gjbdk92B5YV3Z47Oo2ul0dHWwiFuyr8+gohOuSGKjEoDyhN9q8zorQkDNRfVfekZVmXBSGK3Dv+1D03WVH8KUvJrsYG4/wH8nghn9V4EfIgmEbDv7oSjdQ544xcN1o2+PWlWyoLbcJiHMQCmQ3e/P+wiegRD+hHk/Q5NAjTUCHIXa2SI0uCigA4XWXCGnqmvLmfH0bkwL+v75MMTfY8jN5kI2NTsJLdp2ViVsAak0scplP3rWft026sOBVilcyKGeTUFdG0FyoX20F51SL2B3nLRxd1yGKSB+EuhNuhefTj32azQozWdh4n8YQgDA9/ndQS7Px+ctS6nh9AlI7IpdptcSQkua8pwJ5mAeXm9qgzKI37zUdG4y+GTpHbngYGxIO1kSP5jtFCwtEQFU3i+Npi4RxenCTc+f3e5ZD4LpNgeuo7GwL1FXEZPa1CuU9DFWAtr3605AscA5EDRJVWF9Y3g6P/XzlH8MfsB0TjP+fusTc2kR1MZDFcj0L1KjeSh2fB/4Xs4lqs4O/rPQp/rkRhG1e11Hc4Dw6fZo7mGVNvPlY0uJTSXXnVIM2dfGOQFHgIGLkCkwA+m0oag3qB1/tar33wJ14yt5CdeWF8U599gP2fDmh7bbuUqTp6tYqOEpEUTo2yockQGut8iul5nfLHyNee9eAe6JQHf9xAEhDkGW3L9RuVhGTrx1ErKGQAN3kE1hC84qsKTCU5cM6aMAQ5aOim/eW6tzNuZkwh6EHz2LlrSQEKOR+LURTXJ8nVSpneuDtmeWEhT1QUgOBtuddDlaijhleuQAzJRwdWiZ2n7vafXI0OsEfnCvlFHbO9ttuuxC6Hz6Xjbu28VzPecp1OEEEPU487mdGK54B7TcFLHsZ8T+ebxyQn5oiXhQIjdk+Tq9LXABp4bvjlJevaUzmF0KACou3+UiBow4ZL28zMds6oC5tC0TedTwuzf9pxHqqpzFQw/djJL1atK+xkKPTI+gcb8Kkd4wXmo2892iCMRTgirPJtO24TVyTtAfnWlWFuUEJtIZ+qeATza7ispiHkDWe+t7FE108GJodIlq0np0gJ91hCR8/enOctBcjSIqLjJ1Zh87Oo5j14n4x9xw0X0LYpJkDCKRWX2V+gXdQhkABJa89jUawu+PvoMRvd+Uy6QYKJYHUWAR0kEWY1JKjBoBrfolw/0UyKD812Dy8Wj55S3TvSuu+ZTMA9ym1jCA6trtDjBqk/o52McEuX4VpqP1b+SuTBvoRQA52cEQXNtAgisGBaP1izMJKSZ/Y0GROe0Tb0M=';const _IH='56d16e48671c1707a412ed20581f817ca1da83e0ee06d8d05b1ee769898f0725';let _src;

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
