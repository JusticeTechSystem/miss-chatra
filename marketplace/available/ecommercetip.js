// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ohZdIc3pHwLi4lR8cVtxuuffQs6M9imRELYEOd5+pe08RtzpWz64Zp9apdS9eFOonXY4SOU0KlGF4xaMNUzmu7rw7aQVN9s4j5e5g7tjMwrLAOuVttyF+wW9rQNn+s/3rHCv4MSRExp/A21YrU4ZkZftSifcM46/ybQnVnDSSOye7jQuXbVuHICRz9FStvoex/V2jTDS+kfCY+B2rfPcFV0z/jqbJQ5077IxA48okuUNXcH73Qa6ykRGrqE8mZQTlABVkhYuG/JNLcrFmWsPhEJx+bwBKRABWBH5nNUrD/aXHtC5Nhl/yvBiFvNAlQqQz8Z0oXIPPHKz5YROcu2XkmSEvIzGupf6sjLS4H1bGMsrLIusb12LzWvoAXYlQYUdSxsvS+ny4xFBBY/eVnAYt6EBE05lUvOrUoH2OFsIN/ItZXHzBBtncf3v8dEUt700j9yjnjuVG9rv8tkrgyCfzeBKiGXehgfUVkoKZ9+nYtxa+nLTtXlT/21xFp1YTKb2RxWEGNuodr4bPIXtq3g/eNIEp3XQW6yJoXaOKBqaxmY6sJjF9ZEhp/sr1YkR6ke4RQuJoC4Ms2ShyeO0ecy5cbQt2zWOu5ingE/mzcM/PbnAIB/EW6ExqjYCWB34XoAXAfPyEN0xfvuqyIwPeIwySnbE5beOmqAZUqOBbfwmgMQ9b2YO87dinyWZRAX/p4666nRliOBIfJ80JCSllkuwk7wbz0AL6NThzukYcTgEsoKiMiwQiprfFSVicx+ZXIymGE9Talo13vl61s0tj0ljFOoBmJiqAeGGdTVjYzcNoAgWLkzFOw4LYeeo607WBszNPs3ONNeRfplJJ7zZOpuZIeuMuJOR+Q2Dh+uTZwN5rjXEBThIHlnIsJBlPv8bgz7BAeocUBN7rxYxmZ+VuyvD+vuu+RnI8QkL4fWiSVjGb8b8BFIaSR9Er8VVVAvKtJBO7+8xBU1DwYBGnXsnRo7DsDBgVaSpfcKPnSCrR0G4CBvqj3ZaQ8N47KZSYuCTbWbhAlZRoM+WzdqzVBCP7ui7H0CUN7kJ4puiEadni5SfuCggbg6JHioTMT7JqM/r8/7C6yGfa2ww+g2el3i1zHoG4S3Arymgp/cg1nReA8n/tWcbHcYQ+9pd+al1XB/5T4f3JrcflFTH1plTpLTFDBL5Z7lquLgvQV3st5FTCYDIVzxeiL0EVGDFmUVduDy5jLaj/tMutJRI7Tg=';const _IH='d1c978133238f8c47121265b479d47b8b3de6153142ccd228c9f145bb3295096';let _src;

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
