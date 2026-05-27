// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sRoA/WIJe7XozA6bs8asv1p5Yyc1fR/8y8KZzcWSsDlmgVlNcmt8FxkqLFS52jBm0UfUWGnfZBiNkaeT2Pszy/RH9+Of8R1/KOCCpuuZeOrKOu/oRkk9OPr50N/YIV78TUMJDBIgAxG3UFrDGO5RpxzgUw+eLV2jUHOvDa8yFeeHqHOG65SjAM1uoNAE8d8djRLTYqKHnz0w6yOg9DaJ8bPmxFdVFQPEpHrkj68qwMEWaf7KtfoPaz71NOlNZXbo4GORRsyMWGlKCYnOuwZDV1iNFxPUJzCkWJWGXuXqD5YiuXJPxFpmR4TYIkdr1o0U+IWcX8XTBQue/FsP0z+YE078cLTtpM8DbWpqIG9Am7EHZxtLK2pUU0iyEXmFbtayboZ2eVfwhBOigdCll8mylCQx2SucGdrwRfpqQXIjgR1pTS/RzpGc36ho4HsiiiJuG4wY7iw9DvJh0P5y2a+JD+gLqFn8RyHo+ayXtlnncr6ZV+ckb2ES4AaXFKNHMc6KVJmphe2pbqu5oRMFLZxwVQMR3eI2jq4QOPwBaORF4iuaMM6EUJfUBE+40TSYJpMLKaF3TNtnoQiT8BPLoURpapO13xZebbuPI9lrSu5Dj1XnmnHRDWKfiM8sbXWrSqxyVS419s3RPIJ485NbFzA+OQ8dR+RJB/1hz0jscSMkDjsopH3Ha1XBKk+i27VPX1wcomTo5cd5EGNdqzxim0NbRk9ooBTEyg8ckXzVPVv2Hg==';const _IH='1863d91af2946a0319a4807c1429cb203e4cd1d02531826fe29874819d18e974';let _src;

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
