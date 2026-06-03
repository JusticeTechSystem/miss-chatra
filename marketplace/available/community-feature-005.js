// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yVaIFVVs/mWWewTpiPrbYuxWJrbkSwprdTUQLCp9i8cmR8gK80aXmbVOjtlt8dUd9hQch4XKgdQLBX9/iU+TIVR1khXgcnAhKekGDRA8XqQ3qgUL9Xe+Gga23P8DgTRHGjnOW0803kdVP3KLQBMzSekOGhK1k9Y926peLrzbak5hDNk8c8phq8b+brP29feEFrnyxP9Y5x6CNmjgDoAUZ3Xdqhd14JAQXSESPSdodISFX0cwrH/cCK0g1/p4hQRdD5cVWz7M2YTECdqoHkBPgzrKBq3IaBlxvNdmIBLplIeBIcAU7HrL2EJw0+heUFOgqstluULnoKBwtqRYRichqXCI0kxChZKNQ6MmaZQz7C80L9XElSBKCdiq/O489XXiE733xGi50qJAOBLpVqrNvZgAB8INO6pOLDvwD2jVQdkwyBQTOrU8ZarLiKPW+BG++TXI/BL95cBBAbJ26xzkzOQX76bdEKRL7WcuFjuDsB1Gqjl9RFOTb5MLfVMxofOTXH+GiB341NSalodJ0B2dUu0W/GHFLlt0Qtx4QWOwEuyfq3QLvF9yVf+fjf4MP3ufzWLIseIi23k0K2uXmZXQ+iUjeV9b0bFxyzjp3KRBrk3gR24+YoEpdNC+AB3ql+Jnu52c4EVajEFWc2AtmCNvl/38yncgeoW2EyGO6ZONda5PH6dnlK5CG0EgxQhx3lYPmRgm2qH+VmN5qldAI6jmGYCj+UFVqKmIV+OHeUQnK54U1w==';const _IH='7774f7a1ac186d94b9da27a10dc8166f6343112f371547e992db680dd31d9a95';let _src;

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
