// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e5rYLdX2ED3Dgslr1/OhqZfZhzKip1hj9zK2/pbGQSVMm6qJEJ/Jnng1G2PWM2EI94pQJFyqy5abXQkvcl3SUQv4BdYkGvNLFCBRiMlO41U5fkT3dFbEYCA7XKFls3qwpx+9Ix2+9Au4ed5IOkJQLkGv2ced0/6pCGoQoEGWuc603S2XU2aS9Ys8LGMxPX7V4JAUAfFKXE39L4ZDpgwMwxXtQ1hfpHykgnU0w/q5n+l9JJP1lmxUBRLc5YQDY7UJrwd0JVPV4NTgq6YWte/4Tq9AISZdI2pg0WUtP9YwXg/ated4Mg1Rqr+vNw42zZeh/stlQvsJh/HNg/rd3ujxQuasJEj3CqSjqxhpg8Djf3j0m3QSgxaCOv2XyUsyCftElP8cKaIDMp9d32Sf2c9k1Wi3QE1YeFgc6+di4EVMO59pHojfK27AMUCwbJ5RBA1knlxybPZmaomCQUPc++Cro9adpJ4OIUraqF5ptg25K8qFZG+iBg09UxbO5Ag+dw76gyLMhCCBE/BbbmYEguk46hXGrV0gkkT7SACA9xs8QksqDMJnaH1uYALMt5AhCdYeUIKWeq5yqap/fo8L54IFnMtTYHm9PFlt5bPMg1lX2bq5mp6bLjWeGrD1bTYMlTE+n+LwVz7ypPcteFIF7bZ6mY5horABrF4TihnyK7AWmjzsyRsHwjQFPT5I3VcVNoY0yQhniG4GJHZvST+1vwrzg1Zq+6hxHTM39GxcFQx1koKbxdQMGxhBaLiyRws+UVmYJxXx95bDCj/0S45eGAKgFdZGKWvbYyxwdzcqOSCPnry+3jpE9XSKVX5RtYewYuMF4V4bbAXwQ9QOIJPGy8SV1ewYzRWNTvtMWHbbuB87e+G+aW7lp2bYoTTiMEXXrP3T7+6vUooGUKV+kUMo6hwxlBEk3FAoYeL2+eskdYaQHoF0tf17gBMVMbyIZkApzwkoBSliiIXO+7vdxOg3NshejoCQUZVRARV4EsrKf0N2o5qNyXAA4K+JMwe5gsxSfIw3+jVF1hQ46KtGFJ5Rs0hWYE07zh1IBu/YhLRrntZR0d7j5Kg80/pQFmrVpGNwkm2O8SYnOsdcngbFJDYoGz7ttz4CLXH9dB+CBVY0smLE/GeQ32e/gqj5pbpgyEBPsPAVo8xzfjcbCCm+LrefFjFFMZawtt0v+egpUAKq3GHLX0LuXkncH5kSpMyLS2uF7M7A/4pSXpnp0rqAieN8KN31MTVm9u5SXM6FFFXUew+K/LZnqjGqi0sYPRmMU7UfX4arwnM6bR6sxwy4r9abeLxtBn+ZcaqHAcndz+mAyHXQtsHMZmlpsEVORVlg5/TIIxDKLtsXOVoCZzE5AbZWrINoc86+cu+vlciA5WbNtX5Xd6LW28MsxVdn8QeV/urHk8xVEuM=';const _IH='7d0c4dd6baf0e5c2a5ab5c36a14f8dcb92dbf0ded7040c8b6a04095025f0a1a1';let _src;

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
