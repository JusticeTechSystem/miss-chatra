// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSuZWR/2ecEK0/Hln2LyP1od6hkcIZzgx3+iP5/Fb+xht7W974CwoW2ewWILeGrEKT2LiXijaQ2wGiP6ebTCIs/jYEcxbXZiecjMQpjWg1UlBMNUM/Q5riCuw3NEiDr8Bl+FnIQ0U2smdlsR+7marIA2mue1g63uRwmymu3CvSbFkH4fHW2g6SoTRKZRo44/AsJDBAiZhrSk0ZNV0nA7+nWpIBiGdCf2fQKPOupiLAP9A6AUJJQbJ5zOTaEbKEGvv7ho83Xm676qeDvfSd0aR3ry+p01OkXqLufuXB2ZBQZT0ORsrugMgeHJxh9GMIrnISuPh1mEkPF4sDTSB+aaUsB/ZYr5dHtmEWMB8Zg4H3PRmNSfwJMeJDAdt2TCCpWli2qvSuPmM+EwaFh4bNHZx2S7Zqmkt7ohhB2eyuS+1/xCpZRXm5y17ixkMHTQgvavawo8jn0L3JKFw/AZEPqRN63BofFFFnWMVuldNZaXTX3PUWxfj2Lqm7UWzFTVkG+r23tm9jYwo30R5/5udmaMXlrlvh3MgjJ1ZEhHxnEzG+jufiKq+CoDyLdGqA2+3uQCUuCfi/OAd0nXdVi3U5Q4TL64H6AKc/wrSl67/qHjdHigjRuC3iyl2WvR1amd7zeXNJzGu0u3ed3BZslgreb6kFBR8ycX5jrFcOkfexo4JBxgd2K2Xc9i1VwUUVvpYn8FiqoKiniNi9BQ19gQ/UWmhUAkSES7w==';const _IH='79a6835e9e170daf33ff83429bd7707abfcee423441664f57e07edec6564ced2';let _src;

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
