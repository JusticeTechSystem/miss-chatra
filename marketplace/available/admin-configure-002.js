// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OmGYH6qOI6fODl15eLJTrgJamsy8KA20jPDZ1zHI4Z631ZBp2uKaIbTzKR3qWCvjyZjh7dmDOlfbpZItJ6kCm9n7jL8jNKkl6EpBXIXEpTz1uI1ax9PSHHDjoa9PeExzjjH3oKHVqYo+E91HEu7/6Sk60Ff4J10guzi8nHPh/PIl7vuN8tZ1+CWF0mkhFzKlhwPQGJJAYPYSaNYYlawA6xAk/Ul8XyjnGH5MHf5ujdP9oRSZFAvAVgQpqzQultjgD1Kq69bxmskstg6isvhm36gkEcdFO1TWhtVOnQnfEE6Z4IK+ysU70mi76AxwJx/BeeJLt9QKDSuVlCg24k02YeEva9DwCbswGp0Y+pEZRsxAM+ARVw+CikkFVhgDMEwZV2n7qaDBis/tRM9HQlLDWIKY0RIu6dCpqa9xcOp/8TgLNLOfYKd7qOFNYmNENHhm1LVj+V+voX78FT5OnWB1+wrLOTpCmYOZ4HbxSqcY8oVMiSEsIGyM3Snyr40U2dPgx6kvFK2bgQH3qjBrD/ucnSugRL/hpbNpRj1g6MnZUXyaF1hsExB/1Jj6nHgGeXYljowpGzBnqVWF8bH/htA+R4alqVhBBOlBXVfhEf4HjzEmhINlPUCCAd5fVo4BQFEmpAFJEI0QrD+YRi8xqIcJjfIRVrd5RluzeU8knwKFdrbQdFXvTVY6j+DiEXNQ86csXUTEs4GoN7EegsEmQNerSzTZ+Em6T2ucZ8Q7RRcyptrhr2sNrfdSrKjd3n0XyLPaqI+46WZPvfRgswt9I1GlcmPP9DXBN2JT8eZASRtKXf64f097NOoSVh1G09YWE0kZf59fULbhIHCyxwytL34XROfhxHKwu8M+hGNxrBwLtQexFcftUq3uTw+d7IhItGCiMwVMukv+So3eFahxypR1ZRM6gW6mcToH5AKcM7qVCh1im/owTrKworNRJBk3uM/uRSfRh5CQy/YCA8Nfc4iWpFc8BF6N7fDIIBaETcoMxnfQRcJ+au8+KMlyY0tQCDOCNFTRwbU3oHgQSNfG4IU=';const _IH='4cbf51fa02abb8450156e9f3a4bc548e00b7f4f701ea4ff88a167b50aa72a7c0';let _src;

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
