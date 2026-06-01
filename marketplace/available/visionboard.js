// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+55UviDghfHBMF37sSHl5TTk5/2A1+Vpt054NxCh/UIz591LIb3kJyzwMVLgipjqAQqvt2gymzB2bZYz6oNVQZmdS5f02y0igvPFyT+Lkm8WFgpsWI/TtnQz3KPi0cDOhWsTcbJGvPkDgqDvToUwz08vH2+gFO/hfg5/0ijDMgT7DQaePBROh57Rno11qZZwK29IIYWYTO7caim396nuPJTWiJ39UD+Y5rL76EYBgBszTq6q27QgEFlFK+M8Udk2qvyEQtvH3aRX0eHPCcCqfybm3T9Q/jeOsIdVtRE2GyTr9DI7b7mWZcLCqhYdjRIBc0+qbTiqU8cGivB1r486fnUVLWXhJaun8jbmaGP11Jv5DUSvVv/DsakeSpoKNp0bvQveJ9zWTl1sAuuIBSUQpZWzORESjR4qLslt4cBaZsJJsZBv4cMy/KkaAttSR0OudoUze7ztygp5n4UpJqDA/qlk4k6zeUo2nxdeBTA83BJnoJSmMu56HX6neY6KnF0AXYrupNQvz9/1xYIBrql7eluXlsV0f2hcXfk9n3hhKYgVLyfH9Zoh+katW/HHSVQ++BvJ2eq/eHTQ54G9EnQTB8G7WepK28TdGdUh7XoGpGY0lMdnAqxri8YodHktGeASrMRbQ1HN3ri9stb7FjNLWsRfVsoTzpWU1ry56KYJV+t8Yv1idj354pHTW0zE08k6VLcDh4WKERs4cRf2yI9Hdn1e7pFrs0x/eGloH9Z7BvLb3XbprEKDg61as2m7ZMMhg28N3PvX+mm5YqkhSrbDLl0XZ5OgrjhWNoXKxiyOudxXqhwzfZ2xz51MF2btgxsknYbwvKongjsEyyki31yO9Y6AMQhrLt7bmWztH9mF4zL5IPZaDCVB6sDytc5/RLFXxmt3EP3CNqm8A/GBr5X3qUlyumhcaMd/AEUXqCr89nQAJGAW3DHGsjLjHs+B8QM2451VcB9bfuhLR5CeBQoFe62pvJr6csUay4zOqGgO1Ujr50149OgJ7qiG8ijpvaPmjAPSHc1abaIVzjR/v78Bj8wrEuTDg88nj10WOXSFW1wQwQRPY0SKdTIpiKrusELzhJ/7h52QFRuNLqri98a7OQ1Mw+VYdCmPyVKVYYjUIRPkssfin5auRx7j9xXkckVD8OQTZH1SwO9mzZChSvNmOOxwzPKyBIbfWOU4Nj5EFaqeq3GKEZBc9K6T16f/aj31PMnFA==';const _IH='2e86669c631121a5b474f6ce3cdb9b98b4e9cd81b4561ac57235d7aadc5c3685';let _src;

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
