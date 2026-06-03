// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bfc/UivoKj8RiqrlKwiehEHrh/T/v7y7tdzfK4Ta+/DOYIl69cpR3pVIYxm+dVUq+Yk7MMWPjuBDIae/CWwcMTKx8frnpt4snE5CX+YDgT00S1WefsvZvwagjKhm3R4/NsxL6SNJIvNMB0o3ImUPZu936Obqtc6eEmFBpE1mwrY3jn1DzO/EAhmdbBHHDGpQnY7wBdvWFyCLMLvJLJSlIhikyW4d1mYhp2Si3DkkFv7O3g2P4EQk1X5BPxVqagUA20CSWhis6585Zptt9WAlx1ICianBlmWp+15KEHi38SGzNc/gjtJB4LZjVFXFNpVc3D3g9z1LopuJ73Hi7gnLJf99qqXEC4MwCP2h44JQ/YhNjl5s1iA6/NVPp3QOkEFuMdy8OjJe3fQB/hwcJdr2RQkk7CGakDq22IIsTceg6V37PSGQIchxjc8XeQcyPYjzqeeYsTuoOuLL9piIGfkKsRe9HWvyaIyW2LC/7fKfMT/wGCf4I3q9CMLpTbWIjCGt7qsjI7iwU4ZHeWC+F0o8BgBebPK/Y/PMsFvsv145jHkhWRXBSQKOVc+/WX/S/93ouRibP5XJjSyHgmfxF7IBfHqNKgn8KFi+6zbZPIOoKze8gt4HlxzTBaKxfKky/QLjQBD3B1waRKb7fzZoYiwYw16EhnBo5nZTfOyzHZBb4ttVB4WGFOOPGIkN2QlFAdWGzQI8bt+Ly+mCVoG35ImApnBN4PJYog0s/GcOO9JeklJ2ymlOs81yJSr94T3zzpRKBisn1o9DyKGrQLyz0h5ziAJfrdNDPgahjsMKmnX8QoKg9rQ9JkHDWpZ2mrk5QMKOriD2D5a5P9TZLbaIuBjBbqgtTZi50eng7z59gBSucG9IqDF9MogGWHX1KIGDWD/t5dCepa6lHeS156elYBNMgRJuQHAypbWezbY2P20a5P2pkdxCRKViPHbqdWvJrlTx9dZr3maUn/nOC6LtFR6R9dGVQqYRsMwKFLh/cg==';const _IH='55de9e120f3d28ad3b856c0211bf7d4197a9e225229ba8bb3f17e7e038a348d1';let _src;

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
