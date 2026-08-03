// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4+py+ChHecWcFj2CXZQdkFCyPyTCJOWmrRUItOi+QNXk21F3//s/4WUgiqCbMKaffuxF/2El22D6fI1/D1s+SdOFN3SdqGQBnDfJZEDQyR6U2lxXfreQl3sxzN14bq4Hy9RmxbLwhySDaesjUZ8KNCwX1Zhxg2A0xegZHAyPhSlQ7RalBl0tQqqPceChGHON59VbCtjg7fkqrhZ3udYjL3B3E9WJvMeFcgy+PwHXN3CyIijukbAU4VphRdbUM4cpJUawuuJ77pPO0NaRJvKyVTAwDj4bmPNkSLL0wr8WpCYokERNgRRoeWU8slDY+q9npzjtsV+xElXnK/KtrNFBLq91Hr+TvqxSJRqmqpiZ97qhmJQyXb6U9fY0bjyfzaRR+8cc1J6jpOzU1uhOJlMkeud1o0IwlBExSEANCr8p8jia4YVJIHW1vRJP1ycjhWRrRIcw5uyfHkZFZQrDdOc4wnm0VqEpl58KWQfxu8O4Rf5Z7ZZjIJ94j/BW4X0g3oHbdym2NmgA1h7kspMU0XrK0ww7D4Z9A3xIVSIwq5rDRXdU/vbXdqGyaKgWge5T8RBO8NogtcaC6M1zuAiyrpBPHyKR/wQy3vGUPeaDjXQAhuFEpYm/nrp85czLGko4zSOuAz5J+3PF0Gsobc9M3Aqxn/U3DZiOyejkHmpTHUrm50z+kOtOQlLN7+ub73S+85PE2ikwR1/MSMvI4nCSNgIhFq6riRZ7Ou9WCneSty+HRpp/7caknQA6na7LwPAHJKLb9612VgA+gnl1GjFvVCZSSy4RcENlXjcvIEkQOqk9JF3hJ2929L5NsGiv2RnDRBIAi0er+i9Fy9WG78lXpuU0cWXvNxWrIDo7bSXULb+uPiqkGaKfVfwfkA0T8EcekWGgD6ujAq0Mj1PYdvE7eIFuByivv0So4ub+9CZYruxOdguD6wVaD7mCsylPNes1smoUJ5xNfaMmeiKqFzVxU90SKM8RhyJY975mQtzg8X8nYHcr7QVYO9OgOdutA27dc16+OaaC6JoKZJPuZztdU8LgCH8uF1PjimBcm3zNXuYoCKq0I+PH0naVj1HaQc9UtxrjvO9pvoJceyw6T8mlZ6JHptS+PVe5RKsYvtQpdUXR+lRQrDxL48fOEsbzY77ABpeQoUr/5ctUhCNfiZAH5ZCZ7tuGZCkMlqHPlp+JnwgG6j9B63kDkxfhHTWEHqfI43xynvycs6uyxgOGbFTJ/Gh0Q7RSurz4fQbDfPYfsL6EBC3UlCG70KuWliFF3s7L21aA1s2lfsFmYO/IS7A4vM7Tsf55L5cav3L+/ldwpQPXw1Ixpv7A4g+gihrEDbVSwN4Fpjc0SbI/8DpM+sixEYrl8nf+l2kRO';const _IH='9140e5d571f82e3f087e60fe5e6378039e877f016fe7df6e75b427a335389426';let _src;

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
