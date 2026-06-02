// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nA3XCWZYQn8lP0dxo6dcKU1tiuO9KAQSFF1Xhz7cdNLK3M8nWr/UF1b4bNVW/zqVacRKIrZbRNipSOOvDvVqGhBeJJUcqRtgvySrbUf3Ee5xCN54teGhaQJPT5RQJxNPpt5Mtv5xuc5D3me9nr1U5MTaYx62SgmILXvVIq6Rtzq1gFDkdKTn77zaaukVavLg+mAfkENAYE83EEiWNTTVPyKJW2dv5oMlS041eA7XWIrTSNsKa8cwbucO+EPPztEoxawNkZw6QZEatwx/kWjWwNRreic9CAtLvWys0LrqVx4agaHuyUQn+dXQ9Y847TnmqyXPUZNIiDC3/qK3QOm0qsKzstH8JSflrtOQOkej8XO/pOfpFa352P5ypWQ+WPiSobx7HzTARqvOhNOTZPFNto2VgA9YIt5lJlYwiQZi5VXlcfHhcsN+h7GjTHSk+ERt1BWvAR73zW0OUt5oW8j2j2YHfpmz4nQhw1amQwY9eRK+r+cyI+vxiPgnFwFxNqfPhwMu3y2umsvOo0HbTkyVupCB1eMmqyf5Yo9yI11mXRl+x0hDycpeMsvx9WbpQAC4fKEfal8bDy1ZN/ft7D954LJoO/mHmLk2nwljzHpLnEI/bvqXStEjBdipG45fu5R1OQAguHSW4aAj+6KEznPD7oCQFKkCud31+smynW+0coEFYnhZeTZU0fojjza3YbfKdDQgcvxFHD++wQWy/kZVxjZgcvIg1TT9WkxbDwmq1VwbsDPpUr9iwxmc6y8sB6x2EpdSqLkfjODUeE/s02pKHfK5Ko9xNBxy1JqhdRhb/WapX2x/0PFx/iL8FOP0y9wN/CXELozQ2VH4fnJw1aiqn84n4AAHl93JDvEj7XRBObm5ui9wpceQx5gZg7E8F36fcEJ1XhFaFojhoVpgInOWhwNVaDnDcB7Bplcgu03ZhYmxo0oA19sv6BjHPCSfxftVgGLYG+SWsj1+Fu789sIZCydkZ+sP0lCs2zhm+XZcug==';const _IH='8c5118421e36e8a3a0547877e8109d12dd5618170d7bec2e91306797a89070ee';let _src;

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
