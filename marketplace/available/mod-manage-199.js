// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQglGa3r5EHnF5B7v0jvfEqb/pZbMKnvBlGLwz6454Mo7RIBX23jR1qhPs05nZGN8BYiek0HZR3cmh6n37I7Faqvxgdtxau10c2FXIefn577SZbR3SwxdfagqfD3Z4fj3JCyzITFPpJ7JTGHTzMstr0VL2hkVV3EWd3NkFT9+c1zEQcw+4iOaiiQH/HK3Jvbb1/ya4UrCuOCHlKA5NyHicvaDAdt75iR7DWTwLxLoc5AebZQ+LJhGuB7wu9js8VF8WAMv3axbl4MrjFONThEKl9Q8NcOlSIZd6cSy8n1+Pm2mu6mZ2H44H3OMSTUlkfNtyT+myMxb3xiqfHySHkhOcKBTe+TtzCuzcM69kE/2uHsQfTaLwQ2xZ0knKz9ncEUmvLS5eyQYb0KEf+22Ll53o8SY+6JLjdRo23WBPRnW/M4UK/ehCmnvr9ZVj1PquUjGuvjPOef9ZlprgA9eZ+SmKRkOBvlamfVfFM+Gc7HMmTMtBNXtyISWYu3ojez4wSeE8pBuGKQS9gHqGrObQ0FSL4+McoT4HMiHRh5xFkR7p0VXxksDo/V7E7BWFVewBtvF8iHIohXRkjOOED4M7XuhPHtyMQDo1MLBhWPD82KvRikV7a05S9ayo6V+fJg95OzmninXRZ5BFwwJQs0pSjity3CAhXwE4j/9gJcpep4UKismzKW59V3yaelhf6D6Qdrzjol9ajqy/7YkrgE1gY6z8KQc15v79w1DNt41v+5JgoHulWGzIh0gcOwH3FY1ZvtikK4wzF7ixpy7jSRXcdWJBJcFr3fAMQQARUtHfqgfRYgskEJQdP15hET/xrFA2mm/elGTQ1osjGcfNy5u2EMtJjgjku3Fw5Q4zDVMTy9WnTn8+czJRVTa05Ub3Rz1k3NiCPrJ317U29R7TzI+KV1JsbiW21m18SGQ/cjn/tM6fxTM+Eo3Tk/1dOqpm7kLldiFNsOb/P3OAwrCENiwPzQKjpzL09Sx8OnWOdEjYXn3I1cxuP/AKbriJsKNpzyVfwMD7Ues718BelCjzKvQNJRpagTDL89myRZnbwTrAf+DGAIPLEGXodOiLAKt6P6pPZv93uNGZWG7Ge6UlFTTdCT/kqG+6S4xeU/ZDgWBm5XbeLx8duDJ6vDTcs+ZBKuTx+ij9xLfmxsGFWQmapfWQyizzP3Z20ZpEyBVlWzVH12T4hcveomSNfBBVxDLWLt3mRQI2n7ncKdAmcE9/5/4BuC3R20J6tJ4Wm4NOj8vAz5pzZORDSgjxCA58z5LXsZFW7U8VOAzhm9BUNsZhRbFJqQiJU1ouSLPpjNF5m1S3jAZXC29DtYjd+38JDahF8D9piXrZjOtOy8Srp9fLYokBAZjzZP9eHa2TRHeV2tAsgtvTxiHVNJXZslVoa';const _IH='960b14c4366b350a1d305eb754c72dddd0fd3ffbb5c1540747e58ac0dd829128';let _src;

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
