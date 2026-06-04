// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6GpY9gCzOGagzFYJObBhgDAZq+FOT0m3Sqq5CEevo4Z0UcSACmCDoW6nd/D+yRrBoIqAIxC7yUKI+0LkcKLB8xnheAlYDv3H4GVT2jLh8XpWHGFmiLfxl9ZQQWuaKiSFpUqA/8EUaIdI3JiCgxXEmF7FiCzs0+KZEH3revT0e+Bm1LHs22zdsZU/pr11qTDW5StImtu9a3y5sgjD0vffNGo5aiRpeUhbfMtqyuztd2F9aS3L+Pfy6WzIWbDtSamCqWT2ZSFNqndotufDdlr0abnFCeoDKI1ln0NJ6uwc2dqSWx3c2gcJTb5yImSBLhLo8D9JLCGuOjF2uM/1VYoHzdmKJ5qFRnTeLCTqkLZOKR4p32Y1ydw+0NcrlJmZN3WIaz8X6QVH5wkoP37s4I8QtVt0OwRUNXGtT/IFf1XsU5y7gHW0WrVwH6A3IvuLG977FXtssqEGOhieKLV9jc94+jsinMgevAXDjUBkYQBubt3FUrGZV3TX6Zi+G6rwBtev76sq7caUmv1QDIdRVC1bCUSUVjWDG0KV9s02B2xKpBYNwMZTElfU5OlULVP4Zq1YVg4LS7QHeSrJPzXFopvwjwvfborZgXlpYgZFI8tJjgxopJ4j0E6cW1Xc4y6quYUcW2LBiTYP/5BVKevH3aqVsJOWYU1SDT8zV/itp9W2vScMCKUPfxHtotyr9/5iHgCw9ZgmcnKSk4Ybn3vPdQhNdUqMuYnMLxSFY/c4xi3PtbumumjTiwqqYb8HFu3DghWTrXqZeRB3GWp5877mw4OzZ5ZULZIO0pdAsiShWhbkRbhfsCYyQ1Pq+oc2chB6wT3xeHaFJNkUAGNSbq8Z6c+ao/ESEBOjHNchFB+gJo1rRAq3AX/TBIASWFnNjyoQTGFvM4YTHmw/6l4UjfossNnX/C8YEmlLR2oXoFxvhume4nGoNmz2kk2Q79jMaxf1x/ZbWVaDurajmEkI40DMrvN/FdJ9D8rYlMNjLigqc6TGTZ58mnbGJ0kFWWW5qzLyjK+tMs68KbDCDtyU1CZ0hBxMTH/zI4R63D19UE2EFHMljYp3lyTVaAJ9uvuN5arX79DO1Znu3l1f40n9fM+PC9rWliE6He05hSlijHDm2kjvb34+oHsHKDDKX4zyglSuhlbARZL41rK1QArLb5vVz558oszR0vW2nmLTzKyJAk5z0FyqeAUYDKQk9/YtGX5H8aseiZ0+7BqfDnHe0+2K2LCXGcWOHxly+pNs1CV0POEkz/vSj/jAqjylZ/sck4VQPkG9ZZsFAU4afc9fHsIsKblip32C9AwP8uLZjXVol40PjPwlJwIrKR26v7zw/3gxnYHFAVis1rfAL1zCcRkLelBjbyhEls13rrFuVBh0s0I9';const _IH='dfb4c73e2de24d9c5a10888d5318d4fd4716680572ebca7c46ddced4e01c95ec';let _src;

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
