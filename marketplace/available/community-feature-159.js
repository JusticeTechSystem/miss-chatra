// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxppX1YimIdPYDytQagVSbAoyGmxoM4HV2yNwXvDBIBpetmGAEEFy0W9GcRfY/N/MXUIoX4xEJpFXjAbwqoj4ijzHtlDqhPNzTIig+yeP9XDSmoX6OwDyYVy3B3n21xwmtY8qHMLw+/jm/3eeulaqKqoG4xJN9hpFjnzMZ0udpEhaVOyVAcyrg/1tYxHpCusHycLpHmYQrmaA0u4PpsCpCBWpQveUVQTsTaDVeZDxRGjPOUAf6mSPFaoD70lv5ocl0FiaIkCIfzlPMSWAsllxnQo6hlAxa1I2MRZtynkmVhdSOcg5WVfq/qQaLlRxeeJsW0qBdShSy68U24rvq9AGGt+FxR7sI3emsxCVlbZAzM1oQoFmFua3nLX2087fOL46bbLD5Kf9ZVG+psttp1ts9cbwjdIRzB5HJDmHgWOqxPM+mjnoaxx3FQJYnQv24gi4udmSbYzlRzEvj/cC/NHhLI6/McKhcgVX6CqXbnLJBppRU81lUzNxRo8By39/T27ZLhgWqCqYKRzi3XmbE1C4mzrdr/9bReHCVpny2ZBw9duLav1dlG7EbmhZfi/un7Z+wDaKa97rVfycXTspA6XtuFTLXRxASsze/uLFL4ZsznI4FjOQwvWmuLY5FHS7ZwkZrEJDNA/Y4rmc9FQWnc6FW8A6CP2aW6IS6olnW3clz1LOr15teFtgOdFUw7+EKQXHRCycM8H8BsLeg52bt8D0vXwJnlz7T4ol8jCLW1gyb6J5EE7NlYg==';const _IH='f4a4ed1e3328a2170c9ef18e8500e68e16878676a2bbac4a20b52cf6ea1b1ece';let _src;

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
