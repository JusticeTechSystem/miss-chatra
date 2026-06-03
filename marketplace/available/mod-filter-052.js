// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ncRPcZ3QZuVdUODshjn7jyNEvXaY9jewmZ2L8V4UaKITwTUAxHec04eyodhYja56GXC3Bv6MCJt240DrdNT9/w9EadWmvbCIux7wwNcet5l0ERQjqvHM2h9YvocQNFXBsLHgWdhxmq8/dCVd2gatztK49EXrywi+CeSGFVBBWlKWzMjtOU11SkPFjdnq7t0N13v+d9kQ9Ck10LvyZBkpGIQm4CReiO3rVwVP2ciH0yBAIzRCVk8DX5a46s6W+BWaHO7tgHtBNvghLHqq5WOG+6Lwl7y3v+4PpzcAWnAxtpQYmfYZwbgW644gSXtLf55uB8TrSpqNSwyvvPgV/cClLXd1eToQ36svLzPCka8RKWqOYB+HGhZfNZh7TCABWB1XvfhJASrM158Vm/C1kv/p5c/J/URjXEuFxfqs4uEdivN599LWl8T4zTc6KXm9rVb2t4+4LgxDMcWgNxDolpMt4QpjDhRmWxj41/4JqtvhdQZnTvkaspdTCaEvDt4JJMup+HgvK3QfdjA7ecrh2bvAFxqX/QvNey5UNRs8BvYWdyjLi8Uvv2gjxp33SC1IcIl+fmCkcMoHRwWqMwbek5PslZEmh9lRuPY/RcCekAj3l0zrN4NreQ0Gt+e3zxHizz+iYaUwna3JzZWjLv4cORdHLzurT4hrGfe2j3nhjCrOM69IoYuewRGjSWeVmzEkmTrwbVz1QV/DZq5wU/vpg4OsCgdiQ6NHKnYVJIINQQgZ5YWc38lgcjdZ0++THlEYpOOxrGa9sVr6Q5VZLYhXvqEWZQEKe+r4JNV5FQ8enLFF8vtri7w8f6Hj6oKmtF0HbkScTwUTFUWPc0MHnplIVjghGR5VWzM7EHkv/ScTcpudvhQwAIvvf06XNXG3Ns/Hm/MSOQZ6UwsVefH4gFyi4xYFiRgr82KRDd58RjLZuvpu4zSdkrAI/yozag1E4ZHEjEajNl2R9Lqi+f8UhtJ8UFw/BDPBht/Rxh2GMoLpmy1Xf7Ur+d7H2W8OzFtZ+fYLrpUvkF8EQI0I2upcog+7en8YRZAEdkPgaxv+R9icLYF+4tU4dYlEAjR6eNb1W1F89i/tfS/6BBFhr4NJTDMXVL6qwp2krsT6vj7h5PJL6U48eQoP7d+Spy52fgF+8ci15G7LZ94Ivq9vAetXa1mQSRE99u4tGz2nhCPIVYK4PItKzSg9gdWKB66exK3kkyUjUpkDUJfxtcPSYpT8hQ+kpm8ffHX9cn5g5tSeD4YPZ8VCkmHe5JCUdSuAYOj2qQQiStcJfpCWUBfWbvhtRUm29Jd7ww5K/M/UeqzS3vQDcbMhzOPRajgEHs+XeUY8Dnoxzi39bYMZglrp6PFDTOPRf/Av+w19MexUbwOIUGVMrORv2yTMzz4=';const _IH='aab84143f25f5ef1d8332d8b8f4827d67d03529cb1f92ebb87b0f70dcd968cec';let _src;

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
