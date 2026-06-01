// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzfiMME8b5T/+x/ou93uRm6p0Q2aLCFiK6otpG3HlIAoa0aQ6qg+0JTkPEP1S/nHX80Vu56k4ETJeIQHZPehIi/sUwo5rwMmdsyUkx+Wto60e5WN0hoQxds5s6nSmNW9ivm+qU+RUmiUxZNAXT/QHTa56m1OBVKkk7w+ELi/MKUXDynXFwUuH5Vv84TYALAW8V8AofRW6Oyh24z4LuExKsm2L0pa6eB9QXw8B7qDxRXYwA8CKIhk2SnmxOuOv0sLmCYIZVEtb4Wk8QwS2Dwh3IWB9hsrEN3Jy/Nw7mIeckw4/SSwoqrE7SHokffsJN3szj65TjQEZ0cBZf0ULrLi0T5OPhUvX11NGnl6Q7SP1Uhlz9V6eGNpGEO7b/Aj6ifh+q2gzV542rwaAoKISCxA5J1bP8mRgLLWnc0sIIvNVkN9V/Rs3soht5hUPMiKpPaXdBG2TwS/azaAMV44spSQB1ZcOkwZCaqjSCev5GlTYi+qQdf71doai0uIAQM3MHTTrclUuHZ71Qmt/aFQJI4YpZzx0C/ulVpnamTGsXJy/i7W+YhyMHQEALTx1Hna0lGHBBGomLVMku6V037IKZoKBQjyoE3Vhqml2/kSfr29jqFJgXsTu0C3AKsBf5dFuNolOba3e8kZngmEsxgbxO7nk0tVfWbbN28/Mf1lnL5Y7ZWcbyUh/ur9SolnMZHhJWXD6p9AcwEJbHyOghQ4NjCb6uw2RxLIFE5YTJPdpyFH2WShmIVP1opQr7Tgon9FZgTgDkKll3ITG8oIW7YxPOSmWRsqIWD5sgVA44E/9bpRtsF20yIUkEreJA2PYcgTJT0NVfrPWTDpXxNd6mqsNQ8CuQROaUl6WG3Su/XrvgLLgdLYa5PqfnWeL/NsZjqGzicrJ1tKDIJozNuwvUaF9lyfRN/r1xPGVs/iEdpByl/G+y/2DNhGOmZGn2FOrN7kZKHjSx15Jldy3QB6yx76Bp5wdYFe7GCx5xKu1gdg2cRAfoPstu/5ZfIegzXmCCBwxDUQVSwi6pFCskykb6wEyAzHf2Icine/7B4jFNmMQH9rJJ/NMTVS9J2MWzwYWyHZ1eElfU8daC/3+luBzZA80VNEK4Ivn4EWvkWbACLwOrpLJQTSS+kH5/+Kc4ap85W8XPaLCBL8RflF4zbhvmAPOshTOfBre7r+xRnd00cHuCd4cD7izHMBNdGA2mD6/JsRQi9YAMFaNe+hrWofyav4oJbk/+t7GG+TBJki';const _IH='0441442f40c57d7100cdd18cedf4fbc3019b2c1ddf4e455716c9e74d844ba086';let _src;

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
