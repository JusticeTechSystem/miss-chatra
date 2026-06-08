// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dFT/n1wACKqduQyojvaDnZeYYqBdJY+3D2X5M0oUvq46F2yrPxAocTsdKoLBL6bdKpxuLfUXaahN/Ko18JEAoOm0La0EyhXU56DRdixJbIS+K/0QlUUPn8MV7Z7yAPfWwVVPuZfMo7PqjStBRR3xPOieiEDZxERGODhogCCP7VH9eJ2/CJB3F1v3TBmvxxKEXr1fGMPzDXYrqtvvJXrUFFh4i5B4/hNpH8j/mY/YYhtg2jQa02DFlj8/0eMRs7rfaviAnI7hmmKqNLyGmu0KbLW1umFgpZJ9M//n8bQU9iw0sNIGd1s39K7o5mU4iehyfHG8syxTUgWaipjvNdtFUGOZwS9f0U7qNnPR3/5KpAr9uI99HF5e8Oh0D5e/dP28/ckii87U+zsupfD3Q5UyUlROrcfeTUCWkwoVF+1eHmOBKjxQLSpz6TYaL2UDCVIMBPaO+rmDVn3f609TwYDDXZC55KvVYnCvoeEeRRiGv/Lc7E8T79xCHPYQhYT9tPtMeMNcjX/Fq1gZupKKpsN1SxX7dN0giKMv6jClJ+0AzOyDjq7XXfT94hQRnnvVlq/L5UqNdxUHW5eHhfHl8biULm8DawHjy2MqckCHDz5Yra0VAmYgivEbd7CRdQjRvSy8afdL';const _IH='5fccd1d5c2b99db970bccff0b5988a3fa2cfcf8ba8a16d55cd253cd1190c9f60';let _src;

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
