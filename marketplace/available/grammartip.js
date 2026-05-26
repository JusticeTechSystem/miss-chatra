// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KJW53MjGrPWrdhxesEKxR7BSUm/9k+/hJsNtm61gldd5S6BbTQdA//7jrXHzcarcf6iUuoNT25ACMP4NYS09pa/6o6fqD3WvWNg9cyRNVi+r/p+b4yAC0b4HCJUO0JVPEe/vXr7GJbalk8ojrlotojvvB9/y+ohFdTs+GIZ9kg6OKE++2f+aueQiBwpNpiw+kLdO0+p0wSmyh9ajLgTdum+ZpRmpO3KoA/AZddpuID3OP5NPL/j/dYU8yixJirGFHTKoolHRolMjOTtqwIhcmOP7KPToWExoDyWI8GJ2FGo4PkgoOyfNq9sKFpgJ9OJW1Sqaqy8R6ob/E36/6VTS+C2yLAfrMty2WZBhvbTs++YbQspmqeUzkTgo6fJZV2fIeuS35VpLH4I/yQE4kzkfcm2PCKqhwzZufqDJflDQ/gGtBsc6TB4M/H6bZmAHX+2vZ+6RvWrXV7EsP12efzaRwctm4Jphccq6K38hBo2ZrkYWiZgw7eDkWRmk5xPOAFCKl0Nb+s2xXhvN0qHhxQTAt+FfA32coZ6fVc+jviyxdTkF88DRXGNYwoFkAnSxJneUAQYXpqezAkqIOsUDZte8okCAMwYSYXW4+O0q0watb/0SyScnbMvspO5QHE3JvWDmo22CthV4OtsCrQl5qz6z/0uHlc7DfpToNTjxyzj6ZSdABXaRbQc5GULmjzljHGu2+Hin8sW0j0a6f4m6VVO3N0HirxNZk7TtFNIxtXBWBhrgY1c3+lqfkDcSFKjdGvk06ZLNw5ZHCMM4sYIXrg5Xw8/dHOMrK9ohlPES33ru+xdTLN3DunNcJ7Z0PmF4Rg3zIzGMK9RSei7DXJUeffJjKhszNfYekuTMnXeugYSwLSHUSi4E7g5/t4F5mfYcZUyM+0yKuUcewdO2M4dFjxldlw6WQp8cJW1gfPdes707V8Eghn6TotAP5dpUzmSF4qFfQKbjfjNw1L+as59zXu9Pc3+g/Dd2D4WwOrDjaMAJM8u/Xh7MW/QgVsFP4dKl1luJUZvUFwKcT+JmDNULwDMa3kZT89lLZxmHXpuAtIvVNY4c+OC9dVQdp7jDoHiFF5TciITpWe/48CCuXK/4Kbxlm5hPByLFcHRQGW5LmegRJfUsHTdr0sqx2VUaH78XLElCbX2gmhZZVIfHrlORlFVOZbqs0k+gCecZA4meBl6yJzFYtHLz9TjRyXPNAlD3qAIZNmdYeTn1AQ0=';const _IH='6249292209a6976da836c7c60aa37a17b9640a0e26dde2761ddd6a5806bc0c1a';let _src;

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
