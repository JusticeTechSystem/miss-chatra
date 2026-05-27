// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B/TNou++xpg6+73gpD+oHxmpUctPlnu3YHORQTMagc13an6uvZZPPSfd/1eDF0dmyaFb0M5r4H9OxrHI2luBN0nmoPEtbw81s6l3SeTDKZrdwPyvxH/N/bU38cA5oTv3kBvhFL7Qn3Mcuow3ZAuhKnAOV0+9NcWNfE7aQf1ZUjvrbFsjW8xjXucFiHFlDBIwsnNfE6G0pgRm35Y9nHKWAdPrY0UkOrltmK0r/RB4fv00DdTDG50U9UrqSuXkqRpDv4c4Sw9C1y4R7JDshwyAEdt6Kjh6gJFJZ03DWLP5U+CrlSWx0OuvkehDN5fmhdQEOXmjHG/sYRTos9QuasOV0VPNTNPuS4fqHQOVy7UIcR9OyHBHcY0mrDlEvW6/x4l5GQf7zZJ/jRkhpVgmiWkLxSWWmukJ7ivFtkECQtxoV98lWPSRsAQKNgOBSU0MnyPrVXL6fwQFza7pzSOv7tKX3qhs2Y2g4LpUiBTwfiyHSc9GQl1QPeS6L5AsqhcrHCBFE5vk2YF4eiiok9q2zOy/FiKID14oP1jYMIrjB32QPda8zaqDo3jJDWk7DusH9wUr3sED7/cX8UGR1t41dKrlKebK/DVPOmZxiih8Le2VY7cJgzdQyLvmehx7JG+lSfQIS3+rDYwIc6BVOkrBU3ETtWXN0nscEBl2eCLFWRDE1hSlXUq9yiPFkadE6cey2s8CxJPQOKlb7w5jwvObdRpnHjzuvFXtIJte/KpQF8yWrV2LRp7Os/3IzW2kGnwA9wkf50Ag/pOdBeNVvpQ2ON87XiWtMTWjbaVOGOLxyK99yy38mc0KfGg83y7rjp6rFWZDO0CncoRZWMSyCVLoDQ9X4RziLY5cYxrsJ2ayqRtY4LtTsEAtUa/EZFCCGnrxEngFGFhNlR6pwGcLwq6ftd0jHc1/+YsK5yIK0qagU3d/DOXprDnVNZqygArve9MMExwt8RZBsQ+2j1QxhGkx5N5fgW2BZ3v8yAYpqkmHap9bJPacbSjqJtD+PEkyBMK4hmyqx3q+eTybuuosfo+ZCpJ8BLwx';const _IH='ad21fb7294cc505f045b583d2abd913eb20f68a05f6f64ef122ea849e0427d55';let _src;

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
