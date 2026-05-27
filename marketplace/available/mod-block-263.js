// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1ZYlRlCLZ6tg24sxwDzuAI2lVQvE+0gBBS9TSmzv5e/4a4Ki7jUSOcygNuHUwlpoaenDJfpWpWY6nkrmv2+eFyRqmhu18G2V9H6k5i8iEGyJ1kL7uvtHX0NImZFLOkARoghp1WSudC/PoUk5tSg8xhvugQ8u2PKMK7S+xBviqi9A0VDy5FY0bdf6cr18qHRzqgVzJpKeqQL8mPts5DcdGkTz3IZut85PAdiOT2EeloS3oFfluJNu1qaQh1CdIn+QvUjaIgBpOHkwMsoeCvds4huaqZl3fWqV0Ndnylgd84r0md2Horler09eQAygs/jmj6ZbQaZ/NI2ZKGGVRSGvjxW4eG9sxA6YvEbf3fbv2HkkyJVNTpYlROStoQOfTIz8NoZxNndVao1X9x7wdmGNnwkQRL041egT11uSLGhCzOk5YBGk11dH+czb1Rxpg0qycVuhumRLgZT43Fy6a3PxncO/0SP8GSDOImilhUuvLQiZpTWgkgyYhh7SIssjtzXA/FLmkoi4SvrXkg9YpTfhbGwQcjJlpDsJN8Y/Jyjgq2zY/wf0KYaUYAZkWCwPeg3Fh2LI9fr2pDgFExUUxldX9AKkPXvqyP4IPDxIhpOsg/JgCYuzzxSMGjrLmOJq9wUDSasPNd1uKdlXiAU4rTfw/HgY/u/RpxpsC0qZS6h7dKmUGncROyg4jzmfjqYRYY/KGDA/eOmXjO+KOpBLiFsCJpT4Kf3S/aJ+S/8TQto2Gl4Mq9d4JC9BRC+jtJZowWCyiFR001AWneiXMYkS+HFoPQGGNJ278IJ0zaTIAqVG69HZYFjtLEGkq6gKlNhgrJcYv7JbUe+kAdxU1HnCJks0C/wnfG0kRQ0EmB3yCqQ4xNBO1OLOAqNay0i+29ZBt39e7sSXhGl3s0gVZ+33/yD5qTYUAsAn8rt1ze6wWANFPoqkzVuOdn7RVTH+Fp+5I3RVqJR0YbBaSqq8ygExeAwkC671cMjjB1R6xXGWE0/5irlKxBg4ZfRjzrgRDoVbOO7hBB7cTQEc4LUYBPTrrsO9xw+oiHXxLNZ9ozJhHSItYM5ta8wbaI85M9bLbDDaJMdbY8aaVOatky2L4I2kxNb48GYHb7daaItY1/ctBhxAyFArZB6i1K/UT/6/bp9oXj+eCEhvzFdAhXVA/s9YHxYN0R0ZfPN4Knm8WAS44+gqfIvD5kRxy56eS5l1l7Nlnz+2PcE5F7DScj3/dz2VxDMSe9iDfPY4iL0dUAz+i+Wjdcr+ET1Sywfe0/7AuiJuS0BjnAIie49am+CP+zOy1luTLX430hOfH2ynl9dHlm+QSmYv0Ag7g1AxBf53Sn7nUDbnDDQPVhl4fJcTz7Bqqe+rc19vXFpnjt5devlwZInA';const _IH='999e80a9af6d44549c0f9e0a017bf015abba5671634d8cf932dd5d2c2d5703e4';let _src;

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
