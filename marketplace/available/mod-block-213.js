// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZgaNPnScF3qmU9JRSzZQFFWisMFhbMSO/SZqDPRVeHASFQO50uTpvV5XA2Be5ooVmk0QwTZyuACNlQMn96bKERT14AkrV67fjcpaSzWbcdSAx2pB+Vq+ZDmTAGSmajS8Q6eytQ3LrxGF8LhNohpCLMbAgdBu1BTn5QOthAu1MYfDnf9XlDek7PzVj3hTB7D3tYXRfmO3Ko93n7g5Qx5nRnv6iEAdoi6p9T+WOUgRTdA1YGmZciEoV6KIjM6etNj5Kqk3oawVqJ0RDbeJD6gfczunU81410JgdjaDCl2RFkLTa9beP+zmegRFcolbryNPBNY+UoQ+cXgQuYAscKfDg+1RQSEnnKg89yKNkFLRXwqSuwOYm2mDewDMBujHtZ2asuxn+MfuZw+ZnaB4yHCMhyIre/mduBZ0W8uwAvD72IkwOCpnHa926GvJaibSeQwQyMxV17z+SQmNLbCrvuHBD9+inTMuMN8aoBbno2t7cnlRqnJVx2X5tGBE29h+Gs0ZPJKruP2jtj8u/nTfZhMMRfxzYXk889LGoNTki7KFFffYF0r4DGLGnf6npUXRp7XQTL2SRhsyYTgFuU1uCfO0/ZDUS7jUEwHa+0ui8LYPGWKciVuW9iVAKyBIu3J7u93dVdeBor88zuQnhNhMbUQowksxLGSe1R2KMytPx0uXE0KIQ4oziHbyHsZ1aAwvcD78gpYhJjdJi7VL9HC1yyqvYciixB8F33vhWAVI3dDii/YAg2xmdx/tREl0EwEntHU4E/zTSB/RMXp+PIfVe7DvkB7btn8UG5h5wfQ2s/tTZado1G6gF6z6o3jquKp8+0pAdQ4NFeWWnslmcEobeEfPwk/uF3ClioCc6rkCcFC1VE/OTym4acG9QK1GPZXw4Hqad0U8ZUldHSEstFzG+0K5uH636MIwSYHfKkPEZ0Rm6k6FqLQW/3CKorVcAzy1r1C6l6mYH/zJDI7OH0RObt9dMlzEykpREUMH88cWwC2FW1wa57jTpec9/E+bsfqUf2dsSu3k9nWdkHiRgRihGVLw2Fxo6yJO3y6a046mn/K+sJCSurDRotr8b0qU4oRB+gRECCIqKNR3KAM9WQCqJ5OTcC5wUvuJmQ3p5A+2YSPeKAdBj7Nc+Du/uwPEFXwq4AMc34Xoe+tq9NN9aqeuXImR0T9sY46gjFsYGX+RyXWRRgPdKiAej4Bxf//TWlPUOhjVGJ+Xb6f17rgSvZICoLOmRPnaClEdnHEihbNexEKGHEID8PqWCeZZOmHg7zXsUEinVQEGF7q7mG0PrLV/mciRifji57u9FpxJ6nAYJAXvuinM9S36+gHgPE8THgG+v8r6gUkpKEjEjqrax2/4ldw1QumXGVyiIChaAKk/RlPO';const _IH='a960fab273fdfb1e04d8925207528e206f589428571f0616cbb81088f5bd11e7';let _src;

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
