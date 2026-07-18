// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSiIyd3o6yMMCSlZfh1R9qGMl3wqYjkvyIhz8AdPcx4aQmO6thB1jAqimVr9fW49IQpIy0UDQAz7eQtKkT3tJuTreEOQMEKRlrqdzPyYF+Gkxpya59uPWEoQcY5JKBScXKS1itQw+vb6af0iLoPVPLDtLB527Vfj0KuAbbGd35BQAuOG7GIvPuVT9HKhJdxdnn7YDUuCX0mQaFiHYi+/kBmSE/dKThNGQ3GPz3Hqqo+lVw0OlIFFtTktr4h3PGeustZIHzsodX0tWMQZ6pMLoTthlcnBWNKZdJhV+vKdSfpJlRKUeBLN0ImRFMPZXMWpqltywjjFh5/VYTcvxnNhFqr7Awg7A3yZB7DLVjQARUvKxKdbq6ltcRlwshy/CltxsVcg9Y9us6mfEuxseeyPV+yT7LcUN9NN1zk2781te0CuwAAtr5kycqV6IlYF93izcYU6zP0MBbdyTYATHk5QEylxybIQ4isbVu5w6JuO4IZNKgLdDDGhMHglBy3h08U0nLKguKJzgQfrGVcMaMUqP0SU4s638Lp1RhFq95/Nde+zDLJ4UuaTE9mVxs+1L33AjN513xsZo+UusG+uYbmjdk6xuGTgr1Noo6bPWaoY4SEp/k7N3JgGwMW1V/93rvmk2kGuasMRP4fKFoJoq7KSEvNjOIStNyAlzACDqlBbup3dtiARJVl3uwqOAfwUcUk+HhGHyrg7k6pvUPKeOj3zjZdioq0fACepsbBp5Jyf8i/0al/IQXlHVpaOjk=';const _IH='8ed88a51f88a25921f08be8fa59f9da79103b20ee432415733b63fce66fcfdd8';let _src;

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
