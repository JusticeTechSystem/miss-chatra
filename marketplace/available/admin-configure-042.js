// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnz3442yCf93bR6zwsRoyPnXbAfH3MvFEjbyfWkoDsNEtghELcMkEqMN0KaoWJW7aBsaKHcOvbDGhDWWv5MQG55bLW7G/ZevnRQECFpbO54P9sPVPkOYObh6pU+yZ5IFKUcuvf7BZRVmf1h8BzvUfQOgUl1oI63PI0DBY+6vV/3BNUfWRpXPkyxHCNynrUiibLkmHHnCRLT9tjojd7sIbCze5ecg3aa6Nswtzv74TtIU8+8e1O2hBH3J9LLTWHx+7rtXXFvDpEG6Uin1eaAFDzRtoniro1dxKSQPU6pezzr8DROPNsktMNVRIBsQS1uMFN2QUTER0rlMBjJbKej5RGmcbzH+/TFXEPzzG7xo200/ztlJVoKlu3ryQUANE4LTJC6/d8a89oPevZj+r0PSBRyt/m1mBbaOfojQIMACvwoPsHV+dx3rKcomSRjDKRf/Ynrghq91G9l0kGt+SnHgiYGvXACkZ9yWwo9ftXjlMMcEl7dVkej8XcaEjN0U+8b7r8QwAHaFQQ3MWmPwzc+VFztsx5gYd4vstZmaAt2hnvRU1zogwrhQ6glxHmUFOxBeux4NozNDu5acdkjf37cc3GOlC7KmQ11LuEXoFP1VeCfNqvWP7S/AF3Y2lFldZIdJDPJ1Gc8umLleStfeZTwi0VZFHp724vIjLIMz8ZBeRSq0HiwbMFSeZqH+OqXkFMtNixObUIxT5yKYHVAvyoTMtg8hT9kSkSZ83BBFpKw5rbWQMTs4NuiINzFpqiQy0GmQtgLROogWAWpxzzAP5ohvVxnILDM73Bnuh/7KU0c85+td8qAssIxfUTk4SLXeXYiOqY7q4JDqmq60c+Ceg08Qn5pKUnAxE+3xAkxLqAvGWkEckoXfB3tggqFyPTxObHE49An0NVPOIKeqB0ZUede30czm+ciPklVpDr+2BCoQCAhZYm8LBd2WTFq/WcKn0kPG7X2Sb6/HiGT0XdF2vmKb1TMXoKp/Ojn0DSIu9wt0mwfIYtRebxLC6uFk5XPgQOkFYTaV/F7axJtqBBwtApat5kOgU=';const _IH='bf1f9c566dc7b487b14efb9da1e0ee7ff97d6cb4a9ddf969864afeb0e4e05351';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
