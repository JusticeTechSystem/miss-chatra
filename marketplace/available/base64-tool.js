// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wce5brCvRFM8J0wllaNVusiB2hnulwMQ1MrejrSV0u6jicRkShhS5N7MgnAjNVnYRmRJxPzO50eARAIZECkhWvwkhPorZQgzt7+nsOHJI1CSrhtTvbMHtoZWCHS239CtcR4lbLNhgDrkn0EJjR7WZEeUDucMWdzCzr1HmtpC0/PEPokjjEjxZgFq16bp1W3tLSz3G4nURg74vEfbX1lPl2kOP6GEMm32+xfg821IlmDe4DRu97J6LqW51aHpET8F5nBSMV4Jhr5i8gme0NYJUGd37HrQMsiYfX2rho8g6HtJk5e2TnD2lJyStnS+HJfHXzUcs0XyWqWzQmsdeffDSpjH8VYAJg59PpNgErQuL/1uNytuODC8rR3q2djkSFbMTVDOXsyesLYZpPBudHFTzOQyYhI5ZapYvusHKqkBS3/ViyI0ESXA8hTqNVYwxFq5eYKnTLiVp8IBNA+TOXi5QebBo7Mdgmfz1J3g8F3f/XqY9iEk0fGCn4gGNodD7hgp5t3XimdeTkJO0jhX6XEZF+vfeQNsAHvlCe6Vo3L3y4qbApHJL4u2U3W4WbxSdfj4tvStixaBzUlOItSlx71X8fy9SemJ/B7nJeJXRb+2ykHg4DOttiK8iQ0SAy3VQGqpg4BxWh8azqmbq+w/3TJfXk1DfKYwJxceVxowcMDT0FCWvkhwPlKJN6M0pflIC7LqKnKiigDDJuKaFvla8r1nxjQbhSSIpSYy+CcCR0wdjv+H1aL2UWdSHw+kCBThAQNRLHplQfdn/BRYT7wwDaSqcqF9WDTKCrVt8ovuWljamG0/IuEP2MJlZwQd2pHBU7PTIxjcfABmDa7k9j3oSFnBKIJOw4CDS0zJB0a2f0ooCEYeo+6Dmk+CGACXzSSIiCsLI39W9BPrhi+R+xGQJ5iQenrqYoXCyjK0/vyfMrUTfn5hUEBAwYA6OVP49Fwn31Ubgr+n5NlfzT+sdHEecubG3SoZM+KzmHZFEtL12ShoPNxKvtN8JR3QZ4ANPvfPMY4UtCfPCnjWnOWlD1TV772Fb5Su8vdyBQX4vH1XR5SQmUyA5TNgi/Nkm8DBWasUKfpSZeGfgz6/3GxGhLg0msIEEX0UCt75OmXEOP58DXdbtAq8NSOMvcpeBY1Nt+Vl/MEs71kxf4W9rVTPEd8tyl8hQ7rH9BcNa0RN5fXlG/JtsKAhAQNBe6dbWk0ss2yUyBy1UFoJbAIgKK9M+OWO9aKK8PKLFUogZv/b9yQdpZRE094CIP7mUUNsQx+QfK17903KzT1YfzrPRD/FKso2jG00bplRb3qMS5mmCW1e9OC/wcBoANS/XwsjjcfPk2eZbdOW+FjC1hZhxrrD1ETIQg2QbbPONBMfhfTkswI6MDUQ8busHpi/kW9DI6oZh9aU0EIEjakVpoalv+2TXHP/3Ko0qqvokGmv7e18+OMMcUOXMP5cdw6YagSKr6EqtsO3eS5zj9tFAjMo+96hsls5CFZFx3NTe9S8zLAVmF53Pw4nf+57ZbTBpv9Ge7vMYxtgl+TdzYzs0mbpP82Q/PtFgd0xJhQpvEDmN3Pdr69+jw==';const _IH='6977540ac159a75a6999cc3af9bc075c0c8ba268ac3ef4da789870a08932dade';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
