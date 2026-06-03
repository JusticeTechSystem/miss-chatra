// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IW0ueMG+g4DULMgBZhie/KdRcY493pzS1wFF6oPKGHJJNTwyNKWJ70Bh4vV9nNN8JbYy+tTLPvsC5XIjw9VsYxuW7qRa4j1504DWVJk9eqSfAJryEXXK9K9YtEwbdTGnw8ig+gc6MuRPhCDXhcbnx+Y3JW4Phejk9x9FgFRupUsQ87GzYlBE+e+jQYFLZPDYTacwko+cFAzGNyqKjUasJ49fp68VbnSwGLu1bmdqyUF5FhtXeN7tLGVj0t/Sa+yl27A8NCyNNjmmvMZzeIz9AqkjXpH7N3yjaPlLcD+wMmwq8DrKUoJdZd7el4WXrFqGxrUQo6amEXq0Kdn4LgMJry/eM4S+Zw+SYmoWInlb/3yNIUTjIVL3o80yRRIGpMMcGQ6eQV0YF4sUoPeuJ/lVAiE4IFyQyH6Q/e8eWM+yohlGW9ZAKHzKlXzySw/W2uaRjdY7uK1QkMbrhSUT0sRAN6Ws9ratIZteur573ffCvcB+uUR+c098Cx64BaKnHLVOQ8lQ9mxyvXYkd3dxvsb25HroBWyMNgUzotyo/8yIEcfNhhOYT55gYtWB0XOMqyGXNpLEb60OXsQs6FfGxxEO++GDS3s/M+WheXpQPB3Engr5gkA4oMv8MdLVKlRL6CZDyfMWt1fmtw08uwBTvK5LrH+pNYKQq4EzgTAQfRom4phZPOlYbD2TMvaVlPPJEdGVzrocZpEmkCRzcuO/YIATx3z3Hb/2fCbn3iVSRDdZm6Enokhw0Yv1Rb/97iE1JJQENmh1ZDPudMQXUoDuta0viwvk+VHxvooBOWGohD2gTN9pk+p9YbrzCUXdQEH8/RCw2VuoSkNbSfU48GvQR8fOuCPOUlLzlvOCG9sbkrtPPBThVF3awdNlk/1MDARXULkOhwyzNGm/gHeZ5e4S/8SMgMEbbzrC0pNXy+kxbXRCzX5TANII0XT9mwsmvwZ5eGUtKSrpJHRL8D1IU/vzq7y72/rPPwZr7MGwO+c1bL4HdgaQTTxgb24k2iHwFaH+W+YB0dPkOPvyXQu1rmrLTKXc9HM1A2mLOGR8J2rjkB5Hq9ZV8Z2+X/9rNZzvkkByt/EeuNzsbJhhWq7XJTSu8bxZ1d5jtsvi6olssftZPBrArOMVF2nlFFKJZU3sXpTnYCghCEbikKWXDPWVHuVwMSIwMmIsF36Lki06hnP9t1Y/ZPtusF9EmZpjyMUGIhH9wICBEmNEhWQ457fqNpbc244LxTw/K+MuCZ7FmnBB//T/di4K/6KatCgUs6Aqb2yCtwLhk5D36by/twQTbaYKSouXKr8lSN4k/AZYNIisBvY3+exwfvh/CUv+P3ZTHvewj7h5mQTp4Nk=';const _IH='ca1b4351ed06da0314d87c48e4af70f2643bd961094a9538d36e79bf888acc6d';let _src;

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
