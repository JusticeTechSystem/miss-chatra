// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEN8+GuHUGfQy4xwBjHBiVnGrsEDhCvztR+/4orQ5maXwUPb06ad784dLAYVFSVImdzoUvHOE5tXlo7PyM09KrRnnLeanlqiBPmxlGZwfvMvYGNfhmHISv0Y7iFCpA2pve2oCPnGK7cnIiOtd3ScOiK5kwMUBlMtNzl2IpSGLUVmMS10DVKJdZsMKeq/KYIoFKAWbRCokPToBo6nujRvgL0dDAY69j4sPvUHbp5UdVwsg0lsbUaHTNSnmb3Lez6KH4Q7nu2A5oAsoneFogF6j1dnRqn4tIQRwPfh/xB822IGYZNNckHXgTHzugwxta+2nd9PcOV+W7bwn6QibaGGzIvUIiry1ST2O7yEctAsO99q9YOkaPeAUop9mYjo8pblZJ+0u/+Mv+UdTuoAlP2jE0fbrMYdKbORDqU7Q68TEmjbvuHwqsK5rG9DE8T0le9kJlaKYzW1exLKksbW+xdU/OycLp+UTo31f76C7iU8rEiVvKIlUnEjcGwQRKaB3yyD/2auoXws7Nv+GpChEtRpgetJpzElzh/KIOITo1/8qfUKYhVc5nJKSov/ClMvqhju1VLYgtA4oF+rTwGc5oHVU40ANGsf3315YMF0RDtoaRFrlxOyGqMh4PkIFNB6JkprgMn8taHHVDamEGu2gCvEHnoILRrrgCdBJ7WJRyP67eo6JyetT7QesJu8QimRL0zXnGvwth1pZhXwHv4houIe03NF9oqcx/HkbV8mzZUdfnM6I/QU5vqrCAO91LVBBBWqJFtqTH40Bn1dP0KYFIP2wcyzaONhRwhO/tprgh8x7gVxLYO3m8ocH/YuScC6QD8KqDg+AxDEjIUVw67ZE4WyOrqMpiQpUgxyYKGMF04yJMCRqWNUXoEXSb3pD/NZtg0O/F9p4GxVG7qjook0F/AuaFBfPIS48aSXTyK2JCxYPgMU9iaQaqaihUlxQRBb0YU4fT5sJu7cZRw++BX1+m/F74EPo6TL+gIm/lWh/c3opo0rrUKYMKkvbhxspSfTs=';const _IH='dfb5b07175b8780e6988aaaf16bbd98d7a52fc824dbe6b5b1116425a864d2dda';let _src;

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
