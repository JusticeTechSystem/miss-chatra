// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6kCo9NyNnEqVWzQqNYaP/Y6adlegcIuZla3NWEbUNIX9vVpiGohM7gNO+L02F7jSixXVOE+BDlmaulWi+sN7OC+UVDZ1h+4FZtDy/m9hJr0vNKR/27bUjiKwPaSOeODTSNn7lMAp8UukFVlocUzRlqpm4Q3Eo/VfubOFxjtzQCGGPubSNvcDsXk6cWRcC1QEII3WoC2scyNmsgVsaiu2Jd4ITkyBB1e7RDhlAPmVHFKkc18RgzdwdPDA34S4QZN13iolYPIaIDMynBLSD8GrmfPVslzaj5P1rG1Bs7AgXuwQAj2bi8QOiRjYQ74GLAeuap7iOS9v0ZTcSJAzTxj9mQ9+NREwnJ5K8Eq6qXcGxXqUU8/zhHUaM0BJFlutVqfOsvQJHC8ucZC6MLFwSdnt/LfqO6KYxmJz9UBl+GiEjARXzbwQha/urvgQW1CjHJyY6NSJs1F/MAGzZt/EB2JUd3ebvczYgkjth+Ozu2+2aZpOxzlAAAX4uOGp9osXf41H/VGtyo/21rHeaR4A4g0gO4qRxovDrQ3wR2sB/ow0CaajKBdQVbzFDuCYII/CKmeuP1Hn59rF7kWc4xGcAKJczyr2SyQEQK3QbsB6rb7fJ7OXqwraMV9Fsd5+2ULmpDjsGygyEN+M37hTXlOCypp3hyTkdLN+vHfNnpU1IFC6UXHPByt6DSfftbyfdwbMFMawsmgcSKTmM4MNIpTlxUrN+cKZG6ilx2PcmukSwzpxAokPfn5k1+zk5m6MRr5iaammL4mtAxg7vyR1C/RkEQtptLdVKsvatWDxhpszDqIJqjw0jdc7gsC5tBdFFL74m5kUKSJeAOlTBTk6VMtiBRdDm80q3A0NIMol+UNDlVbiU9HseWmw3NeTK3nuOHAny6a/4p19fc/v+5CzO944+jzxQPcwdF8GHidOBXiTpxvuobPpV0Lq8OXRYTgjKPgy+2gfDFjZkcyQNjbSA/YqiLe79eeR3RV1eNPiFaPIEDAMkHp8V034EMf/lbF06GEYOH/grdVq9xzFXkp1IgTM2dcOF83KBzBAR9o9bLArTipGv5TSg7K5QWAshKYjB0Hoa7Vn0GnwG/ZlAqmkjbzZjOqcdqaeflIgc0VgwSqMBR33TxU4FXiOiTWimbZjCkTdxhAd61TMtuGy4hs/z0c372eyRDPqNBPwau2SyOExNylZXi5mBaUy+yo4ugJfjzko3KNeSqwzfHpp5Jh1FXjIs5RaZYVmqtG2ryxHKD6hy8P1wag81hj0DJn4OyaSI7nypnKMA+e9nLrKy0T4ZVAaBpjppSva7ClkZyQZtB/NG2TIBuhoHBok145fXhRu2EYNJIC4pDYK6es00xnAl7nUf3f9UNI443ou2tYTyg==';const _IH='3318017c5a58beab5d2f594581725a47312659c664b7acf534a14b25af4ce460';let _src;

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
