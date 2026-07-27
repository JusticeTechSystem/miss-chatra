// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSgZ0rwS/KfbzATi1RvxsKNQoJO5izV+/2Xts5pMSjNrOt1c0oMJX1Q3Tkbnz1AEw4aqfRD38n6b4tXG3UwQ4xdeRjvQ7Pm1oFRC8i1gyoCu3RNP4PSKL8VQUByRy5p0rdBnBMRXbEbYv3UuG/w7aFHNU/+JJBU826N1wzbMx2QxdSWY6M/e6hSKX3++MGQphoKH2pexKZG6y1ENpGNQvrrUoxNGnbvAl71mROJB7OpI2yhW/CCo0RGrJpJZ6LDt0UucHrXsEU9gkbsZuNuu4FIZKSn+LbfljEzrbr+eH+Iz6F6qMVX/3uy7qq0efIA0YAzRJdSrAyEEJni8UVkPp17fgWhvcdddiuqo1mvABNV9ryUrATzT1SqhuoySsQj2aeXo40wY59/80hNfZQrczg2XtmMeZwweSfysgkDw+ET80J+t5N9Gkeh/hWf23d68BDnmgLEbsJdunmWtySyiC8FKlOazJJeSNyI7URyVEcRUCdNzUBWicX61vZVH7Uj/ENqGna4oeIU+XWHU3hG54JrVFhh/8m2el++V9QDcPGtA128yZUb9VJSfuq4JYfn1vYujgPMSAadocnkmKmqXMUOyTybPjLdMp1llA7ZADsxbAIC8jH+hYqN8ECzw3KniRcb5sIVqdiHsHXgOVl3LH/x6AefVqXkKFhmf6hGTS1KrdLTlBnd7CgvlyH5o0yUBpofuoGwIEFAU1tiioiHfUwoI4jw2YzyiFemVJts3tjzwc2q2NvsG5Ir19ICGBvQr9cLPmkpDMHaMkrf32JDbcRMKankuHuu99OGbnBRI14jYHLCf+ujQSCYsIDoDlOx5WEbM61xNs4L2+TYtCtCgVgIPJhxCYYdO/m5vBtzraNk2Nn/U6t8U8ZABU2ejmNSyshlG5CNSsVq4gDUGOW0/PPkUQVjSnXrG6ytjedYLsIARJRlgGlj/IThWYXyRA==';const _IH='0e47efd468a88eb2c8db1dc7d32a4e319e454bf3e09ef2e3a4d06026cf2c8179';let _src;

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
