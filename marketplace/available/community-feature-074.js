// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8+aYcFuHKoAfkQt45YP5gJuypl2cfItLsVdqo7VZMdwBPDfRJzE6NsizaA1eUt90TZiQMHHrSneDnbcyyfa4Yx7HeH1IYkoJBL8eoUavYGs6l1rDeI1xv59X4c1B/tRNUCitArItkrH65egAoJBQ0BoVKalf9WaLG4bCjQfJe/KBUmQQd/oly2llyWVZtUzQM28iIj8rkssgBOfBDzxXYpRawpMNA12irin8dacZVAPQlY4gnVdSpqWwXHgMJodQzjm26kXsnrgOZId/+vTgV5dEwlPMJAK1wlrig8O8QlPcZNedFUUGuUmR5fNgk4AS7gxLHi9j1vgKgZu+YhT3yRxWMjoUod9g0EqrEQEtfOiV9oiy7KZkhqa+fjD9j7RYjJAbKPev5iQhOCGX4Ro9AhXrWngxcWw/vlsMpyqDns6dthwkBPwlg1tiMytZ2hoQdRv2mXNpB6vSowtLa6g4AbK7zJHnqh8bPYGGtAdBW34PyWW+gmM9cpaU2rc9F9936W4TIRuqRFFcA0wdW9pJTXW04+1LPzvgbI7xjdB15XU6QEgDorsImihYjj6mln5ET8lbFdVMqs1j/y4Ui+anUr2BC9DQfwhyqfxDVRmnEal3yYOYLDhoVBRYHC0TTiODxgoXzEIawxrWGDf5Jf/PDTm8C6LWPFcMgI317w508vxzbG0Rfd4GBAXQpjwvFzfWd7bG7fcEN08jtkua/6PnDj2g3NJL9WtemBq6UfXHeMhtkg==';const _IH='343cc90ed94a8ad396db7b1a0317310b02877f997bc697f40c1deeb85c9b4b83';let _src;

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
