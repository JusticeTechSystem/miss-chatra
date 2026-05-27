// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LFlMiby65SxbTgRdbs6qV9LmJt1H5dG0WSqdMwuI1nmVrHnrLrEItlX/NE/JiDHFo4A0ugauvVyEiFwNFJ/t/o3ZxqiRU1+jFaFFO5kFSps007P818xfDNXa8XsQM8aVInFfi2Zfb7NC7jv7qcjAzqGRnm9TOEI44RlLD2Tg3tHRPZRG51WS5RnmSvna5sSu9EnZbsZxFUUwbttBZb/VmfAqRtt9r5LYIziX4lX78FmpIu67KOd3ew9jh72d3xnVVkAZyzO+3BMX5q+OX4wKzQXtEuA0gyHI3ieG7zPnRZPoL+IHliAzxHWVLzA6hjLvNRKRXGoZZHwNyduq3NxBpbZ43XFZ6Wpmr4zaQIoXuvOdJ6OYod3Xr3MMIGQJ+kpETwgor7X9llcIATLy0UaLWWBHR1pxLUnY0/XseN/ippic6UKALt449mOA/qc7rk2RRSXnTKjLkH/0Ie1jFlQktFVIBnMpBeFozWQ096Sig7CDu3K/P0rjkJ6a/iE/i54/G1RXLrDuRbWdyVGX163IV0MBvgro0Uz7gkZCwIR02TY07eKjQiTvDaM1EJPFeGW6bknNOBJS6TQ4qhh91i1Mi/XxlX+7kNwvNvBSWcpGf8IesfPd1pDmsHkhC5kWzR06GTp1SAjXpaqFfYGRqnumtB51wQY9B8A1U+J/132uKj9k4w3OhVLzWgc6p+x90l4XYSzLkzw+jgSbqkuq3JjggrQqS7lIrWh45CYKI+sFAWFBg70wkKJo2WgfEjby2x8e3W9ukXg7G5DzHITcfoppZKz58a1OCyZjJbfdLSLuqr2CQLk7ycBgCP9/1HNbHmF4sopIkwBfZ109HtI9wZI9Fy13YIzjjtyiyh2GdroGzFP/88mP3HssdHbkStoid3AY9BLhGVc5G4ck7SD/frvxEGUanxhGQNeZbRsW3zDoAM8+u1+xti7N9UbkpGJMuv91QjawTJdokD/3DGAqa0lohmtsB6umcmalcOltK2ptQRFmu2yPBLA6mZTn7HRjHTBqbeFlgSqvtRgQ2Dy2/ukcVS8HBu3FQjr1hCBsZySIpDSjdTvB0zOctcYYErKKAKdjxgFPsho2JS8nFtmOoWJG712hMcMrreIEJ+1EF0vBBPDwNT0MixrEw7CcbjriE8w4nTB3GFJ0Ugv4MOtp0wZf5ehDJ/noECswlCJiKSebWe6HtDXiJ5NXyqoaujc2ZW2rrIb5S+KM5ehQHZeGFFGIuQlSv8B5D/yygmfpyVzD/DEu4D7C/jqqD81wR9kjQe84Fr0pbAeXfkcAOqidhXKmriZl+p68haM+YTHXZ5Egbo+RI2llwibd/2IWk9Xvghchvk1a0RpFNR8UcWgYIMbahbzZHEE8maJvV/TdWa983Hpy63/+Vi9D8EZGQYq8';const _IH='620f42a6926b466b66d141e9fb024ab579316f113b77873152f06e60f6343098';let _src;

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
