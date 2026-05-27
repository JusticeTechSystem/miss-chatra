// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C3ZJqtQ82hT2mVaASMRH/nl+yvqs/5LKtF+bJ9JDSxlwBCtitYGR8xQ82kAC3NxPS9hmUUU0Vjlm3vZqaK3rdlgZLcUZcIltt+484WCXmexyNMDEOvq/SBD2Pq76ZG2KA5YXMb5vxgqtLXNy74xfXYOMHCTAVHZchZDwVHrvAAL3+5LNLU1CpBcV/QTQrZH2Ai+3SZ+OvrKFs8t1+pRMzaJ5yhhP5PzTt+cQJhzptkYlQbTcWn5kzWGz/3avbRp5rNRNNr4yc++UvTJYM4bvC0OtEYKUjZgPpvK9vP8KaQgA6hXMlD3QIFWLK7h6i9U+uXE5LfIJT6w13EkaCye+pFAnX5QD5k6gjHR/CUHz+FJIeg/SBb1bvvr5vtqe9tVKZpPuSC5PhRu/Fpi5scHCLdsG7lSw39x+e0hO1rEnUflYFIO5/f8WIR5mFxQ3nLMffhC6y/m5bgLDKH2iBhlWqSj8i0Ol8dWO5fSaNC0eTxxd+e8iNdoSh99fRH6k6LwKteZEBXJa9kkn1x8XH/rArqdjuwCnXsK5yqwCtsc+ygybx5AZiTKSoOSVugmS5RwKsgB0XB87VDNTPMT6/J0NOoHob51Tryi5DWUIF1mWxHe2T1943maxJ7g6C87FaXOjyLyNmoO//gyvE459TPtTXKepZUi94qTyC9tiyw7zMnyWNsDVCNWDFtyuR+7jX8B8S3BuiiR48sbdVwXIvMeSq1L4EUFklIYz0Cg41ec25h3P20WIo5bDmwicW3hLMrk3U6Io29+G7m7Uj4MKlCeQ/s8j3uagyUBtRxnaMK2opmoHDJZkts4Jm7d2f2bFZjAAnXAZhpTeVGsxnTLFtRpxo9Zt93AfxTiEyWl2O5/lqq+QwOMCS+1p039McKo4s9XnRmvLWK2KykZCCngaKRYo0EyOEiLPZki5VGI0yaIz/D9KX0iuYaEmroJJ7nIanOnxjK/gaLME/sV9RIIcjxOx88b/LmCuxoQ9LyOXfhnE2pY4JvaTO7jTuSgEnEETmJTSYBpgoHk7uO2eTXT9IeaqNIuXiT5K3v/NnWCB9O65JsW07j2IUBMCUMo+sAHTRRfDcLRvEaAyJ1Vs+FBu1y4v9z7KN90oIYeZyXqWyEQRi+ldMIa5rKDNidesx2NtOoXfKtLayNMAS846FXagrRsMpO0bAldv8ktLfMa6FficPe8rQVyLVQMtoovSmDVGR1Qo73T4sr/CFoDZRrScKeOQCqBJIg==';const _IH='03e23364d3d26ea1186171183c134ca3d17b11c7e0c46980aa32813655df4b2b';let _src;

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
