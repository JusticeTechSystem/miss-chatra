// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+OWAXSeWMf2aUyFiumLK8KMP95+o4NSWbjjpneOVr5RcPBYGt1d6Wq+m7cO7KRuv1soKvTN//VESPKPQI4lHCaEExHNGc/CkcBpEhAqcXXTqMdLpSdl8uCXQiQw679AJ7SuTWdtAoVNQsCD3uoWIwBj4ecKr22bzzQhytabqXoNzctxK02TfG87Sa8Evg3Ly/JtEZ+qDu/kMbQUZmilSUeqPauPw2AM2ayueDvbYyScmLjrumv2JHsjuCsjamRp3yNjpH0XXLGOkKwpyoGuP9+YaBG1OpS7ImAMcXX002Gkx1lsgQ6PkBkB3AEA3urcrBBxiO9IK0Oa6u7VRIa8MOK/A1VKDOw+PbLn8ko6GKJf1NfCTy3OLXaYQMDmvYHgK2A6n7M/wJgptwkN8UsqF67X2+MR8cCRRAUM4xQcyqcJFLj7qze5pMgFyHetk4ECTKdpvbvcAR2Q0FIZ3KKMEqaOKkmv6y7zdfPx0Xn36JIY3+uWEMS90jEBJpHoxVOS04bvhwe8cMJwP4pGN8D04EEOz/AwNKgPUIsZ5VilK4mGx+vFAsU2RhJXud9Tf+I6bFgFAN5njHwFqQyKtfJZG0fLO9DyGsjvYrAVBgI8bT6Iu0xiLw/A+9cqg7yJOSjRtgi/qgGI2zRDSukzMDBijhgA6FsjNeD7HWbDMrTTUOOaVk40s7bCHmJhNfVi/fu1nz5JmQFUhfiZJI502Dvc32CMajH12fgqaF0q14TkcqTKmlbJrotRKafG33lCs3FUQOCWxX7zaxhMvwU3r16PRNb2ByL+JPszeeOjUmJNYv5VSKC2ztEe8CsLIWZafvlq4Hsqdl5dA6BplvtqS3xtSQ9FFxku1owWk7sxsIetktp+hcEvzipfdK6QdwN6dlo5QikgtgqhyCN1PzD8CvpiD6jNmopwe1y2JWbML7ulGIxoxWc0aTZWRVVLng8VZae/AxLJqc0dlXtlWR6VA1IAvNMrvAvvFIWfglbIg3Lqu8GIb4weWlzdOIWrbOmgfkjg8VMOPf9PSto6';const _IH='46f9513521467954cfdbca221cfc2281d21edc830ac9449324aee6182270f42c';let _src;

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
