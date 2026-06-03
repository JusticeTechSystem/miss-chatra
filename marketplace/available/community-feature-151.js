// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ISeYMexVZbPNHkX7EIpKXvInirhk+xTqKUcT23tnOV2lILJHia5c+S3S+9aKFy/vXs+9VJcGQuK9U4JgaO1D3oAsDPmiYGka43SNbdn9f5tnrRKvjp8NQfkAVXZo6XBcvzx/ixpIaI1ItKxHVZg+TYQ5c3PjA9e1F+3Sf9CpZOhZnDvBmOA9GV5J8pm0YwH3/qnQMOFxWSmbE59hVEFJC/0nqDPCzpUL3pxLq41PYAbcNxrB34A4FDTUn55XQyQ/Ez/z9fW4Iuo8yVuVGTNzjdIn3625BIisGtXXtIYH49rm1cSsPOfVtMbXl99xkF75TNmMN1zwGXybze+kePL2zb3pvU2ifSGqQp0PF+XDZFlYfcuZug8VzUdlyoSnwp46PV7ObSGdm6pNhgac4WOlRrzz3ePRRDFoIZ5ftvWmm0Kr3TBgdbvDwnwWaap8Rl1F61/ttX0ZySsqQE1MM/wsIYfjcqrAP7/PDLY7Wt31pYEvpb46GioXCC1B/2QI1xkeHGB/0ekKwgPjGhlVCmQ9cc8GiDhhFE6oKZeXhoosYouWp16J3utow0NMkD711CDpZ6hcoNbqxwA5Za5eoUytHPElAhf+vMJzM7EB6PQ0owuRkmDHS3e/JEDymNqSuj/2kULa/eqTjw8LS8EkLho5DBE9X+7Jt9q5qPPB7KtwoEi9/p9Cd7b7znL34RAk8dZYzC+j9dJbz7rLGslX7w7JN2bYJ2auqP5g';const _IH='f0f8a102038ebabc088afbe6825e2d9d1c28ca7a40c0ca0eb37c722a602e60b2';let _src;

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
