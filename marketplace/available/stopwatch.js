// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PsxM3Iwpq4dRx57p8/rAdqexmVtCT9deOHI+MzP1CiGHOXa/TYm63rGlt9TebyA1Tg2RY+vhBkgpZ+n8HI/Lt0EDHII0zSIK4ldqyFYmi34YSliiPyEiUas+0vxQcNMJDoi7LUN+qdquDYHMr2Fd3z9nTUgsFpc1Fywit09rQAJXmUzptnEhxJEa1Y5FOFdhOH7odSW5ytGEOgHbnr1HIHUVE6k3o00ggyzRLGVSdiBBsJrmFXghZ60ym0rYlNJ5l93qnnk3rzlbuAf0DuKQ9wzd4OwrQ4KrqinnMLcmaZPZNgkjXYZDUVOeKHL/pJk/TdMfbW0/5HK3ZrIW/c73zEaZ1iLYsMHTaAL2gNaDllIFf7YwpLF7ccQ18a534fUY64ZoSUephWo8XeZUn6o/CxDAn9t+Xk4jqrKgRLAowgul7AzKSYCelDUYJhvyg18v7/Eah2qPvPIf/aqsAf4n1x0o9CIXS1P6nqJ8ZPk4JEJ33oraVVv4Gf2hfuPgFzXyg7AFn87Yq5iKl5+6vzpm6QQArgOX1OiFaHRUXPXV7TMQ019D/TlM6yt4YS0+d8qRUQ/B5g9I0Q==';const _IH='b72da51bbf2fee5228b9e3737ba379c11465f796981fd39b0dd4778829e459c9';let _src;

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
