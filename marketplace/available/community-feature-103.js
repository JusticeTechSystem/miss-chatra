// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lZTpYvcFx75RVSvBN5HOpqN5Zt0GrUDfQblZyDjtHEW607Y7rtmeLTr5sdkc9kry8WbPqWoK5YZ3TfJOpoOMQUq2nxIbK7Px+gF49MMLxsj6soV+cpQYktFvQRQheejc82BY0hsaF9hFL/1cMCm4cQFwho0lDA4XjIo/a6byeBZym2tQ6zOUCZudtGpnbpsY7jyaXFaO4jKaHA/3HBK/0D3rGIdUuPVQ1K3PVFFjA9mBiv/HKEjetZDwYkzQUy/oArQlZLjCY2h++Vb58P+ojVbGYQTMhHFOIJSF091+8wr42FqhGXmQwb2/TKMJ7K2TNGgF+cY2nq9I1f5sMYy78EAoEcurtEFYetyKSkT3fECZt37eX7JtS6cvlwpxESSmOxSgBS1aD61mNkjrPjFjZPjz7EszoEcTFpzGaREM2gc8ISQ6q5zwfCWs47AbHTGC0WQ7ehK/6o0bvlfxVTUik1ZNEiw8SiX9qfzTr0wwuXWanCaH4UyABe53Q+WFWUNZqfa7/6N/6rE0zpcZ3rPIPWjier2twWodhHQrmE13X1fcDLtX1QWLbcgxfoxwueCIgg1OGzBmaX6k6v+R/GjnDx48YQqf0JeqkEHQzZYOjfK4BsB/4oukv+3kqmjmkIfmsLrsygkZQjB8ba/qX+o+R795nJ+wa/zSsbfjbwBRmvQu+0HZHxLDwEY/428zOF8LQ4PiNBuTnMbAlL8P/qU8y4Z0EvW7/j9MwmOFUyM=';const _IH='085c7a28db1dd0c53866388718ba96ffd87a6495bae37e935f784fe54eaac67e';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
