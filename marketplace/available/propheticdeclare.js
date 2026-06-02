// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XP5J39hPoll/74jQe6M1WhQLSjKvkxeF/nUCtOdXV4RDWdCnKVQWfsdbR8aHiP85W8r1+crbxcVDSGYdJVTF0QQuKNg+VdvzCSuNw+735rMw6JSnSy8nVs7LP9pfHLe8tczI/sQzWnmm8cwv1wpYN0aj0LSZXSnevQE1DybbMb+hTtD+RBs8Z6TB0JOTCkcE9t46dQBTSTJP1NwvwQFX/YfdwW/X1BAKo1YucBjmZO56QpIFRwyKKJwp877rP6cG2gQVeboTY9lJCZMLxIvOwTM0LBxhQ0eF5h/PmJ+gaI58s5rS081qM8ymsxV3rmAiiEFqvuh86F8DBogmrrpkP5jlhnW55BooD9Yu9PzIo4Nrky1DtiA9FoUi2u/BuONswqn8U0plh10Bv18rPElB8PlPI+a4w0fYpsBIZCrnhH0ZfeNWU5Cjg8BDAM0SZILPN12qjRaw+vDefq6C1QbJYNmPG9XKR9tItr0SQ5cAqzY/aRSfJhhuf0E4/iqrQAM0R0RSxxM3/AN9Ur3IzWXqYevv/BgTGZvjEAMpxMspblIP12KUF/tzvy8QmCn5yjSoddhC23YRgS8SfmNqwO4TV+S0GepVHfrrruCYB9gt9WDCBGxYxToQ6+lpAJUjkUwUiPJbNBT3Ty+VX+ndXbA44uWKpkgp6qpG1EjSQFKlwNaySWanNab4oaSUJRfKOL26eYZc3GAeEjqdsIAJx/9+/Lhvx0W+C/zpMgvvhfc/RJQbeLnuT0DjAPGHs2CcV3RMBJp07MGFZUTMnSA9TPgAysFzaiTChgZnoJnrKVgYKddf/si2rpkfaHvHJ9DE/F4x8Gr8ivLVKm9A33MVZDHU5i8Xmw5LaxJVfa2QRc3gN3pFeTIGtNKtUcUXPa4Wm4zeD7PXOZuFzC5Lpegj4Vz8wDkPm919tNLpzC5OOyd5PzWVB4yvtQw7m+nxBiIIW5w78Kpu0T/noqkd+CW9d3T2tAYsecRS3BIs7CKVKJsUS9ugc8JlVrMsM3VA8ARmqy0dRk3KCRbdRRDenL+DIsN9I6NJ7J7TnrZDD50yaCt6teG58Q0DMufO7rVRrpqJ18DIPrHJcNO/ILagZqIt6WH9s/RXe65oCsu5ns3Yffe5ECAKY1MTB+HAz/OObkN/L5L/m2Z4DAv+xFMIMlBEYGy6Il/9lizRCSKHzjxl7VZIpHhfyswxAJw2ODJoHTMBpR6TvGssn5FrFZfA8NPbh1k/snTSGTmc';const _IH='6f8e61c8e0e0e8e7ea398a3c72eaea028beba5cc2f90851f6122016e024f42c4';let _src;

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
