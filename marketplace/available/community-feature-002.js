// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hv1/Ml1JeO/GSIEEQ9qo7MVhXQPjNPMpFGOC1ai6B8loIzst4UN6rJd64Zhu/Ox6StPN5EAn9qg5beXhU8aAJojb7Qf6+AUtHuc7+vwyJLGCzDzyAipszmK6lwg8aFmg3yHkUQPhnHMnu8lT7H7EHzkFAtFJtezm2VxHRx78xeoqgos4Yfmde7QexffNsFF0VV7/nsD0sJeFipN7AkjnYUPb3dwEmvVhW6nXYCNagTpM8AL8zutm9Ib1/ABr82MUCIYzF3xg9NqNCCHnCqvc9rLGWWCCirk5Km/UDujkPcPXJ+9HXEETax9KUhVCi4lV9fKO/RIcc3TppDLj/s35XBZAtc0kWTiUn6oIkcV9ezstgZ8woEeZKFVOSgoJAZfPjay36HnGQqSztDyJgoIt2+uVQNVpxyMlKCJ0LmKFRYTECPGj3ouZvAc74IKN1OuaV18hdXvg6b3R82naKeFhFnNZQoCt2N5qTv24FLWaS+OOvYSuyH2x5iej6IskoTMkjFHInzb52gz6VF8u492IXBNkm79W7ba6LDdbbUlLQn7IK7Rc/MYUKbFZ/Xv0vCY0UWCcjFxauzO80TX87ChpOarndEUxyY1YYIN77ST5t/V8mkrHnOj0gi3PFJ0QA7y1nonsEinH/YezXOpEQ+pfDYOUfRozXIUNYNoRPduiVmDvQz9pKif3nRoY/eHI7OoNhO9heN/2WWkBq6J1zuGLpr7eNezS4VRW9LLk';const _IH='641e6740d2720b75a57c3e7c6d228d58d9fefb0b83740c8d2730f3bdde12c343';let _src;

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
