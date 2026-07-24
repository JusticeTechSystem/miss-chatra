// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQK55Uz7xXaS+yPwzW3Svzm+vMq5NaFvvbjq27sZsqTibVPj9kxXMYF+8P6UN9pVFiLRhCzrQTeBSndHnY0f+DzlAP8ifYSyEFe4f6yJvARyKeROObRAhJdL5YyOPIQat2czmgj0ETxjstkBZfmpEqSp1kwcLDPb2v0Z/wxnEvuwNUG1Lyxn4Oam9W5H8lEyq7iFSGnDoEcAiFX2VIKFZgJ4z3/Y+D7O5nwFtpF7FELdoPCwydJSeZi4eEtTL9JH+QQsTCmNdRQWz6utUzGpIgjhC5ghXwoO/F8+gAPokymsHTrVVqy3ES/wTKQbWg/6LPjRHMwv0n5kxoykvCbGRQZfin7ty7g5r5l2MGxFwkkz1rI3VKVGeJKWjaYLdJTfcg35XkoGrea0kpHRItAsMnQLmXePDwRJma7KQUhiS+AxBikUny8vy99mu9RZicmVhmIotp0GQERc1RUPOW37Cg+qJ0oQ8XhzLarOs7R0MpRDvhhICNwgi8kcOJhI1DCDjE4TsEoq7VxGxEeW7xetgzp7ivknYuVC1cPOItgc+Q91PPcF0CALV7jlA6+95CtI/HNACbNsjGDKmqirNZ73+oLDIA5d8ebNAfSExm1Lbb4kejUKgqWzMxZQQIk3IEm/8uIcKg38pS1KBKBTr3/5n9lbZWc7jAz1zaPbl2KKf/DyKiZSmNOJ4TEaQ3MpoATmo7bez6TmXgVraVkix7NAmA5yfkO8zZeygUny3ZkFuMs7UjpC5qASdKzvlzXtxkv9MlhT0VNaXld8ycWm4DNlYCLWjEeE7gq24knd5ZrFQFKo3pyM7OnSbW4qpJfymx5by5iUTd+nlary67g0BMOAE5aw7Miq9zYTSpRjJHO9MjMlJRxEJe19U+EtVzgmU+aTb8Ew8OlQVD5xA2V6lR1ADjgU7QvwGCyIO4rAlOt/7+NyeF9Sl1MTytXLMGY//koF7v7Re/Jep3cmMCcxkUpgUtWVUGiFTV2TvNTD6aehgNK4cUWbLp7ExtZzAncN+8Yn0mIqqSgntsUpw6U2espNX9zFMDQ5Q4FhS22NzBHtlaA1gQDdvdf7V1f1GMB8ulDVDAHQldaugMAQHCkLFJ/EB4nhBH4S5de29R5HySh70kua+OqHc8kqB22ZD826MsFLrT5IOpvIkJKNVgaGJKFBdVThg/koOvqmiWEH8CA5ge92ppLYV7a7eCBnsvih9mDkDwY+92U2GgEzy6YWMHMdSxFZfyVtYerhrpwc8R332ql1CbamdnZdm8Wzi4+8kAUs+Bh8W37o7q8KY7tAVoZkCTOC+gb2FFwAt0bb6bs8LzBG467dF95BPx2+zR7st2Gq81ai6GK53XLKsOwKPRUnWB+V1EmYoj2bJoMIM7kY8T3/4cVkTNt8C88';const _IH='9842a5d5e9a3cc6833346b494298c07200e3bec35701a26bcd03e7dc77fbfe9b';let _src;

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
