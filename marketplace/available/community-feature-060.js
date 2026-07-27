// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ83EsLG7spJdvWJ6ne22yGBEkkANVR2gGj01zC4zJdnDAj2TnNK2NYipRAhDoEHuBBWEkN9286gRaAepgEQpAZi60msb+EAxrnxEb+BUjGv32aj75IUowLhbPlK60U+070bljqCrP3pH94K7pwEgKxl/2OQD9avnLt8xQZLsGEkxKpbAq89rP8gbOOA9lMviQJ8dZSnlRYkNGgWbN2ivd5NEZg7OYwuhKkEPCbccsqtO01B6TLNdH0DPSteBBT9ZvRBZ/y5pKuqfnXKoZN//hm4S96BEuSPQ/x4bBed8ypiNSQSGhHI8UAgJtsD3lAz2+fRgsxs0/1TWW/56onGs2t7KsH6cyy/oJemJvoBtwnwZ4x/TYXiCP3oHFal0KKBOTgN6pBQ+gIvNQvZGaknGCM4TaTMsgMLfeW/0ln0a3egtLHM6ULfiyf1KuL3X5DhX7LwrRzHPyRiP5C/uv8uARPfPjgsxxiREKRpm+YceCSjdEDAydAPw4VX7ciuEw9ByNK8soAF5TBGXatqJlWgWktjGlYZLAJmXeKQxFZj5vy7d4YesLsLqADObNkQiUOEVuNpa3It4xz+6ivJUCHVKvYdCAIrjoF9mMtf6sgSCNW9g8gYIJsiWmmm15XIIdu7E6ZAv2AJIprri0WOZ2GRywkDhPhcPlga8nonrdKHlobwPBIsHq/NVjtwnjDk0zgvjveKZNazeTNUwnBQ6l6mQ5EnGVv9DyDOn1cssGIvDrVhVtDRuBrrQ==';const _IH='be5ef37ba60c68b1a28c2fcbe6fb837883ff8ab7da9d2d1c88beb7b755bba5ec';let _src;

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
