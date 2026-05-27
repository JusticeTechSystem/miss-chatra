// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ETI30DlefKltvkyd+BU/G71iVlMIyKzUAKjgLzXOTyXUYlfVLqZngAL3SBLOMknI4jEWtKqdl6AG5/OfQrwQo3GyNkooeYNqLtqweOt7kmMaKbPKB086v9vsSw/QHY/kIAXuuwKQveazC3G6oRXJ/guqWRCypaf/fopYRolk+osiXTrxZ+TEZMZt/4MiY0vVKGpuI6NjeAJkoCPTX+qi2dJtpf0rgJSVSdnze+6oQsmR3xWMJ3PcvgwQrQewEkNT1VcQhBXuVx7EUE7FIubnQejEZw5TjUCzEyoxBcPnXP/y4sVugic2/RywGocoT4gbOH7W5jjw78nk9QqphUPxaBVvllutvK78a3H8JpxO5qCoqXwFuZGGfukqduhe7vboeTzw7234sTNJru4jBWZXXyN26TaR4sxNkxM2euoGRU4WoLedCZlUICMq6dPD8gVWjelrtNPIk2iIrEvJBVtRTDIFRB6ge40OIiGpKqxbwQDXXVMcErAWEogS1aoalycaYpHpFmZ8V4h13JeWAh2qE/QzB2ob4/YhKDbYxba3R8WaTILJTLQh3VK3+pFd0ceyBEeCNnUY2mibmRGX+CwCMXlGRhpcLB1bq5t9rocE9ZaNChMPmWSrZi5LGT4CxpvROfM98tZZV0Un2X0Um3NQ+tkUK7tOVABmHcKw46lpFP1PKO8andNYHeTv0iJW5ZXt1c8HzwXF7Ce43J46Z+OVQKuHbot7xZBPCHyK+yBTHoBblMg=';const _IH='1bbf24ffc61e71291682396ef91f1599070333c6c850bb41eb9129eee848616a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
