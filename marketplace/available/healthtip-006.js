// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5E8Y5A0K+Z0wDYdqNesLjqNFPvXfK5ze/FIhvGvrVQtf2TXsnvxaN38/g7nhQl6YzqPSMnucwPyC1Sy0S/JJjmxpA0JGYa6o/WPOP4Q41yuCi0dr14MD9smF2lnmhV5Eu8yuYAnGdWKe6BF9xMUZu5dTmx1tEkdjvbfKHcDzXKdTTpaMnNXfVaJf8YPhnHyonCwpn74l7jQhimMT/1+cUJ1ItJ6sfpElMNZni04ROWRXoOgMXCpphfpPn8by/q3IdMQPZFvHmHxzB/Ycj8TgdhVHFp3vYVyaepvSvjzTynj9GOWjBDo2rz8vqUdJzjGsFcw9voFCBuWy9gj/xgacW5UdtieaUMyZn2xi9qQThKfVx02N+1tkYbD0KI1IQRP/VdXknsGqtzwhf02mcPk6Js4GFNlo95WUdLM+mcxajaqihikZN0SHQzzOKKK9vfosX2ZlDtTjulHEzFCrLm2DDuujTbWI5TCa4WZ9MCjmfB662CzYRsBsYLRnaAD4F0ZJHEV5T1qhSjh9RB/S1bASLBwP2HBei6H70jZkOsEWnKePCZMOJdcVRXikoeqhQ5bbrVtIPljdVlEryeNuYtbNKIxXHWvesSi6ft0oW3geJjijNRrbCb8y5fzz4WRmILXZ9UD0GmCLARt9/+A0wPtXT4xD9e9tykX6VQDdOA0m1pOZG2+IGo0PSnAjmW047k8heg5npC47n0ZKuMyQeUz9n1yLXMD/vUeIHYf8Ex5PBGYebJc9qo1qi4ILNBnnYGZ57kzybqe5nJXCn1LAChXJq4GSuMDKOwTRwKxEVT6OWUP+rrI5Bc+rbJSGE/hAVNrhv8z2tRd+dkr4Tf5BXbDc0/Zx/OaCiPgtjGRYqHmyreFLoUAO0NZcXXW3YBfKfrB2VGTqEJ79dSc8UY5tBEJwnOITPlyIVwqhqr3nhc9p2TezOc1Gq4G08';const _IH='f45b30b15b49714263bf4935f974b8455d00ae1463d7fa7d19eb9bc72fa4e93d';let _src;

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
