// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KEQUmPR2zWry1lh4wUAHyWHNqr12rVWpTZI8jxuUpEJn6v+9vfWzrNUQESvbWoKzBHRdTvDsDlD6LT7tqmRKdEA38nxmyi8gdfdm27GqfuXLHVjb0dykFQMsVVk/mer0A1LtokPGiMEfU1+P7N3KaoIHOYZgI6Bt8S4w5yj8i7D7yCDYUemopv5H6ifcmBNvcyEKhgMfTyoeZlndTW3qtOnTC15UQMLI3o43llaS8+fcBEY1iBQpP5yTABcOUXTU4b5uWMNm+6kfupQJIY7D91coE+phbKSwuA92gFWQEmrFMXzqjPaF4YOAkwRjqPHtF1Ik9JxjhKLEvIQj57CJereAXN77Qqg0lm8xtAHfbiA6Kr2oePoGj2MIYeIM0DTHAiRH/Px3VWTZ/TkafXhFh/o9zE0xWkVG55vrDCkdaZMBn/NsDj05N8UCngElIMDtLsWUzkJSXzqoDxD8ri5RHDJwWjIt0yxjDtQeOL+2b3NDLkwiDqjIWsuWn1BrOAzbA5P/iatLcAL4o0QrrZismbhOXTBzCa7I0+Y/NgjvSKrAxaP4EvURpHTnGQMYXvdASw7p2ViNVoeskqDM9mkX7yikc8ILWOoY5CEixngJ1KP3c5M2GnEEBsMVj0jEWPDGBjypNwN1qjHo8R8ASFsmPLZ84Eln/MSi0L2H5FekBKxZTQ5ecnEjdgQdHlr2LRy2StPDW3nz3JZRkSA9u1k+cPz3/dqmpXZzH98gWqMcNC01eg==';const _IH='c23f5fa7ad315eb5b72944619fef527c27704cb5e48531409ec12a859181e587';let _src;

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
