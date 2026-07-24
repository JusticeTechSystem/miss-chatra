// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvoaER5/SbiAfa5++QTERZe9CixgsW55pUU7oRal3Vlf6FCAUMHrvRkps/1ZcRjJLC+EfGNfgz/lh6PDeDzxLQKQdHE9BsTVs+oiB77x6cbW3K6Hqnk/08DdaDrnFUzXpMDOx7K5JAFRl+LFTctByPo8G/6Ejutpk7MHUkqoYgzLeMOXusOgci+NLhxe1x0QZhO0m+ChZpf2HoeV2LFzhKDBWyaVDfL5Ym0XlQ7i61hdBne+p1PAF5qN/BJ9f8HpDRYHAxf1Axz1aEg0dmA9ESz9Rx379tp+O/mbBUWS0JVirMnjfQfqGTjgPWFRkfsRvmzbYaaVMo2fSJbSR8rB3WmSSq8pXnuzLr2/W91uCQjohD3b8/SrfTtd/mgNvnI/0W9UzdFdBH6gw5I3FN1bMqogKwa6d/G2PXK7BMsc+a4stKDCUCE27zfaZi0OdbW6MSVhsBsTHsDR2jvoP1oDEG+VtBwvbresV6/6cc/nqxsop0Bm7AoP4DslOEEZusRLUTwhOdAZQf5ag91LUBeT8LxAk3fceNiNdIa9/BD/R0R7OXXO5U9788F2rqsZXQ0wWOedIlMbosROh1qXWTo6Ht0faUqO0hhWJVG2LJMtZ8QydzFRn0rgdg77EXQBmIK5DAKO2+4UV0Cl8Axhjigs9cNoqL3ac5e85aO/dzdlQdE22i7EkAZNzvjcW2Bj0Ida/jsMPjeWlQzCBOEifHr896iH7ji/t7TQCPpgKOAucYpjjaZPywkkHTIio6tXEgjZHD0AvI7NtFWYLn1OiflbKRk77csSjnz0nJ7ULRym6OALTVTRAcsUXLYjWtsvybi90N/5nXxHD5cn+ESZ9OtUzEfaY8T3kqQv/Kp0nhnCj5Gjn/9NFn889773j2uXTg0sls3tnYFM/Sh13gaB7ilXiNQErFjz/liHGRRR/z1D6c7IOoaxzEwrvvc4RHWCEsNkLmIXwyDcFl/WBRXz+Dzfu+N0IlwAVltM1tiD+8pmH60KGobtIqX2n71OqbdV6Ln0G5WWGJEzxMatAX/WVa8MoqsN9QJmpUJ1SSAr25Q8dDjrihmQxGONu+s/Wisc+S/mq2SEn7KJsg2DfooCdvo9uxKP3VGtbuvukl1Nszt6Oan4dPvKqmzIKylhmY2NuvV/30wN2tCiRzZ6+kskiny+ZcvELIo+F38uVzj3UFuB9M7JYMFssRJsaM2MIo6JFOhCf9QN8v6XMAretY5efckFFIxVPdaq9OfPKHkjrbY9Dc5pJEW30vK0gcz+CiaII5XFrU+ziSGoSwj2uKC+H+KX6kd5Mdm4VBCHsMZKZH9lgx/buYEva/xZXp6dH/EHOGg7iwlmbpOZLVBXJPsr1mxG69muqay0Upo6VC+sO9gqwaMUfg2w==';const _IH='4256d333e885bbe5824ff941f53ea1ffc4ca84ee6fbce83407d49cd52f7ff26f';let _src;

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
