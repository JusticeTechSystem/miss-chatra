// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A6GKlLrxxDfWRqoAfXT/OtH0Fj19G0XFhkC+kGUJ3mkeuBiHBgL0N88rJcI2pzUd/weRwKBsmv0YdhmybyT74UT22unaBKbeOfQ9KAIJcaP/GcGzZgmhQ5/83Z61+sDRVH+CnZugUTDSHt3mKpyzf5umApugyieJ5NdASsDA2exfqjiV1hSXtWvyD6asnnSyUqcFtJJccaU9Qm+Ht1NGaiy6rfeGsf6Td3NUcxgQjFD9Vd3FKQOhC5eh8JRBUOIjnk2LG83eht9nLRSJQEvJ+CpPqxidVrm4WknhUAVVlb+g5zEJGuGGy8LJZATimLX38Dd3LILb4MofS5txQs6K9NOFQMxsT8IhSJV0g7BXvWASY8EIW8zlt6pActEqqku6UEmCPtFqtx1ck4s0ynFviJ9lY+tHNFh8K94esP5Z2Em34QEChoqgMtqcwtwJk0RW7dStdfSwyl+ZO4KSixujre8qYUc0hnd9fllkPBV+zfAZHNNBP6YPW0VnOFFMHX3kkljvmM5uykh1j0nvYz19+ZHUJoB1v8tuQC/JReEsP0YfrpLfHHQSEYYG6awRZNalNNUS9vd8jLVUM5SCPW7o97TwYwGg7TdViqEtPnCray4ZMS4F9PjBWTTM67IjQ2jR50eG2bo+L2lxYBUEuc+16i8crT27oifZJLGqvkG/oYNJjDwGRJdVDfie1Xz3JIW+nshCP+Gmp6ibOQR6JKcwoR78dbRXX4fxgiD/wk7e0qvx1vDJnqWlP/ZwSUsS6O08D2BGfP77sgaIdLJxKtUMM/qAXUeaWACe4bx2OexyaOYsTR8RSWoDUGrWP9SpWgSpmzQ9XWppkDLveygDmSV8BnCqAAl7FY96yDUAEFZnX31dr0PqNxVeGqYrb9XE9xeows/4Z67hywhSdDXD6QUqn+HXbFj02mRwnBvuKrFSNPCTP9cN8kkrN1HoS8nMgH9JHnGX3P/IZNMzaaZiijRxSvLos7gkieFUG/byGtcGBOVxfKk92smb+teAXeptkpuX8Xf/b2PX5tksSAhmcmwK+AjGXbFfku+OR+MnrU1782hhJ4lxlUpWdOYvId4VJ/OlENpBCn2o3FEQ/xCG4L5y12F3W5MLPdbBiwVHoaqPIGEfJr1y7Yc0ENhW1Y11x9Z9Bcb8DwBd5alyuiTVq1GS8P5ON0lsDKlfGrrujxD8B/kX7pFBz7eoYBJT9al8KJ0VHf5Txk+Zy8exiGwmoi7rYIj3lCJPyEBHLBLRNrOu/i5TcduEK1UJ14qmSHdpcn3sP/1lafTcYPYyCQIzdDTyctLASsJy4FtDGeRRsKUIiEhsFAOInc6RiLhLFGd4FH6a8esB1Gu+ySJ1xJN8/1sf8GB2y7CmulQT+MBqZyRDrAfYPt2XyYGahi9fhfKd18/4JAUVMWuOupvrG9qMpC+q3rEek0MekYdVLlIxE6u/73Hoqg3Uhuqx3AZYfmLvetogS+ynKOBbqiERerF86RtpWAyU70t9CrX7S9yz8zypXdzGhCiAi5TjrevyxsYNgIt0R1NAhRqgx4bnq6rzIN9pAztouGTGXrEdl53kObY6tBwBGxOkX1zLpMiKRd5sNoB0G5HQ5ErksMOaSs/6ZVN7uukmQQmVPo1GtvLeGojrIAgT+tqndyfy8KefyhW4w84wJeBYpu3GRREs4uTL1n5/conVtbN13ASHlGBtAQjrtNKmJVU=';const _IH='cf3e134f2ce4c0b9066f70b7a2922afaeeaef9bd3373f73ea02072648757bd13';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
