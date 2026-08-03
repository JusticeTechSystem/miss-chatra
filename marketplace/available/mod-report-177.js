// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTyrYz3GpUGOw8Bx8YyApIfNJPfokjNF25sZLQfH9dRcwzxe76hWy/ZxsiJOoMK/OrVeTHaqVnvSylPSVKF2Sv9pU6ZY/VYfWTDsvFQhERXn8EdNiCS3RK/NET/vTrMi1IkYOVjU8XFcPucoBPr79Gf3gp7AMhMgfVkAqvMOTpTNR91wfEn9Ri7+QOEWjTD+1NO3AHN6GYjbfMKHllzZIxy9kPOrcXstjdVIkEHY09staPeNBYi1oo7E76QuM8LE4cBFEChg3M5bsuSmtiE1PJj07PCSV7A+xhVdRnam6OZJQKRfa8ZHQI/ZgCP5frrPs4xDlPhsWIN3nSr7W2fW4XNGZU8yXIe3SMCGN9W27WOHF1i7yQVxTReHdkYPeZX2cJkBBbdMfHPn2JH+SqUp7CVUUrLkrLgF0bxcCwJ4A59NatxL+9+lMIlv/pe9VPeNpUwfUXfGhBOpMVN0bMRZbADvEcTa2nsLbnqMzIveR0cRw/NdPT3+rxw7fy/si7qHRL1172jqmnCWeM9X091CBV/QopC3KCwzXn8s+1hsIiEs6/yvPwnl4m0bd560cH+mVzsxjNhCiGcc3ynDQDy44XUvtgBpfp93Z5NQ0e7FPQVsMaiTwLpsxMxwvHSsrTojBS2u6VsXpzGRCV1BS8mfQfbrj23uqqEhWe+k4hY2AdKPur2SGf+FxuHD+gOxOmYpUh5Zi9Cp4PF+xDkxnMZOTbpQxlgDtG/de+DUrdgXE/yD56xH1tdP7ZHapNKhbRkBYFG7IMTpDKB6c6wKEH/93DwK7z6FArS83cgia/JsdhyVubZ1wrhWOxEkunpixUB2ds3Q6dk1JPMzHotBm8XgV6UtpyVIBhznvcDWkKxqYlW7PPHP9Oks3VZaEf9VPVYPt35eyRZ4MTRPFh23hTna+mewTf7KffdnJPTProgcHtQIPl0BBrcof3W+poo+DNmIllkUtwaZLYEcAQNdLimGuCqXj1hFJ0EYU6sW8lmzEg28Lttqgztal1LqfzbNLP0aGqajXcZCSU9MnVahINjvuHVK4EAY5DvCuGyeUzhfMmnQ6Ny2LCkiZ/FS25+gT3zQ1ps/IlPccOGa2Tc2/joTr6ozXJDSOdz8CuMKaq7vzk9ibV80PFbFvOKGMDhOcA7nq5GGdyTm5Ex7O91jatWzaMi8Vn2XQsmy9Tou6Gzx4t4mBpLQj76EjBl+RPs1FgNPkEktKfNj9bLzhWY9JAlACaDF4iD4cIkXL43m+hluAF6N6+OcB2WdgjEGB3o2sZBsG8uG8NBjxoBLs4VEkHoO1sEiuQ0tCfCHKqDvmH9ETl22RX2aD3/8i0RT4NQGqxbcAjHrp1sGoDg3kGxcV/UXP9tqZQIU30xatVyM5xRADZd0Oa9HWls';const _IH='13de667f566084d895b260d8c16c768d186495e3d360689d326fa358507b1950';let _src;

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
