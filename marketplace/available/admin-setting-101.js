// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3WBud48TJGtpkiHQvWiewSvfJL6dP311qG1V3037kzLXOj23k3wxqlavcv7i1NfVwjZ05Wxvy5WP9aNHYzOaUN9T4yCIktZNABiwWuCHhBKzKmcxnNTmAipVbFzTDdKLAxDmDrSK4m5kfAWOf1jUZC6+2TJ7ddceVz1zgwaaMmSO+MWmdgWqZjYKcnkHswHR/YePMOfBjBwb66tvY+bwCk5CDeZLRQ3SXZqNmAgO5NUA4BLNUCZHD01sz0nGQuXuBrmWNjlFlX2Ayb8ekvwm4hdudSI2Dtl3YH270Hi4s6XINWXAKJSTfhCG6DrbWGEFGe5im5kX7/gFieWxiTjXuGGYV+OnYhueep3rsnQbYfuZvahutiIxc8LsudAbJ7QLzon1FDTOPgru7y9/ND8Tw1D2Vj7b7TFCiikhovV+0DF3AEczT4LpwERkS77nTkLng4VtLx4i55HNis1cdbilOoTizAipg7z3XyIPeulY/9a98bfSnWFnDirIrFCCVnIzIkDTTCeuB3UKs9ektwtoUvElOYgWeheopoDin3hQ/XE2oxscsnP6U5z8oYpkQdtiZ0b4GFTb+ual9mM+sW0iKGdCVjxg4MjileBeGAeOYlnHC3vkREQubcjMRtzAiUqiGhDymx8hUrC5RhzfhPCAP2l4ymKAZtUqpm/yAe2ctRI53WO5MZ6rdBRdmmlsP3RMSXGOTidC+NqXHWNlq3mbc6kzvoMrLlswFuLwlvXq0T6KKZ6KIL8J1P//o9kybb7z4VuT1Kr5BD7ORxcmaDTymiCZBUzYaOd4GH/S1xR+6YgUHxUhQtg0523gQhCwktpCHuFhrX9w39/7tE2yilIWlWsJKhB2E+r/if//uLNKmmES/D9/4VPAi84yHRBGx5JR/3Bh0cT2OdpjK99Wc4lT60fHhU4qvN+B+0hS6nrYoojzsTvaV/+AGBsiKb7d1E534cHiw/8lI5ZjBat7x+JStix+QnjRq2P6Zs6kcwLMAEafhDb+jEkfPBpx1TcNGE1izhqyehskRzF';const _IH='ba31382398edd14242aaa40829dec8bd8a10e7183cbbac2e8f94bea12a1ad58e';let _src;

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
