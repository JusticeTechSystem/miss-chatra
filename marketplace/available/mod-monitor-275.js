// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ihaLJVEBEQal4nV0fdZ1NMb4VmC3jzYPAfPsxxXcKrZ1qT3d9OdcfzS691XwPzw87SnwyM1K8HzkdzUkKiTzbivCVCHxyNbQPwoWzTsp/Y5jLg250lsOrqd3gGQ6J3kOeLKq53M7Okw7s2PrZZEQHbD1OSu+N0a9LdJnexgXMLymXu+JIpF6Y+dK5vdyi4iCrmfqUT0lDhp7J8gJ3YpukfbxQDFJ5G1MU88wRMOAL+Y2VL7bPHrrOG7Z7Bnbiaxu82qL/SEtQm1YSEZjm7JKy84JWYbwue/d/fPwoCRk2p1PVxnEnxo+a4pM3l0AFZsaP5TfzhMbm0wrSJ3oMrm+5v1zlR2PcIDuMC0xpeBqvYAMkCZKOQQxlfqMKaBX2u+/SiFBets9b31RdG+4EEHfHed4e71nq3kD1XS3SLlFAwCvf4uegZerWw3mcEQDLzWFGvP79925jKhIzu6vhPLxcmDKegFv6FFSdSgU5WsxiVMXnlinQ6CrwSsDsa12f+6qGMwv11w/FGspWAqBqTnwdyXwH7Us4DVD23MCfdQMl0Rf12GMDyGLDAyLMmmstl+gh0VUE4WDW7PeCzhGRJvJI+NUkv1ZU59CuC7QwofQhSuLU6TebiQm8ahMXzsyrkgjUN78BZhzMND3a+q/FAqksTQi5HPg4et1lHdAomDjiNZOyDh8Hu8lJ2ZGP4hjrq14WFR+7KmRmZTcR3iSJesWTTbfFaJRfEecWBTF67f37Nv1ww0RUg00NZw+VwoVjBjmu2ZqVOU1OYc+xJtose4fjJ8W6aVvHTn7vFrs66gG5AA0K/kOdrb4b8riiKSUeThe4voYT2IYTsmJejmZA//NKqf+ZGehcmo5i6iVrfpGdrPI+RM04IJ5csWhr2y6EWiSXQhzLf5K/XMWwpeL6jD1M38YuGiKfamCpSm5G+hSeE2bpbap+xjm6nkHLC+wbHCfIkky1eslGO22QEXOERuw/5o1KSj0bLncnT53t6obsQFGdzgX2oROgRaBFZwDEwNapUpAp0f/PuYimqefnLx+MMwEHdIKLoiRBmyCPohfQ6D7Zj0QEaqnDRWpTc9rGCBA01iwHNvtJO3249ogoyxA/6+1wNm15mCeI7JCreC8XXfok5lSWnwVLei3Tgak/MAWwvSngp/dQ4y7V+cRKMJH5pql5FVRpfOu171VFXOVOUcY/x7Soy1Vn7Q8iS7Bv8cCZ2QdZOyzNjmt8Ij7UdVwtlTu1PqGX6M/eN6178JfVBzB+HHw4ZO26bg7GYMfYmdsmVWhKqyhPn9qVmDYAAg3jL3H7SV9iGZSMOLrHR+jWnZvrOLXEuDqT666wIMJFL54R0a34mRD44qQg+IzYzxoulQ+/As3dEpD5N5K5nr58DUd8Ps6lMBlAVGlZk6VG7QlyHA=';const _IH='fde7316ac5f25c8d6eb9590855b094e02a71a3805cef4512a815f998afb0fda0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
