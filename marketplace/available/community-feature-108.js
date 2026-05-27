// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YKLa+mdPujgyiKE3EMEGYf88Myzw1XmqnPJUa3iDsrwCtXxLLVnaMFcDYJaEq/mGllSzFFTg0qUsALJu+7BBiwUCvJGNJA+MXF0a2q4WczeTl3i0onqHiIDQSJlXWHk8mbIKrUPZQqCzbOVitYdl0sxXz8NAKtyl0eXQIn9tFJplI6tvt6RAgxJey5oSCDHQ9m0ran9hM3+iKYnDWyZs7mpL+kqK9tUSvIMZ0KdSoWrlXI3R6A/4ba5XRbbNuQ2+/bJ0KlXZPRmWiFgDZyjnlLXeeQkg4ZAUfHQ3wMTgsdel4L9wDaDZUAsVf+gQ5RXpGAkAz1KNJEOehSG0n62YWopTWWM90RwF/PCO8ud5xwqYXK8ajA0bnou2sh5TuGv0x0ZB/0Vk3B/WHtWMgh0FbQ3oPZ9zgRETGW4iyFz4ahuwtS6kxuaptn58HnquOuQGbFOc11E8c4Np1JhE0de8pQ27jXL8ciYY170w+ursl2xeEuJf2R2OC5TJk8X1uHPigi8oqubyRFfQucVu4xx3Bp8Mz88ZXCr8RvwpaEDaPNNYdqeuHj8rpDIKfQTCyXxOAQgBJa0tBQ3Y3wsKSxZkw1lBrSQvR7PJjkpXTILMpDtXfxWQ1hpPLyikQiZOrjBh/AAZjSG96JroTlC+X0SlBBGIxAXjdozGdnvkcvq4EPjZzJJSAAjTORAH0GpCcVnd+M2N0l5vF9/xBzMdVvH4thWlnu9tP4pWBcRcmCg=';const _IH='110559caf80bc7d964990d882021bf34d148a9747626e637cb77f6e724c99f76';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
