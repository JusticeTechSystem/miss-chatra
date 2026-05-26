// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5oxDqblGIkkUtuiC91kn33fHLzwCAdHXgSa3XaExFeBp/kB9+0+nVXsjhrQld+1sJkI85IB3MR/jQQ3GU6vP3H0G1mrAWTanY3eu74vKL8a2MkHDEv/j529w9vvpUBImsooRTnr/FOMdMX95AcJapf0g/eA2nXUHW0hRPsHCxagOXtIFZQJG14vUr/7IFg8UaYFvDPS/vAd1G7JFa8IC1dIpH8/lIr7uWTkxRLV6P4wju2UPOJDjqL/NjNq1cubNkH+A4NiZQvBADMBfEfAmhP3/GraIXfXZbRqH1euyb3E+tCLrms3IPdKqPxXDXdssC37ABpM/wI5Y88UnHW00gpo6JB0bee9rEvYRivFL/+XdQx37CwowPU66u2ZV8lPGkra9MT7c9WgiOHb5ncntTWea2iFRps5oOTU+e9ghkylovCbOncAJfuvJC5UJobs1WtxzMOD8hzkBgL/DgNOT3M31qzOHVxuQmJTkV2ldE0MyBFv4kzVj6GCtHpR8ASRkqzyGZV/q9/z6rt3tS3EiQfpWu2u9KwZ15xJKxtbuK7n5B3+1gXhJcB2/HDAFqhpAREfnMVfcF+QsmuNcXzpZ2RToR44//r+fUoqrTHr3m976Qf4bBdRoCj/p7uVTwEOSK606IYKD/hgDc5nKpeTHuaWnOSFiyl+sQ8nphTqFmR+wFvb0BuBxlHpz6jR9vOizFOZ3rf4/cxORq/A1AYqVto6hjdIFqfUbsCOuNNckIW1Ot6EP5GZpM0RsUXxkjxF2ie4YdfMalmWw/Rrd+1CI07jk+AANU3ZmpGTFrWFMhE1yjBgdn+EjNVn2W/go1DITFMrVJA8At0xxP4w7gj9rCuOIjj/Dw8pCNtfhVrQwt+HU8GeR0qUh516cSc3St/5yIhL8jz3gLUDPq9MNuHMiUtGNCRKinKIPq6GtVAhvRqeRKK5UWS3H18GqPgmHsb4uJ9GToQoxX0zAev9HP/SOA31DScoReDAdsWvcSqh2n8azzYEUg+pRPpLntj7WjZgnXq/9ie9C177odxee3N7LDlfUBQkcaa7yJ3ki4Aovb+b67e18RsFUld3UPaH03S6sasCmMfH3bNlRBDGV4KAR5vgIpOshnDehq9b5AQs0qA18rnBlpFwx/2xywR0OfzFzMMyu/O7ShlE6WHZ00zzneAXDU1oOmS0jFZGzJ4mQZz7CkeU3EqwAutnopSut9/Hj+v4+M6MRyQnphf0lWxdSX2gnb8igPf7JFRnjk0vOS3yozR92z63j87/zO5eT+WTRmwCGXlhmRP4XAMFG39JS1Z3qYAYg1sO4acyiXqUV4TyaQnUp8HzDPHNqbXmzz67/GqIvjdCAnturVTgt9o6nxlRxrI3n3EBz1BS3jgwDkSu4KrqOOlHfCQcgq/iImNqWfN50UYj9S5Oh+V6hoFbr43Scqjgr3NhTvXvrBiBfkzDemGZxb5HnPGEwTN9hoL6aaX1hzCMLH2t9bP7mZoroil6n58WrV5gVHRwWZRvpl2yFIYmtq1yQmqT/h8KDLFWWrjlr6oRBAoxSlJqpfKnAJpnQhcrK8iLK0tVWUNYLfaUzixz50nMxeTY7yKFJJf89ebzEiAqAPZDu1qLWJ3VpWC8F0CTjumqYtrJNzsTU6+k9M5T4Ij+tNceUfUk60tEwxkp4bkSeWwm+3om/H63M5Yqpb0Ch5CgwoN1GKhHo76m/Y0q3jtlr5mNZSEFruDgR97YI1k3ma0A9q4+j60DVRvqM9wH6qn6n9JsfkRdIZfYwdTlpzNoC8NSq1nYTNP+jtJEu6Fk=';const _IH='f71b1efc6a82ec63c17f553bef199bfd7917cf7090466cc786a85cb5eee161df';let _src;

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
