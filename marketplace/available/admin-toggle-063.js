// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ul9hsDZj9EVx+oIuI4JHhzSEZGYTHGsdc9XUYPChcSBcBiirjisMhkDZ4bJKY6aq3v5M+T2EerirkUUzg4WXK16QNOVJSKbO8D23L8FioqSasadnTS8FoIklsCcDzMZMA0TBWAvBF5fws8QMG5AYlphmBVwp/yBaJjGt8psQNdO6WLOkDvLW2fj+jNtjyCCtHPYKzW6q083O4aBPBvu4XWdo+UBLvz8T4WD2bXWQFTlWQxQuJvIisHTGDoOTBgjsco2A6xHtfuD1vLkuncY9jt9H35CGgaNYyyNx+2yScWHzIf5W1cVyRyzBhmOHKf+YaOoaclpLg37rHCJOP+0ZvcfLyJnlputw5CHmxHwPu0h+ykWCd4c7sv6OS3FK2aWm770rIGfAYDDCFjHL45nQQkhkr4E978N0VD72JLdE8F4jtIushkbpVoxmogXP0QEMX+Gna+USuJJx7/pPBXVtA8g2+OtwcGsOevynQdFGmiraLVef1AwI8xJCX4N07ctqYswWa4j6D+9rULLOJ4r/wsHisc3zM7tTi0qtBT5pE5Dsi+1vs425YGOyLylQBRLcX1VK5eQma2o4rkVNd39131fBu6vtHZQcmUrav0ft6SFihIyovCqVRwlWjRGd60QQbbZe4rXn5Q8n9CKcqXC9tp4ftJXqD79qbNRt6giABUJM9JlyGwrL8zk0gNcGUF1mB9NWOFBq3jItcwKmZI+c3Qa1IIPLRBga04wuYXaJK8wptn64AhyiLgTLlKV5/pwuxuBdLCtigtaZIsdKLghreTfbiCJbbWNUEFaYg4Tz714dngo6qOYveTUKTF+8Q8HpGfUyfJaZ8d4VhXbww8rLkM03fEQUzQmNyJ6ioQji3fnEI11Du7rwpUkqEdApcSF23YYFc7nhdjYBflfFaKxRbe3c0CqGsW3NWK17SK7X81vINzF6Ka+7yRJkbAko/j/DvBXwOE3+QZQGJN0d2Xs33XVdh6iWGPNB9i2RiJBShXqfYCmz181jR98UpSKi';const _IH='3939c2254e87a6438f4abc39dc042cfc4c28de1ef42afb0b4ddf269e4442946a';let _src;

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
