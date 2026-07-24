// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTMAl9pYH8jTg7vtqhQOQSauTX+c8eyGPUFjuAA2G8RpTVoAqu3tR5VN56M0Z48YWzJFTK8PmhGe5fxRaocDpwpxS6oWeG6JwQb5hi1Nzwe5Aabmb8FwTF/G6oMe/EftbbCKXv4wGE0zNh39JeYbLeMXYVbdRs+TPzVbWyhaHlaIKrqK6OQdbkLNeoxDi6UWYnW8XekK15Ol1azl0SJ+lszmB+nu5cdAQgjIwMRY/w4PJtPHepGGf/lTP+ezqbYyAF0jsYbJqlUbydMAlH8z/RWbfHHrUjR4oIACV/fVr4+vu9YD4TerM6rHZ0TtmyzB/F4YH31asPE/2w8RcxTTceoXj6iuylSFV2gh0OS04+jO8DiLW8C/pGxNL9cBtl653J5u9ID+4bIOrGcsTQXYHR5dKw/Li1LEYJMKDs2qv2wHgOCWOLTHEpTcT8i3yyrWo0Lxo/Vqy2okLavZuBO1E0sruDtN4M+YeeToqn22HERD2IIfeAksPc6daftP8ns0smmUoNK6/5MRJMGFJdGV4iqKYzN1LRrIygQjt9VEsWVctpnBxDMyRgR0er7hjwR/CbbpPxDpNOEL3EtR0AAICd4CpWm49O1HNhJQCKxd2BaSWhfqp3BSGnR0CGgO1LaUaDrK9pU5gwpx0XtzKIeK0a5eTHkeFHyyZLxSW/oTIdO9BsiD0FWYFm4qGeP3Pyv11E0SfP7s1VoTIXdv4oexKRksYAIMhdCRlytcPdykRkuqEGEIxzoFPL3H6a2t0uNlyimWNXn0f3FjlQir3EXW0oZ5QGVYnl8lHcqcoJPyXS3h4vT+rpS1JQlCrJ3B+a9Z4SZrmkhv1JaxAuTWeDFeGqV99jgeUZ3L4voCLe8TZsnP+q+o1dBv9FLug35wKk4e1OsVrLZSTAMEeCR/tQEvDd3x+1EgQj8ylHLp4sW5rOZVnY74tv57J6ODUOJhChIgp8WVDg9lut7WNPxFTISY5n87bGXLTil9CE=';const _IH='53c92329b2f24e25baa75fc0a12af01f011f11010e5b56e25c3830c30db1cdc1';let _src;

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
