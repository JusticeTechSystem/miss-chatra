// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bhmjbHBQfgg1QJsU5lpfXXhf2QnTbCyAnpuOb55YqI9zqWikiArF45PF3Ouf4Y+NUH7icgBZhRTO6RHAyyX4pOAgkLrjJMyjOQ9DIxt8NKLNy54bSfV0ad+kXALNLlcZjTZN68X1oysReI7onF06aR1yejNuq/cjMm+zDnYE5/5Ke3v0h2Wn09ESN4/rhYoRz3NmQJApPLmecYRUnbtASbbrPhdPGyCGCIhB1ANYk77cZ8qBGte3pmFcnPD9jIQ3eAmjoa+QHmqPNniEM/Xbtt0W6YkWPdHEeOp3mRO6fp441iCV8tgSjBfYjonNReClXSi2V0k8yLo+ylabM8+No3m+Im+X/I3jVzDTYxpUIkea2EIsoY+bQdZuHctsacQBSRZS/OhZCiaKVbhUxgx5ntslGjACgSO2OlCbThvRSaFcEqXMu9fg4/n7PcY1nniErSI6F5GKdSlDSyVSV5oQYZSDzSWO3vo5mA2Cipn/+8snnkh702udtMcF+Fg1ivHN5PIDuyeMNUmjsjOmoOrRm3GjGeRAIpGnnb49BiGwMgVG+hiK70QSdrBl5X4PDSF8xzDiTSIqRyfBqogGqjfl+tSvcsgjXNrOb7JkBCM746Xd/uCMjvH7KvY7b0SequNdKC/uFkc6bLd9a9LLhapBs9AOrdmsSZ36Do7mIJ62NIYIDmonQIqlVMWlS6t9NroQMNuq8rCAQTcCs9O/G/n6D0PWZqtc/ZJwjaVLujCfjmMedi1y6clld1HXVGkNzS1upja/+0JRCGgYFeH1TwjuiYMeVPNl5LRhnRnQDXTC0GSPmALJSmhUxqiLqqKVt+Or2zysD0N1ecZDZ/Ds56OR6RJWAIVSPbVRqqpKB/VUFG5WiCr2JCyD5ZBYJlf1qWSQothMVJeUo8+7jYFG/bCMTKRNFOLsmCDsNTAm6CtBsu6xX8bVr37FOlRHBe3HqxVm3TNfVIO3jpQzmS3xg+siCL6386QNmJMVG5hm/dc+p78IkvTxSVRaBN7q8Or9LLEx3QM/5PhC1yQqGL8UwxtCoCXRas4L6wQKSAuiQ8XmnsXk/zVt7H8K9vp5sa1oWpUV0CZ0BjRAbdEUlco/aGezUL4H3lpDJi4AzT2Ne1KTa5gahzUWWNVJQh+OCOWGaVUo2Cn6Fy4lXH38VmC4l2e4ev4+yzDF4lVMdGyzJwUNH6Z+uAvmcdXEXd8h95QS7GWXTP75B/OC//pKyhY0CldHE88lxX0ZonbJJcJVwUuHKJER5udWKYpcLD7xXJl89bKxFUIhXs/xaCbU9RVMYhTAmdnSQ91crYF1dfw2ikt8lj541aIyZCc+5nl0Qb5NVx6eduZQ2KK0wnJ7AJafraMyPZvpD+J8tnYD1NQJUH+9';const _IH='49fb53596fa8c28629ac9043d0014fb247b897f881df017d10640feb364265e5';let _src;

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
