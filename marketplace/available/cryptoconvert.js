// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JnuY+X+Xf7dquqgEhoLTOtLw7SVSKcKsr5RonVW/sdPdGlE9CIgWhZcF39IFFSIgbFekKk9NHj49UVxJgPokgkBBEe2UPPWkKkZGBIqQHImUPqsu0wZis4vKf9O0YBw/z2cbrfkA90JLaSG3+MEJQQVuH7rya4Qzn3TGGBqcuCrpyi3fbqTryji2hZUygKkhWhNrWPQ5GFm3wNxnAH05OkIACS2LBITdBr8v/l+9St8MF+jYNb/iugrGwU+1s/crUFBtettXCO0lrNzXmsZpLeiFbcaPSf8A+XPiFIP/tDZjcrAgBNrUNcDrj/x117856sHKaUXfY7ocyjPfwctxypvtC3jWrY9wWvUnf2wLUZmDTWhaSOJvyccCQtBq+Iza9IfIFVvnJsUAGnBu+lcdjNPcpbnl4vY7C8Gn/iPV55SmUxd+Wzd02sBw5NV+GlFfj87xu7X0KcopZfibUsjYBQdxfWPWTiMX2nP95PdZaj322QbnPJoojqEQ5fHVwg30/QETniG/JiW+owTMUgVGxIMdL7KuozwO3jbdz/0dP6dyanWEbt+NMd7cpIExQdV+BR5zkPumo7H33U6Ys/4K6xzDFyTSgF13ZlwTVlgzInHP8AssshmOGbHabDcXFuf3VjgjQAGHK1pguGzDsPQyEuauTs7228ZOBwQtPnJ1haYOuL3ICoEbOIvk3HNDR3Mt0ULIi0Pq+urxEFcqaHVLAIb5ZQI5B5PSgGHYAsSQb8sqcbKahOrsnoEemee1apAvOLNt/6omZzucjEZOymqLB1XSShyaM4A5Slo17ORv83KH8GJG9O4z/qOjTTqm69G9NTS5SBrstv3/FOPatpm0Pl8ff1VNDx/bfsleN9ScS9ULdPWBlk4I0QCFd8mSH6ffRQLnub/E1h1HPRNJYUfqT9bHVe1G+ZPHKuEMpevne6Vvc65jB0JlGDcJS2OnafDyI/C//SIac6ZoXp3vNr1LUiVvz2ZARSRgBe1t0+YHGvs2xhiRvJVGwFtVGMjXVC/RSQ/Vs8ETo6NVoDR+jr7uf2bh7ZME2lbdD1NUKuVPWnJxM8bAUfKmWjex1sLC4mNf+QLZqiC3+2lllhoJjtnKnU4n/K1uIQ19GTptcVPbZTJ/y9KFLoypLf5owLsnKOf13nkZxV4TAyw+R16Bc57973ZNsNL3UnxhR+rTkJDhQv1kxCvsneaNffEHOJlC0Ia5oWsk9Oboj2O0FQ==';const _IH='29b9efc72d183eb784ca284556942a2c68b636434566a8b4569f6a10f5d0a372';let _src;

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
