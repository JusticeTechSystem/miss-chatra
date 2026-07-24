// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSVRG+gGO6IEbFZctk/BIFoI5VQEy7WipODZKewxdR7+cQXn8daFiWC+waUf3rUcLSWsO3sr5tGDrftqwjujZ6D6wnp2Uxdbers20DXbc08lxV1IiZTr72uV9fSyceDGAXpV7VZ2KaKxglZj7gb1VMxK6NbTKqtWfqgjfT74lnn1+PtiECqKd3oc26OguwuKjJapVQXioT9lbTPCfazRvMIQKUo/Pny9DhPlRSV2UwrDjJleXqktchIxaNrJrYLRCScxnViyhmvHzqZ1Yuy+PuPx4+AJWwF5/fmuPo9zzxbpXicUYINmLDbmgklUeZ1iwv9eSuyom7dkOPyM5iDt2QaqgWygaSA1jsw0OgWkEtGtPPATIMalpm/moZgqcIUAl/XYXq6qOKH40I5X8uo1X8TsN949ElxFauWbGbDzptAxNF6AprkhZlf2F9oPoQpId1/YWhGSPUGgIYYCTRHUCpx7vG2q1+cEXYlqWdSCdIkH0AfmooWjnlH02knTx6thknA3sU4qnSlrVyADe4SAZxnOkrNpiobuxAoKZ1PjCB/nRe+X1NXn9n5yQajDKGyGRf7QNV9buaLh3E8jpGbj72o4HRELysXgLj+3Eev3hMXEDhPSdDUITlWv0VfWON/T7S7Oe/tO79yzyq7o67Vvbo4NSryMfcT4GYGcOuiZzwaLb+hShO51LEvff9zpB9xw3/WvQSzxIS7e9Qxnxjju3YXUmTF6AocSSchu4LwYUlaUY2YJe1QMA==';const _IH='0d51ce5641ba2cb62dfa3f485aff734403d7e729f0b3b88763e194df7abaafaa';let _src;

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
