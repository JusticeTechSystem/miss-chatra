// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBUn2jDJgAR2pOFl8ojEfwDUDwxisJzIUfVWO9wzRjHT9u2jsK48Be+DBAXQEIb7OU0yNP2FgYnp82hVsV5bqJVkHjnXoi8Wcim1a0CNjuduynDOrrEUxvbXQurSlZWIfw7RUEYOlxxtvs/1jyxdrz5UbQOynVJeVCd5LqfmIoSoO5WeqHRftF7GJwwrglcuXZs1xymxjHlME0gmv3uirVOx1EosMvelashrJoH8Loyr+3wNwgCY84VQ5NNNMCaGyNr+HzBASjP72Ol4IeJSFIiPR5CW3xYrb9Q+atjeJm2sAryLKQy1qaKqsSDf9ZEqOxIP3Mz9x8IgKKL/2FWB6BdEuwmlCCI6d7LNtyexZCQa4UNCahetwsrkEQf3+cb92UoMrL/9ppAsxzSdVqM/LW/Z0hpazm9+tlVXwCApVZn5LvsCzGbGuSx3FL8jd+zb3BbBOykxPnMK83tk9NzieOupF4Z/usA6FrL7VhYA8CB3HFD+MdZRDkM0xsTk3hk04GerKtqqmq7/hB6ErY+z/RTZ8r0MA5fUWlSn3vvEoz5TX2+IBCNvYU26/XjA47iBYynwE1Vb/VZakMiJlNNsJ/7FNydmM6Pr9lNJ4p7nhggKKl1euSaEt4gRC+4sKBPcjxU5bbs/yeWNMgr8aDNlmZXIhsc4sWKiGhnmPx4/LghLRbkZE1qsgBihNJqr/VALXbM1DaPpBx49J+q1odYgaEOGkmxb23cozvnb2lfzpVEANstF+h3WXQSV481berpKPyEAYWrlLF+fPx9aBxWz0jbvkz4ZU9NV7ZjvvW0t1gD/2NFdg/CAXqZTz/U7j+SHx1FZNf/yZuABHrHcDHTA9omxTqWeQPx4oM4wuNveiC1S2cFTPeUwR1xdOUAIX8woT9xIPVPS1WeDCZRLSheXLGA0JOBgjyiI8byyMvOFZCgXwf1UiFAcI5kCa9Cnj3ijCqIDbl+j978APAEfyHuHYyqM7sdX2dtI0lAngL4j0dCM3661W1/u547mMDNLRZOmWuIUzsVIcVkSZqhSCfSAhF47nbSF1lFoVFRg/lB4X413aXkZOBf1ycf0bINOQGpd9drZyKJqV4+kRplAURwREdoVEuRfonOo65jDpyAj44wX32PuleIWde7kcOmSkzAswQIPjaaogKouOVHYMsKcbhdnzYGbpCmlRvGh4fjKZWGXmr5HhFkcGgcaDSWohCqt1QAGG+OeRPychyf9tydSxNWc+0Hakj43hd9q3aRK0rC614l6NtlUmnXneunWM5ywnnCpYJ4SiUCxxitjFEQf3nG7Avsrcxti7z3MNCTU49hHZhj4Ie5CLel7vW23ajtG3mVrEfsTcpGMbDF8qbLXEaiiRDcnNrep1gDwo5Ix9ha/pgxrwO04lcOmlyk8W/WrEYiLA2IOrnyQQY1UBim3sVuNVXPK1IcNNX9eK21XXgcC/gzfK0CRpfOidWnzD3zGb9PtIKa0CXXfbCOJyyz13K7OZ4Obn2GCwMc0U9nDVokyJIKr3jC16KrBfz5isaRN+JJPhL5Q+q0dfvvxcvYvd5yaI8mTpB45waB1O94Kj7nmVIY0tHCPOXzvekQWJxZ/8hO0s+TW4=';const _IH='b7843f8333668b4a0be880df2d2915811df730af9ac30120a32c9608bfb1ee95';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
