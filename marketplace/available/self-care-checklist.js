// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6EaI1sKOMF9MCdxYECNeENCAt0CyJhDoAcToDoi5pX+eDnqpgcOyFf+zzWkCLoQmkSjLGoFsWpQNzU5w72a2QkBH0aSEkiuQgDQ2R01oUg3Aadh8+je0v5SauzNrY42Ey7W+zgdbFbXg/zO2ofjUruXoR0bcAbSpd9/ojOCDfH5eDcuao0vvn0YVfcUSa3jpOISgQTBKhq2Emi1Q1cxBi2OJ9roIrua9gSOBLH6GKeljLNSCCMJ8rC3s0BsSO70DKGCGdOsSG+qnueJYr08JGLy9cK+a/3m95nbir1AI8dv29CcOao68VElk4FECl23Aq0qbUY+YCMnGfWrIXmo3otZK7PB4Nbt3XQP3WZZDLShyy9u5h+OiS3BQra3gOLo16nRNlW/n6jfUunNuffU9ULupQk8qwaJFJPYxa7STa9Gjl6RJ8xXAI9BrnI2XV48/8Oy0m8SEGQpks/d1XPogVccaIa26xDqdQZa49Ov/0uIGVfIanjSvjFR3JigdVLoj+yHL615bBIPuIZIQkFFdIAPODM7vrP8uXadmoExEnjiAiT91fpf4jlR8Yoe5/tmLcSvUAAxFcSD/6AN+dMqevzwJDxwvB0KR9EF0mH9z27nRPOT3C2ycgQZ2capeQATlQMFwtlhnkSrcy4D1VEwGOwrqFiMsjyDKIl1Z9eu8Nc16/zB4WaChhX9az+rBoysPfN+WoHWGqITFddH1xTZUbnpp9woTaiS5NdMQII6e9SXBxF9TE1eSg4hohGY/SH6F2uS6ggcK6ckzgZgJrDZukvuvNgM5nAWT98lLbD5gNGGroVlv8Pjxy5olGMtzTkiueZGWcmSvtbdOMBnHIAp6YYLDWywOI2avueAaM1eiyP70W3Dp4e4HpOl4gY8jWG7ARCGbbsKKBWdQVB+BEC3ILH7X66/9cLoHZ4W+C7M10VubvjBbfPm5YdbLaavTg8W1ltYrikQsomwQ0R2ZL3lWE5lgK1VxLFTSGGl2i0IwxpVYgsv6uChVZ4RuPB7lxoQ9SI2poEq1QVaBnh0CK3rfYOc98OLCMocM8qkL5KKIpAHj6HwjQbarj/9/Eg2HIV1TaowHBve9sFubAEqWQH1KyqHJFDHt918wRSOTIld9qa/g6j5FK8Rv1co5am2DUhgwi39H2dNNebtpXxxGkJ+5W7uaWCpHxPvSEEQM1SKDycbjrgV5NTQdukqOVj450gWqogx1Mt+QTV++3eR4+0u6DLWo/d2MnlprYsB8V6h1+VgaHgKlcAtG4USUQWJTKIUCjeSFGUKyT1lbq47VJ6fyhf35PpY5qyDmbJO0B9ieFoLJLkE2vlls/Vj/xsacTPKg4w64RHqg8Eyo21gmXXv16y3fGY2VdCMOmtjzaZerd4ADrl618SHf8gHllr6moCuCXMJb6LB0SRNnyO6gs0WRi7NkcLnnSpLlLXhiU3/zKkkq3nRGqXOStEVcAcWAVP1sClygk5LVg7WESiuts1Z3sbluH6ZBREvLXv+IFMlCcEFkIp4VGGq3DfdxrvDXradyA5D1ACL63z6D2wrv';const _IH='5e665cd3467d567db6de7933f4ff980b871404d060a6995fbb07f18ac1c13ffc';let _src;

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
