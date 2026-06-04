// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sr/6s0eMcAhHSFhN66HKxlBguTG2CqgYTRz9KxZOfI9JNsML1YpS8vbs69UqS3ixG+zGRx+g1Jb7e0M+JQgpaEEK72wvNeO4Ce1/PwnLMtGQh+wQe58IpFZA89OoQJDRQKhVO2ROhW+S3TW9f3GW5ypA0o3x1v4vUTr541BJa4/bwUAJuDAAopoDzjS/8CwtBWnAOT9a6nvk7UWfoXH5/W75XLd8UR15NKx0GiHYT0ioCUkDS/OssN2NTlssQ+DdHu40gybnjqwOLF8hpcasyXRfUl9SH/HsGzX5nMCSZqpj/t/+s+0plyK1H4/yWw7XVQQhLM0YRxQ+GQCODrjeQtUU45SK0kBVIRZXp8mkT9bpZKhgq4wXF9z8a5QafjCjUuFUtY6LSU58KMo4ommH0HtTr3zCuGLRLwxzma6RxURXZLujybY15OBbfKJPTjzt/KYHecQYOXVnJf9+ghhUcmgzw6WvR+K9WJxJTlpLvxrOWg481elGaQq5ZLGgav8aBV4YnEliZf3Q+W4LnNJGcuKGBdhvlI7MVizlIuPagAdek/rp4gIFmmhx0iDZHyrtaiKDejb4OYUXw6EwVyvHB48cT/sKxEXZswCR4SJGwhiRPTI3WJC8IoJo5p5nb01cQ4r5hfPa0eaFMnxwrV1nqo6qIpx+zue1xb7Az23p5Q1nJwMHE06X0NV3KbFpXMtsi+C1Sd/3MvyaoZjMZGgJ9Mi1WPOoul/s9kLm+rXqjnKwAFhaHT7LLohTVIFBa57Zyn0SmYdlbXECoqIJVBKooBW8Olqd01/dS4+DBrB0y1iYTLZ1pzUJ86m5GTM9ce3SPvi3Lcjtnet9WVYEzbiFvcKyNodoyHnG6oGet5T/sq5Kz60k4O/Md95xF6CYMU7q6QA0OCVlEqGK3PC6aeGg2vU0As7Mz4tgGx1O9lRvFOfwkJpyi9+dde9rD3Xw/jfmKvD1qkwAEowV3HP+yMEf7LjSP97jfMOqeC92WP/h4HCNZ5/oFqEE/lsN8YQOo4j4cjDaU3IDuZ3bRtUoTxSRm/XUc3riJIuG0396MBouFVyuedwgN54LbGkhTVtSjHdhHgtZHYXCtaRGqR3BFgFYEj26bTOPQFnweeRwkYgG+s0SDuoe8YX+xpyXac9F/rJ+QWeX9IJblr5ewearHEf+4tJrb6RmAlW++8CTAqVI0A+WbNu00kWr7ilKBufHFFTRb6vx9cAILya3VrndSTrCIWYAW3E1a/AiVyBxKsezU98/f4UnI80FRCmxfF2mmwmRXwy4XNVUmKN2FHTLK2mK/hheQVgM6n4YmAcNWPUqF0NDOvzue0xOnpZeLv2B6y1YbwYfuJA=';const _IH='4bdbb827e919152928954ca8fb0010f98cf77a0ec6409b41566814a7ecf8c05a';let _src;

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
