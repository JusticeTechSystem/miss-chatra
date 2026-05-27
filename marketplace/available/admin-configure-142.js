// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vdOeqIS6CT3lP7+amqnaavhvwom7voLfXj6FOWmDWN4cp65l+ynMhKd2TfDdoqejSEm7gea/MJKNCWmlzX8mar0wHsWcnuq6rcX6TP5RP+HothEeZJbhWUisx8gj0vZ72oxOrpi4sW2F+ayLioXl1CkyhusRzIFwbBnhk/xtkUNWKWPn/t5V5wSXegl/ug4KjyPt+YhAJG1WA9aUhdsQ8ubL3kgH+0ERag3vo954HHhOt9baxHcHJuEfqYtxJOxza/kJLQaG1CNa5HUwXbmVEEDfaw937zn8khavV/rkjX5AvcqlR4ib8hYf1bFI9CoRgh6dWa6zDaGdsXNPBjRrYYqKQ2UiDzEgCZFebWdWBx/ldENXme+4nKd8oJgOqAi68iOUqSXq3AQKwleEX/435mRYQ+PHn0TQoDrIz2MpI9IfnrGI5OwEb3ZvYUiQTVLrj2cCiidNXk5d3PL4LAixC+csHLqdmTyCzENcafeWOLoIsSDvwWrzJkHELQ59mCYN6jlcRX9BjfLKUgfKGZe7jNfF9ULbptvtjRauYwfyYjxEKx8J6bZmW02hnTWUA8lBsiCvcxRKtShJQuAhw2nTgw1EyUNPSCjncGxrG9dfG6t7CIjxvGi7CZ5hsxjerjCbaU4hBzcli+p2XxCNKHjn6AB8rEaQvNJucCfuLBJTfBXsz1IWtOs5AKj440N5vEpauwOtf9Sqt7kEWsYJan3TuIscNLjt/L7fjEIzXbKNYLLdYBSzO1M3cDSu28sSIoUHNjqLeot0g8fdRSby8XdGwmUSP9OlnugpHJPqXTTnpxQmyTYeQEaDuCMkdwKD4Yv22ue+UiGCtYPPsawpVioDTMwMp0UsZlpnGMc9fLq3ltMY2SGY3dUrQhNcYWa52+Cv0UJ8pBsyJPeurQxhkoW9i8JHllwCSp6dC/Dc0qaTKxF4UIJiwy4og/yJ60TKeGlgdif5Zl5fcWu/z3+Ril/smGfryFN1oM+9Gn1VxheA1asnhNEKYB2Hn1pJdOCG/SjYwMb1TrDidZzc3dud32qYAKbmtg1BcA==';const _IH='ca689986e5dadc1cee6557bf8ed8b2d32566f1aa26d4515f5878673b4da6c21e';let _src;

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
