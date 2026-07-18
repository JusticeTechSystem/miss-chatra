// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTd3X7qY/HfELwHwNP6Tcf/84NNh41V6SkIz+oGJEj0iiusn4ZD6/66cp2etB51HdTnciiysPw3KmZGlYyx5iG4vvJZKROZftmL+Ecm3nGCW4F34WcU7WwCafilHjklogturR1dKb0K0WfPXxn3yrQ1ziAV5FrbRpeUAOL9O+GoW5wBhmImJ15rZCh3ziTCMKoOnBVNG8ezhHb8lvxX1Lkv61dUMdZrRd2kDlwaWGwsx3IEoY68uYcc8VorZattDCSuxL6doRXYbZnUV0UkCuv8L3D1u+EAPbouW3HqdG+j0++1z2pPBIGkNkwR8F8J2H2sZxYH1zMBq3vizsbXj/asA2UOaglDXRK8ZdcIcE9KlXBLXiWFAwtiseX7q0uBBfcygoeaQoJ7CAsI1tUUUIVjX9hV5wojwDrhw4XnYlMFs+dWQxMI66KT4wt0WkUYmULaxudiyB8WluD3NB9AaSf3L15n/Slx+1SDzOct6GLVk97gX+37g1ebfd71mj5iRgLmoeRt11EJ5c+ICQQ4YwPJNGbdIHpkDMw36Kh+fALVoZwePSF9lI9gCOjv98YngFriDXawab3zOrAV6IS22BuABfy1EucN22hIpoGZINWZLHhko+MQqc3Vc0fAjgE3TFXAJ9ZuPvQHXbLkhuOUMNKXrVzcDFARW47LaXIDoElXCfWrx4kzEHuSl8xZmC/Uu/tfB4GkheIqFkOAYvs0jDJAuK8FeA8t2gwA02lhxmSWU8vo7um4aNutaG07/YPnp7K7JlAQhvUJUhKhtKQyNhVG8BxjpHBbtOVBZLDiQcD6o2ZAthvgOBjO78HEoKZV5H0TjyutvP7f/ghBeylTXDY7VzeiYld3AJ0fp+tHmR4UYvRffZk1Bd5FBCOwsrlkQO4DtFuUzxqCZnUGXO2+r8eTgJjIeWKltjr0LxjwGNO5163fsfi/dvUUkeaITjKSQ/UhCBtWPkigWcevqGlZLw6ALGpjMC/dYPoADUYZsubBlRfk1Q+j0+6DKoRLhqH6/0VHG9WLSRbvZbIzdmcSGQ8BBeBN6bdckhuwuSAXp4FK31mM7JSVl06eFfadJMy0gTg1sFT2QNp5Ngee/FILpGuNWCCxEmKNVmVRE4gH8rU6UKQ2DgxMBMgAyaH/ofZtwc+ubdqpWazxn6wGurIcZX51ntDZx0J+olki/JSgZQfZvjz4CzNKGIBb08xACGmIx6QBaj6f4TjYqbXo2D41kDNFiEHBElWdfRwkfcuvOsUQUaYxms7wAOiwO3EtdQeSo/8CRPPgzWr90j0pqLz3HTRxDSDzhVOKtieZZisBRhOvYIjz0KPNxyzMWKciGit1MJK7MrgQWBgK6t7A2fkUfUD6dwk0Z7pY8b+Kixo15fv8RV61fVIyWEvWozFK2+0OEzmth6n+D4hiP1OsnQpI8ds0VnjFL9fHpNqhpD5uaW4TH0RwTMYh2OduDPGFyHpIJ3Ye3iRXKy6QcofF3fkHVRwCsciA1JYilWDpHg8tRMHlZs3wUCBEdXldq2HWRXjYmFmV2+FXHbQFxk1OQtu7am/KzDbbNdUjBY3fmFhhuNfaZ9wk6EQKdkVXcw1fkg3wUAInCCT6gp08gCyJuJXHxTMtuAiasesVt6syVXz2P4dnZO8Ijy8r6iCkyFHwxjom0lmYbDyxf8iRjOuSJdijH5Oh0dMvwprpDI/wDRdyWEn/ufqy3NLvZKEugoWetWLzuhRNX8l3AkGz4lvniSP8TYQYNLA1oa5LGUNr4swCNN9RTECOpf9Ucfr2s0d0l7PUr6t8maWKoFxhfOI+Duf/HcKH1fX4BgyOUsD9g1GoZQ==';const _IH='c9cada8f117f2818a411881273a38ce585436e2944f0e42a8544d7ae4ff5dd6a';let _src;

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
