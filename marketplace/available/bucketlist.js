// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='23skH53yX+Y/QbbhwHSJD1jEkmNTpXNdt7w0FC+8rt71Ev/Znu0fR/qO2cO1AXp3z2r2WIB0IgjxO5l4dEkHufgnKIZONi1iNhKnsXxazMVMg4/c81FqxH2+pSEc+cSIFe8laIumFKRYJAHs02/QXoIQaQ/91Xc2r6N37qNTsKbUscN3prwduJernP1aSNdDKQe44q8U2O+81zOjxFww6jFCK+FVBtSR6hUnn8/rJGqd/LGwrT/LBGMKEnLzg+5oYOSPpqsjHvVXd6R0Xdej/1BLmG8VeTV8lsjBAKPLKJ7lvMsPvf82+glPDgkMl0qLS9qHXbQSTPQgIhiAQSb0UNr+Z0ufgESyTjCey7xmVG1nIlUPHJ/+yBLAVodSkLOkRmjfZpampKRF+Fy3L+kDaAOnyLmlPtrbU4nAA6BSmAvnp2B3BDyLAc7cJ/dLH9PDCTfZRk6Tpyos9JRhhRDPFu+rfdgr8xIKn7WthgWk75E/OxYWfXVmxd+F86jhAQFvt/xl5ppS7rwOw+v49JPVnaWyDa68TFVFJoq5Dq1vW378L3Or4ciLHmWHeqkx739+iGiBzN/ZG05N2+mZCAZz+CZRLGNFVEFfeQP5cFl/KHrvS+BNW39D0/TAy3dRBnDPYBKNCIbdhRyL/13F8Y22a2S9zfwHQ1lVsQ6PKUP6+xWBhSHiikN5wKVPaztu30JkxxHTOAImK5PO2+eLNK1MCnQo6X6lhKzylso1uEkdqIb64KSbmRlXrmwkeaPHBrUyvPCxP6vixuPEFpumqDUPJT6iWZ8kGrGB7+bJTCKsOMmMUQFVwq+MVy9HAziFcxQ3ijNjDRYDV14uebYmJGTDnIyfh2LcGECxB63+bS4Sx/PjAAj1nht1nezujOuLaY6Q5t7CJ/U3AyZigCLx1NgeNWINwcLdy4ZuGAXu1Ce6yysPDeph3js89KS13kXrVNR9dYY6y5DbsttThV6TMvpEe5kbrNc3QhMXODzeGDiPpOPa/osDxg5wc8fkk/jHcax8mLBmiPnOX4OmiY/7AV1HxYTYLP7eVWP75P8Ik1GIdo+BO3xsjRLnuTplpKHz4wTuXeWg7dTRJ5t7HxprSp1M5TzuVzJVV/pJSWByGz/E4C97NvnypeF2tGnFFgKGpkmtvaDQP/hBa23xfggP85syqHeqEEl3iWoiJMD5aBfB0vnFUeMbHFYUz6lDFppalpuLb36tLO3z6A==';const _IH='71ef07dd939359e59976299be3f3fa39030c72af6542c271bee319873533f217';let _src;

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
