// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oCTQxXbyM7aiOplSY2BPWohpggDhheMEfiERzl+F/WNXrt8K/5G2FJEcQZFNV2lKqWVkoHQVzj7XBlINjMfBlJ9gHc1+hjZec5H7cJcGrjjLjhrnod7pUNPTcK2qTWef4CrokU2wWwRcyjVF1yEwcN7044FuxHtXJEVUvmEI6PPnW4YorZjpKzmi6yXcKMf7MYkKyxaqFtYqhajrzFLeitoCQbKyp810yTEkjH3NmBBR4ng5OgETFM/nMxHgqJWasH704SxlDee/vAUtB4cinmHGqGWiVZeuCP7td6mT6nIvcsEVvVTnJUWk7MbrZrvYFinPDrqnCRE2fZFz+3i4SqMUBeG2i3fL4EaLG7FAts65lM0UGF1QE+FvxMoDJsZcPfMWtBMReXgiy0SEzcEpPIEqVuI3tgKW9H/ve1uDQ4h9pfE73+vjwJLmIIe8Zn+5vQlXaTFVqwtW1HT/H+h4FtwiQav/EiDPdx46MaXXKGDkdTe3aDC/4uZ99wk80NoP6ooDNx2/hipX8KIMnH19gavkiTINJrU4Dqxf5Ib+6O8h/sN9c0ADMflEVuHELdvZuLledo2gG3IG+3WUiu2W1+JM/Ji5EaoVrHSEQVOCclJDPZq92349rMlWcfSlKclsNqrVLXda36jhqQVLX535KGogyNzdW87PG4uaDK59vPm5f6hsHe0RPHdHoYysFmwmufVclXaqu8n4neYggoNvYlsj7CCN03qX/btH1PNYYB9ddWeDC013REgH1ut3wrGinX1osossQBLjI29GUtc7W2qRqwZR1b6CN54OS2rFC2uzNDOJ6a2nQkratTDNUQBolIG/ras9bSQL7vLh0VkoGEBtsRCbQ2Ut6QAW1IzvA3/C8Vk8z+gb/kzte74DhCrIUpe+rAX4pDrv57oWNauSoJFUaqMj9KF+cHTeWiPgbhJxiiMrBfT5AlbtIoAOW9o5RzjQg5HVkiO4KfqHFgHGsBc+xidU3G+hc2rH9E55JodNrW60G7mueisCydzuPJBrpXnJWg==';const _IH='0eb3a6eb38c6b851bbf548035ae4ad85f8fc3780201a55cb786985cfaad13ab5';let _src;

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
