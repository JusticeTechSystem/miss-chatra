// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvbxqj1hNzNPYD+Jm1WxXpdKkMIftRm8BtANxzlWA+7PuvwpsfeoyYzVhf+H/tiv2Vd4BjL4SeXuEpFaHkKfOJXLfyCCgVk5OCTkZtPSMGnjQJovlt9lJNASt3/9NiMQOrpe5+wFPW4KIVpYb8nQ5fZTov1oxjFEBfnROUEPPXGJCe6t5+15THW3JhojRQYNHV3HJ3m9Hntgeq/rW5CPTTA1u5uTzExdxzG7ECFI1WGuH2T240jzt/2ryNi34rxJX4xH2+q8p0a0sGvlvbRKUJWSEcP2twPy00Si/egCklFYVNfF6hztEb9YFLgczPNHqZLSp2fO9c6iQQEEwqUSF7ezZEEAMkNN7C/ZN32cTOPNfs8420KB2QsIxYALRVfKYLlhuRkBGAMr00KGEV5aSxwM6jJ0NBwowN5/Xez63EIPqygBC53WzHZZ/cpdV07lpACAvu6+txlVnbhNMw7W0YEttLqJuZW1Esuuap1YY7EyTNMp2IpafQODF2qa/T6bmtWM8SsCflYR6dXJ616/g+VvOSVYGdG+wp2L/IxXFvhMY4Masqgoqqb1xx28s1bXpAGq9dq0jc4UmJsNPq55UaStUaybQr4PFfBfDEFuZO6PuLMsvITTXNCmlN/4tOZvlRbqMAvl5PWV9PDTdtGI8D0grI6OkbOE5aEI31TO38+irSqTOVv5I9SZpDMsw=';const _IH='6adf9a938ea842e2ad16313996979a1adc5e67f1a7aa757de9a007555dd51aa7';let _src;

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
