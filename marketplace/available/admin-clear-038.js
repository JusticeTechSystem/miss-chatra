// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5NaYKQKzz+Fz1RD+VQpI+nY5dLclpQAidL3ZHG7YoA3dlwzye3N6DvNUlTfegHOJrZ+3YNSZd59WoplQR+DcU4PLcr7xDE8PT3LPKJzUswtaUcp7i0Ob/NbS416IiZBvwdcd9Uaz0VC5gEGh6dS+sTN8rp4P/bzTPDEzerDLOJvjFwPE7wvNWOM/x8pfFuUnkJI63vwpXu6h1SjFRtrXC6NmTXvoQyLenG/T2X/HSgF/HkOtFoW7XS99ych60/WP0czAFn1104ig7TXGsVa+gJ4Xmao53LGvpwxO4AbMeGHIWugGQhzYwlZ+oWdzhPaIl28UdHZpJffdUm0UdZqHIJ61yoYXsUUTu+ornSWKMNUu9mq/3urWzRWLSBr0oJbKz26CNhjcd9qIv1kRwP0DzDXCqTsl6tvaxmUpOHijBGszdPlt3GSQp4i9K/kymAtcKIakvzg1RIsk0okxqNcTPEo7OV8MuctTfnoxPdLKfylV9TMbAR2ukCDUhVTrAi2gCB3LyyrZ0yIfP+fo2MCtOF5hyLPlAt5OvDkuzSOYrUxdYSgVxEuziiPk7mmpHKEGfOyM0YWoJgvFKDtjCGksz9CbkqWoaO1AMtVJvbGojC3hvkVK8CBB788IcPCvir0kese7RK5ki+627Y1O9IQTw4zSNne9qfF/nBJlexHTeS4E7zBCYFQgPkx2Q6E/1thV+V+KuAi+XrpfXnW6D8l8alwqvrE/oWiiTPH7LCCWllxkEbcGToC4UW+HP0Z66/ORs/NUwM2JCue7wOZk9VVRZBGtZNiQpnwjEMqlPp5Wtr//aLiBa1EN82i8LztNckDjPo6fqGjfMf5vkHYUi/WlCYktdxp5JaYlJphBswZJ4XV4cM9ANdpewniTG/R2mAJv9sJZPqgHcbhoP3fR19nbJap9KrxSZJAXIjH8vVheW3D+CfROaM+QtGGzGI2ZrFu7YxEeBp5EMYudnnXkUV0Vy0ea4/5dZVyI2CgGk8fqQdygGpCQWV3';const _IH='51c6006abc81d232432ea8a2238056771de5c093d0560df70b8ce62cf0d20eb1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
