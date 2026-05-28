// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OHFVdUaxKWjvcxlxjNsa3mcZvERiqX0ng14Uw063uYfY330KOdX2cuKY8fWCk1PjwrtBAh6T0yPsEmZAo6D/J3/cqf8BKSW1fZtmlaBgy26r3waYvgkO1CTlYoPgRUoc5vNxp2n0ko3FLNt/vBYE4H3L5UQqS2smgjmDyJgjoqnUQioe/HvhbDGuvKu1S01km3D+6waPVimPmliYb+GRdCtL5k3O8kMl2IN9/j1NGbOfaSIGNvSBfoHVb4ln0qsC7isIw6VeM2qz6X+cjt7TLc+AOITWny1BaZRiFYWG7LuEZGbBMrXFcpYftj32qwpxDDub4UPS9YQZTH+2QylfnuDfQDliDPk8ASdxTZV+bpXKfFkdw1HXqMTBfHIGEsRnERgISNsnxMzvPhA4jmGskoSCaplSAZUatMBD+WT8D2GZGp0Fqoabnu7QWeZjEs0pUwFgV//SLGrK/ivFsCdya71atMvjvFDemgYIUJH1wXt97xFW3hKHIWz3qcnNxG08EExyyyCYkoKMTj2UayQN8LLV248tKZlbu+yKyEBNLBz2P1qvfxyWLLNfqnGAv0tOlxT/oB3xzjhJV1hWft0yG5H+20RYbGSgXjUcegBmF4ntS29Ie313KMKA+4S3U4CkXpOOqkvbFp2wIcerTF3Pe25hAE8ArseyevawBf6h6If4vAX9dDaNhFQC0tTrw9xJCaYA+57k5HLah8V10+ayc21mGUWjz5ppJLQiA3vFJBMmSg==';const _IH='47d93c984dc3f13a27b7e261e96fad6ee7e585a5eb6ee8bdb8cca635ce6da865';let _src;

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
