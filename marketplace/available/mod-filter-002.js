// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BNGAv+Q8k+vdr+5u5NXq5YiJXC8N8iMm7hFh/9f3JkNyptPkITmYYJSjsc1czfQOQGGebfd0InnePnYVzaqQqCsdiAZc7auCl+2SXouF2EHuvmgipKImoHB4ZeeE+6WFRObTjfpwgc9/Mef0R6oSYOc9avqFWDAAt9Z9xyegGzmd+NGS9wzn+AuH0jcZK6KzdTFQVOvOoRZB/cK4/ttZEpkAL8Bmuvu8lH+mh1PJ1y29NPDQ2Sds9oLndMpBft4YU/zjrmD01M5od/zpUm1fiaEiRsjHmKolXBswQiRNq9RJw1CW6KdhXEpsSLats+dnEoIIfyQWAaf1aF2O3JxThpNIpxKqTXwqnjDrDeG9Pnsvq+KcGlOYMONYXKvdd66HINGnfZLOwE85kp7qQNZt6ex57sgvkRYu1AYrOQXhCl7X1UXf5LLU2lSFGKPmAGc4BcscX1APIOFpylYvG907NHo6iM817gCrHP5Lx+H5fW6DpYrzUDjSOV2ltTmfyQ/DcmGL5/AQfJvHQyaqB4nuGM28/3tciepS4ojGCnNVzk0XkckAQK/+ThQFq2IqG07KJhzbnUnusCghEYPm+8KTYXqyhZ/7Eo8cPg0z9vdfd20c/3fDEkNI8pbAAOpoTv6938KsD9EcTlRXN/aQbfgvCICXw5mhmT1MqjHQMrfSO4NymE7H/zi+ylCI6rvPDTZRrM754eu9zd8j3L3XTkPa2fgVEjBXlzz2M/50V7HtzxSbkgH+PbjFcZ5PBKKlBuO/7cLlaDib+PSQgUAsmwaEZqwaAGyYfnhjbkFKhmz9RLf3Fn52MAMQ0iM3xb3elBbH2B3WtMnnD0g1xHsaazor4ju9NG2kPWC9/viMS+6yFFCgFQwppGK6uTdu3ApG9pYCDq0UkfrN1W+Ln6VEtEXKHyRyklVK0WgcOrLzcPLl8QkBStBTykyRJ+HY15a1SgmSONXXwdeawNLgvBYmWchL7ujN8xZMVFvskWwzJ4vsUaggi/7ZX5Omrq3H1S/TyXln1pdmjK1FmTaHgJsZU2iG9i2l6suJI2gqVgtGFEMRx12gRUasZThJIJOthEuMNZ+7ijsALk4cPVtg3KU4asCMcXfIVhnqzyHDmJCUdvWof3bbpwLucORNM1RzOHJXhfMJmUkhK/MyUXrdcSo2AW5gGDlpuRntbvEGFk2OpZHnbNsyqIXGpmt2M9BtSyCjzemaKlHbGY7RfsAbpg3mk4gyyr8ChRk4bJNFw68NH+nKdN3HAB4XmsVni+U6mcmgz/cG7QULGShIGaAZ6388HYioMSS2XzGnF1LY8CrozyAljaXahpL0Vrn3aUuJTA/4D71VoEqwPfX68G3jfps5JnzWu3gFV08gUmc9IQZuT6HP';const _IH='61a24d03a813c76720a5b2c96866d1f68647a72e0d32e2b94bb4934b17cd5deb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
