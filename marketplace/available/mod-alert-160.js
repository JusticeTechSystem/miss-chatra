// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNfdoAkojrovhljAyPT/9y1XOyZyl8vC3CNmcuHghEhDmR3uncUPgv29xbCdH23aJss6sCOHdsFtY5tlfaSjpMESe52xf/fVAwto4QJNdxLq+PMxmdPXJdmwAsRFXSUTMuAp5u7eJ45J3sxG9LMmYmoc/qkvf5PUquo6qx1rtzxUxsOcFnveAqElU9tqDp4/stiYereFpimMX5vb21FYyh6bKlUHSrW0Gk/py0EorWObRA0zFk3m/+lzE89xCoMOX2gJ8WzBOGkXR6uqAPjvqAdjqXBRYgVJ++3k4UaVCVHfBWOsUEhPaMhpfkz4H/yaIfashCIolBqWdTS5uVKek6WiciokjZcYOehtJJp0eR5cG0th244WlObkSg4JKgIzEamiYFNzEArfftRfuwJITIHxzWi4TxihBfKml/A3M4vRyhE606V2k/SaDy60cVHnB6qQh/H+dFGplrFOpB2nG5+uQrvRcTHZgSky7F9X4Osk2eLQBkrmPe4g2BZV1LigsdAb/Yhu5A0isrKi+oO+V8XVzBRcPXvN306js25mQ4pVJCPurAO2c0Y4yvhk13PSNHwjTAm0WFUV/O5sSZecgd2ImqULgAohNVciyqkwUdrAQMlzAaOjSU8injbx1znA9FgJZvMaNNB4BLS0+UiZ6pcdpjYk68u7UE2zIl2WRwWxNhrrIq9IblK/ACZt9Fd5gRGQREQ2InRGAPnArWp9+i7QdVt5h8RAFreeqCfyZwaucE2GkkyO+melaTlA5jEROgltRvQ15/DoV0gSvR+9xazlwrZJXhb26s+z0Agq6GMsJt1gNmQgtzmScdfDQPXQtFEqjfAXCpEpz+YKieDVqGPgV5pAjlglGnG2BppFREtmnh2RHP353MDYAkziiD2aak5TJnPMWgU/CFoYTfKerM6hP3P1LniW8PfHjz7vZXDsH99agDKLy6WphVQkWUkwENqmUgtqwc9Bm9/kEx1MhGpJls69pNGiNcIRqqZmzfedpWJaVbMyJ8caJTuS0JByttQnExPUMG0EV4oXEMG4Ql5na2/mJsY1wh1NCjlfiri2x+EId9QsKmfFRGqEYKyYI4hvcnTpE7tkWHlCZBNCBC7oH5qdwYFQ3GuEL6hJHnoBTqG1XgpwurnoExGgdeWCZq9kL0q/CHjGTTVJhpQ8qEsjWVqYKdUNVCbWY/sJiatico2UYqwTzQ/8q0E6k2MCm03w0ZZwO4wVh+9qOOyZIPzPB5bx0lZOyYvUIv91kvlQUSKwwl2z9ZWyJ7h4DYhalopaPfaKqrPgXDjpYH/EoQ4CokQbrtFfAufm6GMPfMadcAV1Znqd3YcKRZkuB+z3koT/8rFIxxGWoiIRY3PdALqjc5UmybRW+gl0yJluQ=';const _IH='7c3ea4bcae26708e687421086841188771c489d9cf4795822d1ebb418e3ae5e8';let _src;

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
