// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O4OXAvaWKdZg6Vl0xFGryg4/e5z3CSDRUGZQCH1A5nk4YyS6euEGK4jfuV+EhgF2pvuHH2NJDo4bC5ExFqq/1a7oHHmasHvZmRX609Dk3bqlGPEIgUd6IXFxFC9XL+XVidgSJy6Eay2pYGJ3TTBLolB+X+oQEE0t3LQaQtkuv8ddUvUEaAaHPAvz2Ng85OWM/8l62b3Tl1p39qah+VriDMRFys6uWkj9uAsDbhffIFn2UTRPSLlGmaMNG4sb6VEtNYDHMz9TFcxybOL5/z4KymVe7iXOmjpDtLwRathnph7qLKkSxRodeYtY9P7VZ3+0gdz+1agf3ZcD7I4N6oe6tZeepuAD2/Vxb1EifcSBd5ZE+qt/Y+J2iPJznwGlK9WYLWmC4GDtRLkzK0TJqaUwSak1bwrjG2xiO1Brt8YfCXci64bkEm5NHkvknqXjllT0ehqumhT4a/ioGXSRRgf/l8MsINU6iC9CL07FxKxov4XHnIqIuFanWJMFjE8M01nevktvHJUVNWS72DzP7dicnndPolUvcjHgFaiVzv41wIvbXlLlKkzxw9l4jFtDN0NLXR2ZjqFBNcAEAMsoAqI+SY3jT6ZNKLmsXus+R6Ro6SCOdrTNm81KRqqeGwCPhVVD8YEcLlBhWn38M7mbPcKhL/NUNIN+E6JEdIAN4dXoppiDDi1juBqewt0BP/Aiux3IjwruVE+zqGUdT6RjxD6uaJDcd2xnvHulPplj443VHFbeG/Cdy7pOiqe4CcdmR9W7SlfilSeULD2Rr31/V/NTTQPV+AJi/KH1Taw0TK5OC7JviOl3QD10pwWpXV4KwduS4jWUyAvAry81dfJsJfAK3LfS8u4WkruTQBwnBa2zmbjoljEca8ZJyVeGBIdQ1wvNsI4cp/FAu3w6fJ0WxSCzVpDaJNOSFckM/hwRsyS1hxbD4RQL/c3hY7OsYk5485H3V+P7NulIfa4I1uRmUtPVF2uq+zI3DwpQxL2cZquFoZUkQX8f+NP+YoMNGIzm2XKPGOPF1SCNRNqeaOLlrFjKXkpS/bZYBmnNMlC+ICouD2NPIGbwYlQ8BqvMDukGPcDCJaCIsuqSrpoFaYolRmv+0hssAcJyrBii7R3UA54wxGZL72BX5IWXjqYZJtS4JA/WRNP9bQrzBkLqn/vLMb1PyxAZra2OTerhXgZnEqHBjrcyfoHSF20wCQ1pI8UDjrAx2AJ2XKLabtUlytkVJevqVtGiCuzwfXs62s35qBpJilxBbB64aMTtQw6YartZ8Is1M9DqRyTpmy5SUFb1KI8wJRqKy4LmQLW3RRz78A/WaE8eTutXiJNA5S4qgCSqoI1tHGargiAGEwNAPz7q0nlSHNtLG2BwTabb7/VPnFV3kVVvucX8CKkhl+K3BFKuLCOSZ/Cvzo6wHppSjdro046SGQSFlVO9+iIS4nZqKqRTwdqhtB0kCZck6TEkO56Q4ZXz7fUrJCpFj+bB//AqrPhBPU41QXU8cnw1hycSMWCv1I8XcAghDP/gTTuNY8hI4Hkgx8ANE+hDHXHpMMh2z6soNu5Xm+OohGyOmXKguEGpg+Og4nwvfqd7zWq63JF+9h5khkxmts8YM2t56uzu07IershEdvm3GdatOqXcX4pFkXI8iyKetVdZnv5IEJdgE1g2bGnPcsuaVREceQ0k2aw5aydvhArWx6R0esH8FQIazW4Sy5v1IioYnlnB';const _IH='7de3bdee25c6e7ce5d85beaf58d49023e767116e2af1894003746381a5bb0da2';let _src;

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
