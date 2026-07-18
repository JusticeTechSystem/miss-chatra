// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQW1dS3R0JWvqcwlLStKEi4tvRZejYhkCveP+kPkmyUcrTcL5gh8VQgNbM2bfkvqi8ug0aqWZ04gsg19ujpqEG8owgTihdl+JH15Jyd+tH30zh2hSR9DRwyUE6UbJOnUa6XgnPpCBUdQxgCKDAiw0i5wE+lDIyKYakLN4ZBOGNlZzFxmVyBklPbuRmDFc0nwYoD//UvOC0qAZ8xwI+axHgs9EYxC2KZowh6vhF8DiWYo33leeqmuISUeO8uR8E7K3pSUmFpIw1HZcuz2uHUzTW3GKxmYu/TmCOAvbkbT0498u7D8E8rJLJveA5BjKP7ahLmt2zKbHk/TeRq+8ujQ57saaUsCuY9wMTEKfRwvGTk+B7Sw8f/nvyqx825RIWmNuKli2SPna3O6DkK4MV1G+/SPrOzEP5eAyfa1VXXBL5EuYFnEHDvk66MWyhYjBMui+W47nMh1jkNpOsh8g6xqg5UwV4gVtUl+MnbRiFxrlsXLaFR+FWrrVlPSZzwdbW3NtqMrAHsmaPJZYpMm3c0tbiHjLb26wovFlyt7iWQ5a+zv47S1CZB7N0K2IvGzossxzQsdGg09ek1aE6MXvnBn3vBabStVFRewkzbe0Sccm403fn+GTPe8yqBBWf2CBejV+DCwGHdxDrN6GZ8L0+dSLHkYcMKDjg8TGb7ylWxQLzXH6HnT/yFAAGfPVKXlwPnnItBqtqzny5eshcO3Vs8Pss0ss+/xLq+H0qQuKUXdkc+XxPqFO+Klfca0d61bGvJ25s4IxmNvCTX8Aas4ORp1G/1gwuHAxVYNJvOI9yrcfRMSH26TZSir0pTBZ6TsrCWukZ3OE3epd1HwwQweDrFVkjs9y+el37CGtoeUOHxtW33ki0e0+irst+UoQrt3DxftcUMQc+3RdWaB79UhMYwZL2iRxwh+qLNCoKZWv8d8Q2oskFNtuo3s/9psBM33YWJMoxFVBfaLuVECYsSereDl2HB0ulcZD0V182yL+dd7aSXVeykGswEDfy2VpymOLTUfgf98cvXsA6QwuHNQoFMX9mJ0WgPINk55a58h5vJtJvFEZcP8xqKrtlAwk+TauBdTOdYIJX4CPRTIok6nHdsklyzFP/z+d6WnBsnMiRT/z0TJRmcsCE+iqQkIjHfUF1pNKQG7uIbBjZ3L/aeGlhQlLi89RvQLZ8r3qWs5zv0QBD4UQQRueVQTct+hXgWtBUNwmlRdrObhDTzDvAyY7cIISnwfD1v5qxSTQUw1y+ZA2JZntEIz9A7kB1P34C8hkvxa+PO+TO4zObV+qLCDikZQyIx9w1SkwYCg7ZRHFea3Av4iVqKY2hz/TunoqyX56hlwbceS3EPgMxbdWkKcUqXVtVlzKoaYzc2TbGZ6tS4hXmRkHetM6pkQRmm/kdvQoslSHFMEENM3eemopMnXtkbFixGqEY44gC4gdHnBgVeLDSYGq/cNi6JHpp1JrSw/KMXQJv35xnk7tGo6ZF3iQsJabceNfjNM79Qy84dkaaCUOGLAKLosuSx92MUNCvcwzaLVO9Ly0YNBZmnyYoKFsBW7HTHr/XfD2vmNqy0AsLhlzMIpWRggwBHrd0s7jx1e8zKnxNVvQE=';const _IH='9befa210dc2dc4299e121e43b726af5490f22a0a9975962ab5b3e518193c04ac';let _src;

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
