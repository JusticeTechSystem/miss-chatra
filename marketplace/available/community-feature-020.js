// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCg8Yb9Gb/q7ydb0PCKPJ6WANlGfuXbToI/zlw9skUrBbop8/x9MA1LmTIHli2XbR1deBTbT9+vI2eY1cEJMW3XlvK+Fs3rnBwNR38eDNatKizDNbKHFC0LFtburbXeMi5loWXB0dzAyyErC9ySKZXoC9V/hS8K4vtRgXDRKwslHMctV0qhsvBpFdJiA/umGung4Cgfa0x5nMKOxhYbXgkfCM1+l0ArvE46cdQoTcV3S3ZowtCsgSVcDbch6QnHzArgrPFsIM9HMi+IBgWCGzUzNOcwWtVxU5e6+mgpp9z3YxG9AWECHMlX9Euc3mvuwV7SXG98B4b5I38X6lG1mrKgG/IgVhg6+IT7vivGqR/Ef7YjIodyJDl9bR7Gw/2AkowG4yoWfX9dCh64yNrYWJaFHnjTyjko+uFNXQMGXuvqkTkmmrqM7qf8yUNHduSM3JXuyCbEjg3LBZd1yey8k8G8ig3tzWWjblN3e5cM4lbOTQZC2CGP7+LBkvEuuW7hQuRGpUF+O2Q9L0fNOjHscm9jngUumN8RzP/MsSYQTWvPmA1Z0BtSLoJS4lCT/Ge9xEbxAVcGnmMV5932egwbfoBQHX/UERzfqvAA3cDtRC/cArhZcF5pd6y6QWwsU5eYqKtySFhAUAPzvlmuJmkUhhe7EParFs+ekGhx7TB+J2qAUMFSuCOe/Edm4RDa3QyLS3BaVJrZTkogkMLkvHZssxPQfo+5wLgpmQcCWAYMM6SLsZv';const _IH='cdff25ade2771e1b8f1c2ad26fbd567e5afadd0dab7a8a4e1db86150263d8578';let _src;

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
