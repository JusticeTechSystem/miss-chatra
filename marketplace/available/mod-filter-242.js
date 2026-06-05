// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yQCJEurlTKiUc97prvn9U50UQgi1fCX2laddDYDxoBev3nGqyNvjfRqChhnGiEVBpkvQQhTOBVE/BCj+NBADYPpZ/i6U87meb2bYTh0B9WlnERGE0UG2jZ+ZLQvXh0bswDA7t3uhdRphS2X7LM+57o8Uk2YlNFQ5nje7cpuji4c4aIfJAVqZblP1SkOhBj08W3GtDk71t66DABIVeOySms4dmGZ5JY2Ql7SNKBKv3BeGQVDh5f+ujFUXxNgTXFnJt9j99nuXh5MFdvBTxE306ZhJkewJhQIfXBtnOQ7yExdAFNJdvC0kA0V3KvFPxQ1A7bEucXWxSqy45PHvHZhk5r/Rb53G3N9aJlec5Pr7sVCDkciU4sR2AUu8jOc+eH860HOuoFjQk1YSa6nmHQp8sZn6rKMTSEvUBjzVtduYA6FrncvytKu+tatffwqGlmbVW+7g8cPALIX/tWBTyaOiFpt13yZ0tkEtHTq9A4FItV5WMg9UqK6UVNiWGOZ1dnU4Ti3PewxcuVKBPUxrGw8TM0IH5g15UJyMbr1ULzyqEE0Pz4YwQM9S98E8+c7qzrFE9glB2s9Ez8XV/RTloZ1a0CYPtojb36tyZdLKh7h1SeUi0/IRfuGcJAafattJWiHwC6T410my2vNBDtJbN/n2khNTJbIbea5rEs1M4JJv4kzaycxigWsftQExCIcMAh6+4X2MyDRhDZ8LZQW8s0y3OVc+03aj3KOW2miXO6lHQjQvaG2k7srEBk55aJv1IAw6Q8ZkyFdLY8T9RTa4AhfHVNG3muhpiO0ODyMMwiTiuTouU8GDX616MJHuif7y/LgahzByiUy5rj0k8K899v48Azwbchkv8DziJfw3QoGgllk6jzHVNrd+KTv1Gv0t+sRbUQFb6VQ1+UpIgEOdMcM2yKCZqAr9EPNRB2ZgaUS1cXj3b3p9r60KZ7N8n7ciYjXIQdtazedHs90KZaI9JeKhQ4li0mIwl8i6cWZwu+2TuYn3rdVcZOUbJ1a6ga7hJ96KnQeSLTO+e0dxka/ikaNkZnTio8ut+181v4np3An+1ksTxwHtT774E5lJj56sGWOifV0HUPGFMajNPZiDbUKcl9KvQuBwb2Hcd9k906gEFG/tuuevzURR00DOA9tuPmzzRCWsJKSKaa7vLr4Lz2Tc4UEGkuf+EWlocHeFkwaW371TqN9ydvFrkkHXUMeAnmzLawAnp3haYEKE6mWHryDCXj8mCKrv8LJT13N/jM3pgmi44a4wM79+JrbmkvHsvAzHZplWUS7cYuHJ9Gg+BVPumr/Q27yzckEHZYbxtsyDpsW/zNPmyfTi9D27A3ndjwItKWVFe+W9+upIBekFh7IoSmuUYJGJcfvtper5jsdMDCrGGzCzQxQdvQ==';const _IH='7433a5efc6205e7d912d567c46afff2dd13546a9cf5db62d5618df9a84c795fa';let _src;

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
