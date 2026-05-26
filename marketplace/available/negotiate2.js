// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ApH2S9bHi9fpdbLpSEkKaaOcZbpWX/wLOrlnneuMBwA4Pn1BFuTpHKFwA0Bt3vGp1dguUIXzDWwC6K3cpY7dHXaMnHUFwewO4XjLxIYJwpGW5qk0nHy2uTnvanTRIF78IV052fMTmvwSmRginccT1vx/qjFH7rsUuTunz1shY6FGQKQidiU/A9gCBDmEoot409f0255OSa2iCT71DhJAtfV/VurIZ1MnwqUsDkuXbVHGWZBlNmbSzbQ8sqBJ8GCDvs1GVY1rBplg7K31jM66cNbWwjutB4N+s8nXZxLYNznlUNmVN9RN8axaI0O6X8m7It+T7q1Xd5By4SODtQXimiMqu0mT1NTAj/tfv7PYp5U3kg240KeMkl58r61k7aA3/7f3iYjrqMdO4bl1BvF8xWO7mEry9/NikgU/U+8TFjzH25BLAshQ4IvjWexbZ0uXT+taBX7RbTsSF71Qk/oI4fBZSyECQazJwhEVZO4PSb+0Jqa6qMCvlZJ1erI4d4k9foDaywoEZ2cFY7NPsqEi/EJvjEDpaP8+yX7hkZy0E62kpJvkRKPiIy/+zxetYqiBGzEYQWiaFsuCOD1bwOe5LgAPzWFjJwbrTwg9u9zaIPeAWwaqiU+8rMwNYLJIzeU/nVSpmkCQUOr66xIs/FFz81zMo4YOW3D+joxmx2qEcys/FOq7Pc/stD0QpdYzylIUKBdXkT5pkmQdn0c3ZcIMv/yFyzA9dmIjaO0aVMjy+8xzSrnrvz5wrARNJm21tANGWzGpDomyM4g9W79uMYKpMQJyH1NQViOZAOKYHGZMUlMbqcqUbbX2PnlXVAf4Gh1Hei7KJAjb1ay/PDzfAw2X3IRov/KxUQixqTdXrb9HnmmRe+BTojaa5pQyS3ddZgseCtnbVT0XFm7szJNdW5MTfFuBUfII048OwiQ8Ju85Y1oNR8isI+il4cFAZPbI4sGHMnl8fszSFXVN/6GW22kcf45nZkAfWc2MStTdlVwZilVH4v/qb2J6J1+25wLElR+u6/HR2BZEoIpmojW56yj7RUH52B6eNpPJ4WDpbtl0lfgRtlcsdIOfMJKIZggzP14g1vfu25XyJUfvZXY8aJuKUlU2DBzllnMAQq+dkJCrx4Pnk6DO5Kllgzi4bLKw4mg4KlrjJlsyxAAOXcfem+lpYq8PftJJsHi+TGxg6MDS2B1R8t/uMYluXu8VBUcfxDdrqvCIi32BN302j2Qw2g+t';const _IH='14d2727046f86e1be560d0fdfbc4986db39efaa0b1183e15df88ff96f884cfda';let _src;

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
