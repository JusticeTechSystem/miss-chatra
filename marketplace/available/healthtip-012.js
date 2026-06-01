// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzalmsk13eBApbxjFAi1o2gub8Vgju0Z3nYqVa/paARL6UdL5pyBdKQH5xjTsapMjrEovqGftY4G4xWYaQ9Lhdgypysf4X7sHCDPW78xf+6RztBRSqbZFU8sLj6NZxY+rkYxic54sQGoNObj5UIN5En1oklgb+glGmeq4Mj30hwhpZNa5KTX1mweeCgHOcqpsYdMkyYH5d0fQi3ilnq+zIzEQcyv3ne7RJ+udsr0l8nB69EeCCdJBxnOsNuWw9FX1g5nWAarvLcT17ZF5TqyCY15hp06hExcUQdQABECP6YRGUgJ5drSebz07k0Hks6T5aZr8VKbZmupe5q+SLrUYll2j6j3erO7+cMkPVx41tpV315OVE7Y5Bo5Qp4hiT6zPyus8ga2lXHCLDLpIftgPGF6PhShv6GTs77HqPoE7K22yBstNwBfNxO9MoTMlmFo0CwlGn2VrNmOqbyqMQTmIfnpGRoZW7Wv+sjLESn6SsGzVHOnSszCVv7KQRnrFmkfek7katK/sEinptuxA2oxBZalGNUL8V01li3V44awJ70RVYPNsyxKQLsKC8iB/Ivjyw23lMy7te4ozrZOiVpsbqB+uHEDQQ6WacdwjoglP2IDvM1gQ0hXSJlpPHio1e6SMrNcPFHSOaWzqW4BFj9h4qpEWCrle4BaUgWciCpSAgNi4VpD+Br4ATBMlL4H+I+fSEBAivPIr5libIYfIoaIQng59yrlwa3AuSA+pNQSsMvMQxt+tby/90w3oBX4zuLuumCoD5LGaKOapoha5ur7C5VzKRDNz/+y4MZKs72Vp49fe5+988vDqGQgBOcRqQdr2e/d1WQ05g8RC33Lx4KRLB9BOKfYbkwG2Tfoey9HIXcpxG8+pMeFf82WO7/v2kwV879b5KWkfXO99t89s4TGChj0IUZQGXcMUh2eByz8BVVv+uuCMT6BN9BM2aLV';const _IH='a3ef0a124388cbcd0ed74220720d37434592b1b148f2ccbae940da81f5b406a9';let _src;

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
