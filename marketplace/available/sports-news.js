// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RZRa/qiOeFUB82zEEFDdfSa5sgcyGyC3EVBg/5jN4oVw2X8T5XyC0k6HVusali8G5PDDg2nx83xl/aHbli0ECvXGtbRPrt/1wtFkJuJVBAxybOnQH+0rRxyJpmjzJitV/fhwymEtw7SDJ8wlYDapoe3HI9ZrKq7gkqF46fOqkRhjMFmHNZJnj04+RbNpBLlWHTh6dsBQdhZ62icLmiWsX/BlCV5N2KW36UuQ/gkO+nR1rTf2D5MhW4BbW6JkKkheQ9IHwobCjJHE/X9Jq9hpsBcBWb8m3wDE1DmK9gz69NE6u3FQYiSTz6pKJcjXno+L0SmHtRbuWMDvAimaiPwo2U8JAzvCUs/ywhAwq+AF+LX2OlwdZJb0EZEApN3qOxOcpLBEBLDCTJMp4c9RvkPzZtNAWZFVvyjX76Jsr7kHk0wA1/fymb0CFDOPCpg/YwQcle2y6bXa4ZHavUNvAl3huRrIi/VaDvUCHT3DR9MyttD7gCxu/XuMqkl7mP8Yha79HBdl1IwSZQ1udUqIyHdeRfNj9ZNwXmlXUmELpOSEGmzaHSjrJXmVg2FvtcF+PtyoKQdHSBdQ3lma4tPC//FL6eRAWbwoF2u4EzRRiykrbsdD1CKe/3u6XjvnVopxJJ2DbdqiqrkH/kSLGsPQNLVh85LuaJaXwgFjX5jC+WCxwpwoJ5FLUCXlS/fD6GbAUvl6tXZG8ltQuC6nos/MLg5WhBtzABYjh9HUgIxc8gtSfJK3Dr7+7QBWi6WzQtSuPStLDdtO0q+1/TujwNO9/13ACkQZvZIcnw2iNl3OWsYRHm2PgS7T/4nk8GXXrR7b05xlVxFBWFKEST9vT0T/ksmVjN7bO79YbEdENzvJrZ2znhVNjST2eyC3WS2i2SRQyB3FywKPsVL8IeOhX6VPpzCckOHF2yd8zbvhtVR4p6nefYttju4EhBcXuzyKVnMii7K8bNUlAkNEeIlh8os0df9HslM15puWITjEx7gf0S2DKYana1/j5bUji+5tOryb6HaW1rg1V/4Hw+jFuquIyezGu/FOBX2SfDn39rSFNK+IYIfzZuw3X08n0Crw6E59XNF21musavl+fOg3GFBH58+D7XGUivYrizVD5MJ7UUx+KGzZ7ggygZoSgYL6lXuXqlAluWHUP9sFXJElgScMSXVR656GBj1Chy/kzCN4doXQ7dg5iWJOLdoytFDkYuF0qmOoqAz+a1JHSz7TI+ml3jbo7zaUbkh0rnMdSJhDBqaZI5Z9fz+6PhZoLvzNKaGkVfVMXHcFBvUFZo1z0/eO3Bm02Bm0tmMLjtaVs8oB/5pDsyWFePx12wsieKDbV+z88qwnJHu1J+ZzlWrZfK38isiYSBCqy8yfmcHGNvedzZ7JGfMAk6QD28CUJFmi9Whpy2/R2UHBb5buRQyMTvYKVWN38jpLuwOAHAtpckYWNau0R2ILCafZTXzUwUNnoDFo9TcqvUrJQcmFjUyPeuiiO6h9KOCneawtwQcsFW+TdZe8hmBW5AQw900bTiUfRB1J+MO9Svn8cw==';const _IH='bb69780b409dded46ef26b834819a7bead41132aea6b97ac0b520599608c573c';let _src;

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
