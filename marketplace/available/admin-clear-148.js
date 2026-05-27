// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p6DH98/+FYCdDQ7cm277stFWSp0T7MUpoh2RTBnXJ7NihQHM61+bHoTYpxqp6MtIW0pFxWFto5K8MJ2pmQt2uV4TixpA2bdc7+uGif3qsyumO2xndc/Zh1pXK9q7KVMGa7FiuoGxSkx3krgraDW4+Xa1ufpVJNJsGrrZ9KGlE2G5rOSSpwTZ+wlA4tnCbF5bSego1vy63UCQbnYRGx3Pxe1Dw5n1zOyuQUnSJWgXt0Sgl6Q2aFfplTMJb8EhSf1CtRfYNjh7H1GrItofjo0DRIrb0O/QaeBmLpc/rabt9IH2SPCwFbnu8U7OlXOANOhUlZTEL3sAIoLgkAi9pfXvN5e9FfeFS+7r9XfOFRQ7jq7il/Fm/x//u1n5OjJ2scwTmrVnh/ISssnzLVSniCr+jrr0II1wyJSkfL7qE66fGwngAG2Vn9DE0SzGSfK7ijIhw85RKq5zxeoEbYq35/D0A4BchwHzeup+K5G52Hk0WANsh/Oj9MzN0hBDMrwcByYPSvCqCITmws4dblqpGRPSgpOD9XZ/y73pN2DliHQ4R7pxLQ5wV4kIYvTbE5kz8TYKxWg1RRayyzW03z6qoED5px8JeVNSh6KPUSiD6zE6eKX2IOBSA3QP+pRUUIUqmsjG6pt8yAs/gls1m5wNSBCF283c7o3M8S2VgSLGzLO9j1JvQRUIkvZFIONx6zroVpZg517T8auwY9M8lyFfp5g32bo8DrFLNLVMFYixiyBukrpRkV33iivVffgzOkSWKuBCw5+T8ARDK3aJvv5AzMeGuZKeV8zqnXyKTlrO/fdL81VoKKcFKUriWrZsmf8pZkBTCHWrlnmSOzKofXlDjOP23sgbG1tx4nwrhShisVKNHRHigCHqvs6vQ64bJJBn+sTTcS50cxcSF2aE8mawHVEq32sF++TFCxoCPavzOjjfAqvKMqM87quGYXgm/iPl5vOP/PySpo68uQX3+we24amwu6UPq28rFggp6jdI/X7Be55xG576pK+GKI5C';const _IH='6c0d181875907d5769c32f962a8baae8584f8fd070d5d1aeca04ad52f99cc4e8';let _src;

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
