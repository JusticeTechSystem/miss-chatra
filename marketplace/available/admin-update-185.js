// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTi5dlpOVgok3ZOm2cVffrwPW8+ICiNdyFjT2W5uTeuVn7Sl7bYbixWv7m02rXBlGtQXllHrRo8qd4EXTzTSIgBRb00nbg8L0ZBd3wI27h+B2/LZ/hLtgOafXb99g0jR4OLnsM7SQ1BDRq8J3FOSTJhUXYz8RW6WhEWDOkA3qv/FCyPUnbCHEBDe75uv9BxQa+vq/mFSRq8GHO0znZJ83NAeKDgFrFNoqiePeFbIVCh5WWGdKOxdhAE3CfA1TJEqYTlWzP+26mN+PAGGdEIsx4trr/0jD0nmpE8f/FT3luLIyjLNfvkvmqThxYjzG9MHlFnV+EVPsaG9QrWZNULoPt4st6SAa47Q7eYW9T8AGAa53dLt9WGyTkX3pWpRIOq0SCTU4UFwW4Lk05griTvkAOhAC/AubJazvYe9mY2WofJVgc74GUP0WQWuWcRkfo5qRMAuqKDIXVTMyqCBUgXLmVYHp0cm2KopER5iHwdNAVUuTLi2ntYV2l0Mp7zHkMND7d7i+KV9BtGCb+w6/iN69w909qwVxE5gp3w07ZlG6mK+dXduQlsEeGIphMxEYr7piGJ2AA/68HO6zANYAliZJbUDlaxpPX/aR8295A82uL83lNE1xed3EkWdE4TYWG0U7R2ZLC3htsqWrrXOqy0jkWfMyinJb6G5M1Eii6SFxUTi8PO1niRQqXjofmhdV/51FKvOtcbNMm6fFxXHe0ajoFTULTHgkBJPplthSdNCJJPZ9qg+cO9AOC5F3hfTqUU4NqfakJHSycUV78YOmZ9J/4CnSZ6d4UgErU8A78iCFOWiXQhbOP3QOCZGpKpW1PYvEvdJfNDpfwg3iezHuxudXWaKeVZW2rVrP16Vn38CNmhfkqgPCYs2rDgHcT7s8/o5t2cyzTYtnJtWzM1yBGYiVOcg2DhZSpIM9qcqUHV8H4QAlJZ5GBKEuXfRAOTK34ki+qTF0UDG2t9D7b47VoaQ0O+iOyKR23esog1TEwevPVdju7b0+EZUVs5jVil30YVL49U';const _IH='6edbde86439b43378dc65c2350a2b615520241600f91a587c97b510b4d37ef45';let _src;

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
