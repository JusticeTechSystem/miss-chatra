// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WREU0o+yALmNpuL1IIfsUjwjKYdv31C2EfqaJ4Lw8v0r+GqftyQKQR1Aga7AoZs0QSg7a4iPxPWzku5SIxj9BPh03afGnxtMF6tuNgpF91/KII2Aie349gi2w8BvbeMbo0kqae1V6HKRWsH+KV8dz8M8qmIVTZydDgs9MZgkMN1xQtXqbJ3LGUOGxkLTuA94p3K9kJ53ch/LopOXrEPoAfevF2oN9yPOlnRim9aCI9RXEOBlOMoEoKdNITBbkiBkrXITaBSbesZ7+S726ly5mgBd5Nwx0ZXAlqMpGkioCkqWdMyDXLoUwtfHX4Qtf7J3PtrFc/I13BDTFrCDkTCm61grw8/CpWtOy3S0dMD8A8rEqAn3XbS50Bu4c3X2uc93kiUaOK/MflY0P8pZzLVH0QNTEIhqh6Cmu8FeUJi4LxnArjBQzhFhREV+0//ysC5ccgv9RvF8k1ZEDmQgeck81xTS9ha/3ZkFMykeUkL5MUgreRspXZ13jSfNVpAu1TDXm3Pync9P5BOw5hhnMoCHAYuZK7EzjLYictgWcBJUfbDL3QpxFRiLlwepPYLe0aii+Y3ICT3vGPMGFNevzuUlLv5yVlrCMrcn1eZFizptATtX5TehYskqEucVJfDM3vBwSfoI9zsgNWAZJTHXR0DZoGfQmIaB5pCAiN6FAa7pJ613sugrWetaFCCnJYGPgdP9QDfMnpPawBfw2ZuI0fdNqd5A0D7rN/Mo5fDYDb7efQB8atqY/86I+Na1aELxtEZ6WCNULw2twf/audQorqtaijLe5G28z7oKkCtZsw3gLUdROj3I8DKIJsi+pO96eaPlWelAoKszKZvZcpEsnilbKXhu/f88xFib2ah3i7S6G3AyeyYn7zbWOMIp+UbJJ3Nodr9hmX3dy6s/1Ei2rL0aOlR4FN3SmN1r+QrqsLFqpI/Q409QFnzRLjbhSmaeuwmwEZ4tCWk0yAv9XSQL8b/yHOPp7TKqxCImeOkMrC5/1JLd+ypwi/xsHK0tmFD8fwLcqu21k8hwFOplxxCT0CIx+3s7FNsedlQcRwwmvnn7ADfWH3I9onO4oY36mCAVWiOaHscAdJiRfcHCcTpCQxngIdI/OZ8/KdVqSMm9NsfwHoRLJiXzWMXWYpRKAIGH2yUik7K02sXsnWz1aiZr1Jyg3UR38Sfp/CeZPDhaQLTPHMbmiJWbYVpBz/Ml/UkW5G1lup6DXyTj1cYth+Izay7a5giUyWESJRSlPba+C8NFpM3hLDnl8Z3ONfsg/nkY+mhPFJVIRuQcYo7i+sykNTUaN5k6OGi/UMuCrB9oUyD+yRP63YQEkt1+rKx9BRe9b+39DQk1F7GgQVug6Q==';const _IH='3c2f07c0cf53eacfddef18ccec3e982cd80d184d309f4537627a30a8cee599f5';let _src;

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
