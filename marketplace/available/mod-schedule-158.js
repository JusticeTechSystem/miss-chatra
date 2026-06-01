// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4ijBrVrRbDrCh+ahMSUptpn90EIsJB4mM0CVPvaDNpGyifYvjjo5D0acfOGH8SwyCC13Qn6Z5t9YM5/NVRdN7ISPInSs4PqNHjd1aTS4N8wWm/nhIaueVkz5f+n3NYpEWhRbgvewxXVHjfV78w+9Orfg9JPGD4O5Er5L4lDoGWVSIrUWQrIalu8qjeldgQYarLB+Fnrqj8XChknL+JfvHYBDXvZdkOtwz5ZyFwJJV/kMrqVGuKVLwVNu8nOlkmBnqiCUn678gjIZixOGg9kGTD5Ek5CD+uouzUkG0miopyrJck1WzfsLbvWznoBM49b93fGO/P8lw5dwtBxuGCoSDbU/QablmYmXilix3lKR7zFeLo27dzfqjBjnZ60EBdDni0QduG2jrMeKjAdp9gb8+NCgR2CvlMKcPgFS6z25xxfKoDolB98iAmDnY05bht30pgeXR99o4l+r5zXUN47JApascT4gUdZmc++j8Jfrtpa1gaYdcEcuriMGe+LOPJ31OwQ11Ky/mkP+HbAisk5/SJBMOhLWuB0Bdhv9I5UQQMnB+mNN86gSs8xyd+v5y8UCGagEt/y9IhUALaHshkgZm7cFpcmbCNP/aJMGMm9xUXWm8p2pOmd4FtYM5ap7SbmDRPeZRmuJArj0iqVXDum9812WNwYV1JLPZtrzqvxqehf1XcuMhiRSd0qhRNAHxGZ1k13v4pIBTqnD6+2I+XDJMAraJxJ+O64//Ru5VWVzH/u92a2FU7jM7iQLLRi1cm10LH0981PLxOp4EM1PSfXNNcZb69VPat+7NwefJxuyNnnAcIbntYZdpzLjAv5UDZ3TtR/9ShMj7vnMydd+Yc69EhmVl3n9QB7s3b0JixhHg0anDoeGMCtQL/sGW0+X+TSd+5dr8D82M9db+/s7zj0Zx3xXg4ViqBQHoI9Qy+gw/ssdjgXZkmIWcAcSGFsrD6V2HnwD/Fd+rLBNqX4/VC89fudI1ZFG6gg4ypevLFlI0t+052Y/NByeFFN9Xv01e3ElietDxRd8VZL+t5rPFWIukMNxE5kkKcMkltICvHr6VnFy4R1eFpWRJhCwoYduD2B8/dvrcAv+A/jXFZY6aigu8r2N9e/BVfGB+S2PJMJsujsg06dvnDOoJygi7fRQGTTqMaIfR9VvSQ4q/n8JwHhuaOZO3nVFa/yfzoPSz/RcTMQ7G4LVuBPNKivlstjk+KDRTRUhdNrklNCSjEOb9j88WhejDHkGroTGobmf/MdVGVtA4SK6Xs0KoHUptVY9dCfje0bC8Fnl35AwzKXtGHg1nmI++Y/4YPgiTUxFvYa0DAAtUqGeFsx9St9BZyjA2PI/Ihf8ng6rwhrUsPN6xVB8TmoxgB3KU+yFd3Da2OncJiDrsOsAml5YoyvzN/DnC8S1lYzZd9SF2D8ttjyjg==';const _IH='f28409d552587bd44b3a872478791042fac0c7a5d50fd333ea4c71e85af754a8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
