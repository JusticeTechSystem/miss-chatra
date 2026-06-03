// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z5c0rFbBqegHwBATGqOXI+lhr2F1V3x7XMLP0gK/IdIi6H54TaK5FoeOt0ym/uD99Dpg0XAWpDQDsFMS6GLwtaXKSUDE0ATfTDVuNVeHJ+YcEtsrj8cT2diaCTR4cpAK+gvVzbAkX2wq9kSq3MW41zEVxkRM42lbpbSQarELRQ0m0S4572GuZPMfc/l1vh6bRFTtbGsbhq2rZgy+ZE9WoxAzg9cZhLq1w5TX2fFyAApgckrpJecHBD4hCOASIEtWsQqmfrBUwAdH1TEMHQ68nfEzJxlP0Ged+yBdaDKxarUx/xzmWCoUkfFom0XTlYQUSqeVaY4Yho/RzksHDKFaqgHnZitbPAPsG6y5VNCeHJtaLvob2KSs27dHAmY+hyTtECGFqJEQv2djbQFkOorS6kMbHTQTv4VUY+lv1xWLlcIWMIcw1Z7MUn13jtPBQJsU01WyQ6tEL9KYijS65xxwCk434fpjG0uM39tw6WlExrBB1D9xOeej11AFzvUXuuAx1mygWI5GBQrrEkZ8w2dXiEJdf8+4ytiJGljKKGI5cvq+vWQE6gF7xFsapKNbDXgebuMVjvSF8PjYXjdkMMFznkI7g4Ra5zbYDORX9cwoySSluHOITsKaGtA6QTZppkjl7yeQMGmZYzP1ll/Hx3LBkAuzwjXV5QLg4Dmso0bYGQqrCo/aAlhglMWmU3FFnv3LYsmH/b6VLJ8Hl1TrjRAnSeD+Fs3SfUIckWWcz0SdHXVjTbL+tKyYOOGz7et7OH7Z1U7wvM3Fcyh9XEkI5if743kmZ24OHyhLrpL1hOWkfU+rjw/g2tRC3vvCZBXUvl5X04zSZdt/IYtgIU175piJKKoqjsebRGuE3wduYDXTOFqSffRVHqqKnVfHq3as2SLZCkZxwOaryyzTMLjpvPbAxNghlWlKIVulCzKVv+pEz3DFmb71ofTZAXEJ/z7FDipTlcsSOvZy/320CZDZ6I+uRp3XLe9Jb9wOyDI5NHmQ3kKVPTRm1InwyRNfRh6+sewBlwmsv9VkOvDzzZ6gWo+/HYk0Nj/FjsLq7PyVETWj';const _IH='8316d68092fa3f81a7259442adab83f37c5dc5e5e9fae6cf7ba7dd3b03692f64';let _src;

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
