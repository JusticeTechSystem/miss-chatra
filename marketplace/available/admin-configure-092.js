// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SSPtSKehssbQ919ZiGedQcPvJaO0SdTb5L2NRRiCaMpHVihzUfR8TzArYckESAMr8ByS7nVZrNuTOaoHGMQV1T3T2bZds4V6+Exd+DN+k4iGnCUC20MXgLj3hoNnO1vK1FGR0+NROm2Qv+d2MKOsAcVPGEjNYi7trlDaeFX7bUm7BXoj6/dolCxbkRYU1FCtp1iXNhMgFuB0Y2Hqxeqy1j/3ZBl5/50R6vCkAsrbm38WvQDEkBXVXPRQG6Rf+WHwctch3g5KsFI1p0MLRUGeUItvRezyjvIL4IoDMd5kPXq9gOXVy6lH02ftZkO0wIRadcn9cvnRXImCSScysmLyliEHq5FnLztamPq0KHkk/YW9p1keBwzYd/Mvm/ga8+dYjG7Qxr3v2CyMOh8NiL7dT5wO7nKBqoJlfDKn3kn684bD4WCDsZVa27QI9qGGgA8rD7yHPNRm8d8+Q5erXKsBlAIDF/sTeSLXOAeF4QMDD8Z6n8MNedC+VDRnX3oCp+c+fRpvU5HJKTmZjJHTQsOapVSqUkDeaoka5094itx2FS5m/RlGl6c8maOjclG8g9lCPHAbrqTGGJvaCNqlX/rXPd4cn2KDDPgGRep/NXQPeror8LQ8esS6DD0t5D+Ntm6DwHf/glWP97+H4W3eTMBn88NI/NuLdUtFeXYBxEkKKiOZq58kj8fG7D9TzBPBbr+BWej6y7W25tgl6Y591whXHuFK1c37kP3/f/NtPm7KS/b+3iBrY5Fp1zJpisfq4zeOGwq16Q062nZH1MewRPkjFTbrdhjRADzJrtINWWJSwDkAWXv7zYeEabRYuOx2eToLjf9LZjXBrnCyEtNR+IITHsXEIypW6YMKVkZ1Gp7EIZB3f9s0Xt6ahi0PI5BGKJfMSw35NIFmfImGzNA0XzwbvTyB2zu0gGN7Vkx1apSS1DUcbxWMGcBDRacpNdL473ET8bcc03FKSjvstwUiYE2o9dvpJgm8iBGoWq2a5rUYRCN6VMf6jNwkjGB2JRQ9A9sJuCFCe5rhK0vZToTxznUyAt9X';const _IH='d5f701c977188f56c0485a095abe8b821e9c2dbf386a5115721e1f4e296e0d0d';let _src;

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
