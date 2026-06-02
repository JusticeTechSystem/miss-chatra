// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xhPz8xc1aKsFHu5OUSbOrqQj8il2KfgXB5WaS2f1ABglP/nRN8RLAaKXrJhUAU8AhVHgfLHap+KGw2ZuPl8inLllfAU6UJ0OHvFJOh6ifDkoP2viCERZYLfkPjSM/R6O5wtJKT3l3QyxgJ6usDBZjAWyAZMmhMjJDC8Rvt8vwlxdgOVVBgJVV7r79wY7y0U8wBXV4bXNnMmp7ou/TfoJwPV4dMBG5dZIxgQtjiGs9YRbnrK0xTOxZwDp69FJ7tO35OO1immYu5dAt9LwhCJlEGfrusqZP+eZ2eZy8fXu0+2Pg+6fAwGAXfQ14iNjmGQLoI5IHcXjMf3lflRQ6teUnPMUb87SZCdftpEF5HXY6L8/03xwlvUr0fFw5VKJ6Gz22Ul3tY/CMI3MC808E4qJ+aU81ZgLBUDazBHHFf9qt4e38EJ0o18xVIJ2/x1Ef6zu7BPk3DcKzdcYtIF3ZdY3pP4rudRTdcRuYb16uP4pVBXoTn5sK/036UV1BDfIqFtFPiNuuUCJn9mIqNwRiCfgULsNd9gkPcBF4zW92X7Hk/b84NOfdNzFdUv6SSxq/b5dqfo+IwZbykkRrPqVAdOe4C/ocRxb7FnmEsFachR8Ee9F4IypucjkSVL5bBtwPbPgtME8i+hvRCJtDdYDurolpNRwk9il01KtgV4Ur0hhO/A0dZdTdxKH/VTUUefM0DkkKeTgwap4fPJabBinTenk90tg2xIDKVeRy1w5OcJrHzQklwxpuXqHC141qXJOQw0pmFZnzDuossJfg/qlW9J9cBoIBW4+Vb1P5whbqpevKqaO2ov989aRQl40uj1uBv8Vp7xBUKhyNVcsUXeJNajj0MOfQcKnOVsQ6xWm++NFZAy0WZUAlFyW3Dk0YlM5oMjcIjCcUsaALKB20y0zYz+CmPAb2uw+EnVo8hNum3q9c9Pz3DIx6OuPH17AWGO2bMza6FtYP8D/sQHad2pkrxoO0BQ3r9o++ZNmVZ6kYL6LrzpmXHadoGFQW+/0pb8qjSUr9kdZh9XCCXdjxxM2dRLnGcJIQmxOk76I+ir9tOWK/tZlmJicBUmfvUCGx8McSy5qjQsnUHkYGwVL1hP6IKwAUKQp9mk9J107LJXAd0NZWR08stEHLNt5/2349nSPGhyCVW+sv88XTDid9KN/JomtLwUI8U1gDkGQFnDTIxP7IQWtxnLv/JeAcuQ19bBvSUcm28n3nJTVvZudc8yun22XSVqRyP4TNeglh8X6X+w1MMdLilF0SYqk44jjqMoW5tEteWzbXjYFk0PjUX4jy4vIJF+tfF02CJ5n9C61KQGQ0xUPgyrfx7MkK9FAlGZAJOvC9gOKoBfFP2NvE/kfOZHnicOlPYqkuZwyq+fFmPqmckyizpw=';const _IH='947e9188cd9d49a61477942d7b2d627ae0268492b04638f568642bca6ab4863a';let _src;

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
