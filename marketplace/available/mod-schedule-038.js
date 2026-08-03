// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZ4V0GRElpUCJopPJqd4btD7LJosbhQdvSuO+rC9XQ56NanGKJUzbzDVInyWN7rmz9GqE1JcZKYy7GSpMMjYho7Xczpr4m8RuG+fDxNAjrlX7wvubraKwxJJm+mx2/+s3AjGsMACw3RZl4+XTBKbL6u6HQevsc9VkMYwge/oEEVK78F21DYXEHwB2oVCuVBWcVdiC0WsNb1+i8wKKbkSnLAPiuoERW/7YwH6AfADk5Q2zfzREjOjcBAIpIrW2WqcQO/eAL+wadcNqWVd0GG0t9vDvAeW7U2qbIHExHgqkp2VDmoIq+GvWIcUtRv9SJEsZ0q8iJDk07f86IKKzVBTVusgkJ9kQEyzc8GaJGaTuxHLlWCheDQuP9c3ttD1VotWFUo2C7gVOzPjivAgOyBmPh+PpWeit4JVj7mGBPWYRSfyChI2vkMxZkXM/VLmQKDiABWd5moHROWRghfeGm30bQdNcl9czwlRQ6L48KgO9KOJSh9JS1T4tpgwHlRPWU5sMPwQ6t8+bwOJnbnf2PEl9rVz4PxvktG+uNIbP0VL5t3dJXPgpZjPsEXBSV53DHCoAlv4noqE3Pj98lxa4G+qrNXkdP2bnS/9GiDbNRtBlg6NVwuhaqTMT72q5uDzARo2SLPYu4obZYnQatRX5xPzyPo4kMRZ5GE/WUhOxjUHFz1rSjrRYPRAReeb6j+ux/8TYtLAFiieWXVBf363gaQ6gQSc6BTJuzPu1Z+i6GhWLig9ZcNDGVaqxhctA3VVWcnhZr5v5gIDnF2DX9338nFrJjGLQs5E+xMXCOoexnhi1Mdo90pt7qHqEG5ZmoiShzeeTdG2LtdgEXf+4uT9l1CLdtwFDqc/g+tP8cIdeacgBJuFhXWFYAYdp7F0c+5AXhFqbtEEGGJrhlYqRzbaxLlbuJONWZrOuBRrcdPhC3o9p9/Oj0VQE87EQsKpJHDwWmCzGmG2ok57EjDPXTLQXSZ/lMwGb4cvRw4iGTiOx3dMxacOTKoJZSKQw+2ffZQbJNChRgYfq+8LCP3qJwTkn3HAP8I3WJOuOgW0uj0WrpAIVRPQlVOS/R2ngKCijVU0PmJB7dZJaNW60+euUcFrsgFiqIugtotboHfwb14UbLcjF29d51UlqmzZpGh+v1EwaRucWgl3FMp/s1mKqz92q+ovDcvST3at1ixwWnua1365DIeRBDrz4TekPCEw/ztYvN+M5cnzbFG88DrKg4mZwJmIuMZao4jhYgU/q+HpFSSjKPLjClK3IFUdEn7YyHoSX7lPfVki0Yn+SRgGx4idEgEXJmLZ1xtogNMm5vj+9ifHLzNlG66/dRPzd1f+wPleg24d+p3e0nHiOuW0eG0qbwgAai5Q9KOEgwrwqz8rr/1h90PcHj8PLXoMlqpRVtuBLRViSTdMFr';const _IH='73258711ea56ec96e970857888c8940fba9210abd81e44a1310c09a5c9b895c4';let _src;

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
