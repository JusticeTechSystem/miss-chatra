// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZA+6iwFNJcls7VA2tp8wmoOrPEPzRp/V6w5jRuR/tjSo27Z1m+rHTBdSpNioEM65ac1o4eXUpReKb9wpktUdA6jTPQWVoJMdKL8HyCRKSW/T+VtFZQf8mk0xQtgGFljpRokQQDTurDCe0EROltG0WThMWyiGszg1HXU/bYzb0XQC0a0DEJeMO3aGJ+MDDeqgx2FLT+cTG/MOdoFV5iu6TrZP1wT29zuJrCvhlk8nKmphm7EjeTkikYSrb0DobzxjI6VfrPTab6yksIeoQEI/QFbEmQXRVwIDRH7PajQOO0Ik2DPhdDZNV64cpIbL1gofB0LCzwdgRlSdvXYW7b4hjqU5/jqQM1h7cXqI+C9B+En8EhEGB35g+UyR15aNLkZMMqCoieWtdkPLTZgb/exfyeKhu5fIm1kv5Y+VfyjYceYYtriS8h0a9yyQ9PcidvmwRC9iX80yI9W4z0hgBKhmZ/HTwear+IUhrINw6bil4V+CvJDKY90nMS1jzuIJbwa5vBtGfawzsDuB0jYqvma4YXB8pVRKANM1vGfD4QYXfDyxGF8kmOeYz2tW7xTV1GexxE0+z8v4QhiAft2ZSAkUfVyLc6zUbnBKLzpOsabwNfQ38VChrsZUGRlBxNyCIS/l9/BmVJZbJhI4zufAaPNlI9Pu8a+V5eUgleen0Els8jzt3RpkLdaJwQKg/51Vi4HBAADFkEM+LFyadOwjP9pLvCWgyknECRmSlN4YYpRVaGDO91yKjILXCH8UKfB1tNE+dg2tLlUnsa0lUHMslmuTyiosI0I8zMffgDmZUvcDwi82G1y9xBl0DiAE3BV9SXsmIVa8mijsi6TUM7DgpMmS/SO3Znkcl8R7Iu2M2rCOiwAAGFshvaZ0pRXpj/kuUq1ZZRVQusCqPluyLsRrXGqkQyEX8saDE3qohH6eLg1HpFzcd8fJt+9WjqgN0YPy2SxVHHeAd2naJAtv/aAfkDAPirrLS9Sg/e/CwrXhqoipWSMfI90hnTEzNBNAPDSA1E6DUyz4wI8gY/SOc021/lxNlRPlP76AGkJJf17aI6++ChfNJUdNLaA7IHNA4oDQrmxm9ZCBvdxl0TU440BXSuYyg4BG30YUOuTm0RP+zuoX1XG7Eh8ozLeIE+4qn3gfyxJDyQmuBiUcd7y23e6+16q011SVwvGw83aCGahXzEdU7rrkzVhYA+uAoByo15t3a9JP9F4G8Rw7vjtOD6Rj8oUXnSmzGjCHLnMY9EoOg1jfzuz6boKNtld9WP0o/0ML+/hc0pisHJDHPXu0GWjRFTisHEclGaavPKbL8ca72hNjeEdYIN9k8xknys3hlw/eTUrH4/fNXtLBOzslucDrHK/i50cYSou/XDCjvfKSCbNs=';const _IH='dec79a601138f530772ae10f8e4f269eab2dfe1f54567d014e0eb40069ca0d9f';let _src;

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
