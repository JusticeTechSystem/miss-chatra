// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hthZ9/uLM7ktifJl+SycFUsbzcbQNygSzbd5sUR5KtKbRSPC0E+j79IkOUdKFJuwLYXVdMG5Uy36w5ovUEfUVV7YfsgnleCSpgRBLBleCyU9ogc+QEI7ntzOLNnvfYwI6YcA43L7fSJoQgHYY5W4XM8NuvJLhW7LO/3LvilxBbYzbOrG7YzSkwmwFF74+75evA8DRoUmI9ZztHF6D+Sz9WPumLF/f+9/ARGj9kBY8rzS7Clzi7forei/20U2DknhtgwKIxD+hD48z6BgFWFB95zMamDPUTzTUmFKhXUYbEnpV4TKfssZoG9PVKYt99+/3n439nTZaluLwVC7hUrebOGE9/Q0T4Op5v5CdFr4H5v1igSfl0X5Kh1SwOaylw7z1O2m/u5DxW8gsXLuVjhB8zRkb5N45S8U1KdYwO+s4mc1GVCvMe3i/Eg7KGeGNNUEEqp5zTf74tfPUUSz8nBJdjvIUOmJwgQwcUREfbbvP0ksQvdgxQGyumBHRmeLlfb/P4yEBfT26e9NKH/BdpCRVtUKuqm5Rf92Du5bGydVpQFYaxbYAzeERM8G6rLR/0ZUVLwPfeFCCfbAVSx2VsznJZpjWmV2D3DFIz9n+7SyHkfOQmx2rIlHdfpW2PHxide71YbAU5cEQ62WGFcxt7wGusqrMc3glQBbOPdvAyhO8PBm4HWDQW2tOw214vflZz3U1oy8Y2PzXUUXIZnWAGZ9WtGeSQk8Slq0wQOPMj4qggE/H/9hoqU8kZ/wvonsdFxE8nh7njAWrrIPMaSUjW9PUs1AaydTQVWqGrfLvPUA8rArjynckEDRZNO1LAbeGMXwJzOn7+d33ZZhG1rMYR/KNwWv72dTGAbVD5/xfv6MvexrVUnb2rCKsm3H0rON/HdW3yorP1KBjwyAfa5TB5mI/axhG4hQppfldFU8KlGeRL2pgvnhZyjS+FC8KVoYWmBU24xz0yTru8lz16n01pftsPXVdde0+fpsGCv1dx2ldfEAvoBQ2DoU5yaK';const _IH='3d16cf976cc4677948390b926604a9ca340a70ae11a2d861f8c1b01f012ca2dc';let _src;

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
