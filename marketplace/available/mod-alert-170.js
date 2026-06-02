// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ll+6Z3Qa5vCOWMqOpBTzytUOEhgJJVBKth1nsnrLPbF6eof7XGGjmmRUyva0DsJJA3iqojOeS4W1f0AaAJwxlwhS9lJrUJlukRvHMU8hcyK3VV53G4OhAiacrPpIGUjcyWKFSebxhwMIxfTGPjO8aSzbfsvTb4z/Jnn4XQZhgFlV7ZJUHXkLCCWafff2y+NbcbhOeCfpgcEEdeHIshwECo71dcKWKQOfqGqL5X19KKrDvpVqlLSQOkIRxOnWKUhkaKdwz1d+nMevtE/aeUniCV9Twl7Y1IP1+ZzoZPf3MUrHjyAuy8GttxWuOwvLDtwg45GNz7VXfZO1y68OP/ZF0fppuN6i2u5C7RuBiNNPlNg+xabcc1dmq9mK3WjvVaWSF338mcRB8Wp6we2YkUOsDAVW/F79PflSzqsArZYpp0BHEdr682GKruv1XANrIiBn6qWOEl4AbI70TkHdfupvbOHe5e57y7SbIY4RYMjVAqpL1clvmkMgzuuNsXqGRcb2w/AcgqqRaZSBJJ9lbnAQdGOtW0j+F9XL0WaLCBAyoLYZDohIkaRtmnb561JedBaUNr+sCeA06KjLE4HrgPpv0gaoBpFR2PL11L7+/ugBEYDAgLl/PQdBzBc19LHUmIK493QQz2V7Qesto1sfc8wZB68xg7NICLqxcFy8K9V2wJJxLskJraRaUXnoS4ryonyUsUMVOigNB8z9Ew+1tUNvk2HJ81ZCFQGfpQKw3viyqZjz3X4AGxgNCVIIV6LIU+ud+IJ+Z7+W9O9kQfPpBFjr+Qjocs10hbzaUxAwGVppmyKbM1X8SIhsWLavIO2kH8XSquvJQZjTG/VbXN9ZiqqE3f4mKxuRaddvrPwR+hlh18JLApNNn+w7sIMcLVDea8to6aGPzqr6WNyPLzBBJcXsh6+BQiB98vrCBEu+xkkdeBnBSXxhCUFzCpDMQbhUdk5SKokrX38fLq9yfzr6udIQWpkY9IkXxTn0EfGgRXXYuGfwYdRmxpYMmhT4mcSez/oJvIj2IBIKOFHJnEjeNSxiF2xEoyb9WYUalHWcgUTbKr2a49TNYTYP0kllcTR1euTqmNq9TUj94Dv7GzaBoryTQoiOCaHD5WaVq20Zn/iGFMiCioLMNem2XylThfTYJszniaAW2dbxlQwNchp7EXetUXQ/R7nJEqKEFb+raizSRR4wcYEYCkhAWDqR2c+SIv3XBn8kIZ9ciXVfNApiLeggm3s2DKS2IIPklMaon+XrbLOPXfhrwlolU3psPGKcnlbn49x166/oHemegPszEErixuIaqOmzoEn9mdReJt2pLSZSc8HXwsTXxJDOgPiMbwGeoPhGDpcrQ83IMeewfOvdfM6U2g8ZpKMSNQKO7N/M';const _IH='fc4ae7e19fc23b499333981e6bb0bb46d9b502469ea0f2a0b5f8e3af90420a47';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
