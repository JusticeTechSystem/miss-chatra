// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpvdHn7UdgdqpGXehAq3Aujme08YpBedhal6jAOj0NjXukhiPpeGuasbPk0nDJ34w668Um7p9MxeKnsxUoALTz/y/esd9FImYU/Zue9CoJNEzStI/gLAg0yOCubWS/7On1qd8PQgFccsMuofoRA9jT51OT3+rQLlqahymBwtu+DJhGISyWD9UW3RHz6lmp/KBPTNg96qPY/jhmuvOzbWYG/oVs17LQ50DguzHiFvUOWHaMHA0gp0m+5DZ1HuT0wTfRj6yuWfUdmyLpFkjFZP+C5Kxg/ubkzUrJ2WpQd9ci8lcy2D3EMM07e50aLMeepFnUi4S/vaNsynCzOErCl6MDo7EEN6IUMUb2MZv8gFrnpCBN22An2BmKTzv+zpi13xd2MDMvJzUQ9kLna6Z3enM8jOe6dxTWJXuQOTCQbZM7WiBS0z4LsG0EIxxyDWxMGlA1j/OCDwQJvOA1dybM50zRAJZd/PliuV1c3Mtxa8emNQrLO6blqKwfCyV49hzyoy7cTw28GCF7bFUFy80be29vC6JQtE7js2OY72VC1lvGSiRzXt5KfXyejhROHwqcFxfZZ7NaWH6YVRlRsMkpO5Ospl6X4VrVtzJEEcPEeMgas084vRdaJjryWPcd8HjuhvT0joMp0rH0s9OylvOzm/6VX2fF7M/Rx9oR0WcLOrvrN2yUfCBqmzQnBIxMDe4vA+AE7M4t8VKKaY1O0G1kdrvFn8kwZZfxs9llg1hdoHWGt0cM1X+GPJWLUnpPyXW+dJRYmkZ17NOfiqPJ7wgUmWonVWVY5TOi57wOplP55uq78cX/IL3urMh6S2+pVlVw0cNzLYqv70ReKVrBsG4RPx+ndOxUT553ifAkbdS+1hKJsNsQC2/vkFdg58x5NTEmg+Q83T/Pydm3MaoZnkhLZSnLLOPc7Asb+T5hXfD+x08OOR75uX63r0vYYH/gf1vS7TS3lN888JDKmbKRXQaoOy7dm7EIYZEj3Z1RzRPxzh0QluUa335eoFjk6II/gim0h2UU/w5D+oC6x+T7pe40W+DfX6T3SeU+gZdxmNWC8ink0XVinAaue12RQdWB7Jm5o3V6hlW6JPCyGvv8ew6vNNrjiCPOMLRvzH6KLm1t4K3F/MUb5T0kjwZ0/pRFBb2CyPVH6km9+sO4+u5xDUGs10GPGFBbTu7IigCYWxxE5nF8It+l8cAQRYBix68IfZVIeXK3e0gUpyVPgA2jeWAA6Qcwxe/xuesK1LDTyFZRrSkFpiqGohWUsFT1DpAJibruIjjjVDpvj+XERMdai/AkhJj1pq7vJYTIhpSiQOZ2eQUu7E3kFJqhjtqBH3YbtqQra0UbXsWdSgSjVZhZxissn/6SsFNJWbIXbqXNeslu18c7kIHiZrfeZXP7';const _IH='f1e4aecfd4e99e3c75fb3332e7d87776c34865b7f5427518a142f8e4026224de';let _src;

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
