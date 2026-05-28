// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HWhqJKnk68r4qnm/YVfLTWJUKkuEdzuMCPAlCEWGXmtlThBtrEzBKb6XszYr4aVTiKK69gcucq2pnZRaaswxCzKYqK+unUqjzgJ8aoowXTv4DSEbmKtDednMvEDStdIsIchBzVniHXolyCJRyqTAFEPtYUZ5ZD5vVaOS/3Id9VnpQyLj+ABrGh32WPbNxYcsCQtnGwe4G1LuFULINQfeueBXQkucZ2q1jUQoPa0bdJabS3mQ5T9XFzDB9YDMa3jyXf/aLlF3Mxr/+uEUDgulyE2sd3vDDbKxdba0zz8FTvIToxrk5e2ZPm9THH/l8sidh+GkkSps4voDvtbWa0rxjgKuuZ8CQVN7ntxN8Xj4hxDEe/jYhcC8JMJMWc27rIp3Is+P1f/iBk6gXF7FC3YsFuPBeJMxPk6yuc1HldqGzGBiN/FRrkEiwJaz0Ty/9/o7YKC5pN6SEknEcysWVOoTElMPgXULFE44+Sd/KmrmiDCmeK6oWtqvoWDR4NcUxO97gF+6rOREfHZOxMsw/eR5H19ltZrrcO2ysghRkW10NOlXI5W77D5Qnyy387RFE521drZOrryWic2A5G3pJ0eaYsWvLuCqf8yI+i96zJ3U5NPrN9FrdaUOBOgC58LiNGY8bM/a1DVhHrdqSVuBuEyUpbBT+9BJeKO9H/q4TDtjS3ckcLm0VNTUDuFUnRpdM6Pa7OQJPX2IdHQx7poksvIxbSXl/IXjU/CvpKQRN7LwmT8WZiCZZrXeyZmPZbZ4lYvmJ0t79FHpYJ1VgP1HN6dug0S1zDSi2wjGOob397hOW5ZUj4UGTTwzmlLEEv3fPqgqvbDdUz6FJkH7Jb6P4SkByN6+AfrepsIaRj3wT9tTeyVGa7lv/GERWPXV+AI3v6XPbPw/2yDJgxjswpC/RG/kHpQXhRsOcWdr18859lHM9zkjyKlNNhVbffbb/buIGPe/C9tghP+JIbDimMAml9AzzRVnQtPfzSXHqRQXtv65W7gfXaczixhl4TVIZNirPGXg2g==';const _IH='93971caa83de65811af946860cbc3fb932f8c621187702d80862b895a1a95775';let _src;

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
