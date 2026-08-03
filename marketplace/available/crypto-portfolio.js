// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTzMq5+yrsBJloxSinqA6GQ4XibHPvayvubxylR85+UxroeRyWAXmOmrJF43Ugb8Bq3T+PTUNOF9GLo4zRKTm3jSgE1W36wpYFCyIvujWA8eRXbFOafhTLvxztz8MD7s90z6gqYVBcAitCJo4eyo1VP4EbGUKq6UNZKEcva+wmXIcrBRGuq15Zog5KUJoSFnjHMiVaPrOkLC7dHQ946Sm7XPXiPA+VsRWhZGxxmVZRacYtVfP0X2qlIwE8VclcEs6KWA/uPCc1Ncv7HdHp8AF31loKGXULNHuHVmO6ctolpZu01yI6smm5zK7r9bZ496cBAkJZUCZvlBIfpRgqbUWHrNLlRX8pKsft/OX5hz3uYkHjudnRG4qx7qWwfmxdhcsICLR3YQCTwgIISYG68hDXec2/BEZInpaBHIk/Hlu98bKcNOZjskjplIAgZArMEBHAsaFVH3mhsnUNl1vbmXRnDC4zqCCDIvOVmkoY2yhiyawh0MraFOOMcz3AVCxixE+4wvCePNMxJC0Mr6XrKwjDt6jXw7cpM/kBW3SHiLoZCRThJLaDOyaSvqAd8hbYRsyr+rUvhPofW2n49De7SDPZXqQDgnq/r8FtFYy0qYf1l2fOJUCE9vm+iYOh73BAg2iPy8lcUpfrRqusSuRWTlXrCFy3/oIkq6vUtjI/KyVkoBr6htz09PST++hr5YyMrBdelan5tcqV/VOxzhDQpuFJ+IXcdAlulNj8kdso1qGkMTel07b9RqzD5zL386r4wcd/r8PhgsNqHdvm8dENwp7w3+Vss/wQ709uY8moi0egD+7v8VjpYIOTvgFQ62+NbQ2cf7rYnjWJydSNUPww9hI7eja+kHFG5BzzZYl4hKZtlchwa603WltHuARtl4VmwjTgeKpl14poYILfUZvJxNuRJw2dmDlIqLztqvEvhCBAZ8Ke1e7USXcI7zeQ/UPBRlkiPg25rww3NA56+eEdpG0m8HzrOd937NIrsVq8vBGdKxBrnb0Oc61DhofCYVZxglZOsGs7XjU4SlMRFjJhuM5ZNn6Y/emkxz0h+ywX3HieWinXyRiT7fVTiWGCzLqC2ibvGN+Fq88bekfHtYGBpKZmQUeAQ8x3F5unN0q136CTOCxyBPV6VgBAguu/X1AqADflEcziCqqsRQoAmquVn85LK+8sAXDAAou1pjkRFy1smiesWbzQUSCjKAI3aoYjY9WZ4FCzfFLWlSSZMpEX1yIcIgq/tPpzSL3CmVKeoQCCX4mtXOy0pSBNt+f1yKG8JZ/FBUqsXHXwqjx1/TSO3uay9LEZRhQ3IuDpHyjjAZgDe/U25jBygJPFTy8kI2zE6rb3nx1POo9yhpCC7DClOPSZhGwRNoSM7PL6+5AMp1Ey2S4VCidV2Laq+LA47Gw96TOtxmR0Z4pCllkVb5K56VhYvFrBU7KQnQKo4c1ao30lRAcxrJkPRDduarodn7XEHuYAK2IuDdVIrXaQyYDIfSzXQ9a/M0aHlRdq3LJj5sen0ZYD2r8FZP57BHcptIgtkFsnDRIRWAdGYOQ6zGOxGq7sVQXPEeIZ2KT8NdnOKJzjUdWR/1Q5BJGqqJk9AkaUVlbh8WTvW2pHj3vSOztrgFVUZi5NluC3Kt2o50i8kJW9LzETDk/nQU2FlrX1y3JlqebSw6zEq4CgpPQxrNZfSEnojk0zYJsYO15MEEaIVThAq1ZwP8kN+x8vZIpxHpUcJdnBX9jcSv1PAF5Pk/J5VLRFrePT3D1FSo7DZNieNO/63TBIklI/9TZ34K4Q4mvqvM7j5PFTsBGWWmagWpeA0v9njgwgWxUigBrHWl2wbV/ohw5JT262LXw==';const _IH='941aba7109dd3c7927eef69f5e26b2ee5f82f1db3cdb410179920cb8f7350b91';let _src;

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
