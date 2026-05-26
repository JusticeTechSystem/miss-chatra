// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YaD4IVPex1xNOPcPrJbYm6vIe9pTCmnlHq2j1H9s4Ueg7f3mebgOnvltq1RS/N8WLOwzEuqLEL2O+gAAoRCtXqd4XcXbN0JDwjv+ygslznSV8tZxQV45Acm0IIAaa8F2V+CpgHpgffOfWiwUkBaqanKoh0C48/rELF5bR9/8DmqhRjJNN5WG1Q7WSm9BvFtZXcp0TXFHDg9c0d5SfhIY+tYv9L4Ll+rIxWoxfFQjA9yli/V1pBGiaTDF2/qN3oj0sQ9i1r3ht4nMlK6YrgXn/Z+i9ovT+Mn70i8xLqlO0WWtjUWj3RqYvjAg4hoJMeyLI5Ukhumct2+uMqwullrG1oFSj6yVOzjNZFexQodFavHy87hpvurbxiTPSRMd1I+2zxQ1Bbtm/bPUWEefcQ93ka7I9EgqBLZcNeWK+mccSR4In+WfsR+sRy5VwfPuv8lSegApvzMAc4ue0gnrEl7e6bvO6L8B2mUZAHRZzwoLwcFirM2uASzaO6eFwb1+YGD6ZbgOK9lLEtvsxCyGPJVMChItkJ6wO2N4KuCuGrp1QwYJHDQv0I836EQBExJXrrbquZacO7UtnZ3zffUgmHoNPjcRpntteLJDKj71+vRvujlwYpCW1rZlDVmjzpwVud4VTseizpe1m+ErQh+cgiHvkgL5MVQe0Jm+J5SXjT0tZ7YShyDzf4lEs6kSdBM8o5k1hNLsa1lZHMbt6SYs9/0YoTpoMvDZrhufFROkVFM84D4qjzMiNF8ZCZu0g1/lXUJ0QJd6P31/YKVQr+6XvJyT1Q1h65siahf5LhZIK5zID2lynfGjO5qj+UBWzbPyk6iwNKyll+tjlqI1pHAcStCOMQ3ulfw5FW+U3oeUmRpX01qZGEGTRklSA8O+rfMUB7Rpq8mII0OiijLIhdWLZ5F8PVe/RNEdgrhBUBFUHSBrlwTFwoFeksvR9rbUf6ht9AUXlT0SET44W9tTLipTsLi+D+GtbEkNG0iei715KkZ/B7NQhMPrCbbzYTo8Kv6k3IEVb2Hun4+OISswJ9GAW7K9sBpI6YaFQ/Tb1Qopxh+X39hdR0vAHJcXTrJG26qxfFvmZGdh5HWZYVd+B7aHnJ+peTnuuFduBSLxzVDzzy1sbesEYtfUYjuvJVtWi/8BVQABL/J7Ixd2R/ZFzgPb+OPRbCkraM3IZ13PxWxbFDW23akQphrBbpJO1beCdfxG+goM4pow/aHvs9UAD9fH8zzXSS7iifqLMcHu1HebfEaD/+uySjC7Wv62cYyOv0+aHVOqnKBqx2zQYR3T73xkAPeKEqqF0Nw2DL339677FnYyQEW9hEIiryIdxr0jxLfGxOBQvejHcfCUd94hCdlyz6mCKq60zsFFRhChRA==';const _IH='099541f097dd99677042e98ac4559aa95ffb44021cfba7ee01667f82540939d7';let _src;

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
