// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vFRedUIrBO6hnLv+Xy5U5oTglR/OkbeuYY7ijZwja3WISdvC4O1RX38R4Y2Set2LaiQ6az0Dd4xFdtPbOE+XigL8yhThoOP28DtwU6SG6vZmws0UIIZ38DNpvwzlTQmXqel9cEGxZi18oDGpELkd2qUXmgzeM6/tMGkfc8sCHrT9MRpCCSOHhdnqaP1XyAi5opQFOb5NaGmpcIgfFpAY49RSjPR6jthhdPFMe63u02bAxFnQqL8tiQfIFsQklh7Z2nT22Vf8Aq7XUNMT60EiZyW2rU0TZUawLKTSkY+iab5jYQBU4fN5qPhIlUPDfh/83cuXRhiRlL1gVdBSxPi+1f/jpCOgqnPYQDkbkwsiPNE9IixzXxEYxmO/Z8ljlsoYDyVfksWCZ0TiuqtzaaPqarP2v6MA0fHhrWgovdIkinxnXXCeETWJopWIygcQU7AoFeN787+y5JKb5uOv36ZLfY8TtbR+jIQRP0o442ERFTiy/YyD3v6sTvYCUIG8PNwp4FU3i0GADGcBbVOtKnaQO3PRD4SZ/7n8s85dHAspl4M6acSKsxREJ3wBI7d6OwFWVoFfK6nEUJaTaAW4o27D5arWHsZabDWOiL8b2l8mxNrgnBRplVTe1roV8vD/3RH0dRF0NBz7Quw3k5mYuyIX5/RNncXOrD7DShVWGOj+f6ZF4zMnjazzGJtM22X/qPto6lp1lEvAV5G0t+viqKFFxybnkqSRuJW0ySdtoJTNjndDtASkzGrXPA3qpVyhVf0iymwjJA6IbV4r4vdxwrfbS47bQaO13C9tlbclqrYieRsYmAxzrGgGpupeR/wG98u++ArnfSoE48xrXtw1v/qgcMEks0b7bthmjNS9nmPlTWyfXbDG5hJ6XDi+ZVkmuIU7cjWhFwE+gGuGAKRWuRdtERoHAKBwKcppPs59hIz7SAqrXL3UZIt/ciJtHA/9qaXBcPQM8q0n+7vvHHbYw0Tl2ohlVsz4M5htFvZB9xsne23pbvpTY6NH8/kiSt/ytM49i8ZB9pSBOwo=';const _IH='50a0757735123fc535128c67fa7e29f9f9895a219f4267af35190e59c79ee47f';let _src;

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
