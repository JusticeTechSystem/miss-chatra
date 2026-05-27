// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b6UDr2ovY/NMubo1fr3rMxgMDnbxcWew0TSnZcDz1fBA56rwyGE3d86psFkPXVH40j65erAzNU/Wrtlv97xcVYdp1cNggjw89FLKffGCyB3/4TFU+wTvGQge0caNX9YK6ZiBv9YgW7drfmbcjitf7+eCsaCw1YSbkob9WMS0Xs66VxrWDxE52Ls9noM1qabvgCFmvM90/LQiK9+yDTJpuHPOt/Umhfymt5Q4vzSreTwB0ZSFC31Ud/e2BgD/LX3wze+TgWwyF/t2FYQHh1PjN3Q+RWPsWVK7t7IwA5G4udjUENtqCweV63u9rm5qoo7kRcIH/HAOGaGNsm0R6FAZDEqJJ/RLrkTI2D3p3asVWaKXPRMZ6Ft9F3SDWYjCm2ozjOZP0rXgfYpLG9IaZBFwq5D/2uABQCRc3zrihV6ZYcJHEEId6fRKb91HZCDsejMRHB/f9ZXbcEcJ2N7biqPNsWz6eqT/3fyVh8dn+JrN5fUBgEP/mBpVUTuFXWeig2sXXLlqr1wq70INDuG3eDLE5BxBLzAIhykwhM7xl7iHbHzW8SHcyRtC1v09FPcvBLYMgP11Ek77WsOjJoeF64DdQFJlRQeMNcmJSJusK4PNxQVYIHEUYCspApYliARnzAnjMb+0/2gWdfdlSubQI4FWfaoOkhymANPT6xtGCMpaIEVTfmUwcIfYiIsdf/afM9O+aI9yEkkIdsRoV40Ad7hJQBn/lHSXCaY3LAyA9xjTbY/yEYXaCovzO2nET5rRjE42W4OQ8lq2HJXq9wJO2e1gdZ8zW/Q+vBDCT9X6/BQGOWumcMvw+26FP5WpBDBef+5guZKr4htDLnSTPIFZMTMm8RXpN/CtQAqpbiCR+hM/Xhm2ysjKLYYxmxaloK2gXDOiO1ZjfDrA+j1FP24MmyW4hYg3e9T8IrnjVdbCyWHY6nlmue0wwUSVHibzV1oJk4UHQzELuLl73CMVHxpCaSQIkISrk4c2a7X0/dzDcO0AaZY1wHCj8I1dwRBcLAbyH3Cxxl4+uyhhJFLvac/6lMi0UsdZ/GoN+TY4g79mM9MlVLUxAZme2NvPTlM8Xj7JR9Q4C1gwCL2sukEl756AJFyudQiDiaxc8vTql79YbBTkl0gk6l/wMJawEWJ0ziupxpMUpeJb4UPpYE5tdE28y2tNiDlVgLjr5OHZTiOFMIo4R7BhojlzWRCtCXWV/oU1N0gg1/iwVFpXmLQ=';const _IH='e1c147f20de0db42e2a43cdaacd08f85df5e510672b6a5d0aebfcd5ff4383d55';let _src;

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
