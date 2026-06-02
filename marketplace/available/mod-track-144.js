// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QKJwy+qime7hU+WlgQPN4Rwx/CC7qQ0p5SzvcvRaIks+X84Xs9jzriWyhmxUaGhCs+F4uvveOemfPm6MuJKAgDEy9QIjwwtJsE0COdqKrWrn7lLYYDIuirX/RB+m3tMYNBwrCafX/AC14WMsgvXZf4UwOR8Qq0TbeH7mSPO9ztJWmSOUdrP7qgpb48YLx8r/NePkiviBB0/Ay1R5K2YnFWtuDt+ohIGsCtssFNAimK62XwhVBEdZB1wTgTskOnsTXVsw7unI6oiPUU4D8VfWtzGhoBuSsogHniwbL0Yk3r9cuDmKSpOJIOHJY54LPRknpQ6FhjSsbteTkeOlFveks01RrHZqO3eUgbavEZ+skUhwCqIssdPYVWE3xFoDpkdLlEWN78yhsw7/EAC0PelNMeQyhYzC0QRcwAkSFAr5fL55GKct9ULTbpM5/bKi2rH+d2NGDbto10Drdi/3LkCbPiZzY3daYEELbL0EbGD7MHqhB+ldaj43YFpmLaVJYejc/EeUjviVzqyPC2fuTspB5Tx5hdWatdoKgOU2UkVu05wy2g9SifLUrohmb4Y9FTfwJ0DXXxqpqAMsEiIvSwqXLagyDGZEWFcfEPrmNIbBbEyzy09kyTDL8+PoNT/oicls1ldz2P3soDne+VCajZkTHZD5GVuA3vwVi/7bwluKgpz6UexoAmrNreMACNM9SpT1hCTJ3buw3TwvcZU/kSiUgP4cqbAW3pEnqKOmN6zJi1LqpM0luTaVpbL+EuMCzZEF3Hke1OMJF73EI1lfZDHrwxii7R/42TWlJpdFdt1Evqi/Oc1Gu7opyVaqjCKFy6sMy8n7jujzkQ9pxStHnFQJUhgeuONX6I3QD3pANEvDBtPRQRUCRQ07w7cd1HW41kKisM4lHztgvgMzP8lDUZfTkgB9U8gEfm/g+IeMRtZn1/Q+Wz/lOXSzQgoASsPSAvDtXpAEsU1A+p5aqApwUZ+6jp86adpTWKCvwYnbCIyrxWIjerFnMJTO5QgcbgQuoPvN52Rtka7WfasFHbhudyFHPt6L1wX8rpVjjfAfhiEJXBm8jfb2x6JDdXIkKFw5K0AfcHbew0xGoMD3lI4izxYLNKQ1fbVjEFWMaA8MT2Ip8Jae/p2klaxcCF+a+64ByprFq/AS5A8RDdZyrh/0o0rGyNZLQSIYvu4a/tNGbcpO9lvv4E/9GqATsqFJ+wTkdDTtT0lYuQadxstLV33EXsG7M4Bilnw73tT/c/KzXbEsjxSqtG1JzZsbSBCj2DlAAzkBGiXL+cwDGFSh9/LPV23Y1MLWXqDNn9kC/4KuFyeXhrwKHJ2Uynf5/w81qMCZVbpE609i6j4xgAAHR7sozH4EqKSgwB/WtCqYHdZnspko';const _IH='1baa5139e4f800dc159ec5f4e2b94a44c1c9048650ada9069eee621cedc8c6ac';let _src;

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
