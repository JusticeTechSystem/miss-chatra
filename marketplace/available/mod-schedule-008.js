// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQPDZM6w2A2/n4WiDpymDnH+nkibDzGvnTVsVBA5Mtz7UPQHVXSYLXGjvOqQV1Tp2LO/EAL9itu3omn6oWUT/fIaGFzbMDbqFjbUJlHKH5fkHC0w72raq2NWZ+dg01iux4P/z2HPudqJda3sQJDxWfvY2e7Axt3eAF8WrMC+McgLM0BPKcnqC3yDIEpx32QIOuVLttON6rXcnENO0xNr+hf9VE7suyWu2wGufPR1fMQgDSjukrFU1gM28WOvG+bySXOw/zc0dbK4YIV1u3SSLZMuj4X6MCDjovCr+aXNu1xbkbigOwV8PPg7taAwdIasFtcv53vygwhSqaW+irqk9iapMHCa8LPu+RqAdsy1gljGSVOkSk5KT8pEHZFxo+3aciJvMy5eflP/Jg3OeNkyxVYNu/shN79kae1ZLpgRI4TgEV5BcHdwbMnlHAmdNwnu47Vx0kwXkLwi9qurw/h1Krx0exlJH35gHaxhtcIlt9E5A9c/AwEpVQiRcBq9sOERqXW5gQKXivGQ1UggGkw9z/HnTJq2cn9xVoW1Kz/QLtDApG3ZeFd0FlRs6ULfVE7Rw0CgrN7G9jZL2K/UpQUzZzY0EGl/XI3i58OuYK1yT5ELmIsqL7v55x9E5GqDAtUpeHeqYI3y4UqG1glVQNVqGwK1LUmkplWr9soqPKQoBbhBYpJcSVb0HXOj3VYPkbAYUxOsjNeoreEkfFTKsckznxSWlmpRT1uL5cBsa+bm4TzupLOu9hXigtoTAEaqwGOMx3CPMa4Uf7ah8kGTXapAIlTXSvNb08E9iaJ+i1GI4XQYDN+KlWWsmVsSxkOkTHnJVEBKJaGMURnohf8UfMSXErVfO9ggtSKKqLPmtZXD8VpU2qcfB2ddQBTAgE0Vnt28InfX4kfIAazBa6BJWTMG3uHs8KdwZTEtqt9fyUpoX+w/pctDBCagslRjKnRvaz5hXUcTs6Sl+HXoslzEt3Jj3iGRjkD0+ngeUxeLq7q9obcS2zNa4a8VT86XFqKrv6MxQeAZycFe6aIjUe9nWFAKhKOiip31v1F28AaVm52lbWc3HU4hWbIewem/sm7CG0BZBOYhWUSLSwd3SnHT+EwhFRFzxnpgek/UraCvStC1uzKEHoVdmBSFwQpyizva5WmcZpAEl9VBNtP/y1eL68pfOi1bbN7PGkOIvDIxFnVQdy1/UKud+awVXvDNBIkT3ohF/OGQ3Q81RksMWGw3MT/UnfP16QYD0zt/nrw6PRxWYqeJKdJkxcY71uxsAtURp5JQ8aaflCS+D9TXbUokFTOZah2XC6/mIq8ZD5EN2m+bH4KkDfJjtNikQWp7MLWdSnPwYNaeq/PdZElYYN5abauisdAT1/HBT1+iQXh3O38TZ3p/ecBI6Iv519l9QftuHT8R/nenA==';const _IH='21a2a3078e11d59e6010dbae100eb933bb6e12648c37953199dfaeed6b282cae';let _src;

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
