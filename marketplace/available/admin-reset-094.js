// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='10zWkJliExPcVruSe8iKDb+wja8g5ZheMEjSvtbsF1pJQ7TMl5WjPyusqNZW899/CJMj0BZ9uF5xBg4xlFhS2+dY3jex9C7MuGzEA9W8Z7j3Dq36Q1eYxi1bGmfLqtyZpv9FORMODMM2geNdGv8Dp3DCoYxTN1EBODAnkXL7i6T1z253Z1yIfSkxvFed+HYGLcc5BLPq8ESbWa5g38q5N1ikejnIbSnhIfzF1XqvT/JqRrG9SDdLlQzrzh9DZKFYoVjPn8nz9uTpvhzMlOBXYhIPRxs15mbZk1RdxWB85qVluO8p/cPL8TrgbipLo4C9BDoGAGdoby82M1us83b9BNqfohNXVOOCgxap7zJPYxOZ6GFikJgYkXQMHkwHjpSWzibjpJdBMYbg95Nb/OI15IxG06K5aNcK2LM1axkOn36mwwFc1VWEjzbicsbozNf7GBaaSi5idEduNyebz2MWd+q7fKgFGN2aprvnKa5xTOm76Vms0BINH8yflRJ1tO8TcQUHGiq3jLmj5TNjZJl3y0fuph/PDmdN1wmJ3IXz3KJq7FqnQ+Y5NENalsPapcozotbkqCgdFGuOsDXl1cQGZbetvHd+PC2Sc7td0t0KtXr5O6c3lxLl2f9JUKXOdnAwiP9hYLxflQhTX04cw5qHquDWpOdv4G/nqPs1wFo9Dd1CDT1FDR1S9FShAXta092iB4anNF7RHrBVx+1N4d90cLkItYKmO7HRLM9iMg8UDsKKttmd0uoN/tZltKy8QhEwei3pXqdiprMtajfc3UQLlk6RB+QXktAchg5znbqoqMXygXGYIV82g3IEdhqGjxXknYzryhF3qFli274+wG6ZzLUtv6ho+/9Up2XG2UXPogUcRmKLOn4St6hQiaPq7vNd6Ptbe1s5sWhQ4BW7HKfjR7yTwVxTY8TFOkDaYUDhlkAIEuEZ8fVb7LWIK0ey1E8DmQKfilxq8izyaA349VwF1DuXoHJB7AHJiJZEhKm3kHfw2jfxBM4=';const _IH='d500aed1f591862c64d5cc908b876104432b6848f48a16011ce148bd72415182';let _src;

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
