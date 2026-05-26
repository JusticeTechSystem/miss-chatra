// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yVRhJeBY2hfHsOyVHVGwepN7Gk0emamD0hoKmMwguqF2kmXVJxYI1LNBPFuOHIvuaIzKagz5giv9Cee0DoJMTH1IqEt+IuzjsE27SZXdBjyh3wYH9/ga2F6YYlE+Pk1ZGOaKlAGGKoZOwV+WB9pQxUZG8kW5IQAJ2cvsvz59ScAdNI5f7+cS//ASKfPhbAr8JAc53jov2/UOnYlM1+f3HOI3V+ySuPqxEgmkbHxVFPI2g3JgiGp2phlUlErXr8h5//rdlmKQN+w0eNQggDraad+HeCrv0JB3QPwtwzkp1bwZ5l3nn30ZpRfJ7HaQdTj+6hgOOmK13jck6gAVDgZ4ULD17IrE7vv7yXVVwXvsBSpSsLkBcmDCKXp/u6gdaMZpGDF4knSwDUJap1TctZzkIfwtmskDupzGcyaNgMd0hBY+2RhupAtdA+KOSW5nK7fGSMATL4rrDboDKMSn7UJmuyyfw9uifJLUqrN+N3TapW4MhNZZUhqyzth5hussKWoabbRXrdG3NcaqsHLP+qv96D4Cq2BwmIxeXRPoRd6LEEZFbVIfW2K9PRNxHn3uPQ5eV8IIcuXHv5Nu5i1NNA2yDfFZrgajPOLCuyMjdZT4oMC6WaOgBgZcMe632/VSH7NVfINLpK8Sh2DIEqhK2J1VCPmsKeRcLJNpr8SnGQj/Tj/bjbIlILNgvAR1yJjTlL1iS1wK0faLynyg8lP+7vZSKnya14A0lhHgiDmTGGsb/QVFirMe3keLPvRw1TcD4d1814bp5vpYw98KlYecQ7Vir3hv39JeBiTztgrkA0HZ8aA1by9xZzHZ5V05nerMwtTYKODHiz6UaC1RCS/5I6vgTjaicqZan5ApUvANVof2ocaGJshyc0rdOmArXmDkyK+YT+BjiuGqzGIg4kLjjfq4I8NwOUVrTjr3RmzTuRUcH3S7wbwWtfEVdKmafh6SdzHmoDGGpHqni+f+yI5c23GDTVSRi+acEm36clISoG68dRt3wVjevalSjZZw1ANRnuvbIzPlKF/0hTo26Eyax2InJ82jj4pnr7a1LFtT4BIEbx81qU/cvNTRwGnoUiVD59XUBl5p0VjVtiRJnQ6dYJuDIvgp5nzvUccJEgWWmxL3V2AeioNvyb7mZ+lDgSdHc6zIenYTd6fB1kV0GAHsoXOivZH+ouFyBJ4y7gaZG5QrNBJJ+lvUwIkAmrxyXFPYcMwKwcg4fI9cnuICx86SZZe19wQbEiHmbAnuLMfiqIoSwHgdqLpHYV/1tR6qaPfExlWb9RNNRpM1D+e4WtVc5o5/tz2Ko45vE8LRG1olfdb6BYEFPn8nkUVcwrNjWy6w1RJjM8s2zxN87EdZrXPA/Xnpd/iwc2hIOR571oTUE81n';const _IH='87243915b8cf3b6bd3bc36b3b8e8a60b4600a0cf72df4de422fb2c793eaaaf9d';let _src;

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
