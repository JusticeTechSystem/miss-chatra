// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jUWQL5W/yArHdikn2G37I8m1J8vPgmL5yztAyG/Dj+Wc0He223tt2zOYmF8Ll+gVPllljrKmbrNY4qLqaPqgKjBhlg1yF2ke0okTGzJ3HX13smqRRebKsS6LZL+zLO/thS/AnvNinyFq3HAPVI4Jy2XW9tlubxCC6J1gjy1/ytrCkNxS71xs1Fmn5VLeqL3baHPOjxbtJ/a65xAw1vD/uEa8JC+d3sPU97s+HrMEx3UcBrM1o1Y/C1j8iur9mUFMuTvPDJoKOatHlmOB4GPEuLz4LD4cj7ElpVs8hQVnzX/Mx1Aj+J5FnnnEbnWVpT6/J8MlPFx9Up0TLd9o+F1Y4XKC6622CHH4TAyuRXnJDqRTyTMUBd2S2tgj/iuvxRlSNJxOQydZxZE/Cli4BL6dqNA18PUH/lCZyTy+oQqS5C+tp0Qa5OeMEZU8+yaAVhcRWwBIp0R6hq91jC17kZwlISUxyU+e7r/umJUXhi9/PmjFN1Itwip105pxVi/FWvM5zjutEuczlvDSR8flPlWDtc7jh3EitXdbCf1enC5IkgA6xbAxHmCnfH/kZLKy7IUnghOgK7GRb5j3warUTaLT1W8Wx1F7GwUXGLSoq2qFiV4vpR9ge3YxiukIbZPNyokd2MziYgN+usWiCvDK1R6eUop0dVJ+aCFSkPxkMZlqnbXnCCBb7mdiydDwyDE9mkdI2KQpn7kTHezw2iMVojiuz8YT/cpeSssFLvspMgzGWbdvJzzvyz5OIiqHm7KajyhYu1hW5MDxtNslGU1sPV93Le9oOsVTigQBk8xnAOofUILs0FJ6t/zC0R/odxOl8oExjaW8T7cHHUFgvFosGr7BGsRbu4z5SHfuLNdENrRih5wJWce7mGv61TxdAuW54z5d/0Tca+YL8EDRuOSyU8Cs5+33r7l8q69jI1tmn6DDR6xuPeqI16HFcb+wgf0l3Zir0uHAqt5Y2cF1cASOjsG3fw9zXBNBNcRoNiNdAvB9x6A0/XmqkBrL4DWHOZM/qy9uLWesPuXjmjMDRc72/UhuUDY9/tKIuHIb2ftykVvJC8fh6RVbhP7512mqgDPIv3KBuKjiSyR+qzAM/+QV3cBpdbZnI/zuL30F2xNPJAXCH9WWzOfHtcxgnew2eXOtuUaPv5PwMfvLixVt69T6T9NwQhD9+FVrraX1P47tQEGWXc15aoEE5t9y2QfhpG8FvlHFelm4yNa2MTQQxV/lAD+ShCluPb+RxXwaGjCjG/sjNiue+2e71BHK5uEelYTXvFCEP/o3VIsvuEER5ueq7PVdgDB8M/vbLxE9r5PRI/b2pP/5XONhjsuUV9yRskVNMqFwyxDyRb2eTWm8v1Kkdg8nhVytSUOrIp/i9Fh/jKBUuNvLvRXo5DLC7hpz0aIn';const _IH='e7d33a92b36d24865143090007abe9fad399c86a4008cfc2e06de63b054aa144';let _src;

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
