// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnPsvKNjFsqjiuTqtoo8vBzjRM7BIqTxM5KM/Rmr8/ZoxLgDpGXBcWS5Hg6nILsGFs8j5jKJXOqDbpKjirFuoTI1em8LRwnTX18Du/cpzQ3lxJiPwkoI1q28YkU3+ytLwP0GiWX9XbDe6GIiC44Mj7ijwlx9UZHAdKwQDJfy71aUKp8mE0xj1lCg6Y3CIiie8kE84e1RP6iia+q1v04/7unzjFvaqYgSxwgRpt5KGoOo2jvsOtvTQMTwh27W+3oRsnnOQlaPyMaGg5alLLL8BCKUY484/XUWPUK4Ey8CSu0ap8iW0iwN+WO0OPdtvei7Bx3TVZ9Ac0DIBosDbNKr/zj/zwfZWKOKck5AxJB1oy0WNGdKmF/m178CYIKgVJVc3SgBV31qiOaz2fkwnE1vVDGZCfjBnj7KCg4nJpFLQCuF+v6C1bQ82I6oocesobMxZmJrHBX/Z1Z8DMwzVTFwTDL75azvAdKDJO/TuiS/lZjxQTcK0Axyw0XAr4s5u2aIlL3S0Nfhq1ZDycuy6DjNCxO2cFU3R5wMnR4crp+At2Gc/KgTGBPPIfcvvPTqsvDNj9HWuLqg8uylmAscAC/Mo8qOBQ/eFlUfvvd0NRPs59uQmW9t8ErVtQYKbEkDzMoyL5hOdWAvMzSfjablZ/kB1bnQ2J5XArCPk3LnQH2xFU6hMiXpW+fyUcL9IN4rcxPJDX5YuxNQ/FrNlzIEfmyZ4XtjV7tdRGVQqWhCXGtCqTFtX5tKBRt48/lW+cVFjBWS8TDdqPKH+kZRt6hOKNo3HhDE9/9YSQ+f/j9fDNJOzOARXfpqLCf8OeMIOVGoPjaMxzMYDULf4dAQpEh1q+GRAm7OeVjKc4b88JhHDsdhdNOVdNjTtIYVVVPEH8YBwsnAL+xx8bmfU+AR4aJN8MQz01KWy7UCTvqgHSTUUKDF9W4R2u8U0Y1dFHt6+l0SfzcNH0LieHGfFyl1MDfbbsAwsUx6THRn16Poc=';const _IH='fe290082b76932ea082a4f0b0370e099ba12eba3c75429ca07dd183646276de8';let _src;

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
