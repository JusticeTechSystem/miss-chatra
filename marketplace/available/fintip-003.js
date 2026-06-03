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
  const _b64='Kin/Nlf6OCd1slbshgbo3Kocadu6wTHIqDy5X3zsOLBK7iai5fOzg9L/OK/aKfAELHM4AweKwAL8lyLQH1PZn3fluDBgJ9594SpwNzEwANbdi+4DWUJKhDIX3u4syQ5TK3UdzAemWj25YdaCiVRZ+Rb3kAo8g409J5HTejdy+Sq9umGLwEPsz059RB/NtiBWOw2RL/kJWe5NREYKeL1ISwzzH3KyqtODQp1gesamt5u/ftxRain/0BfouKYVn0LDFjlRcc5xlxSi0MZrAIoPgvU3ThDuPkCQIIQhtVW/FJJdRjmZ1nsiwK802KYIPqh1nLlrPzoVdtl34p4jTLTW6+DsKIa2nUWa/5a4EjeQ9uOWfkh0YBN+264l07HF9eMZ+61f8GUItxhJg3GfiTTyAGFLQZFTpxdrUY3HXF9t44cFH3eqsxHEzMaZk0tTwrhVZM7ZEC/BAbmSVZFbjPZsIe8P55ntvOYi3fccuSmhFiz7yZmupoaHKJ815E4VyZb8GeH20KbUPhRo8ajfd958kkzhdJq1VPNke9m0B03MfmroDgDaWWkdRwS/OUYk6Id4Bl6D/XHpEmG1rji+QB7hQ7dQHQiILL0gnRS54qjk/ZVqQ+ns+worTC0mWj9BL1rmcgAEL562D9vDnW/gEB9Yin9950ziRsPD4lteh5vHpxdfPK0ckEzrr1HsQuwWhjMdLvZuOKTYBPXbwDHu2/+4fcVsfW8wnjgL7CUQI8tk8pK2jPdTb/Pe28KVP/Ht7qO2WFjo5gcpBfPHAlScqHnDXXmUIk/jHiTWLG0QSvDrIkIS5tHyhfUgyBSLi94cpVLJp9miCQ2AXA8nkKvX0heaxPpkTlJoFHoES+LMnETrEeQDUOzt8Me6RuJlELUv33CIAa1j5fPzo3OdOVOApjwJyxrMMrDJXagC9vdcaegfW7fpv414lp0qheKvv05QlE/s1MBRfE9dlmQ9T/aWJGXo94MFALsfkkY3BkrSUQSeOxD4g7AUx8Lp7KcexdLDF+zOA2+bZMeNxiNJMRJi3e2+f3Bp6vbgsvn4tw0rPOW2';const _IH='6b6930f156bedc244bbf905437c77402288e6cd79329e84aeacd3f6a11f0790b';let _src;

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
