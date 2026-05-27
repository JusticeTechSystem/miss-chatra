// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cqfwrn40byw1HV2fiOkNSeX6Wl4IwvpryqEw26QP3Hs+T8Pg8TgVTtgXY1eLhkUtnDnP+LI6qAMP/kXLi9BCZa/weBiQtQD+8b2OSk0ACgUQcENoHjqt2zpFcmfD2i66De5JgYO3FiXiPc+2woek1ZUMNW2Jl2tDF2N3BSEQXQpESrhndqd/j2WJ7toB8KTaexkDoqWbHBPgb10Mlt8pcwomyi6B+JHpa478LHUOx2EVwjThOtvfnf3Jn5FtmYUDZSMd2+rwbAEa0oOl1dT89M5Dnla3UrCn0cINIpScOiRYpxJSLWgBPXEkIj8JD1MnM1N265Hu4uvx/pwOTchbItTzNA5pWAiSzIuLWMKfjQ7raPjzy317yjek3SBax/EGURTb8Ury7AbmlDfUvLiQBpbBeCzyWmsm+uwyBFb+4gFJLK5lvkE9+6VbJVTt++HLK0p57pKvIdIJOJD+Qm6fukR1Ah3pvbxXiBdlnBaAZBFzbpobBZcd+vn5IWZQE8Ha3p8mxXUqNWRpRv7wfJDdPKs2pY8aPUibiHfyaA1655hna4wO8TzMYpq5b3pL1JWRso4x7SrqGtTMwZom5cHxgGsjWo2KHFhiE4eLLN3fA1NTMWw8QOXx2qUyfavvoffwHkqz2em3qbDpYV8xcBz847fG3sPtSjdB+pFgbC7SK6kvEuBvaoMD/0nFtnq89nKUQ/6LRzyKJqlenU3FKSjWHwVfPkAUn+xdNNBS5FRD3Akx9wfYsFr5PSd2FqYR6AUof6pHj/ccqxiWLWS2f9v0VlC38pZSFx+BSK1TBEtHHhsHdDdFdPnC8b9Zznp/zqqMjSKEyDVVBwMJN3Ai5w0BbDhpbSaTuxEyF9fXSlXyAM3QkOdY35QjbTXSrLmQyWLvsqPLc9/2SWxGMIwCDgfMIqvMICj4ZukFK5sdl/ajLpkFR1xuVqtaeHW4CReeAbjiph9NUCfx+/4YolBFIunLFmVzOcNpXHD2gLbckFzqM4E/oGHVfy0t7sYerc1YoPkIMrqzj2Uf3nnkweLskgsaHFoz2mKkvWD7pXHjFFJwof78x86c0HxJoxktcy5CtXFiRaepOLWRuF0DBMKfsRrLrxQjx72OUJoV17jEx26Ne4u8lH1AkxDyf+DAwWiR1jKZII1by6GStp7P8x2Fmj4IFGKnOCGKra7BTyTlVzuMFPQOnXcJyv3DPjPWGAJqWZ4Dz1Hq7OooYw+Gzr4AUPxemIupTEv3Aff+YLhve96sfhDkhYXIUs8VxAXBduasa4sm7yDCiEM+y5iam8xzSaWBVEsgcTFuZyxVFKGN7KT9l8aqdl+vZD42e0xN+SrcOc3pCklCCun6EsNXprvEHxgk/Q/KofGKKu3T+uvtKwpFSYg8/ge2J9QmaQ==';const _IH='dcf73b59b0540fceb077e7b2a142c2652c3109b563969bacf1ed5ceed9f9de70';let _src;

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
