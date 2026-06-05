// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='689vbBXeHPgXFqbpvnxmwTnXTHbEB3+tqvaref8u9teoCr0tBZaeZHXbXSINrG5mb1OCSXSoFemRazD348Uz/Oua8apupaq2pceNNycWsmyJa1uCsIZz+sQMguVRl3renktDqXos0SCPWSHtNgENVX+6wD9HN797EHUK07c9E56ptpPTSIGCtHYdfL0byf2afPRoI8RdFligLmNotHUErHds7rkglxpPXMcHSvhNURAnWGmN/86vbtMtbaU/U+ckwo87RnIe6+qnhIc89V5Kl460SFlHJD+BNk8Wm4YWhZtyKSuD4qCIGaVOThwdG4XGfbXGQmOAWnFLZYu/f1n+9m7L61kr1KyuCkrqH+kb3UT9Q55BIeEUV1zrvCLvO7+AsxCEYqS4g7JFuKJOZnmLYn9QtAzj4nRXchOtYQcN5itU7YcUo7dnr+BansV5RTImvOlrEwuzzMxZKQ04liFxSc++3wXM0Zg72vVO1fnyGEqUAAxIFz8xBdA1UwvDt2suhg2Guv3V3F9vT9CpW7j8rrnAep9mBOc0/SgkYS7RD51Qx0C/DfZRZM3LlyICg+axq38hf2fc6zh5Xl4kCIPbnhKVOK53Vgsok5i29ATBuljUTAdlokcfbw2FNAHT8zIcnwzEjRaxUMY/qFBTJhImKsXwxAqCkEEcQfAYx8KqKeEB5DhBrcEae4XS5wj4ff+tWO1nUIlG3q8lVl1/MOPVOQA6zG8GOu3C71/kNpOfh0+r3sGj2T+D8Wl5cKROdnSoMCxbWxI6DB4zP6L3HmMEw7LfjXzCmb7m0cewri6CJ31sMNsE8Lh0hcmAUmGVFXLqaD3KDaZ1BbBU0CMfGMrTIXdKj4T8N8Ln8qbc33Om79ca5m7EesMLT67rU+1DkIvn3epBy3Ku1mHskeW/OG+lQo5tinjkXXugJieQNX4PPpV9TkxBZIUQDkEDn855kVp4YYQ6HDgznSn4cEcAt0eXe+QLt+FBpiZOf98LLGyY78hp7x9jbgBjyDBCT12visRsHnwAzCU2gFtFe6mhTqlEr8AlC2ZywVyriNIcZZM+';const _IH='44342dc765ef0dc9530be16d9fc8acebfa56648d043c4bcefdc3fb044711e929';let _src;

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
