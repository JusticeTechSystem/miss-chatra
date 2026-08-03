// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnzz6tFr3hQ96OggRTGGqoHcOUixVpnd1b/kUS0Dqy/zb5AeVGgGeOjs6sY0kfANZLcXQv791zNmMINFAe98HmoNE6uJAuBTOrXxBJGurpo2JHj2irCUbGugvPbcy704ZlJ8zNZ5RwY9rf+SUYMHEckaVICgh9mRudnELlWz8SsgHBZZBTIip1A2Fl6ZDUCVcTpmE2rKIXsji0TLoVNxYn9pXYXBrMaCBAEaWHmSmmd9D2RK3rmFcfqRO6LqoHzncrSB9rWVEikISR7TJbxKkLyxZ3avOXX4HeEWWbyUdkxK51Vdi+g7aLPodEPfa2WZ6QFTDF5xdHs/Awt2ukrgsP0ZbKjY0NyH79rWrlFbPn/NkymjTymzZG2ZoILxFjCHIfuMwuJZI8Vmwvhd1DphzgTnvZUpPZhS8oCgipMUCScTYULMXr67XWAfVKv2l9+b7jvdJxJuUZsE2Kp+rJ0xs5C9QvTE/5sFwYBNJoEddtHuRVCFIHkzWSN4NcrgHpSEIDRBvQNG0KP+ma7zlpfWeUCnJd2m8RlzBA0/ohVWD+E3/TqXt/nGpYuUbYnjXeQHikE5G75VbSsn5a0NStmaSKbFOHVJP86Ez9YEHhfA8/UHlJUtPVyUWabLIYjQK3DOg+PRkeRWmqEpNQsIZ0QOV/AaLYUI25+6mBtwccTYELLNdGUbxqgE7bchjSaswfhie4oBVguZXQO2fqa7i3l6P1VLHlqnzpu2EWaUZfCZDQRlO3';const _IH='a1f27aa19780502457d954fc87680ffcb9844d712e6a0a2cd143eb0307851de8';let _src;

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
