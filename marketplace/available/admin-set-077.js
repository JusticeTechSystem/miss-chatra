// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XcKOCnQn4TQT7ViZn8JoBbd1Imx+tCUwVFNLK2mWhE8GsL5tnW18nyM/RtUKP1XRyM+Byp3xqd2J3OMN0bgVTmgkS4RJEu3US51N0WQilrI9KSL+TiuP1Au3fXU5Hbd0uDPtLD5mHa6DoIkfUPgiBLcZVh5c6aAndA6v3JIr5PmDkfHP7S0wZ7+xh3sVbIoWPhY79A9VCmSMg8WYUa7h9XTevlwOisIqGp61Nqu+QwJ753Q0XTbdP7A1Vin4sGm6G7oyHjW/DjFrya54LX3kcHPuGUVNMD21l7+SD6oOipiTOf8sUYtgMvUG8ZtyQUHgN7yFoeTo3eW3eb0nI90rEokxUPPDDAcBZ1UkEqnUJ8fgXw66zBYLHJQ5uWYs44cQK9BAzMmLJaCPp2I42fLl37m+6KaCebn+Gicj1YJsyVpMFFBIdK9rB9DE4a4b2NnnmRNHj50aLwq1VLQ/sK7E69I3aNLNL9Sgtpz9g21iKf639XlNi8WAB9+suL79jhoHRvH6PaJ2kH1Yobt5s0faN6mgNjvsfcec7eUGs1pG46HCMwjIjo7+bVS1UE+CphyqirWMNjDBOvBIlLMWMa1PqkvLhcsZjgbCCbI8EPStAdX4qzUqoKj/o4pIPh9CdoE6EAjazrJPPRp4O5KxPopWE98JV/KVEEJ6TuCy1g/IXi6CBUpm31bPGcK1u/RFwkZp2K1dmLuNZgUO81WtfNteGBzLYuWq7qIHiAvYjf7Yv7dxjKR/Resa34fyiPjmFjPhg+DcsnxLT+ufHdOJYG/3AdI2tpfc0TssDHPdhEyJYrYn62EP2ppkFWiABT1wQrUbuMHJMa5ovGt2gx4JuMy7QzdalDP//joJhaicDY7V6MHxHmWZSOmRSpXKHXpPBajl2MOF1GpTqaYYxl7TCIcjKkZk/Yq2C6ZJ2YDn5qKP7oNKp/sPXxoe5RiNGnd8ERL2WJs/c9ZnGf1e8eQtlX6NbN4YfkUEQCIj';const _IH='9165fb7ce19b5eafb15005eb2ce5db0334c4480a0748073e77c4ff88f58c7afa';let _src;

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
