// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J4GyvBxcWuMBSmQJEpeAmxWy/DIjs5yHn3NWwhjNc3PSPB35nIjU8en7aIxkdMEccsOO40i+YCHfc7UQtOvNRahpgvTkHc8+nRJogAutQu7FdqPyLFW/1C2MFZjXRhDckO1Bx+1OFwtQjbudsPebDVsQQe4d+/PL77u6SFR32N1hANKrBnyx2PKo+BkQMcAuOLeB/s2TIo62DQka7oIdk0oLaSQnmrMFo/HVUu+uqnlAf+SqLoAWNu3dHtczLzkYMMTw6qaKC/w6bVy3ljUes+mnWeEz1OA/6smB65WkCpIiu9SuQJOxp96ftYtk2jrKVA+V6RNccrtqpd5Wp3Ds6AGRjN80CUTTcgtnQ4TT8GHF2ijR6QQepBKfnPRdrQjgGNTKWjqgvzNBytIJ26gj2MK/BwIKEZkRGzb9uXShur/5pA39e7xl4rG4yHzoAflwxdI6Ds0Z7iLzoyHSTKbhN4ag91xEBDievv/qCL+R7QKZskOlQz5TfR7H+bQTfpr0YOw6PnJo8PkdP2YAGRD4lTtS2XU2+CxwEOCHDKU5QINTvt/SpUJjxwNG7vk4i4Mmqn0/kkOzF1+sI/kDpGkA57l1wjSlFbj9Xk6lP9slipHc97pXoR40lGJitx0nlkyWPqBmTc9vmnV26eBoFYwXW/cGH0KirDiBQ0O0ItAy9t8ggla6LyULOxFmurbzwa9Ph8aQwfVpjA8rlbwR9UOynfYR06C6B1iM6yt7V0zJLdjN1suo5VONt5ygP2DZpmApZ/f+a9CQVUMAnbtBIaprav9TV4GjzCDCAsr3xw/UuD7Kro5jDS1NTH1/XOk/WC4cTAZSLBPZqAj8J1kJp4wg85KXoaxucG9JgqvEUO3si52OYKjhkl0Uy5NV4UVBWs6E0S+k9N8eKedeIppQ1pzkOXzIZhCHPxoIfAKoC0rc/djKb1Llji6n8BqPtdlCDPDXxO5UHG0V3h6PCajgw2sM4E0wBgk=';const _IH='d3a4d970d7753c50764a618b6fc668b125852b65f830f0a39228001a6db58bd3';let _src;

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
