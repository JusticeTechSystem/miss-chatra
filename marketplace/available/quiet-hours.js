// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hO3UTqASXIwWlFlUzRoJ8egEsfXiSVQVQjI8WelbxKLdSOkkJG0JZ5dcYxAJuiEwknHqS/a5DQKdXRyREAKGc9esMaDbQIVDqDS/mdM0kinVTHap7uPeFcGTAL3duTfcmnbJbY7btIX/KJ8vOdtm1DsOzv+7nFa5z+bBo5jFniZCWxYGj88Mla/Ek0tXRHANR2op470MCOKfMbxiVKFlJEVfFO2B5iExoe0TO3xFTE9T63qELMGUCYsdYqRQOuSdx7VECyMYTcTjxkEVS18PuCeT0CkjCRhuPBJFQ8RV5E/RYnvRzrriN6zQy0F82JniCxypWEXWwn2MJ2Xn1b9cRWKZSE0Prkd1p+5HqwYGCHoXWzL32v6zPZF3OKU4qGr+UniJrTYHIi8qazs8vzyfF6Fh2xjshc+chXDc8/e5KS4nlMIBeqKBrnl1sSyq4ET/I3eBiFTkh+HtbwzhgF+pxTfsxLhLmH4iD2eNQtmkcyLJOhP4k5pueo2VPwG+fzvWMfGjZAjTCO4XFhOECXgJI++PhbpiqTfaNm0l6KZapJrzk8j2wv3D0cvETI9nY3Ba9J2LESCSxjuXkLyHKncpWWExZRSsQywdHWxzr/gRlCBqucI4hvlTW4eV6VcHzcLOEt4K6RbxeDMmmYAIGAAI/wW+PutIrOSUWqMAWkQTCU5UVKwHDZySW1p5OgswejYxYQeEsKq6PAYKsld2esKGVQTkXZ+Vo2VwHwG+QZ1xApiTCvAX/acrWxTXQgTbdjwXRyfwKipXrP7JA8CoMaFW6jqUyi+PN86rvA1IAI7l2gi2vVAHiZUOjkS+WZ+LoSlNuIBaluBFvucda0dSFChO+h8OVyLZ6VNWD4vGqhdpmjbS8lXnOwlpd6CwZswVbrMuKBo1+kn9oosI0pe3030Md+G62r9+lccnkE+/a/SLF9ifWFxK2Al9DIN1rZPQoVC4AUaFo+z8Cjfz+1G5z0S6A2638Ikc9cGDHcu2zT7wXUr5Xr29jv85jqR/ikKtuC4fCvg/Z9UwDVSLR4SiWUKgIqbEyGngH33SD7lAvas5LQIq3D3MS9EABULGhBJ9J9hDLibRfm+2WGyocUwZoFeI/lnqJiO/p39BCciRnh/9gpz5zmOaS0jA3zuAcvdqslEgzGr+W1NtwMOslOaXJ/CjtvXqj+dSH09Q7it1XYRKBCiuYkdnjQiJtMdNSpnqblVgkVkf+8YJAClfOE8jnW/ZSKXoJOYGNFEfn6ChgoEShWmT1bWHaTHn9YrwK+SjxKFu9Wx1wGF8r5YEeIjvea1x6ZuV6nqPP3QTAVlvcC3UfhlzNdFvMHNz1WFldLMzmOcIHxoOyJ6XI5xCYRbpYpVY18ydx3WZncmpm+UEE7btNam9GJIaX74xhhISI7i6uEPWJcDpSUQLQ6d8smD11z1u+4Y6vGk/zoz4PlnvchXBln+WvurOfi0zfbT8Wi8X+PHq/kaCz6ZS3kVWE/aOehTWRcaVefffoaYKbRrS51RePHAhHKjmw+UUAZVPO4SNrOIsfLQInBFoQUe7/Va5Kq6S8djMVPmJj+JlL2fF3/qh6eNEcYXzJeRNfIyPXpRIOjO93efxxQWNv2KqOQsA8569QmfkZqAxrS1WCFjjlhZbaKXKNdZAudBH8UBxMvib3pwZ562yD21GLRnfNbtJsH3K0iBo4/8t8mkGhjKMYuqII7Pb';const _IH='4c66a15e8f0c7ab185e95d372d1eb4531277b9bd01e5de5e9fc00e18b00e1163';let _src;

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
