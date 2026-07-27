// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSrazrAVxnPu8bvj1CI6qDUosDNz/U4vj2FftMaqBrrupLSAHO59xWdvlZ/gsxpqt2tvdVdWO5OClgkp+L+QV+eHBV88rIILJcsJ7NoKDD7v6SCKBd0hj/9aOvwIijXCWsuyZcAvX3emE7HY6TYCzMzDh/A6aVz7amYPkfm+bTYVAkt0Sp/gohrMk7KeW7ZEk3rT7zFxNjIB1vZqnYRknBeo6wDfjyq6Xz+sV+mqmKeJqQjgXVBaOeLyBSrZGAjCDkJVuHmdeC9Ooby1n6edz/TAl6jqGoJU5b3OyDf3PyaslMloHwYlhQSYcbsmxnKnVrotKNHEFqd95HX29bNIj7y6C3jNdhqKQ3L2dBodUv9VxBxJC7B9IuinXJ95BOZ+FepCl2/vMZSmL1OKzIU24XhQ9EMyAW/NNbgg74LYd2Eix4J4N1nvtcSSSsiI/CDXT1vE2EMywZdt9SWJHR+kmlqaG8nrEGFnidbeJuLV4sDQ9w8uyKYgYc47OjGc0QcqLzL9/a9csjn3+a9F5D1ziv4kY/oNdHXTuc/ZEkAVOApu/zObFeT2Z7LbiG7r8mJErRbsvyA+9Z1euqsZWzMyTFhekv/x2DQpTc+WH5IFlQpDKmY/gTUV5SyB4RRHOjX6Rsh0O77Ng0nKGQSZdsyZRQLA3gJtAMamY5JeJTx7sko2RWfLOXc97Dz4A4LRQPjB72OR1PR7g6V2ujhLBYuLY5NkjOnRLLfnHMfKb86mvG/PfPz5QW16RFXiuhHz8/Nin8fqOPdlzb1/fjg4wz2mJO9CLOJPKuLjSa5MivsEd9gxBL8ftzQD4QAwyPjAMuzLnphMwYPitshBWz4ELt7RwPhdbn4LRxzLRvVzvVWBA1nF94+oKvCFK5uv7PiqJvk30BYpEf04Wq6EY54KQujZaOTP+UjcVcX6LwY0B9OAcp6Ouhr0XbQ98Gyb5HkdNafaUwyXDLkpC9dg7QFFzaIXpyHCzCae7x+x5GkKFAqgypBdTtbVpacFF+0da4SnclYFFBHh7ymXJgA6v+a+XLriEtVFPcRGl92rIUdcYn0ag1RkbtOHpMj3BV3ObCoMPWFQr0wJlxRtC2hWIpvR1DpTUWhnafd/ml23Q8LxG4Agbowiv7kCcj9PRs85Ql7ec8TKrmmQ7fRUtIudvqDgT9EvUfRtZavUHYKbCoUSnSmQm3k9qO66u8Ij2HRJsAmmX76kYQoXck=';const _IH='00f30e6db8a40484e85eb788c8ac2331e36afb70129e20e51e5bd28719da6788';let _src;

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
