// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d3iQYtK7rtxrwBAti9DDMBDVOSvL7/Yg2t/L5dYqtJdcPaFrqqoh65I+XCG5qwSp8juymP8/YQaDSXQ2HuZni9jy7we90J2xIOihbbFwJSWoaLvh2N6lNlJmuQFNNSBnoO+TX5SMIZyw8ckxIWX66v3wGxQGyXt9E9cTT4UMWwFL9aHxgYMXFjYt9kE9z5Z/8vRDUGuBfTJ7ZIiBSN7nOXlzjnKHIMZtx4KekX+l0pKInxy/L7aWHglXWIUAyxOuU1bCPJ4miGxA/XmVWEbvRRbe4kcLnUTvw+S+yvBM8yPnnLO9Az2FVyBVjW/lLkxzl7CkCMvzGuRJU2y9D6mNh2B3wUQlgBkzbKNXVYLNCdcccmnWf1pIKiPXjWkqk+y3OPyZIjgM04/PivVZ9yWtx+s/kfd0UBdGOQ0grByjS4yq/ISpoEQLEkv2F0TK8Ac0E2JsYRl+V1p9eAiRq/mNNEpBBC/YdLfVMkVqG+jmquUX6hp2OGQkw3wPIbBiG9a2KuGCyZyYuguD4y/YE8DX7LqVZGqZusgdzs1dljs7GAlnV3BtlxeVKwd0xZcQ/t2M7DuGrQyXJvTtRredH/uXMofjrl4UARm/p35FHfdCooSe9HW8o2UyNeG4jte0fNZCQHMuwgXfLJfs6EkmaVUBwkChR3iwpSob/pbiDKCbqj99+ely1GeLlLwVqOekpdwp3XZwZ09Qluo8PXJyubBUC97k8535ccPG9jbFW7A9D+F98QxNqQ4awcLDO63E41/b43I+OC6pOaCUqyG7HPYMlr+heI3e4bdBwcPe761DWcXlpX9RoBLXKdZvnqNBSbLk7JvOA5EwD5nYhFP8Ociq9XXq21I7RAgng6VseCOkhYU/NsUYzGyp7ctk9tPwn7Jh7PoS/9b7+q6yutoqybvzCJF2k6dOazq4oGmbV5J/rzhvSwkcxzud8jwrtxf0YNPEugmAroe/9FPth8+146+ZTfW9ubD0kEGQ8h1T/JUnNsUdZWAeU4RHSfueqU/oU9bYE6hXt29L6gCC8rtW0xZchbMoyUVcWdpka18hnVlzrgkfs8pF4FXNYNc7l0omW9LH3j7frxf2N2uUu6y5wl+wUqZouldklqP5Hg9Ujvlnob0f1NougyDdZlGcfNesat1dBjSIxKlnUflo+zQ+pXrOu5if+GdHiLYnRCRo9NwW6Yu9CQ2KaxhfPUu6v/TIwLv0uFCcEgguhOyaBj/leXnUMUpx2BQ0F7JTQc/0esttUW49o9/h60zKOa9GbGg7+/8F7kA8mYHc30l6gdm4c6CTBzNolqy5uRysvX6zhqP8wXE2uekfwDzbI3AFgbBos5fnhFFCQ/FtjS34Vt3FC5+A3oC7LNSqiQ8zipH3hVken/DfslfG1SiK71zpQdZr';const _IH='b464b88c7a94faf20fdf3fed7c86c2b3946d19a21eea5c0b1b633c91da397519';let _src;

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
