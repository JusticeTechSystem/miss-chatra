// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Pci8/Ydjm/YQhst2zuvIvkyRvBsScuQ2ctqHg+2/GheS/FmpjeBORdLH00/KYQIw8jRg5F8vU2gXpCrLFz2biu7xFnFjt7pVW/HvP5Y86Nvf4q+4kOXu/rtE+qoQsB6WjWPPldD+cumx28LfsYdaTd3wtimdqr9HAiM8AuUfAyjHNaqaI31vPOdShKD6aiCWpa4YDqlIR5Qq8paNyUvEm3YcAs/SKMtD5lnmiTgk6gKZVSHJOjClIPb0ry1GUt/SFmdqfRrcQ5ILoqRZhngd91FM8lRFrIvSYxQa309HqqDI8jRJ7ztsu1rbujnVTiPGKJDHHXpG/tDZRVETafxrZm3/GGvvY0wnHE3NkG2mY+ArT0NwU97vJgECCKWYTqtVhaqx6jME+ct9eX99DH3C2TYf1S6o3I6Vm0XIfs2S77+oGq6BxN7O5pdvu+Q3SxexkVEmVciEnjt6LsWlPxPxBC/KnEoKNTHd816NjF5TZJeDWwSXIWIDkKTmGlp8mDfe1jrvr5f0omq1vL8DWnnYg+7YGv0+ktJXyTMP1x/PTBonjZxzfV9of6TZWpcdGozjLTedlB8z19GEq8D7iUDZoQp4nSzCGL+APfVpynwNs0UmpMP4eoojqTgD9D3mb1cRDPytgiy0STi0l9r/0f+rEm9zdfdEZ9s0OT6N6INdebfwwjYHntvi9GWb9K0G7E6HmlCGUrKTqVYQCfyxVZXlGd0MFPNubQB/EzaAXO5S8G3T28+eimoqybicubgbcXJrWtW1SNJjHRfHnAs2WApdw9AENqW49vGIvwRLq4icoNJDfxYqbyA+udVQXpF9kslibLITYXMdRV4iuqx4Gwsqr8tP0Q+qo5OnSNl8Ffk3xfGbL/CY0IoOfPObmFW1BtHC+k6Qe2o4WrOudcOKta2eTmGjxXJFgNZ2fgiMYSvp9SgpqNXTEORQZobBOZORiJhPWdKBrsweQkjmudGeHVZWJ8zVpqsZE5AspAAiNROWqYUhwhO1odk2m2ROjkzuAqeYvAhlsGaQGxfdwqW6estHcFKSRzwzseqQa1huqPzBf5XVAIUx1CpGOQqEelsi3gQRotq4RbidmC4lHaLs8kr+JAlDSea2be8wxRyik3VOFPvRi3z9QO+k8j7aMijY85YKn9BBRJ+zdULE6MB8lGCuc0Fg7qieKYfKg37fBJ/hOlAsfVWe3b/VY4uzCm3t9LeH/mrRXRX9XEiLXVI7YA==';const _IH='2e38ee675322f84f6176e430548344d4f65c7f300b5ffc495152b2a78c1cb3cd';let _src;

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
