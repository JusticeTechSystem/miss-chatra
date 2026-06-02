// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C9+KHBS74xn/JFO9TThFEI2B4nzqTM5KXXvJYiPEMarLP1nQM1AeYWVuv1KdZ4evLtDSioqQ+G9zSh8aYb4Z2qdR3DrXiXV3pR7O7VPu0IFSgGayMxRd1UpxuHGnZn3RDa3HIt9RaObbvCh0DNuFsTTJbTXUf68xlKMMvJ9JTAU7ZedlN7m2Oc1YAaUQ//EZA+CSCABT+OvWn2oI4k61oo3WLfGguwygOdUg2xNlj6Pn9WHZhscUb1FTMDuIpMyQ9CJ+uGPbyhu11aCMDMtxhCIwYsTvtkxdXlSDRxp8gLCjxwI7pjcHgF+uw7w5aPr81O7qb6LrGqwLziHGZ0OWwhwABE0uhfWkykZoXtYAzfukeleJielW5+XsIS4AjWm1eKLRL/BdilaeKDyONSLuw5lvjUNqupIucCfIfwhOacDP1xDtO6yiEja6GwvL/PKIH3w/EMDtuCRbbkGt/8RF47dlxkzCBdn78sOQTR6WvNJHMc1goRyGdbL5gmQRKHADXJyDu5X0M7AiYyr4//qIjcgLdOdO6kCp9gK8gICv8E6GIuPk4QpTLfrQ7c38P5L2U1kTzyjx2xGr/JQUi/ashXL3F1zF0CxtLVRRJh6OSBWkdtw+RIKsMsSoU8Wd2RE2mk5iZTbMyGw4cDCoiLs9mx6PNuSqq/S3xhV15gvfdOQqtdGlqJw0WA70GRulo2Vl5VxKy5XBsOPBlI2IjsQHN3VH7cA=';const _IH='3d4ce22eb87aa4bac8a27b1485bb9689e9974959e5a6439047c2683be5b2c2a9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
