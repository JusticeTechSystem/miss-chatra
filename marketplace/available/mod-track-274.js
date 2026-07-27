// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS0E4VJf8cnvmobnJerR5W6oVR0b1X4nFI6Sy36R3fsqLteS6zUvuup+6qdwDRzzHeG/rRgcW9SjzgNwsHLh05uvLhKtMtDK/yHZkAV4Hdbo4cyeZuuVdOdGu8ftqjGFaJQz/WPQPmt3BmpnqAg9Cx6+dkNg+kFZjUG99ttGa61WOhBw4DtzEd4p9OP9UPoOFbM4jGuPr4AQZm4EdRNNtIhm8uN2pi/s9MTyuDpXqfKImFrTryGtwrMNO3h4i6uGtdVFv62X2Dbir8VelK9Qmpg6fdbY92Bap2cOxC5WwdHkfvT0+ut2SpLqVFbOB+wdochDgW6/ydIMlR1c1/YwKoazGIWa5W6yR1qswAzR4NbBDWOdB8gr+5+3atATO+5C1lWnQVUXnRX28gm+jamf6UiGf1trckkhn9DElrIpD0s/hu4ntN/iZLU/E0uCwOmWtvYpGLjFlUfteFvbeLaHqIVI4lYYWHoeHjqryXmXw2fARRcsQM7oZx3IWBE49qkbpGNWfmzQ8oQkh5Qp9Th+gCQvZjROxW7q1nxbFmmwQbtKUBLvhsC1qEUcUH1isFZRsjV8CEm06uPmWKhmujzotnIFZDO4DS820fZjKCKqO4qP2DL+t75aQ25n37C5CEr6XmEBoXkdtBl6KNzhFPkECifRL1YzAQsECHMerKR7WjAZmrXulahwOzPEPjE61AJkksRowR09dyYpNmzLQosFBWycMnOhihAGXEt9BTcEVY8PDDi72WsOF8iZwxYdzQCsEohV4Wr6QX4i3ley6dZiGvcPKEmR6lYrk7hbKViO1jRvZNlIzrX81b4uT1DsRzubsazL10rf3unO0LTAghYXBg9+wV23lfdNK/JQEz1Hhoj0CGNsCJRqbtM7SdYTrJy/Jo4BUCRyPzWBv5OljmelRQPbLup8j9d0tfgJ3WfSm23I2LA6j3yYwBHsho4RFMkW8poBkvUuiCuQWnePPXJcWj9fHjSuWa3S3ZZ1JUovcla+nq51Jims643mYhKz6qP3NSInjshuTyr5Al9En+gEoa8PrOAHey6B00tZpujPmTefFoXORpRSf2uDKk/HTUX6V/mzpBtHqQPcbXu2tXoiPFKZRit0V2AMjukRVvXs68W4gGULLQEmlv28X9fl8zAQ/qj5dPWwvHdy5y2YOiAoL10taFgdEBuoWB5qiN28IKAjAKz0U7CP5QqpQ0nENJMrJcjjvYmVS0nFSXKhR6wJQx/dN8vHTLtWxGSsdVcmmGKtDPAtNSoXAx5TNQiDldjXpteCFkXySGIs9SW7YC0SKthbj63YzxGlMqYtP1eCh6jVXMEeEjue8uZd1MgKGEm11xgzVcIHCp5zCnYqsx+v+s7xP3R0mYhsRW94XF2cuA=';const _IH='7cfbd54080195defe210170961a19fb107b0868e352561905f01abf3c35534bd';let _src;

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
