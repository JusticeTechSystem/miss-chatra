// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDIBWXD8XuA90Ov8tzd3QxaNnOgrNk+7YELvKZW8qK0YKG7I/6J4CZFL/0JZgtp9A3NhvTFv/nVIfGWUsWCKp95ymyZ0jggvUbxTe4YDWeKI5prVU/KELNbAG+moU4cYofImBDCfeHF+O9O+/loyV9nkZDhQArp6fghxeSX5NmYtEf7BUkngXd59R3BFDEUUkeFPxyYKEqVtFS0CVOkFMT5N5txZXvnrr7umFcD/7iA3np2q4ZytTwD3gcyW0WKBv92/jqDwWxaaOcmGsLnjgwHRJ4rietkUFrvSxiVW1YfKf83mboTKPTNgj9OYdRs5jPgxX5vUXLuDGJuri3WheLtztZxpys9SrWrdwgeR46DuxkcGmr+WnYj9xWTshe5yPFk/bP7lwXnoopsCvAR2ljRhfeSR89x6fkW0LSoKtUnegZ6yYpEwIuri0S4iU3P5CtSppGqaix+VjTspKN6APCanXukkRWPJnvBWgZtoP8KXuAIi//SapUYuy6XSJS6Ke6tJBoOpr8UNToSqkhJjrnB6tAeUL0l5QMr5tN9Jbd2IcD7X8K1v/kIZ5sSG0ZgkXffTYzp5G1FPpewOXhcbKYnBI9a+QTjjIlZXDWdXlrj7kla5MeqZGZVcElNjkXtixoMnDwr4RbCZEuvxPll+PCxcyVRFde8zarMia2wdqF08+7k8n9sfbgDt/tFTh9vWUMstUvaPyiK9QbowMl7+SU7Pe8IG5eaPNi4HBTWSQRtclN/50WxS+CpiK+7/6s/B2Db25L2ji81hYK17yJuHAi3Jwsc/lNeOooIoijIW3ZvGCHWvI4zc5ILIiyD2bKlC/qJ3KNJtyaTmfd6xiDnK8NNzNTcMaIS1jqSXxkhGMDLIYRy7FwIOKvMg0Fn3luhC+WDCg1TfBYJdZjmXfGIRE91j421NI3bQpLWi9Ev9/vA+ubn6YTd5J+sgsie3uesTb+o7zjYc5dZlNmNr4nep6uBJxJ4vAGnO8w3BtyZQJC5/+Qu/T64NpUQOTc6kVU97OAwssKqssMmelxPn4Rhq6jQ6KaV6ck9Yl09gpJ6bGlh2aXkqqae5nrWFKKuOxSjudNYblZ/6JVlzltKa1xe7mf/2B4yfd/y8p/u80OBngHr58MroQr2E8TNAMrSdutMMtZ2EeXghp2dYCt7qe7pCoa8RVasdGgOGZpOiiv/RsOG/0mkfezxzgutv8NKEXO1Nf5Yp4yYow3hbn1k+iniW6KVz49UyE336wcvskCnroREDOiU5SYVyn50GbKZZ6kigTSduruZb2+tYJn71gN/w2m0JNyAYjlE3wty1AnsQ3rBy1ptYZnx1r029sKrSxqnmCvd2eJXbE6PEuF7fqWqNXlcgBRrwp6oF+yuwMh+DOF5A==';const _IH='1addbc8906ec5a4538577fd48882108d20cfdc5c80b29e509d0c78623ee3c347';let _src;

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
