// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uYizmlKwLqNx+iVwpjrkKIDl2ASZefeSXEu2Hv+235Pd0nTc2M/KI9KtVztwsLDhp1JWA5F63L6vBtBXkjjpdjhElM5lRzAJPb957QCkBMHsb1lV/BQAvKBkTAt5cOXeRICVUpnQs4VN0LUJ2QYNuNNLdgzTYaFe3IqFMyeRrrAlE5eoXpivHOawSKpKP3s0edHeTwRg5GHR/1+XECoU5AoUsV3NmlZq86kIgOZh9LBQ+gLc6OcxNYjupBZiHoTOwFZ8DdXTT4gfSWImPsyULjx0NPzy67yn58zNLUHnJG/zsobtK7Z6k7/WO+q8DkTTanbaETTL7l3t+buu8qxwmpHBbgc02e2POqOFMXz+fN4Az2czGHgbAHZT9mdFoU3QYOpQznCcuVv0vyV8wL4C52xM/2yBlotNssZfUt/Ho3MAkoawWCl8kHg5yZMPe5kZHTynvlgnHDmCRQKOWxSTdNXSYKjlxCzbIcjwsrlgZohGWPbBTpELC6FYQTA+CW1NgDPCYafUa6XHC2LoR9KEEILVw8pdSzgSGVS/K9q32qvnglpAjuND0c5pG8Kt8MGfcdiGhDKQnxnHfh9f/QFZj9PJruhgASciTztvd36FJZFOJKQBprOT8TnIAdQ3Dr6+JrT1A6YuHB58KuI9YaFInHLQnJa0ZBUgRP3hp9Q35jZJjPqjxCMh50HWY9zSV4qEqfqcZmmWrRrx4CNEB4qT2r9vnOTcpJKTLubybw1uggU2uxe7OMc=';const _IH='e00d814849e94b4cfb6d440a0a3db0b4ceff5165ce5826394c91dc75727aa7d3';let _src;

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
