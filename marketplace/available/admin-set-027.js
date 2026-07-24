// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRnRuc+ZGmHLiqf1CU/bKqp15NcJBpbgDIWZ3BhN1zhx6pKSiWj/3W/FwiAazPaPVdU148CSo1Q09o8BmPEnOLIutrKhww4Yjswf1J0rYC3dNmpGuk2Te4ELMCyoz0+22vxR/NJGTR4EdQUUOC3llnVgVFZ24e7RT3hsI1aIoC5EuY2Mbs7NgWdoXcZRTM75RUmbcgUsH4toX2SDz/xBV7MSg6K6kXLi5dyejgp/RYmzie61VftomctPR1w/CwGby8zlcCzVhNo5ulvbg8Y/oB0eQn4sXa5QRg2SFYzFWkpi9V2nLBplafTjf+XD6cMsy6p4M54hR+5arj6q0yNi8idCIrtN5zhXLrsF3awvZpJ4fExljkug3YxtYmqA0jzz041tNfXfDjTc47NO47y3XzRrEIhjE4ggf80R3GUzJgEA/k7JxJD1TX7ViOGZJ8PSCT7OoWQanfg3HqN5O3ZdPJaop6sklasAo5toEg3KliqNVRGU3NhdOK8Zt+knJBjBzHlllRm98AMHH3t0kIhNWwsJVfG3yPzQyTcy/QoPF/1PJgC2Xts1Kkqlx7rUkYaPxtQMTEi4uFxShlYwoFWdFLoPVyROr9QfUbvnxFOhWp7eYIBRhgcgcGdBYlvcpJZK85q0Qz4e3KXMLMdqCRwlhk7WtKGPrvXVUCZrNU6xZcfzxMaQfBh4Lgrg+yVYRKiiOr2R4+vzJ5Nxa1HD/djX14hEwQxac5us7Ca66aLilJMnr+3O16GRKoUD+2Aemb+6E6v2I4JsVkkaORf8kbaRsGF1hWY5QaHu/Eo4n5YH1XwzOxCJUNdLrKKKh9B+khdW7iQ66wXNeaXXKWf3UGyvWYa3hFPyiv48DAAXrPJQ2cee3rcP4OuXGtyDkpAvielcnPhxam8tD6zicaz0o8IjtdUJADupYhqOLaoyKh5fwBmsXmZ1+Fgyw7LhuMK8vpLfltrWqwoUka2uoFCtclOLHygcQBtWGspEvA=';const _IH='0849a8e370a4260328f84895c7f556ce0189d98609c0550cc9e8007901df919e';let _src;

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
