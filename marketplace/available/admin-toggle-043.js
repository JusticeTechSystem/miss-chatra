// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZiPesrCh2/maAwH4ZXjmz+RC5Urux0LSodTB6nQ71gToA3pMuARX3KlnO84jWNKeMBtAdtferEGG0vrDBCy/LloO2tQ5aylu9BEljpATXeZwKdVSrZDAPh6br4lWeO7SzUQMnZyws9HghE5X4bJ1mdTKJu9CkaFmUg3jUzMZr0J0iqrtJ67kkMKRbKZV4Q/YBT5AyCw5uphFJigd5femK/B7bxXR/Ow9DE/RIEbhphEhwb4IOS2mRx54AUD+D+aPm7SLSYViCvCb4M4SqFGgmFOW/+rN0OXH9Vs1oQKVB0Jp4g2HZ1If1GumD1V94ku/9jFsGaKFAz8po4oif9erzohEwDpObL8YJSqRNXGp0upFarTBIofMJg2801J+qOOmZH6K1UYw+bx99NI2W09igWyHDIHBfXSDTsTnx3SCu5anU5CJ8yS3QNtnEe4msUxJaVxn39/zT1OguBf7q+Sus50MxWvRCRTvYiEysCW05Nxk1/lx6Tli7Q59cFc+/4CgUNK+BE+4R/H88jcnmTktimHRpRgSWd/cDTTfLScEsD9Q0TR2C6KEv4rooqlzM36cmxmEYH7/D6EXe6txCkP2B6WQAIuHMgqz3XX0v3ZjlJ/qE2GX6AEfAy7cTBA/921my/Qc2VBdO6OKKPuFURgw60sa4l7o5Ia/i1Fj9xRitDx8Mtmf1EaaqfKCs/nFJRpA7fgSmE48L1tU907asmOq3INvdw8V7GPe4B1jS0cUyj1qhLUPXVQNXA7apbkEU/vm+7tCew+pPA+O0fW/ITBRzWSeKWyeGhC/cNfOFj0M0HaQal7gccLQvSAKC+cQFhtVlN4yTtAaU2y79ZFy7PTEJSqi+Guw/c9Xkm/g57xS6qtdLW291bnPTkeH3kb9VxHGv9+I2U5KjSJ9A5eF7Eyxt+ORiwkpIvrXQl3UsSMC4JhQ5gj3sTMJJFDTlqPQgzAzJ3A97VgxjdznWtoTECQng9abqRQ9dlkpg/37h1rsxBwKYZ9oGlI5aZVbJoTw=';const _IH='65fb5865ef5ad2f7b0bbd21170c989ca5a05951176218a537174e17cb3c7190c';let _src;

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
