// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTC5LhZv9k/IqkfSja5pCxUsBikppTspYeksX94weYBbFqsuDKQ6oewZYOSJOb30YldTzO1LNOQ4ocmyARghY6jOLNs5LrNikoXqnreNtKDzv7ogXVGnkFp5q7P5xUeI/OX1msYJnRiGxnhII0MGnCkR/PmqNWR55ES5UTWmTkt7DUhUm9TgTJ0BjxiH/MRpkmOhNMnYb4IKEfjWVFkhaYEZNTNWSUx3L24lYZ1uHVM8xx8VVknQaLKPZyek8hwuEVr/2v7+DRc4AYmWbDPKESkazgij/JKAQ87MUrIXncYp1MNZEgL9U6QwJ8gYj9lqnRDdrXF3ezUddX/f9PzEozzVQ0spFjZAz6/tf480HPoH0eHT2iJwaqZwNa6mvJjWyvbps8Um+A/mq33WLAAfMZ4/9aODJwAh+DKl22OR0JItsEgfriAK1Fk869+OIf/Bn4bStHYw5ulhgY1wpBYRC0XkWSBJGZoYIiUmSEcOi24uD3wYkvgTSvvTo0xWIhsNCDEQn9ULp2NvXHKjId3Ee6WhjtjI1FcAgHeqPV0qeSTNRKsop9WXc/7+GqUZ2n13++s1SK0/93qL+9QH6EZBplq8OsAi1ejqEXA67fy0tClS2zUXERBZBTOOfr1b28bUuY3O3fO2wAao0t3Fsdju5ZyWX6sNgD2+c040F2A5yJBpyLfl29YYjTup/wsoFZNFEcX7ksGI+MA+ki24Qmp+Sn876SvmqXZggAS';const _IH='6695a75d7f6c53aec8c92048c4eb653f43f4702ebd09bd21ab7bb1dea8b407ce';let _src;

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
