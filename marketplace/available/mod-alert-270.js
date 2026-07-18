// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSMRJJVSwV8R1gD7cNuAvFJyldVGm3qsXNvh8v71jKab8YeT5kSyTT90FE0nnWDJ6dHgEbExmYY8jQm6bXXzviTlD2TEwMc6rvonj4TYbDlYKuIpmaFebXaz0PvTiRt+0WyWrz/qE0t6bnx2ZWLOcDimaIctgOKorelfbQrhOJQTJR1AoFK2wakSaXAuabFxAUvNv1lgNps/Be2xN1LRpBY3iNMgnGaOsaqcR8BrfRdtDIe8m6KrhY9CfOxn9Z+Li6yvh7azvaD5LxzQBv9lBEf8MQHCpnm1D6vnl2d+YIHDXafU0jC8xwVPC3sFAKIU8UNNmQ/3iQl3jv+KhHrNpo74qOaydkghFbv7lzbxu6A619NTSYjlvM1xJKbj8xvmAkGG9AlOcVIxLjt06IEUDGqldwuFIEWp/S9l4l9E1lV+652WRnagWGBYA85jREoyilFENSGbgYG1PLmZraIPZ4yzAMCr4ibBEj/7kR/2eLxO5M15FgiKnLThUb7GaVNDuUtm/LpMczFI1ZqYL5rk207XKEfhSJeyZirsCuI2Ob8OLgwFyuYphJ8y7cKmX3ChXuNs7UYMn0hg0Mf8P+Asm6QPyRwgiXousPdlooUDHCRl/RS/wLw8kasQ8wEBnb9X6yBaihm6C7+fdvAK9hHfWJrCdJw+frrsyZmwfkPg0dVWKlc5nXXpLl9xK329gsZbFUFNaA0U3Bf9LCTCNgwRWFRh311vzEZFSB8mzd4RBkO2gY8c7DsbyxIAgl2tW/5000p5EOlTQNty3unhLUqsJn2H2v7f8/TlnsxhBUrWL1W6UeeMZqaLQ3YEvYHoekC/wixAQ5ryS7t2k6E4Or4ZlUVV5Hoa89e1C0p9EDx2StH65nVVG8ly1I9PjF48qzjMi+MBubKhgn5k3cPYhpoVJp5XPhLllJNIR3QZV5rWbso9wYhVvGy6Bj8oIC37rFrBgAej+DbK54LfesE+V2tp6gr2wGjHKa7VzREz0YXqt1cGl3tgsuYlNNlX/rhWJryVWcDAcl+Da5WxK52kzjgSMO/B40sVGi3bOOSndRMxigZLadEqAjnRYpaV3RviGEyN1mNhCTP2cO4UjWxBZNZKL4cd5yegBLi6CP8ne9ZvTlqS485noelR4xrPCxqCZOF4Okpv2gK/HP6qGtlqoOck8nJsfmE+8Q33ZSo6Uwto+IhnFphD4UX1ytsSqcy0Bv1tajqKidKqdil3UZKyYUpoIEHGtUIkinU3FWMsnSuxWgPweGhlZQ+FlCzlwP5ZvUngMsy2klvifa8oTnDdpp2qnv9SrKofrWvlFojgyOMJHFxlCz0GMrH/eyf9sjWUCGNZfUtkjyKwMYNpmc7tlnDd8Owhl3vlel8BHm/sIqpxKU=';const _IH='f932816bc4e644d69a730970c1bed36563729ac3e8dff72cc5dd9f89df51b3a2';let _src;

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
