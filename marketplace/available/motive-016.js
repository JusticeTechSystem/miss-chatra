// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jxbc3n9E8SvA/8L1Nb8W7KjhiHaMJjVTyaAzGNppR0qP1re7SHhqW/AmIhUM4oQSyGZ6zi+eMDcrPngBFtTMrWT5H0kNYSt/kKAoC/8vm7zNVrhrHipBkxDY+g9Do9NqySUNnrkz3JTxJ/tMcTviv2nM9E6nHjhitPWmP+sfHCqWHVSQ6JlJgXJvVtfsWw9kocbnm1cjbEpHqFeYj8z8YpYGB3jrxjwbX6F5BIFaU+ogizzbj0IwgwOaYBp8tHBb5YiKO8eU5RclIWsKqKP8Oj2TI7L2/StnkY689FpkYgq98Fb/LHl1tRdNWhvkTvMrKQglbYDBjimz7mpavy+D8Fa8wUV/f7vBUDVoHrEQmbr/lLH2zbp5Q6FZ5Jmx3FFpwNgi4dgNGdDfW6BSZnneOsfuWYNIHl4sPGU2ip1euiLSRUfckttIkwbQa/96xgMbZVcETNsDRuJOFHUQh6C3Hq02jDPsDOdooTXealiSPJYbPNjBnCbXXgZabgQ59iHV/6tFzIjc5nQ6d/DaBu1+xZqlU1tEBOCpp6vm0eC2xz/PmwTDpucIVJv8hEBBd+sgRX80R9yxJSvPKwC/0qguw38SCIrhk8jhVFGe3skn2/VhZxiukfiyTcE+fZiqitn89lWzeqhaIn1FYSB9USC7JH7ADz/mp8Qe4/bzQAlKWGnjLiwlpEni+zqimPUxzU7+bIe63Rixi3xDh5+eNeQ6lDXMG0LKGbVkf2MPeGElX9ga6DcAIeX/QowhXtu4X67UQZ3me0XlzgBHFuTV4bSlXA+n/xuyEVD/aZoEQ3nmE+UpyyPsr8ukbQJTy16N4jKGRwODOx6zr+yp1cMHQa1uHOwESq3k9NugRkyhIlAJ8g6hMiV1iRob4Q0vvBedipZs+/hq84WLE6ENvud/88whuWndxjl5zJE/IOdJHY2RjrO9OgkiUTEcgMN2MI4QmLjcdgljWP9Tg7b5kQRc2vqwh4X6b7tzfKcsQdbhaaj31lr+FuYJ2MEdMNmF0UsZC0krP+2gyeJpYBEHtWiptt3PBZVu';const _IH='3cb737c1707cce679b6620956110a502fd2340bb80ddd77a73240bec3838d6d7';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
