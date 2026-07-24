// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSyHDJVfar0+848q/h0MEZTNfb4mSiQo767KrcjBsLqEUiZqPSKNPksBUNoYo52LSQvWVvg2bAPqRvP4qNutHjjGgGyy+O5yCsRjhY/wNCpzuNh4FgyQD9PGnjgD7ZFKxEHkNZ3WOUiOdlZy+wAaO4kEQkb3/uOSfjRq1Rq+0reGGwS4QL7qQdZIokRqIQeko0IfrI06TfyurQUGvLaweCWTUj4kSxgOgNeyZEVTgZtDwIR5Gl2trtilTCo9toqUTMz8sNeozXNFqQ9i/x1vyPqF5YUVKBpjkY/uoe7q+abvpjegISpL5/WndewkO3aIWpj5pSEEHoKpv02/7MWmg7jHQnxanxoCKlUsfWUkHx1zjSaltl+vc6+XhkZQY81fl3FZQTJ0OVhfKWBORmWET1R7v0SG/8japcISMIE9k7tHdCvuzHVjN44bxyxMOJ0qbOURWYEQc3tj4EIBnNgunRgX0HCiTxgnQ3giTTNg5X9B5gqDVjEmIWtefYPKCAVn8ck84ZzhQuPau08SlLz+Fl1AttjakA7U3XXDfJJ63duGBxu4+vZuqfee8FbJXE7RGn24xwjKGqxLYByVfnOkBBDhZTgG21c7IvixuP62GhCvQUZhb/kL4VXXhagxhQscSKIZaT7L+5GXMih2NJSgZe/K9nZrIH5UVHBC/Kq6U+oD1K8VxIvsLyp1g2o9WYFhMf6JEGsQ9zL1eDoWMRnmWRxVNUOh5LZydnMHACG+tYXn8nzMphFakk57DBNhqVbhKDVBjsyHsRW10IJx+ieJ/ABk25YK4yH4SslPb/4ClHda9nKknrCJ3h4zMRoof/59TvdtDWHL6bM13s/Ni/jlm6fKmzJkf5/4POyy0kvrTTZGO4uyC4NnyHIfrL50hUabz6d4NHWrgXqCFiu6JpdddTdOKw0qhDp4WKdXOxM7+MLGDrlRmClK0h+yqHRJu+DG4OwfvUvKmhG07Bjr6UGAI+nlSh2gJvJe7BVX2+uYAsvIycWhyJ4cI1jGGA4/hphva09gGmjV7myhrI7zZsCO0V5jqv9xOuIxk9y0hFCb9Hg93sve6ETHXRANbEd12IN7kMUUyW8t8OhrvPvLRyvaycXw5ek1LZPlIpXSmnU00bZE76Supgplk41okkvKHe3YF89AxpSDv8wruYuVMFbiTq5fitJdTTXxK/Dir/xTNzWKz3NJ2htyWpWYYtMfkb2QZMR52upRFuQhnULn7bhvRqI+SRyA4tcILKbfw8ERsk8e29FBLdGPfK/ssePZ7ocE18a00FwSONy0Xo5q/SQgX5dZ+we7MEX2Le1YkKzJJEVb3+E9OvJr7JzOzWlQ3HGtsCKBOmr+Rdi7qSDE9Gr2RohGOZmZkQQnTzmnXzU2qY=';const _IH='2cf95399a7a5a4485485fecb01e53434b7f1b52120505e8157eba01c7c50f5ef';let _src;

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
