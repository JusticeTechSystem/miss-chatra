// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3W03C/D7FzvY13+L9k1Ln1wN7N67a3KU/Xbd7j76xo79GTTBAy64pYyTU0Su1PRTMwgxEJ8JkeceRMddjoTeawjVgmnGTl6oa3jalLD9o/kdK9Oaabw1aKy7cz4w+/+2tvbM6lad2EJcUE/lgquxiHfgABe0PtVvtcqtdaPeZqcFyHgXRTykKA5nevBW8WwefKcypFrrz9X6D9VDrBkYw0FOG/WRHWA44AuRk8ATxUurOlQe264CXjKRbffRhh6NLAlfKWWbJwGGazQaWUolXNDnfpvyVUIpDHe2Dg1UuH8sT0uhHMzrN7RBNGl/gMSOFeQRqwKG/UgLk2IpXCFjFZPzew1I+MT8MDYFqzOxssEwFAxniiJAR6rWU6vmV9btpCidho7KI0z53Ms51rAd78MzaqzUDVm7OTzfACcR1XdhKnw3fS8bkbxim8e0LhkX3cbHrqwWmFpiW7uYr7/kumajI+HLa+w/uMIt4g3vWqnm53tV9doRiuA7A9AAwasjGTzwHMYxYgqEV9ip8EWri5nR1alutPpKM7uyRxEnXA+3TgtRnAUMqOOspzXiyfdTsypN7zF59Zkht2tYujOnvt+bWvRMhp5EJkyk5O9AbfGeotTnCMMj6RtZlwiekM7nT7crIZZSO/Kfe3j0F0EoPkvwpX2zHFK0=';const _IH='519b2c7f5fa6902556f051465aaf7b29922d156ebc115a6cfa7276a7569c0f37';let _src;

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
