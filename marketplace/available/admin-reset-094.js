// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGMCeYasBRJRylnqSF+oJkR4JbizMlNXCloG/rsrOzLxjboFvd7PE+eSOCXys4gSAmDsvUYupX+F1NKRQ/hUBHur+G8ch9zcaemhbp6V91huMkPpJO8S7D8HszIYeTtkiy/Zhk2LYPOUX9Ln4LXYR6jAc8kUBaREjLtEqQTitl8npOWxi2evQJ6E2horO2yF6BnD6hJ7S3Iw3JTL6CoIVv/eRrkNgzdh2cgCm5icWbPQXXPtLdOEo4EzIq+OOpTCnKRhBr4sNMFTY1Qwu0zMBb/NW59fXH8PJiUwhWjyTuH58uIfC6OUAo66i6/k+AFiFG7/KRw6cy8LO4kFWcuTY2k607OU/mo/CQEVJ4uwEL0v9bjyYHsK9QxFIFcd9XpzoUNFOYlceZjfsvFQA1/mI0maADDjNPQLXx+NSPYJMPigHqMbjfV4jl5qbmIHFSZKA6+ACiWPg5wA/hNu2j6NOW1xrDoD6e2qDiDgmq7MhICk4astZf3AxC/DYPS4zJPL2O86srFsoMlBXMxxCLAd1UF8s29WvXLkRuHZt/vwWBbLutlVzoUVjN9ZqasC20jeYYHcYpm//Doz7N75/+QTXDuv5npNHS1qAV8mIvjq9/HX4vKmDJvxbhG0v9rv0iG27PKGoSQibD83+RQi3AAohu8+L1PVqPQOqx+8+CG3YBtVWSPIMW+RzCWIWQVdsDAuEoXNhAWqXbrHlww1c/nPYzSWT/h/s/CP5lfGKpphcftXhTcBXiatLI20XJkyHn/JP7dxP8MCEN1wP4ZyZ2+myM9X5v3ObQcTedEXhrHYyhctdJUlX8ogFeLXyqidCnU8GtkBqYTPoSin1IWCgyBLrCFTSxPT1jcmQt4XlGYgVJnqhhvfky+tDgMb8C42/WPaHBMDtrn656PdYN7c0NJ2ihPI/7a5eJB09c1+OXKvDhdiaPCS0moCn8M0lGNA5JFhafeovmxHRk/XbVnx9zis/26o4iIlarGBYm5FxXSaBM6YLGOE8dwg==';const _IH='fc40f107c0af2a65cea966ce545433b0151bd0e7194f3bc90fd6310488c53eb5';let _src;

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
