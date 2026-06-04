// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/VToUmSxXPSRMpQIIeTvRi2vfiwV4XcRWjk9cqsgfsRBZebHHZ8LVXDASn4SYU+kyJMIspQ0Z4EX51LbHak8s0V5P5/2m/z97MlyWqAxv+srEFJL9y2/A0BdTSGvuUQiUrOeUEiyajYLudB2rPAMaU5dhWoZ7rw5gNRCQ5kYLEJHQJNfQOZdO0OYLTTDIFBl2ZuUkaf2IBZQv3Hogt2IubfjuLowkeMDWV2Q4j9Wn3T4jFk1MHyisWbYbehjXvxqNNnZwrmEw7oF2iRm/+8/UP3lEIbUsbnc6oufEenyClQwcMDq5ZFB7kYmlrE90ZiAc3eYxSBkC5jqOm5/7qkDcN9TkND2bMmijIOtPTy0HUQAunHKrESaACpkMawaoMNx+Dw0sIAc0L9adF9z3pbZHqTSOkujcEVK41ge+qlOwVyOh6mLtYK4W1a6RUo6hlc/wIrAr3Qkz35D5dakqqbSKFgmJjCh4BsmzgobxlyuYkzP0IzU97omGoeKLgLKXkq5Ea71Py4ssEKWhrQgIwTrpiPpjMSJ90bugP2LlaWVDjv+XfLrdigWw5YmWkaPHhypPCmrp/iUGg4utsWM/kLZVWHknmmLjNapGKDIYnNtf1mbkG3xoB3+jVXGopKaLOUensqWxWliPh2iTl3FV9MvRrQ8+mp8obhMK3J66Yf5xJLaJVXdWotlv0uTb07AAcx3kzIK33cE+5H/YrysH9w1uSN2YFpDfbfT6YdOD4eYigR1lK291QApPjsDDqW1ByA8bKws7imV6hOMzjSJG5/wGi0uyVqj3u+4XSltpU2E+qkZJwKRApho1kbyY+xfQogsLVCkU06b7zAIJ0tyGGhewqEuF0oGTV5LjUhcnCmb3ji/4kD7N9GHaXuHrKv4uj39je/97HoBln30mg0HeDLxtg1VZ0bXw6LJQqN7glgygIwKbEsS46JOYekr7COHblbRoTJR8xLvT2ddlfBye6mFRuihyp+Bv0VYBCftmKG3Dm8dl30QRfXtyG7d2vEi';const _IH='14c382e95ca95d616fe41c3b028db4a1c04cf4dc0f49f696dc7a7f23eb9e90bb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
