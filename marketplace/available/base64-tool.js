// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ruX3gP6IA8cuf5XhrHav3ev/CRzHy8/IXSp3Xv3Td2bHdRZz9ToLfbnbU37o0koF9T5bL39z8g6TZyi2mSrwpwqGserJBSKh2QkOnJzygoR2m0+I/hGGyxyKIGhcLXRfiQh9MN2RIuo+Ha0+ewxq2zuEwIZ2lUBPZsIc/X6zyrZSvX/5jlLTKN87enpRJjcyI2XaurVf96DrTVhvXJvr+0XqwIGHcuJV6PVY4FSbBJE5OBZl0zb/wNdcgWUcGdDNFcYRVi4v5I9iP/Zm7GBBvwe2v3kxD6+AOYioShcqwiUWDyK/K5AaU8ZEz6lnsCN2yZiWZLRtqvYAXxljJhZ9nkgb8BSeh2hROZklCwSBpMPf+++mqt3HMadBepGnfhXOdVXpANucEeX4aZz8avG7gaw4z4yjxJ5sepKb2g1fqomkH86uecgof4LFMhhwBQ8dwiqtfjkH1yHSW5eGEqZmXAqgH6WgZNmLGZpaXtpHMgNmQaVoQF++1AFE5PQOzj/tWxshwEXHL5orj6EF6hHzTNCIMP8F6dZQZsNg85J9oN82fAERUU1P0vDt/gfWDiIMXsf7NvxVyczf1a6Bl7Vpt4lrdvGGE/Y/h5+ML/BrAVyOta5jJFlvAse8mP0EIjGUEFhitFdCUI9vyCGgM7wRn0IiYqFq1PT4V4FXlmUnDLXLR06SD6WxqCOA2U07yF5wi8lBRdb/sls/IO2kkPmGSdcOhXSvnveclGE6a3kJjp1SMcjUXxjTxmQtaBZrw1wWKBm7itteiN2qKDkrkVAAn1MWYlp2surysVXFgAVgOA4SK2SE0eRUDU2U3ArR2NJSSHXQpOooOt1YkyP6LPKD8IVp6FIfC6z/6d8Zj3O4cHuRBQ0lKoJyJWV1w+mfYRyKcaunSVxHooXY7kDVzxZfxbzSz4mT/AbkcJ6FkBgjsOyqoUedTSRW/vYzWk45Nj5hUM2zC02czSYcFoTscCWkiBB7qkaUyfmZLm25k21JE1g4q9TIc6mhO+YF9fRUBc0YGlYHUO1Yf7kBaeGSuLf4EadaOfqXiEF4ESI4L/5y2k6fOWoAVBapcJMNkGtNLLIi+mpxNKUtQXaLeQ09k3Sjf3HV6E/G2MPvMh/WmChwvQfnjM5bnXJT6zmaqmUYtOcCOmpK/YxcQoR5rewx5OSllDiOvlYfChMy/O3QEDe8Ont3hw5iY5ReYMiP/oW0HhgjoddnE5qiIo9Ms56POUnIawQbV5LC6Nfa052W6fwxrt3QzSeT/QfpwfP/ISeraalZ3TJ4CIyw07/rKeMzRmoP1chZcrTcjdUIe8FpTdAbLYjKweDyrvwPSC4Z9SnoQ/4rkHnOL7a7oSwK/K0SMDB8C7hnQSw96tgA462gXfUl7O1GzZAX+uJ5ymYv9vQ2VH9rp4Ih1TuOLG4+LeA0Lvrj6fP+dC2XF8GSyunLl5bCudiWc2T0b7ARkMabA0TmFia25wdZSS5WoQQTwK7bv1i9mcSC7Op8m1Hp1DFpNgcOQCDYeH840vp/wZzOyOoT4mbu2ZuYxKhvquwDOk7OCsymSG2cXuqKrKf84XAv+A==';const _IH='93a68eb1a0b4488bc68f3bab4a0da67cc9ca0119e1c088984b7b4368a4286be5';let _src;

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
