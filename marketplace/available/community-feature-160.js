// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9oIbKQ7oxXALPZsX6urrvOa1UwR/F3ZN/V/kMcbkjMDNbaDC8EPc+985DEXa1OIiEGzS0vWKm88VCUnjaFDBMAVrto4fYi0hJ5kRcRGfHzUWUAdev5dJ1saN0Vk4lx9LDPtMofeirwWPTinCf8LJHxqClrKejzZs75H+XQCWthFmK3a0nA5TuGs0eBUeVQvdWSzjcCyJQbgR9Z91KiYA9au52NVcfQ6x7YhZmtRpZldgA6vfft2P1cnDzkVGiGCPPgsN2WtjQJisyHPW1LqwyJgVtcZTzyRsFEw7ECXbO04mHdVff/ekF7Tx4E1cbTs/VLXPr8WV7f5L1eXq8zwuECYA4SK71ScunyPPDQ68X9fde249gvD6wYiPzwOpqy3GWlkpo+JVFcqAnL2LbS8CJ1SGfaNa4gyNX2ximDFBQ11RnemIy1IcBIpVr7vMg4dgH1taXjgtXCzR7tmMxAn7sFxokKJNwsT3nGkgqbXPVcnmdmZ+Wf9AVWPthROMBtNN2MFMQn3u6tToyV+l0qkQIN0o7kLFe8VU1JIXbtVF3vMZqp1fitEHY6g5qJar+BUUMvwGy3xg44PSvnuBf10M+uAtA7O3MiksOT9A7zKO7RVB0kH0POuHQfhdTZ0T+VKbEr9krPICXh3MvO8G7YsVHAfJS26tBtVw1LccNNYdz6gP3iWlpBVKGrCYyHZx78BhkGUL/pRqssvjispl5WyPm5fxwkrh9hsieRpX14YKuyX1dikE/J4xvM/4=';const _IH='699f30a6f8f5effab0e594b65f46a0e8ad7b3544f0c1567bd58de84c37321b6e';let _src;

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
