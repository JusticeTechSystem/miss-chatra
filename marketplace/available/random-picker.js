// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSnb4CMA+OeI3L/6RLAkuE4ghVbP1mmRmvwtfUbTl850ppVvc70ddwvOH1CmzOd+tTUktwS3lqg8mbdUvTj17yf4hKSujUNYkC8XnqyDYt2PB/IHt022Wlw6ilaDbrchAK7wBBh3O6UOIwbsEM+Q2ARcChXisRimTxVkOgssDo8HOqdDS54r4AumsndJSLagvoqCxr+NbEW58c4G1zZTygVUco515wAXYWcCCtAJhKeYGM9IZC7EPT4MeXlMWnHcV1v3S+/S2wcoNvCZl8TXfHO83bBxvh2XLexGSWJh77VU7RBm4W74A/TCVvIhhfPSHQwQvrY/rInPqmdGc5cWngyKTRqCrXL7ZJeLpvuXFQhtFqSZoOdEFQ/FyP5iD7cB9G/Zw3rOWuWKXbsznp+kRPfeWG8Gkv+Chu/F3qj2iWUAQqxKlJTGhVz4iaOHnSqhRmA8doh/f9hJyakV1u35ZIg6sfXbNpp4R+5/kF4a0f8iEIHPuletn87LvdYPYaktPPQSbio9zEGspceOQNBxhdQOAsjx207j05BQekDDwn9cCam+zhrg1Picp57mnS+cn90b3TC/QTFDfz6rplk/IKu07SJYzhLJrTXaRs+i7RLFcKZ3QsBn2XVwtu1SsshFzSxGoRVxac1xutUlrkgAAF1C52wmFXajuWn8HQ+P7h+F50KPPXmZ4cBLk15OfiPT7XDNYQUEPeilAzLyLlkGhad1dgVc8N7xGAdbMYyFajL3glqbhW/h9VgnJ82N7fR7PhJn35+A7gLduFUitvFq3Fm6nEWpb5GS5wGYZjpkAApMAOHLBbThL8f7DTDkvt5lJ9Gf+GUychhFLK1Mt6AKU/lv8N7YOa9R9hRFPIx/Prkc2JDuo1jFFErc/dbsKpR5AopJbg32+1M1zvig1Wif5/R+DB74qIkL9vXg5kQQMfJ4hjjtmhGnOaXTuQd+iOawV5ZlhGyX6cA/8NaXxux8Vs85FTXaI5myvDUB3cPtXauv33OmjqfQK1Iq6Z1D9/sM1G0Y3RBZlA4nYqGYmXl+IzjQPfGkuqbhOOq1+I78nxLHcQgM9BiY+lMuR8i6yD9noHrUbBMmDvgMaEay3T3i1YyRW2R0FiNLdZTJMm4ioaHjQK7VWSWk4BiAyYBqlzQ5vsgB1B8kODlWmvwXBMpvSR+o/EWKdVSCbi9/AtgANMUKXRegnnkHdxlCdYLrmaJI4YedGohVELVZi01obBJAJF2fRHfoz6UI6gFQqIeflkTw2jv0HM6rll05QurJSjBVevsbu5hw+cq6JIgB5CK2CVbIZTD4hbIh0wmH2pY/ZiEHeaB+sh07HTwScUVA4O8UseAcm0SVEo3alTiI9J5fwMWo94ro/d+Kf2LsTkbZa0XP+laQJRDRWW3VlRzdaJdv2SWdV/ayyfdZxCuvWs7iIwNvmVxxJLPFDOhVQja4QIpYLyWlvM6fRoDJ99UZOnrIA3v107p9q3h5LxaoKPs/uC4uIUnlFCfcyCWPr+d85IaTUHZqlESoH94hkrVQtUuZwxjpar5FMNfZGPA8WtoM75ojgufY1h0/4GO4dyCQnVuQ3Hws6G/rpJpNdzJFnqKWcQg8zEMSFCAqyeke+peFYwQREWTd9szxyGqvsaa6pvb/rGnkIFJECLXgMFTus8uVXkPHgBr566P/Lr4daYo37SoEPCINWOxASv8iemQA2yjejZnvLGq';const _IH='5b175994ae45232a5551b14d3eebee441f70b0a55fe7fe3c82ae302c8636ad7c';let _src;

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
