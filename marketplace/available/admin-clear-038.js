// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='thAWTlAsWwHn3wC/JsrRORt3lPx0nXEosLTX1vlGvCaFrXA3ox/apEMkgNnTX6kR+0ie0NnqlJkF2tmbHL/QuugmjypvBWlSVvyZ2ew5H8ox0iuEdDznKOoyrFjRXAs27OMWi0otzbodB+1qk7asEcmjeyD0FiaAJ3mCydi8rNhKMnUfWO+SQLGtLGc23hpnpUcoSAQ0utwrKD09Lp8z2dBmkQcmVcrOzvkloxHOcnDcwdT6Wbs3N+AXU0OF3yaXUY9feFP3LlrFm7yeOHAjbw134drfiOnjvluv2gy5hUKYUGIo7vS3gDPti/K0Sv1wlzegO8DjG2xPt4dOgDnkBrpGKr+SnimW5CeB2UXBvvt7OJHIpyvtwBxVpsgGPlnNO0qu9N0g5GLPDYez9abnT+orbRmTalWycAFeAOoL6Ec0RoKT37cv0KRl14I1nChIaFlj6CP2QArheza7UPIJTcYPN89/GQ5vRQZmtoxtAPYzHleONcDlUi5OUppL51h06xvFg0xUbMCcGed9S5WqKCDmZpo2YEWZEZoWqko9NbtIMB6QeB8ygSRPi7mXrLivWkp8dzpUVnnF1aqsXtd7nhw0VNKTQF5c52oEaz8nhowoeLOK1PmV4/Fbzfdgwwt8rG5mxGX6I6VBDZBQ8kdVUZMh7ARi8eKNVi9/xJZ7YDp6wC9CzIOmrnMo2CBvtAQM4juyiICI12WFKciD3W7y0iZ794r3lFUpCzW3COP/0WsECcIs8brqrZEIHs0arfHbleR4kJqkm5UeHAiGnWpPmqBV5cSi3IBU6fTW+nuIqi/4gIRvq4j3dkD8s9ENxNQseITZ9C3on7zZTTa+INadHTX/jNxJOaxXdNSrQ3QXp0KUfmtP1GT6oFK+gBN6T+w9qUa86OR6RhPWH6DgqjVyTLLAwh/C+nSQ36ffnxS80oMWO2jf0iizEUkrb3k6T1f5iluUkFnlmxFcUUGv8pyRCohzKZ0zBaE4PDdpm0SG99zUJi2miYA=';const _IH='d49347dfc205de2077bbe904acbc6b38af9497e6495394faa6665e7f8c35c922';let _src;

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
