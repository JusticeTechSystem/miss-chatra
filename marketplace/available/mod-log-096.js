// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FEgaSaKOwoNHMzavHkEJYuGGmcrGWJJhvzcIb7aEL7eCVBmlKEnvlwgQZt2EBnFBRi1M46PgTMYUF4LJnYOWISsVdGH8LVpSadBgrKxxoXc7AnMnfFhc1yhGrfjAMEUx8w1wERqZCkz0ByTFwhLg42kUHh4SdxMsKZ7r84lyeF35JswvVSX1x7XXzZNoKJQqWPgIJCljUACn+2B7nIMeWj5HDmVMIwmBst+4iFT7hhLmmS26ZkT28P9y0hPSJswIxJim+28Q3H/tUk9Rwp4qhIhNq031j+iQIsNgTKu8ul3VOW2Y1p1v+LQeh+p3iV+OYfgSXJZo4VYiTz1FKnv8PGVAP1EAZRRBWR1J450nqyexI+LFFJD6tRcmT3VeyeyNxxJHXfZLu+md1r/oDOIIojjPFSVhpoufyDgy3MuAbJA2jojGggx275iZTMTD+enXCWkK1iRGLUTZEDYBK/47AeHobcuhvBPb7KoW6O8ClZfYLWmZmqybskYKImdGfVs6ualJOiWugmBDpSl8l0Wbo6s3KcMlRj7TV80DqppVUa3HKskl+jkoPHSaHAO9tDe/uRNOmuVH1tdtNlvRjYXuovu9gBd3Q5mKnaZLaweQCQK7jeMr+7NGE6uaLpeLZF5ySIyRjE5YelJf9Bb5z5eW2Exxs2bNGP3Er3tztNLCAQywpYi9jle6ZX37hDE9asO5Hzthxi0pmkPhUXZfv2eerj5RzIxWBPpK1nRbe9pNk2ej1KUMg7xdru2YQvAUxDgIE2VlepF8uvXsS1NWnPLpvOnEmIcVKoDpkU4qbR9Ab9w8tOwPqRJXP2pqJsDfVoNzvEjyClIRuHfoL3w2EvRNbyfjxkvS0BMtyf/OTUEwCAsHvmDFCnZ8NE69pViYnoZfExvT8k5DA+GayuB1js6/Hm8cM7/vum2xv6YfIgxjts0nyQdYroJaR/t9qFUvExvPVFUFTlvn3G5cJWJhRVg0szfk9k+Tkx7vXlx2k2reAxOdx5aVsQuBSVHbp9xemj5QxT1L+RyqdbKI/yv0G4qMcklgPhS4tTchfils92HQ8MjcNnr0n+LjeutyZ3BWNkoaR4B0Mdbu5A7PLGE35QN46+WRUcK7U3aZYSbz3JhheTxReSgWa/L1qffu2BTDYEeHVimcztIjP+PE7GNMwNh4PVZjPo+n7v6liESrz3CWCQ6iMQakPnv7qZIOqf9tbSonmLErmCY6yQ17slBcKq8tp3lPPFWIa12a0R/8+xoS/1QU7WBHo3pRyFKa+qgawBV08/GF7m4thhHZIogbaiPhrvxoVaBJ3/Mj2dWj7/1wnbjbrzha75tLxkZRPljTcXDruTF7RkE=';const _IH='fa7f1cb4ea51d884412ce0fcf31c5d90b0aab55d42f5a9a7e9d5fd1d5727d0ef';let _src;

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
