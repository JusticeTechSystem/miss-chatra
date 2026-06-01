// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw/xu8OG88qEiRaV57BqlirxZ1a4rRp29Tx/JrJBl7XOmNLXnXKYrF2//pYkeGQe7Pt1Uk1uzAxHNb27qUemydUmppbSbhUc9XOcfeaWGrpaZZQJTMA9rFTIml2KP/ia1ojj2ihG0IE4lAFtbjaFfWA8GlUoJwD/iCXHlWU3cf+pWU0bv3hS3pjnkLoEfVJo7tQahwHjveUD0Tu7kbvGFdE2dVPb5k0p6ksz3i17yP58g3G4lF8UqpD8THoiaQ4Wu5dfcHx9h/hi5gzSQczFbsP/kT8qW3XCwmasaURKni5ARaKtdo3fw/TngTmeIbrQielZykXNusfKDYic/xd/C0rljsp1YwUzb486/w0osD3kOGZpfn82fIoQT1ksfZUDXtoSIfhdT53bBghG8/sH4+GlvWeDzON48SiP22aQuMcxuYc3eRazP6vkEX6DSKBH2kuOgao4+54jvPSyf0IPLyXeK+KgkUv0VfBmPwG9v0ci5i3YCHvV+O7KDPkkrY2ypVwbgGW1l+E74tJ9/SHqmEyEw61Qjek+q5sli5pZp8810lfHWsh568yCeU1J2xmfJNtuPo8PFQJGaMofc6AVgSvDLlnL+R7LUjaPU1IrD7Ive3zkpc0Yh/WF+VoSjzqQzLKmjZBWzvkkpjF22Iz0Ppd/KDoig5nHab+zlAxB+dPHaXXKsAXsMHNDnrq23bb5edB0q2R2grLy1rwCvzkzRyNz15Dwt4gUzqWnPAyN6BfJrraCAHfZezT2FyFTX/b8S+ecSB/Kob0Zj+4z+8WN86PAlEqbTvW0qPaC9d8Go8KHsRZ9hQpZqMwHWRmTZmElubNrEQIGQ+UqPwNHMQMWj+/V6RYoZo2Ag6x6PXJGwFYZTZqHpN+KoqmKMF1P3S9K8uNpM/llLCZSfGp3QnJBbqsziHtKeUKnBIoxXOGt4Se1B4WJCdk5NEhymjJUu10YvOIUh2k6rPWGEhZEyHWc2/sZPZ2GOMyZ3kv8tsnA4aUYVuThtt+oh/UtnOICs65BhBO79ti3qz6Oze4cvt6lzjC+l4lPThqbqjbJ0c4svnDMWp2acYMIDzF9fO4iuRoBUmYj8LLzr3fP4OsLrPDA6sgD8F+vVfwJ+hM0hit2S+pK75mgMRK9bygWgGFFoHLWldS4ntCorqxoRhclVrzdc6X8IrYYdqq0s0ORqtfkUSwKC1LBnATRV4e0t2ZSx/Qk7gIcmlQ5EOl++g==';const _IH='ccb54534d15b452f8872589dba284d21ff00c6fb40c25a572d20f2fe3f4ebfef';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
