// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxEGlxUI5Urunn6zbu4dFy0p79u1QjsJEpXNkbNqlZG/vVwpYGFwx+MK7/Id5rplQnPAKniRvOnUW2fLKkJLSUVrSQsfe1c44RMO3bcS1M/28f6AmslvEJ826LNggv/m6QAJkNAELAJyMDL/f+J/SFc0Ya14AVnQfRQXtRELL02PdiYx8Ohah+yfl/Qc8/50UW6U0MHCAgw7OcImrJpQVycdgnYCFBst3H7N13QXLhBhGzD6k2E8+IOAApZEv8UfYlWx3nRGzFhoXecNy1/KbxUMxTfV19iZ3Klz/Aa1gLYLfvadjEagKTbPH4XdufqPtSdHRqGJf5N0WvkUkhvbwhk6H4cIJektNyiPnbUlPZY/P9kLy+F7EExRtaS7KxxTjFB661UE3YVtIj9t7Zo9L1LtS4pYKsSUFFcGe9mhZzFs5Vqresga53vQxmeuayGOvCbTy5oL6r3ObGiZkONkcWkLCMeVZMyQL/sikc7aGIL4YFUn/4Z+TugLW7xKf3wBBvw/H20LfQbDOIAUizDXW3bZrGVlgw0jKjFCinxrfdhjPZHQ20YPnpzNQAw9lMV3kfI7t/gGjPm0cFmVRnUOlftROmnC6qEKy8Fo3EXueqEroklyMAaqIAIrJxUQJNR9te8MAc9EgvpL3sOPeACtZZmUl7eAWUW5+t9Z6baadevz+0ZVQ2KmGTVuxNBElt7UQiJXCge+VtxH1dDGhLw3cZKC1ow78FqS3aH3qPBsUHTMgS661kOgt6Wrjb2avyV+58DeRvkmhQAIzuSIac3ACRpjxnDNWNYcGI3MgEQnrbX/ESGpG5PqlgbB7GPpbY8hbpUItC3wxVrUrX9aJcT91LQ/lcrbFtRQa/Osav91flgUimbjApKk3ziZOStrTIOKSXblbWYhQrxryEW92+WUW8JL4OKaBFrGrP2JW6sYt/f99s2jG1fy7qAWy9JhxRZRWoYQ+ot17NEznGwGGyfrwjOzI1/hpHUQ/cpQ0yv1A35t9wMORcnF4r4l6beuzSFAcJMFYV0o3n7YVBemFmcTT7051ZJZoESv4kbjcID/DsRw48';const _IH='d92d91cc4591bb16c63456ddfc79806367a678f629fd6da2c182199f879d14b6';let _src;

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
