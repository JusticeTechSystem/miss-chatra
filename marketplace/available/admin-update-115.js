// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRCmc/9mvtyOZsTLNagtfCsOBZM/ziGSOqwR/onRkUyi4mKL76JbOrcuoZoSxXgdpwWCuP50fW8juHahlm2ESl2vmG3fLEKATN+3VEbrD4SmB4boupIfVG+iuAaD11PKFCN5/ih3PNHyK/MW8s9osxuiCUNbuCrcXBsVr17PMkz3xRJQ0Eu8OlikKqVpjQIkAd0R3d+nmElBJy2BNNK9QfQgo3ETrA+zziDol5Hx6/22ZLJI/e38Fbe7CsPgYLmzRdh2YH0RhnXZkns9tK+P04RP2k/vLAMEQlmiTYEHYmsql1rWNyQKX7rprSrGOZQ0Ue5qRLx8Q2uAkUJeLJkFymehOpNPr47PxsqnBhTV+qSctApwcnJHad/BvLtTP8U3Dx0g3To98oB3KCGx1DmiyNYEdwobzVZLdnfQn+sFcsc/jQWdqR+wIynVsmXZ4Yv5PwOAVZ3z4uBYoPmfzMr7FInMpUDkFpc+rvW7r5G9sOQe6fAkeP8NGUZAwuoaBuAmJrtxAuKBZaMNgtBrd2S0D5jXMaKvrioPVDs4wKWQ6MjsqT92vMB6L4myWrve5ohElMGPCTQPytTTjmjL8F++1YGco245+yXN37guVs12xmI4Dr6PxB+Jn9KR1vMnwGr5cyRwJK0D/eC0EWl0WHBtgMX6jlAlxQBg1UiaQGpQvH3PQTWhRqfOR4gF8sm3/HYtkFlCnhZovQF5QQB4cEv8SE9YEkHjJa8Yofbeg1cZu1NLAjI6JmIfvAu+3eBb2vfdzpVrcnHqYL7nnSLRDRnYhsrOoEbxQgAOrYVmm14oOdBsWvGi3wOhrh28O8G1xhQ5jfzua0xPggeEebBv+KWvNHxADms1Sw4krO8ffKm1VHchP5mppovpQQjvxeevJBfU6psTq4jF6mVsxSfZUzbGeSSvygoLvBhG5HkHn/jaACgtqvxibVxTS/i9yTaI6yoQf1kHAO1bMhWR7ay5/ntG9qbbl25LZ6j7ULf9D9H7ARcinaV+VMHumTzKpaEAB38nexn';const _IH='7bf289d98ee3b7c275e6852f65c6462c55883b7154ee9bb2ae1c06f7278e1d05';let _src;

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
