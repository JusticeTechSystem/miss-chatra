// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vgobBXm9T7E1pPYxSKG/dlUzLf9DoGtrMCfMpSY1sXf8o99aTNBJyBgye3JdG5mAwHBWmciJ3Z0V2ndaAES42duDa04/pnCpK5SFBHxk/CDqvmkW5nmMVGPnD+3AANjuAumgyG8dxp/fT4rEvfcNM6RGrJmVvN5IcmivmhqoHZFvvNI3EPvLxm+4XsQiaj2dEPGT4A3pAXFhMVdynqTIpBWH4LpJYrizCsnNqjKm0GqkgCwlCayQl1ynzQ5+wF/6+9igZtlZyRxiRDMF6fadQAdSIEQe4hkFlKPrx2ZxdsTxfpxV5zULi4sxOkR7q3/Yvy1EyhPl7fd/nC4kBw+E6DGveSEl3CTqh7v+e7vJj2KQSQIBdAxacFQdvI5Stxv11UHMJpGIEoQBJPu4UcKRRGXh1/cJNZlu78c4ttMwltaKgO3AKKafIehI8DFBg5WbFpKdA+ft8GXIrrkKkaAefGmhHatHOuuHDgNRyw+iA1AeLDo+IiR7KGkhZ8WBXnykHGZxqp9obYkAeJA61zhq/f9s3LrCBh2GHL063YmSys7+Fd7VC5mKhK+x8zwwPD3OJ+bC7FI1pMSDInm4On/GafLNq4QGXRGi3RAJGcplF3tJcXbjLfpnDF4rOkqDopITIUpLTpVcjJhh9w1YVFy9q+dfDL5QeqD7ltVLiAYYhEBXEsDn8jl0zid4qQnA+RFGAkQWHeOy9yYIoBCZsHv8GkKVwR6PeshPDIRPlJtpnZhGalrzIhgckUvvVDphdBJARpHpe8yagmg8vn4jic6YIFOLX6R4XHR11EO4ybgFv2lrbfJGETd661dmTKFDYO1gsuOomBCc2e8yYD6zWpiYMQuBxfUmLkqBgOWGuv6xOPRBHMEfQrgELtj2BTtnP5vuUkF3kmNwIvXt7JhlCRKThAVzoxEk+PJgceKl5bZeCP0jaHVfDHBe2Q==';const _IH='8062889b186428bc2d065ecb0a95571da161428a6e7129df8551d39d8863afec';let _src;

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
