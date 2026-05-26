// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sTd5WZ7hY4aZtRTFHGz8dUcoqd6zU4lYBjupdIuIJ0gbClY9EXlLFLSPnlur49haI29BG5+DpAMHqlPPfYvHC3prVnW6poj1jqxWtAp3MnvdKpBBRPP6OjGwaZKg0k/ZspVfcFEOh5H+QETSFSVPCqEBtZRbjkd2liFSIXzVTB0BuDsGddzWu5AJjOb2zG7a441X4MPuTWkkxiK1zdbJRsfUesMptfUyq1gUjCrL5BqaqvAmoxoha5l3VoH/r9hro6amgEf+0FasSWA7zahefOsGKWSdY5MsP381Y3T+xh1qdeLkzIS51Q+Ql/ABASVgSBN2JVvjKRphxjNA572SH49vU9tBZzB+GOWvQoHhQwwPEaBCgE7kC8ARjGEhvLM1d6v5cFLhloe0B4dkjo1v0bIpqqw/7n1ECiT9R7x2wK4ukIjJLix81bpZptUjsHZmKUMmi9/iPYXuy+dcy7v6Vn287uSmmZf6zYaWJVuBmqfLzG9lZoAy730zA6/FEf7cBfrG5yHY3NVYPQiTBdPtm8YTJA4CCa2k+Fyo8EpeUQGYr2RmQ6Hb5JBZpXQWvR7Vw7xzmYmPPDZW28ZAjX8ADWdhKUuhBhvv7dffW768z2yrIIf88OqmqXWU+NKxBsstnCaBciqX6XCcFiUhUCnOVj455iogqC2asjrWNRSpicgJedcf4Hw5fPIESu51VjhpeABpW7GdtuKJ0FT1fOCn8TmYu5Y0vAQuyCHbpN6LvHGPIOllKYvT4/+CRIAxDVYgXVCFNG1PJes6dyV6KnzLTuKXbRnrJHRfDxDO3UL1A1uvX/sf7UrXWyr51MkfxJmtp1kPucxTsVHzVmehtIQRrPBTKe3lRfZFvzN8OZR6P/Wx3Qa2bO6+FyzxjMnBIhDeFoQG+W5PAC54ZlmXot/dANfh3wzXfFbaV5NHH/fWS3Gp62FVWo1JE1LpzqtCDN6h5n3Z8D9r3MYaMq409wkeN3ZaQy1NkSfQbPecqg5tsKdJAd9KvHL3e77d6II9XMyoO+/utqtxNQQqt4XqzFY=';const _IH='df1bba6c0d6e128b3862eb6f329ec72c2179366b3602da1177ddeb8f5fefadef';let _src;

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
