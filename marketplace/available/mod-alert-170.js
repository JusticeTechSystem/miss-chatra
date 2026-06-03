// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UYYOEpHU5K70sG259TTPLQVaqOG4Q0zZiCRk4A/xLnwL8VldHv26KK7fH/nrT5b35bkXESK7c6C0HR1lTqC0led55F03CZzdvwkgN/OCVdYTxTM1a9LTFmUAXCFllf1RMDwkdqJSRngnzV5QDPkbh+NGhVy7NtwYAxWJZiEuQPmzvsyoRQz2Up6mYFfFUGxkt64emyy35KO3hFaT3Nn0JtcyuMW4bgp9gXVDJ7TZtF/ili7tb9M4IjklmZ9Ycht3sDEAmRtRxsYopgZjFwcOHf6/+YgMD8LLFPi7iY9kSa621gGXh/hupZMHXfPUu8i8A9JGDUCC8FvilBPpZCgr8Epe9VwIkuWCDHy3xTv/6Cr72RKacr7suzCBF7FlvfWlULWQFWqQRMXxnC7pU0EXwzGeCFrp4MJW8rtsGEa8wWpDrgY7X0Ao/kpmzD/RKWaBrJrQOLaNnzZK1jxXjc0qOO+bRMm3RKq1L2Fz+kswntNE7YC5QKoApFy/nSO21voBhDE22DArmcPCthubsSe6/ZTafvhRyzEBo7FxlNipwol3WSAOrcCU4lwa+o7D28aqgUnsHjFPM2CaZStN+ICPIMkLqlZi/0Yu1ksutbVxG4xCPcTk4CM8WLI8gnN5/mr2nz3jkJ0E3TgpJ/RDfURSWW7Ij5WYdg+Sco1CsBEiRhrqVUZH2GIYFDs6g1WUnOeaKkUC+Aj+mWzMgKFZhZJbNdGemJrfohFvI0pTDdwJRAOGSDT9+iaxooujGKfeSzhahswTFbBWmR5xnVf59EJxVjBpn70Se9jdy+VuFbpXXeGJhvnMExoSMT9hXSaozsIrXKQNH4pIIG+Shocwy9Cn3IqMKSF+OVrIq8jKeUwrLYOPjWASAu8b8KPcBu1AHH/HxZAMklmbx+leDiC6C3WqSddPE/01mSpzXZ15BJUcBMU0WC+DsU8B+qiAhx4dovmXzloXlJNpf6NnZ8tPO8+trVR1FtpF9Y8hDX1dpHaKdHhKXyi4LaCmsKKEfSg52efyJcRcFKlb3I8sD9S3Xo4zZQS6dVINUTFaNEZ3omWVOEyyGMjgAOiXQR0/pZNCh7soQoA35LYtb4R8gsVFEMfJRPzr3+l+hWEDsyYrlG7YtAm2X9/01htcv2MaS1n0ITGmHK88HF+C+ULVqxmhIMeXBrJI1vfVjAvQfo5rMPleiV8oxQvUIyZN+mM35P24JhxdGRFEo1v5TyXJP9OpMBS+RfHzVwhyrojU0euL88Nzj68XcjvuLO+a3dUZ/eXBpwtetADQ+1oWexy4JdI4tkeb41bSdwvTbU3S5Qh20O8ZSceonKJRdPqMoRq9LBaQQy8V0t6Fy6aCPI6RWI+11reIqTEKiYE7PkftagYxBuUY';const _IH='0d9ebd219c286d96488f72b7eef64911c91371316204662e2ffdf27d5efc1fa7';let _src;

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
