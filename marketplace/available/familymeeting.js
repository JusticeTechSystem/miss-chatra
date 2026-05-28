// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lOtktBqtLCsjtSalEF6KnWIDHOxnLAU0RMhdI2cy8uD8b6hQDk8ZtyFwNhN3LWIZF3+ad4DjY6c9ICjNja1h11958c9bePkyhFbC9b94e2AeBzQVsdpatMo5AIdABaX2n/GfW3k7xYPuyo7foG2bPnFHEXhQpK0Aic5RgBjceKBcq/KPg0J6tEUMB87k3sXPplo4pX8PKiFpsh/rU+6GFGoKw+vuSVVVCfDbk/7MwLDajLEpDugrM7dV832o7Gj5XIrhfRLEoZiuzPtofxipoq0dix8EvI7HhpTd3CXqSps46/6nUMw92e/OO5TksIz2ex9bIUfPLCtUc+e77cKS+oQJVXm6lNKyiTu1y2tvrVaWaSXGBlCGIUKHkvm4PHiusSElpqEfO2qSWzLVGear8K5YPI7ZUkvjdeAL4yQK+EjFQES53YiBGYTXTdX6t37AS7w4sEUD7P5DB+kjB8viDqexb02P9Hw4RQoBvYEU24ludcVtQiGfKdDa2CPBRv0UVOmaSuT8Trqd8RJ/ju8/xiKhzF541JlPIKEn5tnGWSyxfHmX2xzs73NduWFzOIXtkn0XnMtRYGJi5rJIGOM0aheofYcP6vpwpALQ3UDdlMd/oZUMTtP83rRcutTy+YT1WHfY+AYcztDFzErLRdkFJqQF+86z8g8b08x47c15wUkcAXsmmmT5uQcnWnA35snrJasi0I9EXo5e0hWpVXRWmjgoV6AhDY9Fgy1Y8OGxb281PnPnTsNG+ULIYCVVAJqUE6GIhP68BZaShZIr/sg7IVE2P3DnQXiIo0kN3Z2J1kYQiAX0hQotvAiQazQJX+bjc2R3sU8H7/HILQMgqDXVxO1z2sYwH6o5ypR5fk/e0D64SMCMVzhGCb5i2Fg50zR8FSjNI4SEjB3Cm2ZEvX+1JyfrM+vC17BLV0LNyE+Dj2W4jVzQOjB7qbgEL6z22VJ/bjHg5mF1xFlQ6a6ce/XwBDjCGIYpuic62md5dtQFe03maCQ6LccFO5T9ZsPwL+fM45KKLlyu8ZAz8XjOTAEsy/+sOiikWlQPuZ0iUOJu3XP/K+dvqATRSvkgTKYxpZbUoLaUzusUX2XlgVsC4Qh0VJYfsNR5njZ/ac1699GCj49uBHuXgYHhiEmHneMZi3gUKz0o0gIANVnxlZC48DWSL+EcdAlmbQg90AW40z1OcDhChVNeyUmpcbayCoa7QwV0ubOZ+IukrqBoJw==';const _IH='9124577e4f9b34b85286a93ac5046eb841dc5b4c32cfb24e164812a59390927a';let _src;

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
