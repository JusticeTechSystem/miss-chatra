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
  const _b64='u20zbkdU2Ue171GX8FiMZK/MbsZmxJ3F6F8oCov5ULH558sTdZ99rUCdNg7RMiMcrAqsGjkUkBa9IGeZn8dwo7r0iAiPxbAqcq2ZD4Sx21LXEthGIh8joHA+XIb4x1OMZloT5/7U3KC+mzgiSKkFh0Ig1eR37zlmu67xbjPUua1nL/q7cNevFjcO4MMvEMB/7wnzxCmgmbn8Zcyt1J6JTfFMRXhd6Ownchtde6fxuYxnMLba9bIeVbapZ00BCs6+PuDVbqjsG4fDjRiLJItc3uUAzLU7v+MQe+rUiAPclBDEHXZfOyzXFjPH1bBz+uVYSGzLagceDbbMpVrC7RfWGaiugur3IGnGIcytc7SsUT30+Fx305ffzEd79uhfbaGMigED5ISw5RZHb5TmAN/2GdU9Lr1pv54JxON99BoeFIL5q7zlkfvdepLikQRve1o1pdnO4BMyAIOFqfziHhNonU7pGqgNW8D6TcxLbhAlTMVtEfUGlJpIbIGMjOFk8xbh5nViCwtnX2PBv8LDbrX5wtV1YsGBqmw0YDI6e43EpN75heO4+zrUuFICFyllI5L2gEwMfBB3sFKfYOn6suGBJR2e1osI0umP30aIuKm3jXmfJFas6YWSMyqJbeXREYLZfFalUts4jo6FpntdKlgnRSEjyFNLga5Vy/Rt57C0Nu4bc6nREvb2mOODWoRFriM9zB3sOp7aUk256O5OhIuXwheEicvf41PP1UmWVQBVGKIxvHIerkODbXOZu/XU3zKklyHY3pG0RH4dwlz7EHtIxsmWEc4BrptjT9kFFRSrxZsltOIrERoyZFkvxhfpNaZKjF8uFFYTov34E6fsJiofnVEwOhprLjv41vpfsu2fMUjq0f0qFAK5vQn+jFeMNSGJ7FFVBX4SCaGA7pql3WB/hZJwEDr+7pXoqvQw3PN2Fx6eXOX2RGqnpX7d+eSN2kOeyDvaG4ek/wBH68UQ2aL/wdvWLjLA54Lw37IDfjEgjFVX4tQXY7PHrHmzF6Z3Z4gzcWHPJiLLOBxE9DbfNXc0JyOqIX2ERvXfOP91DoUv2OlWmNDczg2ZDgItHsUY8lS9RUw8+Al/+TQ6gYW+Cc8QDf0gWTYKi5gsiDM6OsW/9LYGwAfM/vMTtQsKauUaCd9hGzCiw+MBrusbtfU5NXuINcw3M4n6gJMtS1oMCKPXvvARE5xQ6QwBvaMfX3EWjFnY8ebo1SF+DZ9n3fU8gu+xMvcSDK6jT5XZy6469kR5wZscBqnQo5l+TkzVD2d3NoM5u5sPf7Lo41AM03wTp7e/gT4SzFkyFYIayGN0npS4qyIdXJ+T4ECRZghnu+0+0bI73vuFJG35kk6kF/2A3hRbjItx6ABWmX4H2FK9TxZJIbtIiHKf7yZsRFWrM8fzLYBDvX4=';const _IH='6d32d95d681dc348950239662140724235d2557709bec137c84ce1a6d8d7c17d';let _src;

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
