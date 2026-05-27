// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JNrf8U2bSWhA4R36bBrGYXFwI4hYtchd0wE0VXpK6ScxLGYDwOaQiHR0l4yKVd1E23iUmLwlV9Jfg3KhKT/hBrJBr4fC+VrIK2HNgyFqusHy5rhG5a8wPHnB3TNFLcZHnPTuSoGZ1v+LqjLRrsK5uEvcziqbJk2RM20tswIbRXK4czKja/F3O3rK3BmVUJO2eLsxz7kbwJLxfY+tcOuSCa1iMADhUoKYc3lQE8tUC99pdVc3M5e5nUDN53xX43SevffYZa3UsSVJArWajjXYZgrSkPoSaYHjQhIlbi7+w9JGPRL0YkfYxUurTC4wrkIimD+xd4mKBHKBGQSIhb/vp6WSKqXTN9e6j9dWnmS0FNns4I6OzQe4c7uP2/CJsm/dR7ECY/70AD9XUwemFJT6AcACy/Sf3XfxntD3k4syBUtVbooJHhT6yG79JJfpJkaXeez311+tTxzKGxUKrMRaoICjJ4Gcf07Ki3F6ZG1Ot4ADE3LHl8zihHnXKA+Pxls9rj1lEzvqyRq/mKr5snfZpYC0XncCyrQPeSW93EvIC4lOqE/mZkvUs638kn5hxAw6TJIThlK/+Ul0fm78onlc+Yht1TAWsrdlQ9hImgBY7lufsJZKRnGu8UIEIaulZzYZFRJ1YavS3fYXWj2PePkKe4JTBWqIhjqnbiTR6C3zi5pecOCwAznaLARhtyp2VLygcSkHFKsRFwhzVY7w3st3iUQws3sQN3Ve/NMWy+mjB0TBkJ5GDcK+Fxyn9C4DlSraSPTojUjf1Cj/wg1QA2DWSCR+Z4sUzV7Auaz0pM5rrCqGqBEec554wvm9n6hvzKLfXJZlUpo65tIMO8d+L9aP8vCXdw9GdUeHl6J1XPjZ4gHpF9zeKxY944OY/lA48zzyuP9ZCznG2phXGqBdipEqX85HoRWWuJh5l7FSIsPccm9W1CzHGktMUMNi2J1lAS7sJddtHFumEZuwcmTJY0pwejr9O8wn77VGkP8ckHCPPxosaqbt+Wc=';const _IH='dd8ab1ef7aa4a08cbfcde54b5129329192010b116354f8333ebde040427a9df3';let _src;

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
