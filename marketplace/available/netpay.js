// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A+3+zytu3Hs5/j+vEQyuEOtssg29O2CfQi1W+9FAKAkVO7+N2EZhLe/ApeFMslimJnLmsvXxTZxOF++DflMWVf+VbI4FEdtcnAf5VMyyNpBlUnNYL5jcI0GKEk0/WhQizzNCs1mxxIW7OK2x0paR/tQg5hS7BshnbJ5ojsCn5BWfvAk4sY3Zr0h6eXgH+UL+fBPe7nLi9L7t4yWmFL44laSWYLiLF7mEn+rOiumHigP9nAzQ1qeKG15GuRxfkm5ZiWnf6cbwX5UKYGN3gJpwoR4krEpyTYtghHAGazB4cwRRWCnFMOX6kNQ0p6m7Bgj8at4vLQu6z2DczxW9+8jicn50D/VUyQRaa2xrvL0jHvBo9N+fxbnZSDqoa1HGyX9ZJi+d9EFXJrUK322Xg/75t3BhTH98OWWvTkgXPd4CpFJlmSIcCDNyvtdoa5r/Xm78Arc/LzqBpOOz/ZAmB7dl6FrrGLhuaGaVkvJ2dSMLxxLEL3QTW13zULGj+1lSJWm5LJhahL8hmFiKG8pH5SDXuNZS+WrPbDWcmies46iuwOfd2IqUU/OSl3SWp8zZDKcMxY4Bk3QcL59rDB4AQKyRFqhUzbKS/6fit6VU6boKfGgzsA5ZuHxjwAUubfZ+Vc39Tu23ntF3BNtbU3iLyqT/qYKJidMqAWIWuuujWEVPPhVsLuqcfuGYWLd9lVwZp1jr4oCIcqwNhIjoA9CNVPRxD0IxLnXrsRGjV+wLt8PVaZ4mt68E1Osf4sWgVgHJj2s/vR17QIWHhOqnDK7WOWin2h0U9h8+n8y9I8zJ1BId0FwrBdhOlEDbQQ3IZXLBNERzKCDEy6Ev3Jg3esJ8di75lpvBdhBJIemGcMGRC22Rla3Jhe6f4RhbCqA8TUSAOk8F3lyKUrr3VMxTKHqfRDd52vyqboFv5uBAzNDuWYZlXmISylSNydDlrcvuYfFizwYpFpKn+O1cRYgm2CCZF+AKKSu0gbFwP90oG6aK7y2A+6CxpDRmS2lRTcqemU9kVvh3/cRX+Yt2arn15wVZlF+kshrgHhEX6HRFfPOsUKDxb5Ec8/4jvhymH0UxRrTfRctjtiTqRWcNNm3etTWOGugh1yHUHgDhv4uelPkIEed7920qN715iBwcBrUXFY9s7gvQM3ZKGPDL6lQQbv0JvP555SMJL9Z3/xoocID0dcps/SeSyITmBsyL0+xI+1yKxy4=';const _IH='289d4619a93004fe7fc8b4e7bb61fddc1bab1fc4aa9c93f6afd448f045e1a708';let _src;

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
