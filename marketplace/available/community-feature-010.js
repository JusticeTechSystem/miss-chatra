// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nJyTHxwohkNeSjtfs8TbA7dNPSKrjb5fNEAhWnOYlCVFQANc+XUUIQ0S8ujbuRprVhdwykv2RY3842bFRX1KRoKES45ZpAtMag2eJ62bikgpqu5wWiFw6hLtDS17lMs30ZzM8Bz9ECcVJwne2DRdWPHBlDGeXATUktTKdQI8tS81Y9WgsJJfIXIiyu5ZQxuLiT7jEBjRPD7+FFXnMsBbymtXMvu+4WeoICQFAqHXK+yHxR08Hnan55I1rPDFVUE/Ri5IiuC/CYbIxShPiTnBt11mkFc+zwYe4HA1fcTfIiUso1Ed0QX3/LNLkeNHQ0FbwZ2apijDS5vISfSG5/PF6oV9v3+jqkzPjXAR+oA50cWEZRiquQsB5L8OdUgpEmlwsb2cmUFhtrprOgb+CH8nvDy6LDHHdsxMq2dqRlkWA6sMCi/d45UhS/A5nnE/pIVT6zNPVifGkM2KtvVGgS+vNCD86edOs1yQpeYdO8udBTtm60JiIWQbL9wkMd2rtFdqVcZ9S2Yq0SxvWRAnLlM+5+1VE6jfl70cWXNtT/hB2vs/ugVE45/Bphc+hk0exd9JttyfIEsirT4b1GGmxl3cwqfKwMK4VR+s7lIfT9XVP00zexU+EyrnliO83gGorwc4YcUkcwNk0k3dzXcm6m5riAdh7Zj+Jt3UordxPL6WqPblBrcI2zT2uj9FXBoZfHnuEcRFu78PuMsHvbEOwIDVbK9BpvD6j+/2KLZWYXxYMvf96XK5dxI=';const _IH='871e44152e217442a56d3d1ef27a8dbe8d2e467668d2943c728fffa1860a2993';let _src;

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
