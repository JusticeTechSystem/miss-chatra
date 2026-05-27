// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I8RYPrR7CzxTbPJ8z84rKZgNMv7uvY84h3z0ikvXWygYEys90uPbgBhIpp5pTKTjpmVBpIRuaHmZ1B0+8USDlbj1FZzVZI4vRsiJGFB5PKJxrN11q1tl5bSj+AzcXnLsNtOM7n67raZnmpOouXGlrJk8N77djY90sLBUFb3KEUxCvfBeyKwbWsfyoBgv1ll2tbXKIYr1M/F6UDt9CmybXDllkjtxLQijRt3+9Oxq2EDGIJoUFZ2rpWsCngNESU9jdJwnZQ+9KHeUuUj+SZ2oR2s9jEinkCsWqg2tT3r2XeQvvwmOcz4pVT4IJQnj0oHtVUGcXdtFLu8k2kZB5hfDLTkynPXbK1iMs5Jp8PzAaI6+H1SyJTVyeXk+fqZtlgl3xYJWKPLzMb7Kg+OPLSAQl7AY7Ug3YjhK0C+cFS0IrRJ/rMOad2wr9U/7kcBPGQoWiWJ+NiRCkSIihhjnE4eXpWTFY4w0Rd/xQuHIOeW6WYKgrer28/vAeVlKnS5eb8vLgVFu3rsrHJc7fpZa0jOIH38wJ1SRByJ+TRoNi2w3KWGH5lMPnxPxFanShjmzPr7ygg6jT60FpYESjbJTUm+B75fKBjNSNJdtDBoRvZWpyFD/E6iXxg6Hx10nw3q3MHF2WLBt9AJfviBM+cCitooBPrqcG/w+p3lcCtrZCWFfZWdVacdOYs8x8YNlHR5XxKKwv3FFxbbSchreDrEWmqcjwzELvH6tTcQngNwPUPG7ZsdcJqcR0Reqbiq9eEjDGCnRAUt9FMOvD6972cSWQShe6NcmI9HvQfGaRFIwozzcIO45pjsNGjILhxU60RSJt/yTRNY2deLutmylsZAEXQEgOQbDgzpdKUrfpWg4ElbgUs0AN6HNfYI37wARegYLL9QmZzYiuUXFhKb20FVHzTEFR2h654SWGSXBEUwqbgpiKKDQSRl745YcmE2jL0FODCZSkdYJa1mLygttzv/QutNUM0hpysGJ09Ke';const _IH='5fc803ed5d4d3718ffc09c21909500549f6dcccdb8ed4ff5ab98fae05f9b5162';let _src;

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
