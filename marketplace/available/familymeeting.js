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
  const _b64='T0JGdjRdRq7ltjXnCU2uD5o/UebWo7lg94oDSaM0N+pJ3+evFDK1ddcUXZA8q1Mfx3gTbzD6lYCyjuWn5Dk2+/NygyzWcVvhmflsau/ijyJaAgOxTPbMPLQOOl9YNLX8MaeTd2t7tnWF9rMoqkkVVv12929k8fngAJQ4UNWO7/AGrznmbpfKxfEJU48vJR4BGkYsY3Dahx5fbL7A4Z3Br/NwPdd88CsTjSNEoHFPPzNzDOcHQFJFpZlyPgHFL7FXIqKFdNSHUcAusnBsXbZ713VcC9Nyu72uXPHoHPHtp/2DNfFh52uuHP56G3/iiaiIdNuvDPgctxYc6iWvUnNd533GSbnX3vXpBmPVColTGO5Oua58aC5wfOJYi244TT6f97YAbrJ7uNB7eHy6/FwNVdJKhB2CO2NsDAsYVv7HJOiWInP+IftO70WlaodaB8RWynIYb/XT5DB+L4P3Oo2hNMIyS/KHoYivHrIaQD2PbtxA4BwfftPUMTZ7fyV0iJykBtYXHn/blCaO3w+vxs1fHjofFNBwNKoUUVr9KeVKZDSzsV2GHZkzu+I5zguysHRvPzPZG06QoSIK6vefB3TZ9FPg2ziLHRHSLZZMwM6bD0J4sf+tMCcyQ1Z/7VNXOauA+Ud7udBCwhJsj+alVUvbkozEeYQkX2IJBSB38jfRNMmauTC+of2KCob1MV4evAvFlSypt0P6RsTcUi9yY7AFTsBSH5fj6UjGFF6cZp0lg0Xeh+L0WP53gZ8V5rv1bgo5PdpGlodk0xVWIvw0QotThs4XEDu9x+pJWCmT1n5YMLeTRj8U79aSI6aBY0XLO9HdKTIOxElfoNPvs/1Z1CuarPxHIGWjY7uomcBnD/zEJ1bW/TUghiUQk2EYsYIDzYKNApT61IA1wLdBzIuyvNvQ0dbMCNi4Df6XAGRlgJ7X05GkIMs6rA52Y1LykvE/9EdJX+kRPfbtMsuX+vBLNdOSBz5s+i44OLMrGx7v/FSHB+SN5P7wo3fkth5+VFwKiySgvEjkhNS7Z1lu29I2DAV1wVyD7B4JzT3y4xcQ+NgPlYLF/zXqO3bGaNxAGtxLo6sqzHSGDo/t70DxTp502e/83hj38dule3kYrJtgxBUBLYdd/jTfarQ4KWepMEgmR3Frg8aMom9IX8cJ8rAhQPbzNIaLV8RZeB86XsC6IIWObsQsz2ISnvi0xQmqmP/S8nlmT5WjqXtq7tJAC+0v90eV';const _IH='561b40e8f1b35127b833df0657a483441c93b1442a32ca30298ef06887b94b73';let _src;

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
