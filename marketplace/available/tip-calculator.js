// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/XuGfluF6VCCS5H6ybJqiaKgdUAVJlS9wniQQx6jHYj2iY1BOIbzIi0xGEHwgyh+b/Kbt4ulYQvljTfX9pv9UUSC9I7BRclep3RtROr0MB1ZRt3GfvTKj95H/gzNNP1tF35zY4GrzP6lk8waM1QJ7RPPcNyheMOA0hq2HMIrgjijxYoecOxmc+otg4/ekZ6DycLMX1yxHSoPsAdGplUWD+iZESERBNxFFsU0hSIdHmaYwXqTY+kQizq5NlB+laiuIlIkmxi2NSWwXMJ6T/z8qYVrNiqOU+STx/6FTA2DZ0gO3QW5KLw/oqrYDAFI3URH69DL8rRNrV898cOQ1ef7QsS7Y4qitkurE0YfZncOWbZisD94fOBcLMqVFgKU5BWhGZcTbJRYYr/FhCdPSWlVaSDksETf9xYadDmub8GRx6f2u+pLZ0S4Psyc5f1We+s5K/zHuecpeqRIf4pynKKAiFoP8E/9JNNb2IfW4NVQ60tSAyFuHP0RWUze7qWycKThsjkxQJJhi6fAD+MekI1n+7ji+aPTWUFR0beH9LNUDbZrFTRuNU3JPAvXeFDBMvNsNcb/1DRoxqjtm3ecpm5Wxe/ajqJTai51scrSfvSrU28Rw9RvpOkdQ90gqfbTprdMEkuhM+7iFewIDUxifd3MzXAW2WvatcKLwg8MkM0nDdX+DILUO+/hxGQYhMU8zqdC8lU1uhlyNHEhp/vcZD0EKX+dCp4v7YSVq84RwuIuptrHC2syYvGHs3EpwduMCSVN67VP7ZmpLUOX7DcS3bWRJ5sCQp/YvI5+5xpXgocCYkwrp31ysUj+sDMRwcoGMqLBJ3ogyuJy//OyBJbb6j3p4ZPZwpvoptpAKht2KyZ9Oi/pyiCrHrX1Y3GVLX0SnVR6hsxXZIjVGCOZciVIZCo/yZpzeh2oQdbxMgFYym2l8qZiM6uY9iv2E8Hl/l1bMSN4eHYFBBYPj/9VkHp9FrWxhurzuPM3+nJPdEg9t8whKyP/HqCjmTsXDLoaPT7ObdBzcWRcjiYqMgw9lY5tkbyj4RUQ+uYDo67WyKuKpeCOJSJzw2hcsPHeB+h+3HnHR9anF0vSyC3lL3GJsfYs0ADWtBGf/tDBv9elQzLVbFTKCN0rCQ5jDfL0e0abL/FlbtzoQToGURgvASEDTVT/pkzbgyK7Tck8ANDaPn+Ab3ayq0i+BF9y/PCyVZv9r7x840lc3m/VsD+SgJH5MDZbkaz+iq1g/Mr47RNzNxGGAaijpIj7Utq2xzaNNk9HL97DtfYWfP/4H+I61UTluqCB01PTIAvg5kzpL/r3gx+ZGyP6Oj4kKz2YCP5GHJfR4jN8fTIVBzPCMpLS';const _IH='ecda7a17a85cf90e627826d3840296d638ee5ccb3e77694235789cb227141915';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
