// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kAGNDf6p12cTOd6gKnyg7pIsbRJgH344aps4RfEr2x4mma9AUJfumcWmXs/k+8mkzbvJTWhRWE1uDOOLLW1k0Gy+9nabv2BKntGKL6oYGKZHN88Mms3MBlnCQsCPuohG2TZcZhyg7ap2V6FhRBP+HJwlSUasbtM0OkNK+Ff7pqiLwXZIx3nxLn+xcuF+GGymtoglT7IvpvBPldPZx0b6hgNiuW5x4x64lHXLKnyAOjKvtbFM1iTgE3nYp5geqAc5Dt5jQPtf1n3E6ptpH3tB6tdvnmrII6B3lQvVH5zMGjpHgjweePH+b4hFhfgfdclZrqbiMUrKpTvq0LCVikW7WAwr83W5UZ6r1h//02wnn7Yto0nzl7DVYmT2VoREiZV/zvfmW+uR4byusGJXTQE0W0U2PyfmMv0LmCeAtoHKDFbaWiZ1yTEK2rtCnyvePCtl02ncE/Tr9lfi9Tg3xh06RnisF3mf8baETaEhOwn2NXSk4xbQIrd3maj/ZzG0lgBiXcReJ9tR8yXx8xc3YzssIX3SZidpmlXjGPGUtu8votO/DcJWFLNSeIP3Oo8yXxwLQMe9ccla+LFXjwgJrIOK59sDlNGOfQQnOHrlbcrIRlkseY8pRUJte3K+npzEt7hBnBsQkBEVatv/2npK67EWSL568r2yAtDjI99Cs4waZD5wiot1nt6ii0s4KMA9DSXZDSPkbHPL6ekwon5qteIxODeDxbqVXzRMs2B44i/3d1IOc4V5PDkP38yQy7sg0Yhp0pP7oSb4PDGIVny2JAGltwLYYJWUVZvQqsECRQC3thwLu81x7Kny/AvunF+3DwLC1pAxpftfaQqoU4mzengO3V4SsZ8nIfJwldQzzfJirjOLUmAZEQ4bh8ECkU+aWwB1hKSPtD45zg6HXj0e3PDf8WQGUuHI9hwNVjEnFtqqDtrCy4kdkg464Gp8UqSHZK+aS0mGtM2Nx48CGrHQYaQ1bnHBiWySz2zn9kAExUr9LS0ZiXeCGw31Zd2a';const _IH='8035c15fac4d4e9a4443435e0cbe381859a9d198baba1563d7183b0130f2925c';let _src;

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
