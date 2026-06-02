// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MpEOpNNQNA/0/ITRU+xSq/lLAE9z7vZ/jYP7wdudhNINAph9iXhdec6a80cNI1gSAt6utmehyMHsA7V04w/c/d1uDCGhNV8zEgCsEX70N3AYx0KPiE9qlWZADfAdimCeX5dWYpUgd9W5DC43xRhlTKcF66WhDMHoVHnIW8Tt7fIiQd9UkNZpufTH82eSq0d9HprQauDCW9SvC2q8wMTh21fO1sSdL9QAwvRmerf6izllVau9UQblLfBxnJ/Eys2hixAmef3ajCvqwyhHmps835IE4XALYdqfEnFnZ0ViPWCMvrgn6PvDnG1H6KZEgTCMTBJmSysp1DzYDi6q/BMsBQN4jOB05j0CgG6cuHamnYwDonblODQYxy69g4FaZhftpqQ5ypCWdZkhqJP03mwRHhAke+5zaSW5MiF2Id2mxNmcJrYEgFJH+1SdMXpNXkvOveEwcXnROtBGdTCXcZZmQkJ/nSLMPm/QygJD+is8rNBhCjO0uMkvlT7Yz28GrOAL6qRmP6Szguo9fxEQ6jydMhn9SfQVuUm75gBCNc8Rl279KXEWEZa59CoQUpDVUkHaKM3VtHaBt3nPO0nXyK1PB8u/xFoinBQ+GOry07SkGp/oP+mL3JI3hC1n0ks5RnikkvAyPl7O0K5lFSHzQ5ij2E6oZIMQXJRSaaXwJpnrbt/xfYc2ACMzWNqIYV7VyACaxZSHTsFEspASlRzVr1i9un5UKDMEr6XWo9/mH5adS9/pMuUOupC7fj/0zPr+aDE+jfpxgM+WZDl8DV7uBGc8kgBDS9kDrETsbjN7OEQGrQdMwEpAcrgMIRCb0SkV/h4N2KAyJQH/66+WN6UONyoyv58MQz7Nvp5Pw6L78lmB1vCTZ51D0aHIbNbAyiytVK7ltPooClzHXRkZJq20i8464OY7Eyt9zykIjxtj4F4x1qEaaRs+DF/FOkKHWv3hy98I9+hNS51rWQzsFlk6StY0kIDVk1h4l5Mchy6+Achix1Um6sQLOiPnSeFF01i1+DkkkzmWsqYdE2qHX8nHplikdTWiYMfeyJDBuTc4j41aJSKY8kBDRRmJm+hp6GGWcLi436EHshcubfanfIARSudfVrDDXPMiIoGQYpATe3zcR8acdt/R6xUZ/oiFJU19CdnXSOi+6ghm2PQVTggr6gX8qCOGbsxchOLS5rbBZA7xB9DeWFy92e5d08F+R4po2P3gFar+Ilr/A7iVAa4EdGmgTHVObHcKMoGpMIRqaPLgwtzz2OezL1Im1u804dwykYTV/YaGRYfSVPKb5R9RDxLhKGsizOIvkjpJ8+XMGZYEkcj6TrmUFljl7m0i1hYTSUphKF0PRQNodPXarmTe2qfLVD5qOqG1WCB4AK6Hco6V';const _IH='d4c9237b15241fba24567b3a502008fe4ce16b9d9fa7fdcfbd9731a435543092';let _src;

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
