// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gB3aDIqeI1R5rkK8V7ZUHBHssvkRf7eovA84SN0zOfq6/An+2ACGv6+t7hGK4KMzQxO7SZz3sB8L9pcH0fgU8qxUeT0CoruP+tNxH1Yf31kw1DfHo1qBtPv3/2wxz2vvA9rHDGLC63js6zPTeLtSvET+1gSffnKMHV1aT775Qr11jZmengFis+eoe9WMNI/k9XPy7EXJ0slEOJAz+O/uxrL4r0rLhkKYmfRUTneItuLHijo2vxsK7IPx6gVRskhB50Sw4x+jWXjKO1jtRlNLMFpuDZn2mHAnIviXNsqnzEqZqPkoTaEfnoehqLrkeFUJ0lgAgwODKoXvnnPrMiRWSoqeNymeD353fauzJnU76r8cwIZoajnEGtcVXHXFfx82F+ApvtoojFzMFqmEkEspEZl/60v26JlGIsxc57Uhnuw7Acp5Zeh9iwjLYKZOaGT//R3E6bsh7xZ4y2Mv61CZruZyNmaHwcCcDcHlkenf2NHZCxDgj/IwxCeJCDGNGVYMVIY7FJEaTNC4iIHB6Y31W/YZP86idCPVFkqqnmiw+rAOCY/RruO5BjQDBKSdMe+ksZonnvWheTj220/BPjUkM24eZUUS4hhPQwBkzxPGbTYld5jiKzmcjLBPcw734NB09NkYuIi6eXfLsLuGIlk4uk74fWynF4kRq6en4qIFFeTshZ5K+laJfyfmyHVPD1gw4N6mZnrgs8oGuk7WUpNutIMz5hsEgQsoC0oy7QPgteQ1kAn3YG/2WGH0kJsrhxilF5aw/7BDkMd8qE4wq8iYl8/UaduuKmbr0V7BxL/Dom24PxYE0BAc16BCcVmKfb4GycFyJu+impA75ToueZV8L4evua6ealqn9ra2hhQYL4vgLuiXBwudsuHz1KEBWSMuJGPK64CRnhlXjnGEv73AXD+u0QGeh4/d8ut1FLMA8XimB9epTTZvE/DieF5iWse26leS24/ShC8+BPa74yPPH+VAT1Xlu7fjdGFIIg==';const _IH='9fee3566675d075c47691ad50c753aa9810cb3159dd5a654715bfb77b91eff1a';let _src;

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
