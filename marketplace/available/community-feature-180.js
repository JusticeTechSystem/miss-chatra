// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQW3+5RlaOfg9BCwNtsh7FQxtvLYHdHnhzAsWKxcL97FcTj+hyub19mCeYtrJR/JGInl72CIfvDZGnV7U6KJ1E1QSJc2mWPCPxMQAOMg9wvxCwe/bwUrP+BIWPoprMdZaUl7sw8W84yNVDaiZDVt85KBfxELuC6w/hqXP5ghwsjIu4Gmy4QvEyq3BqsygCCDZPcfExCNHK0ai4TAR7CYQsU7oAYBypkAmeuUMAanoqbsK1SFQyc2uIzMC02i9bDVhIKwDeoPnD58LWUHZjG+DoAfY7j2qAtXnHJjEoBwhJV4mhPXQVa6g5SUxW3YSBVi0VwIa+jnAkHFhoQH0HJ+K6dFdMHPTqidUGu3CbuCeJSUOMtbK3HlH4zbcLFyiwSSsym+onp9PFInYB3Gb/nCSDtmGCO1i602hpa/AOpz4Kc64k3r/DnZ/1yUaDWea4I9BcxUsIj7QwdUFENnraezFDRpYSWiKEuWRdkMffbGVQLBUxIVg9msXdbeYi3DOPJ4WIE+c6T1eOEidlxLwka4poDT8+a7uc1WGeN1AkLjZVfpV7h/yvF2Rfy48+GClAzIh+CtnxAkxLjsyaF2T5BQci9SW9Gc7wGdpnuKHMQvh5r8i9piXnHRXBwrlNIp2j8Xgvcn3vN2wV8w7j/M5XJTLi2tNUKkRLrrMRz+skSAEmjGztMhpPzBI5ZrEmIB93f1CTSa6089YCP1yRLVOIJ9LjpXXYDGp0aD6DS5+L1dCF7Rq45F5cIrZqkqgM=';const _IH='27175c8a4c1e73be65045a9293d928062810f4f07b7d0acfddd2c6e784b468d0';let _src;

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
