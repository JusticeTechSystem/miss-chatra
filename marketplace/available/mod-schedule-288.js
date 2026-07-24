// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZtg8qJ1XFMTOd44WhrXXhQsCbl0Slkz+HarYvcCEC2hIVH7MWH7OcTaxY+59ThLDmP4K+ow2ZzLVtixlyKaH+b55ejywWcIQw79WDyV4SKMfl74GDEtv8h0Xpg5RkG3WHWDwqmh8ECDRLl2hn83gRFU8tHRMfoeeU/jMiVU96r6nqZoByHJOiuh6HjYBbZ9/kyPKMH79iqN9/W59plWo1JVO1m8jpUHT5GjLepGPuSS3eoJhMwAMLvFSt5Srxw22nBNE0KsrEz8jU2o5VClwpTHoMpFzFmtOkxmAT2rWlmoSzvE/g3vQrkmT4eIchAyew+m5qnd64hx+GyvPqNGJTKz8eCoSVYmw6hjvfgDK/mf7gMXnjqi9Cp3RmzfGyEE2haazWluL4QAD/5aaRuB3xA2WvoSbCmo6ruTQ7SDJmfBK5hCBKJ5FKWNwu+ceY2dBiAt4/zInt2rBtVqkzruCbJQs7K336y+wjcoLDcujfmkPFUTtB0jJixp4IHTTzPhoBZCLJhHEFY++Abgai3PvuizcR5xwn/unbrDM0g/kTuQEVbKy2MX6xOlFHEPFcA0ZqhRUPRK8A2aQ6hA5Vvd6LIUKkxD3i8U0gBDyps0arWDcO5IKKtNg5QV380d/6et0k7Ya9pgRwCtPSU8rtqjKdJ4aqILVaCd77YGH0/7hzWdOY0LlxoGnKLXm+xwQW/81zS4G1AXg7ahVEDNSRBbrsz/iwVlKbc/mjpF1cm+dj/KoG395eE86cAODIOefZdYoVGB+1tAl9vOBtP32uhGk6YfLc2srk7WP97TvJzctBnACHRq18X+Rr8ydR4e2n7zTQL0VxK/8Zjj1W8XUD4oEIO6xWf9y8BDVOPhkIGYHnTiCrZRF1s1fcGNUBYDwwmJaKo8x06npj1mlIEWfpih6hnwXHAAdVZ74K27lDpmDSCHATWs/wQ35nK9cQ4sbCZmmn+7KZuaSq9HCNBPITp6dSUjIemOXjuL4TIXuFLhAsSJvNaGc5asQ55EH/KfQRxGEUpTkH5+85cBTSVeYwl2Yx+09guVtU0gCidYEnxNdi1EEbtdbnvC5SsGVAF4g3Npm6pJ4G58KaN3+HPa4BFWZwiNux7oKQ418qXH0Noy0Tu7WEMT/sV3jxKL+6/Y/xiwYiSy5cyLGgarMugRX+DxLYcEDzg+hW+dCCOjuAad17wZRW8qNbg6UzjoqNh42u9fEbCmug0VgZ2zNffSTZUv3OsXcirpdTmgC8qoTRPZlr36QG4NH/QANg3SHnppGo+pwtU2poFFnVtPwRRhxmXsRlZnF72etkkVJRiEshj3wh5D6a0y3Yemk0mIJlCI82bGPPidkMHq6LXw8Tu3BDwqCTfZWeR5jKtHCvPIUX8OcpNN5/f0qIx9bKLecS9pPE86gPp31V8rUkb96tbs8=';const _IH='a8bddc5d80e0fb6a79ee2d40606b86150e80edb427fb80a9f5d63493731eb9a1';let _src;

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
