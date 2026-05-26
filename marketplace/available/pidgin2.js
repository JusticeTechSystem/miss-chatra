// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UpyYbaqqGDywI6FevkroDrGOAdp5acAqobIENBFdaKtGFuIEsRr4vnDLmU0B9yGs7hYMsBS2V21QdDosWEtfvDWyCnICKXzWwTBWdZrlkrKURJfqOe7WhM7VU8uEWXlqO4yfndqVKzGEaMrev4f1KFWSNMRYOaOJ0+ly/OeJETyDGrjTDvH3bseHLsS8Lu7yymM6go7mj8O9Z4n9NrjpseemAh6+ftj3bf2nOI01e3TcurEL42R8blTWNrAwBuPYomTAeG2P4y4EDFGiTFduTB1CaG1+EFF7IdQVAkw6WJyEIs4ml4CXjIHNKVgtseu8McnPJ9d09dq4Q4VtV160qa3w+u0bwPLKw9zyejQtv3bp6nQybKhK0cL25HBWPK19Yq4ELQMxMd3GVC8khrB8PFfXDQzasoLhACQG8orHwqMoztlBBXhIjc3QiT1mjw1ySWwdU5+1XbfgmB4qllREyKM5JEmBIuhk4qRpX+E85kFd2/xXvu8Pf9cEJaItYDoJxqjNCOnQk8iHaiA4u3shoARe0pLLlHWLNQc2NpQTBEXxV+uB+Aies/mewxcAWkE4nSbSIDNdntbafKsFkcuOix5a/Wj3DzAQ5q70rHpCi1OMpvurWhO4lTy9nRDn0NSEGeGN9wHyb7X/9O3K4qgS7n/Aowa9Cwkn+OenZ+daxrMWrxulzWiEDxnjclJDyp7C4PsXn+7YjcYyF0sgjpdEpwAFJfoc18j3SHwBoYFwEypc7wa4z/o3ZkeL4EacejRzRigs62KE10gZmoPcjbYy4Kl/yL8jDXJ/vV7bNx5D9KdK23z6LyXu3J0BeM6G96G55/Z0aELW1n/Chw6uyDeD95CnkRDjQKTsDFIuTPbn2eiAPob/7t0BzXCzjJHK+1I2tLBcNEf3f+KAeU3XBE+Ipk02i4xF8MRIrzH6uXX2kG3904bvRuBzaKyTvIxbMW9HCg9OfPoYPZKkXSQ0eRSi+AGFRtVhrb7n0JC+Yvy+fm4ITmP0CZ0M/3lid/Yyl7jqyCj1SMJXVhz2jS85rXiRPyKs6mKElWosUugHrg+Klk8yuKTuSSbr5CD5wbGz09VUNbtT51BzGJh35OhlBIDTysQSKfktBMeDW19FS86qnG09iVGhz7EUViAjW1GJib8bIdSLsF61LHriLWbL+SY3jmevePgfrI7U3YjhJ280yT/s/zj4ngXbCYuR2onH7A==';const _IH='d4476409de2dedba79fea3011964ed976db838ef48a699b1a060ef344932690e';let _src;

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
