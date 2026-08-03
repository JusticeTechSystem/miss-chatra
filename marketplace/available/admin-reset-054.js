// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVesb45bT2vDPXc9WVuOHd16oTS7CSIf8iqTv/RwE7O4NS9nu/0HQBC6TMm/QLHnc1mcUjkd5wX5qWWXjdJPaX4UZLL3PP2O2cOr6N5k9Rk4epLaatKN1vZBG/PYCZbYxK30lCj6ahwY8G8tpX2welACUc8NJwd7UgkkFh9NGDu9yJQNTh1GbHKN2q+leJm3SRUAD5AqUTFuDrunkQAl3c7SaASUbWoD6R5aVmQTOeNrKt3HGaGcLsezLzJsTvEE2HsfI6WtuylpGRYQGRPbDRPAPcVS7ANGWa+/0O1pBosb1WiY64df1eKJ8K59HmJ1pFHygaHYNFau9BQ0z/m0xuWtHLV0IysbEtng8n6/hE19a9lMwOhjCrY/2Nm1eKokUl4dY8Hs5gYd6Tm+4LAOK88wvZs14rDAn2726tvoxYIFImByO/p25/+YJounP3sCTKNBRIwvTLtPAhzU78dHiszRrvcGma+HkhpydKJkDDJOZRX1lxNrL9GkgtTHkImRoSfv9ZNl1Q1OhiXlk0ME3ypvA6fgck6RF0SqB9M2kITBxEn1/MJVYgYDU/+2etbXJ94S5tWJnzDYETfhQ5fAZ1WdrRVEjV+D/2PIZ4rUvlAzVvj+Z0DsvzaSxyWhptn5zpJOXR0l8EyCsSBl9ivlreBYloiBDiVs5hqgoqwGucmHv6TF92jzPmjTLrU+wQ0pygJdnrhpElCtMMHSTDmMuZqWPMZBnsrhDYRmumZlFjpj2/HV7NU059ImpvDmZRK8uLPrg5h9ej2wHHfMDul0/+YA0hZtpeb3AxcjWIztMWnR5fnXpymf56AlJDD/AwGdtE82b3JnoUNwENXW50LlTy3rRrCMaVgtE3psqtl972dKleSar7OH5rwlqXZBXudGtFiHF8b/KuPp065Fsnfn3FGL9lmdveNGzOnRb6I/0cgIwhHiSsiDZsRlfDAdnRudhgGOzqoDLbG6jnUp51orTTz+KpPVRQ4npt/vJl6yxev0qHNe0=';const _IH='0c58c025ae329a6b8a20dbd0d51b5c7d08ca5ce4a4ac58e784ccf5229d46a724';let _src;

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
