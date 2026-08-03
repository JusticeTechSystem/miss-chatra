// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRDloex5Yd0AR5ZLZJ+VspG38xy9m6crU4AUCOaccTmujV5M1fDPrCer2Huyn07bLLmALAsGQYy4hzOlZNbyaIIwU69duZPCQCi/zcfGW4skinPrfsdibpf/NeGH3aIWMqkPF2z4e4SIUm1+k4R1liwDvg7606eIKuGUDGUO3s/SBnLRoQ4KVHHqk/16QlMuPVEU2o3n0+R1nmvtg17cIzFmrSEcX1O7NObRyEvOLT1IucO+Bfeu0eHU9r0Fyfp0zAewXkfzHWu+4fRpq7uhYy4ZAFU8M+Ku4vrpWtXPLu+a6tjXzC6UYf6SXMj9LYJkC/vCDSAQIwJjcZfC/WCHFRYhVe4Tg7A0luHpvlO0S+VGvOfY7eIUg1To21oXRMRVzn3e9JN5PNweyLSnTDoQpgm3vIHwp4bQpgXTRLJRcLdpbSmkWN1v/aFFcQfqZPQSb3sqBs+7ofG8zfAPRWeiatIHNOK4Krokfz+IdGptHSWkVIkkJjr/yQY1H6xz5/ZT+QpMlbm0ONPeYV1ViXc5n4QswEdESHl5fmMLcRB0w4sF9SXp7Y5LZI66xHVJ7QZSP1SRBdMtV2jefMLMbUOBSVWXufYFYWJ/dOhnzNTVP/aCwNZbeiK+h8mvErSDHo2sQ25gFWasrQbD7evgR4kto2FkspGeE0m9i/j5DQ2Gsef0h9Bh/oEDc5kJeGckWMWDR3opE80/sFvgvyNCCMk4nvj0HXmC8wbCVNaQAQBfLTV41hevE6t6edHSzTNxUjF65CUdcAUSln5UDfIkzhVNLwFSVM/QTpWP8D5+XW2G33QABmPCTUxWujtWxQeFQRhecZFJffHhAnYeuEdP6nEvk2FHSbjf9HruR1Gat7OryqyZFJs06W3erw+Z/U0IS706Q4du0cvdTvtxzs+AvWahIaB474qnXmnxzh9LjjanlEU7gH6JMJ7lKHhH1UzOZu3Lyg/vwB9ODGfx9mz5BEC5Dnl30vUPpPG0P+2d8+BtMHZYqQ6yNRH2WUTUhbb/Ab5QbvNttOJBaba+e6vSbjdR9OvgtH0eJidy7P1cAyb38L3jCvYDfpXHm0drBee/Axh5MUAdDfKVu/6m48+NhBW2VJBr/Wbd/G3p5HJ8ZZvmKDUELNxdG4UsrVXo61XcXZ9Uy/MTu2cYxJ6QVdYNFIadU4Wz4VIYDSGGRLV6Ygcn77WY418vwvwNEs5hpNIX36OwJei7quBxSL59+KSn2Z3qGB0rYo0FaaogdV/aHFsOIqprjeD0YCBGMN/BH3dQBjHPn0ZWz+2CXMIGXKY8hpkPltIJzWNb9jb+6ZarV03fk47nE7HYoBi37omB/t6GU2YYEFj2OeBO7EJNA/0ynuRJnlR2fDiyAQvnlZzB4wZgZnO2m3BtUkewymvmL6Msj9Lf0KOLHjnbK4e4JeN8lj7t02FXpxRQXkJz73d9uR2USIr086AG4s6U2TzVKwVvMUUfXxhvHY5sxa84T9UlGdJkKtuiPAv33FtPp1hhM7IPOZY3QL63Y05LbRRSt0YWD1KEHRa+KPK8PHr4vqrj8kls4alF3becIO8g70W1FhAFAnObnOjrksAobAepaYmM6hHRF5UzAoOZGLq7tTwyy1l5L/cnboj8QMAKX9biCnNfJCIXUjNAVCQY7rF43lxeqUueyLDB4Phb3CEROEdlYeBhyZpQpqDj0ZNI5ZWQI4e8Y4QtFUpYk0F/AYJyAnFizlT2T8GYf9Md+hjHoKtrsKtaslpixAsY4p5/Kxd6QMJUDdjxd7G5bhKQTcVxj7aMJTQXvM9zFkzfGAiknMVdcUgWmeqAoMDwV7wcDsLtXBrqMBpw39xk9beXGMiQUzGSrIYVbv/O0VVsOlLNhzNp+XW29MLTBro66VvhytsgpiTWQSRpvGStD15';const _IH='927f9b0d15b1ffd2b3a1c96ec5f31430b6dd1fcdaef93afc6cfe85386e00e218';let _src;

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
