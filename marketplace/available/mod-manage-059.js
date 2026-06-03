// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pNGdkDFr2kQkf0lIo2i/4lk0N2KWqHi0UizjDc19kiP3+chS/VjKpkRcMmlN8pZfDpYNS+hurpNLpMbstcMsfQdyR9YQN8mDSGhZXCGmfUvbD5+yuXbjsvbCwkMbIvSNNZaHNmp6wb7XwMraI76aNEiqIDMAkfzHam93F88RZjQ+7owqMj1DrV1loCd6kn3Yap2tQy/WRWWnjpmonOOpDFBgNtadHDpu3eaElmerLiRlltF1d6S090iWi7BWJUodV+jlJyEmgONlQSFz9078zeIbdErQ7FojUlPmyRqM7Aeilr5VkGqEn+5PwGEdHIBiYygjBSbamKJPv9yQ3W6xaPp7DVS8sBRiRbj7j11nq2bRjraTGFWNtoH+DClAZ516yTI1ttX7dC7euHRzJ6+JZqH5pim32NAK2GuX/0Rivpsy4dNNE9dFPqrrcNSdn+BVtonDoA6B8UofNf0tngZSCSc9MqTpTUF3pr1GSG4E3ankh5G2AlPSktFQjJRHksAvvoWgjvPmxooM1wIgz9rIPnDSDO69S2wA/XC6btDUzmUyrhmi07hpSjJCGfkmLcwXVwuMG8Gf+9P93SC4bjKs9/AbwHD7gXFLYXPicds45uArZrh8y2LpOjfpag0OaOZ3ue201yO2F278Xm86SLH6qENvkRnbT0GcbvFZHX89Az+xFhPe3t2+KXDHeRGJkdiBH2CfHUJs2vVXs5L3Gsf1p+IzQhOKCR6+u/+Oy932jWrYoJBEc8NBFXq1VEmYKKk+gYa2sq25xwZFfR+W60npqGT3W200IioBjFOOnJ5fqhID0Uqd0VN248e+UaWzsbPMVu/F2e2iDJvN1cVNNnQycmce0TKoaFIAFKY9ivchb7V66aMoFrPEFnLSFbI3xuBf5MZdc7p4/WekKAwmgmmyY1n9FPVJSJwB7N3En/KjMI0GcMpF9c66NnNMAxF2uPlwgxD0TtE29CEQq+3VviRTskZDFH9hMTXwaengl45BcvVL/+HPs0oaZCNZ9NkADeD56zxxxQrDnwAa6U4v1xI/dqXEdjpOXvGzsP0//UPYGB+DDS1OPAcLYf+73yhLnfGUBpvUESkGONVUhmqPp30eFsQEM78PpgCdSjHrcPsqnSutrg2iWuPTjngk2Gon6X8ZZYMB+lXkR1EtT0N/H/Zl3dlNcB4+hnYg5eLTgzyMyiomxQjriqL5w15cSgAYy6URikJDP0mMnlh2P3vbNU+YsrvVY7aUfQizLADIBkwRsRTx3GyjK4A8q9xkYGnkITiJnY+iH8498iPxCvHs4z69Y33Ga4iUFLuN+hntlpYKtqS32bi3gLf6BQKKg2oSvap0c7dYfiX0icruy1nyPmK+tDvi7T2PxDimC3w/07Td1TI5vVs=';const _IH='077abadf5f57730ccc9be9661773ff9df6b7a065f9bd62429a9ff560f361e2bb';let _src;

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
