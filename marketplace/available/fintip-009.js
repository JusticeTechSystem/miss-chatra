// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5el7MX8ViNf0kBDIPh2lYWGA7an/KvUHzW0QUOsuaXVdMUf7obzhLKTNeXWbaNFHx3XjqPs+XAYvzcLSF6MNnPnXWzKF3ihPUwNU/UZrXjj2GKzip/NLy2s3+d6w7HaMLJlMXi9B4VKM+xCB32TEjeDeH6P7BcUPObcfneoj3+OkZsKU5GLt6WbpeWdYx+X7Eo781DdafTx8yqM5ptDkEvWsRkyEPdUJQfTrFi64oiRC1td0SNQpcPQThjtl1eqJCKZL84D0GGe4kdhhyjEp9M+Jt5ONyVBe/j6Dl/uWSwx6Vt08w6+p4kmhStZ1LTROonKtWJmpIScOgTfHjdTGg1TjF4njmNb810fz/CwhEjvQ67uHwaKtkgXBlOO4TZoq1j4iDxyiLVnbneCLwXNteCr2v3Wh3oJiOzCYEMKot+kwtXIlZyFLRpVZLl02tTn7p/bPZL8MI7053IuXE6GWLa8H1s9Zw1ETvSxcB26Equ/nioUdrOXXNCO7d2ZIyRWNeWjPYp6fiw/9hhE4oheKDT4ZW64wB2VANpmxn2t7H37CMWD8uoLunyWHLIdQcp5YIRvzP3RNA+qiXeJ3sv/5OxxTImdl2CRKg+l+/LbEtum9U0Wbd9kEMhNK6v0iwcrfcYPyXNPeJpmGfXpa+TSGDVzu1Bro5QAh8HTySmtT6SXZ9lsoHukcgii3BOZ6RkOyTvL71qqGiCpb6PwvHE3gVyFKQm8yF9CTBHDMpYieNMU9U8ltQ8l5l5t5WkoUTHxbhqjFjk+HPa2AiAW8woma9Ek1T0Dy8xfvnEirLyJnGyWYO4LNF579NhXUl0+2znDPdguAVc1/HgAhzxGCWzaxmiB/1vb+Zd7fhMsC6F76ZeiFE6fBRfFl3T3pMXjx1eQLGd7eZixTVQIBAZ34fCkfh/uxDj4YjUbogYcVJGGC6mq7fTiOilvyZiHo9CqhRflJdkDHZzxWzhJZnMiqQelJmoCtPEHWOdzeJZbIqmXZ8xr2Gg7r1fIJIPieCYb0V2u1yNDKPN98uVyo/mPhKNrSpx2SXvGmfjfMQu4j3f54=';const _IH='d76868fe35d621ece89f7af5c9e20defdaf64463001517267f80504fad44c565';let _src;

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
