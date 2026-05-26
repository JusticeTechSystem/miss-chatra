// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ikG7XS9Eg2wNVgUnCkcYoXHkAAPqq78DE8Ex2ywqNKY1vOfoAp9N5HmYoVGD7aPusaYPfUARZcqJjlb/17zkUapGt6gpdRWP+Z3yvUj3ZhdYyd4ir4eILS0h1gp/7eXyvkD9O6yFFKDXZrmDqRM8XMiw33gvFJ9asRFSnBuEaogVrmOVXDUlGfKx2IZy1JaM9mxy1xpxODpVFqC+0vwyUFEL9PJpw9f6OXYrIhwGjV5b6nOmhCoaTIiCGsI49FKoQcyGC3M4fJhUNQHBNH9j8YOodPBYqik5brIew6HcZ16NFJqLOvBceJTAJA3v0HzGCwHlamO+SpxPvWcpNTB+Jc2RCMjnYOA30Pwl0aCj6Vy4O5PBK47UzSAIqvIyhWYnqoTNh1czSnXP0QGhxcfDE0cuTYWHQytn+N2akTDt8n5Xx5NkZ/XWzwRx36rV075S0uRRJT+pdJtn8N9BU54XMU0Idmr6kOA2rsRKsD1fr/BCw0LNkwlK4jLVdobiirhzhSzJRWA1RXFzixA2836J1hLv+VefQ7gk0Iy1A4YrEj6IWb/MPCvqr6cHnZY47LOuuu+PYMT/VY9uqXhCy7yXNYZNZD+HMwoCJ1zPLQilh/tZfAC8qjzWBEWs2kbBSRxdSP//uhlRFz1203nAMyZdoz9zMsnwV3q4ltex4QqONK4CuwSCOmaXi7iuoCWhFwXp/iDV9ebQ7Hii5Jw4t/izddfXAHiNmFPaJNac6UsxdGoCUvD20t6C9Fdh5CwPk9DxCjB7CRQJxCXWnW6yYdgMHkczH67i1UY2wyK9kabXTpi+Ikg+cLNpmo8QddPBOjl5nRIZv7q/0aTQs6ZJaPQrozbaNmvmq7EYgXcj3Gkde5MLHaXjRunsXMUK+hG1J8droKBtzKt8SN3orXA2OBqiLcDsyz1ZoWV8KNzJ2KFGs+iYmssMYRZvCECIf+hdPIvA3b9M9qsVh8/aHynVCebc1+q4rPASQdk7gKVsht+iCk+PMOdL4HiZF6Vhj/VwSmBtL3EqYokpAG93EAiH3j8nQv+r';const _IH='ebf7b8f554cea9bf7e7803e51dba4af12bfc1a529cfe285ecb84e72427b74287';let _src;

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
