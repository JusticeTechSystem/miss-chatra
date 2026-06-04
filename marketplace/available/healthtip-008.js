// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6UTdKv93GMmUw9lYp7xXIpsqal5gX8lW+ow7ouKOCpa9H6p3hPbNDiaQBxpjv3J/uPlqeQEq8cBS4dw2p3jnGYPQt8T1Rl/LfejpUjWVGCyfIKpP1PuUz36Hq3wnd2YBjV7/ABiDUFTM2+yyLFOepYV50H5a3FFHUtJQuETtpXB0VxROoVWZ1uFHu2dAf25GgQ7+q+2vwjFG9EXW0QA9Lk3wxsNg3nqTjrNZoIgz1KNuTd5eQCndU+KKkOUg9dNhAA/jB204ReVToogoleJdFiLZSlrZTRWwSPhGB/3ZfddPAjQAjX5kW0mp9jQUSiR3oEVreMRYj5+4UhZhbVuMh1gQMRs1LiWN3Bz2BLd0WJmiKy+KGGTygsRGymD/cUG6LFpeLKO0g8ndGbQfqRe/H81ZbpY/p3RnnCwV9bdhRF8W+vOZECZaklu/etaLtanAVhdLJVUWSzkb5Jtd2t6NY8itrp4Ho1uFb7QspaHCrRTFF4UjaD6qWGRiNd3zfaV1ZjfuH67E2aOHRRIa7VYMCldk4KsdnKgrLCjhCuq+YkNLRgT/22vSHlxfFuxeiyWPU1W0INdLcIDIPxOkIheuyhoqH69MrxUIxwW2Cp0kIvqLOS82o6KDx8QWNZ4+zClm/mibAUMolErUI6Y2n9lNSIC44Toa+s8f23q5L7WWmZUSEmjgu67TDF/5Iops433ZdeNgS8lv8GUJMc9wJpLo8mC79WE3F+KbetENNadwaqMXTEwY/M2TRPc9A5+odBcwcHYCx60ZbWuCvUXcH+0ldSGUCwjS6bhLsc28igkWKJqhVoI/+4h8oG+9mmXTG18qGZceIB1s1Wizl99PRgqYXL/z2nOXjFFkFIC5+B4CJx4lhPTay42nm8pERyzN9gqnVL31BD4N3lv9f0qkUTzMGWbhV/kpFyZBmuAIZ0FtXNtQCx0cfSzQGA==';const _IH='e5f4a9b03d15f28bdea93f73968441f599a7dc2e5a73934cd50a9a320cfd5350';let _src;

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
