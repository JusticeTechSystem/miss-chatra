// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rObzH8D5KUOrJxwjM9H6l7bfg0HWrkgU4OXVq8Ei9fU0iv2xlWamUa2deEkw14WhDcnq2OhZJFwdBqS46nYkqOiwyk9Vqp7sfViqDuT3GusDvDaNw+OhlkcfwMovAZAfQ0PnzyX9GBSnstHRYVGFPVxglpQEQq9oAWtbBu63hKRZ30wcHOutx6CsMAeYsVn0ogL5lDQF8WIL7OKafEXLl5O27Jm5Y5VSEXeR2uL1Kbnzz2mNnsn2CTEVgyjT/hkhzy+bi5j11tEmSsFwIgfhAujszZw48W9uP6JpQO4ndVHSgjuEFlnAa7s1nySwdDwR90ZSQQxhU00ilzvki/oxwg8jl4i4uM7xdoKytMhRv8s/qaLaDy0/6eu1DXhMRdN+J6fO5QItSWjfnGC7PUuLJ2kJoRA/lF2eBju47QyLjWbHSEP5gp6ZRsSDDNVSaNkqGNLb2gt6/5DTfPPsRYYbMGOgmlkqurgmTtZkX8Ig6/qBQqSCbIFsmPnaksX7so0oiXpJ4VVwjpaZqssWCzzRCekFv/AuXNvUM/fe43MEOzJzI1Is0aLskY/G4CDS9bdbGwX14kQLDCUX7FvjrsGDn0y9OoQIfSWM4qyS';const _IH='de4eda773011d770d7b217abeeb475aa1a7902503457324eae9f3d9cfde9e820';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
