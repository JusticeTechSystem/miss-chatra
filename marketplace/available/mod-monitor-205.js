// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q2kVjUT509aMqOC5WrmNE/hvw/3RJFR3WCD49lfdl64X5zorrfk1pBCWQFtXsEBNMAkXo9rgzPRkIDCLJ5bVVn9eqyMNIvXvqqbJqpaNrnXjO2kxK7Rzn0K2gL4DsWnaGViWlgG290Zfx4+GxinEagBUgEPpc441/aHhgcLMW7E656cwE8pu1z1P8Bp7d3NG6GP7KpliekQonjDnL2b5dUwZr4MTSMopvYgJn5vrIsW+xJ/kbYhnGHegSBc/jQ6lVrFuuYtsnVwvmc5EzzPuH/467PDfavf1oUVkbs0eFX1xty04K2eLemsIkb29Cxmg9+rQH5f8aEosndZaWhP7mNcSoxn5RLGRDTFtTlEnYjiX7AURi5lJqkluDeY/Vl42f9cF3XJ2i2j2oWXoG4dzqBNFwskfJNHKim2/L5yE9U4vSzKtuQmb0ywJQq4dmvnWCGWUrpFQqzKD0I+UKjEvxrTG1HSF5HT/8USauOixb+va7+t4y3YWPElXK3Wfo884jl7jEDwig9sMiZS4SmntBxhaSd1HvopxWhxi0IAEUS1C/GhHF3+DcGTydHzZVp2xHPi+Zu6f82psWy3CPeCqRW7MVlf+XSyVVyWhY8qhF90ztt+1M604OqTPsrxk8VelBbTmN0579yIeqvk9o+KZLYAmqtjkBV8lPc+Y7vrV94ICMyaZ9Ogl99XFJDqoE/RNuLgDglP1VNY4qCinDAXffqCMAClSkqPuqMfHs1l13xkSvOL5175JNPPhMKdtoxoxWisuRIxK4xtqTch7mIr7HkYBhqAPbqmeIeElrn7EsMKNGJiZUoqeIJ3C8QkJ07iqG/i2caDb9c8KUmtE3oAgvLWcaN3MiXVJPz7uDsQSnne/2g06gBLr8rR9c2xC4DuYK7aIJ8gTTEo6RjUseMIiG2jsnbnz5WmVtF4Q7CCSvKjA0Xas40kmTSgIYuP5ucXDZCXH0MJhbMF/3L8TzkUSBP+MjTfDMEOrzVekiF+NCFc3tpHbh85fpjzVIKjcgvXL2E9Q2Am5kmfWa7DFAqXF6klS2ZqC3Xz3ffFSeV+Yp8DKJ3/UMNpEnCTpDO4A6jx6FfXeNN3o4xtY5zgHFVH/W4O3KuUuv231SWLu8Bz9SOgwBj9ItdjxU9JaongBxdlZLaqXDSX4cqnDFlhUNJwAgmJazl1VheFGyBE+A9YSDV6czxe+mQAkQfQvYN9CKlNQpNb2/Kn+ZhUy3e1qdY6IIqG9plldcSVSA8gVwwKZXLmey3RJWiUW2Kwh1F3ZLPF/w939gbMvSD91ZjvBKY2EQM4gBOXOqifIv9wF4JEDeAyCwFfktkiDR2yo6QnMSxKREHRqpzsbW6YeCWUNVUxPPOb8siMhbTVzcYZsfuCS9hSkv92QZu5BBw5TcAx86uH2lKI=';const _IH='205d12cd496270dc8acb24312e1bfa32de252d38d742e4d58b7f89dd8344484c';let _src;

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
