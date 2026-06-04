// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0mFNS70IiCT/jcMnrrloX7qArejEFsJYjHbvCYtdGf/cH+ApVIQmzE4ji+5iWYdmSUVwcpn7hURCgrZd2QMxA1iTkFAxGZ8K040XIr2a3c7ZXDLxor7K8rD/ZDprsVUlOfBzfOQ81A7IVHTnUmJT+MlaLkgW+hGH6CAH8FIee4ELPCWWo3fLNp8x1NNAtqp/jm71d7D6BZkkA2SKShIvp3CO2cvhdBN3AzkvsRSMU5Ihe6J3JKhgG1S8crQqkGzLo2IVdQmC3erShHk/lJTmaIEHXHIv3xsdDu2tcsiOtbqOJvYnyY1tw3xFm2sSuiaXiazlwOvtiJd2Nfd569whoIsOzvhxM2IXV59XyY4qNPFQbf3ZUerDYjBMjIf6GvWhT9M5Xc8ZsYJ7hGFRhKwNd+wjIlG/mtMZ3xRFnkk009fSrmwLZHryFAutTaUHfvC6SSV3HAqvIRcd0UTEiaA3iXCrhjgh/lCLvnVXvZc4olRfLd/7cMJVEVCv9wPtWr/0c2YxPg0m4skIoQINXrK6mLoRgLo3wLS+KlE0tMqkfx8cuktl7YnLQvGI2PDEP9PcJQ7st8z3KBkidonqG1vsOlgqF2B1aAoW/9/oZ3vmDvA88OE30yNd3Vz4Y7k0nsFh6i7er5hN2reqwAscmR1+qrfD11iakfvJlMw3g2nbsyEZGdgYLxtTFAgByd7Qu97dWDqs8kocozmFTf706C8ro5C+6P4EquIZyQtHrbMzjal57rEU11TVanXygvrgjHTG4PrrDf9fgbMPnVlNpxLUXvrLnTRkXIAaSVEiPZ0/CrTyZ8C1DUgNTlpk7J99XCBa5+DGGBPGiFwAl/Zs+U1KWMdlS59a/78KlqPwtaOJl7zs/8F6p3+9f1X10ReE5qCz4jIYNKf/FPfxSt05F4I45QciSiiXrSvjshVQ9fHEU9noqJlzmIrMLzwbjBG4VcKqGzydiYX+5/6jdnvtWbPYq+DSjiVAj/eEEQI5IIGoTqyuJZlK8zXhPh588pXJZSPdpViQeLmYOGROrqRm+1fCW+zYmu4gVk9AtT/U/4I3+umPY3D+uViWurd8s7TqXbsDvwHpwITWtdMVmbtR+wIhZbJOle1Qspt3wRsetMg/Jkf99+R82xMNlbg+OS330RdMiIwHm5tihPTB6T/y279+Kp4Ym6MIm9RFkZiYqpvmPJfqhhOAFsF95lOjWfoJwoiHpVkc9fjzEqwCQd2Ge5bIt0JxhLuk7m6E88Lt8Xq0TsvQCj18d68+zmaMt8ItP9foBZf4q6Tqt7C1MEgGmkC8lXjZdyfrhIXHTrILAHiLkb/0vGAf2UqwAEIhiewr4AWaWrCeUMdMphOPNj3YdAzYJiKghIpxLYEOevPU4Z3PozBHGys6LtxR+fqvBoSXbeNLjo4kGEU5RYDo64xg+JpwTVTmW0aV9e45e2jAJ0r9HYUstNwAAI9P3GUtvvm0qlvlzB5xSCPA/iQxjL5rFQAUO8kzvodydtN/nQZquG6e6y6p8jF58KyTuY+pNi54qSusS5LtjdwlZUVQVz5XBC4hqiqJ7XurwpkjXs16xNQlbWisg6B5m0pSdPZMgf3RBa8dlFeZIJvh';const _IH='8815fc42feafe1da071eed8ba3d89060d5b2b1bda051a43580f562331181ba7f';let _src;

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
