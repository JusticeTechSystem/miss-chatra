// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3jlUiKbT4XW7jOXfRC0W/pqvvU6SNGcB1isg3Vrm4Y567H5F73pIASR9kFsfbgaUkCu2KpoPDimN3/RGEcx5LQg0o8Sk77WL30NLJkqiPw+5M470GPWyr6R2p81Ib2YNd6Tdwdi2MOSDKM0ZdPHPfA3Dxw26FOd9C0bEjs9E74IGPKZhD5KridL+sRxVjiG3L/4WfYoEfnkhJtw7EAKjU9tLWVWit5LbbhZ1tuJ6Tf4mqTbz2ebmSa3k8MORrMvcbSyAn5c23TfhQp1QGXA6TsyugPMg8THu2DKeYQwn6cDgJvaNWoET0XU1ut8Q96kTTwg2WrrBHk3gDrZkRfjQpMEfJ+WKdzD/RUXsXaBATizG5i38L9nxJWiGGoWL+su3WDv8B1s6WLAKCD45cZwoLf7athytCqAjdsTF0LaRh+0p4+DyOKKFoLY4qaIizXC2Q671UwEZK8mqiqll8OTV/H1A4Z3Pwxulm6VUmGqVyeQthWp7vrJ+p9InyzaRYk0naB/FLhRggNIcJyEE0Iv/NVVoXs63YLI3Q5TJrP4MI9nl/L48tZF+nGyVAz7YtJpU5pKLMkMDxzQG4x2i13Cz3vfiAVy7UI98a9sS42BDrjRLcnSu75X2fjQrEsVOruaRf1Sm9YRfrqw+EpQIt31ye1zyLLCK8V/ZbDjASwyhLgcaNgyvUfH+oGAkPrO8mgyjzBU7YQbUGxrK2rN8d1MzKYbblwrVNE9rdgTNBo8KBrx68r93y80jF9TDGuurc2kdnPhXSVPRcijDVmcfond0/jLz3Xkjh5pFLFD8fBKR1DlS5jEuTFwNsl46J8LcMQHBIyRRwO+uxoTLTmtlV/PwTuUyh8zBWYx6BNfViFVZemzp1A5a9oUmeaA4TZqa25yiW8meBTiSyDbs4ML2iL+txkW+cJ2DwoJaAkt9O0PmO11zo0WjuwExIPnJjJWn0y8PGbH7BfcOCY+NWDLaHIMjDIyQj8VzpYmGrrAlTJ30jFW1zhneT5PbtTF303yodEZzWzjdL4QLY5M';const _IH='5715a41e5b5080c56712400fc852a710c1773a2eec098605fa0e681507d5e094';let _src;

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
