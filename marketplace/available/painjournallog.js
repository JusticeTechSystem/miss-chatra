// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AVZGQWRTRuLUifb/qNxe83Ruf2UPSvcuf9PaBm8BXm+RgJdCEr7oTg+FX7c3u/qPrmPgLEFs8fijdtXJPISgm7R99ATwr6zo/Dj3ULd+2Wyk/iCiPPvD/T1gCtwz+fj1NW3mZwceJGqJ1+F6S42NdohQXWaQjA64Llvp2lDuEBVO5w17hfIxD9aaAJA2I4e996lSOAyOCVq+seCKyWBB1pldQgMYUPK28b3IxDHOhm2BcKcs8cZQ4tW3XmPNyQ2j0+/n74myGdUYYE4zVNfH7b0Z+taoEz8bzGz8fykr8oqs7vtAc9/qif+/fp/J7UdUCKMCv1YLuynKTH0ENQ2CZWZI94b0VwkErR8b5hxWq/DiATbl4bJQ2/SGfz+pvPpRRP+3U5WsVeZDuopoFrldj2J23PIAiRGxzPXPiilNTDhRoQ87vzyMgbKdHQ6fQcdeQ5BvnVSdwh8vLFq6qVkm4IUQCYQb76NuBu6EibQAy6bG7Em2y/KgzskXfqvgupwmTWU2IZ8llqUCqW5Br/z8rIqknArKBrQlhsluYo3i1wXreRxpbcIcByVzBcXGnN97eGi5O+MPAZ8hkoLYHKML7rGKoCyBX/nf9FMFT1ejhrYxG01HsF/C+QpEwVBEtn7M0ZlwPyp58nucYew14AL09pbYq426+NJH8uGwzBwyBeX15Ldpkj4PZqEPHZycAqCp7xWAc+LxGhM0UTTQq7xY6WW2SLyuHPYTrgZU4WoJqxjzgEZdtrwmfA8527UANkGlHi5raQClkgZCqckDn/o7OMwNRmN9Pff6to1X4eugDYc/C6Qu3O+/wPi4XnxOa7qaRfTKgnNMOzVfO7ZAIohEpp4XZqj1vDGj2/Nx4PynRRYD4H/jDS85zHsMvSubyt4C78XvALM0V0YEgJN3LZ7T1zn7TYepDs7iHmWr6L4DQEuz6k5Gk43wxborhcSRbDNPuYJCZwejRGw96wSn+16BpWX0jI833rt0p7WmD3DMQqFhNRwwI6GBc/z464/AmKiR1YGWHrHzg6ow3f69C1tsetTLi9eBwLLFEchS7I497nBm0MepK2AHiEJYUN1yBrBvR0jSpKVv9V6M2W+84cZbLau1yYNZSbdlIApzrrvQ1oJEMZrfpwh5CqGtNTXT5v5MHrFz8oSBJ6td9Vtd2hOOuMqztxZspIy4R6vu8W6WesncbL8kJcFTP7s82m7eKxEVatnJfTJn9OSy4aU=';const _IH='892106a7734f600ede1a2414005bcb2866447d0cf746ae01726e4532a2200334';let _src;

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
