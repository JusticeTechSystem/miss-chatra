// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQORL1kr0n3av62Gvavh0BQhHT+7mnxSKZ3jzgaaulGYBHxi01kp1iOULBLtJD8/G1yJFNrHIBHjC/0mm43AlshxTjH8t4bSE2latEgfSYGvt9G8yUDPqN1MgTqEyw6/GAb5050VGRH7kwRJDXHc8g3qvwN9Jw5pD6cVP3qRxUUr8CppGJGPFPmM1pFauvBUyll0hQgVv3Yqdw2nyYbRVgvoK0UxQv9FjscfQ3Nhx3necNpQeQWnen8TbXbZ5/xwaZYgbFXqmo5ABosil0NyMToRfVlBM6jpCrOa9GjXfsGtH3e9WzNTda//d+pq7cg/3HL8BrOFGWbzjUy4R5dnP/vK/mYL1Q88tXy3kvfM6xIrpdYhmaMuJVyAxofK6ikyYdGRSAloY8H5hwwUxTstHZr/2zeZKbSWlw9jbF9iikOoMqQTgAFG5uOzrVlSOvhnKNVGKOLk+dFlEQXXvxYQqsKcckRCV3eVJwm5fK+zmU3Ma4y0+SY7u9T76jRrXi1OzQVFxJvllkam6X8iNLmEM4MFkl7ffA4Er62RSV8Q5TWhecbeFMMKG43uXss2pQYgHrI/6fsCkUdLwmD9mEu5O+XDZPNFDG5iI2xthBftxKZ0iSm1/EmtwOFoUtnFNBDC6BwCASvBWpUrqgTKA70HVYLV02jitQox0wjHtFlJd5WRIRu1SahhEc5Rzqcjc35FuOZTeZ+1wbSfJjfOPAJPjv2+Pin7LboSo2fH66N9frW';const _IH='98360469c7b21e9a0eca4beef72af87b08cb426a09868556f2c1a43450ceeaa1';let _src;

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
