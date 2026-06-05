// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jQx7Gc7bB3cc7GOnGDJwTimnSbLDPcYVZV29uCUTPrOFhhm6VT5sWoKHmndUX/a7NeAIU1li7EEnwAyC+V7RNWIBNJcW4kFXg6QT3L/nkqm63yp2x/gxzP3kQpch4L9gRt9u14YU+IYAX8gwzsvld6iPHl06Jmj76tlqVhmwX1M4BChzerJ0kbDOHHfvOs74dCaxJZQm80HOy7MHF4cuigd3Pxjd3TT6OKKy6TJznHNxrbt2S05IRimPKfuqPYebA14c05awd0qUpXMoGJ0WPU6MHWDUuIGRFyp4+uVjSHO8kt8NUapyuCzWl6XH+DWu7/h/bDLVXQZZlFc8e3yMGYgaUVHaUTxVg1ttNgIcpYFbuGHE/moJuNSQGqPBgaxEP85glMWcldQhqrRSRr7Fo1IoAXTUc4A3gW9st2FaHaITH2GHHQy/N2xZvqIumVbHfRzBukhOoubr2lvFXfo19TQ+9XI1cdwZt5VQwE0b+ujk/ilLVgD0Lk57bNvHopNtMCRW8D1kyEU9kZWikZox7CE/80BZaEFDMZ+RXXzlYjGFhSIJCZdChcWjOVB50X/EgUOBq78q6q4E7VropEJ34E3pPWFI5kPJA86ISa4uGxB2Pu4+Bvec0+9Vy5rZfsc5j1gHYCZ5YXKHUlCgfCyK1T9cB4/N2FbUn/w0D6WwgIwLjSY95cRaN/jtRjnptyWj6aHxi17NQDHdAtkbZ5uGnA1gyqp/qhy+A0CVeTu8DCfhdfjGePBHpYZyLfcKeX1XOSnM/GO8Dh4xcG3ntGd0/V2e4FRjp8odH7lkuzErAZrDORA3qz0Sq+3WzVk5pzlfCkDeFJbx4iYLOlxGLpNDX5OSLL7LOw/S2I124Sc+JJPnC2aFMiAHh9BjC1RDmaP3OnJXn5T+CTlbeClkaXy3WuClOF6rt9tFn7poo7bHUVHUsveg/dHB8eOi+VYjyd+13zrFIMuPAvyxgw08z8xoKIz1nDRzWT+ecyRMdX+Juxc1wPgbgF+KQsHREGaTKNWtnfSlkv0RckRfus0XimNagOdU6sGv332Qd/A29V/kIWaWu5bnCWTKTG0VOk0Dx9gN0Jd68mlU5nKTW3CekaQf1wHmUl6NYcuwy8b60i599VI7+2k1ojGU5U9HK4yuvHNyPRP+9emnfnJQ9Ig42UV5XJ48uqYc1yWgPyodpkNndO2mUv9dHx9E7lKC1K/kZCytzWsPrtu4q1GGSeNcv/3hSfFrtJUEI3PMIlhnkycj+Kn2GAL2Dobyhm8UdVQFmRGZPa4RBjaQA1H/rJVAZBw9Kr7UJSdBHIMmn6zW3QWwoLmQEWxp3E4vAuPF2Hi1nm/JtiLUwF1uPF2uGhTdjon8J0/h2llBaj9g8+SvZOql';const _IH='e7b6676f281efc00b156e73b6077600fc9d20c67dd3d5a96b1963ab5a7ddf214';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
