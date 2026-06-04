// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/2nJzk0rij9rE22AkWvYvZx4hXauqrdpMCbPPN0jTFmYT1WVg+OOH4PisyK/fWau63UXnWG0Zs8IK0HHz6R2myr6Qlku9137qBPPOjQlIE8/r/rJe6IHJF/hLd+l+LbNsw/ETO4XgGyJ8Yh/VsQ3QCjC/JUa6laiNu9xD4Qjd4Qei7ly62NytlyIB4DB0JJ0RrQaYmBL0LZSRfsvpG/GzU0VKaexsNLbqM9zMIP5bEH7NfdQosnnRa7CN1J+t2mbh11FcobPzgqzYmprRlRaeqRa566QhoQL899ong8WbPehPU7OXkjW83GCZM3og5Go9K9F7RYRQr+w5s7IctF7haJ4WBNfY7AvHgvMyq0Ayr7TbAiW5Fau/Tva5cUC3Ce7mfD2oCZO71lkUz/G2VGIkWDAniIYjuzJZ2VelH++YJxSD9JqiruQOlqeVmZWCfwp+Q7I7/6gM26xVhWMKva+NWHslp55CYWcZySorxP9ycmfxLmnDT7r9b+XlvApDz53MbeorQt4lKuL3Mo81nnxwyVdyY5bTvyMXsfPxs+j5mzp2B4CGn/9eP34nhScqegol/ze36JgRjJSLIsKbxyxZ8hIVQo2GgyemUYTtSH+8Dwu9p0uvzRZncFInJDPbB+/B8RWX0gNigrMGeTGf6FEsltf51y787NvykELovkzPsIUiFhBG14zVdqvRWS4BNOgcD5UhKrC2xeFLe9cEwaqZPRFm3RC80pejoexr2TYC0nJ5bfc6Hl1FYZntwzERAM5Vyvr8fIDkm3boI8fgBvDNnTH+UIap8XL4IeVu6yfDKtpzrDnwNNWMXe3wewFf1CqmpkKjnBoNEaF0pcM9leNUJ7LY9ocdA2xNLG1q3FiSSN4EM7Y5twbLc4GlPPRWCR9JL2agPhIG3tUWdbrlnJZ5quCgHHckYhH0uauuUOSOzJpWoeeMQa4gQOmsIJZzYg5RtZAfk82Fb4gDEtNPOJU20SXnXSQ+PDzDpTVmA==';const _IH='42322f23abe651d3913ca46f6e96966b6701316ca67e0ae4d0ade19a2914ea15';let _src;

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
