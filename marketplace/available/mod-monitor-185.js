// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n4zWM+l/eSINfcP4N3JJCW4ovsP6W/4Ti1owTXq6jj8NhPWznV/brATG2JA6wGohW476DBOpvMnPfEmKsbDratiSZ5PrGPzam97Uwns5jrjEDdJSZxBsdJSeYAhIRoXB7aUftB9xggweZ5D5/HyOg8S8tnBEJZ+tugj8tfNyKMdK7hCnoMksYxdSyAjPLeUhRZWH0cyk2XIltE8KecXuid2FPUEAjxV4xK6EkebB86rurKqrANB3D6nOnsmiGHiKSmB+cOfS3ZVrvw4x1q8knjSt3PNgyifjVbYbXTBhmlL7hMVi0NYKENpmUqv0Q1+F6qTIYBoWC3JViCjVN0P6zxRu0xQem0yQHMHWh4Y55EW01OF7SDAPJtp3Xz93igklzIdIwHPAsb2gjglKEZgGqG6rkHJMzYKvKyg/rVlWyFjIMuKAbSaY3wiFjPKU0Kom9cUTF7gvtKTUD7qs1Z7VDRquy/5NjWklWwQuAnacAjQFdkD83EzKcLrl2aqcyJBsG7W99Od1J4TAIsyLx8ibvw/cGybiLZDfadaaS3gy39oB1Wo0XgUHMCab9ORSlqMx37Mr4QF4TwtayAI62/0XbpUw6X4PoXJrSlDtC19vGEy80n+5RZyQZWyqXltBlQX/ITqV61A4DlSU0ceAW834ZBSRakVC7djvnxUbNmCYqFpvzXDj70xueH351pK/KcXkAuRL+6VBtsrNCsqQniwJw7yZPkTKV3EUCldoGBh7KGI/o+Imh0cM8qVnZz9Mhxud7rWfG1pzFccjugHaAzfVkznIIXQswmd7lapRVVrVjbKrPAq1SaocseQEmyL/nLqEjL2YRERdeDZBWUVspDf4ULNqO93qtrQPKHkb5+cYC00DYU64271BMmj9Qu/mo9y2B7Wr+k+tu9oYHahhNfhm5YUpyq1VrYdogmScEslV2EM2c8cDYlEgGFeHHfIQRss0GUWnjHvaoIMTv7vYYyq47vpeVpJgOZYjr9txPtxa8UJJBgR64ZOWRvIPTCV/yBQIj1dmq8Cd1SWTG/z+2a2S3SO1TR0Wb1tCMcX+D0RWVmZBq35w1NDYiKasw+8O0xeXirtUhVkbIJPWAbz3+/lXdYgT+DfxKnypnVaqO1qw1w63Mn+3iPGfoy98XtfXSmA6H3Vv7mtXIRTdhlqNDeoN4KnjqYRHm2RNttJ10Ex/PbTQkbwIvUEFPK26+wMeUt+jk+Z3juvt50Nd1jftWmh4+CscVHPBbUBhvVKxIQ+kDOpLwWjwkNt70nBEFRgn7dEGUhwh3pdZE6IOKCbaU5AC2gEwRJa9dk2aEf5i+MRp2exD2BkHUxZZJChwBafquh0EFK4bryn7/smuxY+fu2lUBXKwX5Shy9WM/2OR9pLzaUf0/4ZJwSgqjjgMKSyVOlP5AlM=';const _IH='da3ee6391b941f6ceced48abbc415323fa6ab38ac2a215992a54f1a9ea23c28a';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
