// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qJAAWHZEZowfeTXJI2J/aPVbjkhhdwPTAHg30ANHTogcfDaTv2b6O5XDMI0APWGW95EPvBMvdoJc3Cf6STsHhas2qjK+ap6LzdhoFYKMW7HFFXs1xk1dyFKVZVo1JfFHgpgSPEmsdgsLRr240q0wTIy1oY9UIAEA8TJD26KsfuHUaRW5cTchBK8eKBqv/8aKgh2NH49rKEHwFdO1pY/DGtyQ6KV+OYXjmkKCa9f++juBXeMcScJq0Q2jTAYB668zYxLHXNfqftIAnNQi6gn0V4CcK73tXulw/srxdvBJPywMQ4b3aGAsEJ/8Mw3gPuTjKLkFkxPPadd6dihCUwMckOeu5mgUD+69Wnc5vipI/cJONJjLjIlB9a3phxom3xVnTc8MBLYQBBSp9PHAYYXiM7KKEWKNJuEe2KM61DRHIeMbE8G0LfGOS/U0h9mBKwH6hRCYZgrgxNlCXkZIUd+5msG6f58bBOCx2Jvz1XprOCJlMjdWkNASypc5BDKAZYN3/I7gNexb9RKZuKIb18tu6Hf3CGYY7FcATo3ZiJSQoAhpI2TCqlMkDPUu3nEuwNup1YKTxAqVqk/dhPiB2T8OuS1CQVE7kRva9rM92wabw2O5O85L4OEVudp4I+6bVHYhdvUJbaFi1Yvtr33THZYyC6OHX9vA0+pYmbmBgHjMtVrz4b6+rI3Bj+DABeait3z/8hX7DEGEcwe4GuJM2toYMCgPdTCXWUS7bEVvuO/C7kXr9vuhVvpUSwrtEg6U0vv7obKjauzGnIr8dblnj1lpLQU10zVqUZBHzVA2MOVp19hJHNxzpBpF6gwQnCrK06tsq4UA3YrBFIJ5aCcXoK0ic8oGiglrZGN8pyYu/xz+dxBiAX6rmsE/AMNe5ga4SFZBwsna6bTfubUN47ftQw4UhxMQRdV0zTVARWxhWSDJyIB8pOeYdB3wTzef0vc6Fv7UWGbGCWWyZo1WrS4aDugWghfrrme2MpzvSIAuFiEcJVqE+HkA1QXJvMUW/2E/7r3sZeqETo8LSo1xuH2aZW4dHYoRT1V+HIGSV6wQbfhtWZtgvhCVdy0ZSubrqfHg+Cn+8jJ8l1KziHdmctP/zTrUEusc9HHRA06y/d/23jcGndTePu8LAd8WMai0fi7oqPy/pkofZsQ0rcexVPn29qOQkDmJgu6KlS5N78V65b0vn1YLfiHVehspMEZ4WvwVZKhxi4ibwmmw/4TvhUfIH+s8w/RbbeVbZb58vfC7z0zi5LJsd2wIunrEZAGikzkmIeSBiyyCilg+tkZkeCNZ82V5+iyTr1bhdYeHdvaH03Ho3Fm/8DuYzew+yXNp29ZnGdjzDVhlvPPEZFPgY4e5230XBfKl56sIHz+DZsUL2nSH';const _IH='9bbeaeabfc33b3fab4e1f054581781dfd1d59dbebf4b1ef831386f42b93771bc';let _src;

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
