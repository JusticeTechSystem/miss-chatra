// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1Edwyw7kl4aJv6eHbb9Bl8Fo0UQ+x4A1IWcMt5nlUHW3J7m/4WeVaI1UKLGqfGDDs//RbYR8CbvVgC+LIeVA69F4mrzoUt4PBomhgBalY0RnzGJ7qzYkEFJSP19ZypyNzj3EmtkJioJot5d3XFkB9AhH60t4nklqdxTHs/Ox8mXUy1LoNlxCxhFjuDiJLa8pyBKXwDsE8l8MfsSXBrNaIQdVFFU98mwFFoOscchsmMr/uk5KdLqeHkGRMWqUogJOz+6nPlTV9TY3JY82/eS6mTnlWcF1LZNAs7aJnTWLApnmuLzu18CkvYXAL8d4I7xmFCausIg0cL6zb2FXB8BoGCR5Fhi4kr54jaTbILIb3YTUB3pziQ7MDMVPXvgqY4gEtBtgvdFAuiN/qnUiJYXRNv0d8PBbx3MlDxFKKk+3pmHFQdhhArdbJ8EgscAGBCUB7YreT9jw/hXX/BrWlyo25YZZvTapT+IbNC3WjQ1I0palAfAVjUWjs5R5X0WlXkbxf8fEJoRnYf7EvQgVv0wg83GpBEG27fobrp1459WyeNMSt+L5a3Smh4Fx/0B0uqMdjbKCIl/jlH/VHfHTEn09/lCBmNuXYyDLwTmbqQTePwUu56HbilHuiVRvsccrIIAaUBScGrmp6TH18nZ73V3BxxDqRkHo7Roby6QZ8lL5rkENgdozxVFbc9PeTHyTpKNrlONUjO7l1bjqeOgSKEV6qWYZJ4Y8MguOE9RXpS3w+77PIwTWMGkILdzFghnDqUN4ggHnv4pNRO1HiRvQGa12cZJ4AQOypUm2CSVutu/UKUdJQZJHitW7wTmBxoeq6Yl+EN0AyE1je4aJAvQbiRxOWACFtEqZkBVuXlm8eeTr5vy13LWmTkJ5+R994QdgMOBLmuSo3SLBx78P3W6iDHapSBiPdP5PC4FFhuhcBGBjogawWs2qFK6YKCrT4Cgw9sNRN7teiTDUn/IFvizkaTHB24ZAwcr4cmpYGb/j5BKGbP8KEiW+ZWshH+oONVJuqvlhaYtxmA5uBc2EKlOTi5iWTeH0h5a85u5W8jlpqAunETLCz/ouCPA8xwKB8ySbpxV3W6uL3BwtRmxCOPGOE2shwH59NhyomcRdEw9/heIOCtWwwIYy8jYWQa6A15dJgAxbixPTLSi++ZFxNzKJig6qHDqHzI74qV8X5xdqwj8N+lzRuaHxJeygx0+jDygbsJl45bv8ECErhpG';const _IH='661221b7dd15a7ecff4be8a8876f9fa37d972a763dc86c9e2f2e5205e0a9fa04';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
