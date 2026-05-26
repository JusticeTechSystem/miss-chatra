// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3oJQ25dDCI7F8U2IPWHIi+oxVXbxCd94MRXkNwPS9VExeRV91f/+78zkmTIg2wGmHdbQ3bPbQvbTddxXT8dbhHyddOg/6dVePoRJexqeP4qBKp9YlR91xjWZ7h1BM8mrkBdm4SJZUFTImIFBX2C2SDucTJBODT2EQmSKoVupUkOUj9qxUwsJesbw0Y40FsXU7xL2p4JxUX5YeTGosmQidTcuqi4LyUM84qQ7YfCNgpE0taxYyXMdG4BqlQjjbQMsMriYkKb3LJ9tCH+e/o2LCokCYnilTu8/vcSPwr4hvW93FUpcoEWjhS6ZMea3fOHUSmtjyPcZblagnSsEtxx52Ykl1i3lmlN11HRlYbSwpbDXr/bvKSgWPTpMd5pEI9pCa3vfDARLvevkYo0mRQ5M344aR87qBL6uP1AbmOZOr9MbdfhhtrRkCXXLqxqBGXswsq8hQVYnYpgv/Azm5MPOuXxSOysABLsqgtsS9NtGO061Y2tHyU8DEvDJAhTDziEXjFXNmpBMaRE+uMIbXMKT3hyLo24080YwYyOKDTrVVaYWjwUv6D0zvF5Cz3a+Yc1BYDZJXzcNR2alhk82csRMWBnPMo9gNez/sLAtmd1CvKBaW55sR5wE2Q8zQxR8G9Amxf3Sd+OP6A5KZvH9wOGxwEFylZIOKkbCJCYSTUdfvEl36XqWwXbgxn9gmfhqFx5YuV3fuGnH1M0fQw90/qH5gFbjlStgP8VnzxV2AiJHbcBsfV66PiO0+FEQ1n08LrrHUBL4hnkUnNJ52Rds1p7o8afMLrcwOR5GwS+ngbC/e/LVpB1klit+SDJhUy+LfTXemNbFvNEWkITfyAStD+O1+3d4nr8oEWyw5YKYv6TKDZpS5KO1wIDh0/QkPnenP8PonvQy0ZlQ0bRWLy6EdYKjqsCmPDyEOVAZo9PpjF/8AMwLV8QlIof3QBgi0cVB8MCyZEp/ewuDV0S23Uy5ssEpWXRBjIf15RKDeDhJH93fePjSC5YE1lf0bxjpp16Mx/q2CIogmwmbn9KIQNgHLgnFeMfqTM/JwQkKi4+EndbcWRWeTO1OuPjbXUiVp94ln6TgVNwVh/BQbpi9eHdnwccGWN5qXl34KKyxAjcNVkGX9sXlz2zEo2NzZrsrkjaK0GqXgbbguqfda2xbmoQfuoGduRIn/tlvCPZNDdtIIx3avPEaiIijKhZfiJddnM49eaKo81A=';const _IH='1418b8c99ac2774676723c84f8d5de43f44119d22e9de00c30148e122ff810c7';let _src;

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
