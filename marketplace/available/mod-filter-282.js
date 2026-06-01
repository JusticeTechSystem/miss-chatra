// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ62IYqrKa7au9JFAKbslfQpIU9xj3NvKfN4i1rj0/WdouAWyDmDQ7hwDbPNThiSxpkPmm3dp7ohBHmrI4ZLxFCW2ucMyV2ehuXJm3PVmNszkyOxJA5DKYTrYL0URwbbQThysIPZsbcRDP1oJAfhXgfMv2HKu166FFl4EWmQ9ZI1jBY6hO/J1W/dHPvxa+EkkTnMME5/ydEyK4b5IJ9b/WzzSyHpeytnAIAH1Qt6+ArJlJ4mRpATlhj/rY6SVKR2Mfjfc16v+9DP8T8vlm0Ffz1AjhRjAI7DWtg/NQ7LB5Nxv+iuaov8ZmozlUOe3zrh02RLKS8Jt51iFC6ePOWoG/KRwTJWkjHjeU0HjhDZdj/7LjMascquwDNNpV44WFHVk1h0SQl0bofrPXj3HjImleSBzzVcIYuwV6FfG2nfRMs+zINkCXKRPB9PRv1u6eEryPKacXyxIaqBSpLIAFV9cfaz6iW1WMYf9AJkzKGGBwM0uuUP1F1Yef1gXZkWHiU/0RdegcAF2L52/XxVxSub28dy01F1OsVrX9WU/Vz+TDatbu2LI/+GV4GhwpxxeehkEdVStz8W6ebUu/MaCl7wqiRZcefF8PHfdJUt7nVlXypZFUjZhn0ADIxf3lKaSpgHLKxs+Xpb6PlJtohKPBIbUqHAkn5h8yADfA3PQUPBI7Cxr0eSsPihjgihsaEY8GwYAd4iXWnQUAJRcW6JpxRJSTknH4ml1KSN0BdKOpwHJEz1AgsVCWISw5/EltIPSzgnZurjWS7NoMKQqn5NDZrV5n9GthEGJMb913Gd5TC2Qx775IUIPFUF4tFi6NVjOpCQVqbioyhAHN0JpJgqqfj17mv10Yzr5FQkevKXw1PeVlwYhYlTrYrJGjYW6DeHynQOg7PaurvDva8FYANqmY1kS2DZBrhws1sv8bhHxgI8/mUqeqssTdREkT7dZLjm6mBfot4ZeiPi2aSnH/TrY1doeqbG4eKuBYmvAYlUijKfpGgWbcRI7Xm7d0AJrZ50aRhTdRIjTJk4piQG6fRloBN+QrWw19rbp3zFQlCg3VS3So/AblGYZKMOL0XI/U6NUV7qtf2kr1FxxFUkm6Jz1Ajc0sQcZen6kS9AKE1HmH/vAn/Zpvzz+QIUxOABM14O8IfIuWphHI82D/60sNIr04tevroOuASZQpga4qopasRQih+mlzBWAegFgWI3RXP3DykL4bT8NLdgA+d4eopBIstF95V1Vs5WmD6UVAE2Yz5Cn9cMuYEfEbw4YR1cwNHa8uH/s56ed3bxp/OveBkzCUs3ApzXJX+Y1jftxQwAHbdNwC11QtVVggnAQyYHTFaTSRSaBaF2jYLBgurPFBD2IfVaD+fLC5c7XVL09lgu63fKgQIrC6pa4MWvo7sY=';const _IH='e7aeca3385aaefae17dd05876c2cd2766a7dfd761fc22d8e94d62434b661f521';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
