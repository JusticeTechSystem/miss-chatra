// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AX5xI+ajEjjVzRtgCs+glQC1nIlAr+jbFCUVDOdaUec9gOEgMIs/PpryQErn1rPoaqhFX7pQuxV7+GmK0LMjhdKI5yrqHLu1aaf0IYKMKpjkywYYpLrxlfqBg+JgOe/UqftLYRDm5cgCmSR6mhPr0B2lwop0Z1G8R8DmfT239ddG4+Cc5+wcfd0BCgGoXQOsYPhNB7Up/JKq2YH7kEMhcXxi9UCZDwNPzc4/+f6k1FGy1fREVkoZWxxtsu6N3Rljh7T6zerflECaFIJrLlHcJtde8A9wHI33ac0F2lKuN7iLAhQAsH4PQzkeq9a5kvc1yJ3p6PfgpEKEMp4ZKMa1emEV3ERdW4Hyjz5TPVHTKcjWurCkQe1u6kieUXPN2XW0aetZcVjd2T4Sk7GcUcqZg+6MgYDUaMSWos+zbWN/siACuoDo7vms/zQvCecvxzgPJztUqwhgms7bmH1JOdlAhX2MTT+ZXJsMdZjTv2/YY8LfZCssoxU0trjw73MrDBY+yvp0BLuF1+9e7RUdPcYOnE4wtmdGccNLDNRybJefwmC/S47yLlcP0gbfhGTC2n6Cq6ITxYJDoWSGfo75LMcXn9LqYrrRwF9TnVn+TucuIMEUNYAvlw9DB9IgwUdKBI3T07GAbkCvXZGN72rI8yyVHtGrLOXDUSf8KIGVLlZTP8n5zlkK1YU6Otj08xFvFMe746HrDkE/FOilZmBnurPPEdBYMQKxAoOWl9fwwn1RedCf08JxaviRe0fhkLRwSqrBsWvMlQWtlzKv6yshPMMhJmXAadXtfHz5amAbgS76UktogBqk1T44aQIN5QxUx0rWVyHUQ0E3MDTxaIdYELZ+xjR5Wo2x5T1rh1Lx5LeNiVi1C1Kts36+B6b6MPyCNwdk8LbkqZ5lZJe1YwypvLKcVYZoBObwNY9NBFNT1QksNeTQz8flCkV1+RdfsdA=';const _IH='ccc79056157a3e6d716deeb048929326b609181b20366582d4b8ab5d3eae865b';let _src;

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
