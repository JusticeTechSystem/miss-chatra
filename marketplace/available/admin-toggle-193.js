// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9GRGMhIgAsB7jp+/xt5hucwyvRNRUWLqqaREjRKzIluPPcFUw9WUD5WPkZjbQ0EaP+TskQ1qoCD1gXZlF5LzrSQySPfh+lRMPY5f51qIj+Q56Q+xgxBtCMWhrB5fv9CR9fYKpBWqZmc3/x9zDRUH8s3pA903sUxXXokgVz4wYUyLWNm19pl30hMp6C+2FfaN6DGY63z5YJdZKkvr8P5eyQA/VvLv5946tUw0wWD86Gz3rVGkwPuxQzCSsWCA8cAX6wq1sHWLz/tfTbwXyOaJO5v6HvFtZV1Mby8KdcZWnvIjM8pYx89TdIo+bHiEBHoQBDOR3V7wVgVEm05CTuSnR3nFU2Kl6LtmtsxVe7BdVbZqISIMeacrq9m/obWF9SVKGOoH/stSQ38rma3rGrAQ/yX9BM5fjFVxh+O4ne99rZS73/xIpDuiwtYX8ERQKhjF38lgS5tYl10963gAC8iP0R3Bqw/w4/rDImxDXP1rfJPwRERI3rh1YTXO3fsSPG9mXmKWAl8hmyffdmTd8azgw+gNNejnfGOUw8X3ogEDiS1lN3D5F0cSyrqhzStwPpczH3fEUB8TdgcEo0aIPGYxzBc6wchsxJ3kQE7rjdOYLHM7Px72oXmRdUCU7b3ZiisuQf7IEFJQO1AClvR1YRoqhCuo0KQMf8hnSfDTd3bE/ZLXt4NfjFrbLb4z47heDyNtkgOy0B8kqNj6hxmETHkLcHQZ8E8e99NqOsWBZCqjLLNDHTI2R8m7Szol6f71XWv8JQvgHtnnQZEdpzURcezpLZfO2AUmhGe6LQrIvWvN/QTcsC+grx9qhGRwUla7Hpyz5F9gxqdjX9TOtQYvEo1wZa4bjEYKGLm04TdkewxlVqkNUMHzoQ3fvGaXrGE3HeE6R03b3RYhCyvctUxPZEzb4+m/NoZjN9RWNnByxqU2buHIb0kgFOOaG7SGPfdeHpMSRyRFqW/oAWN6lbg0YS4vyVpcTanjnCUr8AZZ/MkPXei9m+3JnfjkcAHanlYMo3n/yc=';const _IH='ca65216134c5472121d51331a76368193cf9d67cb01ff4acc3846aa2054e4d82';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
