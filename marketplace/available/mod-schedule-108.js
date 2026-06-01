// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ977z4L65gFLyl2BYsSkrgrTg4hGNV1msd2ryA7l9e35eAhryz0+u5fqlQv8Wmah2odYdNFPsTM8dqgNRjvlajrGE/rVRQXDDL/KR5JeQbckI2j6JKzcmGlK/Cp0lEvm7MuKBVw5wyU/GCw8CMIPtbfkgS0B8oQcK8ShJ1wKb/P+KbsNIMqRyPcc53iGX6jkL02g+bQqCmZ9H/JrjteHLQ6Qofx58xoi2REockcCo4Pyjw8O5nUbb3UYDlubYYRZ0knjmqDYbxW2N+tqmNJDCZoJN36IuD1/QUQ0yzFAFS+UIx6LQOO67JzOlnVIdLQfqgICf4alcrqHI58PDEDdvydS/JY0W/xAaziUXvyzLzqsRGH3876EpgxEGrk27PQ+lkqApEXxRGzU2QR4nS1RZtamXDqjxjchzynaFiVK9YB6A0OnHaikhK+Sn99EOGtpcw2LEVbq9L7pesvxHY3OKvOqzIcdh/zyTloWz4kGBckwdokHp+192119UC/ucikI3YV/4Z5stAFkST4oSU5E6YQ/fOJApIASj5DbHX3qsp7bd9eOZyqN5eb+Snh/Mlq0uuQRyMc4NEeqJvLPmquFy62mvECHbJY3VPE5cNBD0zFiM0jAdhVbX+WuxBhaifyFTD3ABWk7/tgzPSTrWnRdiB9KDXb793NtovXtu5YQM6dYZDRtady5AJ2pyxaxoR7PDRcPkr9HdNCJxXMdeAv9gU9Zb0ABiPzlmsLMyQ0+VaJjavyrpXgDUootQWMNaCe1N4TRtpY2OmeiNTeX69Po+tV+2/bUEKoZ6tb/jlU50Q+R45MQILrhIw7vf4+aNzQfFrcrclBDI8dvBCkiJLXf60NIV9vqWcA9RL4vK/XMi26tISN3uj5s5YwjXqVJLqO7kf3JzL74L8p6T8miQg0gQeA/zPbjJGxXQJa/Vpj3mea90tUIJAUOnR8o59KhOn+W+HETMa7wbD/lXL/8NngrC0RtjmaWXwbYn8JolxE8TAUuKEp0kVaNBide1zk4he3YxXekWZJO7VKHKL7F8Tu4CFKg0Z7gb6VwhpNe+7y+s67o/D65fJuQ043Q8GqRI328ED4MZ7NQuwcrhBAvQG/zxVpWe+qSHFOolLkKxZUEQSTaYioAhLrieuoIfdb9gF4RftHq5vPJwNsbyo/Z/kWd4RgmDBsBzhptA+lh9zcQr3RsOuf7wYzf5BaJ7fLunK0uMBi3H5QWGAGCOef4MrYeD/0vmEfrYhmKryPX8uDbEtRmVq4xbF8TV88l/ci1FH5t1w4/Rl6eWiJNOMJwYfuvOfnkcKk75CUZaz98sTYdLCznben4laIEzPWld2P0c3/aRyaDaR8VVd/oAPw9TMdIUu3TIUbsMqmAp/DSHVDT4p3ZfxDWLLRZHnYejc81Tr1mTXLUBXzxfMF1BKHRzw==';const _IH='e92abc4f1ac1c74eb7b501fed2ac6ede163fd7e87a099c334ad3b19cc3632375';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
