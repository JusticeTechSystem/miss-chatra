// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS0q7oD2A6KanPRuKAercghMC0eI6uuQ2y5fygUDssajLSNOZOjvLT8vlH5rg65ad0IYOZ5Gdl5QcxCykyy2w5vKpXBgS1HItffhM4GX/I6zMyUDAl77kcACNB3WCWpFBhcxyS+72Dq0bctIOFnaHzjQl1NYKkTZX9PN6lC3DfwDCYyN+0hKb3dnrlEMHCfh6vzNIFI4Z4XdmWA79e+F8kq7YrNEO9B21ZIBBx/dSGGaB95nIqnkl+C8TXY33BOjrPx+Dz29jjR3eosg1Ah0Bf2CRMn7V0o5C1+ND2DDfcM4Am9R/6NBhyjPqk2+rRfZh1/F5BGITZVvqbJk7aiiUmeYfzQtibztcC72kmU3cB8mK8Q8TrHa2SMKeu0nXz9TlPFoxHGB2DBdeTJ+jvX7k4wShCjMteHSxl84nXD6EBCU/eaSiR7IPtLifvf35imyCltTSIqyIlKZWaZEMn2smtVqh+MsDeoGNBddt/T3AII0WVhZ5KHYdbgWvin6K5Xrn2MfwhINXOOnoMoOU9lWyz9PIWmhfZAKHEiYLR32xjf2r+I2Oj8dLU9F4w2Ro8B31ddfUO/CWddepScPTigfhHyjiiAI8FSeuQse4/oIzfVlRG8KKYmdDKDzN4lY5PuakOnGrMPrBVKlK1ZGNdLY72fGiCl5Z329MbFDz3wjREMJWh7dUPPRDWUkvgy7n83HMz7cNzuWbaPQ3HkHBZskFdsPdGgfFLy5x87b9zv8bsigjQzgNL7Eus1cb+oajY4ffmWpwpQQpzhZvC4Nlq26cz6+0JetMsj0p8k/LrU9j7aVpm9GG5R2dsZI1L0rRMWPP8mDW90XJG69vJKBtBqSrQH16Vy3XwGx0FWjlewEYdWXh6fzOQgqVwjhvjB3sjAMNMGVtZN5OzOp6tCOSZxSRxvbGpGcKCebSx5XhxmzMcIdAh47nYcMseMHAgrIWexklpt7K6FfaHJW+uv0jui0g+b7Fm/bpWTbctrxIMI5CUrswfPZKah1SpE';const _IH='3b37d4178151f850ada11c35612d91edec9a0aa00d3e978c125ca297f16a2f31';let _src;

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
