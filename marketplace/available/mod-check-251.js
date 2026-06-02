// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='moVpsP3ofGQw7m+BlA4DnhGc+0qQJoViWhDP6zPE4uL/IAN3Vfq1iv6Yx/XKla1hp6Qnc0iezN3kvP/HxsKBuNu/cTQO/D9hTQQSIc5RTB4kOInhUVGm65ZakIWwVVxvfb5EfM9D9/FUmwDBX5dzobrsSIElJWEsbtSlsg9slb3+Gw9+cG+ByqfLBwXYuZzDZFwiMnwmv7DTCLRatv2jPyFuv+arSV/ypH1615f1Hg2hXuJ/MdH8NeKzrHfyeDq5MqXTSs0ktnzluzJUd8isudunIdUODf349O7+cDyZrpcx/bJFXFuZDTB5vMlqhRxFE55FvD/k1KwiMXxl8UnDsdtSs71LZ6PID99jogxLe89Ph06atD/XPkQ/JDThzBH5T7sntyXweIFJjjujOe0v1/4HbNqksZQIVhHBeVK7t25wmgVN5fTHt49uaddkR9s8719vrd7R3fwx8Q49nk8g/pD4cx/l3SBnp0p/GNYBczDHtUK8J16e7yiqT0xQaQr5b1cnV4gaSJGz6IdBJE8VHgWwIgMCUfWcPRnaOenVRGJTKrs0h+fOO0lxLvKJE30WMkDnrqQmnClGAgeT5M5Rr1WQoFNm5o9GlKJ0tDfgsL/vkSPgvgQ+oiQTayktNEInjzvMyY2AuycvSrR+rrppS+MGhpX6uRJD9D3OeSEC2oWwPBZeQWrtk74sklBNdyt+gVbAWZ55uPkcZlzb20fRohiEnBU2ySOt+WNuATAWYIcsXX7BUb6fOlcnpPjxz4qpHMszWZUOKy5QKE5hKQdy+2XjGWnP2Nk5hKKUOCyYwKSpvbR2K90KUix8PNP6LICMRR4oGeXP4Npjic3Ni+ObYbRNYn+tmMnzl/dzWCIU/D379ERqDCIPEbA8NmwKZmZXDaK/zBvH5Z24pWWigQVRnEI1J7BqmXI6yKE6rWXNTMJ1hk8WGBU/I87Me/SHS/vaaAjVZnToKA0gNDNv8uhI2QBLVJyTY4yQrXXiv+4wvv30oKYcCjizoMlH0Gui57hxq2+shY0ffVL5DdkmB6cg5rS09JY4gqt1r4uG7fI/CvuMY8uBl9R65IBUy/T3aAbCSDQCWorMZcNnI5QrZ1wunPZ1KUOZKDMiq6m9s0xlCXhXBPBSHSy1Ko+/7b4iaJPF9Dor8CezYrlUDtwYMvcG3WTSX5xYAb4bM6/hp3C3iSJbWJ2t3lhF8shljpj4yp3p6ggOvkNzsHTc0q8W2XalmPqLdq5MKYvDu2c3vInz+s19UuWqKaUv75T8Dcco/ub9i0Pb+3pLKk8De9uo+ZwqEUtI7Qda3E8wA7p1KnJwyeowMRM76WkIKPoIDiMzq77gLwJkJZn4VqQ7eLky/bMGDnjSTw28ubmSI0gcCkT4';const _IH='7bbd8e80f4608d04f38163c13fada3de56b719930a73180a667a07d8ce273429';let _src;

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
