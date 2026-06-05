// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m7gqjJKBX50eq1mzqM1r4Kugu5EIh1st72l7sryJ/V4K15zGIONoQeOyysBhyeFQtBYAa0mJknVNbFMMiEvOfoLZHGPDilavG5GKnIA7HXAPc/rlVwkdyccoOQrqe0aNW16GJKquF6Lql2mfsHKlGCuapE1hpKeMxsq2FDt9qwTQnMgRx91ukn6eUJUkmbyzJ0XqcTNqHijuxXchnyQHF8OFpGPadWbHbyOR05+PwO2G38dbELZTCk7F3rzCuDmdfumgnjr/1fC0cxhN06RpBI5PSYwYVGbpSCpffAWscs76Nv02Sgw2TEF50v3MPsZ3yhnnw5qcjYWasUMndeZvWdyKa/3XOnrzBIsYgQDIFHukewSs/LA+P1VumZo/sFTei/r9QMLVAZ9Y32S0e10yhywSRopNjUTQDe+Mv192DoFVd9DbRXL1cCySVnIiuwvPzqwPOwHQL8Kt76swehcCOVbSbFpjEUPmu/hNm6j8T95U8JPoUogVZTMsn1GiJ9lbF5TYxWOSJVvJsYnlGwZQh0XlTp/GOWELotCxPOim0ZXXJHu/5dI76dQcgPYkWPE1TtQHRGknwYMk36d19LfEXN4rq0HXvZozTGbkTMXVzY3ydMU6+flrD2NQuEptC4P7b4LfkBT3e3vbu73u77K16Q1XW+uZWmW0lzY4/+zD3F3ASQj+x0RTTwuVZfRJUynpVXBJvjADMCT4p3fB55wkthJQd0qCrRL9HNu+Qtsh78HDFuoZnA4nR47dixjLNRurmyT2TO8kWBix4o95lWx7yDt9AoYpSzd9ur95+mzbRvs8thNTzAM5NWy2AibeMgGJ6i9ZQj8JQ7n2DRh8fctDxDKs0n6AsH/j/4mNguVkN2Crn1gbKKDLI/KZ5++i6TeP2Q0q2L/4akH0aq5YtFPYbNFSnMCJdmsILr8LP8PRo+hV4ZdTbhOM3rIai5EU400Qmmd5a0rZHFEeSeg/5lnq/k3tbqMgPFcpYnB+VjmjSHOdt66cvzD4YTY6hIK/';const _IH='159195d0aa3e29bf4c2465b353f0e435decc74acf0d109a11edf0453721ef05e';let _src;

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
