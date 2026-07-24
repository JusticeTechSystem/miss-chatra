// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRzPWubSYWBJsm88kGW/bjPGDkulgcO6rGwOP1XGKgs0p1Z1Pghz3963tHFutbWntl02AYRXosAX8vLuxwSGx1tM26bGpJ6rc4YHYC2RAn2XwXIBQ4AtccTZLFMh5YK9R4LRwNImgsEUkdzH/paXTrQmIMurDGgJzYHMjGGXvaJbwdf0uCaBnQuo0sYN6OhPPPZL6Uaa0wUWwMrX+ZDaGasjhcK3/I/eVWhG//LgMliiMQMusSZ2EkC5DcdzxYSuy1m/bJdRoU5pU40kJpFZTZ0dp+Fn1O0whvjoyMpaHvaLJDVegl6Dnk8qUlB2DhZep5vDRTwACWX5c1k1cdDYMHpEnv1Y7JFHS94KNlk19wLUc1xdmjxGouEkGYUjfJ3tNRNS/qA5VuGTgocisVqmWoyqX6hWXRp1xMEgD23u62OzrxOjInXZZYSEgQYsWpwUOS1oWXSvAaWGC4T8zB6yT8i2f6o6g+Sp4DAfc/mRh4KbBbFCwI81D3l1yHkpq+xln2iRvPV0IERYXT1zAxYflhlcxCfcDh/aUhAa5gixewYTZamAgfa5o6BOsGqO9c4tz18rmKCV9gAV1Ze1izY6DYkBiPqHyAcgTYIpUFuAiaQLUyBmSU4eNv9Jg3ihf3WIrs0KiKwWIewN1wTUt6RYXOW3ttirY6mxxO6zFVkDJzbcWQT4M6GX4JoOpa2sP8Iuz9xJBZJ/0nnESTr20S/3JG2FnIcAZyYFn8CT9W4zUR3KFe+cQks8XgBOqKUay1Y6UFZiACiwgfLZOAvfQtRQICMerlEt5SpvT9BjQXVJ55ejZPh/KTDMyLzEMCgnFndhcP7UWg0F47+glzbxF0xpc79kS1VF4w7a30Hn+Lwbz8Nwz4BPDZMCddjXzBjGIInpwKDC+aqtIYq+G2dFCH07mCGS9zrrHeKykPnMTOIFoikqp5r6DjWRUmRbm2LlSNJA/R5OzSnDroQLQ2M6D3XSvegFCUPfn6IGU0bnHyLNgH7oXuhUom8Z5GJxx09eTbLTaz4/gq49qvGYTVbZfJrcTl6o7iCLnfC2PLnrRu4xuGf0F/gbJxhJmBEKdVySNOcysdoaQ39tH5JFzqSv/RKNBIk3ZWyroMIhs3mGJ9+HWdczrEGQndSZ/LhkhB5R2f16X5kvHvI4Y94nwqdGn/ZfbLcP3BF/OgU8nOIgE1l+pQyk2TDLh6l8qxTXVANZ93+lRZZzbI4SsP1eQ==';const _IH='43b908bf55fb1163d2b0b7267b7b01d6723f5a197d7f260048e2d79effef08e3';let _src;

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
