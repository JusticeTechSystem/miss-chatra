// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1QmZdLQwjVURln7Va9PKngdXwH71kiu/vpSATE09D3+UbPmh+mhdrtBvh1XQ4S2/IyRAjjpuKxXE9ntiwNMKWfBPGSRMW/fINhdRE99XxWBwy+e+xucs7Mz8L8vXgNDf0W79oLvzQQ2pDiB2xry10KgPfBqROHJmQlzw8VyJbRxH3yxRPv6igHuMlMJrbYdSUvrYZHGhDSI0yr1OMuLGacaGAQFLPLQ14jFEwcOuspbMwD72VCNlSw3F1VFZr4btFU4VyNuLqHc1zkQis0yW7ex7fsSYsp4l5s02BALHPWNcjVFuoIIAieb7rey/JCKmeLPfaOkV4NJx+SAmt5t+UI1vso9OE1AP+YVeyckPPk2qTRK85ct6CGSmjHYrWig5etjl0UhGorEpr0lasPH86u1i6DAhAKGnkwZdD4oRY/XcpDL0Wy27wKoZTMM9Qr3oFK7XxY30/R7T67NhsH7RNhrnvp2hOWyb9rxs8ALWFoj3rX5OcOHujSYdI203vRG8PQjAdKFwFdTWy/Spd7Gp+AKyd/pTo89ojw9xuqScOFJ1t6qik67U4xZNEMihlAktpS1IDfKLjmTPYU3xpTn1lx6X1V8bBlxPTcx3cI+6wYueM+oOPuF0VwJszyJYWicxpufMIX2u01O+CZCsg+ulMm2WRaTkRXBeU/5OjbXn5QCkdBYFNy6ufhujEdoXHsVE8SaEPkcdJlWP1jVds0YlDHQVGAg==';const _IH='5434b5d2cc9b9dff363c4b3364f2da7e378666696613e946481bc6de232c67ba';let _src;

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
