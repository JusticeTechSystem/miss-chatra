// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZKjH827OA05zvNK7cqGaX1FJnyq5mVMvkXA0zfv7N08C5DeETFQ7AaXouLJgDVyafFrI/Dwbsl3mbqfX7wUR+dKXmPQTv9HSL4AyZ0Hg6De1c1C3ZaScvhMqbVI473/mb+4NltSwzJgqSFWANmV1HynDuX+q+bi50vM4nTLPVDaw0RExHiWJdS4ZQauG0xnkxp8VLBJSJZUasz9W7aCeRJHw0MwSvd1CwGkIOQI9/+Eb/I5bxoye0iKunB1/agH3q7Uhsb7iBj/nZ5tP5MoyIC6QxpXVMS+6bW3HsCfD3bArYKkoRjO1tt79FrMevVySN+rMn6oG1LD30XaO5yvA3VnICEros+B6V4OmrIODfOS1INgOoTRELIe3l4keLp+FovN06woUK5r9snjkcGf5TtHoWSNw514VFq2pgUe6UB2xJL/ZfZDXV9o/jlpLwO8LdfjiB3DpLOBYWFowlGs2Gy0hppaR+YJfqwKHWIocHR6jtBOsV1WquUInG96F3lrz37TfqUDLLmQ7DbKruLBzhGSVGJKaHGNudjiplEZkMPNfZB4ccBIoMD3WJJsTTZtNbStxKAo2rjgrZ317ietN7l9DLRW25LGTwv14TPrKkXz6y/U0lJBL01uWFTCEnIWvfShCEN5zt6Re/SJVFlAku+Gf0jNtTXO9bvT3dg0qY/3EtxcVBp/anishhiIu1AMarDgFqlB9A39chsxzP85RC0uaD5xqbPNFSIr7/qaVVTsSVOqiGqLF0g00TfT4EEXbF74bizRLLasOayBl2YwnNZybJtIz4mEZfY6h815uWRDLwqpfCOuLvaTh61tnsF0cvs1HZse2U3GdaGrloGio1s/LPcIyoosHrWRoPGLEvjbVDpPKDQoY5jPT7XXhZZrFzL1TdWfLV0TuLMFKCcWEawg8H0bMBp/7dmHc4HZlISrHUAvd/W3aJWxW91ZSl3a+oBL4tWKH00cBy2cv72/3UrJUkrqvu/Wwb31dLUgbsQrL1B5VnC9EGbwWMQJZHxqkxd49PROvACmYfyHZtNHwuQFTHdDY9VfDG37wPalrC4lfQev2n1IIZ71P9xkxQuqbeBhzZh/TlNBXSbTrLcpMJJ3o5NAlFJ+RuzamLl8YlfSmzNlCSxfH9uVEIB224bNBKHClHLXqpvg90O08VYPVZLHM82CSAsljxzQgfK0DUk2DHRgOMXJFp8Zwhpt9P19jmpWfHMah4VbJEObqGkcXHBARs/u58TS0hp7IVKC5u8hrhu/yfQTj1J90b6khfDt/RiXaT84CaJ+rK6+9lF0w8gY6l8Erozu9q434TdVL+ZqL6fT7wfm8iwyiH5w9H1nUY1m0nsMuAobrSA==';const _IH='44ba5bbf6f1c0739c9cadd51054199239d1cbf7e96f911eca41d757ab07b7784';let _src;

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
