// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSl35I9j+YxWnCQFQqbisxcYgtbgdOjYTb4jtMf8TNcvsKBGRo88CPAWkh4Et/oInqy7qjrqOUh+cMLZv+c9fQuD2rU3ua8h5sfShJYld6C9sQePNu4hABlxzaW3FROVZ+t0pT8vHIDKJ6UclHFbF+43yG8gJihnWlsostxrxoZy8QAdURKTqKWhsDJRjt9Dk+gsmAZlYwjxO6WBF4JNgOv5wpIuvUHb6sfDpNgvjw6ecYFXpwVs4uXsxt8DerND5Uuy30aDj54huH0ZqekMBl5Uhh6v0Umkp98IfLzQ1lbk0I6AimhlszyjXqifO9YQiCG2ch+/Y6W2ni4M8vlA9TmulTJgFzZJNrfvs4vbJYMZgnNgokb3VZEn5nluAljJjyqaWq8uhdgvCDTivo/zucBKpFeeMZYm9N6dxb21zCrFr2CT+ZRkWTTYY+NLu+REaSYL0VxeXp9kwZAuJrmsyyyvfzixj8FTBctTrusMY6am84mfDsXe0ZH5j+Xi1yl5YRi0rzpEVcdk/s2z4AVK8yPTxPMcPKvf13O+/kLV0Pr/nLcIHKDLV5+7ZRMcBn9h/ygPPnIuB80ZOXT6g9lL9He560dp6WBjwKvSJ86+KbyZChkqFxwt+shoLFFmNLrO/DUfaXMryUDT0tQ8H9LrklFkkYc4D2XHO3FlfzGv63VmSrIK/9eY0Iw5djcV3hZvikptVYBpTvFhTnQVVSEWp8WR7j851maJUxXTSC42Lp1';const _IH='a5182e8ba24ca0995caae404434f4feb13b46aa1301611eff6417e4eda76a692';let _src;

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
