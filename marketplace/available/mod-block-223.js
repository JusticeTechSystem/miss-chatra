// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3xA2ldNjPk2QvVgAumVp5/F3PgVNTP3JWpIqMmaQ0c8HdIW90bCvhINbTpDcOczcs5xf3WX9X7gpRC781qrF6euQsJQVPm0ZKY66AohsifW2MKY9IJ1DG+x8lmX+nT/6gFoRZ/JuZmmk6CIk4c2vt624weLogOIMr1awctdInjgkj8bgTk1uda0cQe0JQHaIzg7Yu8MDCky4rbYvKGtQyJfy19mJ8W4FsHRcGbzoP1ryGW+nYz4bsgaV9eoxPK6n9KAxDnKNleH8/e6vtndY5J6sYZSxGuDWS0a2qtcrLskzR7k1TkHOp7M9IQStrnm3lC0Zaci8ZtH9KBS6mnVjEjI1K2zYJaH6AiVuW95IDWmFN4a6DffBGb4Ktx29OBiCSwU8uOjm+gkM48H9ykrOlNLDjPXQ88hmPxHvaVL1G0NTC29TX2lmIOmT8POyLZMt2Jfg6MWFV7/n/T00VhgU32HmtEad/NXX/mnlm/NGarwWAihZOq89PRQUcY0eFa1pVS1DecesHS8oDdWafePt/yYgCJqG0Ve0xCL/aBs4jPKeeVnvC50D4xYDRP0cF6vMUttdtR70vqs2GWuAuaP82zP8G6RNmHZ3pYqGuQXV/oIqbmsoCxN2uLf4lB0WitHfVLuHwXcBak0E/xLaB8vLQOMSoFRmSm9e86bD3QnrIS37qdlZLsV7NNPSdp91XjlipDHGfKTzfFVtWHhHzM6B4SAIxtOtlF0LLvkOdgJuoFkBmMitlRbwTdrpM+EddWuMmy3fta+eTZcPEskwG5spoe7XYCgZQGj2+2ANOemQcQafzz1xZt8AZBKUSSlhAXvsvBF+VjyNq7bamhmTy5z+utaQ+JXT81gqifTi3syefvK807tJq6sm1Qy0t19IqWZy+1sIdXv65IbxpKsG+K2MTTOpik3Hu1oJ9VD2pxZ4CYIO10Drr70CioP79zgCnQ8XXBDoEdIrVbdOrfXyBnJf9mxDZmaCANUfJtBpnfY35NrTbYzi3hAGnGXVnE3dTyihKzDnkcnDUAdpOZFn+54klYvERszcSOvSLgiKUKZrUwv2VcZxG0RpV17HNr5QAyFB2BaPA/kcJWjjSnC6jyySw0zZB13zdoHRQuwPDvnRcpQZ7gLCTCfnToOV4OQjAie+L9QH70L6EC2A6QG+705H4ROsFsOnC0lG00a15Mgv+wC7PUZa7t9ppet0ojJR5bgM9c3b/7F7bjiIThjvYdtsz3gxPtY3pe72jEohATEDBW5dFI9T6ywvIRWh+i8WuB5+cmGKYBs2l5MGKTFe15sfZLjuAIOe5uU3yg+0pv69zpRe6tM2ac79SwVRldaVbz70kvQRJnHgbn6kyz8rl8Hy8OJV2bOJcpOCVWaXwS9kg==';const _IH='951bf7f46885d3d1695961030dd061b1c33a921bd47e7368aa65842cf0b2a68e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
