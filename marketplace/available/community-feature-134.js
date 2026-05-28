// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kvbvjtaLdOD9V7gj+utTkV4wTj2cmCT1vP1+BN5Ln34BgOFGeOjpqtohgmoMK0jOkcvucxVFooSzzODivhEbUuETuKVhi6pH/pmc9Z6mHN5HlD2bPdoaOePexiB0eR5igvMKs1QzhE3YZTFq7mNykBJgtwH37sIf2zmHAfQA6zkKBCcklsdCmDbJx4OL127Co8PGERlYFeiKWwN0aOv5ONJ47AjnMumFghcSy4fPATjnxqJSHNnsE1vJ5+hi+otCuCv3nkyz4gO5L2JBGY90hj6Gb0kHfxJm6NgfRJwLRyDrIxju3SXi7PAFkWhK649P/PGVeJjvYWikhF5wFhD+eaex7P2YHD6GhDGo+lsAJHgxeIN+XkNd4AiH5yQ3RobUSMRlkYUk4c96LKfY0vIZvkuqnkxW3aH6Zqd7c24Qh4sRdrXl+SobDHsu+heAtyfwAgfJZMFZoK7XaGkfxLyGT1pf0k68/+GhJMCrUFKaPTdZX1gbCBpRKfpjWW5Ji52fArDRJaLkv0JHUfoKE37Ufrb1ItpKsEkNqpAX0rlIijWACxEWnnj+k0jrYgZuB4LK5FWgidPp8AEvqfuIlbOP0GQbZdReV/efHoStJx1sFFRv9HTE1Y4g4fhtXW0GUSPUPEc31Y/oPxC5xGkpG0MYu0iUAzZx7pLdUexkawH2Zmz3CW2eQFW2imJ0wWnhe5DbutOmUUa4OGAtall9vwsnyn47PkznLUSzps0Yxl7+CdYlpA596o8=';const _IH='c3e5a79132c769be0d03f6b88912444c2b364b8e08b91efa49d66da8d8e667af';let _src;

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
