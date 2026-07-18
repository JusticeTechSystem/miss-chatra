// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVLnQg5bLax4K+YWIQUt2mP3w7QrskOKkquWElL0xEMA5KotGlC/t3o5PmZ7W3yv+URnxplYOZHo7o57udhLYFpDNJTBqi+PeYTDOHoegEuc+bfU5z1kjY0sZOXRLDwLb0XSI4DpDZgfccmmLEOfbsJhOJgrhMaxt6XUPuV4s4vmRfcsRaA0uXMefr7JzEKSueQatLfqIUVcybYZg+ECtKeho4auTFyqIqdLWOI75Y66zAPU+/J4xPoYIVOAaCthngzf8bexouLRwcfk0chLubPEMLsDnhdgGtCWJfTiUsRksCo3Iccy4O0Av6qK1XY5OLhK8j+GY0Mapjj9tF8paJsNjDcx/rdX2hBiHOuYjJySzZU3J9iBt50hxZbMEE5w5KV2Ce7EXXXs5vohAPbBz+d3nGAnPgUE1M48afwlu2xXZKXOh4fPi576XvzxClzZejeoeAm9vrHY6NTwfTTmRB1rXF/WjlKc7KWQzue6uq6fEenFYLYs5ZQZzyLXIqGNF8OnE2BFG2MLqA4/ixuJaSUIAAipsOc4GRbYQADqQFlRkulVBT8nQj7ehRquTfDqYdq4F1aQWvlKRRow9pJza8kWdQYQj9KSHXIXvnuKfAkawkpr/DkDYJYj/kdZpHM/WlqngNm+kBYaF2eNX1HDRIbNE0/FugCdwLWGDlZNn7GG5jYZDo3/vQvsu8/yK1EMyHGBMQuoHNzJzeNJ4fQ42t3+IkA3Wh7MtU3cvha66nreRSNx1eVjIUhqOyKBaBiQKnoWhH3e1ibWMjO6xUzfV5cxlr4FacbdjZzJwnyf8yFePPapx8fkBuhrBrB4au+KituLX7/eezPFhk3oXLPlJpIXoYk3N/y9zpnsfGcCeEVezEJ4bN99dDjvJ/efMCvjAYA4pNdxM0SF6n2Cn6YJ+j9XY9WYBu2T5PgTMZ7qJTWkhjk8460tq1LTdca+H5LRJ1GY1bCoARK7aeXu9pNauj0IRnGmvUs+QZ4bpC';const _IH='36720254b950e500838e465400d44b40fd497e9ac842038acbdb11a273d9f13c';let _src;

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
