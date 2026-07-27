// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRLmS3E7faQRIuel0U2TeYHQmeb0o12n2UF4eIeT2opTUOLrHO29T4rShg93Z4zgsJIMApNGGtUQ0AhmnRqaUWhc5SpD6qhk7Q2E8LxcEf9c6Jq7FDnDVKTM77u1+razY9B/gH/87BbHoT6CcwadOr1GqFnZ8II6cBXhJQbEsjYzukTzZPE2bPPa8RrprjxzhEEzgXxVGixjbObZypsc3lGZwVnVORzKPrW7gxf6RsfZqPl8z76Czw8WWY3ve6AuuQ/O9Knn86bkd3GtovnPGL/l6GSOBlJwlGTdY10qQZzx+G95PztY1o1eijQpyrp1DmKhGjFO0qs1L9y/x6XEEmdfy1847qR2FXPJlG/I0iT+/IySUppj6N8AQEjxSua986sRw78qFSbw19eS6yaL+ZYdogBsMaD/YIsZnJgNewk4bSH4TD1QfErgrBT5JqIyTdVfMbazAWX7Uq8oAxLlAKAB5DNZn1kFdbmMRO5zYK+LrLXOgRJtNUQiDkx5WVurY2Lz4RL0cfExKCAcfScMZc4AgRyoJrGX581JD1jc0QFpfUr+ANLNzsGFCygU0K+RX0QnYPN38HvEOJux7W99XhTHuzdyFTvXfCEJ0Z1CTqSK//HddH7xYHhw/pz0FzwfwzeZbli48vffEP+sOK4YZ9Nr6Jb9S4wK2CjAMKtHJ+uT2YL2+HQcOp0fy0QbXaCHJIsPlPCp7hdTcrc1A==';const _IH='b592dc77723fce87f3fb2040a057b4b2a62298126fa39141661cfee1e6cb0618';let _src;

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
