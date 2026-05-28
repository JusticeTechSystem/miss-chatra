// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wr3Sy6SgrzSN2uFn5lRTGOVY7OhLCY1UCDhAImodeUcN62rd37VPlsgu2uK7sUyrFOEE43wnvDqSvFmlsFivwMR2jERgF5QWaSTeT+er2Bf1J/g8pMk/2GVmonAwYuZfoHQRmRth07xM4jiSCGGFr+QJ7rM9onyB5PAKevh2K3knGrc+ZypOp+uadvRvv2aZZnsk54JcUN12c6UzSzMu6BLOc0pXwD3lR0VkEFJ/skM7x/tv9ITkVyZVOb41MgwZzIUmfQ8eVgnNYzhLoBLOctrGfioMgEfhG9uBr6/9zbFnrUUVe/U+7mQrCLIYE+mQFcmoiE8BacnUk/LQKBTPftRdpg4tYOIz8pnHtNzgNHXRroZAFhwKPGDqTT7EYXzKMglIlVBQEMRNfa9wUQ8BzDoVNCX2f0DPE71d1FrXw9lYZ29il8SRnjtUalstQj8CcjcLJinQFPCgXkC4Lt8JlC0de5rq6c91IB2C11Yy63YBIRNHI1hyk+AqNdBpUaS5cKnF48QDCOkULMLgZcmoeGtf/Otj3efK1Jzfb2dSQqCs9Pwm4e820gJtHIIoknRlrb0Xyu0oQ0SrIrkMZ/roXG2PwqoYnAaAh19odXcChQlDmq0OHEwuGQB2JHmdDEfoNvav5cvGLIjR01PwXO0L2Z7RwVZyySe9vbX/VNUr7wzef1bNv4KztCsvvCbw58UPDBz0g/D3Ipfw4FafUUUxjnqaMnsFEr17CSSiGVsrnqulyeKgmZaL3PbYu9IwNHv7ckoGqri6FcmpjZ+Q8iWcyOsIhFktjiiSKr70wqR9/HkXbmd+L8+tBrGgzsnBKflCqvyy43GJt8HYuoYz9AKyTPi7CGzKPzz7nunEPlPFjm/ngTtJGdsydavmp0RHRp4NEoDAedQtVskFZF0UT7Ukucgr+fV6cXv6rXlKPXKlucV0zPpKrSQKVioa2G2g8uf1ScVFVWlR02Hsw5GAYoYZbzg6c/K9bxbZ/7EHU5HkUK15ItYQqwae7NS4uXOQncn39mCg9F8CQ4g5OtDiW7KN8+/vXbimrGdTii+iVmS9DUhhgJViOogW4YLSiy91v2g8IfBGGDteftHPOrjq+0UHtsEy78JgdjIIF2M4HsGTA69E5w98XVzjkFQu5xuXrOT2WlhTjie59WuyvgSCv5+NXeUS/pnBnscnw3Wdu2yIL9h4ZOlQhuHXEvI1Gknw3nXIBVbZTvj2Kz+2x9FIQfeTz/NR';const _IH='a167bbb3f8c9d5b0822488bb521edb715777d9707c6ff270df1f42751187d147';let _src;

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
