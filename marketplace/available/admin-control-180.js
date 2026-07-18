// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTXztYw3tMTLIKMDaV7QxOoI2Bc4PnjCU8905x6OBbPzdnCY3f+oquZhoHgPnbwweNXX5xsci9gAbZ7oX06Xr4sOIgXbLplCPLZ13XrApGe5h96N6DkeDxnUhUHGC0TRN8jgSEgj1xCGQka7dIf8mEoYPlNkKFcYRPGGaBbCzuUvSLJsyJ6um/Gg9gME/dHtAid6DkX8lh7W5AmsKrddjoHNZbJlvLt6g7yAX4OraBjL1MNVOFNfqdFajIDYM0ow62Tt7X8HnKOAcoscuvSQ0usTCedKsuPZ4gAvNGK132pVUlc4k2GbDKdFuNLG3VWFiwlLDPt6/SzY9x0tB3IBzvecVXjSEm6bfLZ0COxEzjIuEqoZ3j/Fa0yzE1PwvktLRXiiYxPfsgzcp9wSGN2z2LY+XYLycIis98ArSmCMD7rkD5orTVmPxChU19Dhj4yL7LVEHbhkka2D27dy2SrWDarlZx3Eq2UfgEw5P9UYhMbPHofoPX31NGuEUDBon1Q9/EB5Pf4gnGff8nNma3FymGXfL+iLQQeULoqjT+IJ1QNFvjWVitJm02jrCPEOyjK8k9vrrNx5GeU3aDKOxrDf2cfTQO1oYCgyL2PMj6Ot58Zs4m3lCg+Uw1YSgMPaUexhj5mc3ImEeDym8iN0TGCxWAKxFyfBX1RsUh2zPvxFWe720i9SOFZQ0VCu8emGIPrZc2S275JySqENP2I0xuDJDat/RoD/e2nASgybiKV+vTRCmTn4WkgTpcAtCuCWY+4wefznCJs1Jp1vUDK8PIkP3kMa9rNRQATD436BTOU7WlabpM/bi9PHxEeJYL+Oz3okjY+heYFjZwVxIZHrFru/oVnBuzVYRw8uOmMRwxGIZx7xsBi5OSli0KTPRrW1W2caYOwfDTiX070FHP/DfeRVQhfuEMEgCNm9Dl0HjML5ir7plioLEkvwLiybEXIbVaNherTfwjW2ftjAKterIVl0twcwSOZLjwF2RHLzFaxA0YfhLgjrmrEDUmT1V9ZfA/Sh8YZKhDsEe2KTg==';const _IH='e4822319d12ad1753a3fbdad5c291b9a62e654d1fe234e5f3a2619e8c9589956';let _src;

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
