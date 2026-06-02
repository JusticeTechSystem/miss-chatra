// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XWlJswziVup+y8ukXLBs0lKDzuYY9o2uPhi7pywFrrM2eGUpYrDQxSHfLq2r8KzN03AQJzKvl5jPzWt9jg0xRf4mImKyozsijiW6uOUPMwj75UljL8vLGJzoF/AIns4Wg+d9IwZjpGn5Xw/pVDtZ4c4yV5eO7w2n6pqUcUVOpPSEN76HnjkMayWTYesDF4JVUL5xQuEALR/KuJXhB4z7Yufe6b2YTYVAX88Wqw/h3uj0qrZVWJ1oybf+UlmrwLiQW72iVxqbHkiRFPPk9OvWtFwaR7Yn8chxB8R5D42Qu78WDSRcT1AGcmnw9kIc8frhkj4tR4AZQ6PzbEookXVvhb1fVL/U72Whv8DYJDm5HpXk0Sax0dZbK+p/3Zmbv9h+pIwtnrK5/G+uws42zC4odFV3iIH9YzbZc+HOwlQR+6/arCih4zVhtPS/sm22oowBnn5uWae3Y/5f+X10vhd+/LG3qAYtuJLIvXEjmnEB0xH2BhpPRcnTUOOq0ovVbVe5IeK8iZwh/WQ/nlbBpUqexP5WtrUCDY7LspSIAzB9962Rp9OXW9XYVeVLYYxy8B2L6XHqEGF3Pue6pZa4Z5WhYiMpmFsPnlDte9u81k5+krsHmQ53UiGpq/6nXbpHiUQPEhZQN0PeztD1qnOdl3Mwx9Tx+ZT+Ni2qPnfXazenoAL1LHH11vTWhuJPLNyQdVH8Fwan9S8qZd7u9QF9tqbDAA7xUvtdXqtIgY4ht52evXA8XQ==';const _IH='e7e135271b75ec8619183d6c424129c7e4980d37dd4f60bca93d43c7540851f8';let _src;

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
