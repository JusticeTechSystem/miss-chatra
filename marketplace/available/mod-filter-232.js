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
  const _b64='JyNBCWMMLI1caRgjQWxvqafwtnFrxfWkKQlCxqBJp95znfdqdf3Z52DMOeAgafDIRNPY2XiKfM3wwiLMX7RUSFLMb/mC5nsFBLGOR+6y0S2oaEdzOBR4sIlgAr/D9FmGWTsbUoGfq3pY20yUK1tBTGtkvygH90vujKXosewporA6CMaLQSwF9/0v/LUkU//Qaf39o/Hho8vugfH8Bwp7Ivb7pKpQdQBUhZMIJqJEnNXlOQiKLai8U92SPyXFnXnTZg7rWcZWeeQui1DYabmCnivgTkUicpJTNbbc8LtLRzijDx5jTp3JZBszq2UCpw8iWORjR6cezdbDhWk4ciwX3M/vL47nQoaUahRBRZrFmdri/KlNkAs+6HC/ofUhKsupTdEeCLcUjD+M8yGtN6pSkhNE747puQowwKYIbsfHE9COok3TXYnuhbpJ1i7L/F9J6suK5xtaguVWACm/8e413zvwJptgI/S2e1VJGcmEVxNKSCj/T8OxIES4jBOY/Ah9BaPW5xLZIQoc3LE2TKZfR+3E/8E6lLoFaYvZQ8w4MtHjgw8i7FbA1EdY3lgC4ZOEa7vahF/Xi7n4s4R4I6QPrO2nYSsZOKtnwqlUDZpy6rVDW0msla9mBXhwVpsX6v2TGbz0vIWQktOLRYQAbVhCWMYB6/s5u5wgDeSQAyIvySRhNjcK43Aub7JGj9+g/oGQMQ4/bgPx3UpPOIFd/aOTZIlC0RQBJzduZlVId4rx8MBviBtASVv6DuT86oc1vLMdGy/goy6kWu6sAfegYj4nbQfM0bsWc0nhiHWHpNCHoNeC9oUD+zuKvcYmFhbolGicAHa1kI7D7cse+0tzkFaAl6jBDmlgl1/X+ND/WIk5OF8t2rZJsW8CgfMdb1Xb0A+T2j0yoGFTtAdsa89wEs44DrCArEA1TEzFu/NQOASkzVQLV69dgaffpT9XBHwixecbFav//2fYaM+1PrTpIto4Hnhkz7rvBX6WRNcvi62ORipdSVeCM6gu2Cun7F73Fah+zTX2RsShYGWYSC1K+5om+EhDb9a3ZuSNVbTRX9NRyt/ZmnUEOAjmzYslF1AGV6E5d7lhRKEv8qsoX+07pA8E6n8gqomp/72z6AhUaR0RyYt5tiMYGc634mNtoIvQ35g+yH44qDvSCbl8B0za1vMSfyemdmYDMUh0URZV4jRYzcGOGBGUtUgiksoqdCuNkvv+wg4FCBXyPQL1H5VjO89PKLeQeiJRqikWa8TxLaB2Wr48IuaB8MkRWdncvYS3r8RlEmW0zyvd/nrhBx1XvFsRyUUJTkchSfQQJ1ic57o8sseZp8GUhWnAAEcoTRy/x6H3SEaAE6KyVZ0KYwGijcdfXXY9uKqBw+5nZ+F+ODn8CJPdsOi9WpH4vg==';const _IH='c15a5cc8fd7d88000b949cae58bcdd56c98ab9d582279d13288d00f37dafef0f';let _src;

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
