// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRd7xFlTHxhCP6CaHFCseaaFF2+1XMqWB73UBWitpvAlX5e295YweYaxaXSXQpkat/CN8nI97KbP5mbex4tdXHq/YlgOtE/TZ629uLHN+tIPNujitfpM5Jsdah+iPfJyklLzYgRgW4zII9nE+s31+Ey0KPR1dIAPMqhp/PlZWldAcbf5jGdva7ik093FHI5WXPJJCImoCBKanoUW7WiXrp428jBTTz1NLFMQ5ovwDHXQgn4YwMtUhuPs/isoh/k06bsVOB2tC+JpIy2NqQvCI8KESduG302vixxlvxlMHKqieluJ69x6jJz2q8BpxPV88sHoHSf3HJLQdXeEmCEkEfe4Zy9QEyKUnRG3WV/yX9JC7v8Pi3t4I2fC2lBe3XSmkqhQvAaecPY8vlIOIhQxoJV1Qv58rtPdptSalc2A3M+h0glObmHc5y6/c30loJEheRJlHTkRQyM2yWMGlVaOXhbVY8Xm//Kpq7aK9SLqiOwe+V9APBnylJsIKhSVydjU45xKNtwNV0oX2FmEUWZMAt56GP7duO+Pzmf8yVxusnHJ7B8rBMoW8J9ih7v7I4f3I51vXvIv3wEWeJPWNaDmiNgmfGIQhx6WnjiwLTIh4K/s+UZkYXEaciWuH18o/2t1jDWhI0kKTCBA6ZhCz469e0OXyKQ/1HgZcTY0KnRe5vQbBexPnWAC2XcaTXFLq7nzIqRoAPr4UVfA5buFQg03gbBXxx9qvw8a+IQ/VeYeEnCvggf4METHth9d7/qNetbHr6wCHZ3zXr3jzjTy1dUHIDKVXkznal9rCnp7IzK256MKG/yVXXh6cArHOAr3ufRVjJVpw6+5/xjRSWbRnvuRi1/62hBuzbqni9+G+xPlRtcCqB0cL5f+na9c/dQw9lZ7l855JlUVPOuQJi43dVEmjr6iyXLjhfhyB4bCTevGhsvP/2SWoLVLtl1X9ItuyoYbwIWQngWcEWaUtuQCdUUvL97kjjdV6hWgMkJxmSmLKdPXNFQpoaAqUNLKKG6JTSg84etDB+1HSmsxxgcuF8tc+C2KGjBITnmcptyCgJ+c99KU6FTrqRrdM/JTQC4fSYsXFlf1GYlK/CJaDkek7KMnaiwMyO2xBPRPNOmEUJ49+T9nah/KG+RFHxdVzGDrTTQvrlWYPHg/Ou6SdJtnwOXj3ZN4AKZOzB2/voRIHLBDi4ee6GarnbpU+Kj8DaQ1ofJvDJ7QrY5mCy8TgBE2QeWyBs4KpamAGLGj+0gzTp0kJs1leSVBOf9tYUwt/sbp1Mb/4Sm2WbB6CBPnJYPiYpNTyqmtEGLnp6qEY5osCEKENsmfVezlWLbSsbw7cRkMn2Al48LGR/1FuDP5Ke+qrxq2dAQCbnY+WOvsL/pEjpSk6c=';const _IH='b2a74d119f7e91443bc5346f6e18b9fc154fa718a041848b9cf6e4f9b5cf9f1d';let _src;

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
