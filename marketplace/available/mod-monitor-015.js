// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTz3ieLWG6Bd6pWQ9TJlKXCe3oRG2wqvCKHkCEVrP1c3sbRwUm+cJsea9Zw4d1vfdvr9G7EPaAZZGZ9O5wTYwROliL8/YfL7ud9wkRVHIHOEMt3tCv1I2eoIPTzDL5rsQWA9p8H+6I//T28s6BM+ESDB0wrcgfdo2pzn0t+UjHaLB2HeT4Oo2EkMqk9+rWZCjX6SWZmBQBC9vpSnVNFwFAABjiljtD+Rww9O1qln4J3og1QwmmmJNcf8pJRyesj0q6R8uX0/NpvbervAseU4g6ZEFhPoFDRzu+gLpdSxn5K5mA7PSqB+voc6uIxf5YayTUfS2gvYttGgZ6N55la55umIyAFJgZnNADdEbfkgQ5aLgrviEGOmCsvGyMY7sR8WURqXwf3B2FJ4fxC2osawJMCaYoiU7dKWLWdZcTuEtORoZ2X+30AWUDHmmJj4DIoLr9g9pzyO+/Xs6KtYlY1lIs7Aosxd4a7AhKnsxj+1dv2+82X122BKEdr/IeU0qlE+MZVnBRl4q06VXdTAL12AdSA+TuV1adHHkp54+GyWClvIlhCR1hElXTMHVTMtlipVVDhTxzPZHPRXW0wQVn2v1KlZi/5wg3YGmKa+y4pmXDtuE0OVEEJm/5gkIXaOQjBAloTxERn5OK4Iwys2oLfstUDD/YLhU8ZSEYnkczGN8vWYP5IV5vOB39sBSYkkxTkH2b6AdHnIsPJpoDEkBMZiwkdSmgN7CsKld1dTe5zflLuc2J7GhD89DmshlmgRXV8dD6ipvcXOH7Iq/aGnkBg1pfnTVhTqmPEXIUvBAAQFNA+aPrgDkLw3UWh21DzPpURqQImxogq1nCTyccD5EJNt/O02AZ6jMeVQtr2jIJo9tMRsOUySO+MiZsJHT3L1z45vRusOmjMC6D4yNDfEIY6cGNyoaAJ/AvVa1MVLQvKQGbfrzq/EjRZyBvFGFv2JzOVmY2AdDvUadSYWj/0/v3+XiasbyVSYs0txnKZwQ8BM9WLepTY4SlSUjRrIZSqO1A7Rbl6JSGK49qRSh3PRYmom6KV3cZm2dDXRLdWpL/k5u+qpvupNjfTTqmxlXT+8+QGB/QLJsx7LnjeoR301617DXRqC0ejTVqio4oZmL4uf0QZdtd4sVuQ19kPAm0bGGC9Y7Pl3gaJGFkizlHfJsYH40rhwJVEp73qK54lhcAQVY+T+nvunLqAIA88avSzc7cqByrAm2GqwzjBs5L4ZNVrcDbpLAh0KG6LXLQNwBKYx+0gl6upwgLN0iEm4VJx0TymNydax0zC7VVx3+FJ5OwEBi8dpZY+nXDLeAEfDXMEdxWsAmGRK9zReCh7hFgSS7BCQCH/V6YaPD7kHq+iHHLs1TR0IBg2T9XWUO2cDtM28+3Fz/DsKExujB+Useq5n+Y=';const _IH='4e92ba8500965be5da30d9c26fd52b92ecf9bfa1997b15844222acbe10567b90';let _src;

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
