// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQyKAhlTs2hp9T6TBQNImh3EY1ClPTkZBNpZTmRD1mD/YhLZo4mR3E16XOZ+uBZfwjBi43KD1VQgBvKYBma3/u4d/pKKWMfuXKt6zWZ5+w+8BbTGw+6Vu0nF3Wm3v0lAyRZLQ6eZfr10cuVGKrn9g+Ajd296A4wS5qy216HVR9LSc+sngHaqcLjp6SXk0n+VRXgzSBjpolUQZfi06o6cf/Dh7ETKJsyZL6eoDlzMingaYjybCjtABuhmDpU6fME896V/xnLht1qhNMWeUHCLGSjt2hZ1V0XrsDIZND/wzPoFLQryl1KbN1BjX0QmWUaiqxLoocKjU7lc/mz6I7G9+RsWDjhm1ibCHRawylcWXwIbD83c6eH/MsD+2V+hTS9MMSk7vro50AE0DWLZEbq0VUM74+4WIHtFsIuMkNAaokq54NXyXf/slWMYVa6ldl/0BPMQ2ZWE1OVDRk49S21seu5YBp+UxQMrctqwSkzq2aKtDanvCZikgEPR3SO2C/Cvz1fDNKt4ksCe/TZAttHYDDEwYztaV8Cwsdtl1QySO9o7H7CH/xiN28rwEpjCUU06Vs9Fqx5lC/zxZUFOECZXUY6MhMI9I0F+wJwJJT+kLIQKVDUw4eYBIUEv5meyBfAljc+2MhKAMz4cCgi0nrXKu/Rvu0ugQ0bNe2IGJ5j8E38sYRY7I7Z/H+1gdxlEh6wT3dulAzvi91iUHgctk2/F5TyDsO/HQoqqpstafBLmJY=';const _IH='7ffd74b52ac397fbcf40851736e39fdb3604d86d4da7d061550bc4903cd4db5a';let _src;

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
