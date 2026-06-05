// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sgfri2W6n2lRU/tCHidLhzOfIxo1mH/ByVIEeHEuQvBndvikYjFFuMiTRYQBV92syWvl1nGxMvccegAEijg9PhcC+fOTp4h/GhZSw9MOaQjVelqWcoo8ASzir9XkKnTWyrwF0td1IiJKNZWt0DWeL6Q0P9BHrc8X31NC4dOFOdt9fkDRvXMZT7S9x+M4g2u9lB1t8c1IqkevQw+OPhANtOBr8RCVnG57PjMH2Dn0wqQSdccEbYLTE9A3Mu9Lrpg2U4+SpAQuuQnQtCjhcX1YkgqB65+8sdvmh8wXdA9Dm6WTAdPLVT7TKmCbuK1W6CeIZc0tKSMgZa+Uag+TPMd1fnZ6MfAyBjjKNrE0cU+7UpaP6pEDenDIfUzh1Y5gP2lPxooEh17zRrBW8tQ2+mmY778h3IQQHklLMTiYlumWZqXLio1eA26Y44FLsRiJS+H67I/CHunXuXEql+2isdsH0P0cb/uZg1tzPOmsCF7g/EueUQveRsQIfsiTgllxifZyztJYaaklsoJ2koofOy/GmITI0luPDMjRL9wDXI9j8yShETGgV8A4xNGnKeDHlwHiWwTsF3C3zmUZ0Sa7RABBTykzr9fyC49c7syUj2ua0sF6+6myV1hJVdZWTRI2g1gIO9PYfIwH/NBzZf21IdxEPsOpH01tuEl4VJq0MIQB8C47y+SMgvHgUxvWNq6s5O11TdhUcutQoEB+xPVmeVYjvnd/iprGkraTZMK49gPY7GU7qbRHt7HoSY+shjGixA09rLzp9OlwVVcZn0NE/7vC5+ImNY6TT/uPwlqlCyg9oQneOjirhUfRmyenSChC3jhSS59YUoMPK95W3wyPQnOoi5GKZqCrVu9pKs1dUHTgfpJ3YNLXPRSXJWkA+OrygzVzqaQY40fQjGIIcvgEAMdHHKSHm2sBY01PwQvMxsyU6rpAZPzN/LMleQ==';const _IH='31635312eb4b61372186e63699970a0c063ff4ceee554b1e0f556ac7d9e41e3d';let _src;

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
