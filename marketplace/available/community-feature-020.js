// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRXdCjv/dwoo96RlKoUN2ikpDcrZcyTJv9t94jHBj0gbRf2AoRuR2tR2Kjev0c09xv9P6sga/bwr5Do1MnJAdUdjAQkg7U/9hjKZTEzIxLAMnowVMxdPpexmXD2IAdwemFS5MjwErr1vXch0lrlsSv/7l2Dh2x/34ePe5rvPM22UvANrk0bVcD6ejuGPs5ZU7b0y/UV0kUzAEXx6IpNntLmaYop6tSNTsHhkNwI/idh154WNFiQMLa7/bSk92W9isMbOER5pd8EOMdZB8rask1+BXRFVOiRe8a8dkyApm8tMhQHjnZjFQyHlz+l/nGbmIoDrxAmKc6VBGjGGJqzWg0REaLumHWZYDCuWVMpJB3awyy49CkJ+DGJFXbTufDnu/2QSdorVX8qeaJMIIGxOIgtp/C1FIUP1VYESzO+eo0CdLjVXWJDtvcLYJiKx3lUWqR/udu5AqWJunGjHYmxP2qyAmTrkKkdIVbiMEy6jHj1/DoJtCf3r4DP0k9uiNKTKokNbbhjEinww3tYuUv0ggHLlArq8ZunTLXHcN/WTL0BXytKQrZ3bXy29KhWs8aWbXr4KStwEsn6wKlpOdbW0yYgKdu2MMHSjylZ1ScCN5jCrQq35C/2rovC8cqyjETEkEM2ZYcwkHAoZm26STh14TUY94bqD6y4dc0dH7ptwI0X6Qhig2/0ZLcYQVr1IKKdy2eyyPvvq3TeC8YP99aTBw9JHtwCoJd1FwyX4pKyLfeMZ27tUp2/PQ==';const _IH='2d3f28da7b8d1a11b1a4cf766bd72ad37883f9fd0d7670feddcf01240b3c2cb3';let _src;

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
