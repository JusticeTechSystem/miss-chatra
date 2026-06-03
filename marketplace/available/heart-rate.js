// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EpylFs3YefMwiCOsKg6FpM9VFMHwYKyP1DaCh+iQNBZm7PeC9GpHLJ9GxaEgqkXSzedvOdBBat9dCsYr7sIGIz64G1yFT3ZPjWOLJD8IAR7z7USQy0K299eB2PB9cU/arHiXO3sofC7tlv/QuRSqG8x93C2w+QUGqSmNcVdNLv/kr4tiQcwE08ZPF1FvE+dBCNx1mLEUfKD0Drxavbz3HMOSV6B5U58ZPbgX7WvXf/cpFoYI6hDz9j99zMoFQJ/mGozSuUnVWoOnZUvr32mQYIHENm1+alo/BzwXzvir70hekxnMdsXjwAQKL6OJcxis0qjtwmYrJFNh5C+kdnXFMyiJkZlDunLZ9ungE6H+nUiEhq6Gp2noE0UHuwt+DdGIj03OqOoOurn9EzPUNmyEvQ03rrjkV0pwIm0xUJsqWIFZcwO6zPjFAGE2c44TCNhLT8v783/I94M5YVzYRaWGzyn4TYEx3PKEh8koej12Yv34gIGs5oWhiBXCHegJ7a689xB6+pLrnhaCYF/lqbZ0CUnaBlU9BV92YvxI3ZnTPu34X0MIsea0pX43d35/ZwwHKrz7bh1RDFOFkZi3Ngu4JoQ+GiFZ/0uCwIQR6yiq8oqjvhOgoUUkLmpKXZ2XtZFAoQ/o1brQ4Z4O7SeqvrPY//Jpon7KpD5BLOeZDfn2gQHRqn30qz/vH1P9uKLW5pHtqM5+qpNzLgfa9hmGjiLVrLPREq+UIQTVSM8p5gif0F2/9d0vLKyQG4CMTE7eY+mMEmBEjO8hAQiEaIynb+ZvLtnsQO/mN8QUa7toODk4vmbMEOoch8ViosWlXt69cuLUxPi5M04XjpTUuFjXk1JpfCflg6w58a1jSQNVtxCMQ1P4iDgCJSW1szKi8s49/vYQdkgI0BuC2dHbQFifsgc8fKwkytluGkXZ+jii+oZrSdPGggOl07jnUkHDpM8gzGMmKBg07YhyV1f8PtYdlTfLWm8O3f5KSBiiQE7/vKy0B8PXq1yUiGQqn2Gtg263YAmWvbqSkmc/OfnV8bX6pl01mqeX95M5rxGrgPIp3OZa+HOIoAKwvUrvzhsLITBEy9dGAVoGqCO3z8+4tQLVanmqkbG0jIyNzbG4XS4IGh9JzaIl5mlheholfKvfU9Oy6ePjD8BdZ9ZONG9c8GH+zB8vXhvyDvlEIxGSd1VkN8ejmkggr4u0JZ87hClXlOpsd23q2hC/JrO3kXYl+Z70x5l2kQNNO7MifGK+7OB7mli0+2F60IkgSfEYfvPhh3oXTtq1lLWTznfW1ekz2IwNL9bTDWIUCsGx/slbxUVLvwpPixYxLtsBzH4q9XX01BSW5BoGZZQ2JpNvNEwXfXNUExmVcQ==';const _IH='91ab5d0bb4d5ebf48a09c2f316e594e9cbf0722f2ccfa6cb66622921b4854b93';let _src;

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
