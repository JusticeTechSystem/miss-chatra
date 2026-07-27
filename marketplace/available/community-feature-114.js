// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfdFmOABQg73/8qogdr2rj4rwJaK5tbe2CqDyWAIOV1mg+EKIK+rTzXbADHQgJTTSK72wGNKkpXVND2GMk84xkJWopncHypRCk8cMpQDPc8rU5AZhTUPjIOWEHzjsIcIn7JCqBcKzwxTzhUK3KrGRocwWxl42CBRTa8aDtkbVZ4fmlL4Kgy/wEeOuqd4OIZtPiVo4huurpm+OtrSjE0I7gBRuuNWrruHTOMzta4xWFkur7IyQhB/vi9kEFWWeyV9WFCsu1hxr7VtA7D1no/+Rm1rR6Flcr9YAqTOIU8Nnw/sw+iRIk7xZhFM16NifI6NFiKBU9tQZ5gNSUaam2WHH3P6cHc/55f8NgasNaFaVd3FmoPKq+0HvoJOSOnvPdqocegdPfCic0T6plKPO17T2Uh5AASS2D+99gl4cKlNSssCaR8zOYJtHryelJUX+zZxl6zxk65LHiARaUB3R8O8Jc0kkx34kU8ulzDKn4f0zKugfBU3CEivy6wYoOP9dTziTWarwYc9o+bSegOnfDzf/bisfPhSqZqU33X38oJIfGTTMfjaIw0woxK0uTqtsSM9NZymj2r9oW4I275+M/QvjAt/Th0/G32zY833aM+nFej2xBDb9UXYdw4qejHxqT2IkeVMXcIX6zqEhL693I8AEt5e54/MccMsFxvUW122/OKm9NE7qztMD0DN2Ibqbo9Xv45IOAUPOPYwwjIby01hVMTI+RnUOCkE1U5QaqCbVPyL0nG6pGQg==';const _IH='bb5b3d9003662c4558577f04924b09975285797c4e094cc4fd010839874523e1';let _src;

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
