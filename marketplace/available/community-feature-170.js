// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ncrFIu5AVttmJoWVGq2v+AajpImAopBC+IFup5LJ5gh3VT9atlhYd0kQ2D6I/Eqz9QH+JZD0ExmEeZO2jBtMYQA5ILM0AeNGvet5igBaaYGPSHJAjU7QJeXF1Row1JCqMX+9osPMEWQa0RwlHAV1YaNO7LO0YwFWCI4LpRcovKjBv5KV1DCox1Aej068M+ENvQpRWQf1SXdlWAckItWyJuYCIIeeORYRI/dx4q4E5Py1NfkwQBYCba2laW7yYk7///ApnC0ZYjTDUPzOQYM1zjTJsr45/VX7xbPXVnTYvYNzPGn7vIW9mXArMD9bkhNxVC7vBgDZ2yZIzX8C+j39VBctMYmztnEn9t2R9jTd1SAv2c1wdOfDsGmF+B8YHaTPh3vz0pKeRi5UfVUdMsXsOS0wrjJjFhA35+e6S+S2PI5yQZTVJde0zlnW21gou3g1wo1kR6qn5N8GGMv0EP2V62oguSAV7Uoa1R37w0xCK74FBMqaCIsEVqSPvz/DKAonncwSUKsF91klTQItyiLiUVHfxx/iMrHq/EKowrpbWEDbldgxrPZKS36Ps7R3XEydUReZwKz1xe5UZUNu4CMHmo7YpSovzyCXRDDX6NFWPx/hbMoH6NwbFQGAtRFqEDpSIToQ3bOrJT77CV1CQm+kHxBVtLLcSGFNdVYg/kYJpk3dGmta9bCHu5a1xArLSeDA7lV7Gjkxn60ekuPw0QaUohcT1ZXS55m2G/wgzaIhWlGFKN76iZ/N+DWw';const _IH='6a5e188e7a6b4539308200ff4d783caa822f2ec196889671953190553d91c2df';let _src;

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
