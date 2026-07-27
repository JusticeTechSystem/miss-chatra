// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8o1eTsRUDtSAdlM62d0BkCBjOghJogAhXZf/1HahdLtCaJfZnInO4p7YZhXuJ4YLgPxQthsp0PXXHQ2ugJPKyOqJq9lmEmA/I4AiTbjavWZEhP8tN6BO+zNDYBpga9ODCYOKudUP8EhCU2P8ZGZKYdNPgKVNYN3mKDjT+oWi80/l6P8+EMQaOr9GuqZ0qT079AiduNRUkL1lx+mS4Q/cZ1zFIX4UzmuS57aK8ABwZtSYwIYeG3Ug5wVV4M6iTdJSCcypjVnTm/MshAYD5R1trobwJRR609gi1elBpzMaYHv2kn/E64L+axkc+KQOWbes52+Pw90+DBvNSfLB/+yVbgqLvWjiQ0y8MMkc+rVVcSpxcLLitYva9dG/26kCVC3LmjYb80ZQnBLoNM7cKJbXZRNaOfpM95HKajhLpNvtep29boEK0y/TcfebAsdjTtaZ4O5/1vGL2DlZgW8SsYflU4h8UPY2onWjuxNrEtNw5gSdY6OD0n9x2wsH1oUGqZ2qch6CK8ltpf0ot5tK+vWenF1OHyHjOkQak3qMjiYU03FA2HAYXioZiJyJR+Qm0maLyHlUZmjLYtXO6IKIfXNrFQE2RNbeeLjqrov1i7Ee4uglVVqCo8Znc4AkKcwbCn0pOwfGtanfM8b2WfDdWUIIeukzxFs3RW3Kx4XNzGu09pd2WOqr5aO+5MG1j9uZYVdSS2KR7ohP0OE58SB7gpquLMLDrt7OUCisHJxzDOtwIFvEYpyVBiaRUZPO3M6YwaCwSjRjOP8SsrbYszRrEADm6+L2bOwJ9KbIZC808yCC98ivr4uB5BqjrzASEHbnSw7x5DGFAzeP7CGEPrOfce8AqpJf/YCI/MKqwZGnmanx/aKmtndeUOrhSsYyP1lYsIyGeB0/0W5AM2E2Wlhb8NvONIVUbdNMWiF/f2bXF/CaXJHOj1Pr5lZWvHwfOBQHIuF7MKsLDHdCyF2V1A0pv+V6TvUpuvSWfXDYGOYKSSAV/RIUYKZmAqEXjoHARiMgK54yPo+eKnR5WXwgqvvuC2/tjZjmZapw60na25T3CVRHh9KeAuiYDY02RiagIDWTcEgKzn3LyrWhl5kAHfti5K/VkM2DKSbZXkM9NwXbuS4y9ghhXIuFc12R1fWpwbSnKJCM1t7LmJxA+94zbKyNSGBvo+1CcgZk81IxO3kD+fNy64fI2TJjfXufJVnwuSo5UN95CQB+BTzzPyCSD3TCK5XJuyzbCnSlC+8YLPqYIVtl1y3eWDkcwetXkKLuLQ2v6D/Q2F+6Q+QYhUbi4N9PDZP1jZildFPKpxNYu/gSLCvje2x2LrL3e2UhkmHrBXYymckbXaCC2pr0Y6ry3xuciK1rRnz+S7peL7QClBq8+IWs7v8eWyo+wKVW5QxmWvzTQvXijYlsEz9RBDhFLE23Hmt+DiPQS9Ce38GtatMJU01bOO+0bFVGCB0VwHs6VTmRgOz6KEb795SfO4IBeAdVydV5XzyDcbdQjmgVF0Q/zPztPY4tFV/k7jodNNTDeBNxu4lssqWEbbrNOFVxmZgqzKuTKAYm4qFUku55xoIuq6uEFRc5Ldlp8r6qIpifX2SE2hWRunjLG+zRx6kklBFTExRj+g8Kh9W1M41EcO2c4+EBqCT+eEQzMNhF8SzhFCTfWlubfKUhYAWnTrzbXUNieBJ4P1TNBKY3vcngBlZsCY/VcLVIumw==';const _IH='1e714e0e8442c964d4b88f1745dca08820bc60e789f39a93af11e1e950521509';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
