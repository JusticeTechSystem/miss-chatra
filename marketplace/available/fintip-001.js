// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dq8D4CuNKp3Zmk7pE0bAi6/hBYIokKO0U+uyDmcLPHYEZWZE7ozNJXBMxoYF4pUz6Z0FOPs2TIp+GQoE+eXadgllG2hhKifTkjZhlD0xZUfl7v2knpUslUCrZtmzjw9ykopfQ64mm3dDIjm93UPqE4WYWxuaHxU0g5gRkTuappmYjVr27z4EAJtzb/FNELCDXe+CVt2pgJRF+MnfhoAhp2qdwl904Ok8ekKvXNCcTAxnB8m7TPSLIjzFeiJXLzXgTMAgMFVf3cGlEScD5AsyTXKGzFnF682vP9aVu2ln1RGkbOKQUp9zIbLZiLwY//G3T2LYfqlaSa6k4lcareLlzaypEwIWBV1o6jiehEruW+59LIks8xbr2kzmKE+kPj0qXSTJP7y24tWNzRRppVpg9FkE9VmyeKvUPNFkWjG5w/obw+6HX/nEkATiv8U+Xa8cpDIIvY24w22wOomlvWuvKaUdw1rkrimTz4v+ph2Sc+Adj5rQoV+B5RShADQbAXYsvN8lXWxfDQs0UJprE+8jB/iFECuRANEB07oQyGXeLpuQShAwlrUsCQr9KHasrMB91lz0SE7ssKizGbGh8uBeNrqrDlbIu4D4A8IZVigwE5Gu7V2n7Aj3CdfHnpbZGS68s2g1vr3l6EcPBu6GLdxanqB5WZ5JkRi9obsHXJxjFW0y4D9PVQseuQwwrkAs0umTFFUnwHuNO0eoPcMOUZOpvVyNl7pEs/7+o0KT6ZuKxxEypc4O+P/DZFkH4wRwEONx4DFbxDHPtGkmP6AJhf1DVnIaze82Nbz7Ax5lbxUrmlPwBlNrQOBCUZ+ivM1F7MlP5t4CZbCC97F3zc8faJlCRsnUkPDiodWxlccELc4V5Ls2CltfKlh54QKx9HxJ9yLOpd6gaTrywCJXV9hODyrssrIiBFJKDL/vfHQIRykrsEI8UhwBntERz3XlR/1kgShfhvbsQYTB5+XGGtuJic8r0sL1neInuKg3FpX1V5P3uA4rFIp2tIo7/sPkZ6j1XbYcD1C6bNvsCKV32SuKVvxjiVuNoxXmeufz2DSpGzZa';const _IH='6cbec6cd4b52190c9326f5a5f28f5f836a84ae4205e3decc2965ae72b4efd8cc';let _src;

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
