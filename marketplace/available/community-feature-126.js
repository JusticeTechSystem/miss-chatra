// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TXl0s4ssftMp3BNFUKXTsLUXxW1GLJrVPQA1AhbFHPLgNckEmcr8itIDIp1p3q/c2ygS4WW9vxv8Rcb+D+4pr6sWwkGkUKAD8KuYn7nQlUT8S52NK25RvdweR2csPGpVOXoi1OeJAdLmzwRExxbcM//8hZhsdPTOaNvHee/NgJwRZjpR4GDsx6AHBnIUEMMNCiX9dCmREe3grUIkuF8rbf2XkqaDaFGNT9mRxeevcb5dnYHlanYv4qhDJArYbNHlIwoARqF/6xDuEwEZNqqm69mBBSRqV2bKuYFVvgILKOT2EJONlWn5CEQRip8Tp4MtbjTSzFHkUX2PyHdXsmAx77NoP2KqGCzc+nqm1Bu37Z4Wr78x1erIDHSQrP6wk71oxiCSpSXXB0Teo6PG7B49lCprpigg3iZ7E1OOxNL0V8U8eEHINPXZnh1x/og09EZJjIjFvpxA/+b3SseDvuJTQFOz8BIPPp6bPjapDPDmG3CSqno11h/1Gp/YpP29NbtqcsxximlaG9cOrJVbPx4dRlEhTaZs7g35gon780Z3gblqGDsSSuGPUbYa028MRckxZnJZLz1KINr9KXCdBbgwk3Y4huauPSSFJZtrAgy8kd7bkoBa3cJySmbMuwY930Q4Kwy3t8PDKPPkRj1NBxz/boZmEgdBythi/vbbLNrF9PQ29eNWjqHgMzujnwBeAshenlpGTI4w4vDRbRi8yQN0+BKS2Z6RrsAH';const _IH='9c0f29b468b997ed5a348559a58c200f6cfeb904e736effbc28228df59ff85e4';let _src;

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
