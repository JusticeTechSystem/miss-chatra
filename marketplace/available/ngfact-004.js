// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L65up/utbzrIOj/E3FO+QwkvLkFmxa3HBYgL61w4x6b8YTXF6r3B2tn3msBsrJigekSMijVX+/2HMnRS5mP5C+KwaFb1N7OuMAlLMg3FH+6aWUDLvz0DZQ4RGl3SfdrIOknW4PkoWG1d41udJQrgccg5XXF8ERD3nTq8NqnVaXfgwk62es0wn3O35fFOqPQONuBS+JkPXHeEV9OWuCEEuMcNJxXgg8YOaunVHpyPzDwnPs08+Pi9TOYEqutizsUvM6dWu0sr5Art3dlu2H97Bgwn3vNtpOM/FkTrNZccAQPLjbA5Duqd1cbzKc/8aBKBfN8TtV2zK3YZhZgrsaQx7AUA0lVpLtZ7YZYsWojSbKIoA7FXR/X0rhoJUAZA8pnX76Mr4+WJ9E23ai0KXHuAXp146/XqYBisbX5Aa3K14IE5spyHdxfobGOwelvepwHv3Ex7UuqNA3tPMEpbc/S742BZR7JSmOCUiTwoMbtalCpinS860Ryf3cMZKmWiHBHVvRIz/iwn6W5CRFlRCWzcWXBimQw2KLlXLHRo7QEjpvfURbcUwXjMul+s0ApguIS/rnYPvPbbhY3IggvJzFFhBwvqJVki5pmEKVE5Htry5hKsax9wQw3APvoqhwxbcSL32kozyxw7lQbOA6VrDg2sieIM9MWCsj4IUWkv0mZ74ZNLYIN9KAfEDcL0MgzFq/Fk1URGnvdZIt1GUbvgDUuNU9baQSJs2ycQNg==';const _IH='0992ab7d8c49670bb341c940e24965a8daa82c6c2ad67d28afc7af89a43f2a1e';let _src;

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
