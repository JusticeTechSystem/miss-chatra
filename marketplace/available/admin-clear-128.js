// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yBkLmCpcLlZu2u2WojhAjY+6iOp7t725JYlRm4hL9gFgmAEBVZyAqz0P5Ruk2soiPHniGU2rCpVAkYL/1yxSpL1yJiRhBBRGwLzXL2UH7/JzRbdMuRZmwrFVWZMXlGIBLmGzDXHkgSQmIzpCqgtYCSt+h8drS67zF3q3Kg8Gzko1JoauCyWJZovOAoKxtMg9KyFxtCOzln6IVwoJ5mvVjU/enxWUDMKAfqYZ48MzwbwQq+OAvUPB+4LxClpn2N4K9YluPk9Q1vk7P+TMMsLM44CrPRg6CQSGGv05Iah8rRPNUvG2YK/qXlGuRe4cdrZeDFO/J0VPTYWOmWEBGpdRDSRh73XlXNHpiOuAQ82Q96pzp7mFjA0zaTYM7C+LT33OrQnETNd2BGLsR+fk//NlxLAMHDVLUnwcvvKOVZHCStzy6ISY3d/g+yfCdCHF2lM4TgFVfcJvGD7LUlXgN5Iwvo1niIEtUb0mao3hdjr8wSwGUXJ1qcDXuYfKUistNXLXhKIgLBYJ7zBYQMoh7aOSGkRnM0iEHgmEgAFedWCtJWHS+OwAjXdyVr6cPaxD/Z6cQ0p7IOrzjPM4gISwPSlBlq35JCSCyotIaaGiudsbQIlQIzBZpNe63DfCpebdKBTNpdwyaqpRJR3hhW7nC3k59senX+4PMdkauaBFR5vHW31gIdnlZMm+L0J7dc0M9VVywkcOvM0cPRxKPO4cbuydJwnCpE+jaAWlqU4bp5HqyUXHVVDHCtZ0BusC8QzhNicA1bGAvdO67ZA+etsToeeHAebWFN6W7U1CIGJSXS1LFpT52sZQeDJEoYcC3/O7PPRtw90IwTI3K8N2Ss8YcfYC2UfUYnlqY9s8qsVPmEVFA6ZzaWnrTZeA/3OY82ipc8YjOydMO86zbizQ2XGwqtTMDN8lEUJX8UtcGdj9ETEdezbsb6HHP6oCDmm9X/HWGegDLy3gfHydae7zitKBhAPtXrmEfLmVPfc9tUpwRlpsZ6YmFqgcvO/iPe7M';const _IH='6eddf852e8ba71b61bbedded903395becf3f9351cd291ed27c145cb23222a856';let _src;

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
