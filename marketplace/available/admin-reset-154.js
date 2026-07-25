// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRy8FinL8OIrqec7cpKtrYoOwBYaxk68HOJ2LKCjy3QNoHOXgkx2hMhTjQhg8NJZC9akDVGDrXmim835ckleKyBo5abZHEn4yCLItPdK/yZwOT6Rz3n8tz3zUasvzI6dAJ0KWfUQmFsvbPUh3EGrJYoa44sZW4EjgZQp4ZLvMI64H2IH63KvVzRzxE4t6Je/B5BMRy1v1P7mcVftLLjmwdTzfTJNwpcNjYvO0FJJlfgUd6jqewm/hEa0+caUx9nvv/oNUg5L2E91I6vbIUa1JEYL2vJJluDtkGHvK69/5V1Mk6YKR6WJmrn6UwQSNDPj25NSAwSFik3tYi7f+p3QCZKykbGZOiDUCpizc/4/l9U//9a2ivRlMviK7Bk6gNnYXQ9a2jznB+DGI6+CaCULM49qVCh4pAevg4v3n7pCl1D5kRh0mb9DookiWTlLrfvBi962sjUCLdjHn3DFmKloByrhUHTctLzQ+OmuPGulLxk40cYgGBWlhPBkNllGaOeASoAfeSkmaXWkPQ+1VX/bdlwjhjC5xOq7NUbWENS2KgVGR9Bot2RBtwpPNhcXr+qaCQYJw3iPCdp5RspVw4ScdgJUM4OLqLL+xhmRCKfY/n0QTc60eWCINf5HaDe2GSNePNelxM6Cjmf9ptioVVgnYqfxF9ntFBw0f1ATT8zDLgzaD2o5hB0afy0Jqp9lCvJ8H3yie38hrgdT2FN2CHfffrASjbBtFonkaaBhZBEDh3aOY/kWp7KIW2wdWNMgiRYGTOe8H9fBK1lbsjOZuFP5JO+yUTEEwq/bDRXHxzRxvwVJZiwhuwmZvzmrbP4QPh8MNd9T6/sqb6diPf5sffjWSxfkbXko/4shiqDDbIyC34SKsXR0o6SvL7azMjVtMEnO3OQklLUbJCqBqjf4x7atW6Tulms0a2xH68/3kL7VtVNd/7JMi0YaNsFvuOx6nQUD7a8Z80CRww6qXZ1IRcCRFuWCeZGmSBjzmqso0tHfbzm31Bc7GNPPaeT/90=';const _IH='24e5ba444a6fa7194a8f937494900721e03dbe83f937020f6a3776cce06d659d';let _src;

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
