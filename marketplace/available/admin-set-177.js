// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sjdM7WXzarKcW7OZi+xKBnHVvpDqeiNwNs1K9TPfXCPJ4L/7fY6gpeYwTjbn9HGGY15uw82QRLNW06EbPiYWBoj1cUcAriyKb21kbmH0Kpusl3UEo0fv1BJpwKiEnMbGDPhIvN5tNLh1cLqfGUoifncfqt3ti3j78y01bcBOePKF0niDM4oSDIuYw9fYJKI+0ozpYi6dMflabtQckiQ/3Ny9vJh9F2y//MAfNc8sNDVqNYB95jk7Y/yg5tcnzfEYXk6qILAZT9ZAGi/WY3OhuPFPnqWctLS+ETunN86fwalcLT4VwS9bxtScDH2y/+oKrPQNeH6tXQ79/uHao/uhylTZQV0VaI3OFMN/Y3xs/fdsmJNqiPr+hi1YXt7M4/ZjDexEwmJOBVDp5TeU11hnWrcxONXUdTut+IttC3oXPPqyl3lRIyYOAjgJKxv2H0mPlcSVZc3ojEpTtvCir4p6xnsItopC1skRrAY+846EXGqKDqXwckGFuOxbJglu4KotPklMSNvSKzFnOAWh9xgmsKWAYu4u+yrb4P3FIy6DVdZciVtNRsDbjhieKLhUl7PXekmaA4yWPfUYOrkwq/V9qw2FZ6sT1Rh7JI8JtKUoUS4FpkwZV2FteNCEPLdrnmGkC6Ik8TVwj2bkFJEvazHkDbzOwRhQF08UvwDPWAVVLIRRvUJAQYNqsl1Ux8iRbNQp9bbbQUkr5/qp7Gpxh0NqxTfSJXC6LbGOerdKU8c/l6r4FMQT7ZDOAhx80SB73Kpwu0FuMFCkQfcBPWX5Y/ILopbC9dAFCjiDdNAZx4+n7d/Krn6p0EHKofz4PupqscVKwO0LhlAqn4sDp79hv7h3+BclQPSFbZMdWlBqeh8dttISGNstG+hlQbNcEgyvBSX/dM9AbjWaAW3GXZm/K4f6G7Bmd67gdRvs1CprKI3R085Gnnow9XtgmiaMmQbRa3RknxeWnguN4QQ6SdmXlu/2mnvvo+e5bHoE91to+g==';const _IH='6966f6b1173d5cf2229bde332950e9103d2bb6ce15554cae056bc9e87316b2a4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
