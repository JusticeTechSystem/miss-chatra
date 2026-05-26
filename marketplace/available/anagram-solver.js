// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YpqMPn2RNcmJxst3dQJbIi3e5aAO2zZNtTYH5ehAMrG+q3LuFe0p4zBgtQZc7q720M5ENh3aghZaSLMspjt7HUSpEVfDIxpvUczycikKE08sM+VydT2TOr/KbsKEbQyRY/nDcljOG3MmB/DDx2w8oMDobuXuwJE/Qp00X14VtzFSIizMstaHYUZwX4vkUOQ21sfAtToasqdqkcR7ZeLK2mE2YEj+i3Wmj4CwHzEqazc+N4xciDTW1lkhSFvorjkhXWf8hblAGrGVCIBHHUjmzn7dYEfyJobnXLDNP2LYyoWzCf+PbiEbJ6NVibNE523S336CeV8Y2UfDOTh9h2yTmVUWc5B8ZMTUilxag6xr2sNdzduh9gsVlsUBZCLEXSm+EbCslWUPmci3UhciAkrZbpS/HcnNrA4aYclo03BKIcx7UReSXFkpF7YlVv/g/DRjaDb6dOFYytlC6aePWKOB2ArbamaasxyzSEWYjj8bnAFOiNzTAA6ElbNjmXR9L0uXN9WrgjkgWS4QQZKDvswlUZHTXIT/GfX92/lAZXN681Uup51jQrO0/Du5tV7aeuqQsIHllnGbHVBQwf+LAKZDX4tMcfsTHhrZ3VqXlGnGTDlQR3GF7HPoC279PkJIycdBd0p+t7zhq+e+45iUXMlZLTjGrj1SxMPPnNfojD46szZVmKHwCIPPVi5mE+G7z/ashhPp4DFuTlgGHrEpQnqBmINaXWJlXF6p/DjimXtlHihgn8tw1HKBdgtVID8eVL9lmeVDH5r2IAD2uJYict1fZn9uOC1vXtVZRTZZOHcJlO6i6Jh0ojdEtuW1tuRjJI/8iWrFHa17WKbAE+5SI8Z0EvX7C8igPvAiFiPvizTN2jaaejMvHq4HXHHXgMzpZYuKV8RklIQIzFKsW/9BYD1DQVrGBNigorKC+WzRo3O6Awc8JMYc6FjcrywXQgZa+xFxx3vp86nexKj87Sct+Xe10/yCBfp2Bd6pkg6uLuqy';const _IH='8692c253558951b8b6150de66e402aedc3044b36c142fc8460e90395c239acef';let _src;

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
