// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='50KsF76n8y/SB0kPb+bxStQaw/xug+QETMCxFZuGRJ8T9zAQMamv9qz+uINUR0xbP2KMh/wDtWFG1hRFCsP0XJHuphveqIlgQ7jPwzIXEXiMXG1yiwUQ06o1Fg0+a1UxPcqY5nqpPkCPxfOzaAnYzF1XW0E3SUrD+kFY7Ig0CbykIY9oQt53xSWcbNHDmk0mpU+oJd8jz394AWUulRyB/zDg0oine5LkfPA4Lc7XcNX877xTAnXvYnblZNyvAY68aHCQIXH13c0OCZNHeVwFdHwdnct4LHeb6rbZbfh01/Qq4l/5kKUpanq59IWuCc4C+UOGGonKLEty6GAhk0tYml+B6q8tVoPW4SrqvtbH1pGDcvlCee+kTNKuPzrV8j7vnHlz3cKzLpTRgXP0e+fZ/mZ8z1508H+mrQV5zPJ0DIjJ/deK6ItmGIJsi/50VVjtkbq4WDic92RqVtErMrtJuHLp5iqXFgNxeQPQTmpVvEUKf/amenQ3TKnm9u9MATrjWLEro1mkZmmjpgsRmwbPKRbehZ+1JxbPC3TpSJyupWQFTvKhpLkkrCD8Ox6bOC48EGMtTZ1XK0upm82oy5qCQKTp2btBUecWBLe+GgrPJcbAUsNFCXkMGPi0LITkgUsVGDpUdcidJoYQ4XvZCRa03L/M15mIi8MLfioujxiIJo1hNGdCsmlSLENHGpN8BbUq0y0xphT6eTzmcJnyHzf2stqhPKHz87g/pfVWvwUUvvedFr0SW7pd7LHSz/dlwZ81vtROpbs2T4wSW2Ne8QlXWp7Nl9CjToWKfIJpVZNGvbqQa2k1P4gutxPqYJ4chQv4At6yvMYRHd8QA+nQJ6W+RQJ6v/1FVkWFdMZkq13n/9WLlcN9rKuPXm/SPk5OVPbc8H97fyUyTYCKp6gKIpLCQMCBSv1c4HIoaYdN7mg1mgQbZQFz4/8lyC6wm8FtMbnDPjuUx0YgU2hbofUEGDcVZAlpBj8ORYbEo9uCaGoslJcLvHW9sy2Q5xEc7zruISeUnMj9m5xFz4BSPFbJRRE=';const _IH='f2227150856932aebbf65e443b6169a8560b430f1b46c7235463593d3c0dcefb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
