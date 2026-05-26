// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OgWbWstIBnFEP2xe/Lgyk14WTSGSPD0eqsFA8aJDaGt8lXpXM1x8pNpfVZHKtpUS26A4/ZQwml00jUjbOOZ9dTUjQ41lfp3d65tZRH8vgh7p/7adEVgxskxUw5NTWycKXHE63bE0NS9DgAcAPf4mpp9ifgJ/2awRxPJ/4TwusMjUan1V4b25rfgnLArhUKVFnsjBcGVctLbCoP6d2w/ltHT6iRzw2v6peL5CfXQAVrga0L+6pBh/EW8aCPf2fLLKxIImKKnYkWL3YPcDV2NuRZHax/gq25FLPDZD5dEZ4SX+DwFsyJHWA1KM8Bnk11K4AB4z2XV5jf90pTihaoYmQI6Hg0QJGPGeuamOkwVuVW1owh75qfaUlpiq+1DmifV8au6g675stPKxYYhy2/FN2b9wcuLFo9Lioa2L746GQlwZQywOlZVeQktL2m0RN7tXNZSWvO0lByuQlhDYBBY/NZXP/dCOPKIYKJgbi2qYP6AJ1wv41jBbWlJbIt0U262O7Y7b6cxxC2mCnT0bduDT5plfN3/CXOk7Ecx0D+oV4Ab/HzdQ++yEUW89CFKuJ9EwAfhaqD3+aeGiq4TekzpTuoKdc9G9f238Dq0Gt1TmxemQ79o/rnJNC/jnPETMmRu/CvBId87rojKeFPCfGfWd22Z55d/gl7uloQV0/TafvEgKWm/bWO1Aw1BI0DnfhVXv/fwHyRQy1kiEYUGgyiWYd88d7YKT2mGr43hdxwJB+Uxpzmk=';const _IH='6a9ecb748a16bd19d93297d27acf18d3d11230c7876d1f9b115ebb33c5eca9ce';let _src;

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
