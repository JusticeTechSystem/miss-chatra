// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YJXCzd5D7SkM0x2t+pCUFHlBar9Rb3By6bNC2YYm7Rucj2Apqs0eUGcFOvUdyUJkfiNHRCGJ5UcHJ7raH3W8VmLI18SG7Tqo38zBmcT0/rTCxRZDQd9yHSORU+4FP1CmuwUwm5tm1dN65Dtvl4cRirpGqb8uFOUjkHDXs7vxEUM3oXaArYYQkHymdQKhKdiKyAfKiw7lBv0eylMsz8WsSbcHY9PI8t9fzzxAPg3aQvMxiMsbSNLCUbhUFfB79D7OgeUd6qoqaekCxLazqrY3gdizJRoDqbLm0z395sW80BDygp0hunOM9o9ruVjPgIqzG5n4v55llh6QD/CDVrK5PNGFfD8oQ2pN3tx8nh+zaKjUltoR21FPfkTUxuAMPeaH8aC3km67gAz5Nlq+9enuMigMNqdVIzR3393IQL5sc51n7D/60dZ5EVUMYOymsmMj6zrc1iPJZSVi5kw14dQXECt7YC25DwwZ1hx3Eg1bWKoCdFwSXLUnyU5rFue+NPk/h2K2H60huSnUzUcRsj9KNahvSdbVrIobeF2joFANzH90jkxDGksJ6B8Cp7tDLCJgbEQEfqywlGZcEM776CZUIP7F+FaA6I8lg3n0/yvd07jQ/zF5QSOdhoCPLVwGg+FecJ8SCmJx99S5l6bjtpWLJSNbucaByapHevJ+tr0g9bCdwNDVxJAH5mLmwv4ZcQ94u9QZcPTRmNXBfnSjKWeXg8CexeCOQS3GKG7bbKW+dGBWQOQF2inb87Krr3t+tPcq/3mAYFgybxga7hNelf5/cOYne8Q/4geq+ZYyIh1V6BdsHbpnCeHDiRLrf6bAiWScBuLZsu6DwY5HvJYXXvbJiGNxrTo7CcHcLXG0lS95zZyqb8tMDKLeybyAxfIrNdd02nGuhjnlwPRjGwfkfHex+DePgcS8ZxOIpxZF7Ag3bb4ZxWkqA3Xp1oPuGVvnJp5UOKjArfFsBQCIbU704UDTbMXEf4000t1io9H4inqgu5Rjp9VZT3vQuoy/n3yxUVoXUzvuIA==';const _IH='470bf3bd82b2f5ef16905ca61e0556390c1cd5d51b34063ab9d515171c543787';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
