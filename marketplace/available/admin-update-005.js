// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3XTN5kPhryKyZpdNRbg1OGvH5Lu+LszaLxzflzpaYlK/3aJBxaqTd9z8XxPt8OVsgPFo2kFhKWCBBtsixphFOeLb9/owJ1swtsLDX4tkl4GbZyagrNmbmjabEUPoNCGcK5ijKVYB1E7SxQ0ODr3wdFWuudagUtW+i0Yx7Q7FRczAkxH9K4p2vKJfrc5vcE0wyk5GJDL30aM2RJDQDyG3gLqit5T1Sc+64CRCl6Oiav8LHN4UYPxpmuvEZd0eUr6F6Y6BiwHL5uRGbMvNDE3hkfZ4G6bk8ijjz466MJvXXJPs1yaFMHyJjpNRZgRmLZEOkgjTTXos4a1sNHyxk7A4GVAWRnwP2vw6ulwXSw3li2azse57rbeEs/NZ4WavPKpCfhtZCv/MA3vkY2XgY/WfsB+M7zBgR9jLEtDhpgRYRJPKqsT1Jv2/e+wyJNhwQVx/ZS85xaYnsaLFsx4JV/tAkFPuk2Fg0AhN7Ab0LiFFj3mQJ1dOPgqtv1u/zI0bbkMGCZrLQgemncT2PHiiHlI1MCwyNZ8lBLEUy+0v7kAMk772KyZu3JnmtK/XLVjtiGUeSOc883lFbY6E7OGfsiCWBP74IYxpw2C2G8CWWZHBVQIQO/xfM6OV8z84KBdIhm7c2FHZdKk+GxRFsngXqLzF1fqqPOj0tIiRiMORvb6mmKHJw7Sk6yP0LZwjDfBV2/eKnpcQC2NKERMs9lwopJ5j72w36KhNzUVC1n6nsGctd33/JSE2MCLxtde2sjC5DWKxHxB8ySaqfeksH0fEwTGqbTPT1e3bolc3HTokmo/A02qHQxIdjgTQ4U1XiBM3c32ej852VY1rN+UoID6dIcCeM+VC5Tthdz4xcK5ngdE5GlYsNco0sTA4T2fmfG5HqLeNqY1OWv3EPNUf7M7DFl5q73tr+VyLzg9IbBQP+QWDieXsZ/jrRTdXpEcI2WJ3D52OdvbQa7zCfL4x3IBZkdXGUJS3AMqp6VY4jkK7whBt5iVNk9ZCTsmhIgw=';const _IH='6119c523f9676c72e3fff6956957d7e4caf9da903b52fab821f9851d88ec46d7';let _src;

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
