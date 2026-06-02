// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+5h02hKbW9nk7KfgszcwQ8iGrrAw6HdiN1qgdxFeLvV7Yd3Ai5ttQv8arJ1IJZ7pubILiz9zKuqZ4IkQba4gxcSH8vJJzD9opeDUOqlMgDvwb/XpLMxawZ2zIK0uTwIkCDwLLnz2JFQ6bFtxg5n2ZYIXBu4Booq2yLo8pG1832CuKqWkZbOqeLosMfriiVgxFZmOr0zCuEuBiGBHJbQQkWKs0F9g5jPgd/XujbjQQcnQ2XqyzPglOpyRFg73zoNFoyRw32UNmsyzFDaHVZATlTfr2sRFOWhXWRjGRbuyv8m9KQNJkD0/FMojIkP3bTZZRCYrTlhJfJYpRujJSiWJxI0cpZTbWPJl1MNlUi1S4QKHfnFdTWluohSyutplx5eX2evBI15rT91+7AmrVrQmHjGjXjuETbJf+5X42QHL2FZqwd6RuNB4RFb1MNYzHko9vaoFan6zqfBeqDcyrGKT7wCl6UKpxoHD5ok51qDEQFpm/qYujHub8HRZgWH4aHp8eT085XfF3wji6Tsy31wS9OVhRnr6R53gZUXfY+uQ9lFl3WPKrxLK/stIw3px+f0fHTQ45W1nklvIaRtTA6YC2iOfBE9FIsyOHPaGNndqm8AJav9XtVXSCGQk9CvgPjX0JIJ0enHyJtEMZ5pReeJIx8LU5hN1xyFfrWe/9oB/Gid3wWnCkD8GGYUrplQERyrvPRCTqeo0aCLJ7ULbG6wV+6AdsLqvsj6WQmt2z4qv+DjbWKBXysnHdbN+gKmLYru1Dg1+IYCVKfzX2bjkX34ubiffS0/zKDIKpQnVs2DrI8XN2S1CsUyS6VxA2eAHE+7XUOiUrEiXyEOKFhIxcNVJPZQ2nc3qy0ox7ATdjbokncZztAjFe3X6ITBz0of8qUyt7K0zjFN4u/UxrgAMWISQEC0Jq9PqvyA2zzxGaPHgfPKpeKrTK69if9941ydPAnDGjlofFxdIuh0ss2mHkPK6Z0GYC8FpoUubib+oBA86ZF/g2QxV3pobJA7E95wdIx7jufdsX6ukbhW9KtTSCUQVYX9Rel4HbhJkyNMWmy7ZxSkK1O6NXXCKtGEZdr7VwU6J+JyfCWtV5TgzD4zSW/b3V4Uam+TO36/TJd93xIePohvxQnB3FhVClnbNjJUmoA/GfVaj0Bs7nFSVydT883DG0VpOceVuhkcJzje+E+jFGUj7PzpufFjkOXSbs7sPNSNRpogYiGHBAROOhBL9G/moof8RAy/6W6Lsmm3FK9UNl9nk+7JoUyAtBwZOfIXaIv4RxtzIGhHOxpuIdARPDem89StD4+QoNTLYrNkyiGg1YUW0tJiywdtH3n5t70fKexynwKTVOfu2v3Oq5eQ+ny2VAZbymfmoeMVH9yysrnn0cVKc3NuxliIay/5Oi8OiQBgYZvecEe44xfPw0ARlImnMPenWSJyVAclzoARHjjcykpyp48rEvaOItHkyNR3Ix8sHBsuUkwNL9BZZBsHi+sPxOWBgoL3NiBcSo8wJlrL4svgIIscO/KydD6hxeqGVTZ2NomZjTYoqXQYYI9mlRVlQ5yxQc8ONYnbe3Vib+/vpT4PqbEyQjFdoldoJyjkkXKTyGLPz+yK5ZB5SRNZUMz7yAIGEsNEVm5lVZKpoJ+NteR2m7sBA75/3EQpo/MGVpe/7yYxk6C169RtKvHa+Lx8+Yr6MAAcp9ghRyeIv4MriaZM0DjWyRTLI+OY=';const _IH='e8c9d11ed6b4510da1ea02eca9e44a4836bee24738ee788139c1d13444bbddcb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
