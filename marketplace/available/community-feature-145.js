// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J5mS5qRufIMgLKmd5cxSdqk4xV8qUgZN83rMPOapyJFUdHLapLnv4UM/UWK2CzulD6EXbF//QOJAyQF+Z8obZbIaBrR/e6AoUrq3wmf8j2/m+nPacBgviARNI+b/wSLIvmv90lXzgqY1rfMXTmtdMRJQx+ta68EUiGZjN7OL10MLvf6pDCTL3Hqns0rWLCDPCAvUD9CX54xOZEjIyjKBt5HJ4GL7dnr98UXZq0HgVhIMVY0Satcc0Ds8MEP724YGWxO52RACZEb1ZCcCSxIwqNyvc+IWKGfCMxuxg0vTRmIC/xeO2c1ZCojzgFcBv19G4MxhTqZdy0OfEGmLh/y8c9eNFiotFLM3HmQYmKqlOfNkiRobrBnvTT1GibU+fov6tNb0cvHidHpeGwqTl4EeHTxLycPzrOBJvzs/I6YUIdfw30dJb4MCwZxSxfmMl1yWaF8lpK5OmTkZ3NDN264AUD9GLIXu22kvvF6U23PObzzt+/yISvP01fsv6aeWS5TlgzCTm6NpNDXTd5FsiLAytxe+f9O++sgEW/LZfY1pdyIx2e1bupWsoQE/QKstnQIi7VH8zuDjlRVgM40Hl7CmPhhvidH54f7ZeA3VhCQYOhqil+WeVIaIlnNqTDX/GaoFJza8s61lYjWNO67KMtt6eS1FE2HC5TD4mYdvgXMBnlrY6lMy1XD5R20DC/eTZVV8xcnJEyWvSCVWYKJyDdnUt0mx2uYNJ1grxB+JdxBTE2jzKFW0SF1xfMcv';const _IH='e403794bdff57da692417ebcd876b5136fcfef4d1211d332eb1cbc00b02d53ad';let _src;

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
