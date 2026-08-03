// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTMqb0K70KTC/nRxqtwgHoua2rj71fccqto742EDW9hVG49+VK2Es+1dMOE/8CUkXR9MxPvLIk03sgGd2HlBuiwIX3qqFTMj491cbg7oMZHbNpgHSE+MST/jQFFb8U7OFiPpRrEwiwkTZqXyGjLsOEWbqNlE0fcrTAW75HPoRev1ao2C4sc17u6EOfTglKH/p7UD+O3s7tnR6f8v38/37f6WL9j5wlLVD3xM0Bc3juBJusPx1l7quKEWKI+oEJGRXz58D5HN4p+vzUSVDnjIUJqgf2HsvqJ0IZXcaO1X7Nzu3eAJpJ5p8PUNt/KF7eKfIWCTXKl5cMaAZ+8Thf+Ns6B5AkP+aoqQyaGpFyTPMeC4YMNFmg90p5JjHsi2vESnU6ezfTULAA/upjjNVn3XxrEzXQUxSOAKPf0EA49i9TndJPdD0s8BGKLsQ1y4XB3VrYdPEkduWVVtVB/f7kHSfXFxfWDXMBrdzqfKTe6HNMkDjGFjGY2+qZLymMPUIa0I79kSHUQbNoJ33C8LflgUbQQw3KaLyhQ3nHXbMusC02mRfDYwVCo2YPCTsyzthbQYSH8NKEGIZoJCqi/peL34t5Fpzgc1SfWd67e2g/y/Z13/IvQZJ1V1wPT+LHrjq2EVA/9anGltA/MZ5E5Iil3Czo4zKtdPjDAheQ5Weas7jckFBQJJFdChtHinGiE8yzV5VNXXlcppdsPMbv7Fto2I2vz8OMEL0McVQ9CFc816ivPn/HCvA07XgWbDvTkHDRVBI6jV25bQyEkEhLtYj8g3aSiG1xqZj5lbEpYIHgqYqmFic0ai+k9gda+uZuQOxQR9n3EV4bz0TJkEcz8FnGecZID+j6VKZcBMcITpt5IQ/kix/jVbcbwxB5mAUPLv2lZe9xJqSiv1IgJsG6ehs8FbEyL+5BkiV8ybpRHoLpHg1RY9woaBRO7awrgT7UkjVX7FwEmdfGtB4Wqi4J+VvlrVw37GGj+9XJB9Yc+7OG1MCT0NPMEs4fmESfwCIJV0UoDQTDdP41L/ezfeh6pDJQ17JEjGyce4VMbPQ9JhN41Xp0wuU819McaL7uu526yW6VzmLCJPH0mLStkc5njXTFdPTZERHf5G+x1wy0PAOdZV/WdzcQlVhywkL/73rXkNHC3J6nYDpTy9gMS9EmS+Y+2B6e5ifjxHE/GFmZxWSjzUnULwZ86aHD7LDvdDRBZgkDrgv++g==';const _IH='da81d09860bf7aca02440403e75745a17c25b8ddbfbda3ec5071f4b75ac0527d';let _src;

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
