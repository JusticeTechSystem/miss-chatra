// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT62nwXSxYGhEVhZEACK3DpKTetA70SdFFNHKmguuKvjesuKU9guT+P/3H1HOv8UnISbKcaRKG8Itm/MxN7P1LKb9y6M/bRf99R0Sk8sRybEdmTOCkOguIlcqm6hg0Xb5omk+igGcbPPC0MU3d8YOrepeMjY8dOXBLES0Go8zxEnnE0U3hd0CyDC430FOyEY6bt52aBRXJnYDt8daPh99bmxEccgPcrGYW95J4dPZmJkkyjZ1p9pRJu0DKJ3/rf14rGA7XkrS/GKtfoWI5tf/+XPfe+qSTFCqmVsvrXsM6dVhOuLkAZKAcrzSdSq2Weyqsta4MLqPwGPrSyyPdufcnkbc0z4CodNGdOYSlSaca6xsR989JyoirsQtrcJjyehMggK9dFZ1kJqKAgpM6D5mNRfvx4gNSPItxh9e9gJFRbMsGQn2Ns6AuCbXKnMLstkAy/0FtvdtuxWx+AkWAM9+z1PXxYfW1WPtNf8LyUtBJpMlnB6r6LYLPKJ5lNUz+kqAGhzvSeYtE/1Y9tZ6l8VI9uDAzNzlgi+4xcAZaOB0qHGojAUOIBqplDIgyUL0uVEwmG4LxroME8B1ER7nYVmdk/3dcG5WuhUGo3ID0FV4dLidpqnsgXqIQstfIkcSjjIeFRplADFWfKR+7XmOKxfl9eQnMqLKwSzq1i3a85vBE3aa/6/fu/1/pLwyV4uodofiMUtzzKUUVDmRl4o6vOcQihJohJPpj8m7k/s2N4Y+oQAR/VoPKhpC3My/nwvQMe2tUELX4icLDmRmjG5MBExYwDR3ADGnkKdWLFBUhQHA8fyliDIA6eXnxwgQZVwuSe0//ecgBP4kaAiBD6fgLDH29n1bEo8TzVBgd8d91CaRVBpRn91Ud6ViPEq7KLYsSnNR9EaRE6IgjHJPFlMGx3lMwy3c8UNjm1vAHGB5CcEdIa6W5u34uoGaqBMxTTB8EUeLygLftpjcE5Evx29RYbAMim3Nw2wIo35727egjoa6Etx+5X8NmRFWzGqaJlng+/KOTICk8KJ1U+33TnCCTadrISJf3Fo0+edL9jzB1s7kq5yTcpJ4IT9wpYuIQLc2lSYYNjqjRu6QG3RzBlj/gk5prr7HNuUaHZ4f6TRhKCG5+TGQcjowFNw8ighss9nuS6OkLL0+h2ev4iMzUWP3JRPdSdtbkUNK+Wx+d3tyccrz9EnO29hRT8wVxoOV8atWozQWnN6PI3ofkXPphtFjwg5LHe5noWekS5qpxncL0dROwCxIMCg8xM6gr0yu4DtW/8qw4T+Ku3pjvLJqK6KCAZbkOfXKAtUgj8121dGcn4YrBcPHee5b8+9Ejzos9tFNLe+40IFg8dd7F4nfWzPgKovmEmYzQuLnlR28b8VGm6Bko=';const _IH='3b78ebb236aa8627e6c90a740c0e41832aacad332e0541919f861e88e933fe4c';let _src;

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
