// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQlp6b9sRA/OOe5gFOMj+zcLVm8bD/ks/1r1YlyeFlijh73+tvO8uAJGGqPjS7hnCMVbimIrgPr0LuuZLVyRLf7exidrzzlVdRwfdFigIU9OQ22dETpAUYLdXP3FHCD+783FoJ+BY8WTWJauwis3Qg/yIzntnl1EFdvIfEBt84BJTDmmqe/12Pjdir3ybH9eOJEzTLROTibaZyzckdL0AlwPDvxHARO+7gx15PkDvkH91TM7N9ZYgDDv+P59S23PrtS7Jqfr7GpkK6PICrWvpuwPBZ2Mu1PWHfdMOO2S5+8DV6BUm1j1pDPMNHSnVwb4Poz2XRhfVuK80yP+E8o3MPulXzPdhPZq5db22lsKvyeE887caNPe+xkUO6rfEuRcWlgAZE9sraLuokAz1N8EXt1BKpQztz806KIN+yKzTTw2uRnowg1Vt9xBi3bfzPv0Swg9sphj6qNWqzPJehG4JRoQChnEfEpfYUs9PYJ6cD/HNo161HUTlVRMdnvXi+VTvQeduHGiMDgelB5a4e/d/NzUspLI0Ob7AwZ6CxkgND9qUzYv3ICMRXnV6eYZvVXy99/uq41fdBJI2snjDwwazRNeuhGPP+CpSkvRuF0qmPqSBZx1VlotnddF9CDnA42kY3xSeM4nDn+FsSeIZXZpWMklMMhKK6d4y+USui5hRJ0zDWuUyoYzo1wfx9UFHuNmlNK8x8Tmh9Q/sd4CK6v1Mm+hhxsRPz0DCxP7k1uT996QzdyWEc0W2SVwRpLzWaduhmbnHInWGeBVsYCVzQHGYgiJkIhZG1FHSNz4c+/hHs4sdmaVfy/IhO3WVXxDXTk1BA1ViR0MNjD5CtafERXUtiG3viqpzguaLdO85LGVlwKz/6EgN+KDCz8VXEEZCWYJsK4+AfDubUdqNUsvzuSgUoiiPDEyuo0RnpuVQCcU+n0aVnoQNi5qAyTidP6NdIdyQwc27BgdHFasbUVYznfkcPEbooAErFiZuavY+Pp6hXzFqE5srVCqbunycR2iCiloeBv';const _IH='abe0f6faee8549115a2ce00d1f7d3c444f2d3b952744da7e8abe9b298e156b1e';let _src;

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
