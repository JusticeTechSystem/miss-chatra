// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5HkZzEXkIA5SW5BVDPFTM7Cy+HV5ws/yIQH48AoALZCtwOfmRnbFuksYCXLYRDrotO9EKpUMDKG8AJFmy95O7QAcF+S5CkxvU4cZ0mG7t5gOH5XiHjNVSyi6qM8qUyVen8EAgsS5Lu+xRlkxnNIs5g/8O2evV1ztF0YWKpxBpWep6+MkeK8/OQGQHfIY20wE2LuAVjBzk34ALYm5Yjcq2/r2N/3onqQTM+H18FKMSQdzPoH0PWD5DNLuPtxcippjRNbsmFAwGP6vhGFW3qZONdKdGTE8tjdpaw0hUugiqkydrnX86KZVp1gFbJQumDC/4tDnzWh4qrQcJxo2GiIBmL7qKHUXB1kZAYo6WBNEdBlcglfHHiCKmJEzGhkUjT34mHQAhtIFc75laYu5KTo7hru7VfW/goechlxtXiczcowvcNB8TiQGCUo5VrUTTJ1em2Vdd5tOPk5qeVwFd4yUXgNdiayXix2NmamIrMBS0lJnI2LERxP8ZKBxLMDaP44VtvAp6VKFZchw9S0eAyMRFigNrqZq8z8PrPkceuXZBV9qlv7kCrjzibnovIwN8sVM1xwCGHy7VYhPLT1J+FYbYCVoZxglomWrsnW0/7HEgF/pDmzLQB1ne86qXpQ2tMDbWkF1+6ynhhA5+Ip5TCmJdbsP1qe+uwin+FP/uNiYpSftvZC5HdE34tMrO29rTptsC0bmG1Mka5eHE6JXpcQIXVbrGFi+ZdSfq666LIo9K8EhnF7lJqAsU+WbxEXlmeUOxTVIfVWAaNACCyzJpKa4DyspGfkl9paVR3r7oOC7NBmfupkEQK3mm90hkFxFN77p15pTPPRqkSyUlRxH/CE6gjpJj/UIU2o5kFJU7XSBWfThWe6tDJQo7DA1PPTZbQBFWhGUGtLkibqqUtTa5NqlWhrX86Z2NNcNQPgH8sNTsbng4ZASEez+J/+z5AZtbmoOZfE+UW+RGtQPCaRKsGCdOmejJjAygy+OdA8YCLyYpeLv3+pdXXGwevZNtCEge1Q6QIAyKYsFIkty4oP2aZGW696+wlJ/BSVhaxosj5dUC2doL8pdzvKZapvDzhnZJXhmCEuujif1e4a+Y1LtniSxMyI0/btpfgaoTBAvuOeFx5Zc9KvG2p2txXXP2Dj3+sHvEOtoTXSjvPwv2KRwVhS8kvQD44bdPNKcU/uObaxG/hbcu+lAT4KNCadgVKe9+qJE6u0t7X4IAenIc03LEW98cgm4f4rwWOAb2frPgQqjG6qRKSgiouO1Dlp1O/Csjqhze3FtfahAEP/cbHL+Nx9nTK1DI4EXxCQwz+MdaMAyit+PrzgfZcNaT1Q6amC54b9FsACkTn2LFUXowmomS3WkAZWRFHGgzeb6WhKqUsxgXMaLxj8jYfrpqL1sjyO4FGwV0NkbmQU15TgeEAbl';const _IH='967d24ce323f64fbdd250bb2dcd8f2f0af0c5da8e588736474875a1332c0fc09';let _src;

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
