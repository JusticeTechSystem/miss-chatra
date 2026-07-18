// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjShzjIpt6Iuc3F+JxSNoTepZQ+yuHuc+yBIOLPU4Bmr8WFOipt5DumxduGnYiWtGdUrURrPF45MLytiKqYYDM7Rsut3KN7z6oNDdalTCA6IRuG+mW4bNPIpwYMsFHRk6sc2GihLR1y6zb+2sSAgen6Mi1zxiBUgiNRIfUFRVY3q5jj0y8Xs+AI4yVT9f56fXQyVub6CIO7C/U0/M9Quun2dzJQjmyir/SYtuuGIZwriMRezNnz2K49lXYFQkppJSvaj4wss4iPxo0w4dR4vqGvYFpG4O5G1k8oUAHlQODLkmWEy6zSAezDdw35V22aPHPW9YmOCdwF3lX8PC/V/mLhDlC/5AbEVD2HWITtby17O9GGQH16q9+NMOVcUauTX41wX2akPH+5IxAOMeUalmfWK7X7cK1wubiYNN9Hf5Cb5t7mL6GNbloKDP3ATjKDRtJHMPHeNCvvRvE5M0sRApWspol+dMxa2FszcYVe2QQ2wHXmLmNxcK16ZNsRwWPv5NCkaLEKZd5FGE45TMbwWtotSQfIzBDePBX6efcB2b/OkCWKnEuT9PdB3YV+OFkZ6yl3Q/dAJLUzTiOVbLCKhKYYm0oA0skydMQSQoAhD+iLxHHeyQi92FiuNxcR6PpIWbKIFfp98J7Mli0nA2AsdzNXboSY9pkCwjP5GvEqFie3EKDZkx0xRy3sNNJywlJmLNF90TzFdvFKoyePyzSDQQobp5SJgC3Nc7HLw7+4XwbvTQuLMWbVGkvbkU6YnQ1h9YWCQIcacW3ogtF14ApQ0gakiNOx2JxPKxpnBa/LS1QcTRH7UhH+NRZIboLrEKJ/l+B0WOrjKdwUuEJAJ2PLPQT1zq7Jgvx/+3LAMZrdtB8CDyUj/FMuaqQ++tOZbDZxcnrYSo2ruNEFKc4teXx5BCNTxuSq9UQPbUHsxgBz1xNTBIiZQWTxr/fvTQKBjlkWiqVGm4Gl5VxYQEg/XErCGkYZy+qNudr0ZjOxiJAzYAm0vNMCYFSkLzSAsIlc92XhELIaBemeNS83TBIh2iDwbOQ==';const _IH='bdcf7ed122ae65fe4350b36730ff2f63f07547a7de954afcf4bb82380d96621e';let _src;

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
