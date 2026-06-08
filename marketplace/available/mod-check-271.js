// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7nhRHNCn/zDAKPsio04RxM15z+suQJgMAvgvdTKpKvZyzfWlR5myu/hC9uiQCWPPWXIH6XFFb2vUXyK09s3sxPdnd6eJOIXeIa35mJjK8Oioa3a++f8pH8AMziaQ2P9sgOMi5ox7HJtuHMXA2q2hshVtlSiJtLT6QlEyAKpBGGp0zEsTu6Z/VZsdSwaVSAGV5oE6A93E5lSmmWo8cCmzaN7nDeAMLB9vqDPimokLtSIIuxHcj7wuaw6i6LH71qN+flz8D+q7MI8HYL4X1DdUDHzEwLr2lRntNEpsm2TT09DxXBIOkFeTBGZmIffBwGDEHPERC10o0kcnxbUCFTshpfkcCC90moN5fr2/vJtm/7maTQc+t7OQMQooJoeLVidvedTx+94YltzmAwFBfYcqKX6YupQbp3zSDsbfaWuZyiyD1MHVgQdtZW/CQBbTG6wSpmonAaqlf5rjfragDuXJSEDf/KipUm0QoHM3krSSTQmrSTK8xXMGRXgCR9gCRtJWAaA0aYPD+yiWdhZ3RXFBJ8k+gmKfI8OnJcMjuj7JdUL3B9Rzp1uESOOgYFsKVfsb016HoeEtosU/sm3k5TCAh5vEratpb9muijzIFheolAquIpLgaMCIU635/0dg7xplabQC/OmbToKe83I94SdzJlXZ8L5SWV5y5Xv1D+FHq9Z+WiSHeNL6iXg7UJ/nAHd9TN8Rdr72FEPK1Z+7ABXl6bb1pDAs0tjjzG5QNWzeGAFMvjz4L7vGnZtJLNeSS7dVCTjIv0svLwG7jpLdv6AdSzJrjFI/C/mfrjvRE94LG4C1G9EthBC3GeFGaocRlef13mQiKMkKFTvOpWP8MUx6+2Z3RdsTBTWnfmSmavvyzdpF1G7YhRio5K2cGLA0pDCs1jcx4L7HPY+qTwgSUh90kYdUx4aSznCPUdlG8a2GbcCnO+XTRbNimJZFyUr2BsVt0Efro0tmLpeMv8YRS49Zg9+tg6CDMvYKs0hbbrBF72WcGQB6INMIYFC1v/+PkklYm4r1zxQ6J7xu6xx9jGYqdu9lyaiLByZke/BtQj2GHG+hA97pFYLAE7pWwi34dPVZBkuc4owwh4wwhJY09VLvINU+xmKfXreBhiHp2g2BI3NM8cdXQZGezo30tRc4KWUlLgfC59Z5QBG3HIAyo9XwZ2dcpi2H5fbjRGQ1GkuTFzrG2LtqqebguIIQaVwEve5AcrvRi9IvTVp/KeDyDFHai9hMPGCv4D8/JYMRuqBnE1oZIodEZSLuFbamWJZ5P6xecrejJLvWIBgkl4eHUpsRsOThBIX1EoQ1vPnbnTPesS8S7kz05Q3KgfQvBOJMS5IUCfMSFWNvIBjPp47JNVxruePTUC8TjiK7tcY96ZoT';const _IH='7ed0345799d78dcfcaba306ccad17bdf9cff1ae87ae8798ef40d5e9b9d89436c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
