// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTrIBg7CVfIO6pMqd9uysWVdeCTFp0Jzkgf1kMg3nEh1QMxwo1Og1skMB3c7EpBHFUPHptkLRK+hoRZ1QZBzo8KHSu2bNwcif2xSI6JX/hQtOT9+uQ68R3sbLNn82IOjPHBM2VbnAf8rCRwm8k41VJV8jlLoiGRx3J8hUCi7mxXNp6RczgF1SWnhroJluFXiaboPnDPoZ+VnYYWKv5CZj7xkOulhNLIwfSuvQAX7xg940yZUc7YLQonYDzGLdd3h42Qo3FCprGcTd9sh7lc5pOAn3qR/gN9vDx1a722YmEoZ7R7qd0i5//nKqw45MQWPKzye2kDVOtfO1lFhciRlpoeUU/ryHTvh24cfRmVFu4AUGDQJ8ugSwSyfrAKtsrOLGX/nNc43FlDfwvulK3PDJMrg9o5GFOVD0H72dFiO6vVouga/V/DVrZ9IBAnmNJ2KQQil6yA6qVHaBOHst2vdMPSEQ06P1o/8hEEUPPWRuT6nxhRmBBHNVS/9+nAqVcF99eqLPJ+pPl4z/FmVuIHZup3zd4E/oD6YxEZDMEtMdw46VOF6VeGRi9KPuuh8YQZpHWUEItd3jY2VtdXYzSaOEORCnp0k+X+BQsEHr1XAGNMH1Ama/NJi3brGqM2Gvgc26N66LfaMMppaq3UL13l2nLVPQjUEoge6I9dUbC//himKIygDiRHjP/Q77m25EEDrcLiu7cBLu3KNgkfuw6xN+lkVE0u7gWX/GCyrFHjnmFBbuC/EJQSf/s5m8/fLuHlElK5aEiOVrjpHqSDP55KJ3fppZPHW789XJIQiF1n0W8it1AqSaRyhnr96uhu5sM22nCzHidij03sxG0pFfOkdQZopoP9s7wmk60PFJao5vBNtTyOb4LNKmadreESZX3j4UL9JeuxupFddd3AAEIzK+y2y5ej55BPF86sX7DkB2jgNyE+hcGMKAAn6Rsh374Qb0zU6d6b3ng10AV0lx9U648fMnduUYGYcA24n26xDchn8XSeHKCD9kfOw5z1Bwa+fyKnCOPaso2YTG1svcPmv4uXWv4eXuYTRjIF3f/17tQnt+p4upkpxML19lL8zOPPPePr1ySdh/5ZG8WHv/sXsWTAoob5k3WAQFDGkmYyErBke97e+osujh+VFkRsmsYKS6NATt6NMMrxL+dgYJFEx/VyiG/P1XZ0jW5/OfL31aoiu0qWccGHh1QegYLoEav55wxf6Heqtt4bd9VKc6U2iHJ2t0C+HZDEaiQIFBW83wQgPZmBv3F93VJFaV8QF8HNZ6tPbxURI1LV9W3T4hOUV/gCyNdGOtRNhUvUR6PCv5ENDXDHLlY8HB1JadUgfngK9qQjbDBiC94OXGALZTLNQekQNpoPNbuormb5QT5yAnVIUGbp2CsCGv2PfJEuM7jbxWHk+g==';const _IH='5d7f99f63c2d792c57727cea67cb410e8515c714bdc8d44a75379a23c9c86817';let _src;

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
