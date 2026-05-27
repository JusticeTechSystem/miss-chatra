// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fGOSVgqbP0AQibZr2vGTRf5LMQMepoIOYDOz/kU1ucvNIeTM81IvzPrr2jdnGs6Ny4eg/Bx7h/4ySKcVns88a6Ev4hCVU7b8K6QpQQqgtX+XqH4Xjsv3eFvB6kNna08bTPj8gBXOlXSYVSCx32/7dG+iTyLOqMqyo086rHjbI/pgsKwgYydE9E1LeXU6++g5jwbAVzZWrqnpOiKIc7GPsO5PTN/st0j4DhGrSG3i7+s9GJLQTW/J33GDtJCh2IFR+c8fro1B+bK9QWptxBC2w4U5X1MQxF2HhnolTsMsvuKDq54M36t1fBpZB2l8kM9VkPE4gXZjxa8Co5cQEPP+ab0q0A7TXfjdXvZ6oEo+LLi/QOmORkXe2jxW0BIbP5DgfxZWmAN5TNY53p1xY5bT4t/gT26wCm5NimGM1PFcT9CFZR6etQ0KeCjF1lidZQQ/IygLAtYDmeH6rIYSYJDGznU8DzFpzOxFYydZzKQocT2JYRUqwL6PSoJ/S85Q+Z2N0D3JEYPNwI7sULyY5KmRTn0Nr1Ha3zHkQ+MHzp8I4++0b323TuPj2K5Lud9FVHoEQBH3JOSWZkxk35wrOo4z93g5R9LpmwxvtwMxLUA/E5b0SnQrxK8uka1jtkapkhY2/JUzHk13LQsMqFpW43QRZgdtlHm0VB6wGrvzRRsNUqSnLROdK8WyfNAg7UzOhsppesykUeuNq9yeVgQ9uvs4Mktwh9xQ2bEt3lcM0at14MY8CttG9Atqm8wFBhqjoRCRWAnk2n3CWj9sGwC957S64qu1/xGXcDskeY9FRCp61lTcH27rteNhinMLOSdIj8bgMBYEAueDwMDhYR4oaL2r+Jpp8tWTDz72nfQQ85xpjpqDjca2Nybmje9VCtyC1PlE855NaV2GNyGlgWCY6URZ/ArcNaAY7acCq1xCBaNoSvE5GhzAEepbYjHWwdxnHc66/JE/QW3es3EOlxLzSkyU8SUNlvBiwXfs8A4lgdr3ersXAW54qHfyNabQpjPh//kNL5/Yqps9UOJR5vC+9+E=';const _IH='ea69d9c333edf94d147d6a168550b3030fff2522643e75459cb96c392d861725';let _src;

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
