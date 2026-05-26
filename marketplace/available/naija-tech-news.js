// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rUsMHLpYNqTiuVozNAEfJDH3LPyc+iHft9i8X56WCDup6rToQkg6J5Q+CebqXe2kh/LZIv0Z/wsoEZe3cxX3d7wERuK48HmMt9wmzVapoZUV31gfRQUhnalkd8++/9Jvl6YsUjTVeho4eR2l/TFJFc6gOKwvr51VWGLV64LEGjDpCJlxmI1f9IbA56NOdsJMz35MlHF0MIKpQA+ojsimMEC9sXq6HNy4IAAOA9zqWZCgwPylw3hyvC3vZhBCrb25YEsYBKAQvleHFJE1d9C3R4cSSXg4a1/fujDd7w8IanaBphUNVkqZprdjHJ7HnUpUXakiP5TmsCy9zvKP/IpHkG+rysVuxnXuz9n+wo7+3uqcO8lEts6LCc1WO+RqqVDEghYd4CxX2viu0nNwqlZN1Tky3m1GXelfgDUiuVyTmoiltsob/isbu8U7RbmhWfM562KNupX5Sy2h8ttRwF6WMvOThNwRx2mS92E8EpTpR1KfeObcrl09ERhCG0E2ak7vrexyT42aiJQSWs6awVbYhLhmX3vM6cTdkU//O5bQazTalMuy2uYG0fgsYrvcfcFE/lQG7hgPDMLlQjzM8Gm/Ld9yPb5JST2SyV9kHgfwZJWuPR+0yRcZC+WLCm8oESGyG3/5j+PAK9aY0SR80dh3TuzFmwUFCt6EG0XqpbpIGd6yaQWbPEpTdrVo9Oh4OIRHzIPFou7C097b0sXGDig2oMsbsyVFlmDJ0bz9FwnT2/nybJhrQK2he5MpSfoCqd3PT+CDNrfllnW2r2mdqDJjClPh2F8SiTmTOSL7IIrQsVdZ52j+7QZ2EfQLDyt9AvCxmvPiTOgbyIxwls9uVueoK3w0v4CIKZLwk2dnsby8d1AxvmuxO7WBjN3PC6jDgQDGkTtRm31x3a2ih1jKso778mPFqNXhnkrinpmnrugOS/XrV+D3Mbl9MzUAkSoqz7H60mvvQ0lgwE23zQ07z5PehZIeNiXLbB3UkqzRT3g/FSK/OBqQtCaCR4e7AbnoecDBxP32IxXU8zyAe3aG1ECGtjcF5rp5MSok5Cb3/PkeVA2Uabx/JxjY506lT5YJoRQqVgCAv4q7TXdFPG8V3ZiFuZ+hfTizz4seUpEn+IVWnIlviKX9VHBiERLvryPfIbgeKQMIUKAYQZRDkl8CeE9cotnMSEg8pvpOimUX43xWEAAXkHxH2//TdwtArxGh6dF1M2W7JQfSjeY=';const _IH='12c37441b10f12254254b7559877afdfc1fe80dc126e272cd0e98816646d7f24';let _src;

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
