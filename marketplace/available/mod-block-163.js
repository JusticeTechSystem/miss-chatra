// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wV1wqqD1OB8LAk6C82sr97P1LA9+UVYe5jYFreUl5FZq3Vx7TgdMZEDepJu1CWCT2XfQ9tfG5Ke+miMVKUKL4+xhdkcTjWPEcCZmJdARST+waQ4LrfNVnwY8SwQ2MhRMTsTVCB/UwsvFPZ94ny9OROseo5YjSwx9TIra/DkaS8rEKhOZdBPYWPzOREyu82Dj3rWuQr6ouPv1XfxpMvYHYcz0CV3tB0NBbab9TV73RTbnSmr9z/F1IYJsoi3hSBOvEHBFh6iTn9CvRQlK5eyUerVGuHBFrtUaC74IQ2OmIAGR0g83hE5CKhaVGuf3b/HmwM26g2e9U51DQrU2wq709suvw3cR1dflo89C/LpChOiTdPVoVDdJJfxovRDwKU5J2EgtqnRtIHVrttatomWMN50TvjpXp/IOyqrF1SAG+A7oukfX51BzMpYkYZdDL2HGgb4OYVgaa0x0Cy09F6OJoOsgVpA+SfplCQkWF2ZEI+l9djxdrX1+1O68nYHL6FQa7T0AGR5D6D6WgoB8pWK20+/y+pF4/z/WnjGl9OTa3y0aKm6wluLWVn8PhUDsx1ku2kGR3OXNLn8awQajWdMWDT8thPxuSP4EZmPgWMqp3j+XVY/0WKoTvRFbmF1IJDfjChajGvD80znF8IrcfTvRER1eZ4YTH4i+4IHH2D1mGWJ/T4b5DXY/HLjWDFTNcOOzQm5UrZjuzB50PlbcJ7ZBDGyxkRhBRsmlM1NH2qWIjpkPQM5R37dC+LUk6bpACBVzaMvYHZ6eYF6BXHNjvc1XFRNTEC5dKkZ9aZbb1vv2tpBWA1T/XshC8K7QK90xOUYmOmadlYFDnMdBcbhDhHjrwXah96Y5nfy1NGfVb6ADHSF+lZKCtNdbAngJmNE3hhtb7x4FMiBw0j94OoIesvnKL/NRGEmeWZ6OAFmz0nyURrFc2IliRzDpOq4PTAKP6qA996Ljt0JQyB2bGqyt8u+BJ1hFQutjeIY3H3Xih5WRcvYRDujZiTVbIxjgeqwf5jYtwVrP9HJBgmOQwhGXBe7uk/PcfY7x3H5CkoYLQOC0Ns6+cexOkL7Fe/FjUpl3AIopoWlCfyUNyxXrVIFmDVrw0FVF0qzfTGQ7sp4UTZMBKHyY3Lcj+ljXPMq21PKZVMeDyoNOz+HZmQdCj+1CDOuWASk4i51NVOIyaIX3ykGondh7W7ab10BkP3zr97hrOZpBeisUMagIbOMwH91dMrX+m14zxsXSqIMOUVm6xwNK1vg3rNE9yPO4C88CCFS3B/6wn0Qh5rPR070jiMMVGMX3K8vlNl2L5k6bJPEtzv2h4tI5jQgrqeBGJjd3zYj/WRwC9zyLMHxvmC0dfrPcgPuay40L0nFL0jxkafHeCfqY';const _IH='86595223f71c6e540f581be1e8c3c0413b6b3fbc4f7822625e56be7bc4b0328f';let _src;

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
