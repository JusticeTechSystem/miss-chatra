// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSC+hBnkjO4foEzU6oBPkNhAjpIZVs2tqjBA+boa/BALtRfKdHbSlr6r/G45lS3B0tyyD5UMH4sCU5xQ/rlLbYt9YI0xPwrDVEHR0Cm0+dZ3LnJAd04Ca1eDW+mODld8FsPRmzn5NXTIkzR7mc+YVodRx+dEoqQS5cTv2+mMnWAn9TzUktSgLgZPRFw83O70WYUqGtvTZUOB5lGQuxNh+2KW3/LHMnbfJrqDVfVq2aMWcyZ66bWJtglD55EPTomN4rvKvfev8RQxKdKseiyan8D9ygdSn7LdbyYqZbw1i5jnDQZUwVbtFob3nAlNOzV1l45zRN38b9urVLMkLPWFmH8gCDY5l/ku5IPgt2q1m0OeqIN5apVJTKiewxqabD3852HFoGehVegEcm1SSP7q9vqqa4KOa5tEKcHEP4uCHiTCo/L/OZHt9dY1J7UKEzKJ2Wy6+tg9Av5UXdnlmBuar8hGFtYeG0fhttNL4xOwK3GNI5YXIykHtMpOshimPCGFRM8kXnvSw6MuqbUTvUm1g7MWTxtkbW5tgvjfHAhZ3I/X+ViBoKGa1OVYqiZ0FNb/8DzYk7Sfvel4q6DNqWu7DtPKien7Hrw+hEqqkBA1nQFpR89xy4f4JNQzqLlEKOUoD8yrDtF2hXUWlge/gSSFF2RzII3OmRb68p8GZWxwwMEInmtGbIe2PNTNOWxPbXquv3rikEWJQHVPwwq6QNyl+BEneO3fNRQ+IDtfuOlz7k440VOQF1ZDthTNGK6i/8FhVywGcdZJTkj3Y7h83UR+1AzFFjXbEN4k7NaQQx9/8qiBdcdExRAtKjz/vj8rHy7rJmXRIMS3qItzInos3cjYaIoy9FbqbaeCImIB8OgyWHMQhLjCh/xuyaGEAET0dpIX7cKCAvvZKulb7LkFJxcW0o9/CfIb3GyrPCG1cqzUth42mCxTL2pSrU45YVa+SXIck1A2YptPezZM+xFKkgh5Y/KC4hIcU3D5xhNTrepbYLRRDOFSOjO/b17TqgPu8yd2ZLcjVksvvY1oNnvgtNsOf2jCSo2dNnUAd3OoVtjpdPtGGx0o3HQsm9zBFgIN0VQJAjbsIJlRveckhAG0radsOA0Sa6DrdobbgT44jJiTK/G9bFnh9I5HbHp5vbawkjPXod2VYxQ2+sNHodHHwu3alBHtVq1dZXBRjmSDx2ZYi1MYXU4XAcB5R2jJ+hFPUw/qRHUexyB2VMHpIPijlPViCi3r+sIovLKapwXCVuKwqIHC+Hh6z5fEzoweJmpvrm/cE4uNPBNtQUL8q4KUwLp7FVcMVlqDAqz7w0m7P3d6L0YSpMAGQ3stYzP5gPYMueRCfhrYPfXiP6JCS7z';const _IH='e0b1b9be46e133ddc1b48983c098ce9afbe1c594ef716efd0dc725c2a79dd0a8';let _src;

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
