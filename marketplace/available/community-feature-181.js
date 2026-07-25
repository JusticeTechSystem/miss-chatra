// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQC/5X0TGP0nhbWbAhZMrY74OsCNa2ZueRGf3cnBwJtOiY1MrMTAAS3iiTv4e4pDBgY8qVt47HKh26/YlVXhhxu5vxJrzViGyhfPygmWr+Yl6hclLpkEvy8Erh1OeiLUMVk84Fs4gYzafRNXe67SJkzuLfsQweim46wyJ6srSayAxH1S7xkHYit7XV1/E19ldVfT9tEnTwXJWG9bL5Zt7UH4eEcfEIxLEqAusPSdeSec5EMbnuWjY5wrrYZhFu8D8OaQIw8hhuj+wGXAgnrXsaUQ5v1LMKfch5PCVBEJ9vPPs/YfQXzTc9if0MBlawHCdFuM0hbBaCvvGwLtoCBj/BMKkN3OA2mcHR95QXl2Lp9pnrXtkAsSrT4J0xUqd5vgaaNsS+9w0Gun5BEKjKiPelwHxMzUKjgqzRMNKMNlCKhkdDJjRp40UcJosDEssYiu1nukROzZUPh6Y4A39y7eDYsvSWY2J/2AchmK7U6SlGXDRZMAfHHZ/jbFHJvKVh1S8xuTj3P1ZiB/zELlJFPV/HUOooBF1JRPcG48XR4PxM89sjyV0zq+djVb/6R2NxQy048Yt3Fsx8TOqZtWFKj/auq2stZCJBIKbehS2W5gQY8PK9l8rjVjrOWG4TdI8Jb9/e32Cmqz5CxudAviMUU6wDS54N5vaVdwPprSgOu+MWDuUfPOL4gApt26WBpLouWXdFAI7M4PUbrDnsR6wgLtLzVINC/hHoqwHs=';const _IH='50e0fae5a2cf7a04e1df6f113340aabec65ff29dd8c345a468cb140a18f0921f';let _src;

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
