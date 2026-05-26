// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iwlG48ZSZLUTre4HqzfjtkyRJjpUWBGTf6m/Dq2AJI14a3qyQG+cK4lG2xFEvIFiWaK68Xu7H0RkART2p8tg0EsROtiX9JLwRsSjhzegLvNAaE7T6WwyAbanBg1eMuIpZdOMGMD67S5sPDOoAAbXF2Q3z6OnwEipGbSdjb7UhwIszPtQhBmrgRkYJ8WtB4Ly3DjCGRWnntdIMedGqlHI1rL5gqU8dv14eloves/RlH3Wpg3b/FSqNs40NhMcvCP8U/v8exUimwIaoMq94AMGaTwELCmF7bXZInNfd8pvX0cUskOpDJvzvBoBll8B6UnwMruYS7dvERl+U6vXPdryfoxSF3U8QYjTzwQqLzmjL072LnpOssR0/ElOIIWdHCW3NjxNAQON+SmDlnJ+bArIQKDE4JuOwKgbvmk32XAllPF03F5mxpb8yLjQtYFMAWHEw7vfNV8UOXwU/c4dbifHlV00p8OyJXXkJoRli5LLntbIdXtf74nZhML2LyhZdfmtUnG4f3JotoOdhVigj58E6wykUCNUfSwmt6kDGPyByF6ZxGGDyca9gCUvpaKD34tS0cnE1CgCfdFF7iOra9FOC9e7WzEh2yauBf1TbxlGW2cBUCcXS0bfrS44ZipQVKqVjwTm8sLp129TkmODlxd3w6CEvrY3h+IEMj8ZwvjqPWDYTTmonNVXjKKyHCCz1G5X3a2v7QJ22GBZa4hdni/y7+WWIDWKdTwCqrXPg7/RkFRcQMdX32Wt/buRjahruJLT5TI1xE5iyq3FBqOjHlarYuUjy3R8CQt1DJJNzXZpvNkiX76W2AAEUARrXmBJE2ZMVurAuUTY2kr5bF0tWA6IsY3DLNCGzo+2b5d/rQCPI58amDt3UR/pSKR2bIloqpQ7nd8kmhO8CyX9bTS7Yu2s3B3JfmMGxad55A1ZnmB2v6ebvckSI/BGgGsa2Ev4Q3AuCfURoXLfF2SkVUi0bGVMEVGXTAMAGWnzmXrVExbQ1PzHKqsC1Mk=';const _IH='e47d6e870b991cb42ed1b669532a61b5749dfb144661eb19d7eade184a95dcfb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
