// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1X6E9GPFtAF8C8pc1B0vHs8Y6gob9DTvC9fy1t3ejf3785EkztMGPN8hEFg8f6G9gV0WrsqzajZkVaTVETZlGwHGUoUJikCr32EML7LGq/0hqsG133iT6VD3c0/pvleOhpMWBFRH3VgSpIO55retFzUyHv+rst7o4V2buOAUSPrNuUwwxj/49XVta8ArYOifQmJM9htYUTjAqqp/L5di6bAlztSNfw/6IVr+zynxvlHFauYHfBPyAi0LtYanGdQ/byzP2j25n1D7Zxj1uipMAtkmVN+Lux4jEaOlW290m+qQhXlJSUdrw3HUFiIbh+Q02y7vcH+vVNa5nKm0xawcloU16l9cA3GBMw7zQsgCKxlDkFA/Sg91rUuTLMm+JQuXCRnyo9VSqMlkjJV2qEmVVFkKlGZGvpnfCR3DPJUAZnrXK7lp87kihWy/ph8dCRvTyyeKxiQBjCvBUQ37DTDXZG9lHurXs88eDKNt7SQC3h39vwQUS2lc0Gc0gfcZyPUwEov9UqcqeWnpD1FhdZdfcfgE4KsjUqxNxEKwWsdauACZCX1K34Z4+L9rlRGTQwSUVgmGJ+NCcTfImDXCQKu5uBv7uK0R4s8tmqvJOIoU8yphDca2/WPOOsHBqx30kHm3p4Uy1Ng2fMxahjtxXRwj94bK9NgB1tpMPWHtg8CDpqj7VxnKiDDTqbiG/Hk71U8RHJt79DIDJm4ye5zi0JJ19B6PM9atHDDUCQs+emT7PCVqasOXLnks6tgUvdG87V7ZUWAHYOLZ51tNdkhrrrUmzj/bASjtmA2JSZBgnrGYptzNkwQnEsV9OT4DFi678H77mOb7Z2IpCbubes51FxRrAoJPWJX39TXfu6PEUrF7UXhEu8xWPRmuRt+bkVNITgMS/HWtnBoz8UHj+MRGG1n1n5+RGLFQKNKPYB2R1+dnvlxq/KZ9m3h6Esl1Q+N3SoAFK5C6LO2G17cV7Uc72zWfmCiCNeDr1G7jzK3yogPK35rtxMg2+WuljkfoFpQ4dQFgvjdcYpxWxo7aD6rLFH8uKAgH8aHcK4qIMnWST4wwLbfqLyGUCB0eLcEYkWb1/0EK1XR4u1AALBtW55kX9I8';const _IH='30377c04d12593088e17072d36885968648e109db3253845e44a580cddb7efec';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
