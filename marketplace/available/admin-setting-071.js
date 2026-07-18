// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2FNdH3g4bQvf0zZMY+9WojK/CAsAsDFqXkKIi/RYM+f945ArElpaAf90OhU6jqu3RoBwh7ApVT4uW1xzkEPK/CTdlWsWTwYxSXQMJeySIL6AODJ1xSM/L/Jx2JuZerLY5murwTtyJHwWVMMXigxFubRbijaLlPlLeS0VwfhzJtGzhsOtJjhNxfzEmyveixg0Et4adAAM8IkXSuYPh221w3JUtm+gr03P6mxJrnQGfN8b/JUGkaVvP6PlGuXF/TkBdxip0bBvFBmEC5X3JAIO+Rek+/X6tRecNCC4PPe/WAaU5yKACZWJFNhc/H6f4wYStCe14rGuO3M7w5OFHQQBLEwektTPSfk2ltZdsDSTdeYjGpiyEQJee7D8iN3joUx72m1iQ69SztExtdN9w1FAwOV1qomE9Yvk2iFSITU70sY6DTbANagrrGMX7Kp33iruwQNYUad54guBBo2D1Rc/rOX9FIb1lcL/CcelFMa8qt7r+c/GC/GK+zEE1hvqyXH9EyLGd+33n1/s5X4S+VFrzy16C596UF1Kpyk05KVi+hy2gZIkTac/twxACZPjC3Tt4z5w4okEphTJhl1x8geieVINzVh5cQiXJC51uJusv17hLCogvhdg0wAUAiDCPMuNuc5+J/7hUYkNGTcJ+XINXfe9PdOPnGExJ36Yie9tPMbv54wgqB3EWSTsqdTrkdctp5xeR2xsn/HaOfWTv1K7IWd735d7G+KBMUGixeL1OspRXxcnTXfuex9cjJREEhuesTcC8/+JWfPu+PIWtU1NTTtPlPO+v4zK9v/1z1k3BhDdHrs2N2iripFobOpwxLWDTU8qkx16DxtIzNC1fF/q5gT+zdWvJogwRw00Rph+uqLIFQlUDsW+0Lru3tSnniNJrDhy0Xk9ytH3Wngr8HWHRLclTM93D4pxzxejbVv0lPn/SS7+KNK3xZaRGmQvLwGcdw/OAGc+uyEKrghX8Vej9hmljofpCQXx4OAFT3zVxDwqDrvQ/VRFhY1Ol62z43JaPAeA2';const _IH='51379a05c49668051ef429f46324c9197383b40ff7b5adb0b2577f7ac4866e27';let _src;

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
