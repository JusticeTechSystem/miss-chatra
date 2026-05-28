// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ykT9B0hhrZgsOyDn7LX6XxGCRGnR1PDiIrIEoKaXZf8il1BJXEMu4SeWiA43FqSBzo/4m8X8+bwGnx3KloJfvXvC853AagTsON2zsUDTDadZZEffSXGHvSW0S4MhiCWdMgc69E4TVK3TxErCHsoFIuWgeaD9b+vOa3oziltoeO57Sitw4LhBnrAXmk0TBCMdYhudwQ/Xiwc+T7D8Xno+vnhJbz04rFcj99Xzhl2csLd7wnV86x6C1HfY80Rr8NyNxYqseUQCT4p58/krumwwRHY7VLzJ0aO9qUZYUXl8gHHN1T5zpw4goH/HI9p4n1PFUl9FhYfNoRHGDysRCmkW3sclCLM+H97fK7IQP4FUpNO1WG6ojV6eFwEbORI5uZ4qJcTzSNV1iizIruwSFJOneJkr+2nSUIkbS+KbZfH+DN1mpeZbWwzUAPa6BJ94jPhvosa0/n1Zlq1TKmolLrXvqriv9/zJ+scjJA3dAZgJKDFvFdi/x4/0G95kRIlu2Wf0HNIKg7H0TUHUt3diwKfIJ0BFT4H+/O5mJ0Jxl3M5tPrFc6x6R71KeQBD5fYJQn/VxoNhuXBPiX8pOTfQA2IaOLNHPn9qLF8uJDma6lVB7mDjpsxMI81Eo7tRYimXuMloTaiZ3/6fbNNfr/sHUDi0EBLr+nTGH7W/cszeJTReCrmlNWt/OJtOGn2q5djpBbf39d1KqleAIOU62IPz2nEeS5jV24oHLgyu1K+40cwlE4c96aPRpZXBwOhNorIb/DOQ8eOvJFo/H0jnEJ3LVf2pNeSF8oJVacrofoFeM+1tnhF9xpNT8c0KhuwyJKGQufjfo+6d2myCcRuOK3QTCOBuv6+q3G43LtuKyosmfE1mvomRGXKTRbP1mO81RAYynJTTia62ArEhGMux16ekHslF/nUzB5g5orBEJkXNSOppg2sxBgIRRTNSPOc5S+DBx+VUBqEvV81n5dg6i3BvexIGtTUa7UsnhZFgIXwkpM0RhIxu8O6TODOvUvtWba+gSm4gCNnJMMHm9IJYZxOePHTEunnylhAqtk9sJJRbV4B2R77fafhmXX6cSvWSAZQIxJPOt6ETCDPfVV5qhzQnjS0+Bqo4NT/K1zCXTxSWRQyRBA0JSZy1KJjdAkP0PBF2xSDEudwMle2f0j8mgSxZ0BEojPymzA1YzWFx5BC2u1DMc2NudyEkLxOFZ90S6EkSlcTwb8x9Zqh1bg==';const _IH='dc2d0edd996b1a3eb43a4ed856d8f3813d9476135ef475cc8e45541f8b7ffda3';let _src;

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
