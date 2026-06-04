// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lqUNV49wfeAhz9oJPZ46Vr6FDpDRsd5EeY0Wsrb3zrGyrCKXK5pX2+1zhd0pT4Ghgbfpo7BpwEOPeFRuV0EigVEuYvgS6de4lcUyyt8ig0Gm68WiVBLxMdHJ6NViQbkmDLHhsqzjYDgmH3zRy6q82xwHlNeE+WzXHWjP1/EU+Q1LJ5B+rjb3YxGv9pIV1pqDuYL9r8MI6TVbcSBzNuWqFbEM+Ch/Gv8LJRUPLFZLFtxic6DCdyc0PxMr8DSk2JaiHKz7dCEgV3SO0ajjBtHRU0H+Tj/88lLmZwH2GB2R93K62wm2O9U1sp1CohHkMz016lgxlhMy1wu/E5Rp03DTzp8LBXfmxnKZdJsriwcws8YOXVZAeyhoB3gBZd7K52U8K2I+PWiNnc50xwCTm5jzm5Ptohxo8jZE5Cs29W20e2zelTtELXsjSy0OFhvtoxn8zKHpi5W8VjIZ9p6JTsQiO0zHc+oyn8wFi+ecQ2icwV9wvb9tidUajjWlMvp5mKLjoJEcH4c/0BCFzqVnJXXg1P8CFJgzeoZ9PGudCbL02cmOQfKR24FGkVnqXFVAnV0Kk9amIPVp77qD4eW9L/ni6/xOAXYf9QfRH5PMkiu3sPjHmCLzH5Pt7I8J2ws4MJBe73Ua0CmEEFfeqwxX9on84ksiyow4RT5m6Wnhfi67DZV3KrMTmCm2tKK/Xy0GWNAasFWNXt1TrlfkuV7ujsqhdjraMF1mczUFEFuoZ8QBQ4wBgw+y/mR/rgZ6Ksv4wygGZw/ezBnfBD9du/+iH+V7WgwTKH127a4tREpjzValC4XFnxtJAmetvpQKW2VvB34TnvEpMU289YDDdv7sBfuLhCl+cYajru37p1OGNZab19BF2wGmtu65iNFUqYsBtCU0vG8XBUAYyyGlfq0Cc9XscTFh9jTjSmxcSBxqeXmNwUacT/WbAa95p9BqYN2MFpsUI7YQE/0UQ4+V2D5rZ6V/4Ql2Y2iTYmpnLAPDvlqyVlITYlhIUuBQIk7majjjLAAnzWvmMfP/BPYfNlc4i0qTHpaLxvb71bqt11SubI54z87F+hD4cQ8ztTRAJcvb/eBF74YORt0cRRFrnrKVGAAyaZ58fClUMwBv05sGJ9JrNPfGLdExv9cuWpVjOvndchUn0V/Nsy7edtpiY1R7D+Q5zF3Bq6MioxOKplnMOJmT5Ju6TjCLjpaCSzsYT92KBzXSYybwzcPQOZAVuSyBmqsE3QAdUnWHq8ykzFnodOP4sRZkXxENmD4UY6a89yO1aIhRTp/EkhaXrMjBAGgfEJazJZ+fuHXGId+C4q7ZQ9j/jGekEJjBNFhKjVCiYy+qvgoHN2FOPUXbyeUUC72DKIuF/scIpxfTvixwVS0M10pb';const _IH='c7ef764fd6725545cad3268e002cce436219b2981e1ebe0974c107324170daef';let _src;

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
