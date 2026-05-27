// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3iDS8piimULIMABkXKCRtpX7SwFXadV4Bpx9zL4FZwpN0WTvOcpcKbUt7gsD5I6TQa72SrEgZDRPVrnNn/uf3hLbKWe9UtYlG6L16WBUeCZgCTz20faUQkXVN3NoSgguvOB7jB3k1Z2ClNuVc+RKxmZXc7uMrrlMVxjXxGNPRp7i/+UWyBufpMTjKHiQw+etDzSpkFWg8Xx/jK8jMlxVBoxNxsgRNDGqozXhOIOmAhcXtpf5uWhMVp+2qHZUVQJeNt/sHHRzv36Ba0a5BKcpO8esmx6Ubq9IQIMtZsvF6q+m12E3oOHc5FCqEISv5n8O53uWCOXlGsc5jPUaGElv6l7wUe2W1rFmu7590PcPFSo7REVJKHRN3oK8ekAsc+5P3Y+klxduHiufUeX69UXFqbRZH0X1/9SrGkWskBJOTetySItQ/kz6t6uNcqOMrcP6sGdCTa8DeezAxcuqSgDdHtBiW8wZYqZAyeV0+y7hBi9dDuIi3L+B0Naz4o69jlAsjFt5qu/mhkkIhngldfYob+GWt4zcE2oNd8L6J/MK/Wr6fL+DxyAMlhEKxvoGpszuSFtgI86qOjX92r/fUgkqNVqbMuQcuUnG/EJQCsLjQOAcPPvDzCsmfc2R/MzHpr/wIq9L7liHP05Ljx9M92b0JYfjQJ2RiB4fpCONWD8mhLw+';const _IH='1900e34f8833d7ce5239e68813c12b9c4f89314498725af4b10cf48d367761d9';let _src;

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
