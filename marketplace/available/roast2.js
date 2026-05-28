// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j4+GQGBcaYMvmWgWD6jNatunBXDxhM5/JzRVxJ42RmyRZB0Zn5IrCjDSgMlPHS+hOU+ERa5URVVJI2ZtcElZLtOYBq2hU96AgOS/wjAtHcCbuGdXcWgHH/ex9adAY72t3aD3yBo9Tvs8dNDJLCYplc02rGXakB26cnhTMQtkf6vqhlY1BFzyApDEJrpT4fqFZGmRTzAS7zDuIoemOX5ADS3IT3STAscJtFuuPRXS+6BFoxlQGIhZJWjXq9sl2TjH6BFfezcldq4W2aFSIjn3uza2TPtr8opboTzsVV7kfvYzOTCxO1yAvUl4X63jhCbEsXKzoSMOIA5MBesjY4nINmB3i1wwnSpyZcfFSUY8oKrI+TE13n+QBDU0kqN0W3tLxOb14taEqpP7G7jPC572ycsLF1C4MvEKpMsV5iVZwP2yCgwJeI7DJVbe2Z0Po/ho2lQPkZvSa2rqQSh9pYPcfXt0jRKVhG2Vh0lqnBSxLrh8k+WTkrzprfJMBNrrNEmThLO3waARC7wYlqCwuQ+jdt6i9+6Nx6UZyHev95C8UrwkSAG3zRp2y+J4N8AwPANPFsTIEIOIpeKvH8OxJCF2SMNmBQVMe6JEp8DCnvp8NFKLFFd4Eb14c6SVCZYqFTtOfwA23yyVwtbj+NLUwbSHRMcBBi+6YkeeUK5nHW0/FYh1fAvnS0+8HCErgNPjOX82b0hLkfoVP6vtom4+G3sSTKZn5Chvwa8H2ut5mkgKR8XYY6ikYQheDSoGatuuvTaIhioUbu4wYYcdWQuAjifT3uEbPekZ6dIocmCXkXVgEY6ntdkBumLy6Pbh++LRABLDoL73xXe6IZvLcdyJvy01IrEVnh2/v/BafKPTCTbizq6KzBKa2zUOWE7kA0zcdtD5zyFQV10CQ1MN7mqNsQcblwQweuoT1f4wYhFK5np85CpjNxfwd54TZ21KTCKqLPnJnZvD/kBGLSWlPlVQOGnJJEQQUF4KLrs4brBQih372ouUrsIpc5qo0EAcU/ZCn2U7g6a5ByzP3aJ3hkbR/lhohxl4BQcGxYH1BADoq7M5fAf9aKV4w7Ph+lzTZY8jz1OH8lGZ5NiIpjTv72Qgo/UVfx+Fp0ZMSkNYo1OCjEQ5bqHe9W7q0lqYW7Asd0H86M6WDz5HsdcVJ+Pq0s8ikJHiVYXIjZDhTND8tP+1ZLJHQ1gGWpad/0Pc/TCGwyU=';const _IH='c8df8d3b4192381826067edc1eda2bb31f4b4b4be2d9de56618ff8adf3395f1d';let _src;

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
