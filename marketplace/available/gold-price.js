// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x14F/eI8lCgWxPi44iTAp8qjZRonYasiZEcMj3xNdAtL5McwJD5DxWCqj5cnk1imi/dy70mff9w4uktO/fCLz33gnIe7GYGwhQATBX7OOvOHy004IBSukg2N76KkXlrJ+ZYyDjKZezjaUegcAztt0esvjJQBkgrNw0cSpvPa+hJHQ5zWMBRfHDuPLTEb36SeMJcNEjM1A6+cwr4h9T3oVmx9vondVFZSUSz0byrLM42vRs8QY2AUerQvGlQQH6xAJBV+eAIMXTBj76z4/7UW5uQxkzBz3XcZbqsHeQOYK8RUYho+//U851XmwOWwupriWpZFggUsQm954EDKAb3+Mf8gIv4mzOUU6favdBv1eQGRh/o7AqEicsd54p/23YliVRFHixGu4gxowTygATJyMJZ69euBloKbmGmi/WcjiWQc7AllnIMc/FVfg2eRqO26jjbDhtxIww6OKdzGEDGQEMmm48AJvddajO2Uk1aJYwvwSjdFDOixTSjrLDBa89xwIRVslJ2rGM5OA8ab47jW86xQLGOq893GUqQKD2XS077LXPoIpa6DJ+OqPYR9r1fnX2Q=';const _IH='75407a7db361f7760cfa29a7b06b7568723c07f234a44977510287e8b4bb30d2';let _src;

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
