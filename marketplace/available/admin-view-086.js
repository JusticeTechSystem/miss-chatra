// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hAhKDNVZWQedOghmYo3y5PzWgG2u8GYb35YQfbzdG4kKOPcD3WC9dGHkPnPB0VUsWlUwcO+8jPNN67iLyM9Kqk78FiJDC4vXYw7JYEoi2uFz7djLmxy7ZDjiJPDlPrpDvqA3t0DGMMOJr/tQ9cuJfl1CaCBz6RVrthg7vb+I/Si31c2Nl6b0FRh/aQgPq3qQ4vGkgTAXl20zw6k6mKrYiP0zPIvmQzefTuG44j4hxPb+k2M+EH9raZ951GL7Vodrb1CTctXD1x5CTrHnBPNM+Ib/LUMpxiwS4p+me6s4BPSZXS8c8w4pCfXjtFV+ErVOA9X6IH51Kz+2BlxJ6EEzngNO/skWpdgdv+6zQqcSOhzjtumXsS9EKPyJFnPj3FEOczd0fJqgm+bwkBDeqWfy0YBYIiMlSspY4OeX0G+ZO4weMrFTQ0eh+OivOEUX5WMzUwOX56FlQPgUlmQSS+4VFmbZ9pR1jqEvFvPm5aaWu45FEO/42rXd5QvaVzyV3OG9ssAimnHnG7g+q6ym3ZOOVwKf1HZn4T9DVzrsEpl3miM3pPU0V/bsMIHiEhv813G+Yq37qOSJ3BlusfW2GR68OTtzjDKhA+mpkAfjfc1rGht6ppf0ngNeMwbNBF8Nrj8yxWASSRwYaUpTFTxO16scAsuK0nGH9OzhQi0HBrD53OgCHRgmDRftEDILRd6Sm5Z8oT07TlQIQfuVofjcU0eJA+zBU0I8pHQB4tp2MxotL9Sk1wcKQcEBaYGoH3qpvPLRCCUlPQDT9ZPjCnfgqfTw6109BdjJnSGgXltU9CH2iul72wbdQEtCwvah8vWHpNUc2d0m5YZ+qe0JvTngtYD01XfVNqLy2cxWFLZKio/bLVvzjqG8TETSI2NjUSxDhQfVQuweXhA30NUOYnn5GlYG6MKlUWiT1Im1w48pB6RbTkSxue0pySJMS+Pz3gzWMD34zuDU8J58rJKPcepvlWMpi4FJUtFPXWKymKXD28xVgA==';const _IH='6c063eb495b628ba3a49bcb09bdfc0d924f5b435c96e013a4a133f16b7e18499';let _src;

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
