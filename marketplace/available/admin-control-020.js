// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VJ5f/pzUfTozsflXsxz9znMqUKYLMlOUWQeOqFHwVkWfVKQ1A+6vnsxhIb/RJdttXqycG60meclY7QHqp1EEj5lafXvIFpbldya2DGepqUJMfmeRw22FcNi4/qczp1ofGF1hOlJFY3+4JbhrHuhndhupPdk746lt9bm/F7irDhCtVyC89wGGgTxj1Z3Z3s8RALbklvPcnG4O6Has4yuqbQ4SdU0hWGjEiyYiJZxhwIPFw7/fztH5ycaTRPYNlLqJ7Z6VgRLPGbNb8MH+zJ//Nx+mwp18GbuXc+JvwhYK/Cina5DWF31b+HqKIpBNy77UBm7VeryIovIrtWkPE3JpubV66SXCuwa3dqLaGwPXQ/Bdx3r9DOlbsBfq2hN1MVtPweMAX90AuxhtO3hZ2d1lcKIjKxNFqj5A0uMoITF78UCFtr6ebBWnj0kH3ItYJmI7lWEvVzTnbrYAqlmqMSZvVA0IJmHvyuaC6eomx5E7c81rA6ZV/cnNbAqu48/AdgpplByj4MxcrEParrJwO76+s6vlco8yMjwE9NBct2pJiLs6nSZ+6FpIWwff01Wq9jYgIm+XDijqhUh/tuRHegd87L6YdOAqJhxYCw1nZ2qEOTlVY4EanxCgvmxxQiw93hyk7At/rPGSW69ZvZ/Wyh9z0Dzr8sjKoumPQsLfD8ojt7EpICr5tuP5V2+6tBWL3iHPHsjUPZZcq/37UEqcmZH2zfgwYrR9LWBmcLzmOcDyCX4aGTD6HxSRnhfUMRo80vP7zQvHS94OXi5mQuPJBX7CzNjWgflJdcZuETI68BPJqN1WdtuBa3Kv9zY5E27klQz2pxCd2YlCYmsV8ZZN1274CNxI/NuoEC0sYfNBhHKYo3hPKngicOAF63RWBDC0VuolEpFSzMxU8lONWmpsDInNTmPxPHcR9Rx7z+yjK8XUmAPe0KBulbMv+CcPkXWTS/4k9clv6elPUuEgLsv/dzYdZ+wanxhyfsDQy7XoN68/3h/Risdfg5j5UciIS2gR0tY8lSb3FA==';const _IH='f4084e3e7b13a692fda3359af9e2677ebd60319ebd9fd26af0968693dd0d1a25';let _src;

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
