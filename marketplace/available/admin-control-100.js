// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSC1P/EXETBDU03rkBrCXG9F8TTXVaxApVdhTJRVweZaVJ0QzzJtds453X68ah61FpqD0Lf4kfkoB1Fow71LUfmTOgA+FK3fzcZSqvLXFAeUzp7NqzUUt9K3O1JDOahaFruX1k6B8ZYQ9drm4L0LroGNR1UtwRENJPFkRAp4gpqjsDwz7prG/F9qYzMUCFnPXGqT38V4HNuV+tQRBGnItv0X64Y8Dv8r8ftm5dfOPjirNCqp9ztLjdzs//bKgCTzslz7OnZnyKiNf721cW9bjohxiXEryVWXcxMSBStY7gDav5GjJfFyP0UlUqHs7ya6gOc47PDPvaiRTCPRSiqEcDv8GJ1LYxcUpS3ZpoKvTVi+zDizLbxjoDroR7wOgZFIc2Q6U7z7GYa7VMeVq73+HgiblnPhiKPxDgkKxH69FYmc9mKAPcwXr1dC52E6GDY6QOV3l+hc/9qaxDPyCtWfc4hP3UViyQVmjoHBO/5MwKMbZKpwZt1v5XiV8Vjty769sPNT9tjDrS/ttJKN8GAuiTu2fini4/rEByW8nSl8jl1LuzIgVfufyWUg6AYKTEAs2vPP/XRC0ONOtxsO8p02BtG3pA+3BZbfTZV9PecGztDV/WeZQCefzruGQdx0TjEc24rYDKh9EuSqzZoi/4AOzHKaqoATHnJmoSsxX1/4ifZK+C8VDEYQYUTt1cW5G2qXA1/gH3puIsD4MMkYdQp59Gp1wKU+GanzvznOmUBazMCV/KxdWGZG0IkDQtXwmyBeCusXjpPTqJ415iPG+sHmFJ/fNSlOzUOYqq0NG1khWlxxgjN+aq3mbqdWGTH3IRa1SXW/XbJxKfMAQJjSakoDtuAzmjDzSniSgBozCQl3DgaAtLBqwUQN+sWIwtkQcUYTT6LoPItzUoXVjTGhosrXZInKp+v2qLRUuRto1J1g+DmLmjR2mrZ90HUtRlG0bLSsWNTquOvYAigiIsBj5RaiLtBkYKxaAdMF2RapN3PyQqXoH38k0cVHLqdEqto6eO0URNGSwb+BIt37w==';const _IH='cfbdef814c9719c1f6fa3656d251cb1496afcd31ed293ac8df03f43aa6fb8fb9';let _src;

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
