// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KX7KuCAlIO3EdnM4iuvHiAKyCtq72aVPv/Tu0ajeJZNNVhxRrAyG1mr2Eh6qlWk0yZjHe3EKd6Z++WDUgjgWKG1F0MfmQ1xJTTKNHrGz9vDYaInC9j3I/+V4pSpP6hzno9VxKwqvl2z275WTQ61YMBfQyQ2vd9otEXNaEIxvpzdVL2JrQuQC5NvKB+hF3m6BicDxfH1tl4bBQnmp0WxSuPbXsOJ5rFWR8vj0QV1pH30EQEMoQqwQEhLAUxMQmCiNWAb35tcYlezlpM1+SpWFanR7hSuSZZ6qA/6db6OpJyF/8eE4KhN1sY6AksgV8cfxPTdIr6IOeZhQKvayjMiDzcyTVxQdk+G19RJd2hOigZHF+W5yaKg6nbOJPFy6zGHxICgxrjF7kU1+zwxvYBrf/g3iizRAYks/ihBpsm6uFh17mbjseqEJtOOss2Th7dQEO1A5/QByl8o7plGkMlN7bdWxr+aIJishjGtFYWQa0Ek0hEEGaivIJfPNvwyowVLM6CZvITzGF2e048WVTNGNUIxkWn3OsJFzmFR/BPmvK8xU7y9gWCQJ2vwroyn8tkijDsTZsU+8pup7ekqYlPUCMcDWt/JZOjM3mhhFXdo9SbiUqF7WHScy0r416HJnZnJ3czIV+wdKg2J690DbBahLCYCjHlSnGQR4Tr9uR8X8cxDep6hJHZl/wHPbYEZasoQNic1+BT5nTX5xq87ys2JpWUTQ5lCAHwOpp5vzxkgoRjMUBj8LW9HWJw2/F5Z+C+Hx/FqQNmoev5B4pa36k3VQagRDxs7+ZHQGVve8CERkj9ysdZbXGeR6hhBEzmjy0jzf2xuQVeihc0pGqtfoyv9pwQ0tS3wEhox3OpZv4tRTdkB2IxxoSmoZbsgYgLRBFwb721ehgZDHORzwfXfZ4UiUDD17SxHlTFNspss4whGSIfktU/texOYxXeRzHYFC+5pYDJOQibc9Sb1NQiDbZl2X+1zDAoghZ+baISBZLA/5s/lXy/BarECmeU8paopU/CbMD7LohtBpxj5g0eLmPn7G9Vp1CW/1odSclKRtSLlQbTaH46AzzuYmV6XRQaHQXyt2N1BiZrDr7bwsSztdKCpeXKO2K+sM4oduZ2dKoRFv4AtF2vkhjPtakjP8mGuJ2yhsg5PYJnB4xb3Pg/wniXe7W1nb3+SIp0qRQrP1EmbL0q3mRJhE0w21UckC4FMDw6C42Mrj5fK4ixjvynWh0BYkFSxhTtmli5R8NrzozC5bD9jISljaYGlhAoFBKiFTbnVy4ef30cmJ2vwaA48pUBzZ1s3YOnzhoTXuYNABLUgrsSurmLONzMYIAZ0kVrVxN1htoc9GQqDqyI4SJ+YbIKA5LCm9eqYTDpOHjLktleMsUa4QNdFEGMvSgGx81egwWy6tCLVzLucrNF7Y7rxeq35WtBoUWRydhNJxtP5EMfPDE5NtUALD1SZXQAucvxAALRYd9u2KCMJx2qRFxRQDqW+uHZqGnd/yW5JYzZLXZwAAvEd2wu6AdmfvRENaKlSPCvB0dxvwVKETbESh17gvNRsmebT3eWnIyZXKD6po0wa+9ylSSKhHxzZcuhJP4myNOw==';const _IH='db454b024fd9c427cfdc2897e90f9430f5e43b4a22c9ccff58cb52d06e103efb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
