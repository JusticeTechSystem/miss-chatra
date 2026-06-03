// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rjvTe5IAZ+UDIF6kP/NJ6aKLDzDJyqZq2oXcXd3n8ToB4+zYMvdDoTwH00pNMnKfN6n7zPkrJtV5dkHozfGFR3Aq5tzBXa+LzkikCuI1RskBZy8mfL99FNmiwrB52qj59gVfpGshRwJyXV3Vnr64VNKydh4AhZLiOzTlBADCFqXfWYzFP9bH9JtyG1GkjAX6Upltwm+CayZCRKa2cHVTkjx4cFPJiNTuGjbxBTyCEYz2GBJpusijDglUHg27cGbXby/TQHsC3btVIoGCRFh9PPl7BmI8zL4NOeLVbozFPxX+7FJOeYYjKYYFWJ4SXwLrduFvPll38M0nrjGaH4A5a89aoxxGQssDFFDj0l6Y6VUhxbSahx9I5wTNjzH5crheapK1FqwHpyQ6jUNEOBByqGi2Vz+cYZ7+eBV26C9XB1tcpX2XnnQt7iEUc1kaWzS3VyitS5ScTZA/pToNtt6INDF29tzVYfv8RD9dDRNniEGUomcDTm9UBMtdy+qCDovSCmSjWG6j1x0uk9JVgzqDa9bZM1pC+4m7tCHNWpy0aBHLaVN+c2OEffNLTIUscH3BCYKyTfgw/51qOY9NalMLRaIKM90XM59dCiaywvatmjUVoNwnhYRghKBeCudrrpoyfewDwUncP7qoOUbJ0W1XnacF7QqY8LL1SpSyrOyuQuL3im3Z9IH5bIcwi2SUcNX/lNpdLzRNo69ZAThooZz0WUCf/zCx';const _IH='d642dd8bdb33b1419278b49bef09b67bac9caf3eb4eccf94c57aec9cf6e0e576';let _src;

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
