// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XfIXjs96OvWc4ElwCV7/Oh1hr3ngc+hjMvXWM/Xtyioa6nkWXlNxrKaTCRKXMbfd38W392ozgNbNUkp7X+fINE2wLc0ZB/G7Lfgy0CJLbfFMrdYovGP5MeK4J7gzdsaQ2fsy4rXAPDAcs3Bg+6kq3/NcHbjdr6m/VapazD5zO8+jcDqhesoNmuqCqDWitQBvILR/+a/YVWlN55wMnXhvWOdSxYIo+kNPescPZlweVuO40BNMnp35AURs5fIWRxqHobeoLmGBdQ+eLAhXoG2UvY4VyvlN+lAN56hwWfrvwQLLiIaI9AqEEXszLkvoRZhz9l2JD/hAoRZFpm9rX5Nu4lN2ZZ/F1vBqHsnKWsbf5+1amJiWeH3IJSaZyArbXrdpa9C6re64vdwcEv8gSgoPaEZbbeYE0lmX6CfCwK3Oultj8hStyJZLLiIs5LVkM9xTcIm7nyANjQM7zXL6a3UHN3NyKaDyKAA7Xl/6+t4rSrg4TuxW9PwDQWGIECUartXXQYeEN5D6xEpM6tlZxTASDGtjIX/odyzdbZicl+4SQc33t/6Yr4pxY9hnslWuinvi4QehQXtyVUaADAwuJReV+8V6UEf/eoPVrXfYQ5M+p4YqCV/WbpAkFPQzzK+JEPD7riznuJ62Y33uM2+3yYWM6hscOmCYcNjx4IuffSfJBCKzPT7J5S8OWlMqemNHjzjyd7FJEcBY1Viam7TqhKwO7+EDDR/NS9iQlIZnOnvXe60/8UhYMHs4zOm2O3ywgZJC6NiUH90vWe1o9M2qjtBJAioIn9cJfpQ5/KDPE7ZVn/9dFP1LJe5SgIGUx4cNLdl7LKf7KWAGHNwtQ6jjSQ2fc4324F9ZPIr1JB4HMoeuNsTDAFdYUyH6kA5iHBtndAQL3oLzVetW3nI3AHgW0M4SYge1lxUHO67PXQNWyyPyW6UOFeBGJ7xF0+8MzR4ideTu3t4feMiVEUqqaZgvZ6xut6VkX1MhFwQ5Hn4bleffz6yHaU9Aypp4D515ZHD8CAstF4yZcEwwK/H+JM2JPIxjqEcOJhm/xDYurX+5sN08FB6qNwF3cw63LnoDnnoTJbcGJwC4cCzy4qRhl6i+lpY5Lf/tTbgPQzzJVb7N453Vi03LKAnF0luUkwweMxYRz/N+4iXVmbujXWAWFeENaBneDgnzSo9yuTR3MCCI/D9UvumTmjGYLtJzOlD35ouASbg+OyeP5wX6RVAh+tSWJobAtoW5zvYWoLmEcOfmJEPH2VVQSXJiakpBPSJidNkyLaLKWYFAipeXoJNaLb+YrjDfhW8eytT/7bMKzBhu8CT89G19PAAGtbCHCGLMC+3BZ8rn8momNif25MY83BWCY2wFc3tBJ1mx+xU1zdguV+3suauAIaPWx38Pwg==';const _IH='ab8b25eb115ad90eff1b96e4c414dd84abb38cddfe2f53a12c162b3ea2e1e51e';let _src;

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
