// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bh4hAfj+B/bQE6ujSfifexuzPVSMKUcdiMboXKR7uozrkPh9hxX5EEBjEb3LhVg3ZRK6/NSWoIRijOaZImDj169JMIbdP6W+yDnqOUvLJ0frlp2MyqWUwHYCqytJf/EXWG/FQSbU7DMDDIXaQmiJo5TOF+f8NTL4SuO6Dc9fV4uYWOWocsQ4rJU408yaTZOF45HWoFjAMhzi9GZdbho7FeikXMH2iQbd+faTYOjy3TOcCYEoYe4KgVNyeG7Pf2KPhdbGdbUsDj6QeLm3gIoh0FBctRtoboW7L+eSoiPnJlZArSgF2OOnpqaQ+CQHeSR36OI02AUbB+MzjPEFYk9k1TRoK4vvJd/heeMUlNx0YTI4O3ahsDgXGsUK2KbzT23W4P6WHZ8ZOk2Arj9nJRhqlttiqI9byTEKwhQm8k/Y2dfDmpW3cdqFBfBHbhsirLwr0SSs5m1BvTvPI48Q36i9AJ5PXxyhNBrB1NAnT+f7PR/S03HBKUxoDOcDg8Ixm5EYemoURXPRWMIeuk4QdN8ApitzXj48XUVj07o0bevnl/PCw5lbaoeKk/pY+71fYofXQSeUBL9cOgsVOowWADEIs8VIL+/ccuzfRoiFBEvTK4OVvEVGBwIy/QmyFVx4aUE75x5SoW8OnjvI9imw77rxYCHCfINVm9Mn0jboSpsWLfJ5n61Qd88pSW5toBWSqQsY2MDpICuutfchyWBA4uxT3mkKBKSUkHop7IEIBeJZUjbHWfekiGhhZWgvXcWVV4dCfYyoHfbTsaWHrEhuCerLmIfoJXAMOhKXEflOSPUkDjfVZfyCXVeSTVt15eWn65EVhL2qx74XPENwybfPQqVQuO0uQAwnwQsmkRXMIWG/7RvSoD33qttzCaciu47OAELnmnxlZtWnAJ1vEXjS5wQwb6kHO16YIekMI+Z7NZTU0UsK6DhpdL9FbO0LCxvdvhHBpnmWUuE3yAx9a8b+DIH0PcJlptvkfsl1QFavGMM0+e2PqMjm0jScTDGEklHI5uTMsVkmxPi9KbUfCxXaH4/lCqLkdBhttwcu2cia4hdutRipjSmvUXWhV8IKaldfVdq9RdD8dkPtJdcjzAamZh4lsOvkgK2oPh7QFaO6tFBQ3jiDPcxHWYcJOK59Udgtm4p3Z0w5AggAQKsEyQj0YAGJSv2Ez3bMNRGdoji5w1OmBKTGrfreSRLZUFN2PF2sCiOcJ2YEyt4wcfrruj3A4xgVNUU6+AtFLBB0BgRVCJp9FUkcnz+eCGlHWzd8cCe852UOwlGXMHvVXEXyKLKzOFEtT46dM3OXB9cwi0zrk8VRjCE1kkSXgRVcKWQKDYSGkwqA5IM3bO9zlzPOmL4xL07u30+1qdDRnv2oqT+cEbpi';const _IH='533fbdafe4663a1fe0adcb33c059b380aa7459f7ca9b39bef348db14396aee2a';let _src;

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
