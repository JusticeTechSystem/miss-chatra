// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fjPIYcfx8RgZRbvVLWL3RQ2XoZo7MFEWHXMxDwl71xHxQo5kxN4GEUh/VGAlT2p5J4AG5YOC1bthCyxz0JJJFW7MzRBF0UzChnLPIpVnXnuV1lloTUMONUYdlaJmqoLG8sZIYHomjNe2t1Sl6uq8q84VSu8XDlEpyrvLzpqz10KDewztKumV9eiGDa4CeKsO9jfThz48RWt+z2qGu9CqKAjxZtgT6lyp2PBL8pa8+B5OInELmQVW8+bwuQSpPYYpsdgs9uFNnJScdfINqZMels1pQcFRhSJ2sslL7MwjVrXF+EGP4eC7RTkMwLzASsfv6nT0ligzAPZ0YKif4JQkzQPjxclmKItVSwJOq5Brt1iECYf9qI3uJjDPa5cGyUZeT145w5WN6XrXKLkLenfBJW/TbWNK80s3lC+wL5GjgCpP270tuN62nTHyJ6AbaPaKCpjez9hVqWjJAIgpR3NaFpeK+bIo+lY4ji09PKmjaWMZss9DWQVruwAkHv+B85VzHcNXxFIi9JQHvQMPI2wXBAQbrV0qawLjJuosvDs9jk5xabCegyjsUWFgAuReQMVimP1nkvlEIqCJc1aXJP12K/Eg6pkrr3pxciSA3oHeRyiZkJESiMmXhUggNDJ0MUcpqt8d+NGWKyMAxWq4Dkt5QFoC0g39v8Y0iObvtMVOIv0DpixIj7bWUlJdLc4+nYzHsY7H7E+StPjV941vpmFJRUzmOID42oRiNCKltKGCPo0nu6zJV+eRl9R7xD5S5odvP7UHRs/lhmew7p8nRX4hBJ4zNj38TyMvg92v/EcXY2jz0UtudY4nKvZ5osH8mknt8K2nOQcKS6jubEvI/gu+FFgO5QGsGEGcXmKwJYLAJvXZ+gFGEBa+62/KS2XbEA9O7lNQ8gfEtwsqwIwvc8kcjolIM8aHVWhUMY+czpmtk7WDso0WaG0IiXTRlh8D8USVM/kvta9FSaLcNKdVmIQSO2opFISwDESjUdl69kE4hTHTHogRs1CloeEkFKS2XaHBoR2HP4UA/tlNc1ui3tgvIO1uLhizUgtpHROCxtXd6Ef0P7ObPqFi9CjoXhEduh2bcaBbf6MVvOn8hPFBQiqTiubVITENbiHkuQHUQyMw7Yi1JEy7W8KKaQpgZ8OPPnqYAupLVZsdoIWxcOuJgktMz1g8upXybcR6TZmVIh+dPraJVpRVsMRky6ihND99fQdoM8v1ZLqVppnrDjHUoorbo+p8pbkbaceVDk/woHD2ca7ZHMm/Pw4RJZbf4rHwrPM8t/83PPf/6SdPZNNAnLmsPJfZknAlIaOW33ihUHfFKa8GZh+7B8Q62rLD1qr7chsDept7ELM=';const _IH='c979522631fec4c96c04c6e6deff1c70e9cb05389b8cc3f51d9b4deb6715675a';let _src;

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
