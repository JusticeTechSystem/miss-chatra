// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQzMsQ7fw3ZCBqrf7n/nIWnUsxfhL1orDW37pLNUuNY2ix2nooY4uiMdsec+gT5R0RseKNYIsfpTQsMkSdO3rK0WEfJOms90Gxpgidvh+8GxTV0wKntz0FiCLQAF7g9bNHC03qGIY7WhKMH8vM6cq8SWBMhuti+wAllS1Z3FBO/txkyzEBrreV9TETvIPqtDeTuKV73aE+rjK/+/eEG8FGmniBxzilueJQx/Mo+2NlatujaJqgWlByXE2yAQk6M0oR0osEJhxt5FoRukRe/9BNV8F59/3i7xWrg2YGd0pkUcblu6noKR3duC59s9rI0pAw6zpWlddtO62LJULJnstS3xdVBVf0uoZQSlnjRJjZhALJObaGuXes8azyBeqbLUrXn4NDKeHz2w1hY+YRApM6i8xPwb2t2Kzxd5JmUhDFUZMIadn9GqYpUtwAgrs+c8JhA6PmPxVkc5KosoNSDs1AIEI8hHgYTn7wztcUtirwL2yP4KHR1c9IiX39YhC5bJpoer9j7tPC/aNPzN4pZFDDHR8Uv08fGqu+MRfK0wW8sW4LywqbM4MRenk8UiFZ7ZCAzkMqDct1vwDuFuaT59QegQpUBAeYzLMNAkY/b+1TYgph5G/Omo3XqBS3iabxcdukCF7JzCEfUE7h6QRBDebM5e4UsN/npx1RW/GdvTITM5jc8EZeHkKNGb03IKENnPbeakyms6mFKhZLWI1Md+w2toTNjQpuMbHVoplki/7CnSG0OXevm+ehHlYU/oB8t1xJvAgHewJLMmRsqtwIlkxO7z8p+SUeWYyKwW+P8/MdBD21uj3F9umMfxlEMdVB6YjMtEctzCXDl8Q6kWAJ7lOgGvzS2fezcmwCnyuWg6unZsLIMPEfN1L2LasnrfvrbasxZ+NYdo8j3bXANDgjDAH2iG/COZSwIsx2RPW/3RyFPAPGhhde05QiSCAKo3ZQ3Z2ykh0nbB8ShlHBJ9wuNFsJMIkjQUbpHPdVG7DWIIdcYXWFJ3r0j2oKctSH832lxdLNAwxg';const _IH='3957d006d66cb24d41be8e0d5e1175083d447d0d6b3a0cf442b84dcef1fd5cca';let _src;

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
