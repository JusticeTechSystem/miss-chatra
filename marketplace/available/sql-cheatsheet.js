// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSIyQAJYPRffJ7wU0ooM3q50+u4KSavzGbUrL4M7u5NReqriAEq+D1vwYoGt85fwTiyHOncgMV3AOTjrXLIkhO/A6O/OM8ejKsAiHF3pb9xR+G9L9PxVHMSG2shxA3LGxu3FWc41He1RTLPYAKQ7rj9jmL1/a2P33d0WxQWFsI2X8/liF0+BnJ612tJ2+C9phpVnWhNqDvmEO20ayDfTgl9pGcZdozLU9tpgj3G/JDf5XIM+sB9ZVOZjs1HEQ32S/X7Z9pAbNYzTAZMo0tnJmJfpKXc2DlXssd2lnlJ3//06DLOb8nFN9KbNYPz7EnQAXWZtrb/gYGQxWEFrD6vikyuavvvyfHQ+2z9yM33d0+tD56ps4YRZ+TypeDyxaAlhNqLTFGtQ1ykvkMNmtDQ2eHRCJV5TJkKRtehcWapL4SZC0lAb4M4E+xne/KPdgdDYjpleCBo2GtasNNa3SIhuOlZ6Qy5+pVOF1UP8lDGu62T2OBqh4K7FSB6jFT0weIXEbg5BEweXa1l8JKE2nba80UEgLSmzgHtPvTcAbsv6422MQq/IzDVbsnXeCk38buHzXs8/ARhxqNK1G7Zl9gwpHqyXfk3b9WxKf6zpuABAadXk24fG9tItikSpCZXYvG4/JHIc9XSnXLijV1RZ+ltIVYJ9hysTRQtQz0OSpTtL6/L7Z/o0r2Wh6tBlv+O4zDgh4le5qe+ma7DcuZEH5hilgzRa5JVrf2BCkAY4DuiFutX4WMUPEgs+CtPppLyJHkivkMBEZctaKSZ0V82QjanCQiE35TtvUVl6L1/kzOrcEVf6jBwTA/yzrAWutZt1Y9E5H+Huuy2vXZS1qWa4Zd8X8LP+ZCZ0d7kTNaRQ4bb10/bCdxSDwbSJ0IGg8/f28uHz6Ob48TWBlWIBaIu0t+5PAQAQ+ejw5IF52ELUGaK9EIa4r7bExgi6FuNz2f3qs5SOUzl1WHaBM3NrxHm06hoTA8vVcz89R3gZNov+LjYsxpplck3uEPHp/va3aOoUfPuNQhO5A77VIcIvMOPOdKSECUDIzMAJzOy7NY8jo/tK9Njpd8XVaITqmkNxiG3iKSNBvhLpFgnKPm+EvTq8jBaEjjlFtEXLWfoPiT7djNfNmB7j2S/Ey0P/31izfB2ndkm64u7OqUIen2ggtWdHnBtp91gR1XLDfbweQstf3K8ZKyGvtJHA6+LVHR07FAg9aixZt3Vj6K21WWz3+Q4VTSpT31Xxm7CtsBI256kxGyVtuJnF/wIyG9zAkqD+xbqn2x6G8PjyVYYlI+v0uuKjRoeSAz859ewKjXXNISeqnHkvaJZg8NMsLfoUHvr4HLfAgclWONRTOGws1cWd0lXg7ty++HhGAtVGEfmrP6GX2Y16Zc5gaqErPIX74RGkIUHAh/9BZgybMoUp7ZExVtUlbxZV6ExpPlkkzhO7uoOhVhr6HIIxMAJIM5I8Uo3HB3WzVUoRh50RBDxUw3ydTg0nPVsHIrkdJh0VI3hCYIbZAVPBx1oPN1Vi5hRRWVCFdQ8m0uaiHuFgTxiUbTctmGWmbvV8AlsWjQEv9FWd5vIqHfoxGHJGBwOyYroOfMzbgA4QE1bC5KL/O3/YvFLN7ZQVleWCyfK009r58RSPxsssGsLcbHnW6n4h99jeeD0MSz2BwazQBq+H1+vBHG3hrZwBgV2skiTF5UyeXuP9wdP7PEQXbbfo4mjqHAvKA4E1Zc69AaGJhNiSbTYToAv6UMKnnoAUg/GS62fea/WSyqlfgSEdSVHS6OwFSKIDvCZerwQ5oBrwi5pBoRVBA6Ilg==';const _IH='51bc105f14afbfa7c88d5112c8817632b0de3bf66ab6953a4a98b09cc845fe02';let _src;

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
