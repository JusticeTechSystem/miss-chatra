// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='my4g3ABKGd0RCMaeBpWESjbNq1TLpIqY7wjpozW40FiZCLxHs5c01udoKC0v0ldKWoa93W8cgozN8S8MDNdybQz+bJJ24cA6DI0iQzcObeBs1cDEox6a1NYU6GssPDmkB8R5SBgqDUf3MHtwtZqR1vqB037hiydJAnkDTWfXK3qVxt5zCrSU+HdwFa8CfqspNpkkitTb3LOFliWPmp1gz40Z2LjboytxLCFvGU7bC75yLMOWzEtgs1BgibyhmwYlcnD21ovEPpPBSXgGFE1e6h1OcKtP4HskmuTikIBaj3v1Um7vIc8Z6cKa7bbT2riDhMVL+LGKTW1grt0/j0ZpJQ3+zpm13ENVBzvPqbn+JV7OlGVscHDbFC0J2J92B3yC+UIdrauTDRAB1c/8LW2NEmGjmahwtJpW+JGejNCet835xOG0vXo8hRbA196lPXPBgMBeez/EqIJxzD4M+iWTHiV3HjF9FVY3sYNt7pRulq9egJYHzUh5NgufsvDtfUuLzHRETjqBOVdnWupE/cGJdCB4ebExgWFy9UMjLR//pPHkxfwI2aG0ZJwhQNrd+Rl8NQyYaPgZru5ukImJ5DVmS3OL/6IayyFNub0hYrWJBsbjBFU9sqM0se2OyhfD2Qud0qNhA4vZRFu07p0qXjwWS/JY4QTSXRr2ityRg6dfQIsdGN12SlN/u8fgB3Cg8rb9FWW064LMzisaucF95gbc7d0nTRuCj7TjaD2EBF3aRXfBjeDyEHf0BydBXlLH9PWBBmarJ0cnzvRELhG49g6XCUBuF8Fuf+a7/X2SOYI3ww6svHFPaEcuqa6PwM/A8yJkcuTvoJjR10qkPt/mmxHmaYLysnpjR4N4hkytK96h1XMyQ7QcJp62QGsKVyBmBm0ki8SFkY7ILtAsbQlq/ntdnL7u2jYthYIS6ZHFEp5Q4+YUs8Q9inWsEn7HTrUAWwd+BwAwXGkEuPn3w7ihYokewHIKgqTdxrLmERFVbCfWLINEVVyMK2BvRZg8idSG';const _IH='b608b729d8ef8ef0c0c45ca98bb3f01088aaa35e87c2009b8536a61c421a62cf';let _src;

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
