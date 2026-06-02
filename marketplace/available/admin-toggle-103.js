// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sZvTVAjlwvCCbwxxshCpgW48fLINwER8GmZk4bgJvi5d7RNT2UQ7mhtHcXRZF7LyecMhBfdwkzKNYr40lYd4eHcWkkp6SALxfiLFat0qnaAbhsq3IbNazSqNaJeULqTzJclhuCgVoGOdwG/9K5JJzKvRiTomXBS2INimMYkNdeeyN3gycYmtIzCgAcQz3oqdAxHek+ekGoxf5sITDY4vDjc954znG5tmcKQse6H/nWDy9AQCLjbAP9LGXTdSAhmbWJIqGB8LJ1RAmIt+HKNKnByM8h0a+6vILeJgarUrrlvF0VFkvxyFW84SL+j9mt/mw1kh0yKj+jDYgJd5NfJLeM+TEo05RK7VSOGMGg4NMgV+2a6djAl19m+GzvMGA46UpAftVp6pgOqUpN4MXeDQO1ogFIzQxx8efvfVRnB+3trEJsEi4sIBIQxOSF1zZBgTfnl5POjA7AVsIkuRMyiwFfaFJlLbyr/qcLPZ//Udlo33/wocQ5q/dMFCLgLm0UNM0WKYRZrLhLwk9l5bfB26ZGKwvEgoof7GhBLNvoGlmTTD5OQ2KJKG7Fjv8ZLtWb3BNr4Fjj0+2soQ4wXItEwYiNP1UZKi6U/KHQuXLk6yW9oDjppHiC/yyT2XLZcg0k8GcC3iLzxqjjcOuJh/OWKe9VdY5BZkInShVHZ5Mku+mkWLt7Iz4t2KyPTy5anNXydYm9zSgxtmkgcsuegOP+bslJCFTmjxbQ8ephgb2y7zA40oej4roW6xnTlwEYLNnB95/RDbKeyomVYY0N3TGFwhFbU2/26Kja2FfnTktSajGpxYe5o/VrgzNetfT+GID3uGKn07TyythzrLiy3c7vE1usJQL/1RjG5uI8gAuQ+ksapPjlfBdctGKBHBjhHT7hcQw4UD5lm+cFBwl8o+o9Cl7srltcJRxLU5QsXK/hAe4pVuGj/HjQXSncnjYJpB/I51nhi/w5zsTle1Ty9hNh8D8so5yDMxBMPgNnV2hsnXYNHNR71IHwBYAfadwlUdq8dhqA==';const _IH='ebee81bba8d5b5ee9f7f90e438be2827ea084bac68bbe9d9416fe0d329debaea';let _src;

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
