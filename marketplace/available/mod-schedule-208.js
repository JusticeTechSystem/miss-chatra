// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCxY6YZl8ceJD9DnSUff3/Iu5jce7ml8VKh03S9IaxLODrduw7pzXKDo1znLV7cGtXeZoWrlXiUeoq+Fux1u5CUMf8JOPniPpJCz9T9o+lT+/IUw5Pw8ZrzCzwmQrdE3xvErQIl4yrQyK1q56xaYIq36vTshs2VBYEGV/xlTGbIYmIOzUNV0mjGW6tvdUHhtzQKaMyFQ+/iNYZ5E9Hhl1ToNGZALWtRw1NM8nTjLKGnL0pN/uWojcnk81fz+ZihtKtrtaS72F1VO4Ds7JFgMwFH7LLBwvNDOGfOP99RVrwv5WalRXEoYEqmY6CXJOAxciUFERcT0Jz7iCXFYjJRaBW/Ag2gkXaw/EToTHy1iBU2vaeqkbbzmtPkeJ6FtL7slBGtxnNKRZIrZDMbccaQXxOiXN03LZZ1w47nS+Zl/9EXRF+uZynhkaJL98GNf//maqYyHeglow51GhekBYXDZ8jJtEsKWjBXZ3F8lxq+OcDE+a6Z2SRAvEEla1VMzsdr5Y6kGM21DgCFTSyyHgnwFpnCUoiscRj6HXfKzAQUp5ZxVeAOeq+7gWMAiTfDDyZISsiS9prfvkd6U+6n++JOIc1SQVOwZwo9qAt6wszcz6Y4b+InZWIaeKD0Yh/ZLkk65zrhFJ4Sj3TGKD6UcA2KVd8LKoeGQvMWTLFCqhEDb41xW7ZS7gzPP+eOB5piT2cvXRjHZx9YzJdIS4DpLCl4cGH5Y5hKkh0ek01OaapPDPvxOVG4UILPdscFCioaMQ2lxlQ58xuovwrwo1gmpJPV1vhp95telkcyxFZiXuIvf9xECfY+xTePYEMRfXCT9MHc8iaiT3i51nJPgP4fTzxyixEVV+He6xlKeB52gMRo+5GAxxRcfiCoiLPw2BqvI4a3KcUixhXg3R9/FPgf1PPgIfNxO+jh8Dv5Z+m22GclGU15HD0K3ymmOXBzfBPo9y1nyl5j2NasGOR1vl+yeJ/SVy7ff+4aGWK6M5ZmWqAIUOe4tocp/kCxY2g46UmPDCbsKUkAvzW+5C9DU43cJ9RzvchI9tMMqEFskVgm4Bl+7PK8ZQFNQ4xDI5bMjqeS+7qVlkAruYrWQ66SYpl+cuXTx8E1ov57IvEVS23R3vKJ8YArGF1FKAFMX19jbEVBxLCigxRc/2QJkkkuvXe8EFbFng+oIL33DDXKMCQlBuuc+qHTqbvdsA4GtAsrXw8yg6G9A5uDxxsnwKcR5PPc8k7ctp8Qjs6uU4z3vlVxsCoq1MNJuOD1ITAtm1PrFJEYbRLhcN5jsrgxFhVWCsTUCzV5ZLlnynI5orjoyxZeaiTi4MEJougwwEDDnnLUPbEScRAFaQkfPmNnItPQYgvG83fg+tz3PuKiNIHrju8N6LBpJAY9/2G2LvDuY1k8RKfowDLIfdcZH0QuaW9pA4=';const _IH='b1fa1361109ba682f1d8c121b9bfae0cf8f4ceed7fc66dbf601d69d2a747b267';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
