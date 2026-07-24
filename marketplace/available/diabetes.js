// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfg1k4lTBjY5ai7LbFub+ewHEwtRbwLh0G+MnXXZeiiJDlyHBlxqTGslYcyHo0n9BWAaW2T2ev7J8ToAUGVPgUXkeLeMUSa0a+oXnBtsGxr4QeQn4TLRhirFBFhju7Fap0guR2yfgm+p58siz71vAUCNRg+N6mjlJW/sJaWkLSv/wvwmQCulqm+SEB/th9AqFdP5+VB2r4fQdJlUAfeRG2irAgrmf4f5glN1mQoE+ZT4JZq6FFyNM4RuXK/hNQGqHJP8ijSp20hiOhK4dyo5E9yWy/b3yQsAS05lVZBDdmbdc3WQT1FQRVkBpVphapFgSRlO8Cyr0jjsadhho86rpNLFMaMmQYhtatY2uyUlnSbWgweBOnuIOE+xR4jHpF1CdnGuCE+0Y2QlJqAvP+7uF/8s98fBR1akC2o+l1qspskMDeSw5GIhwS2P9kdDa4GJSI26Z64UCwjjeKrfhETCykwOrjhugivMH3rL4yOAD7RY6+q4PTqzhVnGemrhktoOwwem7EwImyFOaRobEpUMHaM6d+9Z+rpMpO7bWpuKae2ZUhRhgjeaH+N1vFEXKygRH6Nbfm/gP/OAvXW+i+k7vjsrM7ybxs0JHnmpvkjMpjr9kXceXdNBsf9MG0TeeiiQtHNvneapCreOgipOxnb2HqoPtD5C0A8Rwxtvw1gtycSCxPm3YOO2kHZ0VsFOkZyG2EEBn5WYJIguDpOXeKqU9Xc7uBcvh1uWcNd076yHLXOcsYYAmWcmBa7seos7mtGWp28XdC9y7Y/nwtPvTXq1KE0AePt5uI+vXE0tVYz5uspJDD5dec+xbpr7DHxPQWJdpq10NS6/Mzaj5bihNUZ6L2iwNORaOiJ5fhc05EL0rnQbZkNyIYvDjsYoDqAWBox8VyHfZn4E4giRTnMBjek9iKQEbY/XeqAJxBWTV4CyyB3jz81vvAvrpvq9KoaK+flNSQXXpVJUTFU2O7FWCN1Nam9k5MO4pmm3Td11/ubpMSLTJsCZH1FA/WjWUJLUAO61mYSwe9Ox3Kx3Y5L8eUxmuup6Gez2xzMgTL5Sv8zuMv7zh5TC9yiBw+dCHyHU9/Ih8KG5WDtq5pOw8U4GHckhj4ZhuViPR2zrxqPdVYinXKZYXRZoyCgsCuq7q9oGq2vbTchg8ql6rVJ6hr2fNuEqn40vGLvDmrwsjY5pXnKEnA0oF+7FTh4sFLN5nB0LBM019SRQ==';const _IH='3014f8c2e7d95b10f12c1bd03b53d77d77733f050dd91067c786cb8ffb95520a';let _src;

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
