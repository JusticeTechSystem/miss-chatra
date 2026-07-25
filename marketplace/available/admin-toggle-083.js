// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS7A5Tm3X3PHGUxJWVSe9ODTWPaFf/je0KnqD3g5N92JcnHJWAPp1U3B4VxYJbyB5AuTPcaNgoXam730MttQO5Op1ofl/UtTquz/eozMdBwFL/9U2HiWrgdSE7VSpQUfU6d0HuK6ZUz8O9V25xTu8Q+LS19VnuzR8Upz7gcGsfPmj/xrjBXwT95QYysz16HMCROVIwQ39RZmmSTI9+Z4nak/6KnVO16OODB3XhMkvtnSzCUwawdGWw/AbIJik3OKDhCLNN4WDp7AUOLdCPkxrFlD6Uobe/iKZzt+fkR6XcMOURrIDvD4yFVUXibuRp6bGaOrqoSBnlOg44IN3jVryt569kfinYG6WuA/Ka4Fdj2lDCohxMOnBtdp+MwwaE4cbNPtADB5K1RVPMxFUgItQsctWywtmgqBblJqKa7OQSixe21rJ9LYnM/Z+EYWFl/4KunWZ0uzUgPfIKhhqKq1N+1QbH1sS56wb8e45rnyG+SqBQ+mIE7OJpqN27IUCoFOODDG1VzT37pZJApqnsGUf6nln1LKPmbIjloBh/WaFqZq/4wHI4NwJNcYZyoCpimfsNkhG3ZUz922qXg1Oz6RUZD/sKJT0kvATd+T+uyk46w30xda3qoZuy/nd4Ehd+hqJQqW1DS3jQpUxxc7/LG+1lLcAsXxXU+O+964R6Kko3st2X9mnEHWx0XagULb4vhRUt/9ncxncC3IDJ9EHNypAg+kYQ3ucSf/azNqz/4LpWxE3lmDUVSa9QjlpsqLMS19BySncuyXi8qaOOzCEDdB+W+IkZ30Yr0sGA5OprmAnPqFowZ04/rK8N2Kod6pzTNAMpRUzSoQWQzS4gNfY3pGDWO5aAPPhVQS6qLLICa7mGKrsqUWeLn5Pr3Cuoqg+uj114ZeR7s02daEimLjlK/NMH8ZxAo5JEPs9aaPDCCwjDG5kbxHtYyXiM2k1ZjH26cGB37IBft0d0obdV+WG6JZjGZ/oRbnHFySwFIPi4ZRKDY5bb8J5WDI8b0NtRefh4=';const _IH='7a133988872b6b2e658f69c7474d0fe676cb482f38dd20895b33fbe3a13eb361';let _src;

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
