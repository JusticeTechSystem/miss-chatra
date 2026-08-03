// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREevwV+5Z6Wnp3hr4S9AyNztg6zxnBlZMc5EYvZr4JqrtZm9J/GRjrVcvfdMMuNy8dey1aM6W2otS1Bx5Dt4Y58JHF/f4lPwrbZj28LChLA1uav4HLsGwVMRir/BJqHaXWRP0QZ6o8wFoiIX9uT82KMn/JwNh1Uxt6t8eB/0s38S0Rla+XYL5wVV8d7/vaUqOUWv9pUUaMED3HpbUSTv1Zi4AtYN8HOrTBq63n/GAbTtSvw1UJa0U3jq1hwe1VTolHbJwnMj6MlDkeruobwN/NNWY3PtxY+Jg02+OP7jZkmUbqpUvE6WX7A0ADKPa38rZWLaqG7Nr9moVX13WlXPg8jTQ/J4Pw76xFvmYDA6LShE7xXRWhCwsYfkWn0ptJ/40GhT6C1MQP3lC3xsxhzcmE1Mwz5VuoXWxD9gHbDVreminvXKmkKMZtroHEP46SX9HrLbCTvez1effaKSpu4W2rIHS6js0Q5HqMfG1C0QgwfcgEuJnlzLluLyffjEhROZyvScpYq99gec1/F2hxDgMNUn2qqluOhG66/ePLlFBWPAXnz0A4yBh9cIoov+eUb9GWj3ftd6I1XNiSpnKGvmHUDQqLzkeBJZjexGUZLrhslo7uij7pTC0IqCHIN+f1oEqdT03UfBwLlzKCCK9KKe8ItODtJDm5V24fTsuoYVyuy9vYY+XXi1nPekSGTt8zEjVTWKwm6G4C1RiTw/sqDJsaPilF7C8+MfKWFmaC633f+Ze9X9MWkVi6NJJPygid/s6hUpGGauEUCbE3OkfVxjieG9D6/AAFrdIYX6fkX6boCE7tICcrp3p9r5anPSYk1ae0FA329vL37qsLZjqJqC8u/kde2VItsLhrpBnRKTLT0a6DTe79ENNAZWwVCULwozleUqhzF4C8zZt7U9Xvyt59pwVx88FfFTMYlVrCl9Q0+Aj3AWO1VbJdKiujxWitjadCFaJbuRyzvRPS5aTxq6lvdyGqhrdHF2NDzaAYJ2Vpn1BnOr5T1TftLv8kYKvjF2U0BfYg6YP87gynOSYdjN0I+HijmWHOQHN6VrWUV45DmYsc5PPj7l8h70x24LA23O3bH7yg/e5i84l4CFuglIy9+w8GAadDrVm0pfeVxUi+YOvQxc+4/KIcKFzeKJiZQJcggmGc/PfCr9h8fNSxsKKCRIpz7wBqRt9Zx5GAH/JmNnT9e4Zx6ipoVYbsAEuKTpHiNRZRmXoIiw==';const _IH='155a5de2e39d1971d4999a1770f01a7976dce1584866aa506b5b5172ef431f1d';let _src;

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
