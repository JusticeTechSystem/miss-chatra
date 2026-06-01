// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4xgYSrmSX2tZ5agTwZIib3TeKs/Zf1Fu1aOs1bxCM+peSylhewOnUsS9wTPBYRXjxk0rpVKitWmj0NVDcWfmwxEXdELQCfFzhOE7Nc+7DMZ6tQZGGYtuWysYbseVutzvs8IYN8QV5xdWdc7hmOJs3Y+1RToLq7SAGoznQSfQKrOu05TC6+70K2LYN/VgcovcI10qN2aCP2rNR/wHFmNMJWp+EoEWue/pWfSrZTtUOS1jZOSTmAqbrNy+s9majrgWEe88pNvvey3dYwzivhX0vCSMhgC7WQcm2l/jEwg7lkAnmQ54AbcVLnkCegmOZOYTssafxGywnAqxMiAqN2T++Ou+yZ9An6jQkcIZfUgGkkQPy/xStCfCt2xgZlnH6FZqcPRcI34wCMuJeWZuP9w/ZL+j32M9xaIXYyMm7Ojn8gVtQGSO2/Z4PK2MO0/FI6usJTLYKfa56lWtyFgxYIrWqhkKRTD/+pedAiVTDDAdxjIRzF+unHBHXlQoFdIg7QD7Gm/7w+cDe5XBBGHM26oAF0qk1iCXqxcls3YHVQ6bcOxUeYCSL+zPxMFVswcjfOkJIz48AcbkqWjowyJIRPLa8wGxwdrNSVFRw26LXAqAGEiJ2bSSKKF1yFlBAbfDkbcewQIuLt8jUsuiqaQFIfmTUlCiPmgyKf30z6t5i3aYhXzWXr6Wz1Zn/Eg1D1bnJstCJczmZdULISzM5ngoKb85++HfyNM6x0N3keTtiQRtkncNosfqnUMfTB3yFU2/4z4B0dWwnrI930Jdm6bRyGxxGMCEBH6JxYSN/kXgjdf+QMxrL12Ya5ehKFQvbUZfpc3AxITloRT2HIZyeR7hcTFOhRM3ispGXO2hvLbqGtl795hBuDifqEaJbfHjNeOE10+bOu8W/RTJXEs7nh1oUWekDG1TFUz44TULFBOlh1CPHB+0kzVxOZdt72zy4hK/O6b6HsQ5lpOIoxvXcUfGjcxGIfohFuxQQj6GidZxo60+rVpZr4xctiICwuHOMDF3BPiiJ8Yid6pHB57X2iXxKAjJTggmusyavpXJDlzTu34hgEY2Zrin9TMDYVegiF+t801iaHZUQ5cK2eyqLdE';const _IH='fb4d432f3d83d0361fab09b1fca150d4e75733bf6c681f711ee5c8ceb46694ca';let _src;

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
