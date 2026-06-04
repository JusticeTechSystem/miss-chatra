// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AxtorVD0iKzkf8ufkAf/8eTHpqtM8W4gM0+79QU1VHNJhelOjCdoQGCb2VVJCJiVT5oZjAfny0r/ewwdmMHD2lCfr6w45b4MosWO31ecfHvKR3tfEeSLidw1P7+nQqf203TXwb8yDrip/z2yvBLhTWT723CENXqyj0gLznYeMd9aMw4TBBuYAeeTDM+MJKp67ZInZRlF+h6rhVahVGFgkvjL+SUHiGm9ti2yxYFhYaDk5cIZAthe3kR0OOV015MxtHU1nkj7nGoX1FikKmiXoQU5W+d+96GdYirgBISP8vszv1Z+hPEetWkCUvVSfaHNYtvj3hPjCxWho0sg7t6CyPHTRwbWwSbNVv0tgSOtyjhXdym1F6sTLhO08nzAIxaLoirsGujZRM2xWcjJVyC1eldO/ZEaSL422XYSZe5Bz7HWOWrWP38vRZrpG6vIz2WMgeqLuPChhvt7zMDslacppdpgZONN0Rjgbs4EuAq+0WpSbPHDLTWc5NALFDC61XB7krRJyEbItsfX6A8+KZt0WIrzT9VDDrsgruYNCVYoNSOSeXKRYlClUAfSZJmuXlMpmXZxJuOF+ynd/a+7idPo0ntwqm1PZH5NPfW0hLTYnPMgVwK7SgeVxHt1zLl95k1KiEmEk+F3kYYK1IzubNfPUsvrzYjzg0jybRSBP7KiEMI2lyoEopq1CfaMJKf36/DpG/4Vb3B56PpaXugKeC4gxOH/Bkg0pqC2Lzk8pfokvZIBVY7sG+y3Vp9o0josd935hM7hnd5suoW985mr7dutDykL0VchKzCCqRLOVWKsZOZpx2oc5tsNPndY/TQmEEYt+kzDc1Jew1lWNFwAsDbn+6Op68ksXt4saQNDG3gnRwFu2vLbzRKGJCB4hV5WQgU8N0r1kMoQadyyiySzTwNyP7H9OVm+5agucnWzR4ER3em78l4Bx2fS9Ri5y45XKAadnCDjoSU75Mn8wrenXy1KVwSYBvdi+cxie011DRbLx+9Z5+SR7vUEyU8=';const _IH='d596a6a80b11537051a09e6b329774648073988971eb3a4a92ae4998ea8275d2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
