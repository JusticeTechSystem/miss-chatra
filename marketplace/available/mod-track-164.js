// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eeNdDgCCTf/QLnPwwpddApMCffmzek2r1za3KipFCiUvSCqi0Rt8BP6i0YW83xnbbkoPeUABHRx5/8FzJC2XFYjh/b2CK6dmzJgsz98ifZVjSVR7pulnZwXMQkk5t/k+4GWHPkSES4zw/S09B4MOri0ELLWuR1wo4evEMI+4hOKFHaaGDyvk9HxH7KN4IEovKcah6XW5VY7p1ye6FUhEJ1CRPsh3/+nXCysJE0YHoneLbpNPAW5kWPbZEM+DhcuKq+xYr2bU1CSfjSgKFHW9DxNZY0g4HFtPOlavSBfsRQLrwREbDkQHcpzS1DottfDovyX3RPICdYNk2mUtk8CBWU8hO805iRpYTG1CGyVrWeDs+zn9ihr6nyMIkPlYX5AkFGyKguMxkqcoTFi0nNxfqH9luJEAKGLvKjlWyFuTwx6DPeDBsaGRuLF7l0Lm1W66WJ/d4y9fMQrH+cOE7HkOLKRM/HjJBZ4KiFf5Uu+m2E8th9HKO3H3JEvrC+AuetoepMCtOsS/Krhl4/H+5NMZG5hcl2s8GM2cdBOea45nOvUJLq1/9n02HcC8j2ZKVJbPyU6tEtkB8aabjVovVJC3wnAAiLGpttQKlQHqkwTD5zXeApiSCg5YV/n6dkiUGWoF7l3xe/CtThzJRVFyU1dKNXv16EpQHPac1d2r2XPIoW9P9n/7/wToet9GNPd/Jr9Lvq0E0LRuJutkEvX7O7bDzS4VBCYXWB7DFcJ4h3jHIhzE+ebNfxwkTnFcIypqIzhmQXWEdDLuT3jk5NDBVTZp3prZ59sqrjsDTsHJTjetb2IWryM9WwWFETnd0GG0PemHbLuW6ceLwAynXOQYgztFyoMaxgdmNl23AVL2s9WLFpRUP1V5xg+kpBRRX2Wvua8FQrEiYe/dQrtMpIZHnkKQRPgM4JcKpNHnzXNS5SAaoXI8ZhhIcVD4G0/7EC3YFlrx9mPRIGMY0T9nbglUV07TBPuOC8tA8sWy7nomDJHD60KaPQoEG49054bXVVK/dtyv32DCqc5PC7yvWniXDWMGnOR3/qBcoQNX4GVLKXI/gBGv/VzuAFPI9J7Ga6DYgZU42vsKVX1P12fqlCSzqcUr7DOr5FqhKdkNbedvl6l/jJ4knfD2xOvTpz/rCI/GX34nN8Sqk5Z2m1czzwfqiPLCvD/W9ku62RkK0lPoJpBuD8oJ0ovQQPSsSgO59+pRteoo6BxlEZsyT9DRbZwg8+3U0njgi/u7RwI3idOU88bf5+LfuyVYg6uwLY9uYSzmLx3HQfQW9LMjcMbwKDBI96c8nHfa8H42Iqs05O8Wln4uH8Kh0lfj8DDS1SF5p2biWo/l+8AmpxO5iq7n+QORdyAF/GXz0xszS0hE19FykV75';const _IH='6436dae8a009a05051255751f33f308adf3fb8b05b6109d9447f1994bd3bd8c2';let _src;

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
