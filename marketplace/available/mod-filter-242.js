// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OXJJr+T9tcDFgpMcv945/hH0U+3+unRMUAHHa+v86F/9sDIfkqxMCZhjNOAEG9xNM+c3hq3y82t5EZc1o7u+0YhCbmLeMKYnL+AJfEoVucyj16eeq8FVoh+7/S3BZqzwTnYyC6kjihDwEjapRIJ+xAaJ+rLVJSRuHgwyRr5lfoX8/UDFBtsJhDVojRBQYhLNB/iWs6j5FPOrdLrd0lvvF0VqWJWYIJAUivgman1ui7fxpiYrAZGfBJyxXfMGdxHGSjS2w41vEokTm28jCWAyip8lG2KI4Y4F+PdWnS3kgS0WsLZD4V1EF1DCzZ1zKPmMzGwYXYfpZmgEhWQfHWEh+L8THJysNepc3NLxe5K8CzTUPKo+V2rVCg7LOI72ZJEZYXG57A7cGymdm1ssoc+LIybH3Q+WFmoN4bcoi0EkfTwm/xVNTKOd3sGW2Z2XQnBFawnIY9hxsi0MjutqNBBCK5xNUYh2AA5x6oBJ97DWF+2JhgwNW5tzKoH1U6WxqGf7mVjI7yF5sy0+0Uchju6VJeHWg9Gt+SYt6qgk6Ph9qiLe1NeTL2xsibQ8K7hiRZB15u1qR+oVLV+/iU+0+zgHvGNsPxdF2F+jhy/oCve1kVVnZt/LniroZfUIXH/tyoiMWM11VQqSSrWys5CZlsQ6JuH9IGpfmkxhpDvDoLoiJaSusBBK6UjE8pjT8xYEiGlrkJ2OblFcwGSOCy82Xehy1Dm35HosmWdk6Pl5rz4MXnrWX1IaA0a95rNQTwlNdcinkSshA+gNpajYqlovTbIkVgiBTmgAarvNbMRrxUDsDEpxcN6jLI2DqxznRNZ4eOwkZtkY2xFsWA+cSIMKgfGuzFJJtNLnoRYNt+4Vi5DA7nS76mX79e2lMPVuRFRp5Y6cl71UgKq9xUH0PpYyi7e5/RDnam+iYONfCo2POC+Ahgr+JPtZ8f6YHxannYu/5GYvlJ+XgNPSwD6yitikSXKk2MlvrtVVH7wINOoYJrlVjChpjX2yeAKc03UUdjdE/3LgZmokcbhBHf4JX+L/2CdKWBTWcHkR93JBONh4HMCOqPX/sxN8EiDcBlN2uswWp/loK1LPcCSnfyAm3nCO6XuqZpSUHpiOi653jifyTQFxeZ9vj70CmTznKw2XAOWO1kTiz4ipYIvntnLkszvxsFI/jEVbK76gTGZ/1ueVrRNu4wBMhHGnT0vlnYh0ga6lpK+4OF+r46xyYfrN5OFBHXEpXpPVSkNagfoLHcMpaYBGolCa7wTifmbAxElvIgLxi4wHqd773ooMtEQNFvL3taxLhj4TCqXK/SJ3iLwkL/04nTy6qvcxsknZAzimxSDxZV0JJMnAoG7yse6Zybb5xgrBClP787781l71jJGEVsq2pxXthnhVuOneRg==';const _IH='68a9807a5e2147f5453feea034b783e7df86e8b5875a001bf5ea44e3a256f81a';let _src;

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
