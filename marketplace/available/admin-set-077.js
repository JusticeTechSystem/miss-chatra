// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+gSngu05zNKEECHx2h0ScnXLvsZdIbidEwxc0M1awRSxq7PrXJEisfc7Yr5xr+XDMVO41m0NwpTxjIcAxZ2jPJv6vtFo3aS0F9qnh8UlBhrBmsxP8Vh6w+oB7ojpJc7RNqm8ZxfbkibGeNBHlGrVWs14aABH+4ZM81OV4oGT6lzRq2p+bFDIkLo6rDlVJhupigdAlrP/It8QludvWH8Ml6oZ1JH3fvxPB5jimsgGbfdiCvB4oGuBOsknncXKqk1TebkLWA9MHuCYSoOhaCIRI+RzdxPGIcrcQJKGF4UmQas5p9RSXvHhBmGR1qw/ywdv4XNaV5UBj3qEAJyRwkEGM4DWmtYw1LzK+og0psD2nl2/Vsn5iAVUk3jpMh3FDPXNcYtya/TduhEKXibQbpEOAQ/qu5ZWPeLaNBkVvVd0cnMuN50iLEO/TsF7hRikEEOzg9LmWbQRIQphyWpxVtav+cqKpaOfLipIfawmfWWs2Q2btOnidYALVi4TI+Rtt2Yp4fvLSC+8YMU/hMNRLuFEVnkcaZrs4v1NOeiq/3oluFQwDkZgEzh9i0xmHMyyG46ocs/6VeXtMs6lHaI8memVI92r0XjGc982Qahi4JZ16VNeLKhoY3Sn6yKXJTkAMrsBk5+n5j3eN9QJLs63hZfxfiYMl7NWc/TE8DhKiICMsH7TOwxyRBXULNkzdggO0M1de7fBnpzjaggm+snlihNY4HY77yAWN8BN49qQIWofgtlvYZLcqcteCzKYftuUCCR4vDcwOMKsX8DG6dx6lqL3vfPrPs4YzgOXWHFNrjZ2H2D7EgVrZ1q4JQK7nmtIw+Hwfi1f67kut02I0GEPJ620WoFpsW3RvEMJlntzIgbJCTyHRW0e13V/bCuLVlNcV7SaHsof0kUB3v/VNroGFN0xuXzsZsZxAqbGvWWVZL5WhYA6Ygw4m2sWkBlsM+/pzyg/hGsc5mwoS4j7aUirrFBbJLGs++0xE1fw=';const _IH='d3044bd8cb474e1ea229fb91149d62ff3c5307639621cc081400a388183896fe';let _src;

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
