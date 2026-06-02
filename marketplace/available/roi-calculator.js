// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6fDk0PjQpBO9lSe8SCUyjXXde+01cowPT329altreLrvPYO96HphzL+bWjiO4w1kTgRLgIWk31jE1vurjLaiL67IBLAXgq2OjpV36wiq/HRRdkH5ioYlOeuWQV+rcVCfpfNYRasEZ7u8/LEXOWBaproDB1q9i1HPmjbsFFldVnatj/NwWyfV9+iFL1VA9XB7zVB0Jl000HdDCpW8aEwzf+/G0ov66Nj43BOAqUmKfbksJ/5RE1F39p2QwscsTnlzBlM/qMP+kwJULyQW2aw/aIF6/BgSawKQD5imtmcQ6XKf46QTn9gK76RylhLUEFs3uoOQ14sapG5AsAB+iCLBIDMQbx+eA1FlllvnvkRXYcHZXpyFQ+tl9ueqdaSQtJxMxldWmKrFZozsKwPUNE9y9Ldisc25GfThttV0mPAkiqicQTqoAhyIN3jhhRaJteTv38LLcpCUWwUhcD1pWrnRRQNRb5zTjpSKpKrSruAMPwbPgQuVLugUHk6ytRAEeTk+K0WRkQFwn3LWlv3aSuNaIABylnRwJ2I48QNFcmTejkImbdJvgZZd9mas1dfVYZRgTBFVAOMjyOLMWe5RSzf91Cwk0c266IbyCgSCXs50pjQ9FhB39FUohJ3ADZHltQWYUwbcJGXleRJcrGth6z2G8B4kgSmel7XMgpT2FcKOZgVLZCcq+6g02P/NbaZ4T13yEyNq/jm4aznV9B0kNzoDK1kG2Kr3dvJftVIOCxKuvx+krzokD7WpEibH61Jx4p/agtfcgl8j9Q0WGIvfu/ZnlVPjC0WN3+j6oZ7nnvCtvg7lq6Q7kxG2LHOknfOTggZwVzbDD7/8Knf+Y11e09lnyiK6Xn5ceQD7voP3rJyNRsvkPoGUtu5krHPbnvrVlCt1Lpt6HSGdbAaKjnVhOW2KNlKymCp4HzvUGhaLfQI7XbOWsrwkiwIIYKoeZac5NdbkwVI+W209IUMmERhBFuswOklapQAcY+jh6V62J5tTIydIhySyuZZuQ3b09UWesGgKrddv7blSvFJI3GS39DE/amRnkue6Er24/eoww+NiC95bjeY3pFxZgG08gecQt12bWIOO0aIWLPu1cmmHpw/fCUjmW1esizMW+76kyr/VSBXkHDYL+ig2g1u/XfOTDcdPvXm29jRZNvtdQLN5Le69v/2Jo5MJslppR3jNipthVfm9xPUz4eW+dPQ8e31Fp2VAW2y9vNICRXxqC4mJ/JhCS1KwtMJw7QpF+Kkb01jphqivLr5mcyrsPpMTueRb';const _IH='9e1b8ac1c1c8951f04b9226719a9794d20c2a7b1df85b1aaba5edf7870f6ff34';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
