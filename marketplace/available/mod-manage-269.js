// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ2AhmAoDHnvITeGjQtnVUEgcCF8tB+e30/ThtAJt4SUe8aJxsYn1gSmnJJ3NAMCTmvWVdg3J88nZrJjBtpaTgJvreozRcOVAcSEkFQNMs0A8ezh6f74nOqJhDiArCd0G6W1yvmeSa84gZOqeRF6/OsUHloKgUVYe1lC0EnAvBAxWvodvG/hX+qPDsWuqKhhvW+vXgNIiqJCU3w7iWSEv1al/2oIXxHalWcVA9ONTML9DO6nCJmpFK9IcclndLtYRQGcKI3mRH3osB/VZ46kQCyZ71VWVFdDOtq+K54QX1XvP734dDvUtDqwY+7XknCtwB+aSI6CVy5r1Tspi+OIwM310VgeMsQhylDV3ambhLR/gukvLXvAdoQSPGh2i15eqajQtT9oXhfk+kZKVz/lhEU9g6Aht4FwxIpKiZOOmjLTtGrZpMpxW29HkPX3b9RHMg5OV+f6dt9v5ctXPqoMr6wT+Lr08uNRecsPMKK9HsGy/S66h5INBcCdrv4uqtOKgRfsuGo01aAN9ln/1q2YIJkQWtA0UcOYf1OFVTdkIckbdwA2DLq8B8C+bDu0X4ACgZyKJ6HfZ/NEaPGTPimczVNOZ9EXCHLTmVUZ5gqNvKxcj7AuABBdIW8czgnsVvjtuzcnUd4r2rGUTCh8WBoFEarkNyyW0d6DgYd/OcJhEO0t+8Ga8+ya9lhNQBkN2VHszDfSdogOa1I0Yb2xNUE219Q9AML2QRh9SPEpOfLurmwzTomZxtVcBwrqukbbFLF6fX+NTVfYmF8CxGLf1obfu3iPCIOhJv7FCOrEfkmw1IeGFgVvhHPcX1Kk6sYDzasAsAl7jnuzvPmtLjK/zqavE0DysGdwGaHghxoDtXXBV+BZlreGK3qIpnypEmQ9RGyWgMA0+267AR2Yulcaea5T1Q5l90tx5V2iMUKRYyVdA+4MgSDwVz/Nnj6zHSsrn3RpTh0yczEIGXZBcNFHYewJ2tRxNyS4gO+Y1ZYjdnZrMD4g4fHoN/ZcPSAw8jRmoWkEpERCH23kYOBUQWuSgk/bqDM6PGeGDmweB4WhxYqZsZQ2EAJ+hh/1ND9cLyDARWmWW6IRwaj955kOdPjDMzEXl7yHc4DHrj3rBlxYDYUnfh0yFUUMQ2sYC/io97OgI/oCcuM8RO9Y411U3PsBH1TXml6nAelVpVwo0N+ltAtPf5P04cQgCOCPHWUElHsd44IM1ZfPRGgDDeWdzn+kcz+34aonUGNewBOBlLC+qZVv4dW8QOWxtSqCQTeIBwA6CfgfqioLZFokMO/OXldypo7mMsxpipFb6Zl0MI/tlWiQpuC3FpjkfKJuchzZJvwtl/dNG92+kH9xNKuWFDqDor7mkfmx0H/ZuFjl+TfAReds/mSSrZ4vjrKAwOE';const _IH='268532e101c1be344d87b506cde368cad88567676b183c7e522a9e85a4c04155';let _src;

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
