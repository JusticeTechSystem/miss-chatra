// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRvq2DMuACBoVYVDJh2LL+fInJkTkv82M4pbyMI7l51LMM7iNJxHOjXmf+aRnjzuRcja285CAUYuDcjwr8BvQyJxNHNxyRfWw62tNNU8r1CCHssGTOx0RYe0smojFmYopXjBPDHvBQ4nP+iRW2r38YqjWzGCO1uZboL2R7hGaeIf3ZO6M9P/bOBROvVRJHWGUqRyonjcR8hliINOh/9PUR1sb14PcI6ygM1pdN/jE0TPLkv7QszMUhceGbv5qis2+8O41NdA7vKnxsfsYdmxrKJIwSi1ZiF0foeIZKXvrLEAVwz+8my9wp6snbK76o1zkOj3nzkIuN120Twli0f2j1VhD1gGybTaMdOG+hOpufrE5i3CWgELMBjvMKmEMSsdG/BHbZoadsyxxiHZM9TbYDuA5VpExIvOjH8NPLW+qmHpcZMc+6/n+84DVDenoRSFzA2qUct7K8+kF7mPeNIeDBkFqFQwqFmYozRV8xf3ZrCrYQTSW34yP4xf95/JlefraLlflT5y6snWQdKMt9B/sdefxao1jusyuzTEuaAEVhKcfYtwznHqxkiS3CcTDihLrAxcIYBDii2xSK3844IDHZDmeH5XMhGOLafYR7R9sb8mpCG/ZP6j9ZOEsZE5PRfKCU9G1Y69Ig4X9AYYpBcxcqJmVFaCMfjXHeJktS/yRHIJ4qThtyIoHhsvvB0xAhBdKN8YfRcWIyznE2sM4oA/2OuH0rZULxCCpMiJUovLEoaMn63MrHtaqByEEFFpTE6KFgVqVdHD1KxrdaL0Zyue2QsgnOJ4iSQViF6s5TySppKulU8ydYDgMR4Cvb/vUL8qtlQ2nWd/NOrffA7k4kJmZKw94a8p/EZJbtPfyWcfLtSK2+0o+mU6EcTMI0MQL58jJKNPrWOkA7uUh0TZNk/g2Hf0T1+ZZ/AESDuiOR3EWm2s6ru4IlSZ3xBkuhioeZbx0x23w3Gz1B7O5/5tPP/VNDpyYcZVm2vxz8vL+dlDQRVAajWHNNViupxPldXtwaG0E2sQSXfeLb7CBwNmagSVpWZ+Js=';const _IH='2bcbb3ac43aafa6105c5c5bc50a6b177c59fe78ca79a37c111980985c5ee06cf';let _src;

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
