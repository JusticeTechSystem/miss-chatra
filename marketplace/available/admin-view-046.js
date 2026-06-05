// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/BRwEjbm+8852HpQ+g+YyiM6p6f24u0AvMELPdQ2ewZzLaC/uYjdRhSatJ8En8978/0jgtMWFCWz3WFhbPQt+d5dwhlPruMN6RhKoJGXbm5C0CxDozDJjQ7MBAutzFkOUwhS5p+Ls+EmF8ioYC/eUgt6X+UZiGLlh4VFJ/11lPQlP3GRmDhl9cju3Sux9Z/gxTViiUkJrSVnK5aJ+3oinMmnmZwz/sPtNyhg3YN2RteNygOCKfAtq4YXDkask1RYa1ir9kSikpNr5pw2gflDVYDJ+m2N0ktxWLdOussC6ziUgny3qopkYliOGNEJQ4MxXuYIM39U5IM8ClUb8U9ixhZVwtxCV//JqvEX9gLpwBMRQUnO/xrM6qCWXXPMW1/R3VPmyXmNIph2WQYJWgryMM1eAqIZe8xPbb0LKfZkln4+zohkmLKebQ/Qe9EGYXtvennB1pmsV89Io5zNJyyZitmHpA2/e/oZ03Ha0pAbJhWWHLS2FcpixzRV0Tsrw5dX6iF5lnlc5V1Z6/yvhN0HCT/nqxgqyalHQAog9GU9WUjz/mQllwn4SmuN3fd9JvmQHM8oDlfzAnpT7oCuZOcNNo5Go80wE23eEYgZqls2BWXCAVX6aCcb9XIVEJZxsGqzKOr7kVD/MzOvAw3WkOFN8Kj3gN+4xj+K1j4z03564ROSOE3pp6/549suqcCrxCcVg+IBQg/q3aahOv5l71/VQ4jLLExvGAkqHmQhaQZY+abIOJIiQ/IL2ZPo+OZvgVz3EkxCSLpBjpTgjEgCulzcdSh4RKy/mY1wKjI9HSpaPDeav4zxZLUoYuNX1s0aNFwLvgrF48mXa/LAb9ClncFvWzGUU445oPeKpnp65D+KWv/oBwEEeK83tW3/s9Ga9c9yuBuC+dSif/gGqqmqdY11dwLh0CHvNIWSaOGNG5rbUxiSP2welkj7pDgPQH3R+hp0GV4sYQ003V3h7HK4e1+5nHFkVpsX9fzijaY5kzYgJg==';const _IH='d5640ef9d5dd91f0ab3944c6000116e83ccd3c76a07dc51b19b81f5e3e9877e0';let _src;

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
