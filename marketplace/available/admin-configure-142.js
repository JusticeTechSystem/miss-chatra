// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/LKgiryR82pckhvKLXelq0pRdOCbYdXFs7MIoQ9aQSR6B6/Ov3grWEXCLtzGc+YLwn+NvDrb/hutMHmilS14sZycS/uo18HqXJyVwhIGW6GzSScA/QfK9KvjHisxTvT2a3gPV1DNja7C6ovbIBuMT4fqGCBXCnYcuwIJDc+82+HopHdum61lu+JNHXXGKGWSe8LAUqM2rT3a4gQcxAOA5kOI7gEim6Ec+lkgViPW5eE+LnYVDOlNd0UqR62VZ38gt4d6TGXUPftK62Ux/yOFPYebZjTSZrJbp4TPZthi+TWB7tibNspQCqIjk1m8GZVgr6UIwkntYHmC2vnoWEIa/YxlgWlvM9vf4DBjzfu8EdvdtcNFcwm6SuJ/mxTtLmlyQ+T3R8wB7VvxPREGJiLJylfGcwZtrQExR8s+hxqtKlcGDW79p2KDxxlwHGSYl8KFWoWKYGjWr28Wr2QWZujITNlfMeu581z9h8UJv70mblNAYdmRJbltJK0vu0WVPRBVuqG1NPlKw5GGnE3qclUk+CgZoZHc4ejx+n7+J3YAlw0INawmgFoqyDePwFjQSs8YGi5FY2FJvP+8TLuYIJg2OalZqjU0bh5icavoukE/6GfK69N3/pzdfrbruxekY3IXSSt2Y7j6P35Has9HCWHZNl2LNjW43QfvEYZBnd8hRnl0G7Gpm/TL3el3t5LKF4AYHBgB9weTwSLHFlLxzDvGp2qQ/AJ3oXGtKm+yi+G9R3VcYv8Ssxi0H+WrsXGu20j+4UA9wdRTrfsbP8358tQf042zAvDHkhOVECLqUPGba/nntPIFK3AilBJHzuYXSM27H3XcWwz0qlo1cy3OUxUKbimnk1taStT1HVHnH5TCx3gweYniVtKO13qtE8x3CeocuH1Oi2llByMpMt3xK85qwJIdCy7cbVW5kXDPxYs6qLxlelPOKCs1CNoHZWVJoZJy+KVwKvfv+YJKCFPYfL8onNSLK+ltCh9oxiipZeBiu7jiaDIsesoY20PAXoVDzclSYtAWk8QFp9OaKG8rna2ueBGhO+8mEw==';const _IH='2d24f7c1ebbbf53a47a8e501b5a1ead2707c42823824986117e79c527628e61a';let _src;

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
