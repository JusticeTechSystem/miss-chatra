// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='58ovseX+ZB4uSGo5jcOrqmCWDp0963qmsXIqagrMb1MPdZH4rf904sWtSWj0GyUcgbcJ+3G7CNz7O21MWRma2g9GKupxgqC4uvIyV7fVocDvmB6EWx1wKH4/ql0VZFPk24jRruZWSQ5E10trR7oevHuxeNV5ZEH+A7rPaCnf13JqFyAyO4+c51kkHLVoNeZzYmyXUajSnvuUnIU5rOhWiZUI4deIOZQ/7LmzDWgUC/vrJIJ/IXxTB1Cf6ksY6Vk4d9ZwCFoXQGth+AteYu4yicK1/U/fSROjweznEeUIej3URkCZf71WHm3Xjw68TUFXgLvYnJhPa8TB27eK5pTGiITrA5YU9xV7b9hB47Dlx+rDawieBc2K8DhzlXiGX2l3PGCQ7FEAQWunJfn4l5DRqFkQBlfh0j34R7lxyll4GPy3FQbENonLJU8Fqgoa2B2G47RENVspo38MPVlkptRI49hx+AYf/f1u2k9cSVvjgWgd+GLmrWE/9izTmtprPcp4edg4DuQb+IKKQHXMEMlEOitNmmVnuNNZOUM99w+aVMy/n+xNDV6DY97ADtbdUKvr1jLVqCDyQT3UeZ/OkhdYAjalyljFWxVHdJJBIMVvL3p3XZeUMMxbbiz2xmtuxY2SX4KjAnBM5ddccwQSSfHapWsDnf20ch6Z3d2WxFDg8yYlcjEpjveh4hKdslRV9IyAjk6lHMwVFfDKhjEm8KN8Ks2CKNacAAKVRBR73syo97u69NI/nqXComNpiPxFIDh/CpDirUFUKk25VLxIHA1St6oLVxI644TT4/KEm92jarWaH0a06LkwNZbqurUOKCjwBgMpF1GT4wo384g4RjbhJdmMwpNtH/XGLYzf0vfmgwiGRtoneF/u5cGPVvYI0vpiLLlhpPe3vS167Pnj9DsLxLaU8zKwkehr+TZbSm7OZeLm+6aiFa4Znw/aCs8ePRwamz4sahuTuHztjz5uo2/rvAXFxEpKvIh3Xg9w+hCKVBYkGFMz+Y+oATln9hV1fnywtg==';const _IH='185df5d32a08ff6f5c7a7dfc12c29c9bfea31bac0ab78cab718db6aa175bacc8';let _src;

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
