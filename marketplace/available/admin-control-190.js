// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nteJxQGtRAwjSjl6FQJO4JFK0RCRWcSlPAAiDtuScLtHRLv8xhnnyiXwqfkbYJDmZ3LnGXrO5wn8u6VgWAk0fXOXrlpp41+Uvo3f/IJtMkc2IBMCw3H6JCoZwQ19UdrH1WISHee8rNVbyxGBxTx9poINFZFi5e/ZXYIbQWD64bETxg7zrh9oseJMRT9CCQK4aeC632faG6ifhWJCd5JhGiauTUpTRPywdonBgRXX2iMRQvT7r/rTS90t7Rxekr/LbnhtnaEZfZbwniPkChEFgRM5i+fEG/6kkOSpVQ9/i5ZuzUV5FS8gldlXp1zL9xbZvViLpktOdiSOWD71H16kG9rr+Xb8MHX0cyMBmLxLXYxVe+7nxECY5ecxn7Nkla41RJ9uDODA72gFf/XLlANB6cNW/f3r90DpoZopzQtdsFsBVCGDtYZn2cCfFgNBJACnSPXqGbAahC0EwQOItE1VKfyjWqWws3hm49ynVsZDdH6cafQ30OVRJ+Xk/wrKQ/k68QVD65wuQ9661voe+dgwK1ilGdWUgQzK0GglGdn2Fst67V+ZOdgwRjj/X1x4Qs0EslLIKmrpP3cWv3sPrAEj8YcPFVkCE4sbO8XlNwhD2bqT7X+YwpsUZP8E84YG4xTEKgiJuct2bW6XvNwNxjrwSz6Rr3GrkKq6VHBISHGDgWALOn+5IFXQUtJCmHW26bJoMV4qlIpW+w8EQiGSR2Uh86oWkmkb9yu4ICzGhlii8KCq0YuXp0i0AsNoOwQWtp16ZuTnvisog0jsqfoOm7oDL7z4JUOguAoQx2s1JIJkQdFY04skjxglRnIwEkCYTkdVYaoPEwWRCFUi446uV9x/n6El4lBQVHe/mJIZJB8yo8deKZNc+3Oq4+GApHJV/7mNyhhSs7mDjjoFf5GH/je7BksHXQo5S0Nc3T/JQG/lgOTNkKBwXMpmsPKR7MEuqSwnfsKJ/pV8gXSzD1GdsIPyRK9Y8+5Ml87jkHQ5eIBx5psKatg0lTvax/La0gpFBcQYxKwQc/ndmoQ=';const _IH='4c004d000db80dc7fa116c8181cf76bb7ddc374a1d9401102cfb94992fced446';let _src;

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
