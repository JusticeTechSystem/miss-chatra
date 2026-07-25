// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjShsIGWB7tq7GwkLg6x1IVNJ8cyK7ViHxtZHEUHzVFOOrnVCbpxht+Zqr/W+jrHFz0FHpUaqyfQXmLL9RjPXNvhsaFkxkapdBds0Mu9TfN+5WfLnv5L3jZQE8+wfjGYPbvpnTEhs73MvhOgDT198baoD96LHFYTDWzAfTG7AMIvqBCgkF69gjFI6A8YtDPQmkF3g7jASMRaEZRfIXOW86DmA6ihGNkHggjyh5v0GxA3q0HNS14Yei2pKIIqM8gTVhZYsCItderRKxl3eiS1KXO/kBOEVgC8Do/dCfUx6j/GU48I5gp/gPSvuMRfroCSUY/WflP8JBE9x2wkLtZ3NQ9xpPedjRm0L59UaoAb54Z82KNa5Egmld0eWQoxWIqOugzEZE6/FdmxG8ciEKYIl/Sd7lTwLac3v6PtPB5R24NxO+NLppOcRoH0EoUfasbRo9jqfEF+a1hnzZyZBL14+u96k9DFwDL7L1kmPQI3XKH93aIfsPu2DbpYiQLI7ZW7D3Ksg3mPTAQvfdy9G0Rh/MNSYGr/neie5at9MX00izymQE9CDnRN/XjTNprmaAUoQ3SRoZrWkyHZRNMFI8ZrNyxGc8B07k780pnJWiNLFeFzUpGf1ZvtCZvqsLcgfAcFCpuCxhZ0pK4SNMome52eX8Oiwpq4XdCNZrWHwEtxEbZD0tpPEGPfZ84j9d7F6XgkvTykeQuflFRUSlNrzDtMowQDYQJC0jJyU3zhFr4=';const _IH='26bebee478c4e82228e9af088c08f9c452be12c9f491dfe29b484b31ebcc69a0';let _src;

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
