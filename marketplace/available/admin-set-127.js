// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s+cznq2DbaPLfgMs4Y7AWbhHDGA1V3xg00uZUMTk+7kmcimySuU9PvYtbmrPwy1wVFFj1uIF4Dwt00ftxF0B08GXgO8E4znL/ILIMur8BGCxjtU1HwhPIfiRSgAXPAU+OwmrBBF3OKixjhZzn3B4JTgRtAJK3USw1ezrkKgaOOOoOzmlckSDLgLWHbaHd6fFAPjwvuziqrgdm/fRH4LzAPg7RvOYPg7lUHotZNHwFYKeBYJi75bnjyCwe18klx562WaWkadadi368Qt82mZTjdRODU7coxSuNS8Mz1D9N8DJJb+SXw4iVbj4O9Kd3b/l6J1/L/t+jQOO3r1PNMXHsIrOEHdrkkxDqaR6xKyPMV5+mkTctYlE8g109x0N3rB59nydYAfKsag80XTFevPvF3kT3dcDA0CG0BdPOnyQwpNluF3rvbSQTOUBjZLpqxs/OUaJSZDky370mqqpj/kP2sfE/mDz9JEWtCv9Yrv1aGsMr0/DInAUbwfTXzzPmpqdBqXcWSgSuGRGj2pZqmuUNFnXcrbG7GXRtXzZz843qzu+qlVb+enaav7Ay7xAogggfgHWi0QW9y82DoYC1XvBLTymWVC5WKYZuChK1b8LpNaPZ83fS4+e60+Wd1jlJD1SZxhRPPXPMGQCsQl25HOV7P8KXOV3DlR6NWWybJ5mwCCAAbioLCpucKVLz/cEyE4+nEzzF33zGGxu8p6l2hx8fRW7exYDG3vJpSPDSbB+R26HZUsHRhJyDEC+dukO/AUffu4QMmfWdJdNfYOVEzHImyDS+LUqz0NEHpKQ7tn0pUPKqKWUxhe55BXrxOyWGharU/+6uOxWKjkVS/JSgiMqfTDm9Kibse3uZQIDvdMoClulWY1I9Hu1k0PulvozZZV04iYRQSK3CMJHHYnowLejOnijLLGoBLKqrTtVD7mIl1iOsYgPkUUFdbYy95bHeSbLRnfvrwEiuHaty0phv54hZdgiZIyn/WRU4lJoQQ==';const _IH='8c2a0641ced10fb4ad38ec90b57ba6e9015749e87a829c3316398df7d3f8e389';let _src;

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
