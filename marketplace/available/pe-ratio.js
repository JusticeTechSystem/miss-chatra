// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='an/4ZSBXNE0Ty5sUizBI9WRWV+C9Dqj0KZCcHP2iJ+fq/yMwE6F1/wiW4WFgZZNTdnKpowQKILX+MxXTFLJuhfrPj4qsT+rfcS4rH2CHiQ4kpeszitumBgwwQj+NOmTX1q2SctaAZkb6mTsxICmZdIjO/hMSR6bI2FYOwGvkR7yak67t3EiVDTh5NE7lkzDK0XBd144DHzlMiUHOyNS4AST/5eHSkv0ePrgqJ5NcMeDI3Nxe7oInflviDo/MqHYctlOP9HKY3yNewOcVLFpsDh29Bp7lpo9GK7ZA5tOqybZZsrb1nYj9QKTSwmQ/wMlx/1L94Yd27mNk1JMplctSXKEvqYFCuk7RMQM8MXQ22CF6Rgb0xdv10PNyj66mo34hJehT+0Qbci/7LIlQDRgoogHI3G9Zui6XOr91wsZsHwRBa3XE1/NCnnzlWFOjYz4mHphMSW7i3tRwnKK9PApU6HrDikRG2HpmrQGYGYWBiyfiMD13/6wIxS7VrSrSOBVu82LlarfKogDGwsBnLyZpEMN0UT5K0r5FOKcXcOvOGKESSYnAVmH+ps+Cxb4wZ+VrjjVI5OStFPAnhigS74zECGddeQAHrPidijtAdY2LliwQxEKcKa0/kURZKk2mqIqWBd5kgKA99DWTfA9C+VbEVLwcPmzsF4sOv4hJ3zJwR1ECVi9SnlmNiNUxCNnCZzTp4bFnsKVVg8s5g8uxojJnHY9+OXLmuLdI0Ot14KhN3g/Nz1c1Of4XJht+A/m9Vfm7bpBrxAQ871zaCdD5mGLsUXGn3eqU9cBLSaGH5Qq9gp2CUzNQbxZBo4zjx3vZWDAQv3l7NESYUYGOIM5r/PBv4ey7E0yzAZFwan9sFmwnRPWKFDnGQxIbImBMtzZs/ygEma4cld6tn2/3lYynuf/01aduIClmxAhB8hXtzuRUYcbJLmtIymIhok0/F1M6ye8m+bNWo1wHtg2gDaprOVizFnp0fd3pDJM4/BwDF/LHFwrRMxJNO0L1UyCyP4hWdwGtx4zqEeJt0/uiazZl9LV9SRaPkIUjrK9n6L5gd3inl0v+SOi+BGTnkL7GYFvnNo/wCJb5/4TSecSqF9m3GqmEmc1auxkA2iwrm3A4ZYqCUXILQKOV2We1WaZxpw==';const _IH='34b2fbd27e475b43b816241cca3144bbffc7586a87189a98c6434ef1d3c349ac';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
