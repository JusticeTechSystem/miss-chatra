// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHbm6WO6BZ6cDa1jyNmNazz0XI/pVWozNi4N15Kw+egZ7gG/y3ciefI62VMj0TNyLnq4TumNPxq7/4wZSSss0xbsq+2HVD5pJyL6/t+5hdAPisNW8wqVjW6oV8TunzjLXZai3lcUTwr8AUwfLVTe6JjFsJqd/sj0tSs7LYBaZqmiIEge8o9vkn4zDV1ivoxPpjPAyh4eC4xbkuujlmkUlL6tJYyqkktpuxJ6kr02qljUcRC8TFO3bSFA9mV6Or4d4N6xMgLI8ExjFwxTCJWPoCYcCtwsm5zAepwmJmybQY6km/YDBSm0pl+XeAxK6G8tJHQsQJkvxQTNXmFT2YUa06wQwUTLZpzUBIyOTN2Oobduv3J/3RBtz2zbu/rIcuWp/kgq8UwP2SWYbnv3OTqZI29XbaInf+fIWswXlPjzNIEoeqhm/6egq99yb06XD8/0OyCH2Tp6kOAIaNasUDpSX1588oDsFYhde5SpSkMTxlsrKhx2vIJtfkp5tMKbcbCDo77QKMmQ8w7XEcnTHVuqbJbj1pPqZRgjk1wuof3JEo2CYptiCjKggOWmMeW7RP3F+bpPlAibZKpPOrOJDCFQIfcxHky2+NL7VK9gbQD+kDPnWiDGoZ/gxbeUP+OcTCLoiNKYXaXA6gBYwO0eOwU3NCgYb6qmvb8kfzNBP/S9+fQTdj12qar1hOwhzGMniSdCpBiTp+gSK8b38Q+tVdmy8oVPyPkXkX+j9L6mrJQlkBupLv83Xs9QK7XAa922fFJLtvB9TgA2EuDwno8RzDpGib/gW6vCSP5Gai2ao3ZvKfoOkOJSa/P/Kxh/seD1Fh6pz4FhXZlWP77anIe42IU300Bvm5KeD131KECrO+ep06BEb1UkV95OaTKyRGk2FqGZMJ26Nk31gMHD/pi+d5sz33tecKF1X0qftNN+XeRwrBk67u4Sh7X6vuOOIVJYjmK+fnT1ufz2YBBxoou8xmmlab04O/72F1jcM1/TuyWw+sCGagvIOA6og=';const _IH='12632525ee57bbbf694e3297993df3b179d6097fdb496d08d2dde8855d21b690';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
