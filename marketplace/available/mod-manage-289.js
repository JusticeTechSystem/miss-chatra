// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRLFtJuvciAbOr9p5zVq03E/oCT+7kVdwlXWu6MMlozB9e9BlWP92shDwKv0fdNzdYpTO49qJ2xP675cMmnhfmemf8Jbqca0KQeASnu0ZBmwGGCZUeKCw0mUpLiQpBS0YaqyPh7RemMZfdRH+LX2OYCv2m5+afkis+SNyukeRRd6aFAXcTV5tTQ4bAwmZ8meLch0KmxjU+Rm0yaEm/MUIw3Wd98Nv0NyI4DED//61Kn5OPQtTLJoT2nWB0cHYgC42g3A4Yk8DwmhJQS+4gyin//nrX7p3t65nZ6HRmmcWePcLamWShsMtPkHVUVYF7kzDcS4EQGN0hXeoeKedYwcCQstxVxXHNoc/3yYGsjMykABt2u2jLNyxnocrPQoAagTCAMUGjCg4H15l6uPP6LUWfwco8x1BcrTkxsp9FViYzTcbDINm3qND8E9HHqhaMJiotx8EOZkSBVcexZN/ticm71zEoASLQu5yGUn3h61zluPposv9d4P7YsjTSS2Nx00pHq4lHNGSB5CWQUTjY5G8scC3oTUP5kF0582dT08E4mEZ8yK9MxIdhW62V96eOdhxBS0xDbuzr2jgT0GuBUgRppYLlg6+benfLiFbDg5/7WgHHjc0fKB36ItSmIFtpz2bMOMtjMiAYhgkSyNDAUhsZMRhvXBdj8MJX7uVu4A9u25D873ntDlr6myeeYEJWUwFnXEN3hQfWFrSo+mKIZiy2Vvtji3Kr1s0PGVDUy4K7RHTi7CPhYCDBlfsh+wT+dCHQZlK2Gpc0iuMDq6yyou3oi53XlkM1ejMHivWz1NoOmaBARSJbHmfXie9o7LSRXZvlG2LLEsztUicrUA9q7NXIn27TX/9qK38aqQ27xU2BdusL4zDDxk6GUnCiT0aNcBD/ThvVgPxxk9FY1EVvm1dKye7b6kh2FdsjwB7A5hvVSPF+PiR0BP8k03z/lI7DGvolGtjU9XpQaB10tueiW4stTR8OO4GGG5yo8xwOmKVqQEgTeRifJkLpgCjDiiUpFvP5bVHQtPDpJJJXk5PqocjZBdaZ1N8cAbFK2A8064dk6SsCvpHd9wfa9qUWIJt7nga5jPvWxjdF2fHk9CPxT4VtCQmKT9rsrCMhfUQptLDheKixJRziHFLGPuM8tPf2Kz0dIok8V4OeyTl6bgBMr6ZGpqQV0ZsSIvga91hRh4fQk9zjyeF2KyYAE7ltn3pHeY9nRREsXA33lVUmvnGgwyWW1fRIdDvXUO/nMW6LSh2UI5GT4d9e3Vx8UatvOz90goMIIWDOXokHuvj1EJqMQbzs7GBCtSHcUAzBzMmtLYS63gQFm8DbI9UlxtV2SSGYdJlye5hXGXwo+xdh+tuT0IVggR4EI9H1btq657+am6wz6yK1w6Rc06545';const _IH='b9b0ed95a201e57a9956d4ceb0f6ae4c02267077ccaf497c41720a1c749261fc';let _src;

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
