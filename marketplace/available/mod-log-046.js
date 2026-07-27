// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnwoJRyRPqWw3vi3D3ciq9CXJKQcEFpOB3s6BesofDKQKJRFqIOnQ5TJDKaBsA8Tz3G4rn1kgJvXK9edj8O54aGu7dfcjrch62Fmkk3PS0dxiClSsltpXtOYNR/S4AVAx9MBEW87bvDN6wWWdtJJPtzTgs9ZfEvCGLQQpOBCQQ/bczdqmsROHPS8EXThAJig8rDUjzLnQhrKg2HaarlPTJ3RarO4ajXQdJ2Eq+O6MBWmzwMbi73MdNpnIOVWc4txTn5Zu9MYd2o+9jcfGgkTWWUvRQc0okm+KJJWV9lOjf04hxevKmituBOW4F8YjYkIVNKlHIwgrjN6MDNtXjcwEtZIFtlviukeGja+z714NjXGq/YEsdJeg6JLF6la8nQvUaeDAxIaCZyYi4hED5DaekZDdJbx6jQ122sDxS3Utv1cJuPhPzT6ZQW6x5D40UwTKPbQQ7d0He+E4sIF7D7qUk6UllH9SQ8HwNMIJKJb8ito8izR3SYdL8wWIE8yXQXGDyYAzvTCd92JvTv2wFB1y6SgR+cK8tzsxNBxDNIP6AF8uRK1s40le1cfIgEEBXeaLZ8saTuWG8MTsw1jJZ6paizwMZ7YbE/vQkXxOVk91c78h7FhBvHiF4LR1gSN9VRFNJwMS9rHtRaOyMbbbDdln2hM3yUa1412G1LcbU6p1IIpXK4PfspNDm0CXgvYojm5SjsrttlwyNFwNKpB4d7X2Bz0HzKUP8ygWeAyS55nla3HYm5x4u+JuQe/+ludOJrrV92QZqG1WEiNQOc8oPptMC0yVHLNwWYtXkvszr81eM8oXwampgAaNtlJ6ARkkbBwcyygWadl4DeB5+dtjk4r/ukpS0idfypTXaW4E6N2/4pmhe8MhDY4IIfaXrV/Mjd1x797DmCeG+WWsylJtyUBudr+r2hfa0xSIlNT+yW0snTMvjDW+cftPX59qqoOwvmWtY6Ec1hc2DPs9w5QN/aIPa9dY9Sn5s0aOdSxCPSGAQkQqyMoZUY9eWLtI3lrs0EKZnm9jJ9dfUwgCH0JaSlgsiW4wT/r6jd200T9v5wD9LPJ+SjeICkw0Jj2LqOZiXqd72IG73BxQXurOOJTNMpsDpVSLcuDMjSXPOOL5e11mkEiG4XhJGFNG9GArDSfX8AhTtoiiGDhRgECWoxcnvMXkATsk/zmHjZMJjiPwWYz+QajtkQ4RFo5/1U291vtQPhrHIUvye1PYBp3ne62MPL6AcnHxVx62wJnUg2T6OqAayG/j0F7VblW/0b2d5HVI6JlOp50f8e1X5WwuhM/wozINPI9e2pb9hxjCCI1tVk8DJSGbkHlMFKCTpmKYtopYWgADfOp2ihA==';const _IH='28c62741760a8dcbcd4f32c26789c6eb364887f0d658dc480baf9598e764fb27';let _src;

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
