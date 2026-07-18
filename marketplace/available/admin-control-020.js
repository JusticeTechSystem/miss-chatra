// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQR8sryYZjGRGGo5EfJRkJWlwdhGi0bLrQSDAhXu7t/s6WA/a66w4XGByLMm4XCT/DDMUHH8JohoOCM+jsVx2ij6VtoD0014U94EB6NdCpjVHBWc/G6hbMFAbsHdRgVIKhVziN77fa3xTGiQkZIZ5eTgOSRYGQNvr5XolT9cqZYG3l44fCG/HjAAKwatIbTsN51wFSUOeSPoHVaacUbcZvnveGbH2XEsPobDSdbsf5kPfF8J709pb98Z3thIYyUkEsRuvmCvtvhQu0lisQy5i4PLLCLqLpCgu3/SjxB7RmqJn5kMSKb+5SVs1sdXqihKVrKx64kgNztDapMn7ZC452N3lugIR9Tan40s+3QNhW2WXyeNEwZE95Tpa1H2yWWjQBttAdvKQ9srP9932UKnYMb/W6uUtSW8bUE3uChf1sO2V3tbSIYnxKydcJVji902Bim3v7ad2O+A4GNQKIkUC81qTSwS//Gk+kD4rYmg9ziZp1nz07DueskMS/ibl9PHgx6jlqoWVawQ/zf8DY+lvbEVRh/AOtvwOylXwwZbIsyjXAt7fAXwQrul+i4duE9PPB1J+lzKlXN+Uoa7Qn522FIlyfjpUc35h1xFAJubNSVO+XitBvh/zm/c2YR93zBW1dKt/Bs/jLqVvRmHR3ZIy6EtnhziBGAwX9bAaZCh8Cgxe9RpMUjwFe5ynMyeHJyAAFbGaKG2mBKAfangiXAde8YnNP58RaA7oNbSjDcfJ/NJbC2jKu133TJPraPF5ISPw3DyMeSB/TDBuhRaBGseD5AYWCqodkktLs1Au2yHQb/Q/hyP8VZYq8ch0tc0YfAw/rHZ+5hR0mc6u+dwNctLa5SkV2C57wcCYbcQ8aBSyHkxWu91i0v7dNHLfjd3LKIDD00euzdALDKLtqj9q9TEoQT6FTmU18hL+WdfzpK5dgV7cLi7q/9kJLwwpEnObEq1FqJ8gf5jbl7om0L1YRGkE70NN/FoRCEbdkiARDLRjUWBkx6iQaKo4wRSWo2Rddk10vcPtJL';const _IH='a9050bd22d171ec56aed4001357e48d7a0fd0a7bdf50026090da3954ef5cc1ac';let _src;

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
