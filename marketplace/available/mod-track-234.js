// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EkAa75RQZBupC98RM1rgBUmCWhlBwLjmYWoPe4xzJUf1zGtiBiBmUFgEgH4L2IgqiWa1b6Fvu1Adf5oCkLmPPODAmOzlHZ/hQ5x6S3/hmUAekdGV6wDJgwjLbDlJTdmg3OklelnC65rRaLGqB3x8Vtt4orBybWUD1XZLn7NunA9cZiC/lybrbK3b5wUe8sQy9zi6FQ77SnfnjiH2cQBq6JJEIu+gYOIP7AmEFij0w1/eo5Ugre1m/0Ih3VmECHTrQY6khyteeedZfQnGXSB98B2yf6j1LMM0Sts+IJQB15eXpOP2ITMCZBT1ehTkMHarfJI1Lqw+7EGZjc+iv0F/7jGThqeRJVGsq5/WEffIWYPYOFweLwHgDjpATPXiT1rHIWVRWafXXCvdRjaUJrgHUUaqE8EXw6ZhMDF+9tg1ITEIseBvOLijd5AKCwvmXaQtr1ZQvbIierei6IMjDL2s0Ds7wqQ3GQ17gYgupQC4MnOqmpqYE/vh6QVn8Gz+PyeSgaqh7Y7ezWaWEr/+dF/CIwfjU2LuvTAz2iQ5b/a45EWUW+EThhaiarZkf6PDQaONYtvGBcr2xLDibL/YWlxf/W36ErsU7utGjX8DPzH0U1LBRso2HAhYT+75hG2F6w0xDgDumF1sWK3OPX7xz3RVLrQibYUu9WoriVZK86oehD+qrW6ssC84xjPQnjQhX5upm8XAw8vD61b99y6F9imCV3bL2eESyHZblOK6jYGDXrstS9LSgInQ6cZjMbPnoBq0fuS2/vGMtvLGVakqNyOGAOmM+V9GUbdwHCYuFAb530nApU7xKz9Jb+uAll+BMOd1cixD9VI0CPZ4IkHlEdPLwNfJWYU0QKQCcaSr6wyw19WH/FWFY14KYSd30oXtw0OUKHikWuZS8Th2W6iPUi6Lj5RAGBHTycdQzpXskhCqps+TabEFUgw4uwW/dz8MZvmfivejm2xa+LwG7C3LV3VRdlgqfSHHEOjLdDDQPSsqLArWBLfoFf0gmLTgZNrXwgmfPxtcZRmrWFYxwF2mzcg3GGbWO67W1TDcjGWvHxGpNocKL5x513IGP7eWm8TtMvTR53kJX4ybPaPmBB2UbgGnVXCqh6r8/HG3rvaGA1Kgtc6y/MsF/PG+jyEzE6jDJMjq/csAAz1PKLLfdGPDTzkz+8lpRQlByinVFbC6VNidkaDGr4aA6B26foge37IMk+87mzInzXvIYejoR5BVkQxw2MLSeSPv3hEVPmKhqMfFcM9YCBaC4SEdfyPJpoc+OZsrRVWumDXL2iw7AucWP45LtoXBR4t3JshA+YkhgX0KIb2x50A7kdW0NFkZhJ1s1A2Eokhx+wS23mBNsNBALGnZVWav88gaLs2v8VrDf1xK';const _IH='951b63115c80138317cee657dee64510f7b8b6e4a94965c223684ca0963659a7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
