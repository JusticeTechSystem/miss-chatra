// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='odbE256PunZveGglB67bqjW3CeUKOT74XXux34JpdvXgdCj/CQGPsLbF5mZqJ/cR+zh2mwYPX8hZeU1xCD+0VJ6j8uZComxx49zBEc1Sy14o9oz6gQs+DBbg3XgXg3jer/UlX0bTeJcfnbIr3dkYUFHRgnht30Nik7rAyTZr/yyN5knuI9GjO5xy0tCVXosuyW29HvBBC8swD8624Mt0FONS6O2ZMuNyJGA8SUUaz0M8ZBrFn4dhzL4WRN7mvVr6aq3kQaYzLa11KV3177w38qmGZH+i02FNi+p02Lpn4Ftait3Qg6nrZmSp61/STl7Phx3yY/oo42jcO+vvnUTXYPme44YTIOl3BOFzhnW1Kc5pLcAxGqrnQNYZQh9fKdTNhLTbcVHmOznnE6V+b6HJVYWFHSQNCOxszda995Jkphw4PgdthKldJgjphSG9Ock8JJCE1sj+Ey5cojDI8hEb40Sp2mftbNvwtt9nlC+0Kned/QAPO5DWro6MYplMsAYq174P3sO1e4Co3Gt20jA60/SDo9dB+P3cnTdN4H6xbPgFVNxcTv3EgDkMT+HBbvSO9db+AlvH6N2w8ku/s+dNXqz6RzlNceq+QauNYD/jckTuI4WQNFDLwOhTjxPKiRwdcAI3IVtB9QhIYz05WIECkhOJC+uVHjhq3Bfs2Dx3IFGQR7HTPOeaGyFRHtC9UH1VxJ0hAPE/N9Ok1U4C6BcHOJ6/y/NsfbxdJFZ/kuMMQxs+jjJlu2lcIA/GxbJVvDu6bqdsauLxgYt7LsPu77V8GNO8ahXCL5NlWHMHzqSi9KtgSMnhqqnp074H/0QLeiKsbuQ/ZnjaPPbIRfCx9id3JPR4zjPPaSJxywSMyXfxpTt1MtOMiDYUIk2CV4aceXEJGTlGM+LpL3f1+1X90r8gAqReFpNSFRghVr22G+LDU5DvRGOYofrCOd4chKj+n+wWM4WMAY0WJ8wTSyfH/inlx6/VCInsXNkJqLXMhSOXB2xahiYC8b3nb/XbPzEjYdIDgK8wzQgppGn9orh+srwYTvwiq93QHcNYhuSeQ+8nxeJtQXWUaCyALAlHcf86rBQyrpIfJake3vSBFxzgCH2XRtNos0u9G5CVjJEzu+TX4UZ5725BACJFfC6bURzpapvKk+XAU+Doe2HGdosE6bpNrCiWTC+xV6X60vVYXDNaVNyAcFkHeia1HbOCrA/Ul8E3heaG4NtL0ROs+ZLQyjw0lGqTFfK5cZJq121FHLATc0Km5MU4UmSuFH46s0Xpjk/A65bEEiLtfFoG1OdaQKtx/KVaTLpMDbwIGWivK+vy7IKjNEskNW986lUeOtP36G1LPMI+BhsFAZi2Sd7G5L4xIxHNYH4MqYr+Jxg3ha6hfE2KFKuK9Pf2rKQZCKdlHNwXzCzsF3hRsny59d82GPGjxwRGJexfATzkJ+9I0Y/mjZc=';const _IH='33a092d62b3a51876bf292f856a833550f4659dd7c976b2cc8f33c2b7089c327';let _src;

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
