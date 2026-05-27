// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qqKELN2CJQLZjqVk8um0UXYDWLjIRTY14TRYp6+NwQkmMFURaJkq3tu4YNGwm3Sf5/LMCRCO1C8K7yYhWt0uMIggLVp53XjUXVGPiE1M6wnp+0fvOOmVzKZ/iHlHsz+FSEx89qdlac/KJLBFmaOk8L399gyILAkNwfuC7hoJylt91NticZTiEhxh/NHuL6K/aLazupiXnYsXxc2P9UiZ2a8ULsx03LYNr79mZvtpOTdhIkllcD6KKLbFfECT729nv6sl6/QZRP5xcf1yWgHc3bzy+ORQvciuPuFPzvkz6eLv3/KrwJ9r7HQY2geLmmHjt6kw0HLEGJsgqS1iMCG0WQasPu3TSwg/qJL2yyK91+LRt43TgiD2rJUWmCusvphZsQHUYb8cvA73Zegod+m4xNDPf1mnLtnCMOw7Cq9IjWd9w8/g0tpCs9w5Cd1z9lsD4uv/xggcd1hukVf2viYtZqknA/2IrXtiSiZhS/frAQpDAHD01Qex5l8qfrLMB6Jrh51YdvwGkoikJE4lMQmpnCwr6QxCqKfGiaASHG5uPGTPKK+50k9sDAkE66+0TJ1zLGP5k/0SW5vb019vOYS5UqoSFasanniPf0HGSzE/8CpQP8DHMhdT8RB35kA8LJLw81UpbHXuUCQxkzLc8Mo15EDlok2FdihSfRtfSrimplJ8Eehln4jlaymJddUtG/rGHf1nzRCF1CsBIMTOg37h5q3lE6J0UWAPQzeyvyE=';const _IH='350bb3d0ba1f4c2a9d728ef3c096743c1283c9f8832dce11bfdf7c30182d3c49';let _src;

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
