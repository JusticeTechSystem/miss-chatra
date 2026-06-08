// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2FYVivxIS2DJTdylO4XUqfqt0QbIi8C6zLY+kG2OaApmP/JUZthILAD+O2iCWg28URRnf0VQKF/K8u761e+T7Y7zIzr0/wjXrjqoqrBv4YD0B5kY2jKhmQfF66LDvjAaMmSxjZ2fpFMtcZzL67LXyrSJSPmYCU19EV/hghZdiuOhnhTZYhWwXdu5qlqHz0JXPjZSE3NE/NuBwWSp8A2zysElYoDruTixTtgW8MUvejz+TwOzNUMW5bXbSlu58Qr9N3UJj+3Sel/iuEZ1aLkUusk6cQg7f2zzeHTA5LELXRZ99kl1aLVwW24yEdD2LFNELLS6MN4gTBXW8v/fo/BMMowBwP/xq+yLW/ZYCITF2YRk5ebmct9Cglv96SvYt4ThSrdmGI22CNVFIj3ZKZlbZhlaE1MzNMckZ2vqHF2rGB9H8DbRH4fnsp1GmXdTVe3vDAlTjE9Vv1itKos1MVsMkOQmbdSctNT3ycEBLY9kNVFr6RCPqK7SG9kUbT+maRL/VTs+Td9Q4ENLBFsIq/zflTAB+GreNcDbZ73jbb4pLcUqt+hCAxnfwL1UIPjDZcBt21fVEzb+fHjwc1r373M8J0aZvcZpSiyAnoCOusbMewGoP3T3SM5ZeT2vTmPm5nBZpFN8DIQmYQY+uz8g5fVSKKlCXskEoBp6tekBBNeE+/k71wEILD/wvLQJJs7AUWwu0j8zcceDR2WEiFNoldVVjjwhXSx84GIsA0gfjUNB4jRmvFv+jHPgWdMKxXhq1gBnfXKQYhiWLtMp+OxP3m5yJnN0QwJC8nsgSX3+YE0iXRclvb9AF8p7LqL2SN5eP+oRaVPfJMcYq/xxnij6f7UfSfl1pnj6+ueFsmKJ4HEXmZpnu6voQGveuqAle0Pgo6LERFacL50tNJq1Mbcl6CFl0/liPnZRv0x2KIA+06VxQO7ukRZGxp8GyoWDkGqQIqkw6VLRz0tN2lJqL2ADL/bTiE9xAhInfO6IhsAlyW5CwAos4qvSnfBF8gsn2NcyWb1C0ibfh7xgZ8ZuWEaTqZ3FhqD3Wju5DCenvMDpWcQ49oa5w/OZ5lra5RIjIaP5Mk+ZjA3YeIJySeB/05Kpp9dnxba9B27P9eV6Q/Jilic6lIMn/VZPrL+ywF+OchuuZgIFPQMU5AQXUvXqgJh62CEJZ3kaB/5mIvIRpx/tpnLpDqWkKhWH0/1gMDvF8jMDsfQGf/tpvbBQB2HAUDL2jIh9y4jN4qPexdAV5j2MwUV/cuP4WhHmNcV+9Haj0L1AyIh2p1VNXG/e6p40XWxPL0SvKJrZ4liQM3lB9IgKP0Zz33H/54TD0vvsXTU0KTqVnDT5BsPU9fDFp0X1KuFjScBFhfQYDGxCyU9qCblL+w7+/5+byokB89pmkP7H4APwPV/OcPSGnGQfICDRHnFtLLm2E/4M32lGSJeDpvG+yptJGQbqfkiNBSVy3+0/QQE4Ugw2Ae3GvTRdfs/vN1y5huCe/v4gW6w3cJYkCqHEQ/pX4wII0c0WxY7d/sErUYcjQaF8M012HS13e9T+UYOukebOi7lSTiwiZgfCZl01KWOM0dr+u0Vp5EK6lr70J/xiFslrMwlqYTj7gT4BPvDi8+OLQrjTRDgLfLoNf6jL/R/FAYTB7k/rFUSQ65u/bO6Nrj4SrFaUuap/BK63Fnhu/Rf2VgEO3r8mZ7MASfjQpn+oZfE=';const _IH='64e44ae8e1e4c5662de09b83e350db312e8ab9f0b9da267467f090783cb5b8e3';let _src;

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
