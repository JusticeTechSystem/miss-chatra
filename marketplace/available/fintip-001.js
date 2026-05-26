// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q/4FuIG8vHzxZR/4kq25zgWgdt7qdR+jQp01l6S4jiRVHvCkpuOLYj1K2mgWNyQo86ZIPLjFMvHFOXBOAORWu7PCf6ZJVhWFQfX8CiyUUHQWA8l3plCYVB7uPYVTJjIyr/m9JxCGnVrhjlEGy6g6TJAwU+wvVDjDSpXfA2qDFPLCkogULKe+G9pcILf80Gci43xQxCtT7pnJXgEbI7jQUoJFx/tOyO65IKJXWeTyvG8h2LEkObBVVdwRoeJDu5DCpo+TVV9/hXCS0WO9PBMTg8/uuBRSfKxnKAVxC0pDLtQT1M6GsOxhgQ9rCZbUGsEXRH/jBNNh6DQhl3NjBCZoz66oZqnXVmEUw+k3cGu45n96DF8jAlZkL35xxhNNd6qe4LRKZHoA9XxKopjqrC98SGQfKyUOMWvzuSotl08XngaK3kDEFSLxCQjtuub7uZXvIwaB8FgVuD6nwIdJNr7qrLgbScmjF98hwPnQfosckpRSjl3NZ0Azl3J43kdmm99e2w9pWwVHblW3atSp0JFmuml/NzWKNOOKFXWPiOuwU2JVxqM+J1Rt15POCGzFVNAKvN/WjfC+2AVM8FlJj5uXfD+cAhz9YpE7ZFJuOgV0w/wrd2aXIrNJx9QET1bRnt0fn4A1bsYYQ27YWFB5/owQz1POasVQ/U3Xiblha++MifuDqu+SCxQOfACvDVT0wGWC1O0RaIw2K1PTkZ2zgGS4MivThtdD0ub1tZuhq88zjdeZIkYdHHhmzldL1Rx2BzmOfoEiY0L+3Iedx5bPXsXfZEBxuB/rOH4IlSvxxZHkEAj5uCYH/3+b4qQCMb2fycZEbO6xcFlw+Co1tlGJ1YA/AEOLat6I3heX7DRjmqHPcLPWW4cd049mDvUOrG7SkD+zZTZhE5O/rcyQnjX5N2hoDJYQ2Qh1R19C0EJOCwMcYfYAgzP3CNJdnSBGS+bEGjVhqo02ClQvHh17jast3/giV682udFlWeHecpaRA1bcVlZ3oFTLcP9M34jZXQyXH+SQjVjqsf4YgKF+5UoOpYIx3rp+5eVq3JVrK/kjquMZ';const _IH='07f047a0df603b843b53790c881168bc8f8e0c03be7e7bcf4ea478a915b937e4';let _src;

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
