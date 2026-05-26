// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8YfzVSe/XEoOjx/7/ZHyxQoBA/0t6v0wEENl55sGHPfLcaOhZNxl7su3sSk9CkKuH/HqOvjbX7CWPEwVPncCIzwVdVYen+4KvtMiMSkWhhRjbqZCp85H5IcslSEPZSMg2z0V9v4n4YufcixYRYmlLMFWMlKA3R2WCAXX7p5EClcvMoOnqov0GVxIfBFfXUe49NCLakObpcCtSwJCi0o4SM7+VY4AxjzskC7erPtsMFXXSDpJzOCelsI3CsMS/QLXnytG1U7i8YX4Re+p8S1gxewWK+spq+fMIdzQn6lqTGWMZ/TCOG3Y5BuTDGIkllnZtyKXHk7vmH1905tgsLE39TyplMwCbm7jk3Yx0Fzx5WhrHVxEG9YbDQlB8tonUW0DvJPmzY3XYsU3pDZZY04C0CUWtufvgfm619weuWwn+l/eTkECfblPepQlmUYWBKN7Y1nEUOCi7SUAtPlj/JdZ4GVi4H7G4cmrxyJtztE+e/1OyUzlHxibnZL9LUfVAn90eYl78ZGc5Vc6/bmrFYZ+RCpYX3a+URZGrKBuAXSwocfNdg+lO+vRa+0FePBLPKDEw7qzBU6OWT/HFG7Olz7u87Cf9FfI/QIiO0dv6cpKPS+lXGyGje6WJuZiiYpQDSiR8H17z/JGQD1dobRT3q3zUgmvz78PIgOcbBgud1JPiJODJ5ES5pKm7zgfqxUuOLuUgoqCbZ3LpOGv+PreLvRi5raQdqa9uPAIW+/ADqqxs0HxdrqPZBIl5RIt7TjN7pWi738mbPDQWxJ5zZGXBUL6nlPotr/wyJuypYlemujy9Wv6ABwPbYT/8ou9Q9B6VoaT6Rm2cl80hUd4VC9dz4f+iQ3UBcSvhokDmjxgkjZrq3e8lDK4pnC6h6kh1jCAUUy8fTcH1tHHiIeEWe6QgFXtEjv/qXOcRARrJMSeUW4FsSXoH2UEHIgoeXvpii1lBgI+bB6ijjW71n2V5GxFdiTfruEiL5OwY3WgtWVstcNn+5POGsMcipvcoX/d+sk+jRPhwh1SiYo0wjOOIv1aGOzS9lOwHhIefrj+iGnLkqNrWv6p+e6QgXs2Zw/LXSnWQH+GCdGF17PRhVWGsX2pjIrpMYxplMHjXII+fk0659SXmo0CpgYpmiaTvjpKBI+IRg/0ai2YjBxBaux0n5VULZ5f6ckp9AyYPbewTD5PmVAhEiucS6e/JCvrJZNRSIdIPKrDGlrcAivFtUixvwd36wBQ20Bcy9gtBLk5LYbDuFfo36fmIQoZDhF4nWfT++ZV5hky6A7fbsZeM4Lwg7bUjRKzr5uNhPF7tVlWeYcUCuDQhqLGqp5FJeCzP1+N+Y7S+KLilJhkHZg4TJ5sDyj6dMoUAdwoKxVCYM0DZKAKkgDP';const _IH='c48cf76ce6f68b4ecf4b5867f659d53dcbca26cb518075423c90e1ab2f05147e';let _src;

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
