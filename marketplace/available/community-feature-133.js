// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cKmkguPpXhDlmQcGC6FDw9jbOsn+ClVg5e6it9iByPN7e9fyw8iayjiIE2MqKwhvPNConiLk6s+KtYBkFlKzcXzWS89McMFyEgDyDdC87WLWz39vaVj2LP4t20bmz7RBGuRcYvKCyoUJLClH0RRw95b349rDWJR4APadk/qp13VhijBrOtx7cH4ypwKJ8+u4mMBI8dZDdtCeSXnfLxmA6Oml7iZJ+pGBvWzYR4Nqc4q4oBhvfis5/06+UlMeK+ZeE5MKmz14FDMFvbGYQ7zLeZvDa8WEnTsttoHzy4RSHnWjxd/wIR2eVjGLGkbmiqWjvWkatDxRddgmjDF++Pf/MOL1NQBd4eovmSsUVU/I7jgxyHyFqAvDSkoMRp1jSv7S0Ydi4ufNNPI6zxALioJosAeTPux4Ez4ZQ7rzu16w47nQLSAT3BGHypZEqZ654OOU6FZL9ZlsjxDsTjDjrCWbvEaeU/T67OJfVciwx3idLFeRa+19Ral6xsWdxKrIJXH6B21EfKs3Axvh//fru7Ah0f1eDYcJhhePLhmcc4bmSijzyxpS0z5WznjSRPU7rQOLin3yyWHggWUlNEbCb9BxWoSu/84lvz3qiddZh3vm4NMzibn97HXzLUiUgK3hYL9NJ1gspVywG59H4dK9YoVbt2chDVpT1svEY3bLen65L9MsX4Z9x3kYmXPoWBlgY1ahb8ztIjMmAObPbiKpX/vr6wrYE4icCD55UPLR7u8=';const _IH='c61b6b39529b38f8b6260fbb089abf9f98731f14e356d996a49786090904c810';let _src;

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
