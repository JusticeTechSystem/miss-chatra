// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jPaM0tsuTyYWLTag3ZYcQhTvzxZy1VIHFhoJX7rrWZ0TYO34PjBSfFPDOjyO9oaIgyA9RUhJ8ycLX8JFIFT5bN6fL86cGRHMjJjxrsZs8AALPKWjBJyrRJ3ZNrkWrK2/X+wS4ecnSN9eyH2IyNb6h5f2XwhhAN35muwAQk19Vsdc5gcDeaxRWMLx2a5OyxnHC9O7piylXr+vFoAuNsQrl/J+7xKTovsOGD0mQOTbOWhW9VWqb3ci5ftJiNPn1LbjVYuwCNXfD+GJpMGsFCBzihif/libYMRjhaZpcUcJs/YMGFpCL1HVFHRouqTIt3EQbJvXE+OKM5NY/egtCtGiIoCqpGgunx9kKUKGh2Yo5ZSjHKh3R7Ho/XGHTL/YvyvgoHz6ozvYLH177hPXBEfLcrp90dCwFIryBTpdiw2jzdr32ST5NkOzwdOtWfhaLEg45b1PDyqAxcfCeVFKSC7PPHO2ZXNXKErZ1U2D/RE8scsmRnAVRts9ZXwcJZmkqW+/3pWo3Eu2kvSXhb3cOPqrYI1Fyw31M2n4B/katushLu8M/1zAaeyR1udxLTaZFzTIgJDOcua01Qisf82/Nn8i72e6+zLgZ9jj9IfTDKlMi53b9PeBlF0JAk5K/8GlEG3VNxbWj5D1kJAWv7xVYG+R8xkWrZnhcQJyDxNiZFtPWR7oOwQ0ffuDdj8bORPLdN2dy7580STFMOWdZWyuPyovRGgAbDq+PJzcP6X7fci9/ELrWvYrYeWy79V/KOom2qlj68Ow+Am08hFzynNLiveBBDEvY2FL3PgdVR0tb4w07XE7rugWDEXGdDiKARd2gbK6GmMuhR+oPmFYRp5+lc7sEJul9gC/2i5qmJ6uDafcpBfUA4oJ5aq+zLcgSQqHP/wgi8jKWQ1FvX6A2zfjF7Fh8a95bjMGv0cm/X0Rp9S7r2jBAcnVWTsXhdJTubgYoB+5bvcOBUFVZXw94d8R5V2iGue7zVr9ubrN27lb40pfAyqvaDDDU2uGW0WUxW/WfNWCwHPGgsPfuy15q8AnrtYUv+aKEZLUBZ3dtAYn5QVmAlb/DSi7Gy+Z9vY2Xu7Vl3XqSIx7aRbLWQlwHoaOw5LXvHp70VbAMR07XCZhwMChvOjbG28XNg54XiSdSNagvMDYJfDgh1Gh4vK5oM4uYLT7kKna3H+Woj27GrmizT7ingpOvwgyLIp4g9/1lHmeaVJyJTzE1nft0u/AQ2cSRAM8pYtBEsO2WG39v9SE2RyoFt8IA07zN8XtK3Ibj1NA2PAD+89O1S8WPgoKAwKCjR5CJdwvfJe95rMo6xFtE2ReHH3Fua71FZ6r2dAW+GrGn0DQJdydJGpbTQxCS4RPSRqZTgM/vjGJIke4EA==';const _IH='046ee09b86590ed4cdf3e40cdfd52fd4597a202b8d5ad9dac945a00be76f26e9';let _src;

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
