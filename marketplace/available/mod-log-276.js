// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTn//0mTrdeT6c+JAE7Ip8PWk3NJFlIh6P95ZjgqVdhTdLOC0PaJPIWJ9lO3fofp82gl2njYI+QE+aJiAnCLfNUF2GE5sgfta30klirx9Oh358bxBIhpPDYZApajEKvARKk1dd2BTF3qgbCoCTQmvPpdbfBQ0SwCSl3PxBXHhmw+n0DScFYZH+ivpEm70OuBXikeAmz3dyBBy+ohNUkqtuPKoaR3LJ89ECvam7cdEzwQowyFE+0Ud3Ncx4go7eit8qzgzs2oPDYJeY31suX/dUsxAmYwr5kJrU5vmZjUl5IXgWnAzs/2v7GMW88dOXlmWGB85ziC9uAoL5KXkTNvFwIOi3Algxm7DQQIpX2ywWHpeT3LcJ2TRhgmJ9vbpqyDX+vJD7fuN97AcPA0DrTm6kF5OJEUk0nrsRXTxW82PiCNpsNl5aMdf/U/fucLDETDPDNT2wbgXt2HT5Oxe4Z2iJDI7GPn7TGjlDgvJrKvPMzJDBpqPL/0RrrhLdjVY0DczBUuxiMPoLrvul497LTxkMU0MNxLy4C4rF8AoJo9OMQfuZvRRGFkTPEfz2pMiNXzY04Le6qCtWWESZUbkbqy2nwa7eoTcMZoECvrIvZb9yRL+bdfro71dfLlEryXzCcK+B/dOmPoqMyu0wO+uvROMRuuD2EWV1KELCHDV9qL4K7NkK9aysdZjYW0rI1CuT8XmbE8rZFZPoQgw0VLZaL2fjbhsme+sE73piy9F6kcfSV4UUdB0C1ElSPbWxLR8t2x2uemxV88ebvX0wHLR1m/wzZJZ0OXUDl9x2juXqZax0koDrr0wjsO1GyoSumeNS2gyHdu5qYfcva9H4nYCbEumTxmJHs7MyLaXDRodoZEgSElnY2ynhAOGsZ12Kbh92zAyv5ugzaTKXz7aAizsYGiHnB1iKkFe7Rdi/cFFj1uydWqnoAMMSZhXmdXGAUcr7/pKgGIPZjGRu6U5vMiU7Kdrj9dY004j2Zec2USR+H9hxk/XTkoFcYiGSsqS3kN2qilA6UAhI6+jmWR3lHC18KPHa6q+bzxWxUYn57/DE18cxwoEaIf7Pg/n/Ga7eSEJ1/Zi+hosWPXr0Z0McUK6xiB5LawhMk4vK7dqcMfPoYwd1qqKKmuBdRYwY+x+odPuzTTQAUYd83Zkl8K4toSuf5KT939XyqldnrPtcMpJVZ8Hvh4jbJQ+q8gQEVjnUbpSv2KE3MzkFNYx2voH/N9shNvsXyndoyhNot7znM6VkbEXYwrbjc8JvaF6ht/BUIPnBV+b2qt8WYK4RbsNJ3b8DeYCrrCmUxLcNd1pKebWrwOV4uM96FO0qBot+AMXdlx2fYDRgmD1AESi0sY/9a';const _IH='73b82b162653cbcd5d0d393f975ee1443909a2084f606384f6fb0fae9304769a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
