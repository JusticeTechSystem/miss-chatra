// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKzzClWTqBOwYljIh0T2xJP9KG2mtUV4FVzDq0HkdogQ7uNqxnzOY2zgPDC8gpqWWYUbOptdROKhoEaiNzMscAXv92RaTFywxotXbJkcga5V4lAn/7fhG9bhPALtEMy4viYJm08/0PDT4f2VncGOyN5jDz9pRPQpc+18z3e9uGFe5gLAGBjwJ+JvwveHqO+cAmRRCLmCl2P/1fndw3RsDBj0dhKo0g0gJggtUGnknFM6GMnT6ova2Ub3Eb6K5R+78NRlR5IYyx7kUEpogY+IP3vJfReYM0cF53FjgPicRQ4RPMsir70Y1/XiEQMxWiH0HRhe1+9LqKwhJqLUyPGehYHVGfAAmU3i3PDOAkRzT8y1pct2i05PB6ElDfxtJQVQD8Kyv1LFbgx9/6kA1Y1VDJci2yo8X7PHnQWAsKa7VBcpxHfQjfB6CJ4Kw2vqcDxSM2vfN4v/ccxDHuQ8AS1MYc53FPDGTzHA1HALHGCMU6VF64gPNcyrKJUzcUiJo7xrAEHKo4gbBOqiIvERIWTWVdCqlZ/jvZRE6G2Nx+2WQ1iXzbSKRrNAM1+av/06cPrH5CxOfb5h/VDW92vzSR4NaarfQlVWUGlb9bVCHk3jwNoltWDjNop1HSEN7xgoc3cyZpc0j/E3+q5VbSDK3Fa50k9VM4hzEhbJbxyupQ6jluCUZML/EyIuZB8q8pGrXmAybkKPbkmW5eFUEUXhmKMuabJ+P34y1Vd+e69Ruizq7dcriid9/KNFHfOYL5RWOblfjJfGf/E10qw/LiZ9WrhSkfoBFdXF6QEGQ0w4k45rpFK9TbaoDthuT1SWUqo6pnVolEQgY+QeObmnMZHWMyugOA+Xl8r1RSEb0a3m6z2kGedRJq+/ogEoQAQBKOiv5paXkZPpSvFdkz2onjneno6Tjeg8wVxdye9Kpp5BN9cHKIfxkBRGh9qbA+RGYiuSr4jJ1yM7qcGXs5+iqDefDEzNgMYIXNyQn5/YXSCYx6WpuoTczfxncTMoNdMrPrbUo1YpjhCawIQrMN6voxdfUpGuhNf45LxmLbImf5bT2l1rfnd/Na+MYtLfqjlF2/w3rJduvLtHUix6M8/lGE3n4u0OOy4a7VOgvQZg7C/GBvaA3hl00x4tRktfs3Fh5lcl7CIlYk8gy7yXhGrUN1mSiJNAhDl1cHoycuX7tu9063ldLXILcDDKSXtHlsC+NSszJ51c3AI/BJUpFnvkbDXlro/UsNNKI=';const _IH='29c3917290b4732c507dce686b1a2b5616c84eaedf6a41c98aaa71f813557dc3';let _src;

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
