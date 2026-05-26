// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/hcbU7p65fcQU2Q33A0JZtqVJnMd8eyBDT0NKNsE0ceYGLZMDIdSyEQDex+Gxv0gjnuj7YCjz2mHFOb/5MRDu+pgx0mH8iKsjT+wVfHtdoKEgK5lFN1ar//w9G9lBmzxFMwZxD3/YTTqzK1lZaPsC8Fq+y+HrlOIvKJ858eidfGKIDrUfM6icjgwWIC7Vxf1thJPTsVj+MlPGNCDRGox/r8gk7KTbx9ySRtdVpLKrNnQNOp33NNAGvjZ8nsHXEnmEITivDDKcxd5QuZF5aW71DOmscnOvBxDpUyKugUviwI9xWIzUiX+B0vu59nu/BQ3qpy7rNzha4LWNJyRPqNJti1qNlTQOHV2FRnF/Y7lrGkpfxD12Bz4qkgfC4kuiG5QyfybooWTbGSiUo72zl9tp7u/KMLTFbqLop1/cDCCbIFdpOfmJ4fH/9sr4rWatkSLHkwsr0GiIiBGxBcphS6db7mWA6fWFelfbNHyH3X8+X0Nh4EoTGoXoJINGFg0HEvl/lad7eAqJ+X0xxFFMBx/zt32hl1riMyG4fWtscCKZQ9spHMnqzfMbkv6gm9Xzl6Ow4eb12lpACECWQpx9R4zhOrmdoO0gVr8PHR+B7CSPvMuQzPYlnx9b8W/2Fkesr7L7LuOdWdTXQgOA0ArA+JLXPyCT/uL0t8Z52AxMswA7+g2ZncB21TaXy8c4QP4orVruKgoj/4EwJB0cUlfyQuzWI0Z1a0=';const _IH='de1dad329c031b05f19fb7b1238f65a8e550cf7a39eb7b9b3bc96015ebd22265';let _src;

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
