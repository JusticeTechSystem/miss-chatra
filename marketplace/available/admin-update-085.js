// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTm0Wq9s0t5TbFChfeZcEPe6eptGL/ToaT+UPrG5HWZPKirpkNrNmyTqrpV11wT07Xu/H9Ng7SQ7A1dc2fxmycGNDUlOzNq0dPl0OFGwxpC8d/bs/WPOBxUiCytY20fK+2+CLgR6d5VAAjrY3HEhxPD7o0FdE5UShbeuh2g1uX4Qoc+thmM9AqHLjTA8BEMjzUfkEU/nN1uBnKSa/lBnJJxuXnqHJVTGszgT601xu4GmcttYtZw3KHfYHBmh3nNxi/FCEoriEkp0r2xIdA5E1Y4kn3/uWvYHc6gBBVzYNqoxWq4rU6pGfbZpRdmB+bpUBla5aja4Kfo6PWjDmfi6jW7gZJIbXnoUBuSrqI90VxJJCJeshja3LGosBpPcl/8LuBHiipDd5Q5VhI3PI53nNEGnJtxTI3IUItHg15f/d6Eoqh2Dsf6/I2fu6i0AcfhBS5aQ433vjPVO5Tjhfnb0Tn91uodxnDlxdO30Ga3cghaeU6GpUSCMYQDbCx87njaDZ0jz7DBk13HV5mG4/HUlW/ctYCkqMyez2vTpa4GgFUwDqvwOOTs3qJcQC3DZbK96SfdTkGcemgToH7eLbSR+Lu/kqashXpnUCJiebZ0jj3sMkMEwvmDKsxHi7BzV8LPm50A6sYSzgtSgA4h8/3PM5rSZT2TROPNH+UkhALF/1bYNi6o3B1TAP3FEivpkLifL1hEDZtmaWUjK6llOyJQcmYessa92na4t4f+VskNUnTO4fAyC787JInsy9cyBoGF9dC4A71siVGAw5xrXfBAhUuJkZ4KPZuuOZW7LoVuKek/cO6iWOosf/vZtzFtE4RYtfGpP4CjeiC4okqmBoyD70shjqyxoXsTSFf2hebpc2hAX8lHFoC5Nk77IzNwFlREH0CJ8FmJA8Li1U8KZFOpf6eT7OjamaBURjoOzKIsG39tHPMGwTKbvw4r/0LILQ3rXKdKIC9ldqwwQ4OMbUgevziYfaFlKtETzrBhkvxHQDUf8ZxK28YZHkERIR5jPP4=';const _IH='778cfd4cdf6461ea29dd5c9cd9a6f047dd7f1062d24d3cb64e2ec317f3ada0c2';let _src;

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
