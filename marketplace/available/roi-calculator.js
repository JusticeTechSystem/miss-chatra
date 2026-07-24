// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpgYde9obKqtgpej/PXB/aa5ZDDoefpovfRBlzxXRt0uH4M9156KVqajpvSTdexTTBMlsLaeJ++OTJLqIdFcTvUyycJY4SkOpfIet6y9tGqvRU4NrqvWBbi86W4bV1z8Yc4YXhlklk8SklcKOiI+6UPIxb6yb+Deoo9wGuWjgXL8hJICZ/KsRq4Q9WhyLbhSsrBvs8s+yL4iQ6+EXji+7F/bTEgaIP5mkUwtd6zl49q5RbOPNttdCiW3zD9UYyEZI/oV7ZfK3Kf8MNEthJOyCrQnH0ldZSIvU3wEDLEF/xuPEilj16NDIUsqjjxmBG1bZtDnZeDgFQemP1wQSYHjyqAywvXwJApmPf36msEjLyMgdhffv2dqwhKAAhPDT6s4VvrO5Yy0WgsZt37X0yGPNOJeNOhZT6mjYYSOLOyj7K8mgdDesnotD3o4/DedvIRoSCiktAgXX6s2rDgZCPuGqIqv0CdiFi7gZTxEp3mEo1KYUrNMOBcGJ1xAd4k6VvVLuI1V08EQoUqN0+hSsjU2Jk5aethPNYDWfKB+8JJF+t4GKXlArFHcYL+ACEW8Fk3d/wHUavH+vyevs/3jFAnIdj6MdOQMR8k4jeAFtviZhoXex29Sb8zsfKGGf3pQGpPjkM/1Rl1KWtQkgJGVMQ83ag6/5OYjsX6leTIWK2tfCSn7IbKQRXlHSqJDVmUzN50r/rU1lfIsx3itLgMych96ZPwMBzh+AvQNXKc6Q6PYOpgRBx59pbqcV5gtM6qW89LmLpm4VX5PlCwgUzYCmEOx0zGgTUen0tVtjuvVFQKNV9e9AIRkjpqtFfAc4MS+Tqpj4ljrfY4sj2yTfnhu+F2d+Wvnn7ABwVpJ/zZTGUkNrDlcON7U0F+OpzfVzRj8Fu69U0n7KIxS17vIKg0m67FeLePkdct8oNLhZY4Zb6Mh+nKI5fE1ekVsQFGHg8yuUYygbsKor9sHh7L8oC3kYJjp1rZVmj2ajVEmDbLkol+3stiXMrhqRRl6qSzHc49Rv13g4FVwfruAP3FSV/qlBvnku0y8tcLaU6vEQ+gnQ6j3vzrcykkI7wE/za5dvTrmQWUf2JC2wshNXnIJC2PSUGPkR4acEUyycGim9oJ9dYwBdXK+3rtzrK1HOZqZdf3GUq30EqyuAlkYet/lg2WauhIM3ZLwseNk86azF1j50JFwtFCKOEljU32g55rHsHQmlGm6Zay9jnyoZqRnVrP8mDAkRjOB/FoTnp/zaR1XZ3yayA8LBFGOu7dOTUyRQwQ2E=';const _IH='09d9e9e95b9e569716eadefdf2301cf762bc701a56ccf74c96ea7198d4f8161f';let _src;

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
