// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YurXnMfVGCJpdRglGbeNTuH2Q1jF/Xzjw595zfmj2dW6OlO4F+s8hR1NnSaD79sR0P9xCOhLG15CKmiF97E1+D5F+9IAdMDZznzZHFtROJg9ybn9i16AZh/bi0PMeugjAx0n3RC/Aah1adCE2ZV6LpETvEaLy1e6pGVkqTHnJT7zzJvP4Z8uoDiAt07os7eBnfaPS7oixk6vFS8+f6YN7NVpFGK05R/iQDVY63Fbso19oMGP2IxN6O9+HPFfUj0Wqg61MIaX/yDLdDkP17R6M4QyUkkv0GrhUURCOaN8wKcZcJ/J8iE5nzrA+LW1aobzkBIBHLgylvtpen7gAi8/+LyjYiCqE6xYfo7m1AMrvz31onDP/wwPCwGp+EqbYhax0lKh0GFSuMRCdTE9DRHCm1IKxusT/wZCPMXqGjL/wH22f/FIc5OVs2FMrCLCzaFsSQVYgzMT9RV9OZRLFjHUtX99xy116rLLUtu2UyjA8NfbMqRMwJPineObi35tFmg5IpM6wDoJVdHHDAbDu0h45LTx4YRMhksshae/tsbPtPA4zT3vnsy4OcisZqiMKTs+G3F3xFG4MjHqq/8MeIS9MpUYpqyPaJY/SM0nrn6w7Q+6O7ns6cnDnSMuzYqU9SKksXb1rQuOQU4nHozu3YQL+BWcx6DUnhwUhhVEIqYS/+xB3rQKsjmuHYAOl/osgCEOaG5oeKFYdePxZvrPBwHYl4PozzCp59GaHWayi1/DkQJEkg5ZjLC8sJJ62YOHSe2XAaVVwED69j+c84vCRPIxfhLTbJthTvQuA68ZJWmCIMFPbvrQLRuAffJTywUY8Dln+08Ngc/7rOOYokXcSpv84nmcG6ACG82we4d/ifRfwObb0O86TzZ3oIgdm5mYkOpSOU2q0r+4c80VHYHDATzwylMcN3XwG7R9jbFsgHyBNQOmnuT3zrW0F1P8IFyraeCQLS0iZdzTQ4kh5HbybKANfNAaguZNrK0Nr3Yglx9ness9DDhT+OLsu07oeQiZuz2mowxgXlrOArRadx1EDB8n/IjJ4PMlPWUZwdhITHK2+HLevHiSgl7d8RVD/KsF5Bif7P0/2aeW8/71vz7qyqwHoKC9ji9yjX99M0xmXHhFQlOT0gOM410oyZN37ZH/7aHJajm8WXsWU/6WncrMxxgMZvvXSmwkEZHvu9fggc91rhAW3rD9jCL9+qdQhDdXP+FyaPax8RIZlcvyTD9dgCnLZpLPXBeCkOWiOL7bMREHso3rhIBPjVkQqOC8jTp6TLsHOz3U8+2qsLevNdglUuBeeSaqowTJT+li6yKAj9o7j1h8wTfgjWOREZTvTmGHdcts7ufpsK2xHiz/UzpfOLg+7mqUFGrEVZ/dDDX0527V';const _IH='16b0b1234849a348147bcaa1658f67de0ee03da7213c5149d4a38d547f6475a2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
