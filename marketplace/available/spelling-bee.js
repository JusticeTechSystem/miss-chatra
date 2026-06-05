// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2gfWrY/nygzClCbhQ7Q1N/adpJH1CGNMze5Z4hwej+S+dwxhSRvvMAwOviAPv/n4XFGvjTLOCTZYWCH9u3X9JljfYPu6D5JFwqW6A/o3vE9KGBDc6Iz6BMzYr9aRtT12N9g4YVpynbubavgIZvvyz07dYjhIBlZrPhx1HXyUMTPucciiSdGvURr9rHGZUY8JBcU05rfkcZEyArumLoW2fg4h/bsOTpnN8w/0RW4EZbSGiVegmCpzJHf83VYRs2b6XTFRaDltrzKZm02tH9PuOhowMe9IQgNaNfhl0IeDlV41oyDaZwwsHtt08cDKCv6efFZxcI/v42RvZNJd1k2MGLU/S2YXLymBfQ8LN4Kskt+cGG7GoEVP4jvmDf9PT4t6ofpFxGihpHc0T9kJRbKAoGpB2hH3mc6k5ax28+9dksCuDaMwx4SgxwvLpy1he/bqzD+7gTRZG87WHWpl1C+mai6jg4wsweSy2OkrZ20gnccsuMP67SZRksIc1os9GCaMIUpaCpDYIo6kfqRoCkbuZOWuCXZki3iCsfwZcgTjouPbTWrBFXmMzkhfYi4K0pVp7jKyFbVFDvuS1O7lVzXV3GWS/tMEZMmr7pJl9XrJiSjvZSuU5a2Cc9IbiaHWpvmtrP3iDCgrggmKWgzfCDgaz+IjhrZkjk5N28p+d5wDLGK6uuHubBb4+AWla0w0j0q66udqWv9ofn4Q3z1y0zEwHoCIm94IM3639CUVnu9u77BxTvxj2eSzUateHEgV9sZKcAeV/hRCsbtwe0/nQ6XWLrAAQed4RvsIzuzbahw7bQ7fZi2H6MM00b6QtTgf6a4eXwhzZAhKSssXCx6iJw2R/mdZZbgmoTf1A6st7kHLfR2Lj+3DZ1iGP8GcmTa7AS5tRjOM01Uqu6IXbXFc2h44PQPaZ3BOi28C9V/DJhUeLOY8lyktRUJz1vgktISe1JEyeXiIJce/HdnYwDPEa9K3Bml0t00mxvGQXz9I9dwZgNwVqLHHCv5mXbQVyQ+DtpO4upzZgrqT5xod81VlfsenNZpLCF20HXOe18Pb7ZaP81o/iQJOvpJ/fsPLYOUd9cLE+UQECAeu0UMRmQ1Dp8vJ38sFIfYePOVkPdNdqJIdWomt/SPMfEOY3DgH8cCT6ZOK1i9layzRJ2cE0U2bWdOgSyO8u8PM7vlTILzySidqgLTY+1HASqJfdMBjFZzFbbyBU8nKE9OyUDyJEohcemJYf3AvSmyF50RCFNTffrUQDJPvTDySiIjUUFJ7RIBlX8mdi/XasdVsRp5ZsapWG4gtXsjpEQsCvziHfoRU9+USf0hzmhclptB2bocO+3R0cs0vSRsKTnqGAouNRjUjQ734vcaBRHFpz2Elzaf8ZvyJyJ3oi56MGb4WKiZmm2YQ2+x11k5qjCTZmuDVh/qGK0VTDw/8G7SNI8qJM9cEshlmtspqXPaudoIqcVRHKlDvf1/8gVobOiPpFv8I/44CnwjOQS53q/2+FpNel9kppaHFAVwjTy+W3pLAgIHNoFLZTIClFICrMzEuFMzF4sLqS/EhLr6Ct95T/jScMg/YJmDpYHlUUVB5G9DYuWqHatr9AtfQ0P/0nIRvfPDhBWxtT1u0taDulz2a2v1fdWpJOebRAkYYVwuJsbufsil6KgSZ4XhHOn50MjKbealDUr2xPGkZDIcIV6lE+TKCRUj62V3MejjlRi1UpSixlf5K/VjLk4iFDZ3ke83IR7sB4E62rtPMyRG6qcZm66wkijRm1/ISJ8wd5KY3kWzish6Y/GbJrkNaxgP1mBSrp2h5Wy5hFXEDGufvq9URWFqss4I9xVw=';const _IH='7238224216cf6b436ef1b672b103c9a7e4e08e12627560d73be1be6d5675ce73';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
