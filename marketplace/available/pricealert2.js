// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2bNcHblaDosl3JJXDR3C3upFd7L1mUYM281W5syLRQcc70ou5fA9m/w1vNSazOe+JQt9M1qzlNLGyypGbjHle+W4cfTcBM0us241f+U5pz0QvEIS0pAmMAg4oEUr7vdxOYyjoJ4ZXxXUnh2ah3tZ9jVZms3qcq9rMvO6a5ga/ruSJk6cCKVi9fnKqnhIsfACDPU0ERReO07U/ik+ma9WCPMkQtiC4Yh0Hw8PyUFHnHmiw23TKbTCXGoIGKwgf1K7gvqys/D6r9HDOS649wl0xKuWaBlF7X9TI17acZKpyum+4/CPuV4Vc1rte9zJQ92tIZ78BKQJ8wNsbSPIU73NLVEqRmbGgzaPY1vX2H4BFdcYgvFXGilyp1Mtvn2Lebwzjl3wzWFtegfgLVZ2gIFMOls5ZTClzarcKIlunJI9+C03UtcFt6UsRy6FPVCB7ejhH28uNqJNiQAW5+Wzm1IFffC+AQf5KpNwXwKqcPA6iSDEVKcNLQjtycDwzheKquxFABXFqwIPFj6f0+Q48na9Dpix7AAC/6Ph3vEVIvv3GmVQBG6KMbysQVbTwa9uvzzumydVghLQc4IkjLpVRNowRPS9UDxV5FqGeqvsIZ48TyLmNDBulk70hukTRsaLHYWeOwGAl14GsrehVAsEkW81lY8GNo6d7K9lWZerdTaXrxEpx5mZdHUgvA8eZAulGA0In16mqovfX07ZjsmjBpQvlXKr5/egGSgyaFJxv0UIc6co/T+vwiLBhn1JtaoTdgUXQz5kcnzgXMWXHmD5ODttR1qKx2afW2/7SsC7l9Mkv6QvRReQCRfaDmu4Tlv9iAObwPJHj6A0Q5j7nPxRlxtE0NwpMmQJIhPU3msvc8jgfxoL+7YUFyO7SnKYyWDfNT7ZT2255IuvwgU1parp1iiQ5z38iVB8psRPWiVbUyX5l4sYpPb5aNd9sm6bhESExmSm6dDMW1TXVwBnU0zjE8S7q7ekrI8I2ERcVrzIKvZSTZNN1a2zRTH6nrwNiDmQRXLM+tQ4fAqKKLycv9SRuwkGkBWb2NieEhHKGg4TBUXVuW4b+T65jq/FtRutszeyyA5hrUBtQksbaxRzu9OLxUHkkKdAXk28/NwhG7eCn1KWzlqwCCn8vOulxww3gXijlO9+xaIEuuV4JOHYEBVK655heDZQtlyJj3i99NpNzJXzAUI2AHio7uib6l+yWWjeigGO0sXsuez';const _IH='8d5d8102f26375a3ebdc6b6beeafdbeb376186eb474cd1c8c55fbf1dcdddf046';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
