// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KrHOF36NcSsc3RDObc4WSzPqXzI1ULNhcMfWXPtM8IeUJDHsICIsjkRKQpP01lwrAXg5QXdYO+O3roZKkoczYHYDh4FUTz2AZelf9ToqJxsM3TNKJPRmvlxf6KjtqHq3P5+tnBZYvkf5/GGSwVBlSBpavKGsIUCJNXsod6gPeT+UTuiNnogmvLO3yLQP7yb7eBVT6gQJL6wB5nImcCAxf0JCydGuiljd6ATrQK29VoV3f9EoyNUCDzlOknyvQHwXpoDuXi9Fare2AlV+ut7jmXmOMyOW/mYv2JMrMmXgNdnyqqRwCO+cW7NoosnOYDECWq+ZCpOctskTNdIogP46o6m0mopMFgxGXp2RG4T6JaChFkhf4oSk9m0hZtufbDyeh7VqbT/DP8Cx/3jS9wMisDxwjsmI9Zj1OsJ8gfa0bS0laJ7OUY6jLZhRQ8L1dXKGAj8ZDhTB+fw+BI4T4KN5J51XYu95wnx6dL4g9URkntV/nL0qmQJ48udVzZYHA2vXGdYA9IuvTRhoLyjWESkNW4c96Qv5WUypik5sbfTuW/KplEldehM7HMJtAfTqYzoHzZnGbqGLpedIOaV/mvr/1TTz0tFZajbEzM+0MRQSa3QXtWlK2Q4M0AHhOKN4S1Y0UQ5ykUgSdXHZ282ynoNnFiLN3VlNmtpxMyWxbZ6Xs+Vyqp8H4SJGeoM0CIPApVcRs+sKoxKegRrg/wSYu8JI4A60zJv2O+NuPpAzGBBV2+2NYuaDKw4=';const _IH='44f13c2585eaa532de2c14d7ab53d6a12a8634883f8799e2c4622a7741c8d912';let _src;

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
