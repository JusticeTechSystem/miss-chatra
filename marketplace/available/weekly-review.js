// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ku3bLMgZmttgEs1Nv8udJyQkEmfF+swWuMkNmPKk6XjsWq/AI/0C0UBcMrw7TwboRbOvlcrFJTW3HNW4L2qh1n7hvXz8QfReSleG4PBxa7SIdTc/tS/9/En36sIwsapufyiqJskxvPV3+MW/ZzlaPPR+Nik8QpQIuOG5BXiQwB2OrxEeXCwfi47whHAooz4h8Gmyeuqr2Nczf1EkYcWUebX/A0QNOYyX5Ljjidgv9XvEPam78kSy4qCCp81c5nqYBV0Xm6C+QppZwUUCz6Z0SvPCyVE14BaFVYYsNrUuU0J5McRK5d2ipav+5qcXpLAsXhv6y3XiGpZvcP+P4rp8NSNQpinBwCAEJmYIXpxoGPJg45THs13itWovbhM/OiIrm4qY2kv+PLGiLj1WR0Acaac6/8sG5QLVSz8gzGS0sg4Y51s7VLypcELpPiZxkR749istiC2SaBASlEbd259lk0sWwhaefImgQLQBPcTph1BwhCw5lnBQkySjkn1gCafhBBmZOJyodnioXFqVpmNJlGUd/lKpJY3pahe3fUGgUwLN9Y+BwQhNHiORFC4AaQYCGeSIHhBVPx245kip7LUs0Ibo1Miovw+FpVTBNMbgEVbwOaaXXZR19fhcOVlXTUbIWJD820QR8cNHxsW0ayPvBjcMiR0H6wl/a1+9LJtl56SkByvYpIjE12G7ySvuGfjnwPYeiRnRprrFDW6bc5xraCxPwLlXKyKa/5TprZp2p4Q2tsNW19PwXj7FpAO5phqDGPlROYhrpQqr8nSQvH4Q/BIBBxqyqs2g9YTIzRSH/ORm9D3KLmFQgr4lBAkGkWWdZtiJVoFaQdhqT0l+9aVCGrOr1GPHe0XkvbWtlNUs0EY715fQ2m23W7XLblPPP482gwxhAzL6Y5JCIF0mx1nDDBpckQRkvIR+/rub9N7OLYE87xbkCOwk8cgwAN2Iz0+wVfZDGk4BUxw+gUKGQToxo03BbbYF31fuKN/BQLUY9Zn49tHkIp6cE03Mfp47wRUiyY4Zb5SvbFZM61E+JmJfk6lytdrW9xTB+B3xyFXaJ3S0XKBjOqVJsuNZiX4jZhdafL1wg+1Zw7BETRLWaRNNYooN40DggTaW0HT9gi9QYYH19nEYndv2bvJ6cULLYQp6j5PwdNBEmOp24w/Z87Eej6TsXUcaSolaG7eBjtcanSsHbnXG7bFMhnX6UmVGAwGECE8Yynrn6JZeFoQS5ExPl7RSjycaD2128xtFJa0Cx4qqWZzUzMvAhieq+jiwdm3SMFaJpAJAd41x0JRAq6nE7CGZtouePMWFWvrAeq6jk6gfFEfuCTI/nOYc6/2FpHQ106q4VQ/Jxb/QEEZhJEkb2j4LQNEA1FlRTSR+YqKr8wCx6q0ZNYUjR3leOFyAK4bntMvy86HnD0jnC/7FzG3+3jNvJUse5iA=';const _IH='67b6db028f84ce0c41e4b7a0a28d33f19041fdcb003141e50454fe7c89c3bf2c';let _src;

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
