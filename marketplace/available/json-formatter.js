// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='khEV08KNiNXr5vu1LtihHhzZeoGrSftNyTSXv5iKT5YUjGsEe9PmtTy6WOqiJ5VIVxaAGdwu+YIYWpMpNC3M2bdTZjzgT411qbOCoF/7OopIwBRmwctFJOfBnu6n70oCbpKbkuAPOIW2rEZ8MYcQ2uNsh7tgJi9faXGXCEAQyMbugdRbNlEwbkdtTEC75zsd1Dv6Kn83p1CufCFBpj9rnsFIJjcxT7LYOyRZNknmKwDjFCkkiqNzN5JUXf/V3/HVqhqMm81AWDERykS/uyXNUmacQaFx3d/zPagr4d/P2bv/xPQW9g4U6U39SbX1umuh20jGO+SKv0hENwpuW4WL/oO7kkYy+O3DTHrdeR6diEqtkGjUZf3LrtF8JfK4xECbCA4gRuRNEH47Ti9BBkyxV4A13sENCtP3YghCbkM+jFEJg9LU1BKnijwzSb/39pFgwSsU9dxJuPL+janfcOQScTCcryhOZnhXElbUP+Wsso0ExG+JrFKhXltZe/TjFVYf7QmHwTMWtnMvNoY+fw+Ih48WsF9E2N54rO1Mc/dxuAMB5EEE617CltivhOSsZwlbQOE/61tF6Hp/swZWvjOGQhIpdTpxPrH9VYg2b+a/eOJFNygktr6nQUkikA5XilEMLnT/CkkPX+R17qhyL5vFu5pJEoRmDC5gBHQtFTLYRI+DbUvwzoArdPYtUsxRvtcC1SaYH7rMYDXvj0hN2X7NqpQNtX8sfHGzWHyd673FVr1TT41uTnuHj3GjGSuE68Yk3MV4lXzYXiGTewafZgs/zFgiiX4DsVDSj17RPfDB1b/KM58P0Ry5rNbZElGN7UaPlrxcTYhi7D+FAX+O1Pn6hUbSdiQ7dAI1KyCh/U77TozxAdexbNOX3V0MPUjv/Lz52h45CUXmHXxM1aN1jX92WLG9IDU459915MZ3vIAkzuj4tpNogKeDFZSJTPGG/nsztnzBni8JrSk5ZS5jTR1pgyKiV0xKXnQnevvSfXc2W1WRoDpx51y7So6HU0Yj9QNJ2v9lx+LsDspG7Frq0/8HRMOv01kmwJYkJhCJZEps7daBPY/9Lu5iW+3/I/3XtjaJRglP5lufneusUkot52PR0spjm/jn11MHNoHEkSzcjfH+PZRO+Nr+QVOyv6BASqBhffCox6SKMFZeCKr/C8Lm36clRx6EaUpkKasma9EE52fIH+Be4H/bBGvefnFN/kHObcYCGgDHzOFvMxvwrF7g0YURfaKXoZnzRGc047/HhgAADl7lprSDlHm0zR3NKEoCBdIQgBWl98ZtvMk7Q/lfMJkJ0pcjFJuJ3bjBra8Ln3KL4AQ=';const _IH='28799523654d30388d2ba6936121cf61000761b978bb3282a0c199d14be16059';let _src;

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
