// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR2jvhfjqUiMaVBpXOVlb0HRQ7uSGEsGoeZzN0E/V92CDPrJ6bbKuJS8Qc44CveDqxf2ADGjBCc7WKbYGDQAK3b6mRQKZoMrVOMKszK54Ij2LWADeIefyyb44VtCkt0anvv3P78UxtdXz/qX5oKroihDmtysKpHtO5rCKpbNbeFfRGh1mgxLJhK6X9ecoOykz//lFqVnAsMZeLzC1NUQ7Ew4n6oVS8pqaAGjrTdbwRG3XIdWmYLHhTY4SkMp5JHKXhuZe5+yh7K825uKxeyMDZsquvnac+G0OYwz75Cg3yOuJj7F5OLJyBeXKQi2fEXqJZT/UxkmT71XXcHSAC+tYpmqiS1Dx0xOEnB+my1dkDQbiH9dCAOYtU6ONuvmuGaJibFJ66Z89Vx+rCzbznZMrdqFDZGBQrDTKENxvrKApGfbowrnYERBNULJcZSfYMKnijA4+j5NHa/TemUs44TwnFG7wFs+oXccqM8XmVu73+OKYa5ZMVnLQa6dGHx73O6Pub+juTX01l7S8QjPDE3i82nlqVzdBq9EwZYLsYh2KTNvJYu+6Ln23dAy7u7UQKMYuypMX82ahoKM3V7DoXirH6dPEurSWdiIdPnthCc/m3yaSj362LM1k9ond3LToo4qHnwIBzZmLd3KBHHJxE4QiqBPW4onWgE4NnrlkVN/QCazef0xYqgJWC/HwsLwFvVB3nS7TByKJ+Qc+oMo1X+ZIS/QofJKrgwr7KiaUoPzDtd62b8BVasU4zfZ3NGKu/fQiNLRz4Rvo8+U6RtHTLdHf8wV4+moMfBaXxZ8Hvtw/waHMGYUyimEtW2yhJJAmDVMQXXXOSFFJW0TXoc2S3GJrFKhIzhdZmJW/TJtyPSs4vwZ/XnNN1FyKOq6zB6T4WThz4y9xTngYojKKATZgWZIS4/2bSuyGxtjw8PusqPFNS50+sff4DH+uFMb3F9oqdTb7KA0ysTOLc6z010BZN6auGOg2Jr8h01P3gkiR91RJd0aSRO8K6SYeH4SmUP830PBH/nCanaZpBS9rKQ/t+UY2gB+nv4g8Aol1g1Mx+C02Q2PjmEC9siSCL2dXamFe9rplNu79JQhKQFFxs=';const _IH='eaab82edfa077dbb2ce49c4b01231307cec94c4c79e00c0f421f4530737348a4';let _src;

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
