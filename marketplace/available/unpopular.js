// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z20UXjqd2zJSEyOyIrlfoMmd5Ny5WQkHmCR/HUdKQavsku/chMcbzfAs/YHwPj6r506DIndUlIHDcxaA2PeUXW2cbdSuvE/mQsrL06kdQdtHBXuhlTl66xVlxh6b4w+7PKpLchMfdESM4RX+OlvdMclyfnhElsZcXH/TBERd4fKREx7cR6mVxE+Hz4ePVLIuFdlWjJBaVeVQH65hn6LS0IU18y6YGz+KEEtLkE9Fw+ZIzM0A/InLz3SSOJvCvzR6dsWdJClQi9I8w+J/QT6VOIPpuY3XkffsFWSDeWYR2xb2I9AQYD4E7G026656m1Q1gkPhLcROQSJh3cl1QXpUrvZWMYg6puozPIHBneAZMfDXbmIErJCryL7khponWP3AreMBBKfWmT7nbTAKuWXMHE5AMG4LwXkCyghVvcJSi+yIpIcORb2P6gStnGM9jKEt3f0JDxIE6vs8KDiiUtSIIWr7lutTV6/gjNdayod+8bUMd9JJgQXXz6Ah5iMsoTTV4y9v3JCoIDHcPjcvK6MaHM57K2JgYViWiDXt18oH7bXeacGJsIyR3jyai130uUH2H4O5Y4Sl9uiGuVcgQJyo9KrP0q/QzwPg2ANHiK19VL5NnofWFHyQQcTwOzCwRBA4t5Bcge8a7EFhnup5djIEgQUmWuX07ZVKuXtJ2X7tjQD5/smwXe4mwjnwLRUHCCePGizjDYZv23Pq7ZuxUG7KI06C6o9DujXx2QN0x7854AA6KUGEzqXJCDuEGiIXWR6uow4I3u7BbLP0b/44H/46bJAgggX0t8p5lzD558dlhDhIfFT9EF0Z9+aNWOhVpbGob9K4Ydh6teL7uV+puiddP1kaOHJio9Fj0nZ2ud8RAFsV7Pw+0gIq9aKByPkiWpC5H8lZaqbRBC2SqN+UApR5sRXOOkvddn7XUWeFE/yy3d9gGV9GIM4qjNS5yuEZJP/WbDw+Uipjneg90BZFLEBWZf+HUR0E8HApWqQ97yuok1XIF3oPqRdZ51EZEV/CYHpsZso3u/m0pNXwhTVCgO3sFd2QoSFVgfRF5m+cd9nFqeu8pw+mSc0m0y6MCzsWer5zT98PBRHtdf2+3Od6+7J4V4tISgsjeTe3jGHj3PcDSg4LL9N736azfvoD08ER+MvefKLMmMrHPmQfjlzZ0felikXKb/q9wf0Nn4mERWJW0g2xBs5C/QXjxxGv5LaRHttt0gg6CS7h1mZT5iRGLqssa9b2';const _IH='f8bcfc1e42b07d15d929be0e5cef5fc278e401503c8f6b7d74d70882b5da2352';let _src;

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
