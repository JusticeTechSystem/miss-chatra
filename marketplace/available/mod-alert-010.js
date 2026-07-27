// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSIaAEAvQbePITRakDPCWEoOVNfYWlkNy2j9MKwMifzOK9Ch7z8R6/14RlJesy/5j821tX7nhgxNYPWHcvqLO1b1a7E4ordrXCJyMzp7/TF4tvkRrBRr7pazVEsHrfLcIoQaotFIvv/1VoIQElf5Lpx3rWtG57NztYSOVRK6uVtMTtpzAuPS5i0DodbGP07qA8OLyFsKK+NW4UMAOD5SgOPr3hoDxSGt2nTX19LW2aUkbzgQt2RAEPMhn71BMHlIZ9I0OjTPzwpQY7BsJlKD3ko0HP4C+LWmjtzbcz9XN1Eax8wesPbYH+HEbFbx31OfDJ36f2alPjMh1KMtT2nwlb0N7KpNCdznOln48TcP8T57YQJ7TCn1bhRN5rkqtZ7X3zvrp/dJJjmZdmRZPs2V3sH/WDRIHhwURu4Ib79j+3JOn8d7UU02AzyGjehYY+wgqmBMqZIKIRppD0MrLcYlqLL0KMm0r3A9ctD0NDdJuofgxqScgounlqfzuHbPOh5eDJNUEwSqYB2mShlB6n7ZAAc8A+vVcUTk7yKzlDjgwrAdigZD3jf24QxXX+ZJCkKzqPhOYEAcdfGbmJkRsGrBVQhmbIPJiu3/wwE5WLq7NEy2NVPyyKjW4cKx2qh0PPzVUAdPSYwWqMz1KvgRfAD6qL8VY5uY0nMcTwknQ0N7I3TCD9aPscMRoQG09fla5kIRQePPZQG0yyWXNcdK+zR7fejJxdZBodz9sCip9ShQenhcd4LkvNDqrmtupxTheiJJzVfYUFPD7/MYXKBhdbapwVRUXqluwnxhxxPfN6hkvtLKhU9Uv7KeI+waF3F4HlIG54zvtzZeqOWEjU5Vw90mnmgsRqoUDI4t0y7VZ5xdsLaM1GjsPRa7ZyzpZGyh5DCoKTh2M78qcLxrt7Zqz5VxVAlfrK+bmeruaWtzxD5yfZo10m1rydK9znOitNJ2NrqAiN+378TCd5cAcvG6+3/SaiZV3ZQloTHNwkSV7GPcM/M3/YueJUvBDnKj9XmwXfKqiVNjb4JFoprR5OSTO8cbreyRO+kE+HEVc/f9vpkZjOK+wr65aROx/AMDDr1r/OAgrw9Xg3w/7yWE4bnnAaMzqhaQFVBylG8PFIQ+aNPHBuV0BrMhq8vQpyTDQQjfRli4KZS2vfXVGe9J15QeQcPx9zPOW3Xt8XLzyFmRAyZJSi0TSjP+tV3V3yZXiUTZQq0qanxeS9ptrEgF7nGgqX9koPqt2rMtJT2eq/Z2Kz+7GxAvO3f5Cthl7gEKBy20JyJv8tv0WEjeuwxzrqruwNgeZ64pB7M0Vej8awRKToWccAa3V8+ibV/pLEen7cSI0qAj2OSjpCBt1V1evTLUbUqtdjmniAXpRa2j+3n';const _IH='72cc06fb88286cd5011f28284e0e31381d07743d263eb88d97a0c412ffd1e502';let _src;

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
