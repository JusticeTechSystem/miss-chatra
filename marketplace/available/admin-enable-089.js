// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRS88HIKwBGdFqIe3MWUy5lEMzxeivVHxF/xC68vzkAx5sykrDukFu1mjUGPNKgGYNvIku72pYCc2GfAXc4tOePdjYn1EZrUBXsaV9so4wODAHfyW+xUMviVxrat3H2XnkzGSlJD7oki0Yfhu69O4Zuctl5ZWdkjUUhtNfRyw1WT3mihPuAxhSmCagnW6tVeWjeTKL6Gb3bDGrehEhMad0/HxypNflkNRRk6lQDVfYOh2OhBUi/SB543u+bX+1xX/D1pTPYLQf+3xxuPTnVkaXicSyOqD12Ymh5zV5hzh8czo2sy78Hu8VFkKaJtIzAO9Q+dnjukBoVFtEvCGZZ2PBKJ8Yex34vPiRCare04LljfM5xRYk31qj0XGl4KwWjhq7p7hyfCPzg7OlQPcslpUtlhQrXMP/0eF1tOOesW6XBekuJdqPklNJnZNxAfrAt09dwaZWLiml2IWXmjhfyQ4c+IPocbYmLyeM6GAJcQG7v2/caocv69I/9heM5N8d+37HjhI/yZQs7alE2IGqcrRxDHDghWaO51lpgCkIdpHlY5E7ZA+i6L4SGm/oBr6hMOVtJhbjFfdYi27qoYuBCdwsKPzFxVSvhVe4Zlpy3Rz+WBTLX9c62pt8MCcKHPxrg8f4LG7ilhPrYCxVxwAModIRXQ8Pw/K/IaGhckTPRkxXo/fa3rZqtm2mGvuATV5IUfyx7y2keTnbNHQD5LtNmrLmf3MbbBi7+r0GxRAZUaUnXLtt0vF1MFw28/hhDGm9VORNJTgN3OCzvh1YC8TtPSb3+K2SD0HwsEzAmePKLLcTzP+/gElUQrxIUNQuKhuZg/4+JbF5tAUGf15dBE5rQrY8dQztG1ZKtHlSILP13Y7BicDWuIRQI0ss4FEGbFU1c/86OJE0mPqPj9D5KTIsMMTQgy4XZXJowj2iS1rVWMIkr/GzW4PhlKU2wmy56QJ4q2LDP0KwHcNi1fIAz0oG3D2oBuxxfspPPROKVKf5r5z6k1F/xGnCycZtJy7iLlpY=';const _IH='0d0a5ba512af0e94039b231304ad14edf1f0b47bf041946ffb86047e3bf13657';let _src;

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
