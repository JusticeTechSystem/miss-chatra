// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yzPIKLdYdZm4wlFfTmYic9BawfdeARPIMPSH5ve4WOfGZJdyqq0vwYmQ1c/SYu3InvvNpvaQMdpnYjkfjS5x/sMHxQeN0daUktPn9/vEi+6UNLmGHqtKumO3Oh7zHEkd4REVHxoHzeGqYVchDflgqv8Ke1eLfC6c3YpN5+vbOF1KwIcjj1xYnfraMczYM4GXHpYH1CECbQ1HisjODcN3/6sN7aQSaKoKj7BP2OpJRWTHG4aiGUMpKlyl0D95xSqYOO1pXYFzpAy4DEpUG6gh1G0WyKhZqrRefBR2jXPoqJx0wm2KVZ/qi/UZwHxe9YVVapLcFOoxXHI/zke6Q9ArkwHKabwBQmpswssT34KnPsavt8kj15hDkQd0oQVVvRzjv7SmML9hbBxA+8vt6S2b4fp5q+Sq/AiJRlIIRA4iIQ4dabDWElQ47IUVDbY6qyaJ6arYmW3bdhHypflkEbo2acVX+sS1YH/PHtu6PEoy+KaKxaSfhgjnZsvTMlcPHYgd3JBT/hmnx6bhJJfOMv9TEoDepjRN0Xq7vAmcHl1hPklxaL33061eqS5NKfIWJ7XHmg76nhs4QAj6i6xsjVALNfwd23vv3R21RU4kHXq+o05+Fp8HN90zM+0KvXGrCSjxWcgk3+Xerip6SgW6+f3xc2Zx/tVGxj9o4+1eO2Wa0yxuFZzSq9ZJnGAs4oK//glp6sLJgyMFqkBzNwRhdWQbbHDSZf7PGIVK+Fa1yme6IEHW13QBWtQxmXPpGOQwQm+rt+aSOq5bpnL3mzdGhq4uAcVyfOVmmxyd5bFLx6eIBdectikmYcn1TtJNIDR9yBdIqg+p8lqcl9f6cv7dGE1Et4RZZamG2tVjqC+qhZrp992r93xvrfRmJXo0o7gUehUFomNIwNyn7/EjifhQ8nGaj/6j/NHEqlXbaDkS/U6FVF6ujKcf41YSoAnszv2CxTXPnJLt/DVFqMIzl8CpT3dqfT7yIqbj+sFrEBn2lqpIg2HvXFI0lGKHr2hLZaX0';const _IH='7f15a67265af6c3512d02ba12791b94be3f947b7573bc9590b11a2ac074333af';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
