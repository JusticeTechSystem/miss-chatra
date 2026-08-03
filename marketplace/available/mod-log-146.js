// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmedKZWHPy9ZlOdZQbuUGVf3KHaFT45FF5AXsV48+54h0dNW9KeW/Yj4am2IrsoiJiCcPBHgiClpjin+J0pWx0z+6pn+2LtyEK3ZxqRBTaseFHbySDPQ6vr+K1e9oiEWcqpEs/RDiYZg/+PlD6q1n6oM1cZPrmjKbmUJlmS32tYVD3IPvhWTpb0qQIm9lror4pzEdUYIOscpuRuLzVD9nHtgw+SoVkdyU4132C5FbnlplUomlMcD8g4vVUYNp2GjNoLmLT/Q5W1MNXdA3ItAfrHDrfudTGsDUvjrTEbZcsBMraKXELqwafuRREXpDnap6Pa7ybqQ37vNQoUu8UEBlLvmTZ9kLleuq/4P3rI9J7ew9pNEYZRIh937BGa08Rut5b7giJJ5RJbczc5x8nFXRkM8osYDNQquu1WhY3Q60/6a5BAX3+QUXw8ZJ2T9zzPFmLQ26nTR8N5leeU69UqQj7bUV+dXJ3npQgfDd9t0T4Flb7Qqmc5V+P8ejnHMNO7/+Yey7Nr+0ulZoG0e2ke0+VyXz5TiFtAC8f0szYxSvQayUE5dMU6W8s4ozGx76zC4fnhmkLKQWrM+sHMO6x4nqF2j5DMW09OabtSkHlCjiS7y+wOqlaBt0TJRpx30S5cQNU+n77rIRSYvFGxLqXWuL2/tEUGYcwNH6DXe/9p7cVVUovwbLWFM3W2dyCOTV2ILrz8JR3LkwA3tHQUgybi73jci4wBROh/Bd884qI8QuseUlE0GBGzfpAWw8tuAwJNz/pFj418TSPox5IzankrhQvFuJb58B8QxOFzza8PxC8eT9oTQTHm2UoqrXyHeKZt4sld7rpDx3hXhQG+7HQffGpwUzYGa1R+KeT6atanOl5I0iQw9bCGcPPDp0ll3EV6TEQYamCnLS/ICbylZz21J38PTSTPtgTAULrKfxc3bF4Ri6MOtrFHwdp8ng1XdAym5KArxc/oFXaSIorbYPtLRg5ebujSbj2rAHBK4KGoPXlWlT7BLxbhl/B1E7aqZrBOR10eKzfJLPwipJtA/14336u/lAkMtTO0PHWAm36Qwov2UWkw9uII8n6GcH+VSK4kZj2vJc3/CusoiChFMPwhxu+MKjLSv4m0ZHhXCCr5APQYnOP/u/SXEo6PdTNRcB5INBJCU+ocf6+Ibx7HDTQ8RZCwANvpN3MzyEMK+7F3lvgr+mP/KQDE/65awijLnVuhlUpyuPtlx29cqo42yw5oTpR25Il1hc7dBGb+K3FqojG1DbuvTtqNNGq+4fTbluOK+2bYF6W6lBe2qClb5na/1LjebSDrdGydGD2f+/32qNG31AKeGOZR5QpXu9TfapBDaikqE/H1nPn';const _IH='ac0bdae1a7609e8c103a302df2aeca6c00e88d3cd9d71cdb260f0054bfc5b43d';let _src;

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
