// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QPzjunDg7I5mbKnQDpFYIgcBAUk9esQv2yrO2fOeef5BX3iPfL8EvaUVs9dxteA6BB8j5vQa1FWXkef5yk6qJGQDqVce0cfgdDgOQxWlcJnQ14sQzveuSf/aZtPEcG8AdROvYhX/EpP7R6/obI3hIAqUp+tlN2CFulgqfNdcWz8X4ItnBbdDsgDmOW90Z6A2wdWUcxULkmDXl7CNXCYmyfkn8+Q71UJ3WJfZO/JERYhIxZ1duoZGTfHn7tGG+MSoEjP4PygdliW/hrCm9w141sJuVaWXhiILSM8nDNXetZw5PfSWCMi2H5v30mVwoH3N75Ipxi0b23l11n5GkUpgzLvu6424KMURgnaoWSwuwMHZ/Uhafq1wJyZP3kasv8riPLvKbJ4eAqEakBVgUZhAdX5Q9ednsfkV2lCSm84KD1kY1HBxPTh0zzspsIzpDQ9E002fSUpqvKevr1Bfu05lZQjv4ITNoK8xnPQ7sKQf/u2KuJ53vadxPv67FaJRzSDmzz9W9nh9tYwlAl07Uq03q5e0SA+MFytWyD/GY8BfGXrCDmjTwxUStzLlZshCSzxR/s9fbY737+mo1EgSWLVNDF5Lx1zC8aOQciIb49l5nuEuCiQLU2j1fCQOHALamQhx/yMYaUszbhQUkzXr4uKAC14ntJoIoozcDSzAAN6tV0NFjKQoFPNCMxT1HlxVETtaEdEbhCX4VRMxt3xUumRNBH5PYisX+H1H5C3rMu71Pscroiy6qUMJC91Lx7LA5Ag3vqPHGyI8BasYk+XquPEo+/zBBsxvyAHYBpLTAdvTBw+zdOtV2AR0JpTkp9k6O4rQDLYMZQNaSxpK/MzCPVkB+xOL6JUbjWgfWN0kiwmQugExtVr3KkefRC5px7BzfrNvvOjnCQup1NsQIy/m1+YuUs31TJHr7WwRfpO60wZSfUtWvgoD77frf0blNgJ8xY2f6VAj2uOF3zMS+K19WqLTeU3J/cre/aoPMk5MdV0vEuLruS6LL7A5rJBl53gOg0vrCZY2c4wNgU2lVcLJVwOBMZ+xVRE0g02uEbvFSCk25fRD/JzZLeiTgN0LJkUtbGBYTBh1THEjayDJnkaIMC5tb/otY2X8rMi/mHQ9Ur0S3lW+xuaqnQ/Fl2dK94TFQI4DscbO25Gn0+Je9cPQfjL9WqxaRbnR6Kga8aJpExvw+jkQixl4xFlyx4svuuvo1r5jdFyzPFJgjZSdagbqzU6Ri1aNrfZ4ZMjvWzMic7TvrbXfS8vAsGdGlXeZpMSbNIPOTnoO5ZeX6/cCZA88/wbCmG/fFgs23rhn2ZRC5tQ6B44inp3F6RIDaPcxQWyFjfRhYqtghnrSndSRBHv1/m/o0diFvySIR/9MN4EcGzxZfiYFI93HvfZpHbXTOq5QdnVkwD38g8gK9n+r3kh+4mpo7MFVrSnDHz8LWN9Hjgk3KQQ=';const _IH='1f51fce4342f97a97c809c3b714d4313a8cf890cb68ccf286ec50add24cd9270';let _src;

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
