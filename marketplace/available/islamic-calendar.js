// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nyZoIJQgaKPDg9Hv4G4h6eqLNrq/75i/43Wb1bxTFZNXHIjS/ypvOrFLwMrPT7e1BCbfN4tlrImAy03byq+8MrZq1vEDcQM0NVaY0YgAJP/evtcYPn5G4JN7WDq2eXGvVUwF6K0PMmujmDRLZ7BGtxN3OAWWx3YFQaE3u8GOJcu3fBGoGXf6ZnvN/q/rp54aZEJA//9tgw+c02kszFC6Rfso84dEYxwVc/DKpRPQiguLDl03V+Wad3dyO75oR9ZhcKJMszSd4FB7a1gxYSgXY1FCdBWC0oLDfupl63wfM0feETtXrIT6EHHrRaOBUk6HSBXIQCmL0hinaPEKYLr4XtjqlGhoXeTGwYxk5OV5WZ18AL+aBrlgpthxrMtRanHJUl5PQgMTwXx3BnEAuNNzVg1X3i99h4EwxWD8Pff1YQi6lOLykm1Pk09FE8AoFlE391YHmvhAypDwgUFPrS//W9V8yLCvc9eBrWyA6J6RtgQr2hVipmnZJijL0HNlN5FtlGO3TlAlva2rsBIVsQMnQU/ToCPik+ESsVXO7f4f9UiRtLp4CqTem86qE8bH57DIX8RVHtV6wdue2F+KxjojVGkBj5dcCW7hpBHvJwpj/FeMNE7B5QY33B69kevUxIc4uXCJagGar5d0W3YE6j0fMBiu+rX5YqU20tTWeM4bsB8QHqPCA4czDmb9cV1cMasN9viwVcQuIEivxTKr/iWVDDXNNJXsSmpqTYlx4kR7o3wrPyeDxzg9qBzib7GAxPMKOqTIIx+WgbMsGyupkbm9fVIylK9yxn72EwjsxyDoeN0pJMjhX8+DU9c5x0Ig5wC6W+AvXYaB9CHVeYNCBI45q6oRAtulSbJ5+IoEyfD4rnlJ8N7sy/IpWNo7cagFbWU1tK81LafekxU+UHPwtIPr6PMieP4ewG5VzdLDW2W5fwaFgzYa2hZcw3BHp+CfzvMcunc4YsE9dFD+4+3WSPlexeBUfGgiqwxq/v+bxN1VF2EZWmJ0dWSGFvHtHb2O1HF23BXrqwe1G7xp/uAuKrJyoaODxl9B7wUvhzTcBGz7fJk+eC8H7B/Kluu5JdOmogUqU4pMJeHq79r/sO6leaPHKUdW8ltwgAHgB1ng4SLL9/2t7d5rXJ0XTwlRKHY6viFlAw0R8EYgVECg9glHPAIt4pdwSxiFZFLC083az530H0rMYa+anhRimEqt4+edGNkTnhe8xPWXx85Hc+UgiFZl6I485WJYlrAYfMs7xKVoj/m5CYbXQRf9bkS+ZSbbMJDkXgdky8LTwZFbMkQaywHnay3+9309HHhxwZtylTk+LrYQfVxs0dm9z7H8PMYk7eFvhN8IlaJT0Wnvip0UE529MHCxsRLUPb55QxS6xJhdqRhAusB2zRC4uAIIBoRVtTXsonjgBb6WfOzCM9xPpJr2PJeXYcY80pbA8M9AXDQs5aAPzpfTnitbnSfGbzyiz/H85ztfPjAh4kxuLbRv7dj5nVfM5sUZ';const _IH='546fc05172f61c6fc2aa3f74209a5983625be471d6a3f281441fda1e6deaf6d4';let _src;

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
