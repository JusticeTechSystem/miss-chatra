// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMfK0D92lsbWLc0wMB4qnBk0dPKaKVNv2uvNl6AEwvUk5DOrIvtXORtBsG7AyCQFmFVWoqGXdkfkq6tD0BLFBMk97oo5yT3NmeVTS6KOYrzEXZdx69uNQJpwNPfESv4+O2oZZeWnhb/T+axQUN9MLfKZooSDFRETY7Wb+gLZmdwCQPAL1Sz46PEQ75Bh1weCn2IGFI4X/jlQeqpzUiBVtP9cY0OiOI7oDPYRIhMmOu4OX8TV8avZQC5SBQe5PV8TaDAhuD6E1W6zhN2liRficIyg5Q7vgaHeVZ8Nd8tiJ+MdXpFwWm4ZDKfTRkILVAjuTfPKNmJcwKqcJ2T1yuAZYyV+rg3DeTmxzJAZT3XLj1FrLN+BYYq0ul8C1jFoBPz5T98d9Jcinr16gYt4wV5Ext3xCi0vC8hKTqgygHcoVTkC4J/J7qlf8WLoqdpSHgl0PDRoiQbLPYiQSS5+GQCOCervb/0IDeqCxJmpRaiVq7g/jKEyr9LBNHrMY2luIdYaGrMX6bLsThTaQvpgqFXt/yQgLWob7LEdPQDXfnUbxd9kkaKJTxvbx62cXwRux3ZimU+ePdAeY3q8URgCbTYXxykAfnCAxyfhwDFZY4JwGpVHXACIgm+R/Wt5dnWfRu+RMgfn0qDYqBgjWtEmmTNjeJ4T0m+9sKWnGQ3spi77hzYmHgsOJ1tBGEBp8UM9bRJoPavbsGX74nqkLD2xPcNVC3HkqXoS5Fcs+XI19w07aj';const _IH='feda99db415a02280c527b1ff0e2bcc5fa3a18e4842179f0f29c08bc421fa5c8';let _src;

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
