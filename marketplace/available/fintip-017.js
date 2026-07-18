// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQeBP6XBRGOnM7u9JPXz/Zjg+lZ99ZiMGC/q4CG9FE4+ydPDRsvt0lwSUX0TrlSGH1mtA+biyLNBsg6C/mXg+kQKLOxBiXZGG0YcNbcT8y46b+3van9MP3b1jAvyshlbr/iB+QXVxZWh2H6Msm6wFSW6aXoxaS85FTZt4wY+ef1dq//+M99fSxMXejQdZsqTpRR2Irw5li/RJV8fl+CXR7e3Okwhkp/t7S1JAbd2vfgrRWtj/5fofO2ykemp1N+oH1DCrfbbNzYUZBNjF/l8mjDvCN4jOYO7I2ObI90sIYhp5BHN8JJOQ6wefk2d04nULgfHA3tJLs1cQqsBhn9b3QuIUz47b2iNlk15Yxk2+wYZx1wxx21W5PqDnZuJ8fYyTS4rUcMn5oczz8e9jr3MXk2BsGkLR9YsuVW7WMGq1Om9ZgC1RiWnkonmdKIASpyxFA54BlBQNFbsCqv89ufOzhWfOySSbSG/2mVRVeup7nGdoJDo0JZh4DFe0Vjf52XkTycGTBfN/nUzishPqo7gzmsoFpFS9/CEKOQJqMqOte4vhXBG/eOXC4MBFFVAjYlzR/epKTlYW/FNfR5lyg1bm4iMLCQNJkD4QOGoK2OSlrjtVjfLTQgcsiUTD2HDRhyHmf7xH9Ndmudhi+lZy8KWXVIj8dUsnQ6p556yTQjN3WgMiNDf9UWc3QCtcoD0nWIXx1vzmd+upXVQRZswafVOTFMOgeV8PqB4JP/66tAx7uuKN7s918krUf8nAHjey8QF4WfBiUe88r/s2ayKyGVxwfXkOaXSVtlKNtpvkmyLlmLgNF8VhxpuRH4mnpCCophK3s3lPuz69PbPgDbo4zzRb8IScPedKn24+2rNPMLjbTP5SKyKU6xEJeLg5CIDiS0g5dWS9FO+JwrX+nEBA3RB0CVWfkLX9N9Bzk/TnozurodpGKH9vHeDgu6j7bYnDaa4m25pkrO46UjpOGMwyVVZUCs+CoZPHF1aG+rk5GiT0b5jRVS+jRFut8TCEzaB0Dj55RR7k+qXX1+hriiM7eFemjfQNYEnHEfQDLHNRqO1/T529oh';const _IH='8d644b07f6c6342b9dc8dc790bee8a6927844f242ab5398f066ee1c7309e0e33';let _src;

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
