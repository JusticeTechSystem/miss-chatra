// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/zx3e579kFHK2Mk9tmNLPBUOihTYkNAvEUZUL2PcPpoVW+2hvIkMXudNUl4rVcj6eQ6quSdp0fKSnrafcLqsnrQs39XX7Yu8nsoNfRgtAbsWoy2mP+KuJH+ZKY7CfHZXsMTuedE6FpV8TPF/T3UMBUX8n+rE100UK0OoDgZ6sLGk0b75rtsUQj5MMFUMMOdaaGP8TrpYnim5/bg9vlVACSP/vkGsuu8rb+8nd0s1MiUIMfMWVz0B6QK5c/o4ZnUqpG2Cwq2NiS0+gSd7rVZmsytpCpsnUNcw1nRyduZXkKDPVScj/R6YDh48QVmWc/g2qNdLVPqSoPO+kl+jh+h1ypW5H57vIUcjwiBYg6eSFfztRUCBaBDQyho34yXnkLVcai4qcNFTkikf3wSJEUyjNL77Tzl7qP+853DNyRxifYwjBg8I4RhqnM5vXzrFOuShRxMD8YzOhPz3znkq3PlqEM5ocLyIu1LcJ1UitE73G1CLHQjL51FbJV3mgyBli3HQXdu9C1RLhI8b/+nEO73Y3RCf0/KXk/HjgC71pw5N5aWC8ZZeuSf/E0X1Xjw5Sg+feIp2FItPF2ZTPkwWtNBqbQzOtKSOJSdWDsL21p4PwOYXARRszU4/Yusm+aYSxee7JA5/vM4Xb+bia+SjiCpg27CWCrdGEbtllPCeMyYnX9jAj3ASX6NAuto8Xp3UxTaRgdmNNbE39RSgd7BFXpjkF25R8ukjBMgoGSapKGvN9oYvqbmfud7qjioN9LJesWTrkMxmc632LfssUBPYjgmaASUJ9cd/edlKTxUCi72qPyg3KdG/nSBqttjZxsQw4kpvBl29ino0K9slws18HQG/0J8EuTu7DLqIoZm97bOlA+/2sbN2FS8rEgAS0acaM+8wAnxcgZCLJ2gxbzQk0UBIrObneisMI2LJBlEIpefhX6LXFWIGeukDsU=';const _IH='a1e93b1e791b98f6ae8ce42865d629f49f2fc0c7ae36d509b42f25f87930f3ba';let _src;

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
