// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6rf/7fuQk3X5+USt3I1DuS4J28GUgYAETtpM/GuTvFMOuuDWQd6KD7D1Xat77/N7+F53KDXRZeT82a2Rj1SaOS/tuOEL+5qfkf6WLZfgWqG6TUVrbkMA8ShY9aNojJpzoDqjwbFpDbPgP+vRI9o2YJrsmiGWa8vZQcpnYsV3o4WrInyCNQq9SKBR9viTWmwRMNmTKLU4hDvu30zMB9XOGB+h5lAZtJX4dm17rUZowDSzuATjN3Ui7zGEqq/8BYVDjKhgo5ucvnzCuov27gF1+0WLsIxpU+MniCp/GAJyuAePHaMwFCreo8iDi7+3lz5HXH6uxzlY9G03p1lehna/Zz975RO8qJi5d9YDFNbdCA2jS48sBvRak8P7pUaK5DM5mz1qGTWlboNr0RcrW3T1KD4XeVpd0g+JB8eET5HT/xaOSSVd7YCDsk9jxVNnJJVA17/RV1yQumdCPne87IJXj3IqLmpezcg86UvZYiC4RzlBgZFleHkaNoWQ9LArwAIADjO+xu93OESp6tLjcBXNyYmMELw/n5Tn5hzwr0BMMhRCv80HbX89riA3pUtBO6RFuVhXIsVz3ACJt1MYh65d9pRXVjRIp9LuDQL9ff1f+QCRatqZG7fZ1vL9D326JkRNyAmtbkIQT6+HJGEsr0mXa2ckHIskYJQRSaEPxvRPBXlIL0176UAfj1UJAbl+rQ4QU6kw5Na+y4ZYzheJU0dwNwj1l9nEcCOZ9Fo/Do9e5nJHjEN/ZE5yBmBNNKHj2dPZYSQq3QuBZxLbBZ1uzzBIAJ66UBBwo4cI3UHCtYPMvqSRBImc50gCzapyz/RTTqropNyx7aIvIhtsSCOsZV4HDDba/AH3A0oqMyfUrkihKI2/8iefGiMi8Hc4JmasgwkTjNRb308A7wTNVu3n4csxT9afOw4YkJcfsgCRL+n0Cr9thMc+wibZyImcz0BBrV4hT4E8NxU/sCgM/80XZ1gwWMIiwMbBAz4Z6goolWh5AZzpcxPATcg4Jw3tCA0GEgZS3GDRmg==';const _IH='2268f7eb62e81967c1d56c9b4edac0bf7e6e98a2f762843e35825cfb18ccd874';let _src;

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
