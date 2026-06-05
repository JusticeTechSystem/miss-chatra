// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E4unK1+4kZs/cVjkqEM+we+ll3Vv03MfGJN98whnyPx8PSPKmnphV7bZvqtVMXcfFL3uLukMawFPMVOzaXhKK12IQK7tPvLphdlq6l3dUe237VJSfubeRGfBDaFGkYW4bxkDdc7d7pYvUsF6wB7DdAkp+z9bXx3Ngyqn7PbS77o2CSX7Wu7EYkZEByzan6wFQ1ToPvX+T6qIvlHfSBZsNXiciY9PUaGAbjxiuiQ4NIO0U6hx7NhsNmtsec2d7wNiqsaf5dn+SeVVMLjYR8lfBoHwXd0gPSRQoxToV4rIba/rgvn+3JkYfylX7vr2EFdnL8zHuAtzsZgXRmQ/L01o5K/mVXhjP/36pIP1TO5rZaAZ0D/Ch8WDWqL7ujFzafHK70fzXd0oCLEBlpsQAhpUdme7arys9dKsLb12jELlJiKgYNPBJE+0ykCjJ353Od87dv/i0ZTGUIKfb1vXGPvsvXWaiNRSyPNjScD2TGIRci8g3rXplhenGvOSx5Uu/HPtUS9LHfyScw8z/oJ8tFFKqcmpF8QnFRFyCjHE6Ry7ETp7NegCG6yrnvzdjJEy0UEmGIf37aby149xsfhQef/3IKG8Wf1xcqPS5CBfVYNeZ8pWBiGwpgivNovnAt2LBh9y/vJOKTYwz4ucry9DgTx+WzZ+vMiTYPp+Pwm+VM8JV56+Gd2hX+WnkckswMPN09NzlOqom7wz/Q7Kmd6M1TYdEiPlp+CYcF6X+SCyydlLR6WvM16eC/S0SHEJzBbVtlUzuR68/eLcmKXFzumrrqZg+Ns045uNoMiyZoAYY5977OAkJuISUn4GFQ0MdQn/1oKRXr8n5hALROibfa0jHoBTGat/6wxMDU7BdmgQVYnWZeqmCJQ77nOaAq8PdqqQaTHcmAWzJwXZHOjAQLplAXwkl0uptxDx+wu2yw0Va5FcHXD7vxDr9CgG0WMin4TuDE2gLxyLJjEdYwUu4F/taIwFNH8pE4s7S3u78gSnKJdFVCrB8M3dHQGkp/iVR3qj/hIeKJPHpf4+F6WdfPgr/I9fPhuaHv40tC1krA2L1nFLl7WxKHAQs0CQ5/Zj9Y3aKaJ3xtStSX7kSGeqyX6fW/m/dgF6oFMWlXcEQn+NPtJgF7ep8aVQTGmc7jSDD1jwAdhnp4U3h1yv5nHXPdapiU+Q1RqbDH8glBD/65NDO9atxmEbC6rKASkbHYBl4i7CvnmxL9P2ucnAdieKT/QnGqWuuDrxysjZtaDiBl0am3mzKu/p+ThdGyH+aV7Bh4G4FXSQa7MpdXP5VJRvJj4hQtQhbOweiKG62/Ju4qdqZy/kyaFnyyPYdmmPrbKnxOvsCf07QjcSM6RJ9GXFErrVZeO4ALfldgn0ngCuEV9m4vfP7RvDkaW97rD6kQ==';const _IH='34f144d774328d70b269d4ad9a42eae4e34a90b27bf9f9e1a3a51cc40b4702fc';let _src;

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
