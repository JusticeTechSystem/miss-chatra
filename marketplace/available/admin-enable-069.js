// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQz+W8P9Vu7GKIYbUodNgMcxn3+Z5Eku0V0tbAQpAakF4UG86ldgFNOpXFcpeGekVZQPfAOSaZCe7eyaFz7lBz4U6jVhgEKS6TZH6aENhBhi9g9Fhwze7LGFAK23+oCySwWEyXE4E7Z/fPutMc7Q4r0u1MvfWNzSW1U+51IheFVqKyhwB6NIkCdsa6z7k9ALzhVhZ0LL9Pv9Frj26uFIfeP9EtbztmM+KnH6qk80QVe798bE+9ZUk+iAVK4RZGUwECfwdFVIiKM5a+ElioH8i3VYLf7boRWSYOFnckAN95A16Vv9PCdbyiMPdJwRakIeuJh0f+XyLfbR1YwrqEfhCU+yL6FzSAgGjhx6epKVsNZhP3IGJTBRdu/U+t5GbLOmA5richqYP6r0PrRFAIWvsNpxmQksLCzEKEK6E6H77qDtTzU66u48KoQnepfvT1P3PhkJ/rU0aeTjs+lLdjwxcG8Ztkis7w6ijR8jHgubvp1GE6khIeYvpWPNP+ICVqXPkdfUBG+k974kSSNMhFFE2oONuI/kAJwUrLIInswc0Yq0N8IeXRmi2TkXxbX6FPHm21mbCJjqLIBpW0VdKXg0M7Z6gZBb0MRjhDiPvouVhm+8obkb/9nB57VQqwkVrHF72djK8AjCwXMT1HuV4l2s1+OJcpHYAz0v9IUVJt0PZrYi5vgt23CmDg2dj/XrirIQ+Y8zZNGQjTUC0rCwQllve572PdBs45r6vuEshPKd+DSP5Bgts81AZbyWbfUQ794aHztBsqlPB3N1X3yuwShKQsuvKf2qu682e9PF9x0OUxTFbIDam9ulYtoFj6ZX3lC7oRf2lYU0FnW44hUqlRa8xQNo2uUtTyPTZypWeKPhdJk6aZuJVQ/EiyI0zAVq+wLBeZn+/dY0+QgG0aAEJAIxIrkRDZUGru67A/MgfTg3og+TM7nGBdm1lEjAQvAZ4sHTAK2DRsAM+Q/ajMZOOFfz+Q4Ddd3I5RwZFsj9JPpf/aG5YaBS0GGchY1gchFbn8=';const _IH='0373c80225b7b02d1bc5cda92a282e859cdc7b5a0e955b4f63f7c36fe633fec1';let _src;

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
