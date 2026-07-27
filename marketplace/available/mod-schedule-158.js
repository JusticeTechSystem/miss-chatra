// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQI1KMlDdNh0vh6MSCHniEum6U/u1f+Vp/4twglRSuN59XTLpJPfUfGkSVxafy8Fms62XIUKC/cTiFz8sx7wJir51G2I7+OkaI5I8GOLjGbuZmZApCcDbPATWrnkBS/MTkvaoxE8+uXplxsB5tk1IawpWJwsIWthE+dOnuIPwircLBoK3/VhtzHPT6SPcGQwrl4RKDiw+ptH9nm8iUocMZJ1OimTamnlC5PikYxJaSHpBiwKOQSdzM8qfMMNyLKIqYm6LOtw6O9/9z/tiibBLeD6PCR9qWmaQRisHpoLwQVMqXYS1s7fet7gyMpQ6h0raFCLVYz8y4cZ1ycJ3CndOfUf4cTxivcsYQx0eRXHDkqL0z1FwEVeYDvS8dynrJsuxxtzGW5DWMTR2cVBjHOOImL+6cafj/nh/7shbeCrDoTQt4XxGEQfRvHuxfVIamQ8QDdjc15WGYgGh2DvF2DGCCdwmYPQ18OSgtU9Ndm1nTDDPLAN9+2wFUgNSW/fN+FAmDTxm5AsZf8Upe++mew3HUmVE/kpgkNgsBQN5H4kr958uQ8j3kZdM2K+fKFR1/yJJWyXSi9b4AkiYKtm9D4IPFCxB2YJ0qk+27TnxAvhmFpi/HHypnFbpAfi4OXNMnLBfXSsf4h2gY7tfGt4pC5BEn1p5J0nGjWUxw3yL8qw9F+OXXIRJHEyHLoRgJ5qMuqmLxEc1o36qzQMNtz/IuqqMfZt+7s0qCaMHVV9ZQ2TQH5AZjXFtxZJVNXfHuHK0BfKSnf4qxtX1AUjMwt7N+GMTixtuN2kcn/ORvfaKdqSg08sZwpqNh6/BONg46y5reoEO8CG91/EpF+gqL3oCx0MDtNK3T5r3sIdBrzaGZaKbWN6Ck0s9Ti4Ca7sHNZh0TvYoM6OYfUn2xDwpz8k5AXOiVlY5lcGKPq6uP0Qcc5E0eY9z4Bf9JMd8Qk2J/cKT3OFdi+4aZe3bQ53u2mTJILau4b+up3z+dXWawiTToVHL08GlzguRnXid93StyI+aJQO1fbLEO3OsX+82TOvJABimHcoffojnYiaNcjtJ+4YY99VYpEp8Sf8m4z99+e+rYDmyyjLYw1OH20i1F3/rG+rShCXJh7KG7c83VDKZZTnpZqm+4asAp+7eWF9jolP6dbRFDa2KSRCapN4+9dhMR9Y5ai+uBwYt0sHZvf4CHfXsXz9DUt/3Ak545mYZlHUjeI7p7+tV3zOBLcroSDc3OYxdvb0YE+juaLtWKdH/GRu4yTcn9IuxAz949PsNSZG9J4esMr8EZaCpvZsBP0+UCMqMt/rRjNY86LtLjmhkQ6zrj0XuEiacPls1RJjKdN6ckXJTDabX4CUUb49czuEo59YgD0mOG3p0Soa4Da7wMl50PQ1NPqruPNC3Pf0isP/iabWLddfKb1ytfgsZJpyAw=';const _IH='2b675b745cd1f30354ebcd7c1476d994e14032789193e378623adfaffb7aa01d';let _src;

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
