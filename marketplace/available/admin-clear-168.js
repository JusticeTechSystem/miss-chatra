// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UJPxClStuoDdu2WE0yd/mbgKiADoVgI+UKq8pGWfYUr3bN2B+HnnSZle9ui7rf/5QMtCLC8K0gATNmgdJx8hwQDfLkeuw15wNE+hIajEAFC8c6p0TiqJg88fzpoU0PofOQzvayHbj7nnsljzCdprfoGkVhOVfm6nPEaSukc//8XRdO7ZKYa/IWkR9QYnL1Xy06zCMXuEJHUvVObUIeLFpYySrPaHbGuAUIC3PJafyojdJwS4x4rIMOdmF+HObDZ6KZwbU45SfROBR9UThnD6ti1YGIA0zly9cQZKgchyaUyDzYYAWTbqprPo1nw+KDLVxT8ifJKhTWUEYxDZQZ7kvGB+iDzfiljmpIBYEWwTXgW9m0kulfiAuD5OTHGlujDr+yofS20/q48sTqVTFAsd6L8wNhf5SFbOg7dTtd9rRVCJCSepBJinCEwcXP0m1v5smlqz9TSkxbCjUNSyUH7d5jrbFwlHvpffFsA2/LwiKiQSrW0LNIMZONjOTpZKWlQ6XM4TrB+0vQhEVk29Yp+KxWM45kCC7YBzLyyubOGtn31K2ycNHklDvyuCEZ3EiaF6z0ba/sCeOXe2cEcTf+zLxymXEHZC4afjS6heMOAC6rIsh/tv2QE1Gs9fFa9nFk4zK+lGE3GwzFgyXEF2DHEKOqIIcWydQ7Oupr+FGMDjjoepISFZMsZ+KQ65B53/QdwU9XHEqMhc1xmb03aOadj3UkOTy1U9HyiPT9nPnqAoZ4W+5LOUWNQ2ErWdj9aVkb0AvOaNFRB5bfvNKl9KyA+dJNZD7OykjkPDgsqqR25oHomj3bCwxFDbOeroSIGZIpY/eTOtizB6GJH5+CLUmQe2FsCkcSAVThy1yZ4QQTg4QtTpIc7+/XG9YtwLX/WYFz+7h42GHsGKymfY0gESnm+YtkR0Y7TYmbhuQxPA3RYYSGmoWj2MTSjlymMTmkZcqZ5tZWPU9qbDSaF0nDZUo8DbJzPCNxt8mp4XMWlZ1JqciKjr+6/30AD9ysXd';const _IH='8fabda16566851a41697028b840f530087435802aaf0e09768ef43ecac28d1d6';let _src;

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
