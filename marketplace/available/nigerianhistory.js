// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VH693sTcwMaVZ37AxUabaCUGpy14l28JnHENOroBaGR8ZJVbh/+Hga7HqK2w+q1SzJvq5b5fPNesx1P4jx1PN5N+7UMrcK9PG/YH8q1l+1vORr5gGyVkgD4f/Kx3StHYO5FUpFYMzLbd0vy33j35yTLICCRk7de4CxlXbKjbim229PKl58MBoKEK2wnqnVinKfIvKq+tBSUI8ntFssnoHXtxrHrBpIuWeV2fHJfd/NTnBCUOqcIAmqKRWrSp/i1LinJiu53YQXQvYpUfrBjJ0BvaFISEapp222ghFmFME1LbckJ4HfTg/cpVPbwWbF9PmoWZYYyvLQMQbR7hF6+T5Z+gx6y0Z3kEdArluu4bfP3V/nqCdJH5nlM9Po32h6WArCwNPwj/q9ghu5kcR+zbvZzrDUnQcwZMTslZZ2SdhsHWFWecoRTBTZ+U5Q+9N+G5R5ECpwPwFgaAuFc8FbkmXqPZWMLS3USMiLKLJQuV6NNq7GbPbm+nXon/6/41gw/3cKyavTNK+T7jXqpppZrEln4nO3p1S3+rUJtTv+CXl1eptEzk9pFeJEA+1rjqWT9lSZk3dTl+xI2PVo+vsnz7vS16t7SqUBsimbNG/BY2RBCM/iOWikz3R/b6LAt6x4/evatGRoU43qRBPWBjXVaMoes5KuX+a+8B5w+OXEXMfgJmiTpGpU98GCN1m6jT5dlrlEMS/PEm818txLytEd12u7R8Cbz+2qNOzET8P8Ro0HEmZawdW12vc7xfixfzhuIk/NtvRlTbPmpUdqZC2AIv9SGKv09ksocaFq9atxc0GA/MVyu31eLREzS2eFsqGdVPMJwx6HHGsm0cTyaPxRR+bl+/imqaj3HnYYEesnIz3pgOWZ7ifKOZFk8Ft232AgxT8j8q5/cPKbYMBfyJG4fz11EfUwMR3/k2zG6OtvwDi7P/wIJbrsbMub5oWAQLkm9Ikn7/tpSRHgNhhRfX1k6eYcskxJeAZc4Ev3MWThCg6uoTDRr28k1batWCcUDAwWdnq1YDi7tBbX78mgMUnPOxQNg3zjFa4P2DdtpWFMgIMUyyP7ya4qaAEKCubLKNeWr0vqkJR8OoVK9NNAC+8p0niUhizc3kKLEHTykVt9unQjfZEsZQ2jDscyI4iM1DaIyQnUYh/9VBR1DSXNggKi7ytCqsr9gLt8+MWLNRdJ0bNllvzadED24yykpI339MFAHXsfPPxUoBc43sUTOSi+DKIw==';const _IH='f2d57336e2e2cfb3c152cc8f2fb449751aaba9dce27d7dde1bbe29085d8c40ed';let _src;

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
