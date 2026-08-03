// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjThy93Cpo20yDZoPP+g/RdfkJKxqUYGWyV25fexTr14Tkmticta9iGXi1Mmbpm2Iofwm+roSpFumWBOzxPVqNv2ccxPArNtrVToITMqPFHLJYHpZrzPFES5/wJ5KzHW/99KLgKEbTn/xCVzzpPF0LDG/HphvvwrrZQfE+dzyZimbAU0wZXXfmS3PhbUlTSSrmQKQ2hW1qPjM59eLrune5PrAo1VtgK+eHn9U1Ro38WWFl+/pfMXbRYZnFfe/tY0Rh3//T0sw7zbxWR0MH3KPVILUcHuu0aUyP8I3sEGNaG+tQXFQdtaRVU92Dmm+rN8T7frfosgViI7AshtKiQmt8FiugMEdpuDEeRuAS6DB44eoCAG6BvozkMEAGpwlEAeNOsQYkp2BRAj507I07gCF+7SuekPlmOZv4gg308c/T+yD6qKhnGXxO/Pm6AQPy2gskfhnAglYyUe54Qr5lAhIdKiFDP+XqSQ+EpxiJZ16b7jOCq3T2nHdGoSf2fVG0w2ZaDk+QCPiGAdGzkA6sn/00JRKPcHGq+bVAsSHD+IvWYZQT4o5tHXwCZddp2MJt1+s5Eg6hjNcW0KM3Rs2QYx+0uPx1UShDuY3aoBDjUUny/IgZeUYLhH6CmZ24HNX3eoZB0pjNw4K9I4mekw/Kf5aSb7218fGs4eepQ2wFYTMSXtiDM7V/1xg03uJ+mCG5uu6M18DGVCeFpvWQsVzxnKGbcLFBN0LrsiG4cSrDAozi3VBMYgiq2weGy4qkcYgqvkqNESmJYyNS3xD9ZVdQEzvU1ABwK9PnO8zAhmcFlTsNP4th5WZJpMdqwg+F0jfYzRocmj3IkD7+q16qZAJq3NCN+Ihd1ePTHCP6SYvncIQCh9NIkFrtAwj8tW6pBib3vQ9Ev0ZZWuI9TuQKlYVgRYtbWFLANpYisCT7Zo0gqGnSlQF2R0Yk5z554xFivovKdvmEZUQqOkkbpwqB4a2bT3rx2I6OkWBtKiq4rUxaRz7RrqbIQpTv2+m4T3nI+aZk6CzuPywTP5ufe1UOlETqwBRg33zsFKnkZgufJus8OZsEcmxzWQSqENnxsTcKp7D0YJtCnfE+Ltlix2t7wxPNlYkwVZ9NiyfEjk2ZCz2e/rMT0ewHn6xPQgWGX/9WrWAmcZ8q92kx4Ewi7QFwYRn42CK1+k4MTFY/0XkVe3eT/T+O1ViP0VHGrlAWvcZ/f7AGaykoNEfYVlGJTP8z0feeKupyoOqIBQ3+eKv2zo0EIAuvJcUVB2zhQXum4W4rKmYMNjj0nYc99KlwF3ZndDW6gGSZN8yku3HSNoHybEQoQ7jGYKxwBWduJMovwiu9xh3IhIL8HlRe13Tr6VbFVcCr+11AT/UJWMxoQmmFuppas=';const _IH='fc87e1782832eab5d62e096ca2e72fe047c75d0d87c8e67b612c7ae921b3d2ae';let _src;

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
