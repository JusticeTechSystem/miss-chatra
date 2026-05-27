// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+llFHPv9l+yUbpbL/RpkU8YkkGWcpEWsA8JzJcPpqgrab807dQyqcoRJ16ppEdZgSZJYMnY4PatO1/JW9F/GsttBQq+n/Uov/hkPBb2MLLO+DTSrdr+UdOGItI2OdFoSmo0f3nejGmwbkCHUFx3nTq6EgcJB1n9bp4kqg2u9QjozS7kGk7Vxl3XmuvWc4Z9qqml9QfoEJKHxJT+ertuXP16flTJ5syWS7IWIDcPRVElsRBCco6eLGLrAfWDDwBePxuJoJqcOY4rGrokvYJkT0HnBH/SMWRfzkfYkrpyVZjUI0SOl/eX86a9KaTT6nyh8c0c0X1wSPHBIoDxEbDOz44N/HQfnR2iXFMe0eeC98hdc/crgIwFwyExVqbtLrhmwZQn/faLxrrXis1FcZWYOnJ8caU2y5i5lgWQPlDLa0xNyma81ojM9l3rPhZDrIZuYLmhWhRP7KaY/uFGR7MwQXiawAw5usCmYMldKFQXUDsjQDxUm/HZxtdxwKJsCyjXHRUOB0uooF4C4fYQhUD10XSmTnNLemVfUBDLGbJEZKbWEPjik+eXVGXxOAsLc5anYG/kUl2Z4Cj0vUXcKZsoCJ1Ry2/Bnl7fKefNv4dDJoYQ5NKhETnpvKqGb0Ql06FJasmFQnBn+bRlpYcoESB2onFwAOZiFVtYaCd1xY1th6AkKT3hmqacy0hy7G0TGhGuy29qjOAedzsmbhdyFAH4c1GwvpRkfSUn8H5+EivP19WGQZg==';const _IH='4700d0f1286aead34450a5405264a1f5381c5783da58ce016b318e86b95579ce';let _src;

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
