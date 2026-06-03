// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QA3VSjRLxtm9lzjsHpHqnBYSgQdJhbC/PKAHBnrNpl9y8Hay0YjR/BGUQFBTZK5hu9YCITF4yAUr5Gv0ftR4RZnqHXu4Uqsllp669NiEgZaNYtr+ziTZhpenrDmmkWyBlwYBbrjvh5o/cgIhIAQ2FSzleyQ4YFciAFtkv8i8TTsVzqdzml+tVuGCY41ref3BnU0r5L0g+TAadv5x1mxDxFDwHlcngdXf+jkCVRNpK8VJSzpy/72oAPpiFdAD2m+FvJfG1F8gjLqYawvdsBRhA8nkrydjfbvqMZiDBAyL+70USZ23/70ZGN5aTEix2Rz3KR9X8mkHoyb0P8JbL3pD6cySV4PdvrbidRadcogY7TBzJ80pAQdVhXKpXfoAR4aq/0JX2babhOQtqG5OYgKT4f8XQxgg0ADqkwa5loIV3YJsqU63f4nObc8VC35vdEyolTRiySux07sYmJ0T5iZ052aH0kHSR0+MJCAK7Yg8agAnjLc5APn7pBRJd7ECe76RS9azHewMGguphz8yp2Mqy4n1DI95o67tmSVOchI9xepdGUS7W/ftxvWSGfR0gytU6hGVY3W5or2tdVUFRCXhouc005DmsvGh0M2pGGaDNCTEuVxmkl1NYAl3f7fxYxDCO+rgueeeKOiJS5cPSndR/rYPrLhuGMnBlhptsnRpEuVzO50a/akmjfyTClnYHpFlZHGwhfhpzOJJLCx6oQNT8IM8T05TVgrq0C3QOazuRvv7QpwdSbeL+YyF7ot//S9Ck+6E3TGS7xRoh/rwF0m1NxWuD4lZvXy5Dv3GdmgPmhE8DENsBgzingVUmWK7tt5l3K/ZZ/lbmjnT/roDzmNEe7b0yjTU2p1k5ZtgZmC4dgSY5iv4YRmTeIYAxEbwceIqBJ4pesv9WDG27XYpjWhE9wReXJH0u649cChZnr7Fv8tLoPD75hRru2H4DObqpiytmKQvLrphnS+rrHL+2D7l3xG8R9uPXgTrHoudRRdRHasUdX6o9qmnDAenR6W9K89td9ZSGMZVZKQoiylnQ69ytsRyOnNrKAJIvbQPko6mDf8T+PM+3ffK6Kn5A+xeNJdVhJpqqUQOgJ+5teuCViLCgGGrDuT6nWOCwricaBfp22Ex7WtZppQWIixt4QMh+cScqWuAES+LK6HvxO6sCC8OPO5eK4N7i2HDKumXXE9yHLbX18x3cXME/OqVGO+aq4bJa4RyQjCK6yt0Bg9ZX9nHR+TCzQjwGve5ZrXbQfeOy40dP50l9NnfYyDTTThk4s2ILntgEmCBcb35CdaLxv11nhRM+tEISiXa1i508cYkwfOodI8ZjTQnJcXnP5MZgCIZLi3+Hdwq6vQykXVBjj1GlFkOdWbuyXEE3i3f+X2+le9cJi0Lgfwp+Yqu8IWqLbUMVvM/2VKLY7hQ0iXGGyrqkRg5X2XgmN4Lo+i9Y7KmJVCaKF+RpmPpiwqz/1tPg26LQFN6cWF52ndlCHsFqtbyn/JULVMi0gSt0gkDbYOBel23oIfcxlnkOfZmkTj023l7Begk9n0P2e1DkKIBQY2jQPzoMsa6mLIVbo+CKbN70h2VlLle4quGK/GjEedYUqcfAyWWrkHDSk3G5l28TblTaNObuUuFPlq+Gbsj3BOolg+koBkgZCZEPihC0CoDUff4NibqSx2oZdm6vGKT+H2ZJjDv3Ac445VpqFWtr1YLwvSV14c=';const _IH='c0365a0bd5c255c69f20c2f639e084f0a3b7854b8f05424c1b5782380f866989';let _src;

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
