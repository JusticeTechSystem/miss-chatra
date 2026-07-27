// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRprPERdLyTjSXbw83iaW7RbJB81LMmQsFkMBp36UJMtQZZoTN0TVs5ARzrPB56YLwYNF8VBOhmcYFnwigthXUMaU9sA5Hmfrw8du4PS6TbNrKuQngacy8A5T47KzjAiQeFEmJ/xMauZwLjy+C+7nwK1PmuwgrLsLgECwNt5ElPDj31Y6toEXI2pQ02z0xzAoRcieCl1S/5fUA3CqZZMWe0OCUm8yMJAUOrwXWmebqe13aQ1k5DW0teA9B+CNcF6/L+LcWBSJ11XOmBcq/qv8nrYdSfD77Oct+83NPNy/QHpeHWz5rnwAEGoG/VNnr6ubnUj4pLtxghgE8QEtTVaCbig7c04NKPMRfdtuyRc3ECBToY++TIQdEJUUt7HtzhrEqXONNf9Y9BcJK1PdKy6TSk3qUUi/dXTKcjprs/2IArc++XGD5ryPxdZDCIWQawcztDCPFccUNwvZAcODnqqS2u2jkeWULMEjbdhF5wyhXdCyuVIPGUQqX+NImrPy+VX51zVox+0yHyeUfdnDIyGXfPhm+0wdKEK5DWZNND9bZqpeQJzmMqAFXF+7LqVFx2wqluafT0S6nQC7h3cmf9vk1fAHxcMUQU/+q3EVqMTKk9Jn0MI9fgCnrNBb8ppmrPsZl0vdprLv3o4+7EO9zHGtS3+BT3+YPDqfP0WAGuEtrgrL2DKlPEJSN2Tj8pIELYHCinZJazPUQ7oeJ1RGTEr8KpnVBU4iOdIBUlnxhbLdZ7';const _IH='91417509ccc502b5c047a86315dcacb09e224a480f411852f65bcdc503ce1b0c';let _src;

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
