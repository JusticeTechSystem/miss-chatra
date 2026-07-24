// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpOawFwg6G27vaRHvHVYzMdDk6yoa8LKAGXeAD1OHb5yr31gMgjnkuXJAvIvxcKB1XN7j9KqhNX5POdM10tXvm0H8qm/ywNg/uasqJhXUErvDQZ/CB0aGmOz6pDGftYr/7Gvfl59hKFM60OhZbexVjbpPAxUk+I1vW5trqjZCYODFJYYSuRbu6ns6pUvJTTtdWCO6QMo2M/TtPcwdgsP48OJ+nMOEA/r7CkO/IseP9DRrjOQFyO0QkGkbbX/KZ+7LVOIL1CaLEizJ+Jf4WeWdFAGUkJ0IaaAzI6q6yEheecoj/BRrYwIk0J8NQiJG7tnRWFCmWAdNLlbJUDJ8iRUHMsfHmK8ybCCLDd+wY7xx0qg7BjYrAqo5Ap4L2hwVJPZkaxeAoAJzP7U3tK/WAu10sQ0XYjYsJ8MzFL7YoVmbRqwQW7TJ/p9KYUK6Mk+wEbADANrWRlqKXfM/buR7UgXASWy2sZu/06OpaHOEtijQR0Y7bqtcGFE54087oi0PA8DyRbOCymYe3bwvI+SjWGbLPHLO8O5OekvLQxPdiKsKP9SIyYZypW6rpqp1FBIE2XCUoXOladWRdKCYjZlKUe5Fywj1elT3ud9QDS4g84KyTMyzau+s2VPbjL71WPnleek2h0BQHmqpOtLo5iuDNr8qkbaCW1sm375t48JWRsgDfVDjlbhEUAQ6IS//Pj96kE1CyEsO3LMHUs4yLmPqKTv1KXkguBV7FABZaHeIU/gYbi6EmU3ggC8Wkr2IqRv+DEMIC93fAIxR3WDPguqr9DhXQQtEAjb4Zcn2Eg6W42F38lEMV4n+w+cshj15fNC671VqZMWYCrvtJnX4wbbBq+XEGXVoDF9NJaJ3ar3Xw89aBYV4kiFV5Up83Gpg3NiJZeb5+TWNMah7C1OpjSPi//8VNOWJWTvMvaklLi8bFjPl45MvMO3Ufri/2vD/f8vGn5ypnfFPp3XaVbrpBfZBfwYvxF5JagvAjRi96ckVAzUJkqwsIXuWnQyw2E8VP0H4oY59Gwj5ujhNK7QC0aNXkzpfx3iQjumY//7Wlhm24t06V9QhA2ycYY87k4/CsHmHEV/s2uCCvelLLgV0UyfO+D+thYlrGRCEljzPdUBXZOZMJ/F9cpn3xtqDORgnlYICL97Nd8y5AdfI7UfB5MOUNyL43guu6NQ96TGxdlbt8hs2F2TkPfhMuoeZrYNC6G9/rEddq6y0GIRtqTf+KaM9CoCcgj9gEcM9L9VMvrIC9HwKadNA+pbgSMDaOBtXnSmHqcPMT3CXkUOIRDM0YBcCeI6sgmcppp6fLqGjtJcSNUV/8rKUPnMe/jbX2Ft53MVpxgqNPZjkp1vNw3I8=';const _IH='99f6208715184e518da0969a7c3a8bb81e9e5ddbd8ac419879c8de16826f2afa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
