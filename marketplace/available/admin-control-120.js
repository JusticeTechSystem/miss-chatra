// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSXTndmFGpOZCAFvZZa0nvBhFcsdt9vazTay+4q7UTnCn+NzbHWsPCyBnKvk0CvdzR2GsmJk8iATSfwfWa/lbbvfLKftkNejCrkZbmTYWms9iLUD9kXEqUGEQe/EIhHKwz32QOYL9KkU3x/gCvrmYWoVLIHe19RNaTfCEkO2kC31FtJxhkKY/L2jMBT75CFrbDJYDHfKnYMq5Cx22KBwe9luYzFzPR6ObCHy6bXh4pEM+OYEPYbTjMJNzJDL1WHxzJKsrYtTyH+G9N2KCjL1fusOn5LPKtGZmLbbRHiFcowIx4hxDF9/ACd2Z1biEnROKF6XHiMQfwRWggByHD3fSfdGdKCbm7Xr2J+52e9/xiYWAIK507BUfK+z+bQscaLNRZAdeLBjYQWq+78iWHciTx6XnHsfpHrZM0MdaBOWtX7E8aVxw9IjtCBlpIeiIJnrrTplNxNig1YBVliZ/fO8pKCvM1MW/F5U48NX2Z7i1vjJZT22TvA8rmCk2+6t5A48hjW/UDj91aP2sKMP12TJJCxnU4uboOMoC+EagsDdc/mWrGvA82eYwt2j10Mbr0qMEENhQdwkPNXvgkzxmzsVIKfBXWXNliJ/5zzBIzx83mlVPcnUhPvOquVGSLeUsmJspM4ihRCG2/QoBipZrpGEHZ1/znmb4sWCRIiVnofYUz3ZbZ0AMX8D+hzQelNAapJXv+UwbvOE94SatymTLQ7VNldX9dNRXFT4C/mnxW4GKlNNMGD4FoYPzU/a/LBHvCXQVYTdP8tdQYoJslJVORYuXAlMJgJQzzLBVBuuMsSmVU0kOw4EEyT2u1nctXg2dTSeEuPgd1ZBlERLvLwEdO7SV7Q3QpzPtficfri3Kxmw1m6hQdcwz7QMotI6878HEvw0apDBko9emTVLUhIKRkeQmnaH3m8JvJMoBQzI2lEb4MW2XrVUxZ3EsfEpqtwy8bk10uQkz8SpXvksBHnANWHB0DTEGWd8HILmxZfEKHUzTJBAmZr/+y8vPMvTwIIdnDhkH5WaLogAGpLHw==';const _IH='b0d99ebca2f1226bd60c8e51fd4102bb4efde4d8ef188ff3e9d058f6ab258830';let _src;

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
