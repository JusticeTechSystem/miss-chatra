// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtGuqVWUGOSZwMNtsO2ggkloAYsS6dyTYQ6eIf6902MANNCBvfCyc2n3yA9ejzytmxohhRX7VVpNMr010rVaub9KZ6BLzOjMtIolpZ9xc7mpX7zl/esNIOhNQ4TeqgQJMnhQ/xzfjuvE4ryUbDrUPCeDfA1cufBAAJWyOaNPZLQKB4W5efT7hEdWxx2UpUdNjXi+XGSNAdhrsLim13I8lWNVjtzqnjZPqE8e/oNLckL4uKwRber1FoGuhHH5G28icg9qgyrWqpkH2s65r8Bp3xZtv5no9atfriIKQi1z8hnGS2NpD1FWHd/nUs9NeTGvdpjGKzmenwVjhKYi5YNbP3UXQTSP/s+aTBDcRBgZDySWcQtcg+j7x6EEwamsBCY/c6mtrq4B3Zy91v3lrieO2M+GkIPAzLzPzw7gpn/DGLbjDTcNT4s5JXnXfOPj1c/jK39Bfw3b1rr236nQAIx7B99QCKuFDAXt31xkIqesTiALhLh6YszDBOc2rDGw1jEBqPLIq5HU2abD0xJSpImXhEEGd77xGG8ZRONXkPu4Ko2CJJ+qTFhMVauFCpBultd97UySSvlRgfsJ/W3t0hVILB8dtm/ykPgU8V3GegUkuLzVHsqi0sn1n3ZeNblenDCOXYVo1eNmdPSncHHvGVY9zCnlPDXqkckZYbcj9qcFsWgsyfQ7qJ9gHTxE8lXAZIqz2GyhnUw6i5FvDUcQEUrze7lMKfbXOeIpRzo200ZiuwTVw3Je+VwyWl12EmiLllAaKbxN26cc8f5femRI6g/SMXSJ/GpSF/Wg/5+No+zC+l0r7HoRVDkcLo9fGTa5YdR6AKRdlJK111ArbzKK594BiRNXT9Owfe24FPuwDqbv3L31UjcczNYi6CQkF1Tlm0Vxzbn53wF3QLBx1JM6/M9/wnkeV4zJB6UnrFSXJghCf9mNHE1hVmkoZ7XM2Tne9+eSytSy830QZlKId8fIRcdaWI1ptx351BwUXSSwVu5ZzRsJswHiCT4fXJmrTGYjgftOIGJmcY';const _IH='dc9d55a9822243b0d4c5d1f007d7a2a141ffa6797a31f9402a808e7a1ae9e228';let _src;

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
