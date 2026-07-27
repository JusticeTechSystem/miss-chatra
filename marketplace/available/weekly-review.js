// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8Rb1w6SfA1OC2C0PqOdnRw2N1B3kByEDh6tr51qkm5tlK7q+iXPG1m13Y8ku/worjdcrz/1bqdKH5KPYzDKn7EhuI0TIxycQjUcpyzeQ1XbRuPoMIsdVsbkpZNG9tgNZIXDPl5MXAk1Cd6BWMctscXmUizAKN4tn8CLDsTYISKONZmfx3E6rfTwfXQDTb2Fbmxw4sW+XMw1U0/4v1e4rAq0t4SyU/Lzn9Z5WaFZHfgzFQwZ+VCVzT057dm+Y0pGPtcdVbcZhnz26wlppwEJtAhm/4kSli8/p30089HHYcF/qGQ+aaajknMklxTukmk3So2ipZ8pYqr+CC/DVHANpylCL+PnBNJw/FeT50bRQwIHeXu0WFlW5R+sLWvkgHA3JNaZ6EtQShnCoh2NoloSI3hAY5ud3lwtDgsym4GXdQGn6Bya3pQ67PJoNdeTU3zOo/PHT/qjOBIN7OZGmF9nzTJ1YuNPT+M+Pt4eCP+tji4OBY15dU7UxMp68xdmmFn6h8jwbafkQ/TQlrn8qZaxIyUF49620Oq8VwTK+X2ujOOwLGuLre8VGdIhtttFkuvi+doiuoBP0rS+biLXGeGEc3d2RnSKhnpi8kV668Kogk/tggfsH3K4G91Vt1wHDNtl8b03lwO/c3MzSwShyzgylTE59qj0UFhEwyr1d2TjmPCiv0v4rOBkKiEU5VSoXNjH5YI0g4bgyCNVhSW0FVb8Pq5MtpEgq316Lw1QglrkQ/MWLbpvZFIHJyphRR7H32e3GlJ/OEwSN+2eLDvOcdUcvZPAa0wCICIMu822r8vH0QtD+3oGowUPV1r/jT0nYhkn9zLzfDqbsDw2GZMD1sS72MLTa77G4Da7lcvB4FKE87N0vwHbQwh6pP9BFjDjYDpIO6oXbE26NymGeRbdjWHgwjZkvQmWDiGGuEmHkfFjPshoRLqIAKWvfsMuA6pwPL/GSYP/0Qjsw7zqXScE2f+71ks70I0O4N54zreq8ERJ6p4OwGb+7Ja+yMsBhh7SW78uP+X0Z6rTmU8tU/QxO7Fv+sas2/lebXTc5GKL57jY316yPeTkjqjoHyOWMPVsMZxXv7FdW135m8eTLtTmf84hyiAPcAo+8voGz7s/sy3JMlQXBHNHnifMQkmK0EikHBm5QGcljlHXAUk2LCGvUvLh7Ju/uGwPhYW3ZBcuEVtOmkTrEC2gkfP6QFugCuDkwhwhZR2ybzBQ7iyqZfdRmEOfzNL0NQYmK/qCQi+cjnSSqSo0Wpp7Jhp46vhX0P5wXN9yl10J7axBUlfv2a8NcjYYEiE/L/Xb58s2JQIsYrCiLpYti39FjzesPjansSPK8b/CT6Onuajpu82qha6o1NUyJmeEqLn11mgj7sZkehx1GRUc4CY9MYSq4F48Z2bN5X3ABRIgmSBU0aiE4OEWlcGfWK0DkkxiTl1g==';const _IH='83a6e482d51fb2d2e022aea03da6d619ab22f8853e01ef4ee0c9a011150382f9';let _src;

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
