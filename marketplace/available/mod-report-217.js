// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6RTbFAoEZvfXSTiXivBjQEweH/FlFnGSeJcnAiZbkbNNFgfNK2QGRLnH3DxACOrEZs9KER+RzBgyZjm902jnV/Qpxo3YYr0INEYSXSYLohixmW+IqHXG24JiUzvmVKEduBgemDwd+//JzhmivDZCQhMy+SXpQqScaM92DvqnxdKUz69sHwePxYNiPd+evMS0PhQjShncyU2DyTasu7q5/ps11BrkoovM9mzFfjb/csljKkqMKoXUf2SzoI6+B8cQ3U5noWjg4r9AjWg4NpaqfHr/mSUeToTF7ULGT7vvaInbcX1TUlz+zyq/o9smqfBlx8f2uvQgsvapNcqs3AvrsUQXrgraSo8Ris5Dtq3Z8OjgJ7UqhFlodYmd6HyPlerbJRuMga6ymGQx1ULR7D2W/xig448s1G8ZOkU4RsUPwFcJ8IPqYNc9vQ1c+iQLzbt2uKtWX3NIYsFpbb0UTyBtAGWVHg8EIwTLbXWl9IHUHEJ5tYG2019eI/YcFO0HQcgEtExpfFoBb8wZJ1ods6FM6vq62pMh1vg1tnKcZ92wqeQUQzk6gt/foCHTbhnjXIebXQMzEgVHApGbXtdJvWO+lVgNrJvkrfALFCiL5qMX2xmxg+ukVREQ0udr5oZhhcfom6J5Q61CbIoBvj/SbwAxgDtaLqQSL+PZ7xDNiIA6hqgyL+jNen+MyiwY1S/Bhv0e2IussoztWs9ifhXaFrqbBD8DzqsAnw3wDPXW9IQMbZzBMBygxYeymIPRdGpJiNfIuQNfnPewBosJ3azyz4TMJoWf13bU7oO/1h5bo4rPPvRmW6JoAdFpHmtiOhUpInMMZMgPws+cNouAW97Awyl9NTpcqwMvX5z3kxfgbjWQi/WsdsoXlRA3VFlGDBEIqHk8dPzcakaQb62zYHNbJwPCFwRr3yiOwOS3hKdlH2qWULHR1Oi23EEaMLYNV7Py6zFi6iFLeHky6/dOzDVVvMez7GtOEFxCYsHFXtWQK4liBiBiM3+jUPsmeRVy4ItFYjs6gochIjScH6nRWR8Z3f5RgN1wrmZ2SOw8FvBXy9J3y9ngJXuEHLF7MDkJT/VCH6g7rNt8wZ5tXI3IWubLP+kTYELL5+kMhg5NSujaFTkNxxIynEM2wCzv4QQF/hRqwPWpy1tSKATlfqoGeRCGmYGNy6WDoHs/dt+4VN/jZT11nZNenDSHPATAHp+mIrTeWNutzhjrQV8WD32txOK0PZwJgNVf87byQGzl5yN0pDU4O1ywRvl19TTHzT5SGOTXwMhTbpO/v9J/I3vCoGDGiSkiwSd5sVjmp4UEOCst/81KKkFZua/M7f4KzWXqciVgOhtFNY++fgF8X8x/5f4LZGi38UxvvIP0AndfQcxOpSYAQibzOVCv2nGW4s=';const _IH='07491867b4f026473f714c3bf11dff0d40759eebfd95fbea93c6883a0094f6c5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
