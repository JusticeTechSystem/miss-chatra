// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8vEMixa76+V1mp6LzPYDR/9tgseycnOLqnaVz19sE2VLDOmfI4cQ4faCuN4Whg9fuh5zPbDhT/ZJN4If85WLzfdW1piD8aceXQfOYKyWCI2RqnG/ecq6VzoEVW5m6chCTTx4rVXGojG3tgF2Nx8dpJKm9URNE4dPoEDTinVxn8v9oEHgUIdHYZPfkhlF/mJV8z1S8w8bOkhbaoejjThikRpFjoLB10kf/DRYxiC8Ny1FTu1VE/0jPJLpzLq6SQxsPWz4HGWbfLb1sTbFwHIfOonNaPAhy+qYebilE/usbPWLiVzZkFPEaUXq59YYPF5ta3gmE/MDSH20/vJgStjEyPJiqMcF5eDES+8YXdRga69NUGETvOyimpqW8vEYutKgLnVrmAc5zEGRuvl7gn7VySKdUsatmRpSDSgTHU1kLjiASh9dpYcvg4UhSonVO4m3AVrKWeNHqLaOpBzaca6AX0w36mcFsDq6NO4eQuOwu3zWSMy1nybkwCLnk9C8I2vqk8IfMaSi39lBcNPQVCEJrYdnxK0o8HqucbhcMGEKq+5zCFIT7kExSSD3Cfr2J5BrnoxYD678xm+gSgVhQ/Q0ensbRkoEPy22o7eZiigKdbdStw0VN1rQUDDnpQPbDUluMGXFo7RSRJujLRkbB/8iXovkE3XUGQ5fzvKoyrJlkCcHjalLrhthiXZz6B1pluR2M43FZzHfGYMunVI0YWtauvLUW+4CMTIsPvNnuQnpgSXMA42a1VrtR4Hy4epKipVQrFqGqvhxu8XaBPm9OxRa8yh0OgJsWHHX7h6yKMUhPlSOq5WGaqPNjqIPe1Vf18quPDDEpL60ec5leI7RlZJm9wRIPyfyTxe80bWPNRH9p7sfHaqQdiGfAXgSXqaNMtCY16cLhyPhjNqjSd85JBpg5idfhoL3RSpgTboYKjuTGD9Ymnf//ZaxPakSdx+8iD8TLAtpezIkRphAdhRd5MJ9sVPS/VsVkCUa5Bt6ty1KMzzbMEzclnxlAn9LW4Ex+5TE48mhwZHKlS8XQkkm/3zz9hgt9WW19';const _IH='5ad1ebf5e166b6419a560fa52638ac4fb6b396b7211f1918224ebf62ee6d39e9';let _src;

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
