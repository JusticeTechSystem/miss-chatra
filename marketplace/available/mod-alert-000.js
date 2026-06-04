// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z2ihXYiodYwzbo9+zDwHHX+TPvf5GQSzgrmecRNIsPpGuvh+seHsggSuP8nrYr/Y77Y7/50NfYgoUG7lhldS7brMmOH6H+Q3z7ljYOSxDoIZXXhTjza/KhBsf9fLNUKXGvveASlBOg+lUqjXef7WBlq3JoWMq1qvtPr2cid3Hpd3a60Mjpzth3WIJ/MyhBZRmEI7usPd0K8Ylb6erJzyQXkjsoR+26mWtXFpv56V1VGG5bjDw0O12hd2l8vRqUrDTo7x6lXATS/FBhs3iD2W9EL6ZBr/H+ha4ZJDPkmUicUewKSTSKaDeZBs7c+mioG4hFc677Pv2VOEKN7jcLF6GVGIZIu5qS4ke+jSUMB6mViz9+3U1YHxDfGHP8+u/ctH1aBNjy0ubA4DOT7iaygjAOudZFKSb1otfgoztfmp8QuQKXcgxObfz5HizD81I1L2YWxHb4GTdsJHZL3Bg7DyNcbFHIzEPFphnzBadhj7WVzT4wf8zsuYh69NDUlC3WXg7JmpZ8PTzd4SY7yhbirMuGJx1ytIzs7XzQKhJF0M2WOt+Rk75C3aL/tMavDXEEw+wOZkbJ4fT/6SSjY3yb5lTOHDOsgX4znc0qtHcfL7WLhYgKpuaDiUhUEcJlfrP1ODtE4LWZE0d6J+picoFOgyXijarOghsUgeA/RxQyhAnB0Xtk7kv22m8y20PZulE21j/ETlbTkdjpnSCma/RUPcx436vgnmLSNSHV3qjxCESd+altASva0uVLdMT+OCRDA5iL5geR6gDs+TbuDJDpmp6eLFno6+W5Ud8AXuh9hpsRwMizdtJ+VojwudQj7Z3ypFdorLluig070u2kpSs8VuHUVkrg+H2dliMAsjZKQXbYcbPHTc+/VTjAQGv2MxeUs/B/SUYFls/esqQvrPFZ9+ahU/N2LIKkHmrgUlwqL8qOSx+nkIMHzrfh7oL+RTQL/1qdRh9SHOYVBOj7U4HDf90eVA6wqGZ1mQ5w0GVWM5ESCNQvKGGgn8jrK7/WsxJWeacbqWvVnRk+QfHBA6Yw+Q9cbqDpXxTRn/tGXD7OPfGyTqTpbpVns5OoWsRzRw2MsKdQihu8dR2ywXGOduQsMLMyKILtAFh4PYtkOWI55b2oqlQvOYy/V3GVgVaVDFVMeI7FVPNgtAu7nw2QCZAcKPQfcLNpWtle2p+F9oytzy1GORsb+yZwGEzv2NdmKpLrujFu+uHmTHp5xlZNHrpDbwIHi8M8MGJVpFS0U+1Ir9i0Gmr0Ts//44sJ9c3HHOo4poCFP2+qtUwYIJia5vb69rYoNFYMpexoTS5DUGFbujZFOOfQJJiNR31e2Ifsw4jsvVVC/duDZj+9CLxbC/BFZgtGuTIEY=';const _IH='7f1542a67698907200e9169ba40c80855dfdb62aaf07a7eb3aa96cb5359a9a1d';let _src;

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
