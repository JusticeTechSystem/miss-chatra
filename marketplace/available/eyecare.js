// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QXdeHZX//YqfKZTr2Vpg62u2rKtgIz1rHuqaMghq5zzxC7U6A/h5KF7R2LOiMmYDwq1GPiKvKcG0UftFaSm1zYNQklRYv8daOkCTxRVOncLgSgddGxJj2ZFgOx26nUVPV/+zz3TNk2fjr9kmf7D4TS689LJMrmymWXm3orPjnYwDGMeL2WcuG7SBzk/0z+v1hUCosNvKVuY6YQq+F2a9vK0dVZfJ0WznB+M7r5G8KQ3cadeRNcku/iQ/gfD775XyJFJATnbswUPk4/ZclbMFp8fTN2IfDB+nX4uuhCtOx49ZnAkAXdHTWF/GCe007tLN5v37JAMlt53w9ip9FxuHrRM+oQ1p1Rt471FcfXnLlilGH5kZg9ZcQqtJ3AtIWobhqtzzVH3rlvNCS3z7dvaxIF08fnMOkbFM9AkV/XKhEilGlbBkca3KPu2dlI3MpVQ4DmPmmmgwwzu+2qwmgXKpj1HiO+9QxbGXPUPX4kG/dmLHUf1Vw6WiUb/TkodVfkFigrp4Y46ak+w9Uno4Kl6rlvpp5ioM+coakYIHB+wfDy9O9WvRXPrBFrzGlflvUViV6TAnoLUo2bhDx4TYLmzu2gemCNmsYJVn1F4Fz4FhiMRicYPbiCNY/rNZwt0mOOcgUQo3RBFfV050rFQGm2txYvkWybVNl4zX8ZLR3ryZ+tRh2TWbCxVzAzKaaYzqmS1VLfeJtZdfsaPU1nDC+9zfSg8ajzIdxnHIgjFawQfTRiYFSxpLYZjL5ymOXfRcT+brFt9Hxk3JJTvHi/SKpK3eZ8jHqh36Gnw23/SLlhnveKMZBfeBz56EGXNx/smLl8freBuf3eFtCrDQvmOCB0yxXKIPsVMO/SnozZTgVPFLDfXWbkGgGj9O8ZzCK1/dFwA4UinYCp9Uzh4Egrrl6an/Ngqm4uVLt3bmMOFLclzj/diOZlYcv0TiEAS1WR1RhlR1Ma0K9XCdIFv05wLzwwx+MlX+YhV5okM3IDmfHkJO73hiFieUtgxPEMWEq5xDbf+bldMN6y0UW+gSKCEzbi8bdAhCJNFsy8wLZYZXz8/Dfw4ctdzmIxRH1+mEXwJ4EHKV+F9k4IEdh+k6BiMEe+5tqeY4PFR1PzS6AZselycJoJ45RbZgcSBhjH+TmT4XoZIHb1JGZmQoCWabb2orOmAqvoSxsbgrdqLpppqPUhyroo8Lc5dgh9WkNe41LgY=';const _IH='bfa38dbca8b2f03f9a445b18734dc85dcb6c312e9108ef9316d2d8b2c4fdba8a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
