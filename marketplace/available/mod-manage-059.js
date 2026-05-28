// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='84gWHdfe31UWw1SN3v6pCcuROH3IpuFjbAo6Mo0E1T9b83leRzTB0vMzrIZVFvYMhZnD/+jQ8ilZJfvgUF9ACeyK7WMNqpwhnE6k6ozChrPMCHb6SvyyD5CZxBwvtohpnUIzURKoO1SOuFH01KshVzicAOO7q6lFNTffuHe9zr6tyRvbp802FUsCLl57gje7PepoSil+kYTGE/yGe71zAF9HjhLizpMebgqoOKVOGmMxYn/qJ3v/Hxu+HQ2cTG8fWl61c7/Qyi9jTFfLt2rB48ThgJSI3wPfMG7ACOoz0obD53fEHEckMpaji+jL1tHcMWNr1Xq5TJiaHAxFUuMYCxyShusnzHTMzN5ESgjEIhxP5FQ4sadmZU9SJJ1wm0o8EkBF9OUBrX8aNrcpMAA7nYu0y0aWLIaDwdDKfhITBt6Vf8UtU0huv4QfBaMJhg+f2TLt6W3Mp36yZZnVjELB4jl+O0mD4P2c9zrX5hgyydNfSEUFt/K3rOEIdNCRR6TGuz5grrGnAnsXvxpIUtZCqwUCWvb3Hd4/XPvCT4GBysPhybEcJTk6XwdYvRpnA0LviXP6sGSJFAsD4kzBybSdH2P8PeCNBeccvUFnGhefnf37wyOHF3rvoq19iqxP3KTgyZdaAMF1Sjtz6Sk9NX5nWEB5cjuQA5PPG9dxTVe422cCbhtIYx16EstsXhqht1SmzIfBtC+6VavEZeHK246tl4f72fPXJ9fQ7QUyzyKYz92YLcqxrH6V7Gjvuo2vHcH3zIsQISRPCIlzoZBruDe63c69mM4rJNB+ygN94BHz/3CxZxTX0EuFKbzPatKDp35JAJKpEDm9GzPLcr5N/JCeuQaMPfwVWXNBRg84IVwqwAk5/e605HNx52vJ71xHRRziFL57efuWDcvHJU+7AbDo6tilHkyy+WZvNoHbjeKdTA4LLYK680fRDOw4Um/+xEsZPz6PvPKEo+iGa0T6rbJCD4e/IJmCm6iVu7tgbGgBCtjI0evP4ixgFNOwuZ/Jo0wKQjoLMiEPZnTgVfJhEmILfdNVkOWEl0qgALn6zwCfwJiTRY/eX3MCD4fY+P1lQrOH+Pqtqir74SHzlx3POfD+q17wRfH/sKlmkXcXyvtqZze36QXPsSO7uJ4R+JE9dJsxDmBaFGDV7KIgrHW3WZ579iEycs1Q99fl40hxjMpAhoP1WT33dxBu/ELY1UYKRIo2PbzZG2CpFspz3RRVRZcm02M5FZyMKBDHhhFmWczAIw226aMhkFNMKcj0DzbUq3fWcJXLs285fC0qor0LHhckcS7jZfkN8QKg3dhBBWZ3z4yG59epGgTVM698jCG8cIKaZlgSvBdDyM6muR6Y02/vPGQrnkrG64ennVKzWcR9MAeqYc0=';const _IH='3cc32542b3cf06b97aea1a922d6ad11a6cb91e795e9e1233195af185eb4b0a71';let _src;

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
