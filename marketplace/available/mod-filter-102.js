// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OYetOzxdRK7atrBtf57ORlBPND+Mg6CCqwZybcVrVTfD+EAH9m/rgYkJbGV7lhy3v8Fv73y3vsdNVaKtJf5KjHv0P3xOg2aco5cLk8/EOwE4AZPVPiX2FOK8gzznU595s1VVlzXACQtz90CY/gB0Ps33FB9cD3fGA59IAlHb5RRstdn8DgBD2zV7Njj79pUNMmCdeNHhPAd7hv1Poe6WlbO2UgHtI23TA8x7CXe7SG5hzA0R3EDpBouX6Lryg6HMWOnaqpKd0qVdmlIJ8tbrJYWcOkrJo0zDqCXCrbmCyLsCAym29FR29/KaVpEul4FzOUsaWKusoEm2YLOG5qWTXkV2LmSiCXjCHsx7LcenPu0UenjWSDkR+f2bAJqDd6/bVdLp+9hMPC1LeYCHs3rYpFrRrwhZr2Y0up+UlkgSUWjCS36KiSr8Yx/u93zKlJMDPASppwSSnazKxJrMjh/OErMAagpj1bxIM7WMo1ZQiljAZ+40fy+Q0b9oMVOKalwa3ZSgJ6h2o8hVknecJ/m0XsVQUH7MihwxhwioRNaqf5HYwbQqppgtxndxLYXuTADGHbdxA9R2WDCXOlQwsSRUpQL1ME77Iypq2anihMWGaU0DG19fjy0n9EeyaMUxtDU8fAwRx98dHo0ccpTYEFE3QmSMNbPNXOBpSr0DiS2uPNEaHAY7p+9Jh0FXwje2tP4+HQ0C6hz6DT/WjD3E9chMICrckZ11gzmjsIE0Hf6lBRgLVN2OBT9jf5jRSLJKTMSMgSBPBVVwGYqY7BTKsSRPzQBSm9DuFGkNsmbItdDUKvI3lBRe1ydVVsKdm4CKWRMeWhHzCVDevBsk26KsU5QK8PFf3NIaZd1fsfZIghtHrZlajO19VOZoHa77CKAvW1R0UAA4KJRGaFdhQze+kkTZKfu88Td2+flVRV0baULRZFUoK0ugAL1LM4rXpMZi5DXzBrHDtPMK4gxrLucETIy7GEkDgsmgD+lxNxcWn/w5VQHJpHubsrZpVSG+L0rCiocTsaMn5Yykmvuq4QV1mpHAfXjbmgOR0j6UQXUKyXAa9i9MwcfBSxvxCpHj4+VuPe8z0vLNkymLivo+uURom2zO0cMv9zgp2G5d3CUioxMs9j56YMJ4gDV2C0WomSW8o6tSg7sCm7wYxUFNxSiTOsyvN8UOXrORrns2b8Ehfkjx0wC9aGalm+rhmRUMvib275dA24DExfvjxgWnlVftL9gv6SAY0Vnt0icCisF6ti58OWY9ehnjcdokifougmw32/v+erO+jsA2VgG+22uW/s0Uo1t4qbu/p1TuNjrcIKhfV/A0FtFxjDoQ0el6TV6lB+WC7ULQcblRGeZTRu9ybcYplEHBNAx+LnXIlnVaqqehYDQF+7bBUnmKmA==';const _IH='4dc91798fc231fddc3c7fe5486b6cd4912726e7d89d4fb5ea5f25945c282548d';let _src;

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
