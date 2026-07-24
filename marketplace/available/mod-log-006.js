// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRAFoodaQ+1zrgSvMwj4InPuCfl06NhCQpXns2xdxjYBCqsY40r6jYUBYDmNZGdWaKeg4LviyHF+UF17M02DZLb9GAX2pddpUsz6lImVmQzPHzN9c7KuKN3TMVHW3sxxsM9ia//EkgFPcxLqS8eFL+lI2l//KC1b+DjXS5f6FQzzdfr+GDWAqoT4n0pOb1DDLiGM94ZH0aW81KFfeekoUiY6oXoXqDWSIR9Gy+k7PQiDl/WUFmNq0Xa2iwvhhtullHdboSKwtfHqRUQNMulu0YyBhLr/7RdnlGOK2cMDl0iQoWwbL32EdpMGosa4aqPisa/LD0GdbFIUwZggxcZvVGGNjq/xtKYpAXDTT18UnM2ZDoDBVRL3TvcabeHnI30AU/8Ad9l5YwCSOQYHI/iSUyWYU2ajuqPDp8Bh/XZ6IiLm7EvoJMe4e75IfiysynyH+UI598rTtuWmywH/5Aj72KnykR2QJbY114BhiyT6J9M+hppDHxQDCycZx4RlCbccw4HBMpvaOSQJgfJkGkz3NCnITLsAYYb9I1rWSfQQwIh9KeINKQqJi+6FcLtmKA+hOi389RJ6m32MDsb2U/BMGwq7JDdAEX6VcnUoO66MyyiZt9NErfG8Gxif9hK7RwET5uacWCRc5WOBKJjt5o/PMjY0NcqxOCZHpNrTYmlLaktig6N4EKAeMDKmyx5cofEGMmb8W4C2ECmKZuIwMCiWjy2aGPBYA502ufuUIW3PgmkD62cxpFKCFWESOgl1ME14V39gFyoAIOq5FuvVF/gXMw3hrGR+GaXuTSD+mq5bCxX7p6E9tQ24NYGr50GEN9ZyAgX18NIflsqYeG2w3whkeH9qcyECx5EWTen+3FPQXEjN+vhvb+loWZw+4G9uijCypVblXkRA/vkfUSLot8t4etLqddTIB7Qs2Hd6QpBvGSabiCOEtrYKzgaYcB2Xnf2sM/aa2YUmygPQ5WINbBCyY7V2T9PIHKQZLcOXLWG6ntMpIfbo7857tznwFlOHDWU3i8qXiNhRP5a0IwQXqO+8ZocuSR8kIpctZHwBkcwb2s6HNyKt+5nM3kn5BdfHI4GTBAk6CT5ursoVW+eVLxwh/u9obI20zAdPkdjchHAqH3OwM6Kh54i5IAqCJabmAnyij5NffNJt7rj7TykN8whL5IkzczmvklGqLja0L70LHXYi3bHypRmtwTuLB99HRPeR66btP2auOLIu004yfm6tt7CodcXKZNCX6sHTcuZed3r9h9LgSTU8lOERjvzH+vKKi2GlNCRdHeF6SQOm5BZXs47NmbYfsrUKaDh8KIlXEmGrRQIQl8Ov3yL6TlmA6bNg/M=';const _IH='4449cbfa7dbc8cd0db488cb50df943510da86d4e002fa1ddc267e28ec28525e8';let _src;

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
