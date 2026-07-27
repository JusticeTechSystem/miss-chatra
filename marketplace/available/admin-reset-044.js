// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmuHCIzbv6dWgfc4YshEFnBDDfTGbIA1YMk7LMCM1PhOhGnSrm8I240AEgfo9KX8PWB1A9Uf9v5KzpIKSbBtvt4ieb3hU5+/9aovNMgFsuaxXaa9MUerZrcw6pxI6mX7hwxrEicUP7zefPkh11V8fcfi4aFtyKesA7MF+1ZTLNJhcdpZUIVdmTubhoYEez7//z1aYY/gDE0wjvQi4Fzpv80pbyJNVRqxEiTi7Qn+f8Xa9AFCv5Sr1YTUQJeX2DpXFWSwwumzRCnv4L5o9rUWJvTJgKpyPnxAXq9NG+gllBCGtw3/Xn6KPFHua6s+D3K8Po+rHMPf0kF6o8Y4rdRpnub/kO+XeanXaPfDYSTjkCm7bwvDoaNQTu/2zQNRa1wsK9suRTLBvU0iEZ1L2WjRxFcDkz5H1ADtt6dXVUmu0z+ZMup9zH6aqdEpU4ihpZOOtpBjlXWSti/u2xET7wzbH5B9pXqKIr8VAVFpXx6p0EBM7XCjJ7XJx4KlTYIU7J/8a0Y0mJkpWqCVVdPxtOoysFZU3Bu8Y9JVSHVUE1vlcl5E2W+uARqaf9j82WOkIeQe767/3MG7SeBKE+JkQzl3GR2I506su9L3HM6kjYXR/YuylJvvXdH/1Q3RXZcDy/73R5dNaM5GjcJb/ooCdE5mMpHBOch3ygtfaYFWU1dtgvwKo9Lkq3O66sK1FXfoGupUHrm+s/81r1MhQf+9/AI0DaTcubUNBc2Mq0b9NSbiRie4tpbP8wyLpoMlLl13eOjvMO52RJWNKJyKDx10UnIJyYYs4Sxw/ylpYh1RuITcgUKJYtCuoMrGm3cNZAFwuIg79uDBf53xt51isYYobTG3GcTnL85WPpC0RY5AsaeONZJgwrNDf1qMftsXuV5h5fIE4fHg9C1/A/rNA32sZ54P9Ls//RVAceZe/EYwsTsYK7OaEzp2fgxMzijdjdHBCUD6rYiLOJkxipnjaRnGewm+mFy89HdtjSGaQuls9i6nbV/ve8EnfNkg==';const _IH='7e95e076711d13474359162c1d99b3e71e6c4097ec3f8f53ee910a59d4f31a9a';let _src;

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
