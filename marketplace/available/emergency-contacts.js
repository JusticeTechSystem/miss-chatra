// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ERh7pl56qDk4ReKov0l2w2OveydP49yelohIMJotpHfNXshLE3GtmT/TUT9z/HV+3kPTxjF0o7YiJhyvZ7DLh+6AuwqlOwLCbg3U8YNImZKHJuCCb1YQq8W/7AeQfkaGB+bFaWmQacPmLvlZdB3T6ix/Ra6vADJepidz/7MLotPqZIpDE9e1ykIB6aUjHOO1X225y/2QcGX/bvwdad/sQ0VPEEl7C3rTodTukZ/8l5pDT2xu9hJI2ANh2dn6EHVXTqidd5UM8r/LXKYMMrsAnWKaoCHnFnimS8dx76RFot0EcZf/FsGqXRsnCGccBItKIkeu3VzKo17QTWsYOLWqI7cl3hkHiHd3E4QmpnXCO8kWPWw1ZGZwoy0AMci+tOCxl/14azKGaI0OqiEU9VNJVkM4xuBGLFOanzfcgXGLuAbdY+ljYD9mJQyNQnEbvaWuRUErFsSLSqZGjOW+HAIepVH6cH+eHf0CIoTe22exwOZBY8nCmy7modEUb85b+IQ9MFGCLcWbsnUXOsHrdhE6nlYFllTZuAryAJN2pWsTQpsXxZ9w3MynWhmzIiyMdpoRmiyTsHWBaoNTdE00etLmsEeuYAQjJlm/Cjfef064RyJ4';const _IH='7e2dda131703650b4455587656d82a0cdba12644e9b157afce4b1e0f5a00026b';let _src;

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
