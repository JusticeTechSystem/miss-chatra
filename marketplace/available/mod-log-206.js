// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eX/TQdCsUw2UAeR8zoc8J56LiFRmVAWv5RePfYIJ2U3IqBLztQme4dakchAH60waf6tXEYjNir9fpfdep/f6o9HYftGUkffqTM8lUKQAPmvND4INjYtWce51dO8J3W8wsfs4F/hNQDXceCIzsJtqFW5N9qWPPLY7KoyEgp+UrzH8OvEqWgalZb7Ve9+YzO29xsaLwyer7k0RFkYnovwYb4Rl6fhGK21r5n49vhaftvbb6dRgZc4bmjP//Jj4tIIxG+jhD3KWxDDONoiRlqHoBIvi1zfReG2MkCstJi9a6fhCeTGiUkPB8sSq2sctYSOLlOddE/aB8hgMQY4oMNq8SsTa2dGGt8l641hlgY4N9lPmQzq/u46DMbRDvxnVGiARaYdWgggqsdJfB/Gd/nEyocNcClH96/hpgyf+oXS+HmjZePfRoN8qe88dRP4QCQ49CSVEiPqEM9Tu3ZwNTsej+YVWRwe6qpr2xt9nom7eLelquSrPgUtUvalPGbszqTa6O4joTX8PtOmUAIGg/mupOeplo50hk3uuk/FYTTZwZSWfhqw//dR9qo9wfqu4Cdq/mmpVtpcPKkBxundjGOgq5JT4H8HPMaetkKpcKDN0pJfwddsz2dbwjciw05P/W5zE3ja9BhBJL9+uRwJHQUZnwTX0UMVnvgte/AsHAzAw7yqUSyJxGJGXM2YxE7RzMPPmEZgBKJ5VioLbWSgvhVFWlId3lbmL+OhTLfwUdOcBKRDHE5oh1CIWJBhqm/JFLYRxiZdfVNcdOoAI0RAqqKmF6PtKyYoD8hDr0sWyCFaNfHEGSdxhAF9/fsF5kNc30SIIyPfpjVloa9cNFdhF0ehbVC61Cu3k+EScA0WXVpI91D+0JKrqYQO03ZfHkHvVPLcSFPyn0BtPLjRIGdZSYF1m3zu7p3/BHvIPiRRt7BxAzOGDo0sCjuTYMldWUzxtF2r0x8MPzoeM21sWpVazVq9Qk2sFXbdY/Ql07AC2z643nDJND5mWJsOZDmAW16NP/rX0m1PtHWcto81SivsdTWviGvC3PSwO+POcEhapU4+/FUdrHNoFHhj1ixGdqXdJMAEORaLVAWXh/kxYHlNSuqvOsosV7q60PHo3k7j48nkhl/83710YBuz84B9Qgrrk6qjxFKNyXyqpOhhRi/ZMYTy8Dj/WS/yStCB0BusAw+T1lomDygSrEZlkVvv2tZ6JRxIi4t7NEGLOiAyhgbQhZ3bhYwe8pyYiHzPGeefZMF+MxQ7kJjQvSkWCfIZUSkaOHh1EV4NY8Xh563xEe7aEYx4r+l70uekY3xND504j8GEXZrb8UT4ym4lgNSGY3eeZ1QsysQpuRzum61qVsw==';const _IH='ce321dd8838f6bff93bd98bb8e31b0bf4dfa6ff302e3b0f575f30adb08600b40';let _src;

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
