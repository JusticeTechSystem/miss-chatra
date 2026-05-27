// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H/uXYqfinYfEYnj/4KMmO8n0DY3vT9knWtHNbiSevXHQpmXfZGTu37QYDZagq8Ed6U297r5YGTNl3IanZGybe2qsDUjlByaOY8Tn/wf4rL3ISnoB3eP2BJAYJwcgX7kB0mD96PdCBNWaITJzm0EzhLEeS8jwpnej2mwh/9Gz7LHbrk8qGNR50QUHXiCtZ6G0LgwLuF0zjxgmvx/mTOOkM5r5Ahgmx67pbr72sFK1ICN4Lohp8fjocpZzxn2FlQ8oEkQpqfNUONelmc0hRV/uhbFOE0MOGjYchyB2myfl18JM5b9BQwiIAE03iRmhQL19Nd2YLyiLFRSOk/+lbXPTmnO35xZsOoNlxQhBIcQPUOJ5nQet9HxYQ+FodYvJqvCGwBkzApfe6eExp4lcq6m2azF5DOoFG8hJdQf3c+uJGXmoqubs3OmLvGSPtilDe0vN8jdO/FIiqIKVCxGM6jun2WavTQHndXBHsYq/YHdlFa0fP+mumT6cJCxtbGL5b8bCxNeHALPNqfDnScpd56qs/Hvxb/PHRsglmpKiYY4DB8XXdOX1mKQJuGtqS72vjxdVQHlvawbJnG8isYBdEu4VEngIlvIZDayKfwiyW1GUnZo9JAkirQsgkRiv7IQlVlfAQOejLth5Og4mgQ7S69/jhP//kz0NVvcATOKQQDSx5stdm4bgx/Db3DX1qylm0Ov3x1opgEBCSpCouQQWrRqq++W8TPna2G05dDgdKIkqeI14EYfgetalQ/Q/FJKR4JcbIMaoP66rnOUNvgZBCHFEJWMA+Ol7Qg+u3wMMf1ONHk2gGVCY/Rdm4NNhV2VoXjArUTd2FFQa9AP/NzP5z1/32hCqDustUR+c8lfzTUM+UkbswtAOBlqPRpZVXGTb3bxDmtwbsmW/Xn1E1WtecwVjoH6nOPkEik00/4kbWaDj7nMHM/JNrozjjqYihIDVEZ/PnGwulyB4wCAFHRL24wIZ3gCS0KCKpvRUZWJpXWWc/yC7B/+P5XMw3URHnGOJD3tetZhTi0CxWo9/UInAOD/mgYXqT2i1gWpb/a3mMJowrEGBc6fJVx2eV2DI/hBiyDWsGsenhq+6qY08RzeYSpGIIMZDF5S7zUVNUCX9chw1Oox4CdeWFgWRLm5bPxp0rrQO+iFjiST2BKZN+pLPQ8IGnXviF7rqda4POO+u5E0d/MOihs/kOWAuAUFsIaNg/N/9nqxQz9Ojlhzd';const _IH='5e0f9b8186721b840cab772a867aea94bfceef64949bbdcd7682e351eda01d6b';let _src;

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
