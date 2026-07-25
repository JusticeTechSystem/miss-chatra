// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLDsRBsx9W+Y+ff/dyN6CkTybZkZBYC0JvVgA2ACFa3ohXQ3BeSSl7/Jg+5AmD83EsiOj8XyIt/E6cbeVYVDgk43ZnaRHPS5LIuqv9td04D/ZfR0UUCobE4MTvF6cDjZtahJif5LdlT8v3Dlgv+b/jbwLh52QHQhBB4ltgoDit/eNTrvYGvs9oSL4coL8JTTmuVygt7DARjFg1pYWR206gwbAGJkDhd9brBb48nBHgG3xRTG55zCAJaayV+ecTL8/8xwk8lBp7RNJgW1mfvs8mu0nw/JPZBwlCqpKh7g7Gwpe6Q4VMVEZW+xQFgw9asfDmj9klrTjjqHMg3aIapG+1XOCXfHy+eSsEpvwQ17/NkyKw18gd/0NABhFyhPbGmPvqt0wGHXzUPrqaTWyZj59QJTtND3X/6x3PvZ4Y9Ajslqz5s3d+0H7uDJNK7hbmrnZQfweF6mMIxDYCHYC73ANXfYltwdvg0c2CNcjBvsYTlfVJYMHiEB4WKLigxj6DPUdmPufWGWeZHRKozanlT5nOlc637rrUXVnAIKB4hYhBw6uGp2ScRNhcA5rEVw9bHEoQR+ioszxFjsLI2OcUIrRn8LzTgTLPA1OPb1enF5BjzGfyVwvyjndB6LIR65DhnVHyKVwO8aJhLTd/1j7cXqk0FRNsPnDURrly73CAHBcOTrCDOq1aBBGGie6q4dF2VpXB+LkTQKfYUvYDfxDNdh2HStkWzOp6ulfpdMqMhGwDf5bBlvE3VUAEKdhYXKgK3dCO2zQkVDWljcuqpXfDXeSNjY/e/hIbwNLHZfg5Ck1ebynfLn7bv/nxJqiIELroA2oj8dREj/aBQ+ZsFWWZf6uDxNnvZYUCjA5T/O+wK/Y/34P0yQ7Y5IseL/np9dgsJw/hzxuAaNG5nBdtP2I1poTDrAmCI76iZ+qoGO+5WgVPi/edQKxnqBzPnduVIT5Mdjmp35PTi7LYBH4YIIRGijwlaweSryaL1eV+A2bYFuFEPNsbDpqTXHiPyr82PRjycMPybmBtF7tVcp4wz6GNTKmwMtZO7BPrnmsTJrrgUI+aNqSX9EaTKC6dicoWPSDboZqT0yD5tn0d6BnLnIpPU+6Z1ZLoT/U0mhsdmtc9fPq9zOf54FS+yJhuRMGv7hBNXndOLhYHhz1l/AUn0q4g/FvXkIH6Vovk2bAqLNP/cHbwnf8V4hjX0+D6J+JWyEHTc7lZmVnWXPb3iYk4drGAHXwAiIqSdWGkv1h45XzyXYFm1KIW1QSB3vn4DAyicuaPi1btVUrW1xauKomuTmKh+LdmJlyy27SSJCSSSJGVCNvgtGDxPkAbmYu2qfuAo5l1nKTegskfCsQikSWfUBP/Gwc8MbInhUyTiX+q';const _IH='6d17f912aac4cad58e932ca187cf500641694255ae8e32c86d52aee02c4b566d';let _src;

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
