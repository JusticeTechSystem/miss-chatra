// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M52npYVO9gTakin2Ld+gCy8O1M71U1XY1W310+PvX+WIT7/s5Mro7IVQ81dCKetEtX085Pxz1K34DIaCUNpbERZuutzCvoLp1L6YFZow8kgRtIGlodiKvkbVIsmo4Ksk9ulLBgubX/6nmtYy+ZnKvL5qoUZrU1sY0y8kBBOtGvQLJOwYvXUuAWIjKZNyijZEx9f6tisx67gM00do5vZ6RY8p63I6iDR1yUtkNV6zgY+nHRjKS5QB/+j6LaReE0qE+Pnfx9QK//ZTOu0JdeBgzK7juIU6PzV3PLVwKM5uMvVyZnqnnBRWwESmmsl5s7RJOkGpCkZeoxKwQRJdf46lm3aNKWBENCCwNV2KB0beE7BiWeJbjcaos8A3RsSnl79PLwmAVzaZceFs5yzCBa9Rwr6VAJC9Mnzv1VSoLAN/3r2DOY6OEuOLdGni4I5eARxOuduzMAotisW+AOkRCaWaZ8d3/I0qThMvI16doteuTiNvJIHk07wlXIBSsjC2tfe+76VZ1TXaOpiZFveF/w68jtA33ifRr8NyVndI7Z+142rJAEei0eYqkP4NeEMRjqn/1HdDxwKNcIEOI62EGkFGDi7bZ+5FpuVPsG4qE3/xQeADSh67Y6nHrGfQ+3AmFQKr10WgkPLV6k4gypqFxjPu2tFn1BgnTCaUmP3UbeCniiOnRz+ueP+nQ/9gAYZ3JFvuzvKVHamlcWOSI4sHpz2XW6M8Wmj/pDsZ8KV5JxbflyKr4YtefDaLD+UHKVFRNq7U91PFn/9g3F3udk4J6YjJtIIM8lgKzqjPXA5go/+py2C3qiRra4DJnA8LRXDaSDpsdh2xC5Vm+g33n2ZowLin1VRc19AYtG/3EN9NWGfRczI3q4oWKAV12czzaaPN647M2mE11mO1Eagrm6SunRQ+KbV1IPp+HCaLR5W2v2pHFlCOR6boKb4TKbdm1XsWSXst7/aYT2W8klpJB6owUHYUVRUwM/QxTq/GqFuZroe9l8bifo8YiXnAJof+9UdvOxnlUsbQvw==';const _IH='a3d595ce879d52681e08993dc65b9886d9625260406d64c1be5df03a295dff68';let _src;

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
