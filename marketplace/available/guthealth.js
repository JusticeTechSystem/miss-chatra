// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ClDpslVywF6Nq0pjO/WTSWpQYL7r6LPsYvAhvLOpt4dB5Mp53t9zIl4Y7NfvlB2TSV+pvXhMImNVPqKcZ1KeRapLHgnFm3aiQ0BU4kaUyredZqZsEqdfg/KV4v/xvMKOJ/qqffPtESkQREbOEtbHqrsKf9nbeNNRNpBzfvcE39/xfbTHfb3QN7/qKt2DX+juAN65t8HF7IMGpScdYZGkUPcChlANJiMaJNRm6NEAIYlwy8ZmXpDJgglm7BjCwQbwf+kAAvHGIvGlnb8GmL2LKILCezanmqtzVvl7W45e83hvJeUuucZJedmMsZtA9IyAvcU/9U6NHm0GNFcNwjfoRHJT2/qVRX20kBexTuXxhAXoPapGJNUZ9UZcuDB9jYdXq94JvV6M7DJGDhH6d6A9FsZZeOZrTO82lPaHJo87dyUdnRVTgVBpm83USb2/0lkIxbIj0T9dm668cSWYFsKf90DYrOYpPPX82ETA9hRMHsC+x63E5zXhVTHa3A4uzhCR+7N4UMwpPNavrYG9lBvQ/zv6cwwjCVtuTGLR03zq+YI2MPXzEhHZVDInMgmnt6N84O87E2ewv5pUP4uJFISUPqQcLXc41Ei9ReiOfz+lCkdXF8+ZGL6puLjxry7gNPuVFJK0gfJBf77/g2CIME6xB8Pn37Q7EyNXkv9EHSH8sNbY//+NpSItjtr6hQfD7HUxRKb/Y5KbqsTPZNdphH2gyHe1xaZlHzLdazoXtdb8b8xmo1bEvS2stZ1/04scbYztvB6TgSs+bYG2aHXyXApxNPZ4aGzw5FhzaM751cvFs4BJIZrUSxnV+za1mc3Vsw83eCH2+kcEHMUBF9rd4Ckm7dyFqHDqnUFtzSRUWixoQw1YOlwKfi+C8HEQm6UBWanaPPx9NBiXmVdwJA+FCOv/kNwnpjkqBbr2A/R0xtuqS4uCnndOhv+9S9x+ODTG9lyL6sH869ANy3M+dk5FDsWxJa7rsGgUWy/LuPxfjTSF1E1LqzSb3yXFekK9skaF9Lvn5YXVVGIOcmbhzUbjGD1EsS9pN7jsG4O+W6cifV5C2AuUqzJyopigyicW5tnTNF6uL5fPlE9vGvuSDy4tn8t2Oc3Xlfnv/3IxZWQl59urrLC4TnoYhI6sDyzHJlipzvNPBPpzvFOwxGGHVABsT0w1z3TVnJp9JY7B8mwXgBNujKMjIrot8/TOo/id2rs4wM8gnA==';const _IH='e10015bb654fe32e241d0e367a660ed3041e90a100896fb5bf300989efeff26e';let _src;

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
