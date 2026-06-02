// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oZ5QfDwtZrxVPGK5MzfTNmSKGbCWRNJYvYzlBfpmkIApYL4PyerGo0lIdqShpyQ8k2WADCgUs1RLbWvhEc6BYqTKA672u2z3Zwp7XBB/t47AEuU7BwuNFT4ZEKHkn9YhlVxBnJlifO7atFUatBcDnOMEGAqjWiJoBKJn8x39aYh8xb7x3PBA3DUitbP4MxbvoiEs6NeXVBzaOoHsTVpx78vq0v3JgKD9QmrhM6a/oJQeSwJB0dRQ/oUNIAnD7hrSTaOiqBYYxdxCp013R0DJeA3GD0p2bjat6D5waIGdRe45WSd8t1zOmQ67mzgVSXx2AdPQmsHNIp2hXQpgam3kyG8xRuzPWv8RtQjSANNXFdiCuG4HR9prTMLHdFpcmvOkfzFxAIvJoAGqcji3dgJJWkUBmvOBm252OudE+nScqmXTSnAIViWOeK5UCODydGWlytg3OJRh77UB9qv13j14Dxvu56Bbo8Jv2kpnT/GR/lc+909JHHJ5MY6WU4xTPVloUI3AGCnfW1gQxi4f6S1/xJDNj+vUN8RfexCMCaDJJeXcmBjvmOW0BhKT17fGH5+1rh7FOkC+f7h3Z8Cazs8rksIRJSA/fJdr3jnbXZ7xfbUD7WdlEfbweCs1/ZHsp6wdcxqu99M6MfqSHALyR1kHgOpeZP8gzFMlyChmYx90E4bVNMNgP5T+kYzA+McfnaLfkVqePpfUwXuB074qpm8YfjpJnfuJ8unJ4K0YugHwiCClU1CIU8JqM2e6hFIlMezczacEk7DAj0rfwtvWhiT8jeHCvx2Sz7c+dsSIsIkb0kEy5epMYBFsuH8zS3jn9MDkFysVkUPE3fNTF/47V7rZMJlSG+mP4vP6+HmHaC6sVU+m01zGeNkpTCuSM6pTWvGCz2T1kHZIMVnR9Zr+hWBQbH60NHwtezkFQfrwo/+Oe0ujHXT0cu2ud77QPFSV8+47jVphNCoRgUQLT+G3EFD3yAvlwqVJ8hKUzlLhadC3GuvkV+klUbDxvdugZ70PNLREDUKgdKSkdOA=';const _IH='29d389f43dc5e77de7b218baf7ae2d25b0d8210ab5588bb84ef5ea4dbf606baf';let _src;

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
