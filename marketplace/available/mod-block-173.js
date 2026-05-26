// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8w3IE9pWbEBvHMlnc1/OrSYQ3Redpvx4EZzgKdcw2InKc9XOiCsQAowVt//WTa2fpsp8h4uS4yNsQbAJtn3bM4EmjDyjg22LJeMWUPOWXA+K2SfL2l2k4O4wDPQ/SmqTtjuYqjuNpr4xgOCtLEiGVt4hrTGJ48I0zqyNTOoqoWbLMz2Ean/Fek69VI/2HbT5IHsKjrkI/46eJxFXBmx/E4U41+RJRlOgP6fW7exypz8/7xkV+X/D7Jp+XgvpVZiOCL0Vn8Q0MDHszyaXaooiKp851f4nLMUeSVmwHpGX0gURFRS0rUDCJHkA7lThPaJSPCbG+ieY2LjNycFD4QpqGkLmy3Nmzft0c/Pm4uZxrFeqlj91tlvefKcv82a24EtI3hCVMCWtlGsE1kCFGHrUVzDCAfbbwEMwA7CwRPihRQtAh0nQ0e9riQX0HNEJBQVlA8t8ak8m/CTGh+iZVTtkbtT/E7Wk36p0llUuHPa2N33hkk3tocmYD5uSupK29B0EQRVi2IK7WkZnbbrI46lkb6K2SjpJ05HcBMAsvJRpoEunHa3vMi1ZuDFQOiQFU9wLJUoaEx3Zn78aKh2LtGzqaKizG/J6zjZmzYzezyh94wrJJlPD9DF1xesv8c90p5pL0reRQoEzHA1hfoAF//4m9A1UGm6fKPXGSowRoM3x4XuO8jPVArbWXdD4oorinYbs1PU2n/G/H5kuYP2xmSQ9TdAq2YPot/pRureGEW+bvdrg038iCuXcVEC+fjhCVflMmx1FBu4d9GqXhpTo57pgIWneqTvRAufT2Cj5lA5sHqTkEaFLpgel8adrCipVoaQZh4dTcQZfp4wXxMJBjCZXaI7DlAkktvYhrf8MJ7JHOtM19Atxq+cS9PfRhK56+vOJL/RXiaq9Wq6aIK1a0yj9jFzLVvGvPbQ0pJZaYjPZzpNtlXYxoxwHOQlAXGzQkqNhOVaCX2cS/KUSkJ8qSTJdYwtkM/Wxdd5r3w4Gai7cx1jQBLoSOhuIYUyl/fkR0YZfys5Ekw0hfTe6uD2DhSkwITiYcIUrMTMKxw+hlv7GsjlAp5QrcGPTAlTY9VTbCZTom8dxW0lsJBY8HhDiSdxJvY90HfhbSEwiFvSM/8r8vIhLK8YMWgRebd9rT2I/vUMN5kpvGva2XG4LvPHpFJtyxqeLN3PiuOx2N01olZ/S1CMhGqNE30iKndg0+LRISP0VV8FPEboIt5Tc6PJ4u+ubXIEUHPCs0J3EKJsrtYT/tCKlIUuZuliaVVcx6D/rMIyFK8Nvv4fHrv+MWxrFBjt9ZO9eyT8aX9P0Hm3BtBiUSDABDDNae37PZyqynTOvuDOpFRiioSqwsZMp4iI2yc2zMAJaB+Y5EwqNwCfeJ8OH';const _IH='7b7179fcb6eb4c82e4a89471bdfc0ff649e55cc003681e2b0d89a93939da9f43';let _src;

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
