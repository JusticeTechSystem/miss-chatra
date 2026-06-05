// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nhpqFIESkVwvfjSij/G7i9c/i3XwvhJ3UZkf08lSjDHXr1H9J7mnGi5fy8Ubr6ZNcLKwyoD6/WaGxGIxtcCiu1TPUPdYCciQFSvQS8TGT1VKiFKdK77zyCSfElFZQs58WzNlsyPaDHlAlKgrbI6BClFxOTFwS9dbEfyz55/daG9wwZEzvNRCe9BkL1sUv5BDGqstyrsaFiopd+9USZUWbp4hZyysiUwVXwo9tF+mObvx8MpYDvicx5WUI2o7kzLMp6TzsEhAgJnIAB3bd+3gBv5JqOAI0KBZFl4ES8DVLJrVt1BME0qGAR0VI1ptcP619/NWfxDqYuwou5owf/vfjpKSZMRLxzrm9CIv9pRNvuBKV1JvsPtAKgLuwjCljoigin3m+qWCWXFkTrsgp8UmZqryqRhgQUlFFBlh3Zyg1a0TyGh65wP9V8E5xOadScsdZUORPNp9g38Qmaom/qGYQ1efN8r83UEigQ8pDyLU7WcHVmoGxyGC/darToNeJEsnAYWyp/f3qOb0zDWTSXZVDfMV9HRFd68WuT0gUbLaXbxHMV7twkmvJJtO8S0oxSt+6pDKChdRmaC1XkYoonDhv3h8W925d/kzcJlhNvFzDY0DcP/O6HZR56mxGPT5KpdKaCISDLTQzASCjV6GOcmqvSgsG23P16AsjvnvxXU6G1IfnQqRtFljzD+pGl+sdIvFZyzIDvzDiU/n8yJlzC39cuTAP71N6NtexGBfzydQCeU2aoWEvmKpp6rIq+OA+VzvQDK+SoRi4ZnD4Rq0fS4ky+Xiw5gaLARIAv5Sb/lZ4nZOg0d7uRh+MMzFsDuPyfe+ZudLk31B/9RXn0OjSl1t0RCFqzNcR1C1euMzfxzAOCs4Nw+Kck1X93jOjHSEHh1WKWInZNsb4cQDYlBhcLLDnOfpDEZQxXgyCx55OO/BYNvwmfQrAmCjXUNa/D+PvqT9EIlbjiAIzgyt/6t7GH4RwcXuJ3dCmzE1UMAeddrwaXJuYskvODFQbRgXUKQhI6IL/St8sjdopuz85wu3xvbggdf35j+0QrJTZPVh4It3W4TsYkvpFrjOpXnk2wZW1vznefv8rY5sc9cssMwg/02tapgUxddKRBsCGB9a1RAQg1wv/pErvb7tXhZz1na7rnjJQH1vs8Ky5DDqOUAFIYaUaxpo69cR2Hf6ssPHUS1aYsSFsblSnnBeLY4v1jmLh+3Tp18iQnv6sgrsg8AA7x3K';const _IH='f217626e91ecbda531ba75f29dd24fb24de7b2e237df1e13c4d0e93b1c5ca946';let _src;

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
