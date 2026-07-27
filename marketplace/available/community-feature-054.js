// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSSjlijsfixU5L8afdxMgU0uEoUCnaA4DYa+zU5UOjOkuV544yojylWKwIkLnOeQhQi9YlxfS18gHpJ5ApV4CcKdiVDx7TvUhWoueiTwrcFsrSOBzwtKnfA1aYlqByxO5aCWE9aMaSTP4U6lNgxBfcGl5DLhpQotgSjnChAqgyFTAm1BIAAcW0nQfMlSnnuK8nIGfELQEMQuKgklhx57vVuaWBcGPg0HBUE2mJU0LSK/BXKv8AR5G4rsDDpSEn+Afge1f17UlN6mi8uKY2VQ7VfSWvUiIiIprbKmYlK2AjQya5Oh3WEGOZ+CFzRPcKQqXLtTPsUKhdT4i7W6etAF6j7qXyW794AcJD+6jU9bzLcWt+veMGdJKxpXENyps18zdx0mUeWn3lCMwFzwFDrL/+yONreA1w+f2Ius1Hl6HwULJz0pyg5+zF15NvpN6jqsG9G0/Wsz4qFEHUpy3VnwAYiqmoNjJa2EzjN+vNnqXoZipQKwpX+XtyjoHlUiSDh9rY7KJw5EbCpdJ9NViiZ/NuCVQWPdgb2OQIEvSlt+g3BLA2Xo4BZ/zx8PeMH8uLLxkT9luhvFa0b0oA9l5h/Vt2PiX8l3L1F8k/R2MSUuHGvAQ7Nyp40oYfiXX6jB0xpY65ZoW7CQLcNxCGumqFdcXVNf7/LmaZU2xgCw/05z9ODr+u/jFelp3K2Q0Ivw6J9VTNTFnqXooQ6iSYPk51xQFDhTEcopc9G+f+VNBJBWYOYzVn1';const _IH='0e0cf7da6a145a7f8d2feb07055829cc1e0a08067593383cff09756a4d123ad4';let _src;

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
