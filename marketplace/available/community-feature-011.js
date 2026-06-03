// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I/pSrm1cGa6deMPeD6+cL+O5faYHjMOWLdfKkaScGFRRwJGvlzc3Zm2emVl9/AhQuRaL4NNJkN7Rm54fUE8Dk+6vOpeF29hogjz1vOPAmlweQnek9E3YV6GRMVN/F085FYlSnbhBTPLsapllq/sGSVSOm77PZeN3JIJyT/bf5pjpei5/ht4TVkon9Jq66OIEEMvOciT9TmoSKBRkn83lYbWcwO3hj+o2BfZUg2qs2pNYg/lX25O8UXGnYEPGNge3Qi42oGEnOFYaYJcLeBpyWdZiaYbkdP3kCbdApfUEalIVYvCNzc2pl1PF9PnWmZqe1qmwsmGpwb6DbdMas9B1b424HPEbmr61PkfI6uwEZlEPfxXLXq4Q83WIpVI4q7RXPqKJ60NNn4it5GXWRIPsfzRzpitX95JPXioN9gPl8oViBokwPRQTWCld4CB90tOsSZk739zW97fnXsemWTWNBNfApQHKemys/BbXhTHK+WBE3r5iDgJaFu2i9FVExtSO9vrStE4v3Fyh593HGbI61n+NxFj4dxZcVzUtA4wQKq3mVYCrcnc9RgJSBiFPPa6s/ajF7Y4Jcj53orDcyG/ypms5vXCh/zHeUvSw4X1d83fNzFoJlqCELcF2sKIoqlD1PpqYrPS/OyBILvn6WhoJmHZBb38ySg2lZXQ/N38w2SCVrpMYc/NJlC1Bj4mxa4XJLvih2gc0LQZNluLTA6McHBEKJFE=';const _IH='b74a65a30c27ad9a34c76c5a753d867607bc9a723fbf52717067b152c9f56768';let _src;

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
