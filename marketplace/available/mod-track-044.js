// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1w2OTlWlyiwuoy0MurkYjWxj9S6UE9knS8eR98AEoTPaAfdcOscoAYln/dZMdt8IMqqmPK4bJOxGxhmetd31rAlK6U/2WX79QKCm/+aW7POhvX7dgF84EZqzOik8qp9ngarTlyHaH+MJYmSAMqmtZly5yHnA3IE3qnstsyTXQMzOM4Zt+ViWEXJm0yBU3lpP++x6NKyet4dTUcnLzgqvXS18U4UdluseToyivdcxNZQXSj8Gx7l5BukzH2BrIAD1F9P2b0BwMaBo/b6+HKjgUa/AJrc/5YSrdlD/adystIIP20MsvIoeZeIVrHKoV21v2aoqnEqriURQ9GpHYpywNT1e0C6ohIU418Szay9Pnhu0qvxHVSdUEmekDhmzWJuhSnEUUfbMmO1B/W5o8CrOsqZfbihO7ryiSirqe83AVGztozoWrT+ldtZRtx5GwvbWYzWXGee0P1bxHVtKku3eU2iHleS/6Hv4vqEjUbmOhF1nNjsNRSLhBnxj1fC1fLiu1qRmXkYWxSbQ50nuE8rQZwBqdzF6yM+Im67MEtRS0tP/+Je+MAh5tjQy4TvDyuxtyF5hoeOyBvCUBwUSfrHFGsyWDmCYhcXENyoJAYnbLYDRvjccdeb0F46JDGyZhEwsguWwjyvzjSRYync71p4Fdc58hRZVRyKtQYB5HkYqNBqoCvmDZjf8v1tQg0GJwb4n4GmusU9PnzNkgrj5Xo6kMPlJIPOkm/Xir4zOUZBssQAC15Airt1et4tLXKGXyaFE+o3KhQJRvbsVx7ModhicrvwoNhOzZXLKdBa93Rww3l6ggLfoUd09q4QmALCknPqj2mvOslhOjzrk4XBNwWthZgaWvqO4QN3dIc6P1OHFTzrbWJ1v27ZfDjy1s9vFr62rBy0qBkl7Fc64GezLS1Xovj1B4RFJVxi2Bs46jExFM2rf5XLxjds9iqM8zBrJtsMBo//KC100IZuumRgcBxtUSaiMP4WKfih+1lfOtFAn3Q9f0BPm3oMb6whLUeTV0IOIDOxzB9lBUJLuuyY6BUS382a1II6afDjnPWn5cVCRjyn+v3pYziBjU/jXHXvKwnLCh7hqKjcuIzSR0OobtHkfEYuMx84tjl+npfYwY0dRIsqOpLS6FyU4xR+tGtC59VqJ+z9OyvysTaMLk7Hco2KJQC3AdWtQjUUaZUAE90WgOu2cDV3LYqaGSyJqqelp3IFwTimIED0xWbYgniEEdoUUd8hX6bJkGiLHkN++A3T4G3M7hwSYKZ6FMoSeNMlcw4qpqlvEy0rp8LoLmCfjHm8+0bEM7P4oLWsxBOet+23F3X6HnWms9E37jhXeT48KnH2+l96bu7Qgb2i8M4hO9sTbFtxtz5bfrmZ+HQ==';const _IH='768bcca18c8caf1b87ac823d91e0e17b2126279ce67c53a4520865c8b69ed94b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
