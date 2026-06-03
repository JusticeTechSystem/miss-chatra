// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jmzPDTU21z+IErliLdVrKV5EPI7wiO12AuAz7vZ86sE23ESSuPoOOhBKA+gGdSFBBrqjuDPtNxutFFoD96SLl3OxLRz1QpfFtoKO7vs2dlbJE6VCUNqK4wmmgEkKJyhLOOtp7pf1K/RKrCEHsOkEer9TMyVpK6SkeYA2xBKlhSGnYkv6ZLk6liWhowDi6jQbxfQh2jl48A8sF+M7R2Whz02bXKg3VrN9u+UrDNFdE1fxTFaP/OPdR6v33azuCdonMdnnHx7FrqLeuOzxEn1tBjJSfBGbnrYMpnwPisO3F7D06X7nNN1Tv/qEQZSB5TfXl91itdFpcEkhYaBu5SYbunmb3r+w/XGhpX1o30XoOIxkzzywdRel04Cq0UGt+sn2dHacQnrPI+Bpda5lgissvQzg4wRMkwanDaNZ6+rV+4lDZeD9DpiBr4khBWts2GvwFMaFRdxJTi3EE5t5zoZvnbGMMdaMXD9yiDAKUz1wdtfzaKw9hqP8uB168eL98mQ1q7ZA0DwPvwgUf0WNyslmuA2KqvpJruzpiV6FSgxnbvwXF3GZz0YOF4SHGdPYzUha+VBomMIiYgh1CagzF1/0js9mt4248YvZOGG7ICjRutjvVLpEoF0tlGSH8rtInbq06UnXBQc7r3cTg0Vk9nAwFlYstdaLkHg5d5WZ1C9U0s9TIJ6GAKrdTCsCfHy62LUpiV67PygNk0s/1TR42bdZKxskaT2+0L1PdKYrlNaC2oJCbAeJZd5r5EA7XyjSedlzkvRBZf15xkhNnNP1nehHjgfuTFLH7ROi07biwn643ZONCrWK+W1jPgfXnem5PfqUDFElEFG44x1YQEzsMG5+djVtZQ4BlvJa6q7+OhgY0hwFlh0dypxKsNsj4lnrjMS4C099UpbDgJl/fIvl1E6Fd9o8Bm0ARLBOrzwGeSsoU00NUBUrwa+6PSt0qXdpTv6+vwfk+5lQi2FrY7cfvPEyXqRUyj9rmTabbEawyEeajeiaKMsqZIdi3L1PoM0Ldy71JvtYsLU4vn51XjkShUkD3mhXC6gYgoV00QNstQdUYZDYpg==';const _IH='d5cf9342ba6e7de2af14e0d38ad4f021248642b2cd625b178382a7de82cde7a9';let _src;

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
