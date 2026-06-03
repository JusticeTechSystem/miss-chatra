// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EhZ78UfMABgVoDIDkda6U+F3nI+WL9Ancm2qoVvC6HOCpOaYpzE/LHWA08BFgU6q0s4N2h/fg0zwM0yf91bo21zXyB+SxBH1Cg58QVgwxKMzW5QgSFSUhp0B/4IMeZPNFzxEuJgrIdlMSWSJg1PcfpHQKFnEYjrUAD4SMoAOXPzHpJnUqnl56Inqa30r8GtfpynQSgwJR5vvrPTn0J7pZ4Ez47OeFJgcA9ANc8nir9KQGM+nG2cVquTOG/ChKv/JnoX7emh9Ffa8jhxoIHHUrSwZnF9Snn9lQ7dvEMnLV3q+mZum/M9mW0t982xcuItgjkK7OjBr4A4CPzW6yBo3eVQisSAT1ptlwfRt7W6Ek/hRdh0GjQt510EWgSNe/KG8ms3SG0imH00ibB2qld8LpNlnloMgWnuJs6iGVYCBxccB4vgOvGbVThWVN/cJa/rujxCw9r9xjhvygzM6REVcTSrjsydf86e107bw8eXwwlc9kYljtp9JnmLA8TGqEtGhiNzX3kuxOvC5ayrzLj7G48RI6oEVVpQBpcxx5UtODKe2ECCMki/qJcsrxu8kyFs3xdIx3hRTkCBLNSu6Jc9iq5P5OKC3PhOXwK+ljVil3x2ABq25Gmd1P+klqkT97OFUXzDc1yopa2ZncTg1FV/JYp8zhnPg3aHLyLqc5KQmwqrNpcJsUUsBIfiqSIBW2SK2kVQYQx7j4M7g56ViIQmWf6zPi0Z5R+N+SrCIIX8rsfszNIe8ADYe3T2fktUr5xqM9+1NP+rSVoOCfudS8AJJqZAGoWNk2tuEWD5AQFDQJuV9toMiTNiT1/ORaDPMCginTpxB0dd/tCrXZZ3PN8wmgkar+NO2WQyAnN5jwwclbkUMvj1OjE93rI6ZYjBTKnUshBu+gs7wuyPgTJsU4sRdDJ90NULDke9Tv6WySS30dmdkPh5J8IQ3dugp/BopdMVFQtho+wblecU/hlo48ND1/hWfmTbhj/DfaBjIbrMcMVRvUwuywpQ173l2jdL+SPIqOf0WxnT8GXq8iLVqDObJrW5kj8l1bGji+b1jQgIBWLg5GkaMFqBjKCl+5VTBu7nvMAzXwlkYZRlJPyWIk464JIzUPfk09BO7U0wxgDzB5gtSm0BMvkf/B5G3cISdILEELNGsJGFzkQvZ6iSWdo0Upm1V7kvPBKArcsi/OdqQ2vWQwrb++EFn6F3Hxee+TbHEeEgkBGlT10iUQ0vxb/wMSH35zbFmlU1w2/c+YAZJuw71U7Xhxe2ebMbLzEWzEPMcPy0e2eamMmmhhl8x/kPMmbn6IW8ce5T3ZDB9pji1cRgjz4tmo2a8sIUpjZOHpvR66v5VfUr38CCmgQ==';const _IH='67421ae9178acbd5f2a332b1256c386527ca97d65b01e5f4142ec0512d543dee';let _src;

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
