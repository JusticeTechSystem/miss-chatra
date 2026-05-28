// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I4uqXKuDNwxYwKB34z3dDq7FE+3wqVpIJv3ZrcafF2JmevOXl6AH2V2NLO1t3yayHsOntiKUJuqvN2TwwJ9qX0Z5uTx5b1OL3qR+PLqijrFF5mhZcof9kdaSfCWy+KOAi11WVCt+Q+sRyaCIw8Yzk/dUWz4Zegwk2hskiwS6i9YwDX3GDlr3Go/dpeJftwPjVgsCRFp2TNja0SsV03HsbfvXwGNModizbe/Ileo2BdSc03plwTCueo/TDbZFDLK7blOe5ncAe3GVIW3LzuC8JbWlWeCNyve1Hfnfe2upg6nExwfemFSW9cStngaLrNkCCIH5dJqr1ELH7HOjIg8SqbFY5fmi9w+A9HSUJdAVMT4gz49cNfjz/KizyaV0HHmIrPWPXX+rdrS4nMmN99pdlELWJHwI403HPmqezlDxpJiYVCW6b6y/9uHgsLcd4Wz6fdoYn37gYanHvDE8QjMN+TaHoNkMAJ9qZ7M0e3yf3zVxc5zwiASqnKeh0vDhSqyunna3DoJU7VcXvx4D38YtedZFikWT9hwOxkQZFq7adtNDWAWnKlDl65wnib47t9d5EAsnSaQaFZuQDyxPGDTNM6bVu0stmQ7kqqDbs485DzxKjahwh9pl8CH5DiPuf9gSPPOlskWuRxKLcwIRUA4fiMVVSeRuQBnvKhEGnkn7+BEyzY8EVXuxu/a4TIq3rkUgEpWO1b5UVZ9qYiWdjAtbXKDny+rKK1zt';const _IH='c821263cd42128123d1b632dbf5e2555104cf52ad41e58f3e9131f6f84e6ddb0';let _src;

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
