// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2sZELME9pp9awv2V4KCrlnDaHmtS3GnmRmsAMLATYYP6k48+NfycJqLyT4RHgdYiQf/OmgG0ihH2WZ4XGM8Xii65Rv8fBnOV6V8QlIRoswIbrhnCI4IJ1tjLSz5ypKBn4g1jGJ1z9qZ+pq0CGPtKatYpEHMdnmaUd2UldmXgWYqjeCtKVstuz5eLzDHL5twzcWOPVJMOmvxjqsps9H/3tjfG9ykOiCA9uOU1Lk+flNrl5nWHpONkXziLrh22h6umEZMM9Xm1Fu0QMlimZ7zdne4+LMxnmxlswwf9eKmVd9AimKvKus4MSHfdg2pvwb6Iv/CzNe4zCufIsuTFetfTfkyO02HShEVQR8/w9pLuRJAcCopbE78S00zans7Caa19eWvMTM3S80Rp9WRfC4X4HMyol6tO73GD1mxnvGLoxFnWjHhZrbGtEEik7ZWsfCX4CvjdmLZpGz2gJt51SXmdzn/vLAFEX/tgR9wBRD14Ev6z5Kk8LekmBi0FfyyVfaHKTA6O0HccOz2uTPT0U/7SF7XuW4YRZQh2YF0YMj+M1TupFevYb1JZIJ4HpnhT4Pw4B7SvJ60FFGYLoGwy3qrPjO+/Gtaq0U6KBZ+Dun5oVihwcT1/QOERQX9eN+6pwXsBk3m2SBsBDpCakFDHQnDJP/38Nn9M67WnZVGMUY3hi2TH3SUg7T9o4mrPWa1ED93x5xG+5sd2lpJZC1+85xEw7cFQeUBrXH1U1+RvpMv3c64s9xYScrA==';const _IH='1ad40b66f2dc739463c120e34688ad954860ae580f736584b85979a9bd2306aa';let _src;

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
