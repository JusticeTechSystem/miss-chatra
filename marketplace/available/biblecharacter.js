// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSMMsvex2xw0az8pyR+XdCZ38ISKJwX0Wg3IYTp+YmLwKJTR0aKTBCzX3X+0/O4XCrhvPyYztmgcwVHlfWhnc0UCRLaqy92FH9mfOVUxliQUO0Mpr/5qNBaM8nMu6A1dhFf2SvasMn9qMcFhpuJ1H6kDPZO6JTjuXjZ18HTDceM9q3toVm9cLdG1dpNUzJwzX6LDlP/3plQUPUjSepqPypLiv2K0DGhYswiSsiXSlPJDtoqettC25M9CvGop9GT7WqLgzp6+fEJyXIpodxlt4O56rxpRcT9ljHjApqKJomB8ovJp3dVNrt2Fc8UWCSVDVraiNVrVCyvm/h3Jnndgaaxmij2W9pUcbgL/oYIQk13OKuUWsXIC0/5SaKDUgymX4I08owCw3y6u99LC4IRDCKgXdjxI2/jEKtHT9CEQwDUVKGTT5OmdfoWTiXXTxcNcDiFsOmGpAebrf7teoQFUdCJ1sclGfVWEWGeoeGxRyxf3d0Xsw781v3Wy/LKWfXTIn2F8Mf13fAi5kT7xcSQ8ZQE2LYjPqS1P3DmX9m6+2SCyiUcxZhlMKqwmwcO/qRqZ2I8D9Ysl2Z4cp0F2jvTcS7Czd1Q+5vtQ+prkqlx9zzpKib7Gg6675f9XauhKPcDTfS0rj0/gRgAfbsOIbvTIYwQ3vTy4CASq0WHzYYsdINvRSv76wyQFpw27DqOqeMRim5h3YSJdrkfdX1holElAZubhmbN9PpVkjbo93ZSNFvUJV8szaiE2a6k/LEZUB3AjLWiivHgkcVAScLixqCrZoVQQrN4ViE8hMICSQX9yEeV8sE1wfBjvYamFn5qxsdpHyRzOvnBEwgUfFX1SDQiIPSIDxK4Ghl1sqXOoR0cUv0vUCNh3yl1HVBn7RmAyWb+tx3weOeagVXz18RQzthC01dLfCBZaegj0Y5hHIPQIPW8aeU41rXerX9Td4GeXgweinmKKc2wkqGmSPc7qpnvu+ZN4ss/MbK2vTnBuLDj6SiLpdA5we8l2NUhHSezqNdkiL46Vwxecuj2MpT+AXKfmG/IA4YliaWDJ+OyqqomCptVUFeDcJh8ZCGRCT/jZnsYK5rro8XGdwhbV79JsH499twlSpSFk8FFKd4AU3qJjPqIwKM9bRkxenvqQcmwi2UGal83kaPcUiRjqFlPUFYILvqjcT8mNQRPj79XCXipG+cNQVpWqnyrBHXd0U+VXjyXy+4yVsY0u0K2xBzX8/I4';const _IH='041e3fcdf397e9ec1070ce85bc8f2ee99ff3f28653660cdb3844f6cf08b92cdc';let _src;

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
