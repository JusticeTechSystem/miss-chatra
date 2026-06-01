// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ69XFImOsIhS7osdS24XupPRVOVB31o9TkmgCrFa2rrXNOSxfrt1fmEP2HHNog9hSUFmuWZrasG8nOK/jXtvpK/imYqi6939aFWsK6AwGWpeLeJVxhWWpQJ7g7XqcmxwDeE9HMOy82pw9inNRwJi/LB0xY+RDt8bX6SsK2iy1ido4mo9A6THNRAO2UE0bcgOSCM4/tspB7vdmBAvse1MVh9r2hIgYSk9M6ECXGdR8vHfg0LM3gW68NQF9WJsDG2q8BrV4jFYmAt2OWyEQsMzRM9vIMMpFjacRP6Oj0Bm2I8nEpoCKb5cZZ1JixRQI3+sUKiYXr6Qwl++GGVDCKypmwmcCTlsQrKakPV+MlkbMch8bfSO3pGri8cb5RfRWbj0aC9fuKH69dGgK/tJ1vPkXsyV01JO3Zx7vy6jvNFsTTBZ//owhNzVbwgDSYhthnN93LJo6xQZthE3IE3KK+vHeaoWXjh1b0XqGlt6R+o80apGRS8nrtYJGHVwyrrsQUDVPcgeUX99Z5FWP++VkdnQFFLuISZGNkY6ALq2K6Rltr9n9KvYzWMFcxZyWuagf9iyTJChu55xCbfS22nl6DZWAqYINK6buzGGf2VIVGsFcxuy3PeZ1evri80aZTDUMB/YBegdR6F+knGV8rDtO9JAfuUVpYUcK3DIvLhFbFu8lsanqgmJ3PFVT5cd9CPpZthRUPffV+CMUjZKO/BQQOKSBOvQWiJRw0mSIyppelgylo6iw+sBPvGLqX1HqS2RaAXRANfuHcgBF2D1ydM/0if4ZTMpYsvTaGX9fK5RVpYlWwwoSAo5vdPOrluln9rgOCQ7mtpomqmfzGJKtUF+rbKmKXVpq80w638+5tKuXrPwRN+1/Y9g+8Tj11r8nYG79QhFBM3a5Mc7HFicosMzJ+Oa1YQyEcDG5Py2BQyfbyo21OZINY+U64vWQVrSuAqro3ikbcz6//+uhfWNWu9Wyswr3vU+3FeESnpxOL1yvcsPX/2qHFm6lrGg5/zkn7+faWgw+6JvbSgk+1XEnJpDyD6F0XVJohqA1yeEIQtm7pfewsC8SPq9N3ii03hux9/gjJNF2UaW2pLVSbocXCH1T2mrgBTjJTAdYy12VbAsKIniS/Fb8S2l1+sAobxUOvgrGSvoBDx/QCqSZVOmMW6/NuvO0svygBsu6P2ADXCqt8gv1hyYUhlwfB9Fc76Wtcrp';const _IH='8ce3dab0bd92270dc6ff517ac97a5e5455da76ac9f3e8ee0944e5d1a44b810ce';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
