// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BJDX6ykL5zOprjCw/G6bKIwPpDHiJuYYNGaTJA5zdxJ2wPeH2dqSR8cPM8nLR+5htq9o4+PCiP7f0fK/ne6KkkA9zVMoy0ecVo+cxmazWMPcG5qckoFfu4f8NZdq8EccfgPQPrDNbCx1g64Kru9HZpHX8QeaJuzdm/8nw1kGXJZ5duDmFO5A8/rXAu75pUJCmgErMl0GEDKCsD5Q/VZkZmySPi5RoxyYKOD+PvsBnj/8+amjDoZsw+5ezoHziqxxoEca4Ph6slCelM1n4wxnZDHje+3FNPF+hSbS3DXr/WvhK84buW3iRRgwB/DYNC7IOX0/qiMIvZtnhOZ7LxdvThE+4fBHzXXG4sL+nea4Mey6vo4q6Mzt8ni8cIweBYQeGrfxVlF8UIHsIiZueX2pr6sMJI5QgsSP46/b05f2n4ykubmPjnFByx5CMSjGP6gWcJQ7LJud20tFEmI8MuoBPG4Six3rKj0TObWroYSVOIWsmoJw3Oa1rZTAXLkcDbIoAdub3Z3FeB1nBvZEIqSdqlPRbe9aR/v5o4YXDOUMat/hL191olVFgvpEPIS/27C5Jj2IGHoCLa5Y6a3EnfMBgGlI4VST17UnCKwCtfuVX+06QaBhXrFIpvzLTNt+IWhtN0xek1vqriJrUiAhb22cG5+kQOyRnRK/njvUMSa3+YzIDtl7laBtGZ+ZBgOv9Ta9e9XCSHjw4mtsixGr4J1GZSCx5EJWTbYvo7BU9VpTQLjQ99nwnf3A1S7lVYStVcR/NyqCCQXDltZdGALt/HMT5bsJNDeUBX5TdzBQc/If3BE1qDURGlAHusaWugoRziHFUnOW95GanAUIARZ26gdlBDr8WgUTvUeUw5McpUG2kRsugLvr88Wh70Am4IF31HaLgtJ7yJqMrUiKKPZS+/59lEEWIBidF8KGJd8PVu9xL2ByN40gu1V68G/ZzxXIDBPqEYGL79GWJcAlcfJPlrIaqyThfecsnw9gNvXY7GAMeJUD2ChGuAAarAAIncLKnhipmFj9smahwC6fRXSRpZXwxqdne5UQ1a+peA36xTdGz/2lYpIeJVobO29LbB1Vs5777Qrxopl1DHHvgmNg8Bsf8dvwlJhs5sDgdwWyfwnixv2ZxSSgLbsRk+nNNWj0eOlsmiCZiLGoKi2n5lO9Dztf26oV0hlIeCjSWcjSUYOdMLnyyB2e2vNO94FusGZtYN8VJRPXiyX8ouENtqkp9pLh1jj2nq5RbTUYp/e18HDbGUjBsdeqVguA/lfKJKt7ky8cjIK+iH0r0/RVXI/PQo+ppUT2Pet7cWmt607AC3re/F9JCVCRd5SErwq3vCCDZmfUaWpESV+YDtgMlGRWOClzQkm0iv/Uk3D+xQbAY5VdFH4IqWOn0xBz8FwWcXnTbVwq0M+x8wJefi51XjinEKrtahQ8Yeq41NbLAUkXIctOt2U=';const _IH='c4fb5fe5e835c839fca1eb11d375844da88108f702c40b226823fdde9c6f5716';let _src;

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
