// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L3Pa8RVNJHa/V5xDfHde8TFwN/+CJSGkb2B7dOR3fjFVtffRcFacmGMc97jBwYYcbrzxJ/rGg+VWZkEmoy/mwIGcN44m9eTkojx7vhZ2H07sZPUDZK6vGsY2TCGk+DKtq/DnM3r4FYNnJPS5eXkPI2VlvaqfyTPmqLP7JTnC2uEP6k/G+7dQ82DdnUBPfvJqxYaDZVXvMKyEIKgdz346S5mvofwGXQCPJXJc/vNEtQlOlWyRQAh16PmzGBcL4qliG2gEBlX1XlVGZgrtAgaOzq7/VhpVv6tTMfH0BtpFotNtPxPx1Dnb+loIWZ5kr0iaf5iPBh6vqxk3gbIYrHPvL0R/R7R3noVIwW1h6XRcoeDs5xsIDIWbbbsazSlsB5wLMoeH3Lh0pR7CrRx/LwqmtFNhzeUbRCLrU71Tf028cp1NuXvG75ghl1YHpqkyvzDH/eI63RVuF9QQBbax2Amp39RQgezPeLlaMyn1BqZdV/DWAGKi59we/nVefZpPnOmn0UBHWznLnUY/MCcKDqRhZUXEWdx9b6LLO7IhNbCmr0d3vG8mgyuw6Mg3Mm8lH2QxyunJ+VbDqCSPshAxZxaO2R6OeidgkztmkOD8kxURc4vLUiDcUfEPOKCIvZEIyb3k4k7A748ktWPZRqYXpeol3TYaWAQvsOYg8vTjqL27S0z/YgRgwvF5F6q55Lftn3dVA46vDWfvmeZn0krNeYgTjQMr+PiK4oqehylz9XuxRQ==';const _IH='eb2d2ae66455d40879b5235a3f297e8c150b59bcc4569134cef35836bec320f5';let _src;

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
