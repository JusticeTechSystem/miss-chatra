// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjjEvP40fTLxcDLFZqwOjMYqk4BJsXQEvvNqnoeb+cgjZoX3CuKYK0AXSJ516bmf4CjoCANcs6xiOyWwuu/KPsC/fPtNpJubbIWDuWnPciO7nqg3hSnsd/E4VZVzqQdqAVsemIxgJJ522tfgs+fxH86fGkr1Zlygm426mM4uVKcJN5mLrr5H9GzVFP0Yoctj5cVE10NPrb7/qu6fI8Z+Lc6ceqndy+r1q+tdpEjTlPTql68bOGVem/WzefcDpqbQaaQ24ArCi7WBKLC7gkIqif9EChakyXL4XOvmKMFB0ZwCx69GFeHVBj6hp2a5/paktGo+Srf2d06osrlPRJ8bXtNrWmn5dr2Rg33GKxQPH2DgtwUWJb4UJcktPgj1eFdMSW4FscDiu+dp0eBoa+AxlD59EH+CWauXhnZlSGAi+60/H+d6K/3TW9mijombWUlaKcKdg+ZsuTNmCMVjglix3Yz0n/ipD3Q0V1+a+AzS80BTG0ZPqlMEs8pAy4YAtYzxVtfFXQRn/tArFnMf+ViWjKzeMmhe5vtvw3CyCkNcHTB7oqV7J0avpZlghVulzRHohqavmnfI5ePxPAUROS8cyu658+aU6GUA/kxxqVmNqaYCGmnec64a9GAOjJigAs0HSqzG1hEKENUaZ/17ELC8HPdGIgTyjDbJkMSLiepWXFCzsmYFdTipQnrtQ6eZN9BNrRbsPQQHrGkoOM5JMjgRjZXv2swPimLSh22tKbUeMgUwLQSFuVUCw4CL96h/ykh0urLDw02Be56onHJmKoos3ycRkspNHZYDNNiim5NaQ9jMV7S1HmVM7Cgl6rdqriplIpgilKE4pnKwXUYloT3UBDYBkERISZE//n8CAc13M7eYv36XdL5onLp/BvNPsWNH0J8kO/9bNp/dVl6UOKhZXUe5kyGgk0G70Hycvt3l4z2GTSqdZfBn6O9mBLt4iD+Ien3SLTMNpwcyOT5mUSpvGDsmQrs0WyoEpJ0YwAQgSAu6zaEnolbXsIJT1RBeg5HXjvAZah7SkQ6iB/CBFSTe/5HHmUMQ+0etlLxv3Rk9rTxFHkmcCNdf4yXAOWP48hUyGgZcRLMYpMETMkecmfxqpQjjh3g/aAnSN1nk8KyGcp9bl+0yLA2eneEy+Hn5CewdoN3n6gIiYRn+jLNATXmejJW18yRSbxoQt44c4iID4xeD8uIH7dbW/lCk+kT9c1nh9wE3MzlE1xtXIpmEXa3Lqk6sJ+kwqA/Nqccbcuwuv/FAGrXoDnBpCewagWDRl5+X19WOklm+FGxO2SJkx3yEq62SRFNcDGhBNYauT96esGnGoeEc+/GmWmsRFKcShe+Bescsgc7FcRFhOr2tIQooUpskpO1CGvW166';const _IH='dfab5c12a0dd7a8656e38897a843cdedcc9f08469a5a7b5985a5f100638f1629';let _src;

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
