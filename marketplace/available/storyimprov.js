// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9oJicuh1GyX2sYVX3xKP4QWOD8z8DBYrpnuv6FifDeVwLtXn950MI7ZmqOkVU8K56UzwZcovzbrfe1Ko5V6GI405ahzi2ZzlbiW4Wq7byPHIrtPf2eyYlA8inhL0AfUn0TzxfP/A3zB43ArWicyG3OZBA6uIYxYOMBHlV5VnQStfsljakll1EHZhcaSoroKGQi1xiqS05wKy+xYKT/EsImmerxxEQKMmva1RvH8ZcN5+52TGeRtcklI46XvJre8gmqaEObmLnpZF7uaZvlB9fAR3DgcXx66p2C7ZPx2umt3jXu6sCA/z2qMM1p9uyVs1ygLIGbr3zNtI03Qz2Dv0xOaM/jOZD3rsNzGAPYSonJU41CEG1NMAH8VDQNkF0L5EiNErmPgYUnzRbkfJ60w9A5OnuSbd0DfCsIkPEF/OlKUCSc+ImQd8WKNbpLylilcJzYj2RRHWm9fX0fbucslFaIFZ560QVwJaHFQzAWeIb+QBUXMNd8gzDaOEBS+sIbrz6hal9d9IyFUnPMK5bYP0bh9kLZ/crKwyVyRt1hT1b7QRHQ5YATUatZYApB/VkoK8+RQlO8eDH0LKnswCUbfy4/eSX9d2DZDsW6GkYWJwrS7UmnsMwQ1RUe6udHu1QHWJeMjTUUIFe7tNUbJOzb4yZFqUW2qT8bpxHxrB3cmzGkrSuo7U+U/dVzAaBTj8vaRr0WKXJnkV8uUp5rIqSH+CN8NstihiLI4AFqU8sDO8/F/uueRKtauNTTLm1B7Qnv1NLmOlvPf0lTuUkGdoNxNYFsaWeNs2Or+BJOWLRBdUCFqMPezV0MDuAf+Qmg2gKGkB2wL0nDVdv+BRQtiVTFXZ+Tcs/lI6Z7eHuKqZKcBmEwbs5BjFhE+hvtYnijysJtQWxa3KRSsNX6FCgtcQ06ki6VYAkci75twv0MADnMWgnQ45EKfJP0/8kEh0hAblHlgx1MkLtXGqf7bs6G7HUk2SQRi64fFhCe/8Ayv9lA0NVAYIUYamxIkEP6JzqUZVjuG3ArspLYleKzJdePcOZR7ZnyPfPTnoIjMMi+VXM7HAhXTzv+P6jBJj+aKvfnmsx8+jY8pIFdxglFrf9wQ9T/UUUu1tl/SuUhM5scJ7MbivhNv4NYaz12rOzvBcM7rvdd2cEYq0MzggZnou1nNjJnWcqFTalY5A5bQslPw7Txl4L9/EQJy2kzH9NgUfsoMIcnl7rb9N';const _IH='ed58ed876e95db12bf5abd449a9e92b1d23ffe6c87028611ed9f0c0c99e1df9b';let _src;

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
