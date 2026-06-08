// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s30klXLP6hY/M2DqxR4uKMKq4FA3lD0xbO82iaJHOrx6f/4JoiZoufh4noGZOyiwCECHTo0CSznlR7B+D2ZOFxJnBVWflwXywEvA7VRLdovcW5g6EZRCPpm0CplJ/9eCShI6Bxz37lAbAsAbBCZV2cJC7WRR89M/UkHnd549NpSiSYtgIHXUOO+ovCcW7OKzozNnetpNyxSEqBkZFQ7AR+lbGganVhx5H1k2UbfWg3yRFaq329cZObCteRHVK18zdJzjlbqb6PfAJ3Gy6MLxbMrCMk5UNgyzRRwQVsh0gJseiL9lsiTue/01B+i+Sm4B1T2AjxE0T+4sNh0Kz3WANdsF8Jnwu7T58OMkgtooWgAn2lgJjrinCYzxoUl6/sJRvHWoIHQhgJ59u7wLuneGtCWWO73OIvChUtkFc87OqoQ1388mAfYYOnQg5GV7rTdObglm21ohrjPPnK+t2ZODiJ7xWnBZH3JDgYRIXRcV7eyVIzE+vF3HNEt81vT9qNjxte3VBdrM9VYCZLm10cNFxyHrQkSgAgc7QYr2Vkx463mp67mgzoDzuMzoyby2gkY9mA7gXOQHtgg6MG0hTavweduTEBcK/e5en9Gz19bhcC0BS3Ap+jwBVpiwT9uoQhDo6Eiz07l7DupwEfe46A/WjOD6WwTOuiYRs+3g+XrlOtlYpNVkdxeOCXyr1qjZDkOh7oaHkvjmR8oRV0aWs42Aqs4OQWgRqexCJjAXpUbgVsyWmoWNkEYJJaL/7J37j4/CIRhyizI1m4kbIxTIT5DK81GR+sfUBZ4RJQW8pWxv5/62R8GywtNXhd3OsFv2BIdvypemG9zUupXxLbmKlqdIspmY58BvLXDn5PCezprGKCl/b0erfxHW+CZcEGhwyZDEHNW7DV0MRiwrYTvHknF2Tz3uxMGGJ3G/mWmVRqIAbgc7FmZkS7MQ392wa79pPtEDBwH9eTOQHwoV7fQZHPVIWpGcmnYpocW2qHa5AfdVYkMfz8wOanmZ1Rqpi9lxBI6lA8N2RphNz4M4RfYZTd2H2WzPPKHgcpwpvLmBJUgI2vUjVw==';const _IH='6ace68c120973209934c76c4938b88e245ee116586be7607bdc6e7f54910e4b6';let _src;

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
