// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyxnTRe/8iTbEqTgrPUNUFFO1gq+UEJVnCjPSnynRWhl1rocp7YJEa9tH2Bl3Nayn3LfVoF+MG3VvP3mclvsqLNwOHWh1mUOSyN3z+W3dx3yJkkCMuqZ1Hx8Jb4s8avOyxTKBsfo34S1gkJSjMkui8JxXa+HNxh1K5sEYgKGycVtApOXV7aAToCxOZB3KDO6gr+WBQghBSb/6kxcsMEItcrY+OGc5hXG+4BW+fZt7GOhvc88icX+0iiZF7k67j8LPjSMFcn++VE7ABrnU1L6K/5y9OLOh94JbHvtl7qT9YJlbFLa5V1BH0Hsv6ln3CrseXKrkH59a/wdGBSzpIJby4Plt2GvF5inJpKomuBmsQBLP8OUIsG5oI8GWkJVQ2hNw0bzetb1rMQo5wsvmDaimjrzHh3qL1gCihdoWXXMDite0w2PXsRGPt5vSD6XDD3+OJQEQnFzN2VyMv10pL8JWkAP1wHafJIOFWUHe3XY7fBkVVtab8F9E7n6xmJam0+OzB50S1fQAiQwSanzGE17OGwIf/s7g6vmPRP7i/kVCTJdJYK2uTKH66OYwtN3mNafSS749BwAB36HxS+bcKnMXK7OYfb7W2BaI3WeV6RyZmgqlbWcd3EhgXTGhKw/bxUiley65Cc+q1zfXvuJ65RBe7M3NIKoSbsuBpTvmc2qEdXkFWmbbbjqfdxyhHqiIkvQUkoP9DovYBLKQPWXEDivo+iyYmkG2MobfyOC4xe2yhoYjcggswiNVAiIzZsbn0vsbe0H4lhlJQ97qPlV0WtIEsaZhfjiiv0U/fbWIaBMY1KAmyJDb9hb6M/7gCGXCo6JpQImcuVpSyzlObLXa9K/YpiAViFeLYAJI3euMGcaFZyff+yEPNfMxHCvGaAkqg/8ccU+nZKI+6r4V1YfQCVBClGfoD+eST3X7QmXgdMEayugCcvFl7QJEiXddDc72n2dKyqP6pGwV1dNz2Wa7iJHd4QThYxYKdcGd/oOerPHo0VYU68V3S4KIsa9lYgj1gsCi/WEqio=';const _IH='03cd200ee58e78c9e05ffd4891d583e0fb29974a6ef8259351fc9b5661c5f01b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
