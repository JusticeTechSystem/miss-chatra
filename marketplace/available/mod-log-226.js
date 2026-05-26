// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7Z+YRgx1QqqI4j2gEqv2024OFqKqBKP/R6iMh2M5G1INA+aHUYmjry+J6QgNFnrs4g7EkUp3Ii2HgVUX5TZg57CJKqhGBuVs1UKHOeeYbeXbMrNjqnxRxuVEuxnP7DxRKIYGY2KwNKJN7KjKoTg3dNSJfP01luUdyaRqSrE2P1eNWICjKURBYl8WJBvsJNv2HYucPdjVMcXh1kDCrN8qYeNYpDN0eoy2nWc7Jpzv7QqXuSDDSlK6zLIf1mhL2nmB79d+mooJ/LqafYsXj0xD6yGF7EWHUjkeIQsSMpQXmfPPEj8Vr9rWiAEkswF6FrZng8uYfgA9c7W1bf5OlakgM92+Cr/TdR5c576ZOnLvEmUq/bJq3HvcNvv768dHUO9owNo37rCmUdo81R/tLvQyPZIIQPBVAp3X3oeX2yAYKWLjjTOBpvnlsXveG2n4/9RX9n6AahQpFR646+F3CcV/7y7txBhNiIsmGA+o/5bIFINhulqnSZrsvcUae2EhX89GJmsP1PJisqyC7ucUaLbGJj5HKDsjzeZb0cPbk8Bd2p60+ZmPFHHDVd7RTzpotOxRN6xAMjg25QdcqvUOSyzqOOqzs/V0ebkPABNBiEa1yLTClLrBOFcTmPJ5Zr3uAWrjHjQR0tzhOoQulGCz/nR33oRq9HZW5BBaN+ghuMEzW/DdbWQj4ywVgjAjW8XRpG5Wzw8yeEbtGVK01vj1Abd++zm8Nx2AnY2sF5+qqVjkZtTz1rA9KtzTZq9NFAKn25MQWH91RynaBuHQnv8pjzIqtpHvae7uLSVgNd+KBlt64EkZzioel8/Du7cgpGpNVXATerTnCkCUuWzPexPfPtHigIU+Quan+KEPYYoPHzYaQnb3id9kRKUXfH+JnOaJKgr8jwuduKdnqMKZ4JbDyFaMO/kRWU2mEQHKFDvwgQA9uWq0ssd0HJYX9FnJDREQiPrn6ngLOf3/2D2nHqOVzSqy6kmAJPGmcUIMkrV+StaGmg2Z+33Tf6dAay7B13DMFU0RkOcRffHRScqzu3l24p5+dOcrQcswTvPxzUzteH43DlgoGg02owIo6WIkDN/spk8toPq9kxO7QlmKYK4+tmCG8By8/OlLhST6Tj1lINY3gj/7nYEF4ttsokfHndfeTv4sZ2RNXgLSv0AJ5d5s6GeF3cGcFQ0CrhyUNQF2VLkaCuTy0lEdaEil95Wb2avSlYrkoiLWGjhg5x4nnQkSsEb/1QGpii1hLNNxO2nVJMNqTRCZg2UAXjgoIBwlkFpE5wu/USNF+1x1YWgm0rTkNmG+EvhJOj1KCq15Fe1xQ9Lmckzin+aIKp2nUHDkk7/uarNBCYNzKgzXfeDcig==';const _IH='9548a7e4412cf68aee3187defdaf8ee754d65cfcacad8f7069160d426ddd6012';let _src;

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
