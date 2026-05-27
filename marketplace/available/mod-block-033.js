// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jzC7lZRqruPCZSM+/UICk/3efFskfi/Ie1BdikNCX8FHgiiOtqqYIl/HOrd48SkwJwcIpnJnTpsku+D9/P46p4x+QrFKQxLSvotWxU60cx/znHi3umxMtsvq3O/6u/WUQnWqVCLl9lF/l0wIN7tL5qVsKVFU6/m34mowlbmqoi8HVnIkMvJqA8uTQxks+iDroNAGNT9pt4ur5K7cL6jpFWE8cEF7vVOCVM95iUdG1EK6GpWB6KJ8xGQJ0wPam9y8HmFQPQMsU6Vf7ys/ypLxhNVRhpq806eOeno+A73PkUBhzQcstEmbATXu1TCjKqdyjz2QqYvSVrX97z7cIvO8b0pFgvt7qDmnOChdHxC0piU04tEznmImJwF5q7DxHDbDJ3UmKc9K5eSrNiQuNrQQuNWRLgyMq/QwLIdlpjrGmrtOovLla61sO7/rYgJTuuKqXPQJvtB/yoicxyvyDiaYKf2UDYEaNwYkp496N2qMd0M5wMYNytgj5/xUL8UqHTyU7XgZTygrhIl1x73EGEcZVBUUj5fYu4FvaLdQixHn5ysU+RBownEqAZlB86ST2Rt2Ar+gR3mqwjLBVkPhnCJzQxvFciwX/BrGdlH6T6Fmi3eV0RJYN/jOuVho4VN3aVIpDKiSjTjOr4BmtpwDNpVsinpUUawiO3z92akI0W/KDwDcdoXrP2Zcs89frpB1q8AL9aba+5khvaHVrMU4Pl6BauOxoCXhi6Ml9u/23stCFsv/b+itOLdr9M6HpMGRKOqXsXn3dxXVLELy6juqwUq/80dUcls1bs1oVmsIueMATsdsfC0n6EZWkaAAB6/Yo5edaR1uxmIF4vjCfuTv7ruORKqZepcun/3rwm/3olNGrAiE2d0+VdyfBe98IojGAkQSJIrIiN4t9TLC7sb5AURsf2Q8tJgj6x9fT2Cb+49NdVVCh05/QZPDFgKnfMm8q8ecLPaE1EaXAgONUUhZZHx+A5k7XEBSQeT47MgkrG4jshdXCbeU/a3273/at0/LxBXUf05IqSVTavhsFBoXH6xpk2vTmXjNWzXXVMsRjiMS1lC3xa67n9asU+rSa2foZUGRpFkcnNWBwkXfEDuTqNvsWsK6g0XfPELqZwR/d2lBlqdfT6B6BI+ntsM18aBCyqPcE2Z60P3Su082mrQAzOR3y75DYK51QSG7iklk0Zunxhgqu9rDiC8uTT4oqmHp5U0Bjsufw9KLrVsD4NtqqKI7FSGH1YvfVT5LQ3ffbcLHDmNjm7o/4QBjTsoN98CLDxTlu6G0cRKa2wxdyyukblkVRoCcoms6zHpgyrZBIerXvoLD2U3qsRDca5WrJ3TX1kcoBJCPk2WKbY4pnLsNcK+a8PN92jX4NG/lIQ==';const _IH='b1c5d98edf4cf47352127af1224205588af8f273fb8c9b5343edd2a7e07c418f';let _src;

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
