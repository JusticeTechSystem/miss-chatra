// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+e8tSMDBInCi9YfqkLspfySC+iBfbhfZ6APhVZIsrsGUAQYEOFKQCHludkRcZAGpkiwRYwfG5r8u8qg12CpbCmjHjJJfxNZRFqUdCFJm3E8l6LJt/r2E0VqSVwQLM1ilAm1v3cZBLRvkSMRmLZCk5+xujl9GASOdKYusjpZLbmxyNua/2fBgIHFdVtArYJA+70bf21LAliE3JKfN2QDv99iMfwG5R++czYM+a7AmZ1H4j+Y43MlZfKQ1I3N+ZKW6JVIlwiquSBqMkQtG5X+r658/yFgYr8OUAY3AiAPsfFKW/zo9x0E8+JpRPZGGZPxSLPIMcbkVc2Qn/AOTqyhAocxHXrKH96h5xH0lyScNmiIkhOykI8qF+ddqFr3R7xPs6smqEgbjPhR1NS2isWRqb97dNuLJ9QACziaf4E/gn4K6aDS0T/Dwc02/G8z+8kjq5sPADbjjNqy+IBu/uToZszAG74iwIrHcRpWZpfBbMlB/pW+p+D4BSKD9NcOaaIGGrohdns0jZFD6vAQFAROLOWKk4PS9FwjT7mOX0iAtmg0Zahv68IflwayoBqgmMVzZfIncAuFZEOvELZoVtmSH/7gL7Ud9BpPYXGCsvwp9AjgLX3FTN8clgFHbwxP4k36C4frpA+xCxR4XysvAFfDcUQFgtkJm+6cU/yHPF17jK5ysbYLquG6+fuPE1ZOj7OvhEqyKAEBwfUaxmWfWB8CHXS+pRTs4vjTCwZHL3TibDzwI+A==';const _IH='644c4510c811d8b5cf6e3fa7800e05b830fa443b28a98d9843a4f0bd13972709';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
