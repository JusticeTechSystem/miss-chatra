// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OqSSSINzEHpJKar/gPYoSlA2x/5KGDuMmxwx9z4adg7Izgge/Dh4xihKmmwHFKTbunEox+fjzH5a6UH1iQsBt0JYMHmzZcOBTx/CkQ9mosssC+n/HCan0d/50t80QEN+VWins+FKRyOYgWcRvikmtJFIGeAtqf12SfZPGAHfYhm063twMqNNaRCO44AlBU14+TDrQzkbXmC0tttvBeZb/cxq7Mb4YJ9hOai7flS4WI+BJozuheJR96GEI6lJgAreBBCq2EktXMmH67/KUmKNx8fINKHX2VqXgei/U32C+jIk0klbBI1Yi81cgUUYU/myjnicVpeThHtg95RopN4p3fCKUcb7mLFoql8Q2zWn6eHkhA2un1D4PdYo8FKTs2aSDnxHv29zna8aVK4ZCiHqA42uXfNbDARhlywjjRCniNevVNe+5n9VgkqlaIF/ixBYv+ufC3fUOsF8Qo6TBybTTUAwVLBVyNSFr3I1ubo4d5O0qut2cbfLgbE2u+m0X8qJB5jxetsi/xQzOgxmfxAUwDASxoFkRd0grHS1GLWqg+1Z9P0asvfzgz2gmoeeNv8myoR9uHxMmEACIXZerKuLi/gtU8/AA1dNbYTQCr9tEeQ5YR35sPMVIUWsi8y9onDVqXalL6uFg2zXg7ddD/ozOdKBliYVLd+NdgIayMuhBKo2UDKIMRsk57LNj2XIDfkFpZ9HRWfI7o3eg74GltYaQObEBSPwtjbL4fQqZxroSonNgciKx6ZRvgNjWlf/h9jYDyeHPt4byiXNPhTyksk/skDXqEMK2OgwbAm5VWQ39Z9nWktJORxweJtLlxQE7YHjzp2il7lxGR2bmicv8GltZY8QNqHR6RfYiyYB2Mg2nU/Z8ZqC6TqTZAk8ilLYMWCccly0RrH2T/MmzGC73Z8NnO5JHnz3WA2mKOGdGyspzpAJeT3FnjPGEY+cVlLD9PMqLVnQMT6OU+Y3H03sG4JKfuTP4LZS6rAQRXFPL2J8b8B59D9hCkkDXfEkTOmkECTlnbS4oqjbytFSJ19JiHExhtVRkqVxOxVCN6uNgwkaJ/fS3I7oOMacTYhQaeUHPLDWGcj+iAv1J9RA+mNxnqb7gilevvx1uOPiYNsaRGSYuSUpKeBQWEO11neKhkF+mYZSsR7BedXDGmXGNoZSPFis5E79aUaQto9/2bSQjZ/1X2AafSm916CcMyUn5YYC+HtRpU+0567sVTJkg3sW4CLPeJJOqcaA2mKO24dSeQaz2LHgSSOQHKiTkSKuuZLQo5bjSqLD1GrTzwOsk7wtBm6WpHvMavBw+owEYySnXZk2kIuGK4qGYJmyYne/RTsj74ytJ2ORyDdXafO8kIOgzaO1kpviGDT/Gjv66bRhiMR5';const _IH='da6e16e533cab88d7a72c510c1a57028a56faeb29c1e3201daad8e29399efa61';let _src;

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
