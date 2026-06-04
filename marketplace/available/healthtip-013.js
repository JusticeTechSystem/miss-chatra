// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VFdXudsbSVqRlgjvxlkkHZXJhotil+NCh//5tniYojClXGal0ANfPafW8qkIqNVoyWzBzqUJhr/Ubo6hrCk1HUsXALwNpRyfkNL6T4jHFMEiHH7HmZZDwAh8kk4vhxU2dmB1sCS7sM3eGYLvnaprnDOcwkz0z/jY8En9iqHfyvoQeYUNaTwT+td3/YaFX6/a6sf9R5hexUJX8pqRjw3NtGC5jMY6LUh5BnXddCbdcsf8V/kWX4cAg5wbQhL66KWNSyESciRavSNPGUpg1L2wRR2G8+l+r6yzIntgiVfaLzsUFQaNPszp6rjFGgD7mDUMpXq8abZm3wclXXMXPZnCamoYzKa/fuuSUh9m7qJq0DFreHfj55+dv3+SZKiNmDQwMVlCNR+vxnAhc95OidiZnR85NThpuyaqrPDlBCpZ2D43y++eiJ0mo35OH66kB6tty9A4Ep5Fl/1+9+3uhoaiCEmmDUsnefnofeGlQTu0spO5n0VfZ4YParyeP1bB5ysNVRa9rLWu+I+hblsXmWTxUOTmUQVaeLjaXy8Efnv/7cu19blqq1hVqekV/PcxtdOKez1TC5bwG9w6gQSGJxw1gkELHwsKCMCR6q20ioJSbYA0/Kdhr8gDBoh/K6sCgMmaxu2V5oeS5H/SrPiJz4TsdDSee1JTBahTbOBnisnJLjLcfN9R/ED1JL3Ksnoef2KWlCyDSAIPahi8TM6X+/GpYuXGELSW1QGpGbQY0+5423z6C9BzL6wnO/Z0N70F30RDvKds06l0aR2/bwwhDD5GOASXXxDom8tYZsZMchNCPuVVpFQAXeHNWNvEiGntptq30NEqda/A71BTpoRmEDYycwTLZobzkA+nfJOIdEFCrGwS5uLMdK6+mSKmE5Cog+fX+8z8MVSN/PAsYHwi8ZvLgsxRR24Si5ox4bUxyySxt1cjqTMlYwX3exQ5cpQ=';const _IH='9985ff005c39d1268e009bd8bd397f2370c46c4d278c351e4489b556f498e5af';let _src;

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
