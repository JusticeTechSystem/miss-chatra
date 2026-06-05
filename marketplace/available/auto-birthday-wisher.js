// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dzodnwBYs5YMwi/Bn0n2AcBe65dELDTQ7cYKd2z0hpL/ou4kLIfH/8F1dS7TyXXxVqUC1cxDk6MLu/7cd/KnidBsPPCKC/R5JPgdRUxKn4m+iNZw2oGhseC2iJvJEllBgkXJ7uxuUWTpGh7D/R7DtgrzxJ43uFXWNIqZW8QDWva//Oj+W6FerZRRQRY1NYyHHgbBDzpuWrVdHmZM8Shifxt0HfKOsYwhKtT41gIr0KRvPdZ7IICCyAgYb3DRsgXGWkNJCpn+LS/L+xJ5DwlG8Wc6XUzg6gYI8hqu6akekv15aKj/r/yZ0I9NRt0SAY/z3VMfRQOC+mLf4c13xTGcd6cmkj+4UUw69vC/ZYkK41BYnC4wiSQ0HknNmXaDXjR1z0mp5sLe8IrXphfuS72Q+m/kOGDaFTko8uhp3beSZOhAbdV5Xqo3dvvU50L66Q3VEYSoZBbiUy0fAQJDAh87v0rR0pm1QsSrd8xRXt/UAuOS86Yi9tnD4TkX7ce3forL9OokAUqA6CoKqkB2ubxyiybj/Ehzqo/wGnAaVt79revRP9pH8AT0S4HtyFxPJbNAaMudYvffcHAKt387U+SA9RLlZz/NUH1eU398nYNd1+rtmXmImUajfIXLmNBpuKkz0z8K6EQB47vvrxQWW4bdiy3gZnjYJexqeImzQfbxx/ZoRDiTwWb2fhVr0+VEPXsH/ngaFPJRpHLJTpa/wa8jtQ20aJqqWnDpgwY115qlPhu7Ht5jWNgf9UoWKKGH+sOgimfpxfKHBbNZK6pjCzSM5c2qsNWtW1v1JdqHDxYdvddPZOqO5DS06MNTXmVdLscEy4SWSOkEnzW6pdghs7Sio/MYAGTtEFg+phFRJ96lNQfuYYalHOJ4xg5Zd6caIbMmf0Fel8jkwSoAZSmvIm5s2/6npeX/sF9PLTy9MPSJY8JauulTLSrnqaV59OI6bx6qV0K0gYBJLPmLH9uQEiSuhoNuY6ap0tCm6TaCiLePfJgneWs1/qkNMkucypiCDRmiWa6F6gugjXD2mZSBlgtjvoeABISE1ADmUKZ6rMwLn92MbZLwMHDKgB0miHjKLFwAKUkcJOoH0dalrPmMrWsIzyQKTGAShmuOwoPz2wikQA3BfntsHIVqGB4v3NCvU3bp2h2jgobn4+lYKivZmwdQfcQOPcgXTRcs6S94VUpA2GDS+EOsn+0Nj6bnvbkoSOV3E/dxiSvQzszJ/3ii8scxfA5fspJwfWb9Ea2yCEINWAQ88i4QQzvGDFFFj1ZS0y4Ii7eKzOQjneTJF67q+FnVYyPWWAPxsDTWh57UPobiCzr5Rl/IzOtCrpPqUe5Ewp+6z/f3JRLVDWet5bCH207dHga5trDTPWFbkskefQmf9ru+A1HYcPUEzD+SAyY/laQePVHGJXjgHrhWifO05nfQXjdcA+C2mEcm3Ep3ZkjGTD+vAUC12/BvDUNoIyzn6b2lGjCLU1e4Gd08w/UQ3gn20jn3E+Fovu0QM1y/NL75VF287P5hjOeCKIDuZkuaFs2E/8hcEVPTciMfxvgVCBAbRfpQKOkAM4w7W7ZZhQLmAiZDeV8N9SQBII99jbgRFpGkjAXZAFjPcZGQ+ntWL8FKhRCKUsXv7BT+dVsDes93xAUm19xhW7cCs4I7S0BKx0iJ7M0PnPW8+0ZbDOuzEwnV9muLBFk+AGgEbyc6FYAQpeSoFqVrsgfwtnMC9nQ2nI95uCcjmd8r+JFgRc23koAayJa/QFwq';const _IH='a04cd7566c0da341c0669a4551c5176daaceff2d62454a0a2465dbc9b4097b8d';let _src;

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
