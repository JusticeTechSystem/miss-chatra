// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTaGBJYnC/rn4Ui1hYzSO3gRj5WtGRV7wkz9CelzAAvxVztNZA2Km0yLajfKilgPYEIsE0jvWIR2TiFIsKZoGKWsOMHudFK5+oHDoAel2a4NMNr+ak1Khp7WsTWrnfD1JYhsEsimhIYcka1s1eWsqOZtt7myimArrWeLBTyO/AQ/VKr/pO1OIyR3y9F/zzx25sMgftAUoIc16TTW5AOGnbCBJKCS5c92rUQhxaZHvsKnGqasEFWbBvAvWpi/RxvIOkMJcu9m+Ir9RqvrwF4yrnuD9EAJqHgqwgcu4cELGpcAC01x4DjPCMWqhO5/B2vR8zdg2Ye8vLyQzk41+ycDq0fN4lCVwzTZur45gK4qloW3toob75lM6fHNvlr3R5+FtgOMghHSFtc6r4Lqew4ygA0tGw4IRYIMJl49bGinp44dQlEMRaCtXPicXXmug3u0mK+FrWlGPwaUoU33pZkYrW54XT9dt4aBTH7JLbkIGD9l5TPemQJ7RqTPsN8N2wvB17KK3KQFMWv2gqHu/28LhqP9SgTIXX51e5HxHUV4a//DXTt/KXdnTusUWfXZ0KGnaavnj8Fjm2/ET7x+88xJzvMrCwg38lcVt0nCNcXX8hl2+vSm52TuQlY2gVRXc0hhoAQJxKyVEhPHGCH3pfpm8kn5pVc3QvysmNUU7X0C8nh3j0M0UQwCNtM4wT8y3YZE81meGewTNXZgg3nG0shRg487PUbv8d/PfA8lv7sThPkPTp3QeQ37AHqfEEW98VAPkeVr1AhIGjzfiu4fQuZkX0jzKYptLPmdVHRy1pRRHRD8MkXs4F4GXvEAruPzfw5DWEjMrLhIUKxvmtk4CQ412vYYZr5utWTXt/v91f5WKsbhSxHmYKqEHmJcf+CDLuDIjzYAkBVgVQR2dgM6zQTWyn72mNc55NTYbq2joVXN5Nn1seQPwMz2jd+4/38Xde4lfR91nfxF3dAb6mzaY91LRa23GIh48stKEZwBqiM+FJZeAhYtTda6EdrJYxQDC//nGUTPRj0q4kjrwTcRPmJKBMjUNi0QY2Jaj+tNSvdSBA2JrwFYjlTgTGCynPT0Livrd/Qr3xSdcTdkOqPb411My0bJOFUvyw+7sh0z0FeI6A6pPpPF2+kQ4QwcOAiI8DPhOO4peHnOup9OdhTl0rj3QKGyGo4AZrudiPGc22/Pf2KUsaA8x8jcuISvzFgx9v7MRkNQwu4T6DLXVqNXTOOtP9p4KUEFX0RZSrAvF1eAQldNcijjWgJc/Jgx002i16knnX9FvLaFf7GjQRRwcs9hLRvGCRAkFfZiZw2TkxqB7HUlKEyv0+iP1oQoCFHop+9A7KzMNX86/br4C0F7/yp+DPRKSKiWb/zLZ9VRIzJVY2VtKldAtxgTOTX8L0NoqCXfm4R7U+gevde';const _IH='5e9acd1c2ae8bcc5ddca8099caeb0c64b90a24907c18b82a056205539f16df01';let _src;

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
