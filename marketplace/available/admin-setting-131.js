// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzwK8m3lNwFZr23Z7KEU0pm0oSyirYvTwNbim+YIpEp9xKjCT4KXmiAwsxkwoXwv2E/TcJiDLXPFMO1ad+m7rxTY6Mv0zQBehREui19m1xIDS6cfJlRDs7l6ifOrv7rCTuXo/JfvUMrrGFuwB5X98zIyK+nGAQFNZ30fyytmtH2TYG6kxTrFi8MAY32WqcgRLpmpNsfgxVXH7KSJD9NyVrG5sj7yvY+6s6w+l4blccUduthEXWfsscDkG5BZthqaAFQL8B+E2T9O4OpKd7BhKz4M1ZmR7CTWo4wo4QNSe0vWMSE41HkhM9sST/eP5xDtd9WRxGIRy0r2vgmPNPnw7Ot90eYif/eI19fG1zLVF8avoff9O2NP91oMJHqaoks9SPBpBRlLenH8aY6WZaFAA/+NODytmhhDprRefZ2aKHCLl0VRJGh94qLt3GF2GD93iHEcDeew6zYc8H4VtvZXXre2vzdXnnbgIJmLCR8x5zbOVIdY5KqXRxjpuqC9WVqvbzrHqgiyDpfCrFxCkuQyh4QvrA/22b2zDwcfX/fwksTDOeIedj9kMBk3NcP6vz9LDFoYSnACkxKC0VEe62XFueOFs50epsC76+I+PKQ1vDDt6UedU4pbQPCmOmwE4rcIVIuWUcijyhtLllvcavY6gc1xKnzbcLTu0MmpHg3M3TkVFj3gtvKbz1DTR6Dr9N8NFICutv3UrR0aknRVnTWfzMilwErbqBXCuKBXb0v+fOeDhV016qljdHtaTqreTTYHR5xRj9LlWH35F4Nr6tkEeLxYWr9upVxxFhLn/M2SZi+OwjlRHlannYxAYBepjU5Ez2vjGO59pzGthPeyt0nwzR1o7WHnMO8GF5pTpwCQMC5BlBONY804vA5qvOILrUtbkX/1P8+ai029LNTFvasOqzzEBXbaaeWbHGxyJRoiw2rkfK5D/dyFuKjjd5CtAnoULEyaMqEvQaUzrsB2nwOwdn6zOOQ9mlRjT6y7HJpbQFx9S+fOQ7XXNSg1C97HCrGVUrCnC1wdfqUt';const _IH='a664abb59424d7f99a1922e92b3d16f2272c88d6d785bd32901da8426a3018ea';let _src;

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
