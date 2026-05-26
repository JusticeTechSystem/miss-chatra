// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vcGAgNefzomo4sh7JJo4/uIwNN09B/1qD/wBYyjHCT0a3zPOSjoTvn8Dwq/CuXQa4ukJYC7fPoRBWilKh0LIVGG/ZdztD+F1K0hKECOiKebC+5ebeCY9DE180MDbPzjxFok+ja0gSsQsR+uNX7FViJ0BQeiQBVzx72n4lIWqwKWSVZtFl62bfWJzTqDGqH4T/lpZDnn8eUcRF1TyjIG1Ku1qUXDV2jUNTLeuezz7wFRpDmgDv7K51UFxK4irQCITCjBlsWSsZLkCXO0/YetzqmAFv2F91R6OLbA9Bt/TQzwXj6Yulx/NRkk6cg8ywuuQM4N8wpMoc7e6BPxwCKKYJi6brTCb2L9eEe0oFUK5wuGeqYwBA9KC7TNUrZk0uogNqkd64VkWtrdb0XBtZ5kMiS4hK1TftNOKGHlkO94kdfjmBP4ABjwkWOl8pjdoxuyz+9JLrqEmiuteDSiZE0Q71SWJS/Ahfsaed5L3QD+PDsZ9Wi0N71LL7JERbr7QJlUachLRQx5I90JWjQPp9zT+zZcZnDNpFE55015dZ62KVRTjsBs9T+dXX3sBrcazDYaKIHCSND/LPEE3nPqjAhR3I53mmp93TuFVu8+8Vb6fPybh2jev/uKfdweut2utrXZ6raFOUbndk7TFpXe3WpSTHFEm/zH0Z+YjVfwVOShuoNlYye6xOPEVn4OVRuuJ/h1iUxvKN9CKej4/7hFL8QqKGlkN/wN9BHj7G9/zvkqAofmfsE/rv6zIzPBQKfvcyrwvCPot5ILXUt7ZolQMfl9itBiyAG0vTIKrCLIkD/QJ0lVVFe1l5xWSHDoxV+QqpIOncu7u1fsjjnqoXzUvi1jH1seVNAx9BQxAHfmC2LUmMnHBY4LjCtb4DPQyySmxlyt5RYFyuna/R4KPlk2us70VcgVRbBu7IZjXteeamw2VQJfDBt4Y9+HUIozV8ac0v1xMeU/7rEl5vwVjW3WkCsavuqJVs4gaXz3acQa8YjPP3js653k0rnRcVLtMPPXugaCcNqyWdUc3sk6ZdVXbgeGRPMk9eW7MxBI7jiSWUN5ajrFgf20OG22IMRHJo43k67/O7fg5iAnVytYDbXgPSfDozvaDrblpQacz9bP3ooDAhq5hpkuJHKF2l+HoklcnQnJ6PaOfdSOCQvuguHe4hJsVqCZeiwIGxqmZpgjIrxLpB81hekrMYCnGQkwLdyEh7HYJY171S/V1+jKDDgZ8mYfMfAboL1MH+Qt+QeWH9tqRUYBPTunqbStfImTwCWYULV89VVywUZnAxZ2ZFAbes64FNMOaBSQCT77Dq96CX4El4zqdovzdTiR7UlPKPqEirU5VPepfBP+wt2C/g2g+aIYySTkWeXZh0aP607DfMYIyND6rufs2bdIq5A==';const _IH='8f20bb91fa03ad4c479175d32f6c9f39cd19dd3190be65af2199ad2e04fa505d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
