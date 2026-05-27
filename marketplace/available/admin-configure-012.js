// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tXkNu66EnomcxsSDo1kdNYWY6mwGIECVppB/781MVGDOgdsgITCmRduC34CiyTkT7lvawMTElycEvo/ZmUdAyXxPROSwVEIhimuHEcgXNRys4TYjD8igo8W93kd2LAUImfBMYEwrhOV451PmGB728h+gKS2GwKrI2zYUk/oapF1dZ+382zY17HAIfirN5yD5YWrQuy8J4mBv1ieB0oLxq0yTtHslo4fIDbE3ucHPJPKBVgPbNsIYWeL+Z55iyzgHyq+dIDP4RyfKMjEUpw9xqkuQdg+ZsnF9xDmVLLviHK/9227ORs10XezwzslG01IsNSkAcHM5STw1wkuRfAoB1P3ha2paR9rYncsVqQErEKaLzeJuYAPZUqnlQwzyP08YlZ0soTrGIHtGjbgRsUf/M5JY1nt1DJCAvMjTc1wNFPI8aatqjvFEiSNW3SdvfHz3WFDYo1SAdxdqBAFfZOYNE+rEjxoda9X5n7/2ua+2JZWUIVhPWHdH2vzfbg7Eacoqc1OpK8rwxZ1XILXdoJsnf+q+K387LUTjH59CwEChdr3RQWJ/+eNloRKXmu22W7ZPAr2+SPwVuygoYbBM/8ZRDWcPPJgW21c5djR18kamE2hfPlMlXb2LNzbJb4ammrUqC8YFzZzHbuo4wWT4QjnftqJcsFklfmQsiptZ5IXE3gim3GOxCNd22GUGmnl1R1DYg8mwzUE2EMIFP178ddksNIGKZgltvE0kg/i1YnSQn1haA8iO6b3ILBRFfBJ/dq93J5dtBS8YSXe+Ob3S8VqIWC8/3sFdbfaZrWqUklIJ9949SKZ++Go+oiWdIw0jIMIUe22R+PWfOeosOYw10NlhNXZo7WutoiY5uVdjAsxGISWcRhEeEHUQFceIPAabh7ubb31WLkTF8pGue79PxUNziiqs2732Tj7Ja4V5nDLHbR6zIutVt192WDXiScKL4i8LItvvUh4DH5g8YjHBZV1aOWuIEHqz086OjE52+Ui09BOLfVHHTXAqMG5qXG6T/ziLCumXA8Qd5OFMvJCdxX2lZtDD';const _IH='12ae9aa21ed9af95ed8962a07fe7d89c0bb336c0f4f32bf3014cc1ad7a589992';let _src;

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
