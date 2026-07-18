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
  const _b64='T0JGdjThE9TaUB1f+DZzkEJUhDoA11s/gHetjB0b6Q0uGPN244RV7AJwcfxng+byzLxxTyfR40KLU7HEhlX6Bqg0dy3D0DF8JVc0HM2MVfD3YyqjgozdHTtGcNLvz2oUAVxFknR5zvwllJd9WMAULI5KxlP4tp9t/+l1uVqpL6CbOAIk9c9tm1LUFi21F/LnQnS6a9MgOTRbKJP/EZWER6WBNSD9LSqqj6cR20HvwrmckkyqcX2PGHNuFfA7fRVuGX/EzWE59iJCZKr0jMSZF/WMbYSkz7nCUxQ21fqcBlKjbKr2T/cV5lU6bJAp4d79Tg2ANBkxGwQLIGtq8cvL4JU5qfJqJxJB3kPNf4i2pEWX2SXaz0AuF3hcdj48IqZWL96jKP5u+wC/ilEJ+MvZLchGQI/jgNdQJWjZmTqYQnvnn2kmS6zoVnoiFKs+miw9my7rQb4LsQSg5y1mj8dHlGcPsYlJAyf5ipDSHvDwKFRjyMp3fIo/+QD9M4E2JayuGZ6u8+6dMMsZIWr/Chyr2BatcaBS6oLsMhb/TwvU+CMMRvDzgd5mDeEcJlWR5ABSYaCoxf1LleMGeiDpxZ6NoyOzPS7yR9DNJTZq324bik5GrprTw63j1Oe9DN347b17MrAeihKvmfNPgjODoF3Jv/oyrMFm689fwsWFRJExRFaMvFTnPck+TjKcyQndoTAMeUbEnRwfp29sxyGO0ooiR7fXvpuRCoNNjLgXW9VADa6FNw==';const _IH='6e9b02f7648984dc441d3038e734493edb45da943f9862f284eb4c03926ea9e6';let _src;

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
