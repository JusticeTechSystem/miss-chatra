// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pzGAD0MaKFQE+9KW9UzRYagMAgm2Q38NnJUosxwuU3O6AtcXw54rN6JXn+feDZG7AYRHW3FlHojzaKUjdaIxbU7krbb1tRVcpT5M+whwv034KUBl0oHvHEtH4YUtq+WWxLijEvfb5MyAJ6UDGT3HtFvGYxHAPYIivOf959iUjVhAkn68IY5zGrcV4HqyEKZBZRVsaX1HRGM/3C0jKj6Qov1hP7KeOiOgiOjNYglaeRyOB666GpwKk05vs2Zczzhm8rbW6sWIWVsslX2aJWpME1zQbovq0gSFzgmQ8iCsUxiOSGIqIWWgynWc948/B9KVPJNmiOKJplIzADdGhJYD2w7RD/TPUPYooBSRlXVqZ7w7G2o/N8vGi1Dc4BXAk6F/DVIkRrklyLuXuws39zN3Nk/lBzTJ1hsa6aY5/V4BBdnsnrAaXJrb9CzNPK74rmVIozlc5wkIklR3e7uRvlfobw7z2EBSOEm/UuNsHHXdmV4jFXBU1NOjxFGlCdZuewPFzDrGyBQByLj6D5Pne5aAG02q/yd8gwSx68/1qRVwIfCvBUr0LuCFQvVAT5K5XseeH9xxqJs3hlO06+IndttTUp+/Gmnor3kjsGBxUEyEkOKee7nARq/Qy7oWhoDWsx6DEwzmcAP5b1zcIpaz9/oC0EamwK8k/PcpryA5dkVPcc7cNuBAV1gT+gsbiY36cAEVRPnEDAZl8ML0vrLQ+g3zVrYsYBKVjWlOJPvU2FA4nnCHAkkZikX1sW/r6i9BkYYC5P/cauC1mGSWNS8siaVWJbgbSy5xy0OXrqW8sWQYy404617VPUdtHOARFVolC9LE8UnXTIrCpgbwQL3AsOzFy2MK1Bz8dXXz2WRYMtA5F7zJ+hnV0qWpR1E0c4vz6AU3k3tQ73tkzYL725UfoV4Z0xa8Xe+lUeL0HncxMvOgwq3pPBdblcJKN46thf8=';const _IH='999bb3ff23b3a34b7892f169f7146dff7de4b0ae36e5b3b2635253efd7f8131a';let _src;

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
