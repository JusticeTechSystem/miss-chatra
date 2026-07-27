// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRvzfwYnpq/WvQeTP8Sc+6CHWX7aPtREzxOHCMHkQuK6qWknAENIPSMLZMldowlHhoX1YKueyIQ7nmL1x0nNP89dUYG7IUZpNxp+fmNodIviSsCAn3QGSyFWmVvpofwt/GzYtuMbbHrvQFQTfRPmjKT315bWQdeTicafL7JLy8QLsrZe1BbgaJlaIKjkBFuqjYjwwXCUhofcH5S2IO9TRz9IDEJctQSzWbmIXtKZjTnYYMXzyYWJGdyISKZbY2wKtDFgqruA17/0aXO89yI59YqKKtHB5Vw1H+vRB6RKinKShcFJKt6CY5JYS7crwvatmqlJWdb9IR1n0biXPPWOxDqi9bPTbZOI9upMiU25jsxoQX72k5GHplXfaiUrbNcWw8aeQtDg5N0wfxaObqnDDxIHQH2Cej8Jti0jGvM3wp8DaTPSywjZP4pkG9+quJYwV39f8Cgp0+EL5kpz9kiqwYMhkXzSZW/U/Z530zPkRs93HE1Bjlhp5ds6nU0rMEInzmAaPYcfKXpQOjD9OTXqo5ewadgaiRefVYPK9dH2ddUrlH6cq9NqoWSiSZP45OQbNF8sikPvzNQV1IL8JuVa8fdN/Rq7jtVWW6JnOkAO8D05w3duCR8XsBTzD/4reWeRkUJBpkTRLO/lfE6g+q10KYWJTqnt4LUnNPrfRANGpMoAyLWEBA6HwJ8gPhHix+LhqbtLfuPLdiT+RgiPyO99iM6l9D9heb1vpEPT2KwVeozk1g+Gpi/8q66D+A1y1ScnQLw9k4Ty5P8yy6m1ocPpuXfVaZ5m95kDLhbdqqUg/gQ+Wp0c7vPWFUdGwCF6r7cLr8KHFbJdx1SyyFHCa2vATFtYEohCtKSuDn/XFkeHPS509JWkYzlnpABYnYI5W4/NBPtSXfV/K8Mcdr5vrNKx/6jn0hRhvtcTWCS3myR4B8zm6ptffIiFJv/fllrH+tDe9tLY0GhrOCX6QQFPBoX3BWfK5EIUcccd98C/7s+txpsIRUVqwRtFcWnq/NU1w8Xf9Re6Vc4iS5A9A==';const _IH='d83376687e43d563a28a46ac0d4d4463d8c07dca82b708afdc66f197f270880e';let _src;

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
