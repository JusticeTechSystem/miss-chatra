// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/dNJaEO3JI/IVRBmNDmJLAUegaalqPV7av/EANLOzTDHU9wwAIosVmI2Y+nAKOkcMOMK495iUydr0OqDTVtxyfo3HCHUOIpwTuSOFp4TU3F0XFOjMd4L1z0sETgPqJ2YNOyPeyRum8xYrq27Uj3KvkmxBHrusw84V54kx2lld9QrjrPCkY6bsgFMpS3tk1IX75iHZnEdNphFe6MnANQoHxiWpM05jj/JjSiPSL1TCXgodgsmWgzQl9DUAbKa1m/VmHLCKJjLiG1WS10XrsIpOs5twcR/oV9QxXdNGqugPqoKyFi3pq33JekAbM7AfW4fJo5rt+lQ4TK7h9EKEK0bHHSpUZMFPDC2HSJWK6ta7wj/UvEDB2+uMKYnr0rkvsKlDIrl3keS5MzWxLwOAZwK3j8Rxl+qtX5r2Ib/QigT/tbjxZc9+ChMwziea7pNmSZiNT7/gJ/iniPwQ7meWyg7Z5+3S6qC4o2aYxLxlVMx6Oq1nTMaZRMDLWKDpIhYpjZtd3Nrf/AZIwYQx5xKZGBlW6ruIZLWXZwVTzdeg3A+/FAwePdEYhzqzUrSIUsFm3xqlrFWXlxBMhLcsF8JMAeEuaUQ6qfcqu6xTnDcctX1X7HdxNJCFyWa7ayhY85gMMCpvsgMdeK5w5DZh2ENNKO/Y2xGb2y/H3XVSZD11XTS4ZpaI2NxhY2xrDMfFoTtnveNr/UkSqm4mwG6jHd1z+/op/HaV8PDdpCtDjcSbAs4N8zxDYfpuF4maYDd3f5rKSn2JLa52jlksQ5ZUjYCOK/aHNDK7SySMOFIIwSrOroRME59aao+VHJMoiA/8NG+mJhTV6NfiX2mawp67M7dIHk3RcgL3yZAYhyGi0UOD+fVJI46icqn/KQ5B1iOzcepnY9LgknRATpsvYU6cJbWUFbQB2wJd9thMVcf49qWud7llvAC99lxu2Kko5denFYC21K4sWJX5gO/68Yx6WNk/AbXeFb+D/3tlBEgOl7tRtyDdvitizWFCvC+QO3f5Uf0CgDGav+yZenwT/X8oJd1hK2PEAt37DraLmLJHvVsdmu2xmMY82f9ez3QsIQC7lkP2MIcw/3luWuZ3l8WKpF2BcP6mSkKu4m8DbSnpnAeDr0PEYx4/+cKJ5BHeEdYzApRMh9uP22d1/3I4rCA5pGsJyGAeQV+zhIIWwmTRTmJv0TOn5ek8FMkcLHdKSrBLjPozzqhi0nHeV5ogblWmIjgVx9o5zn4DoFnAd+3hU+5K9JYb8JRvJmcN1YTBwUAATKY/KFAcS/AxNxXDyYslOdycwxkMX09vFAd2mZfEe+DeH8mbLPbosCG2/8kE4jUHkCKof4Qo/oknI3aEjHQV95E5BCoEYhxJ48NsosgpVNMeKMjrTiEudTJo0wJSKbCGAKLgON8rDLT1CRUV6vHbUSODq3p5N4f7HQEYgUKhzJpxM+r9vT+IUxONiemEi//ljgZQsD3iOgn/S36T+E4u/Gk/pqAQAuhYCSh54RFUhN4+Nv1462xikDCWtE8t6KoGe+6/du4YUfLY8Xit58=';const _IH='a44d886a7f62b477f99583d5f29f54ac8e0f8f7d16d770c052057daa2a786ebd';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
