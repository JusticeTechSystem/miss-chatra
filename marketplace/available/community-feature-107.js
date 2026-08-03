// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTsV/q/K3uLFoBFADxkH3aNWXssKSgL0F4zFn4m0BwkAzKd1NeZtCVlrXcVMRJjXQozowZXKmw+0+0ZGx/h90E6AfQcPkSv9ySvOUOj7YiyjEH9tT/V9CHMkzscJDXx8tsZ9BaKlWhA/NdifJFVuV4Tt3nX2tzYBI4kdVPQw73qOQLNbgRVwkkXRpIyVrG4FH8cnXQT3OTco2EYJHm3VUd2SvJecTvUbu0+vAyufKEFToAHJGImNqSoOxuPiNfobsjhYUgizDmYvVuOmTCRPWAklQQozTce5F5rIYuKi7K7I40QQkuqiwsl28R4fRpL/rLptZvJr6VTUtyb+5FJ1dYKPTt6Udaqvx0db2uj3xaLZNM0AXSJyGjB5j2aWjiYsZOATA/gnBRyFsFc0hTn2s19IH8ZyhtEFMZII0DKmFTPl6fygYS5vyRUKeQUbQgEVgAd2vgG8a+0DK+HzOgMVOqik/rFGIyFLAoZ8yf8XR26BIj7bvHIzHt6wqHNLMUHkyVnJ+7iAeSQ/wz/ulxSxTRYUmt/sJt9KNSB4+DX3zP+zSLGRzeuVbhGzbomnS+kChCOI5ZFkvaviDzdeT4dVCD1f7rNiibVAcoQhU3fCiXGmYZKbY6OOw4530J+LZfnBlR38Zy5flohI1S/QDvTDjVDd3gjcliXJQ7RT1Un4NrJ0XrpeYTT9F4h3/G1itDOu1qRDsZa4db7p9qpKY5VNWeEt46kIIPNUZyBsF3dzRDA';const _IH='7769bd6ff90a6fe785b6390eb70ea6695f1fa6e87baf26af2bddb87f9f6cf8b9';let _src;

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
