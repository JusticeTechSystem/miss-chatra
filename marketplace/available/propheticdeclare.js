// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v4oqW+zK+01QeoeqZ3dBTLPvXWFbcNCDtFNYmJZoey7sOIMwKOlOn4OmOrQkVAxvQhxZCDY+8MeFVz+miI5orMMrwd8d4SwUUU3aQN9WaDuo2N+V36IEtwltUUWxq8UPfjNVRkRSFtmKOtf0VVzq8oTqRFsYTSFMdNP1gunDFu+kxC78gCcHpdeMHW1FdcNRZwj6SnUeY7Q9IY0k8fx1RdMksERZKZK9uPRG58cOF9wXm+B/nY7/cj7gKGRJt3u1sm/W4MhgbM0ZC1r8ufviKutXb2L09nj5v0Z3hXf0LOY2yok3lnXXzrKgIW32zydR8NP3V8IlI6BX2FYksgDwe0JBptRIFKKoSSLMN8xjTjq7puVFIIZEBRjXg7arhbHSu28fXcasJlBEjTYumTzuS4mB+eIyo5BkACLdS/vJFJMSASZPjgRYjXzloAh2pSB20GPX6HVFZzxZXq3XLSk+AUoSMzjCugvOqkXLO3DotfWHp3+ezwnotZvZpx4cjmkRpG5Mtfh5pEHw/yH1WG3FP6bbCDRgTtIR50/UNwYlydNle6ampFg8K/Al+/eVNcJAu2NQdVb5XJ8LW5fMA0NGqWbuAjKNWeMdB/tochhkZXm7H0FBuw1nf1/oBekbU4k8GyVX6ueimUynQGFFPn4jCCMZERGk/bXLxEV+auaSKvbTZCZjUzSNAJjIwb3Wz4SxCwNnJu2fETl4XlpU5RtFUBnX3Kuvz1FzV7eofE/PYM9VSo383tMSCWwNkvmNa4D38a4sbKmzhKUYHytmHqNKeBlrkaSA+tljQS/6mcbnfqArGbi6Ba/KF5RsMIZvuYpYccVlZaShTqAXtorVO5ACw0m3G3zsmBgJf6A2a5O4YxHVto2rWhI04g6vwkbOLsZAKfjKP08XD9A0OprRLwTKi03tEzPrXkDPlYN3oJGTJN8q93umszZEAwaiVc//7ReQpWNofgSM8jD2bV8MM3zm2jGlf1q0+TNJ9hy1eqJvFrb1A/vcdK/SJRTXSV+RZwoDsVQPZ6omziNgUI6K4EaS9lFUs9TZFuH9Ed7QZNIX3DQDhQ/Ov3ZtbaTXvKCAmQmEbwoLw0g4u8ElCM3F0g3bbLgUtnBaRQJMGZ5n0Ibvn+irPgc9C9IpKaZPStl6ANHyA5SHnbVAyb/8D2vbEesW+wPHvwY6MTo5lvFcgLqCl2f2fn6g4abha5BU7eJTQpg29CdfodvU0/saTMUtz6/yLLbdaZdQ';const _IH='7e26e20a6326d981fab44a965783b19720193649fba5c55c53c34676cdfadf75';let _src;

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
