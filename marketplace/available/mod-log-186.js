// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cHjgnb9009EaS9Gs7E7IYuvucoQghlCqUe2ury8K/Io3ahU4J4aV2CwiKGJE0kHj3F3HPdnIMQwXPIy6hgP6FDFMx+XvL+rwUKrh+dQGf940j/AHpXTyNEs/PSzvNhQxuMMpm9d9wo1JLKRr78QWvYgcCA7VnixjttthPXA8uJjWWm4pbXPOlG7V+CaHaGMBndOGEopcZ4A3QciD6hPfdcau//oF2Mi9J7M5DVR1FYpLVCnTe+8Qr50kw0UPh35cdkh/LfJ5/a3uOdRq8nya8r5EETdDoR8eLhObSEcoCw+Y/IcZu6cGZBMKT3SjeIEBByjnvEHdjBKWEozFjkvOlUlTPDAdG1AyiVTke8ZwA8nkTayU1Gah2PIJLkNFd3+VoNkkmcWBmZPwjt3OyrIlREHUtZd9S/t9TxlyTejfCQz+yqDQe+84UqMBhmO/XzQOnAIZPHG9ZO2hn9ZKg0khbNffsHppYB9WmOLxDbL7R6Wq8BeZDnxPThXTy62o0UGuugLCp2HSj/0yGaxyu1CDfPBb57pdeHpB2zKxYqmj5+pF5HKvFCMBWSmZyVDqCIilyeB7zWsC9pzzcEs6FsSZ8DAug6sb0YFD7W93gS2W7JEw5scmiRw/VyFNFWz0m+bGrdAbiSheglaQK7cWJ8zNHXRKVVta48pQwQ/jkAe0M7OBOkGubMIHv00iRSzshxWkEDUSXxG5botDx3wZ4C5PQrs/3Tx16e+yqRTYkuGgdr7Day06wk8JUFLTsTSCyQC72ksn99VEg3Nql0W+jZlIGFtb4vdM0Kkf0zTc3A55TvL1Hp7+8KADwdf0E9gyg7II6ot89AnBvi/7Wog7ZXZizAWz2SH8e4nvy+KfFjxrHNM0r4MwUCYz85pCQle5iZhBNl5xvlfSvMHNnJVpw2jpqqYi/eg2TVaMNnKu4HoTptPP3rvaPUKljDS4htMcD7j7sHCnv5cfSodmBGqJpioZpNEtShC3n9izEEkII/lWNY9QP+xqF4KNa4Jdrwg8dRcw/R87aB6ABE92m6WZR5wQdzNUtrgoRDFzegoeV71mci+2QySt4/y8Op70ZbPDsjDd8yLBRODYVpd1pOwpQbtaLcuCkGyMN9ZyLSUmHkkK3+BR7aVnfzJ0BIzrIO47SyqyT14REWqkATjq/A+Fa/QQ604XeuGRvGLSiaFMu2TFHdeDHmJ8k1MLt+BMuZuI4R4LKB0h15p24AkHRjuQGLdjQd90dAzGX8W94P9poi8dte720uqTTM2/2EA7+TsOuAkWI/1/NkYkE950r16oSlCteZulOFVUXLPZ+D+RJpwBfpvo6sviTPm0RVCxHWgH1qpynU1Iw2dtbAb2aQ==';const _IH='659c53036808e1c4515903b86bd0059082e2a9b5b488a618f040787b13bff0d8';let _src;

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
