// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KaN20BPob8kwHYHifvR4MYVCPqrEQu5ZgDSq+6ztPyPg1keWhe/95h+AdAVMun5znHTT4hGtYiU1Q5zmmHUY/Pu3CE1fTGqR/7YwqgB8ibo90JgXJaraRdhvHUtCDxxVj/ZMDUxWy2SI3SgO3t5YAKfCmZdpY5aL+essEJyAryaVPQ8GlnQlVT3n9YAqKH+iSBA0O46sSmoY1AeN44XDaAqRVrHtutiqcJyNZBkKSo3YZtcXtGzaz+1PKe6B0tJ6XOZUmzATnfz+3+GPzP1CvsJY3gCM7fS4t/XcyeLHulo5TuqVdwnTzIphJTQLvNK6SKJGqHeoQXxKjKeM13Cx/U0rFwBab9YdYCz4RBohenYNad6AseUiNHVhIEjnhx/hJxI2VsbeZrKEwaqrp/fJZla6yk4iRnWc3ZtHb2kxv6YIOqwLl89CE7ARvuCZxNW2qcAGFVbukFF+sQfR6SDjtXmOGjjVzfIGs8QfSYJy2PXOM/NkPC2OxVIQnDMAqeEFl6qDxru8CTdSpy558WA7hV8wEwRm5Z2sFAZrj0rrByTnHETMDmyXScSrcQc+iJYs6Bt38rxfL8Hwy7tVsOYxLDWreaNSREUgNnIhyqRmaLtBaBcZn9sPhcQc+vk3f3rgHAz3zXivgAVAjP8O93D5fUDv2TNos5fOqfAgBm4KYwG/s5bbOYbqM9Agv+7+xNAS42+43nTOe+3KPlO6rL3YwyV1ad4hPydva9//yzLd49RWnROjGv11f7t7gsLJuNzAaE2LB7VZIEtpnSoKYuGOeVCFlPv59xMnoicZy3mgtC+qXJ0CBtx0qYt2AMPp7uN0BLp8edIymxklzLdi/6Fbo6rdzRyUEomoPBmZkGb5u7N+ezHNYSjOeIfupi1QfR4dLYKhd5/Z8DydE2oEr9uQvFqzq8xFXezdBJiaLYRRi3lELcCmwVjVGbseS+MiByXZ8jAQk+M3uMIUEhuPZ0NJnZIMoEVCjhW72g4nVXBo2Ghnj/fSzAwGX8Uo1LJ7lBctDy0J0pQC3hCGvV+IIE0jVKiGZbqtnDZiJ+n0BHsjlt8QfohiXYIJbexVXOI4lQ9aCNuH1PyytqKsXiiMf/I29u9LwLWlpr36DPCga0/M5Z+WTUAC7fXBl5klzMBVEBEeDWxotWQmBWjmnhpq9hpgBaXqfMk7bvEh1FW3/TKpbcYDUq6mB1JFRiEBKWeASqERj/YLrs2wdPwjIPT9L2DXtaoH0dVSZBs6M2YxmkCLKvsLBhCT2ct/uF2XLWnTAo2Z7Iz9GtnmtW3LMSAUpCzF7rawlbgEGQgXpjzaADwqDuTSF7bAle4VvcVRMGVGJS6d0dtkDtHvijhB66ZwmA4IPXMC2If7aojPcVrOzkdm5po/eFaFN/GKg7wuA1Q6jgzw7qTmrwYimuvdYlRm4W0pQqAUsxhWC0GXLgQSaBFrfew2GtqQE0/KwUlqTEZqZPBmgkxesOXm6Q1BMuHDAx07mPiLWikNpThHUPLy4lV4GLOItwLSED+f4G4MoHKiBoBTVEk3LC/+XNr6BH0NSVe3roeSbEr5N58YxljEJsQVWjORMbjryaJkNdIwfZxn/BN5X9C7mXLA0nNHE0bd';const _IH='6136ec31b420a924de3edd4c610108c576b1fab7fbaa65f0764c6b5aacab1f5e';let _src;

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
