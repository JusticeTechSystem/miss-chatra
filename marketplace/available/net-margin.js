// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cUNcooQGw+avqy8J+aON62JgKe8GcOGGRitlJHg7em4aRqshBvLEsvY5EwD1INQwO3EEXCcCEhbUQS1kuOSorW0Pnj9Y6nXHtgUUWmNXRYn2+oWgnXlK2KWhlOHoGtaKmVRtUGZBfpaH9M3EvSosA7cjIoL5uPzl38nuj0pr5EIf5MnkFFHPNw3rxxxCnnI9WcCPqtfNyZBb1SPIiZ9a/sweBukD2T1gk2C8Ywbr3aoKyuhYlPOss4qXhZUlXMgQ1dMq785ke5pdY5TK7QDT0XRZ+7IZRRyM/eHBh6JwajDPIalYU+VKU2okUPoMcK9vCntp14avFliZwlqiajoivLSWsZUgt0vqzebhmnL+OxkevBTsywUdwVcjHAv8tlxQJ2r+Gh1vS2oXQs1y2PcJZLZkBPA5PjbDRjE1AXO8mYd/6C4SqngcX/DTv7nvsLwZ8twGrQdIiz18XC3ITCulltD6IbquRXDhZyO4GOyaFMCp7DOC+zKMTOujGmhVBY+ne8V5c5A/URa2M6UGCfwa29WTAnDL9XIZadisJJUiQiMrnaS2hknqvAkIadNW+9yG58GPIGj/4x4Pg4OkDUATOaEC+HKsAqqwKjymM1x32HDOaMNs62Med/9CS7WYC1nKP7GexOzqrWRsNSIeU1rQpiUL8/NdtIQUFXGVte917TbunBjqTUo4/jzPpkSjcclR2jEzZ0oWJGy3Lto1XNcg6EM5GPe2V45oPB9g8aP2sKAM66XCtSrBaLPc8BP0h1Yxn5FAk0UeJzje/DfoEe+tCyszUKxAuRcYYjqJJ/VZ/PbPoOhLZR4PRI7fCmwTez7QLNbLeXy7e8KxLczutkInIxLR/zfb4oP9F4zQex76Zuo/Sx9GAKRju9uHsLmZQi/AbxbQcyXzC/vZ3bxbo9+dKdYFcPqlO5MZ8VX77qy9480JHCU5rkQ37n3CopEv6MXFDnznPs1mW+esuUsNHntkTQBlHVmOrBIOdktgiQ/JCUOTZPRbZybGr9QP3DCoPvT2T6Cvs2ftRGvIVe/k6BB3vAACPVb8LFAoCUPIoZY2rZDh7enA3enpjYlgiAR1vbYBFdHxJItBlH0H5ROy/6O3UqiD3y4ebCdAIlYZNxlMHaQAs2/JJy524Y5L9AZnSmRZelG1aLSsl1/VYqapaIQkPtR0NwFa4rbuyrb6snsTgqX75EIMA7/DAq6xK4w5c3QPIrMpq72BrcYb3ZqXSZT3cvLEsjnchlCYvKEIIA==';const _IH='a508545321342c8e67452995e182b19ea3cba03f47e73c690bedaa53de740565';let _src;

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
