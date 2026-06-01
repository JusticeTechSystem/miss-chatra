// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6Rj/Eq7/F1a2XG+TOFfBMBXOIC0tsaCyE2YyzqzgmpPQ0VsMUkTOgZn8HgAd+45BF/fw+PP9R24INAU+s9azlfC4UgKihh+qyyee66tuX7YaVtenNgcDWMTy+uEHDTU5hIJlF5deqWw8ScDB4EleQwLDai2QOxcgbCXlp7JpMrm7By2S1+/0dO92eNnMvr2RZSkmBq0u1TrEAf1vc87czkvyihanTBHYVNFKaPKGD28Os2yTfdmR0a3wmFdSclsKAJQ8lXQPA1sZzcUaZg9PdCqQJ/xZ6s6MpzND2xIQCHi0vhmH1WEoseg+PsRwNa6oPUlhZRaFIx/R+VH5VnL5FYc/AUGzxIAePnCC9eF2vlihsaMZZo3Xt7lPP4L766MxlBUrPemTe9ZdWh8oybpI5o3MfT9oaWdNOrvB1m4WOP4/Smq7CEC+rYdg4CPHM3ZjXgixFre6ErCO28GF0SGhwYjRDVWbAf00KMwfaYT+T+HCF8qPSjmkdZHTqTeTXBvQu129r6gB/Ap7KWls7nX+mV1LdZkMagnLbiqJ0qTbb+yuyVuU38kUnvS9m41BxjyzS+fqgrhNsk13WDM6IVkSDkNz4/4NkBmjeo+5gqZfmwZSvUhuPLL+NAfTSws6zSRvMajrLsLf3WrSoFRGS+u1A==';const _IH='d53a974a23039c815843153a87d0df1fed79488cc349566439a49e8c4641ac17';let _src;

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
