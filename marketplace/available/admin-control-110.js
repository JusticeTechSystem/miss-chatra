// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pNUNEYQbg5XQ3a3KsVnvNspQ3yjUhd760ci8Ck8vuCdE033Jl0rwpAFGXjbH9kNy9HuPDsZWAJrk2q7YNcg2jsXdB59WZGs+wK0j2macFRfENGkzTGOJQyHjhEYRXeb0tysT4eFqs5rXzQbhOHjZDDqgowH+QO0vW3TFHkCdtE9C0C86KW5qDC1eL6sbKSbo70t05ILCx3/kMZTFxZO7kUgjCT4Bb/CA9zF1vGmnVw0HU2YKGyi/hNrgs7UeuipUmJ/QbApJvnISZ0iyyG9oQqaou88gU+Pb5V6YlbfrxYr99V9vbYpp/f1rGvNo4ZZjRvy/q96DE0eJs3QRrhi6NUA49h996yfK2JPZFtMyMLc9OgU7M9AiqVImwoGOcsfevuVkla1DKiCO/bUtmO/EvaAvhW+pI7IbwdjSqKc05ojKvhnGKaYzUH+elCErxrZT0CpHlp375quEEyfe6Oe9VC8u6VMSTbNtivwdQOjdQ35A0HfHVeTQkXn3glj/9T+eFQhP03K3rflc/uCFvzezXDKt9f8GgennT23rerMi1WOzOhhNpcoy/tL1NqMBahn6XXCW/51jNeDBLA+y5qiJKDXmouclTtNA6ZYsvLzcRTaepgmTYtVTTa6lg1An69xSZEeGFSix0/2EiHOf8tXvXT3hcQu37SMow31JA4zAObcAeYEu+zGsVMT1uzf77AzYn6wyMpR/3C6/keceU2SuYn6Qveu0ErU6JNxfy83teQwzhd+aGOvk00/0OmpcRoIztP1d+yo7LPYiCskbgyB2ktoUTvMp7CU4qmI2O0WS9Ev+CMBa0Sxe41ezgDmtNzLmQWYHIMacEfpNpE3otpn60hg9HaSVmkj2XNPgaMPGD34PDF8WBslw0dmiUAyoxjhmqVNgnC1a6DsN0U03oVuUUXNV3pgI0ux+xSzanr/9gi8fYBk0188gw6YJqywRXMWZR4hvMdt/05KYrzhVW4L/Sfg4QbVW0CxX/9q1weVMIUQHU6OazII5tV8wSTqhJgbWLeWJ6+yByHc=';const _IH='d3c4525d2036a54bfd0d8b1ed0aae654ab8e43966d100a52603be53e17672441';let _src;

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
