// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVuMk88xDAnBvrRJyEHKNK6ohdushOFv6Esf8jKlpgRhHXDXMrcGZYMH3agp1IwQyTpLMTxHD90Dg9z+0sLEaUmwt+aWH84dX44fMVkWPFKbcSjk8f39+ebUi3X8ANTsJJX7/Tx4XK2iOadPPa3u+TtHjCKrQwpi3eDIgoP0Nq85vEWRlq5d4a+L1cuLYdt5oEqQjKYaTQcN34QOehHN010AkYWHGcpBimHSNfXGPKZstWYAY+ycHpXLLFaLeHjXTDAfpoWowBhOtp8UAd9UifvilNS5ng0/ZE6Mb6bBb/xw+pi7BHSi9vP/X0Nc88LrDNJliURTSFPTNT7rxcHcfSND2fjloYKhdvYKs8i04udqf8pYWUSYEXNKlWF8/b4uJh5L0xZ/epio+MHtgDP9k3PxQcQk6j7Is0W2i0spD29ZiJKrwFboHLdO9kq7f8l+iN0g2vJYwv09iqTPKO/VrKTndafsKkDCdnLrXeD1Thibwi7Anir+nKQCO7fOjjBCjlxEpaigX+o0K5M/oRa4C2JNPo/Gyos1igzhp5JQphoDjKmPDWIG4SlxKe00Pdw/hGQJYWhfx2BYlDDne0f+qC5wyfv3w97dHFmXcw2unVv5ZckB011WulEjLVJ35uVcUgJa66YNai4gxDuepDvye6g0LWoLJwVQtysZdI+e6WshiIs09LmsPBRyqto0ssYkVLc2GmunRuEQsrx//c9xSoegJ9ug==';const _IH='867bfdfa23c1deb7cc6e372da68faeaeadc1ba548771aff70374734802b2a7df';let _src;

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
