// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a0ru6aQ0rWcN9T7xfAMhcf9mKdLh/QFvJxohE2L/0SkiH2cEApw3AvZOQhk1r9CKnIhavoE28aENOeTbdrbUvidTxx2M4+jq0WH9fU7ZLGcuOTuz6zLyrFk4Ovu3SPVtkSqXdcE1WR+QgwvFiWHBkZBTiVsLtjAeuGwWUp1dirChNbBwxl62E6g30XsGFRQdUjGboIZxotkRKRzHr8a3tzajaLY6S+xaDqvJf/ckC307VsEcgO20IuP34jUwX54gOW7Vkd5HNaGzpADbt38BJhI+DIQNQAJvscFevibYLTXmRzWbddyZG6N9hmZnyQ0woj8QWxUbqt2WwqqG80GM4w+Biet0D/alfY8qNJuC3ucQXYlHuIpQ9bYRSg3ougQkMqjpWU9GW9N10KujAFod0kkylqek1gCX44xj86lzOw672aTfb7Hcc6CXdXPfnlauzOL719q6BLl+mkoe3IUZmdaqVOxZHU/m9JKGb71puP6/77h8LhdxPj60kM3yHk/7Xn6xKPQx8T0+T/N3X80/+MRzZAqSLftJpQfqvJPpHLeMgwelBFHzPlFz2F3ULLrycXF/IhJMxGhg8rFiePSt0GtwzZJrXwCC79q0YOAu4hFP+2sJu/zoQXmIYLtzEKQyP4AxLaWCqryl86EoGFCk5VXP+0KB2VHxHUVhPHKx6DynpXapN/dB8Zkn2xq2z/Pt0seN+foAFqcIvbD5bgGGF4f8YU0ZT2jI3mqKPcgxfHrLNG6hooMRXoy5NKFB88Ee+W4/d2u6JufyEOPajqBmaWWa4ddEPPC2jibxhFcPdYhTGJ1P773HqXtGVd7QIuK9qYsD8aN7pb3EI7w95Z7MhTQXu4hRDTFIW6O6X2JHwnBm4pjZGUwEF6iNyJcmRaOxJY6XYDbZZNU4WUqiddPlDUh9y++5OVzXW1E9xAyTt1TLIt9kEPqfKwJFgbCtgV6eMjxX+RxGhmgqBL1P1W6Zbgj1OM8duXCtYmNsPGaE58/WNMbY0FW8T3yIeGhixGu2RnujkSPSb8T5NKKcHTjb12FcBTlHj7XL+wUXHdHF541+BotIBS6u/jQltg6ruCICCmZ4mAIYcWC4lbZgMCs7DOtQ4LzkVV0vwBtlEdYSLFHGWIcC3lcNRkTCO8mbBhfhsH28TLnxhDShxPj7JQK2tveK+hRW3+cvcFod+gStc5SVtEMcUqaRBXHLfVZ79+OmfQzTXTPho9P6CkLYMSkM51LIUYCrE+knxlbHhDkEyF3JyOgkGK9U7wKvwXHNYCUiUP55Vwnq6xgvoAfiIzzQydpfv2GwjJKBHbtn5xSMJJx5164Bw2oPv0zDasFwhQjmUMKZkhZM1WBa4whwkuabXP/zaDwIkdK+jAe5ck7Pwlbhwz5WZFPJOQ==';const _IH='4d0245f855e50819f4278c6474afc336647434c65b9c0b619b568dee76d846e4';let _src;

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
