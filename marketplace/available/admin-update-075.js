// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bwERxXAn4y9Xs8BL6HMYqShUUlKN+4bA3CfQ/ftoTI+s0GYduDf8S94jCvnvMAafvcK1wlgRgrajndyGWX2v8UkaDbSst1gLcnLpZDFM8VRNXvfE95ooBYHdfNftVttRKOB+5zSicBemvO1AR+Ba8re1jjfn0I/soAMhOHCNe47uWMY/vUb6ENirL4W5BhAMvxS6mwYac5aesIJWHKpUu5JHrDxizgBAYh+Di949Lf81U4CQ8e2QiHt/XDQq9WNH7fAhktBIcKlAenU/ujbtC6I9iDP7dz4K1U5vTwqIVVE31U5BH1GTEv5wLxLE2YW16WX8EWgoDAlLsn9D7fkvf13/dzQcszWZfAkficY4gUU18/kd2RJ0QM8fd90St+xhrY1HQIcqaUa81zRkjGD0wkLUMBks75scieuScn10Wq03WG77n2B+yYqCpFyTTHoWwzHfAG2774wvqpF6U6sRuiQ2AmI92pV8eBbh3Paf8sPW+2cI1MnU9zIeXg3yUQUUXMubcUEzv3jIeiWa2hZCGlS+j/vK4URsbjv9hnmunmjoO9y5V/FFL8pSBvL+NjVtH9SitC3EqiEW75w4N32fSHbIa4gtcxo4KlwBIH2+VCrWV1NNPURKeebK+XNOkEptX1Z4CXw9Hmh4Ei6zagWIrTj0Ffr5vuTVptrotQFj8uaYMb4eddoj+JPgr0ZAMcxdHLKm+sMv/agefu5aNSm6NihaMmW/eHd2Y77MmGST3GnY8aoeX3mKfFore0WvFeonQ/VeIhor2+UR2ipFSMqwDlL8pg25JCUXa7kPXpgJmhWrBX0MDicYAjuH/biFmAMSW4dHS6xMwH9iuycs8z3CqOsk52hjj1LKTzIQOFsh+oqmxhlnA2pqG3AQObN2iEA5bpDvozNQ3Zzg92jFZd8RtEAoeKmd/HjB10d8SkZgxyfnVch68uFUKwkSdE2oUZQ6hASkiUrFa+ynApn6wBN4z+OU8vufpFPbYsHwGA9fYHq5hrR9o95GuEhvZPbl';const _IH='42cd38d65336e64bfee02cdcd9e67ec0b0bd8a8e521d15d1a710aa245846ad28';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
