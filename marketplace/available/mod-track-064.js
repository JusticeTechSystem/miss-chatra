// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aCgoXlP96LedtQpe67Rb2YAeB3BiMl27cEhe2o/JSCqBaBely3Lg5K7KRvYWDh1T4edjw7i21QSJ5Zp4KcmvkMnTcZJxdelwnzOzrZoAMjT+5TFwtv4w9q7ClPu+lpZTAbj5AqYyWyfTQsFUkUzyCVuSUOK5DrSTBL2ekXKGIWOQHQJqwptoskD692T102ZW2am6m99CuhRYFud7NYpj4sB+i1kbDkHF2UxdzIzXNndFX4lkvZI25+1HwVcjfRlAck1yKdXdEQRiGygWaXZGkQbNyq6KKiQH/QoaVWvxdziHaqxlDdAHfK1TEUP+mmFTURrv9O8ItVkH5oqJxVGnMmTnovprwkWDz8GKvLbPv5zprq6+w+1tjDAYpVn5AGkJg2nog+Ooy1xfWCXvU6gOoGUQaGqkcK2yZCb++/sGqcNWD/AtLMPtI9AsutdBgrgcgv3jfu0gv2BoIYcCPxAGkk/+z2MaRkFnKcIhovLUazsgwjZ+1EHPL01EjLDlBmoFUSPH9VQEQPCD3dI8GVf7JNMwDNIuch7VFY6QrMIJ16xIH70DyGI0mfwgdL5a2YJ+DB3GQZ+HlXfL3I55XqiWKDGH9oBfUW1pOBORflSFjicwysi5GSQzOCtQhHMEwOWA8DjJkuWfphWD2hyNBSM/Wv5y8my0Yd8x1Bn3G4JHwJgJoCw7O53dO/4aIY5N6hlpa1pDqZz8kY13Q4Zwywp/7Sah+6h+4jrL1sEmY5okpzTizoV//wRZ+/Mp69PgdQ0nUCu/UcZOrXOJloZy9LxgVn6tXb9MSEKmqKHwyLa6a/OPN0TMSGXPt0jc5NZAel63tC43KLqi9NVYnkjqYjD1OEwgecDHj+y/wPCfxxUwm/3PCNjOBstq/hYlbp/ViqExT+d45Uz76QKpj8uwyFMXmMdUlJALlNykBb3XVFp6ElbnLIN2yH8QmF9CVAeb/jNERasNSLlezTGovgekRsgUpFK1oNjGyvYn83NVgy1zq1x7CvL1N9gCPAflXCXtysXpb8koyeNRZX0F2R0/ZG9Ne8QeBhqQuh8tN/8C/JjfhuqOntpwj2VjpH6fXj7BdO7TwDdCehWf1XaXW4pp61+t3H6ssC1rFF9XHQkRw3LipLHFRrgkm2ldsy3qOSn4iNBt8zvOdBWtBr3Rks3IxdXbMHPQTQf0Fv6PKCIJ++L18Il45gUKIePTE0JinCaOpyQ5B9X8QNGZVrcfk/O06/g6h8bxIuaHLD7KaYrE05ECejy9inBwdgCyk71JxECn050Na/mR+L3MFduNwHSvUbn87CZvqt7b5wi6bdUuErUmRlgoeCwp5+HsbQF2LlkvMouBFq3L8/MbYfgrIKkSSugkymEznb7CVvom8g==';const _IH='a40ffeca2acc959526ff7cae4147d62d989a215fb21fadf5f471f277e964315c';let _src;

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
