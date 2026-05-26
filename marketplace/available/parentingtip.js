// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PRlkzABDfsaKPuKUpZUbOo//Mba8VCCeJFmEwIJu6Uay/LEpWljhqKiB3f7TfJuNAX9CNR/RD9AgCTn/HA81Lh7zBAWMNa5/ufm+clvkA2c2ZfrHNXxBaH//NHZWDcx15DCl9LliKThyzEJayeXImDVftBtGZxwFa/NkiPAPxTRWmc/XlzXKHV3/0ENJz9qeRJJDE4Vn1zZ9y9/Xz5fJbn3afHfuRYLSLMVVngz8oq3hDLN/5s4lVC3z/m7N6x6Swv6gGgi2tKpfuN4MdhTOpqnP5s6Rv35IxhOWn9Qy2p0Mg/Q4DmZtaHYGHoepJSOPmTqfsQvylkQYsnFdcwh91jRNfyML5m2uGn9uWeD/5rx7MKPcyOyNP4wINxRO9arth0nygi34ZeEe16wxvGC4GaVWNjIwlgvML8aauxVWDwTKKihfOO/3JpbESrNvomprBIRQMH/B/RwfXkeliswNwTAjC7WD5nwTdnDBCDohHul0xsrYQJpmGZK67YcwLXKWDaMm4aaHVNP1CUkSl8M0gTGSZt0VBku1jIRefNAZfuhOn5sqFCd8mva7bgOd4DigKhdQrHLQurnrNzd7xyIPl4iIcf7oOl99m/4c+FQASm3COuHOsbIV3aF9vKl3UinY4CML4B3Q4XxG1h7it2ptMDJyY8DZGTugpcyTXdkawhz5Cxq+VOoX+7FETe/DF1gWzrJc/K4fADiPOMB0+nfbL1H8GC0AnswdP+ZUM/O2iw1MwW2qVEH8jaNQc7fDBofZl7DINVsb7TjvFwId9v+pMJMHK+qxXB9WU4ndyP2ZOmSOP2nfCBU3QS1eTTnspDAWfTlSBTAgyMuppb8CeJeP6yo14V+Xha60UifE0+MTao/nYBMZqVbgo/g5eXNXdEnuAgB1nbJqWS/RWW+JfkQ3wmuH0oYiLr9QChH6U9whQfyt8aX/FgKWVrKKbYYQIIcbV7ys7kzK8btZSIuShIEPDLcmw3PUE4bJ5ieYgzwM1Elr4OOrLWfPZjGAk4ld50yMZOZWHCWCGJNIkxzeR6KSbIcqhhizoKDisVwHWfalYbTN3IUNavZDfAANDtCUMpO4f+Q35iUYmBWjd0mqQQtOLPkcfA20t2TMIxYil/dFZEs+SHVTAxT6wsaWHpdVC6tKO6rcC4RX6h900UjWI7nithZNYKuQybpOV38S8iDMaVB3Okz6k6nKCZ+WwseGPAqWpEPKx5frXA==';const _IH='321d9819f905352582f43ac711da4ab171ebc8c14a0c7ad43d1920c87dd161ea';let _src;

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
