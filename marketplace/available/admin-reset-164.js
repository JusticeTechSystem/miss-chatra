// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4k8Dr3cE8m+Ul8XjHF9zqLx3IB2ris6HD5BrbAOO6j8seyFuehNDzXliNI+EfCasbqQ5p/oQI4S6rc6PdUI/7nFZQGC7VJBSRLcuIZMiMZ5fXbznlEh0qz26LHaRBROTpqlftDUifcwntzuguirXP9Ev57F3u74EVHs2eqtzZkpQVEF0C/+3SGyS0znqtXsVE2PxO4Tt52HpBET9uLUG9+5Yb9e0+m7SH1hJGtOIb9eoi8KIvBxFTdDExVytpoKLKrAhKBx6xPZBTfGmp0+qlheJDXtlq1IqzHoppw6RFvigcXc8RKUy3RPOwG4BKm0QbRWRAyt3I5RM/KIKlU1+WM5gN4cLLVKGZ+yiq+chSRWHuCVW6Ny+fPIWam6LmvgC0YmCCuQFrq2ZR3VuRU2Ywwy49l2+IshHoDvkkPJ0g34Th6U9wEVsMjek+g0/71ubwWGPJ1cjw0JL3qjXJyZk+UVK+Wncwi1ZB4pogPdIMcUXxUEbE8H1P+CIWsh2h7Y0PbLbXnAvXLuhekd/oXYts4KkUP5Kk0LA9mgK2eoP5tn2vldsmMmtzPnFhGbFAyDv4HGA4Y0XjD/wOwW9mu9KVD/lcZ2vG/PCAfWx5IMOYLeFKyO8Hz7pfkIEI9/GqymfoQRqjw8lZiu/elRDKSVBTKSTpblz8VRRqNC84YFnn5lLZ87r4tREs3djIdwwTzEmQ7weZFXOwvksjenrkmr+myOgUWClkzldVwjB7nZsjZq3tmxjnQceuhRJ/gXJ/R5/QCBNI7uYJ79vTsP39qvJPfoEDQaE2nqtAKVJug2oCiNxRyn74N5rT0qnDWktFja0vg9vT76fKWxbxsXIIAMRHItNhJeKXZRYJQ4ky5IQuU72B0eBINCG8WCp4xPZpSbx6phyGrDH1rPfoMUAcDJJDoKJQImn4IKWksjpjfO71pMO/ddZVf9s/V25J04K/zukiuK9vUDNpgowODAmRHgrj4ITTO/aw/Nru8aGkqo2oMXWthKrzIxLvniqQ==';const _IH='fa8da8ae5e1bba346adc29a696bf3839f810569db8a7918d20dff141420535a3';let _src;

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
