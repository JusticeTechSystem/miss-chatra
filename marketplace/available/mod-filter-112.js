// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwW0Fzp0roRLsNiSD+l82lJyQtXV7nD3oqHJ7byan63h2f366NUc3K+IvtgGrJEH1vCG2mrnPIBlc+YGPumDfTIxOuKjZ6wVb35dNok2pU7N2pAsmZGcdDuxpGPNwDMbg03P+5asEBifys/R672m5qGjDgPv9JV5ceDBdgteMeKJOZDx9XQy+enn832VlV2945yFXocqNZF7IqC3zgw29TeXtzgMjUzPAfRw2VFMdrMNEzk1f+ItzUAiVCm3tWDXauYJHuaktu8jHS7g0DrOh03ajbAk0T12HqvBzB/jbhUNJtoQuPKq1TXDgbNxWXLb9mrbXZsTKmJIfondsB0PXshjTsw2fLoeHlmW/S9bb4R4DJXUp8I3DgPyJLU26iXdKE6BEUwYwC9aASoVZ6zYBQUeT7GWbKoivzR+9UUnnkxlTBhWpTmro2delPdOO9vVh0yeNZzulEmSwHw8u1K4F+P/8BENBegzK4WvVu7vFXtdAkSM21l0GLxSpm/GF51UzlzlepUZA9fd85R1MD5io8PdSfl4QPSEcidtQfztQ9b1GesMxd2Z/7m7e6WQGR5eH8JRgXFpXyPFVfoeJFur2zTRovrsJ99AJvku8wDOXve8FAgS17m+gi0C9yRNKPq44nvEqFfMXOewt4rPaDdPTEiFiPlYQbR6xABZ+2P9sf19oSfElJKA4DesEf267UAIo8P2s1LzlV1W+fSzJYtjopsGYDI89tlrT+7HtBD77uVEH+n+7OKJzyKkJzxmGZ3UL6YS5eFEjz70b5aj68GoWFqlGzvZdyqkONh+LKog2ZSdIscBFN3B22cz8qubTFoTg5I5gNeu1evyxW+LXuRLqJgbuhjQjhnjtJaUMo/DLIvRAlWsvBzZjLuUHLCFbda+Ba/Y/UXHyT6U5/J/aNC9IyftsDppgEdT6YYkJnrtEaqNAkvCF1aAVaFHVdAjhTJd+E/DQwJqVkXPVbEAJSjzhPyLO6BFzZHwoNlc9J9Hz90Mqv+9mxozwY4uxaxoqh7enaoN6JtpM/ud/zfE5QRW1IQKQwooSTOoyhi1+lypBlGcmteHQrsB/kjTQWlrmz8d3zyVw6ZH82z40pTElKwbs+bHWgRVZQBYSigCWauO9qxQ6vw3D+smEU4vahAFyi9gDIZdc51rXnjBd+65T3A2RP4uSM9KQBeuTtvpYblY4EoAsgCT9H1glPW5t7rARkJg3B7jtI2aLqfCiuY9cedEKKZ9yAknI0eWLlwgoTp2gbTcP/3AzkoidkCxQH+EF9W1R4sA8d0AkysTszhRH0HuwSQ3c1Hs3ai/7Vn8A/bm0pIUvhtQhZIqgumq7/5EeI+4vcIJ7FN07RpciF9FUkZ3S6ss/CE4gtRqn/rNWWuSgWEnsEeCQC8ZkjM=';const _IH='ecd20c0e48bd2e6e901b87e7cb3432696af33bfa1cf0d9fbf08a31f68c4a8101';let _src;

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
