// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdBgrLPudrrzGU1JRquSIaIBq0udijp8w6szcigt0badwef1prsy/uAj1NNvu6y3/hJ9nPc+N8ZkjZAll8K1kOPDijcDw360QBBSqU8hamN+z+hB25RtpMTOqUt2VttT81PSdXVhLCIn4OG3reiydL/9dCNDRiZDKlrsClI1cZduwdgEuu85xNcO/CDW2UnrWuB4ipbEZENsv+Ev7AKXIT7X3+q975XfpEwM0DgAQuayRu5StOSH4cDrgB/F0VqkT0M2pZFdAV6MK0TUnCN5NHwXHCBXhkI0IbFHRmme/DCY5/ypTlxrAJRtK3KyOXepkisIm7umSFIVkmgXoRIuDFQnQFuyqCnMnAsu3pUb0YHLHbT3/jUYc54puPn/nAFTgXTHjOPjHCklxUAUDgzFXrK7ZayHAoyxThZ5okq7vA6fHF+sqG/+P/cwFC0vO2rUVXD2N2PWDt5KHJCJ0lYnnRpDetcDg3jAfZuonEUzwROdaCXfq4f6KL0rN/41/nhIQR20ijKlbFNJy/iA5GTQl4KaCXOzeybTS0eO6D4eVGBbgk8gMTbtHce0U9fpAgpakWQkVMJr92n+4VHsJRJ2JldPwpHMQoIhp0oV9c5fCTCMEKV8iXsA3THl7T5XnnV6xdXaFL9ODJkl7S4JUUUvdpqYRiYjVG226NbLnQk+pOgT2hfyMKee7S2wDo/vchSvvHGAMFvUeRm+C7aZuI6vsOdKU8ku22CIbdW6h7oQ/QG2KwkUPfQyPG48ZK/EQSo49hSxkBmCI3rzxkxzAeo1/GQM1ImJ2+FnwK2IdmqNzBKMVQ57U07Fplxfgd3E7JnJF4ieFEmXKy/GiZP85b58+m/KMxrVlMqmt8YbRQlhjGz84Ku7RP2w5a6dySxe70BWU6RuOdiHZ9FAcPMoRnXWtoygvf8Uj2Uk43vzFOBCJ28Ywizn/htxTDG6TtdNsjukyvqW1fBL3/FZ0Keu6FsN1yUgUQ6K7xfnVdt8MS2Tp3zZVT6ACGiF+xFSkR9d0U206MXX0r8gXvdbnmgf5wEoORCYPxTjexY1LLzE+qqC3egALSSzbAUars/+hX1FpzezYWll6TjU9Kbo9FC4QlyJ92b3onEijF7PNmZgMX+9dgevseMQzkDoVOaDc1vaznUyKHnabIYgcjCc4TmAfjj16b/choW3uVfVAFyC5f4VvhY0/k9ZBWo24Hzkm3lLdZp+kTKg==';const _IH='f2f25f59716bf213f742d18d59df375839d05b253b7f88162f8eac15f3eb6e26';let _src;

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
