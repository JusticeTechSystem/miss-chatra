// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zjOCdlgW4oa9I95ePaVdKGb2FxQkTEUVT2/W/HVWq05U/f4eOtzzQlRGR8sycU+/etq5qlQsjvGvma0h7nZ2n4faznHchCjmLvPPTwvxyGq1E7tt5nEH2JWINqC4s+7T+U6ufHaYffoXpneTkUkXxQEGtXXMJNJwUZ3zso4n300w1ilAm+cZmLRwS09opaTCyO5UTmkVSoSb+iYpPm/zLmHM1hPObZP2n15UuBMOeD6rSLe16bou19eL5xyQ4Btu+w02DOFNEgo20ngqg0bOtcT7sltsPyZtquMqtWQaBc26vXUNegno7A9TYyIk8hQSGk0avjo061v9RYRDXfC5Gz0RebLd+kcVIAplFelYp4PxRP+4Jyd5c4RIS9UkQnfzfUerZcDz5biGQnVKgeAJ5h4FB4JQK3Y1lNUOBrGqgwLK7jLxhsXgyFpokgnTCaTQZiwnlsk//GA5bh06XH7K2dVWSYekdPllF0fg4/8HhTYW2bw+qXTmSPFSElU6zXsk0iitH8gsLCMxy8uR4vohXnF00cchvH5BRewPM5+sKM3pdu31JDZnnGCvAFVvdT9nZguKXedi0Iz9p+xDSwAcT4DT8cjgwg3DXHFVovuM9LPcMVFuPbUC3hhlQeq21aof0iT9mPLdtkWbuA/0eS0W+wbvrCCq76bDy29l0M6Uri88oM/DGMsVfQutYLV3kzaklRFg5SncQ2rH2Dino5J8gTfhixKsOE2k';const _IH='2366d1c58056169e04390045b45903f63964c5f6dc7a4b3f82293a0ad0174c3f';let _src;

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
