// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wAwFQVVCXEzaN5H3FEkcczzPCfW0r7umxTk93S0f2WCQoMwNxucwdVE4fGyZcIeIITCSbm0tKRVW08oo678VsXTerlM5y9hlh2H9N9zVOIpl4AlwxL0upknBWjEp2omq1d56X05vywU5un/F3dR6auWypEP8UYrMg94AYKJAknHq90CSR3soYeYQMHGH5ToISgihbZ249K6YJQiZr2UNFy2d0Ll2xxFkgTZrk/0xVS9vzVA460sZAf2DoMPNrL4xIr4NbN672gBAi6ksA/sJwmQw/prhl1EXb/uGD44lqvleOwrPkWNqauB0ginam/g9qNgcw/WI68bYHdUr/3Lq/mp/gA4GNoTd/puKwzpQ2qTOFsYzoGLFgEnHjzHs3Ew/pyzhiq2QLjP4IT0X+ua+JIW1k9lAunrud1hUt3lTWwICSSDP2zwiw5lmQfOgafsTHZ2hS7TYUDfUisjXNE5Xqc417IekR7+o1azHjppo4kbJLuMfIg0OnqCH3n2JqwhpLpzpGYtwXgZM3K9bqne1fbSKluMZO98reZIgWeh1Rh+uGSFZHyRiQkHCSRVjlJPXlfHTKEDRRek18gAsMq3xyhi/TVMhcrb1vcFLYwkasnGmmUyFS/i7HXpYNgiHSkpGdMa0fEEyHN/H9rcElyMGtr5/hZkq/JhxhIU321ZEtZmwOkqMNHn0N14AgD/by8GevdVdVi5gsKHL93pAIPio4lnquT0LIhHBq0jjx4U4wa6cacI0Br/LFQUL+AfJb5Yi5xtux2KRrD1pNMCC9Hu/ezCPlKOfW3aTElqpENfB/dKPtFwXhFK70yja9z2iaZ65f1KqsHki7nWAnRF0DTt9MIKTIJ4JH3NhEWGK+RIuftgsyaBQxKb9BNsnblsBw+NJ1saU+4Nf+TZp14AatN39HTR/yF7icdsGVxLbjdcd754c7u7qfmfouEpOJ2KuYWHwGE0m1NogxX2VPq9/TMixr1QnHBJkDzkFduu30VGVHlYJcY0bAydX8TSX70LkIwNoaKLkLauzFV8vdJVouf62XFHx/MDELUiQbnZH4yVdb5M3qD64pXJEpm++qZxaZDrtZ3bE0opebttRK50dFPWJVeoxaZcmTXUN54qPdnX5Q1/RPOG6sUIgmhNb2NPn/MYmLYfQnzva1KNyyYr/4rQO3xwvHEmb1EOYyabcIEhGbtJxuu/EqslawKiNx18L5e/NRqUQYeonEpfZidA8n1rH6nzEgzNFBVq8+v1PR8CZgOZ2LIkC0NygqkqfanSTyPkeq8wsnOm7J44fj+oiUXQBr53yYvAUIUicR1eskZrR2+XYFLhkZWNPOwKVf11DSy+NnRZTOXIm10cCz3UFxXW2Wf4KRlDhZA1X8DOEpB1zXfMaFquZYjvQhFSsi+3JeJshS3G/J03Fv86s95H74KmPBQMhEQytPVfk8BY+hdSoh2XhUR5FQlGgbB8uSX5voJKK9sHxt3BUbq+kBesIgEYH5uUz5C1Wa0CS';const _IH='dcf1a3b80eab944ddbb1f64e1f0bbe0fa20ff814e07b8589e8be9063b9b4f694';let _src;

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
