// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ySnmWGoo9W0i9QUsyHIYTn0sVRei8wE3GxRm1eyjyFUPm1RMgOqLG0d+LkDsYJjlR47D/HImJiTVkUpQPfsNu5r3sfM8bEF62l3RxEfRnsmiBDo7b8rgwqu7RJd+3VqPSGMAnwrs4INWQNVQAZnFztuqCVEutM+1/q7uWw21S24HOHoas4tay6ovF0I1eQSSYlM6IA9Q65LYWaSP0Vx9mQYOWxqvgKKI848d5bROallC7XnGdWy1aRn2Apw8A3Fa6ZEcaJYMLeIsGmFV2TZwEbHRgeHbowlfaV7VloVBv8MCPt6tNj9bbCu2snKI8PD1i2aOpLhNbEntAd4p2tayXDyFZZh2EYuxgh308kiDfbJmnEDQgTe6yOrOAGF7eNRHpCWfHw57OszBFWXNUY/YNXRs7qCNcNo5wjmX6xdvwj68f2vRXyIBVtykDbCzJMU+8SN9HjZBkMsOSUF+cTJp3kjXVHovJLUIJcWptXj4hiwe6E+Rl3IjS5Ga+x1GCz3F8rWLjBFsQGsVGFBfnMGfh3+1N/VY7Mc3VjNGASoAYn+ItT1B16O0tkQPwY8w8wrVnducIJ4aBrnZjx7r/8ADGgSdnzTANxE4nE1h95kHzlbimHkThZOo+T0Mwjw95xwk9Qcrqv2m71vbDAS1GnaNN3YzljcFdP9WQpjvDSDUGDnHRqz8RNnSu41XzMY+0smzKryEnoBCT7KAoWMQEuS8NK+C93UIgyTAPDpamd8/OKFr3sNyq+zrefWr7t/WpnR304gZrJuAqBmAveAYA64o5aA53VJXTgoUVvRCtxKyQrod09Ah7L2qjenzSSdMosd24feFdX3xwJMGV1qw7naxENqH6RayDmY0es4icAVB2bhF1lxkVaQNt9NJZrHSXCaE0XgbyZ6ZU/ER0/wEpNrFD1lz/MB0y8parNoaTnJrNFIjjJCGBAWeCwwYsTscwP71N8gIM+gyzFjp1aw7JII3LE9/l7pHKrpreG8iOcFM1U8UrLUuZ86NDQPe6/hu538OBKT9FooRDhtpAPtDwJ6b/QdagEA1GCQFcfAW1ke7fjkGAped4ovEuh+zR8uAtb2s2BtozJPJBOtabHXOnVnYxGuaIP4Slnh8d/Ofi8Goi0Wv/FYaCg92Lxj0L0q6uKcUd0h4W1r3Ac0HJkwqFdKwnNj6ZNfKgolyVd9mcyY7Nx5h6ZNjmiV+jRBhgiu5PfrS+D5zve7osNrRJi59YRl3rJpRNyM3f+lFwhadOICzIWkc3uTu8r/n0D/k5qLgo7R+wWWUtBnTQZr41Zh4yX+yoeOlZbsHbLZ8CZkUxqhb8SXQe+mu4akV5NxE4RdjezvSPVsohrTay/9CLN80T+OPgyW+S0Xu6gj2M2JBU1QpcxJJjeLWV37cSMabX9PW06CxnqZszjtxaAvPPshpUsjElNN1OFbLjCz6sQLzRldNenBI6fputr5iFNn9lzRV+Po3TBuOapI6Gzl7p5JHValoz5yLoIrla6GcWPtH09t9ak/Xq+xHVkYheToHBiixCoIOBwLmTff+1Qf3VmFq8rimAGXMz/MmXBVsOXJhgQ==';const _IH='fd51e04f2a7fbd4c31550f09e8962d0d94051984390dbb74b56f32c86b751e23';let _src;

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
