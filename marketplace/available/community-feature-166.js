// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRnhK6IjTCCtm4H/Llcq2m9/SFmivwnCqJu4B2g7Wlv6+Qwskncuf1+ZVRyUuQ4TJkjhMBGy+ezK2/O+j94BDpnn51C6yfZODBXHfug4e1zKprjN/29xmuqUrNYZqv6regb2AzTmHd/FEMIBJRSoFMdlQJ/Q382s33Ph1ruzlHPpZRbcwXjTCs0I9UlOUtUcdZTI7WXILFxhKuY0jIsC6d0Z51i3JOLu2q1w3c5aTLbcFZjQnuaYEx5WVDyzW08orhr6/yVNIdNHxmk97dA7Y/0OOFziNucwF9z4LaSD50B3yuy/3WE1z9eOeNlgyGjcsrIyPCrVwYwTeq0ByH3GumxpRSaj35A/80gCs9rnASVJPa6BdwQPYxpqkt/eQYC5Dseo9CCxgfwKNLWoDxYc/YwbyrIcI7xL4+wLmdCqKe+Jhd0nfyG0S+CmBGbHViD1HWu+9xUV5iG4kY+lORj8C3wVDdOH+ssQFB/R2UH7xMvSuTXPt5S6rBYpaP2pBNy9ofKndlT539gzkQiAEFboZUdw5nRiTGHhviGFi4jQSNXEDhPj7ymFkom0LFFokQzRYl2BcbSwe39qXovq1XLzBRxjoOsqAS50kz2kxaf/JkDHCFHVZ7aNGmxj40FOXggI/6MRbIt7XGeYjko/m1MH4cFcJ0SIFE9wbsACHS1sNshTyoN1kHx8rmkRXPO1gxuU+m4HiveyGJDr0lA5fFiESnqPmR89niYXzE=';const _IH='5609926153add5031e3f0f414eea884cae17f311a5817b18828cba3171788a37';let _src;

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
