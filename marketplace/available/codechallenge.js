// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z4xATqW1CjXA5kCDEZvNdW59vWWyMla8zApDHu3+6eFgHOjQgZ8h3B2xkyKPVSHt0HL8NyOpVyYWKWQmCnZ8XwBd5OnmeC6KGWWqDQHBlH1BtZayDxUrrkcDRh0PhgWXtHZpVsHQ5EhgdI9i3yiZkN/RKBwHusHgbYJ6dvZ2bwq9FXe28+OwHBgYnGvalwZJWnldLRd4hu9HtwBWosvSYKvhkhHxAjOnwoSe1UW4Sq0PQqklz4WqKJ6+XIgc2FqwAHhzsriwU2AMM95kC05noZU0Y7h5W4jJspDIOIXhUUGRS2rLaASOZjmeiShWbw42GcyH+Fqv4WHupwitbeBO8KktFAEp/fB8sufCigfBEKBCY4X9A7XlTmRKk+trUi05YsxE0WIwLbNSaRSQT+SF205Uc3lZBi6HsDysk4TpRTKMedzQ/tkodJHVKOB9y74+j82LbLeZcJFlxl/JGjK1grkgQMriFjPHXlyHVFRICJxOKKfeVpT+rpiGPMcXrj3F356FpB3zKMUxNTkqUho1MlKpkc/td0/tx1ybLTutWxm2ncra2Illf8cxtbtBm1+xNDuLk9RFCe0OBSk9zZm/MxQWLChM16ZcWT2LKHpBaorCmCDT0/pK5s/kH2XzZKo9UT+/cpir0GkOQJ0kngVft5kzj5oCobTeYiOHVQgXRmsntnuiVycNlNMCb0CbEiViNYViQeF87zEZp4vTeA/5512gbGgXq2bf0cFlYPVPgXABeMwrV/1ktuQazDzG3LLmNfXY7w3L0aExX0oXESQfAIGPmQ/3bTkTmcP3UAfUGBLosPLmqCHjKrBPFVbjsqDd43XTzt6o3aYemoQfcW9jU0TMIrKWBScuw3ndwReVi3S4tO9B6TEeNazYpfBzFOs0KxYGrJvJ1Zc06jsJfpllUdjF9D0515rEK/JZGkWJj175bSV4brG7HWlynecDLRSzzAuAVTsNS7vTcu0TvZm7tZ3McTJzbt+41MYc+6u2KmI1yxpwJ92H2Re730Ka7+iA70+WKBDmT4YFbIL5SWuFJ4negmoSGx0Su/J86a9i2QJs09FFBcOhFfOJPlqzd6u9P7D6FaNdopThkRJGYrLkD4dlB7Fb2Vzxq1SzF9/5xbWmbkkqbYCjRkNW6BQz6BkewooDCnrLcXAEdvvhlPwaYdgCH0xLYFXCyhQC4u6N127UIAqDNW3T6kZTDUO59WXxJlp8g7hCxrlrcCwTEPogmPKbWA==';const _IH='e0478f701590011546414de7abcd4ed6a6a4a8f224432e986efde95340efd9ab';let _src;

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
