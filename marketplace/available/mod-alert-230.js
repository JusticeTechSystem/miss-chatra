// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AIAczfHaFtVfhr7VFIvNKqgktbVTVrh5Mb7D0krgoW5Kx907//+e9DRnj+2HehDqrMo0+s+HSKNUZ0EQmwJd0CZWbTND8nU7FAYJW42QM2n3efUfaNWolWQvedsQRrmCwd07KXLvwTcnLRoYgYObPCW62HQRPXSbDG4ZzW2KqiS4Au8f50Ha9iEs4F0zIbHcqRbIIP9ErJHHGoQVyEgTD0r/srW83Yr2K5yCmuTUntDh9geCNtcV5Ggt2RtAKZRpvGqqp6zf/Q8M6nZ/sddoJqhIkQUNhf8tDlfG/99SSpMmExHFl1usPtVONPReLh5ZOeuRGO5jPw/Hb9UvYkEOr7QuPewFMXgIS2J2UBV3zO4s/4Fq4msWUTZdgJ2OH/Zw25qEUPVozxfBaXDxFFl0EZo02luTym9DOSEf5ijIXrwG8eyPYMNpj4EWynfvh1mm/RehDCJxU1kjW09akygX/JuqZQNtpm5egCBqHVjppqFa/0c69W3++HaPmYytTJdIbyu6FZE/dccPwB78DiccdyMSXGm4gnfa1vsAa84LJ2tXEV3qiA825ynDHybPUGaP/Pacn04uFQFoha4gnDjKEZfyA70l7p+O+jk/aODkrMpkmdCCFvlkY9kT8puR3M22G17lfGANESwYpney4Yqe0pp819Yuyr31hd9qwUQtVxTeBxqOcDI2V0FZbxq6bm1LbWvUUlGM8MWMof3aeuiqNq8gq8NGKl1K+7YHna/6LjdR/HHAX6/sTRSBLkaHtlLGqsEfKlhUT+CIOjAH/EwEZTGpAXdqR2Vit6t4GIYM5B7V1W13HrTisPsrtj63YgHUUkRoKw1u9+hJHNWfGfaQx4pVrF265FDyLwpfYNulfpprksTynP8AA0A1KpE6gUX3AwK9KtLs86q+JkYsIGckeHFiheS5NOBJQKmrhA2Mr/WoZ6RyIq0gjSnU5zjBrG7KG3XTUhNQUt79TfKwUg1dFx/oAlYw0KBCT/7zAaumrowEE4RyJwtJ2EFVtHvY2I17eRNqGeqv+N55gyx+3iSzgtrPMrTwOR2wPPSCxGtOqEZ5/VUwkiiRRmjxxg5xGkF85O6hQ77bB2xhsA9n6Q/hoFb8rK6plStWXK/ufVYEBgqsh2BH52ZIACkKdgryzMDHDFNw37lVnGBqQeQddFBcrYCNMCBkgmDkqqvTnVswj07URw7+GjGFspS9z1gXWe3Zf4+g/oTvwxkY6ermVH2SwjIfwqrnE59HmqgXBX2QpreJSvYDb8NPXI9aTu74IZRIh+9VL1EmDQp7LhqGCUaxvcBxzlROqm6F3dt+58BqpJydTYWOMhazCtSBvSRNYUA7bbSa/cx1dY/eZMQWycdjziYGmPZkwoxtYwYUihmx';const _IH='5ba703bb852d7aaf2fdff977d942d87c4609cb6bba8dfdb274c2cb83f723891e';let _src;

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
