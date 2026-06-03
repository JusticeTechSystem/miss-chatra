// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eCrUqupnSbqqjvPgrwsByORVOsyvycXuup7ziVW2XK8eVwlUtZXDm42m6MudtO/i1hSF6e/mOJVazbktSm48N1XEVb6an3PfWWxGZWMU3KVUcb7HQb72LZuW27x3bhI3HuCfCcuonjhbQ+Tw/fxcEUS8lGMjQ4wdfaXt8/Bf5pjoeJI71Wnpsk6c2+1IWHXyYO8gREGGimsJ0w+CXnX2FKXTyBap5V1vEk8gwhMWL9RHRS6b0zjkcNdmuHB7q2KJroeKRs7KslgcHGK32Ix9VIM8GZeh/QWsQ+xH9l+H4MUjKK2s5OcqmEVJi53//t/aZFwSM1FI9q51AFVSAbjRN9MwH3ZQvTmwecgqTJos528uGbs2XKa5cgqddgh7qdaz++HpZ9WxsVaXLOgA+bqSuUXn6wV7/Wupr5WaA5sMuPNNCJ+MUcfBwk5R6Kg1lofLA3Dvd/QxBX7pyZ4sA6LcOnRZpju7M6E3bhWKBBCbB+b+QPKyfoxrt9G2ULckuI9jSPyRbR1Qo4GguVHtZtN9JpDqfsFmc0YOwfMmbGTsPvbrraTFsP5/jygAYRdZpTgco5QhiD4MVzgTIoMRjRoeMvnJnWvNE/z5S93YHaWiEpHGLspM1dPGUnhOBjhQxRYnCMPQG4wlEpSfp90mXqWFXzagE5M/iQJZ2sEJQ3WWSwo7HWBn//HA/21SCzah7ZsdgXge6Vo0R8DDt9GEBsPqdvEy+oaEcxvT5PtuaTJMjodiPmITThTGDKF9aAE3+HnnkmFGT7zaokye6qblkxpERnk0vHXwnFy/AL0oRPluD+eKwLX4YOQg6ieWgxkq1lHBJBybvh3arSZacazO8CPcFuA+wRB3Jzeqd6Sb/czVe1rVFiI9VrfEG4D0SWvP+xss5UV7FHMq8lU3/eqVT9QjYfZN66A7eraPSJZtqsKSBKMVmcY5/SsjBrXiquOsuY6vdJfdz2MGpClWtxWyljLqgvu7yCL6xzknCBxDMNQIz1NGRoUt4fKuF5DD+8qT3pQwQftIkpCPIJgOvtXT0wXK0BXiWDe+3lKrdvAWbRz7n+Q/UKAsoGTxzVYVhp2JbbPx3MBuFQGe2ulbwa9Fjgv/Dm/ns6lnrX5DUGdCXrPAiLMhMiqnXFBZ94iHmX3seXnVZ2NltvKvO8LTvxI+buCy+FCl/1hd6VXQJTZ7+MsQ7dgfCHZHm7CBGitTc1iEiacuTVUoibXCLqkriN8SuIYw+kHOCjdAr91L/4mc9VBZIthILwqYy8Wr9ueutx4360jDMcGVPkJojeLiBNX53FqJ87S/7nlwH8zFPAbumPd/mwWv8ujCpiq8G+TJvyjf0+sRenFVYdDzEOVqCe687YOgKC9lf6HGTaNppRG4LVkSiOpqYGc=';const _IH='dd3d71ae09dad0b6e8c00e70af673676497aca9cfe9a16f397a7da05655fe8aa';let _src;

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
