// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o6t3KWV3cBL4ZgaVYFSX7takftfDGIMKyvL+MixERfARSb8Ou2LSGsZkQnLfc43uvNY3Tz8E2PuIBL9XykzcsEdhObiXJvaQLynAIyYnA8UiDTaBI0TPCdHr+9+ztqnKeyJjQOFGSh7/MsDecMlJQsfxWrikntsiLRmg3XNVuFRbVBSsxRDMZZrRSRX7NGvoGWvXKX2mjM4NvsGTGGS/QCc8PNRUlhavHRG1HjTape6euno4iP/AkwgcsuISdGbdOwmf5tHW2EOWtVEeaefrcP6YyQFQNmyHJbzDNaL8NE7q3NqhrLdwOu9Bxa8IdO7bl8ZKyP7INmARVxF+pevBnKPeWd17kuz46pYL9MB9UE+X89HWRuAoEQiMlnGBizHt4CGiOW81MGoMzZTFixXdJeVCmbkQFv/dYK05711hmbgdRd2oOWWGAmtZh00l8B8cYW5lYAQmVIrNDDuvLM4hsZvXc3WzfZlhSReWyilTWnWfKU4jM6Gq8p5UGA5ktDuuChM73u39EUVrxmcU02MfOdIAJxG9q0Vu2o4rGk/w8UJxrE/QuLAb+RKt/OHWSKpw/HOVFbKFy5owBOdh+B40uxB1A3V6Uz1fKatrfq+1DIu0hSByWr2RcXUbDnQysp5I32X685QqZLIjzwtxdBkA4KG0dqx+XA4lltugeGyW89uMCYnu6pyAi4H7FYLEgE/NWEHUw8xklpfbTdyeAbOJHp/RnQpArs4hWBD7R/wHe3Xxackvggp+m7+UczmnNO5PyF/7/tUSeVyJQLK5SgY1Bs7RMipvt5PsCP60CGVLiWbfh/tCls4qpYZkw6mr5e0A8F00gGV3DHp70zN6I/w4ne5sRfBtb5ZPdBbJYy/mhpTlVG2j1YXHvhNmBBJYAZMBV2ZmU7Njpt1Vwji6UbvmJPyUP3uUtwkbsT3GNPSEy7Vh+/Fo4YBKewinMOSjrdMx0Y/OkdSQX78yS7WYV0d0UrdjRtyiFd3AlMzNVShKepLmab9Z/dJoTAVL5vscCP6MeemDiGHYql8RSBejHXea1csYurm9LxIcHnFlWLAcL7YAAAJ/N10zxTJQuBc/GR9QlgwMeRsO1xVqDXUUgCTx4Cvvkt8AUwEMLPQAhXsPzmWpXJk7TCu8LbWsWHaOZy3tk6D5Ol+CMqhzGro+rak3//vdpNL8p2t4kbOcKjNeNEpX8Y/Z0v1oI4gU+yghVkpu6cAuJ4BhwNqVEkKpTQxlRgsrFMT99Pyzi5wJWvqlrXcd18ZKRO31WMqf3KRckr6YZILbHHxXmsd4bgrHuEnOle00ETenYiTlfnxvdTqIGB+8rLXw0nqTyBE5I2itAuWODuieW21KScuh966mRH0EsFGcgiykMEJFOF0NKtM1ylIizjnAtbos2w5Yj9/WB36dtRm5wtx6R2zAcBmD';const _IH='3b10e3134206998c569692d058fe343f240bdd55f6fac2b15ba1d72c56edba07';let _src;

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
