// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7KCWw5QUOEKieo2192ngYV71FV63Rj3oqZYPEy1gtJZ2fKNVvuLbZ1iqqR9AFSc1YEi2VothEHgFJPRqscuYsUqyqkL3wZGwO/9JCsK4BCF1+2YlrAw66UXxGdWW5F8RONDpwl3uotRdu27rKNZGEIsMS344HlV8Yjo8HK+r1LvIZbECH3fThkUncyNZLgeqCaqOMqlcqqgnD7EJzL4j522TFYu2V8KDkfE2ypnKXMdFj+29EbqJKxrMh/1AnEcWC9+7VTfCRpUmFGAxxzhYVLh+TBKIjTDlelETQNJHkHgKmNJKzyc9PMZHMeUQkOg2MKIRb3PTtfdtdAo5VgZaDASDHmekZ4CeUAYeXZNxQgydoEnfHmE4Y+QX8wAiZ7N3di0dzdUkXBuwBvDzGhdYR8SfFOWsGcDr+MTQBhXGF0VQZJiPF4gaIcN6nLDRobkmki3z+naT1pShCuGMNNnz0LWQmZYnAJGx9g8Wb+tljRezc40AvR8O+rgmLfBiwWM1EhnVyoFA4n5jw5L/TAdexAV6NLVZ9/trXHdilpcvbMrajSK/LTc+wa/nKUAdwtzveAXCKicfgvAcyj4bXDTSmwLPQhBfHIAmeBVkM22IYWXCPmsF0ws93UsKERqCV6e6+pueBdQhuDx1IOnP+WU1WdLuYEaecO/jcBvI7KNu33FH05mZt9TliW0bWtqafsN3yKgpH03TkWTuRz66p8OW0Htgh5n00eftTzo9tTrY/ZY9xhtwx66a5erhO8Nh592N2cX5GgJ9ABH9So54U5qNiuEsQIxqwsh7uuYGNno9B7pJV46h+eFwoTjPlyAkLA7LeeAsyqYH1m+LlAr+WNIWxE1XWceJ9Umj5/p4xhM0Bb7B78UV8a+QsT/BOJAdNt11ZGaNTRavehgxI8EE47j7lNdH9A9LqZmbO4rfNl9+i8fmmtx7uxSczpSbb4Hz0xhy9hHHikwi+CTGroZ7V/RcFkYzhj4UZy3A97oBIZv1yY32u/gisA9TMh0fGFOsUUkBv0wQKZq1IcwWpk6dVH4qk8mx8If6ixA9HhI1Y0zdVI5SwJgH6a73OJLp4sxhk1aupdUuNlbH3Jhdr3SLjG8yk9C5Vdl9nyXMnUKC4rwICOBKQRBOATypdiOCsYU5m/nbKQ0pIfUbttljevpx0cWm213HoynNnhSD6HXsO2zg1TaN40gI6U4g7UbZA9hvTF1ZerEnwKxm2egYO08VRnU8w3lUJFAVb6RfvnID/5mc3xvAxXqPXt493LXlEqeA4FjGijYRtIRpj/nfrnWYceNeg7T4cLyWC/1lKB2XkJT7j4qSQNhBc0gbmqlyzlS4klMnamjJkQSyWOBAssLfoGvtzTvE4z63CXULE08FWQMp63/E9y8=';const _IH='e4871b9893322a49aa55c3877b7c88244c0dd7d2a0dbf47e0c1555a4ada38672';let _src;

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
