// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMG4uIjZH1k1SGFsNouq/QaaAYppeao7HCtyemtZcJdqhldtUFE/0JU8S1iZHecgOrnduOgAKGKIPq9GlHnc4amdBksH7UvPCpoXPmEtjifKVWkcld/BmFwNdWl+N03dPvH3RSDYh6yVdjBXRpAKR8P5tc4CLdDe7JUfboqEKhOLODxOzT/GKR0L5kgJdTuHFPJOiEwIM1kcmveOSzSU+xhu/22mN/rs3/DiTBcKPN9unXa3r0tkPZinjUEHaBiMWIKGoNoLx3eiv5uFXUGFSWjhkwmxCtQpOFdTcaaOC9HOgX7YB2a+XuDDrsq+808eecWmLoVPID83jr1oCIqqHj8YuK1G+8jRYc0KcEb/tPPR3IwrWjWdqKDcRagp9Pose6ALl9njJ/XKfBnKYMMBYwBN8lvg4xQ+zJyuSyhhVjJ9zf83BH2XRP1UVYtluFk5DmL+nOtTt6zR+CBVbarDp2JTjsIuvRmn1zirAKZdiArxo37Qhpttc1hiZEfKUi9o8nlXaZE6UU0LPL9oH4/FdmoZ0ip4krRBj+ywMS0wZbaXJdV3ZAguZXHYHwu08slMSCAjJdmg898DvUWd0TpbTVAxCIbbJbhNdxpXAJCfrE8ebBYtkWVOIz+1ByibSywjsA1PNdExpYzfbHui9DHgob6MqnWLdXjqdKYJZpWsOvsgQwp3q7hzvUZGkQj40tRxIwGotU6JiV1UAMB6L+2FfjsvsC7Ss5F6pFMNi91VE+LU3hGLoGk9+tKNmI2CsFzqqnWJHw/fhTGJKFyFZXSd2fmfkoIfmu96GcQnR/08h0zLjXxRUnWuKJAbKz/g3O7PGqqZOWbxE26X+Y+nBo5sFGftqk7IA9scUFwQMzWzVsjtIKsFVk1tj/n8u+8UDkvLVN3bX477qbacaynmZVNW64G2QhT4Qt8vjyUhOaozvLW1314liZeLMz6tNffynbQkkk8zR3RfIZslN0OyEv7lI8fwh2mc49KSrEGfFqN+2kBQBsKz8FxCN6b4WRWcdMKOpK69kWkjWe5bHFdI0aA2SYqSxroyuNCFzzSi0Uw0Pg3Q0c9XlrFLxaVm8KlSa1NVbq3b5rVF4V1WOr6mBxi/yF+0RHBR4CL6M0v3bU8ucCqqGVzT24QTRd5Z13VjMEgy3WXNup0AW0NIfv4ES3NV4ZWXoNEporyTpwlQtjZk3YNpR5ylAqcdCgN8YAD4WKvuFs';const _IH='bab76d4acf4f11979e3ea5317615ce2c5f5e379138ffdc0d271edd8afdecafa5';let _src;

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
