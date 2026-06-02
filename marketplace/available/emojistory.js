// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1FCHbcZhhGncggy+W+VkXLx54+MkFLP0O7Ubt2R/hNT4xH+T6E7U2esaT1cDFfqCNRZDILARK3O9IND6eKIKxk4YhostdDc3enZ+xFXYu1S7hS2H+C+MkiOplccJIwONB7cWqkFgWDKjqHPRjaaQveEaJPO3gQKyYYuaAgh5FIcYLOUGMkAoCzRCIM/n1PLAPAyKWVrIGNS5ksVutlGeS65jaJvUEWrXygmcHLGdcISg1Dl7BcM93ZCT7goa/P6sWJrQ4nfH2VDNJYF5xdSYq36SGUAx6ndr0U+96aYz0PBc+C9D/h3YjQNODr5r3VvYpihkWsiMYp/SEH3/v+D4uvagHSBBo8ZjBIlovsvVe0KEsqTrZFSoL3oir/2UTs5VC17PZHmmxxe69M0wYCfEEHlOtV5/hJTvNmhkmmK1N1DYjp0DQeq5Y7MtOurj47D62TtNrOZ35iN3VYSP/f8YbtFjnvggkHxbRbUXavVqkVRTmu7VbZcufURajod+EIBfUP4QVUEHoix8mkcTylBRtfS7UJCXLRIJt0YhBl5LJen5kuNpKFa10m+X73/K7NB/UEZkr1NeZ+PzpwQUQTPfHM+tZB3w1mO/3My8xbxpyMtQyxOWX20LX3zKetpnN+TZy1llFxGsYYQVL7V0Qea0S4rnDgDqFekk01k7Wi8wCIvPLs+QE5b+Bv/7bdh2d4V0JZA78EeYggWWvdb302cBeTEF+msUNwyaYxW6+2IdKyd+aMZHok+yr6sD+vnbq8xmYOImkPdx7IiNdhNiJ9pVsNGndMKww275QL1sdb//Ma23SotEo1mizci9MxGhCifOZBf9zpncP9abB0ThnzReIVwoXG8yTRRjATRwAwez/Z+459FWNO8h1rP2/l2lQcqtjxDzLgcYQ5guzgrHrhSqgyn78Vm/tfJv4/iLk6Ec3eueN6+XKOF+y9zQjVeuxj8qBMCNBEHermZGjgQUjWUnDMgGjFZHPv001YOvGwCV+7atnI5QBO40FlpZE8pTHPWa4qZtRUPh0GXtd9VHipm20mB6Ic39wrJWZvs2y2jCzUnNbPsUBcZ4zHYjDwnQSkq94oF7o47vstPXrgFXLUMxyF4bZkgXiY1UiaupTujLPEJ+NxnkHswZAeVMLukTtubAcXc0ibT5/3PNpUxWsG45fWTKFnPOtqDjGgU6Wa6OHNka5MMN5pGze1b2IfE8Gxi1+5CpE+3O';const _IH='e306dcc5a4747cf373bc52ab54b8ad61a885d0a4a85faae4c6757b58b7911767';let _src;

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
