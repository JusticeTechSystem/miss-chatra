// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vPNgseFnq2D2Z+FY+PQvn1PrVYbHiTw3g490YU3DZo33c3U1w/3eW6DEvmyACLM5TrGIeA53fexwrr+9kN8w3uyrYYMMMRFdvlJvWEopKk9mMevhJcehqVFR2/PrkkAM3nuEuGUn/j1EsgnLbLb3m2E4wZackVKIxs3ZewAtR7hsG34YnvKOfcMX1NDogdNKhpd8adhLJqWm02IUQBjSinisbLr+xded70FVkuWE3uUiLT8s2pM807PPVBEaCbUzrb40czdwrPBYEav9AbMN2FobIKmuRAmlLup62YtxAazDBnjeWzpZCgQ8QD0vP11pXtxGfaHi+0mcF2zOl6D6BxicC22fDm4+Iqujt/X9KRasgAzn1SC41OvcmZcrz06tn2jjA+a78XaDVgBDheVl/69VPXLDUenKEGsPFRWPMHipl2WG+Biafqmk3V3broko0IPT7pQ78ZBewMFdN65nrGom/vFaFjN7rrKm8vvt8A7Oh77lDjAtNAu3tTazOeDtPS0l1FTQKLeyP0FXZx0JvSntdYgwh+LeDZV97Veu21FBnXgYaHataa3BlS3s8FdBoPsJq0QuTNCQebZHkl0uVD5b9X88Jq/o3ZT8WCqQmjzs+KlQxpJhdOmqh3YK2I5ziA7vQTpsBFLHHhAUGSldwovhp9vw/8CRO3L/Tq5qwc5wBPDiyqsJ1+5eNF1WZGA89orS07U0VN9NpBHlrnVZMtRMdZBw/YNVnXNHfYA=';const _IH='339818344b25d72b01df06e6d54cff87a94fdbc06c28de4a1ad897739e7b4ff7';let _src;

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
