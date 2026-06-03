// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ra6eXFIYesYuDTYoy0gpZr3RRm7h4pXkG1BAhXQmZCleRrP8Ihmc+GivTwsZMHn1fEP2MYgnngMyMnY1Zwrh+vt2DungslxglLtexT8JTWOCUYEmfuBE62H4eITW+YgKj/Q+TSpjPYVYJ2OPE9aWaLc1oetG7RDYZycZ/0j//Qdr8q0ELFu1wzZVxgYBS+0CAXYkmbCmoWGC8os6PNb7xkjT5lOwnzkxcXdhrTAQdIhGRh7G4dZXe5UbC9vn/ZgYKpcnYSqKwXnMo2n3lpnLbcSVUrSgThfP4pX4GfTLP3Tlwn2bRuXd/VTZBj0PdkSlScoc9s7basR22JBdWBUv79lFK0F5OZbULsnFLYzbPFNGpvyg2g1GiW+X0MPzfeTEPVj/vc57agDYUtPv2f08B2pOS1mx3YrwIVhRFb/4BcVAeI6hpqG2z+Bq3HAg8T/Qb1dYmtPDAhwjqKJqv+3tFpCcr8pIwP6FkzKhXs4m3QNs3SSX5OMXNIpni+rkUeClV7JtjsF+PhJIZmM9D10vzVbFIGMElEUcdg+GxfEZCn7B6CE3IFlNlRtEtzGjeP3WVR818WhvONnSX9mxlzFmVAoVOAj4yh+oQgtpa8VMmJiBprqgcqEciy83MUaibpuSHn0rBUbMNYRRe9PKY5yp4yhCheb8X7MVvHEqAeibwXBcgC5cjSCe2amwrE38/yeFQG58Cj2JTHsIkQ/VmuHPEKIfiEFDcW9hyCuWl7+/xPwyx3dedgsBDQGIrjo2ziMIt7AWt/Udc9APBi4XvG8+AzSXMzJive3aYnx4mBWUyyue+tbMziIc4zlZnSvaQAN3zo1OYG2RzXhuADw2c5aY58XG/dSJnt0JFTRpp9o+CXxC3LYlddBXqrx+YWwnmR507bWqhKZ0FrNaRLoE8cmBx/yWfy9ynNiYOFP34caQti2UHa89EFpQpAv1x/6+tmQFlg85GlR8PyjUQsxAHRePcOa4BGcKNWgaIptAVJmQ1QYOV6DCVNjWZ2+wAVnKMmcP64AQHP+i0nYwAVXw3+SEuqESpLqLYwqGuV0mkftejTv8IefBzeoigNFiuZr+dM36Wvnx/RcRUf1XoQWmDMvZW9Fp8dfL9ImBtMwwbYHEoFi+v9BfOIjJOneuBg7nj+I0rISYgIXioG8l5LO5tw/L+JrSItXODeHdYuYFVk20Jq2NmNG2ChLuE0KoqlZeIcEG3XnYiuye6IODEoqT4M6U';const _IH='a365b303ea430e6d65a2e2b491dadc8cf8a634da053ae6a0c9a862b571b1760e';let _src;

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
