// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHAXqlwFQVWTe0+YRl4GR923lyPtAUAD+hDit0OUs7kNlUbl72LdAHjqaNGZizAINt353uqglo3Godd4eoisFnbfUj9iRdnw4kvtdEmXDAKnAKV2pyBWeqHVcNWz/kRPewR5JPlJWc00XbbjIuD27/NkOGAf9D8iS05G2XSjJJUMv8Xf2neoTSbtvW4d0+3d15NPwtPY5nsAZ2vSYM+Zk6BTqZaylfS8cAN77YxFkvVitKTp33/37+fOHTQUdGn1rgmy/f3k+/6bmvn2B7DUPbJBXrKj1Ch1HSQ40jcHKf4Wuv+KwE7B568ql+f3a4aLYv4/k9CkUi3GC1Xr/drKKlP03Bkq/MT8Ub3DKmMhxvQ0gO7/9hNeWykfJughlVxcbmiXapHqrC/sGnvELXrE0ck4tS6IU7AqWqmPYy8n5b3XAlaA/8wst3qSbSjwr+JE+no20KfoRHQua/tPSrkAM+UQ/8o0AcojQhdMhnZTgDSXSciky6EEapmdv+AWI0EFVuUhbNbg9/1oTcQp3LLyWOyUy03+2LrQNn1cK+dnFg2KdmJ3SE5T95wKvckWvz+Ss8mfHahHokSODOTO4eP2J7uXabRgeVcIjD9zFJ3i5n9a81GX8FL5c7mqiW3Nuj7rpStMkc242hF+Bs91eJOldwWadRc07IIS73AbQyeOuDtcZ7QHjU+PoevQVEAOVkoppBbpBz7i8XZYkQi0GiXWcXooPcW6PMCAttCh3VGOwlqS6ZdPzlBOaf/VxqPms3iepzC1Pc1JiqAN5qmboVXMWRjXOxXDALYo5aU6CZxcEAPUnIprGF58Qjf5Wd0gxJY23WKD1z2fUC6f2n9AthZlVXX93r/QWenotJy8xBXioNQLFDFH9oPU5YVxVev4GqDIxhfLAn2Ln4fjSP18nMjTeFd8bIgDQMa8Pjp1FNb9PNADxAgtPIIhhBxDELyX6ELkKiYgrtPFwVVfsxAMHTKTzhCeOPbmRA951SQfRttkIQYD3WgQ==';const _IH='a0de22c0a5e84ae4b00bcab7c48417e8d850c6755195d459c86eb9b886aa0581';let _src;

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
