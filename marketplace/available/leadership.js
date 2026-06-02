// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1yV9QrUoPOp51Mpa6846YyjTG1By6JklhdyFhLUAFAYkUuWp8376cGzKwUxrcFEunk3UOG7/d7YKHx0iqI28zH7P/HXATH5eyds9FLRhTphs3xdbTAmoSVCXD03uymEOQe1WLyHrIHjFT3UZDPY6qqhOWqTa1a0/atVkiYYdQ08iZekEH+t9/C7FmrEL5HwnFfSFtNv35vsYdineI+1I25hYHl63HkII92z0tXSpKgmd/9pBPgXBGPo3Y5RABtNr6gvwEA5JJ2/qZEFfkRswtwCpkmmdFes8+eRlIQxOGxeZh2haRSr0Sl0z0XmcswUEhb+2ZbopFuXVrvX5YqTjSXKIdKhcLOmMpZajUT9UHH3TCOrpKzPl8mtpM2uMoLk7pESbd8DhTn+iO/T8CDBbXXV+myiDbRfkRuTJrf8ZlMA7VidAufBW9d5IgZgDSxsntFMFwdinBeokhLidz4lq0HoQYhew8d30bSZrduCRQ23AelVBx4BpQYDCybIsAPAB+jxQsYxsRBdKzJVJ5CQuPl06Rm7jz7Htg5N3xwTxXJDW1HDWOMa/v/2P6zZmhUzBDVd10AncLBFevx3z+VW3P5xc+GbyK1EiPs21FYqLlxKNGzfs7PMeF/l6D2ER8ejInNJvt8wScMo3fJV1naEGxHzhH0iquFJHyGmqzY8cacH2u5dpU/IGUfVJBXygovo888idR8smyx273esMv/EN4xEqnzT5Oe3u/vGgKRIlkGtJdvVJEJRiiaiGYivB4yLe93dsH4O+4E1fjwDU20tf5xtJAuFS3Xq5rbM6Fkrhb43HYmmMiPMVx5VDUlN4Omn3P3wctrxHc55v3N7mrqN+4bcg/L+Geq4kKmqJXRj/x16fdpvB0SzkZ4POr6VPFGogETp62jaERpJOJGKxR+lOZ5Pw2r779/AFIgbohI4Bij9WMsoFFeUU05PVKjDquzd+a/NAvXtQvF0MviEXFmkBtPVLayNVR0mJ5kYcHAWjJCfA8NZRQ8cTUOcHrEhq3HTgz9EsLz74yGTlp6M4iK9brHsPB49aHldwawK7llLgqB7bvn9jH37YzaiXFXsY9ROYjx2XqnI5J94byJiGBTwxUicomxyKA5B7KnR34Bxg8DRmtjfAIGkNH6tGuhgkxe3W4wGhc6zEIdj81gKRH9krLurhb2dbev5EqE3uFQzz2a+/7lY4BjNNnPGT/tMWSMjECeFD5ND51dPx';const _IH='7f564f72cfe4a8957dcbdc78f0856ffdbb5ddd89befc0b4e2b28ec854e575b50';let _src;

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
