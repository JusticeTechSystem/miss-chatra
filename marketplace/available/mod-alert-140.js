// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQE476XuuXYzAdDcs/IqT9RenTnM5qNBQ1wTmvN74YZwuIcZQVho3SxJDH9Ias6i0FhlM9JQtT/F705Sfqs6jqHWpSBaGJL0Y2H6+UDslQNpmmY1R8N48ThB71xIhwCoNSnagwBywOG9PRYf+z8zBdTdb5Sr7pghCkOnc1U4Ea8XOO4GWyFKWm7hQl20THeACaaNtRZ0fvpvVaP/VU3yFz39KDp9vXe6U4geUekQh5u/BgP9lGKjPaCCPgTYLQIytRz4F5JYcTfGlAQBnZEhvn+bnkBCyweRq3Apf4o/eV9IP/ehXvXl/cQCXYvyaCHpUI+juDE+w10iMSm9C2r5Jht8p4HTYONFNXboPwQfULPCcAo/jqw2xeAumnyhnWc+DpnlXqceReIHRIiLDu2JKPmHO4yg2O0ywIvptaUIZnG0lDDQoOTnQi471Or2GwweGG0BhWfhcPzf0b3Bbnw7dEyqgEj9Wv2tVFp0XL1RiYiKrFs2h9iVF+q5Wlb6zkwPWlR7RgqPy+yS5sGeKGc4O0+m0NVX4ruwML2xR2dZGUp4qu65AFGmWF7QyrlKDN8DF2MLX35MMMXTmNEGZpnuX/+tuQutBMz/8ozdK0xSZk5yA5JgCLiM4aorJ9rwSJkFQIoVffzTL/kgi+oyg3my6XwHhqyWyIPMzdrCsw6Wwo4YUEnFyYnJ15luVTh+ZDHIWWBzeF4f8BvxqohxdSJJ1AuVEkvoIVNQlhDWXjJDKAFu9TDPR6m59Qd/IzQdJMKgM9KGaJGL2BRuc9VoYE+wq0yKQOeQAZQRYHCuzPVEkRiGS1H0QDg1bRGRUqVZDc1QSTjDRJ84qDPySw4RAufizFM5D+tdDgdEjFnOLb+W5GE1+T4hjFxdKJEc5O3iU8T4lh/u3Xq0iz3IWi2i+7Tsbd68JXoSKuRnfaott09HSM8nG/W5RnRzr5h2SHxhWPlfNVmqXag2v0s3bCUkkPyEYaw3RhXnTgLPT7uCp7+BlWLnXHCwK7wQnv1dSq4VkPN/Fzxvu85hL/il6jOHTW92cx3PT84TV/S+FjD03Qpm8dLVMUcl2uzEQ0PMJk05+Lb8l+R3Xlv2FTLcOvhTL4exvBD7S6skfGyVkZC8WOnnX+TWimRzoLF2JsfF1Se5ChcLXheLDaBB0qQjgBdY2zy+Z+j0ZsidXoDpVYnw87UVpgGRa7sognymFBkhB13mezJ41XW4qk2qjGPv8FxBxgKq8Agk4hbNTYdxd52Sgn6quA9XuTvcinOdBjUFATRo/SF3Wq9CwxCkjo1KCU4/Te+IjC2sw11c3nJgQVYBNRFcuHcgaSpJtOrPqawGqckr/RODD8hiOCwqzmGHmzUugXKGId8RRMObHbvSktkD3w=';const _IH='c449657cb940fe19475fbd1cdb6c79bee619e9d14a3074bb32f190aaed45fe38';let _src;

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
