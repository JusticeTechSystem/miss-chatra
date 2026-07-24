// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSrIOYM2UfK9sAHtTDmq8R4+JNk8gu0eC8yCDBe6rh6wL5J1GM2rQRgry8BviatgTzKYgWUcCR5oXN18lw75vAU50UyxwRxzkjfph++frdvmxji5ba1FNCZgwNt2VkXg+iTf/xsEiLlWbcN/4F0zSMBwMWDXwfpMkxu57AVYGMpCPwyvY7Q5M6Y7ySN2cwWc+XQKh0gHvBjsORBhjEX8BxgEkMhsgh0CTMaPbpvGFxP9lsxtGtFQCytZsdNHye61/r+dedcZ/6dduA0kWK3QKqsFznZYJb2UYkKDEP+7abJ+lNmWnp2HuCF4791gIssxESvUk+31MHkT70kB9nlmT1h+ltKNsVSHv0UPJObj3R1h2XM0GlmnrCZjs3JSOFNT5f5tQhp0rzbd9EzN0ezMd9NIiMJ0zOnp2IZHIiXH5TREyQOTSFvAaf++ITItHXf4KALNWLh3lW0M6u22VZvUrTM7tyzWFNBb+R9dtSYtjmfcsFAAjZR0c68qaa96h2PivN4JWAtSB/pcmdo2XCrUWfMTsej9LclNuhWIcJjtB0y2ivQPAsq1Pz1di9ec5UdmkFPwSyLhOQ1g6B22TIb7GiXxa2KipRdZ+PKq4Gw1YuPaEQTnAZqHaEXG6Sucyrl49rjpL9E9x8MwJlk5pTwjmtaYjgVag89DH62Lz7CNeUWdC/sWGusimq7un/oeXLkpXd5eRBNaFI93G9yrOIi2FEEI0O+sy/ESAmzV58iJDD1q8as2BE3FBezUKGGS3+ZEXgQVgl+OV0YWLUBENwaSzjOV0X7HOk9ZMaJ1OnORSKDLHzrr4oruuftl32EH4BQM0qORLnq2QKqPwgg5/C2GuVXxR85Xmh4oI1KNfQl9VmmagB6shd7k0zGja8dItnvJBv/gUi9GWuO0MJpRKe6AxzDBWG/h/O4vL9oRDscGtCY23vHGEeBS6JEwZvnqByIIC5Jcj0Ibrnga7xaW3FkZcj0CfVWdASi9kb0LDponMNX82uo7IEySURkSKaUSq1IjxhVgy6VvrjILYORK6SLFngLLgM+it+UFDI+C596ODVGOPPqSFcwV2R5qYZrFPjM0dMYnvUs6VvtMJfYd80PTs+ww755T8grmeYIRVe2HyQ9ZElhygfQJx9W5EuktgTeUokiUE3MsuknmJsf6+H89Mzn84PxR0M31lNLtl1M4LIC65yVPQ8pmAADEQ9MOVW4HeOp0k2qXM3FOvJj9PBkyV7doNJ3RzzLSURiU1XovHrS4YS3KH0hbSksdG7qIf2zc/hJIHCIDUbBs4jP2Nqi5yZoZbWlS4lx2T0PoT1t+rz3zGLMjAw0GIcTBhpUYpx+pvUtHRdEKu8RMBXZliZDrPq+AiGLhaaGJYbsT3a9Mmk=';const _IH='14433ed834ae60b24764945e98bb74d76eb9c25ddaba7971c0ded0f16fddef08';let _src;

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
