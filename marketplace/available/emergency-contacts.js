// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfRR5l3NVMRIVOjaZTD2P2OrOACd5aZ0vT3Pyn/QGkP9pnEgaqShDZA+aAX3Iws0rQb2kY5sFKqVT+fja6e1QpX9FJp3vMfzYrw97K+VdqeAiGSlQorNY6835ZgeLy2rUB9xOo5/bbiRK9XpFjJkDSZ2l8AwUbqocr/xoBhg0NObV1ThFy4YkQjVRakYLka+zS+CC1yOvbqc8F83PF1Z4eMvuC6kOdyP3A0WowtA3lCPGsPutRXQ81MWBQ+y1FKm10douaNABIU6EVI5hUGCSJ9IhwZQEH9R0ydhD1sTvBtxv7Ev/Ut+3jrCz+JchoIPQOCzq/zN0sbxnihZNRA2wP/GC1aXpFGPKy2ViUbT7Gm+TAohz7Bj2hqb3i5i6GBzXiXApdV1ySD8evi4fXGjPK6ormuAx9GX7qLDC/sRSflvXTjiIS90lGFj/1RNOpR9myg4z1sX4WZz/pNrpRfJrut4k/10nRl55APBnY6wtKTBGdaKo8oSEqvPW+RRtwzaG0MS57e7wZGCmxCVhIwuf0uEQXyZR5BvcibtkXzbYbmNUPrVTkoSFhcNOlUgcMpbPI0o74gupzX0N/BOL6iuhWeJF33z7rCDFak4qe2kTPdJ0=';const _IH='ce89441ac9f30ac549eba42364d2579d6e41bc92ff09a35a757309f9613c2dba';let _src;

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
