// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LxH4GWVLIjmkfJ19MRHCNa6im5vFaqkN4am24EFG6WZdPmJcz7iTrZHXd/vC1uPs++Prwbjb+KCV7rnVbCR3WOlMHrKPjtQ/+dAXN23GODFjNnHvujOd94UYr5mkQT1503UK0n2azUwYgTUUnD3DmPEa2zP7H4VFUHqUj9DSKe7aZta3KVFeSufZwK75n6dI/CI97nzgoktlZT/skwEtpVQoU3cKtvR64HiOrCs+HfmuwmTgFPaAsusYQT5pLtkw6E/0vPkmrxzzNgW9KbIfGLinK/XF6mC0AYhJ2deutyi0SJ0JERNBitn5ZZOAOIBzfP47sQFoV8lMPeurMOA2Irj2hNLffdDku/l6JcNc1rbRHnfzUgiN7vvPk+zcaDza2BVo1Jp8mA8pH02Zmgr0WmpM6tnXYzkOGThNeitOdNmmtcrTfSf/EkUQlU4APwpp6y8ElmCsxfYbLRJifoUvPXSVsZR2GtUVzlE9d1SSc9LT2Qw54tJyf9SmjTzb1H5lTIM3CsaxSpvRiPo7i7XsDPgRSCPRwtwYVyE40ZjclPKSJVFPxlgE25nQYMTXJEWDbko9QoIvJyrAwfIQJAq4sLHluCf90vJDFDjcPYJaYAwkp2uh9trPxCx9gw+HbGvGOudObXKlHwLfz09wx/mUFf3jvYKS4eRdLM5eJgAsTH0B7hQvdNQ98Zd+1egqGd6vO4nCaNifXIfwaL7c/rVejxq3TlR54GYnMjyAR3Va2vx8gtdTzc7tVDj422CrpgTt6Yqcf5/TnMuvGpfNwzlVokTV+ragUddzbHcLB4DksEkjYsfe1roYoGnK9MsM8baYmY17vQFDJOU11/2HcTrM6ga4x8h0uZReVwWZysIhRanlek+lMoUpTXShRypjH+/OpSvYzuXDLh/3MelvzLk9V3jmJQOs2kbkv+BfAaA9m5sLYg143MBUrFS+bLjO334Sd7X917hveyHfU5kom8E9gXWVI48ZETqO4+3JJdRsN2miCQO4fe7ZFQC6CkBDSB0TdX5L/9FwDzvmxpHcw2FSxACSXWp4yz9zK+k9tOOHOi7IFMKw8SLXZDOzhg2MWJpww2kys9shcKzrVBfhF61hSfeDZHrzzPlh+En4IGYlofTdMNzy2G7/SQNRLA2SlTcN38UErq4UwabpayWrlV5ZRRTo4dBmSAPPtYHpUseZmFIcsVxHM28vH6ZtaAwHwmI0wHDZN/PtnnCccKtCceJqXyJMLd2J2wDPaGOC+/+LPC7ctxf21f/7unWOVTLPwPnzebdYJ2g9P22sLQEC8o3qe75vAezEvH4Id4D0NMUf5U9V9970DgTslCmi8qvjraPv9OnekQQChqr1Ojp4Hj6VsoWpMqlqsH8tzZnfpZ2ZHnO3KzBW4CZjbQ==';const _IH='8738ed3448a194dcb3411d6c33208e35c8d9ac538013b3136543817e32013537';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
