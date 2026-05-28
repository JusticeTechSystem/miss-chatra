// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yC/EoKw0lRLZxr2mwTCGYc4q++ZPHDk6egsGemZ81XyociFGyZMpd06LQkiPiaVwPwuMPW+iioKY88hpEqBWjVOaeZi7DrTc1yh4FY7xB4Ve/VePGBqE6CPjTozrLDbeWwbPRkG76Sp8r/7TH9DouCxk0DFuJFZMk0MMvd2FWOEX3bIjKU5GpVtTwdUC950WpRy5PpLsU7RsBOVV/ovCSEOv3+FAvGLmQTn3AyVv8yNa/PovGaCuZmWWgZpT6UwrimJdVXHghDfTDfWKT/XND9ZvYG4b7cRwgnq2FKrWVgmNWYDLKpYL6z49UY2hAsrB49C+GZwnXabF1f78HcyvBUgBeHQVwUjod2itq24y0K1ZGUjOc2y47U/AWJ7Q9cM+VmC3JKS11Lr8H9E2c+twgRSYePuDD8fjK3IkQOMf9cxbJg1ilQgYi95I8n+n1yfbGFEvEBMg8YmtwmKXroWMEYMEEULl134Nf+26n2iTlWti8JAcxm4RPm/7tdAZ1lhWDDm0rYwCT6y8/dT4rubL+Pnq2Loes5D8/8cdvN+ArDl0e8ASH4D7Yocinfg9MJqQHmQX7s3Vad/8mp//ktXonlnS5rcmG0WdfDrwsCrFlYXGFX4IbUWcNNII3enHwD3upApt+xsbeM9IDjqKK4hgfIFZfiyb7xvKEuIjIW1mMSQUGPSNAtlzVL3fxAu/O+lIuocjes8gmcv+Qjk=';const _IH='16f82882a8114b5ab74a10b2b505c4c91e4fc72031310fd0a0fa25d8478acb4e';let _src;

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
