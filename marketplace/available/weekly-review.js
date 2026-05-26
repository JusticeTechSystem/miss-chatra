// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZsW432kV7qrq0bcCTSaP93ihX+IHE0YPUaPRBhiSH1cJT6q9ApG9L5i4ThhZqYDESbczUPka8EJlOdpH65nWe41fPtnB9q5RcKSlJ1ka4NtAgMmCFoQ5TU2ivdmvxdX1x4QZ3Cr+gC9gJv6QJerc1BOzfOQhOzHSSHwXviFlaHAycjimni4k0HiabmPQ1amu3BD6o3YtPDUgTWxTEWNjbZEf9qdVDq8Kd0sjcwlDdXhjG+9GYxxFRC/ZMr+oL9otlv8gmuQ8jv8ytbf9FPSUIgrmUoVQcIOhNaRzv0MFOJ7k8zRkhOVn9sYxdnCd6X2QQxqV+IbMwa0z7Tu/CTepRQHF5ozfEpB7/1EfrBGbI75Z/d8qKZDiYbCO7PMv4e7m+b2c3C3VrBBk6HQ6Di8vPwsGlMjZ4GUK6NkbNZehOnklqF9+meRCeq6Kd4M4w5qgmQSSRDmPCk0nFDDLwgM1kRTbtGayLcsFcrQ8nNr6k5UO1r2aUceL0mrGUjICz3rIRGBAWJdnw+UtLMGKKdJYMwN0uaC37WA/rFmZo3JTO6AfxCf9zzbrZPSEQ2uzI8e8wicN0gQPy8vQFYLqmOFzdX6i5FA/UC24s+8h2YVtAyabyDpHAW4A4GbUMxZli3xEUy7IKYphDzKgh4rJ0L1hWcLn+MEF0naDD64R43SI5cfMXpH6eM2vDhnpJh60WmeBg2QurrV6pgp+y9RcobRk83N4RVcblj6cOrapbFi741rvMH6KrG7VDsV0ooHQ5sx4nclOfIcm4SmSnXJ5WP+EhyHOEGTAvyTdJi3A2bWrdQMnoisWHzJR2swj0MdCoVlj0/y6THBmdLo3g7CB14RcKovlhXEhO7bbt8VaxR+TZIr1JusFF5HSlIaNUKXGGO9C4VhJtQXqWG7nzBqKp56JhblwfOG7ZGxeanNfrfMtbFa8VW4AGn+GUgD5km+Wt2RkplR61boFL9hkK3pP/iUn5zyjMieqQhEUsVhc7Q67n/9WrBh/uh9xZS8jahFMhU6MHhpQLSUoU7X1KI1uG5bVXUpmSzlG1fNghYerKnPHYOcFrEen+piYnGaNDM3/vjcFUsR49wLFtj3n0s2dH3PGii6s0Mpy/S3Po4zXzhsRMiqK6yYLIWf1MG/hFP2/ZCmGdW8Zl42ksHal1D1VlHlpe/kNoaJ1FraM4y/pQS8NfPuy2Sqru0KXHkfgCPZEg4ELw4hE7wVCDF72X6CWimmua57EfBOt/TbHyd68mJvGffgghWyiIUDFJ0PpmzDF+TbKnNdnUlKFeLKhfp6NDaUX/6zVR7TLUMcZkoBhZOQ/xFAtvH3uv/yOPiMTfB6QQUjNSpmK1xjk9dD0U3SIaIHRKYrsuT3YQ/EA4vP/LKXKj+DQAtD85mRkv35XbfFOZcWbuR29xwrN7yIRXCl3gRXGZcSd3rgJrVI=';const _IH='a338fee8ab44400700aea31410178f1d1671cf54f7fed42ea692381a9903e067';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
