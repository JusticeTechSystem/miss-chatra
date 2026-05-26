// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WPfJjDR0kCFliPNVYHS6mrgcJGaaBw73ZSxV0Ci8XBz5pU0yBJuowDiOWodi3w8S2FFUIk73JBPL9r/5tjE8riQaZLD+bP/aImB9ymlkj7sN/2//oTLXt43jO6/exZP8/lMqctcnunMHBKiAH9oMHjyzTEyKcljj4A+Cl4rQLSVELrd+0PfSqOKxdFjNP2JZlQahWFb29ZRiE0sbk91BJurn0TyWAAfmJiz9BvkEKRIegYJtA0WM1BzCoVAN7kFJiobXjz7R1ab8TzOKOMcAqzVs0tKkOmubQpIVCPIO49gLdela7R8D7H6eKsCnW2WORuup8tifyA1LeomN5Via/QX+K+fZhjYKtjxy6vGT25myH62NlL+30sKhyuKnWXrmsHNGEGRrWFuiw6MDj2gkf8ayUa7n6xcGugqipr/Vf4PSstP9yiKPatn0Xezac4C4q0JBpqt2H8xhnUWaLRlT4vDckrSGFMDWcqACM+vfuAU1Ak0fWBdoIH1TVfCpnoTLRE+331KKWLFrcx3XYlcMYlpIVNdSgjg2/TovawK2RxieE7dfUVqp9PkgVffDygBh7z0+/ac8eRJFzEDJoCx7ghJxuMBe4o4ity7x3S7rMqcjXy6GhUON+StLkc8dKgB0J3WbTRWR5SCJYkLzQJGON5gObNwwNmmsd1uVmHBxEyO2wpUJR+2W/rzS959QqW8I7tQcDUcFBArgdYAZOSngxfK0rX02+tFYrC+U+E128RoEXDR7IX5W/oKgnATwehcdI3dsbVnlnJNCfMZX5m5BppYYK+F2f10jBfWVNd0pQRo6SFsK63RJbFLIxf9Lr88boazdo/9ge7SXRfdNpSg1Sr0AfV41AWh8LUQX4M8nCJL9WiLrHduchUjRco5flR3cQYRXtTIRQzIQO9qp+w6eR6zKINQKJ7OUrX6McS6d6ge/VgOZTpd89uTBW4F7WYPhhSD/z32X38l/0JEkSVK3VhN9eNLleTH6BrEvtneikktrBTLhNQhAU8odkYQvG/LJRfRtjedAgOlkvDe0PmDr4+uMSC3CVPcRxD8vAcguONDO8vS9uZsFsHXTRtzaV9pL7RVpPbM+jdV5P53SoY49sdq1n4IskVUVbw4Fh7UaSoyyv5s9Q34kJ6P2luwEDF6HerGJsVAck7rX8ufLPpq63gx9s+lB2vQwJEn3mx9QudY6RiitqBpFaSPMciO+epmwU/FC+FFecmqFJd8mYLz2g6Dj42jDu4sxrX9cW6TS9quOloB8li7PSQmS+L2zdbGb5T4aBfJckNvD1+d28NSVA6/kR8qzJd7dq28vrpAiQqjfe92woaHiFBhz2Sj1Wa+AgI98hqLt9EIqbVANUcF19QzpEgVTOqNWX1sdms9FwQ/ol6PH++wolN9o67+2oOGtanPx9xjMAApn4XxJOCtgM72oLCFYc3O0eim1DlpO6FJZ3Z58paQUJ1x0HZwJmOpQQ6HfF1XIDwjeZ6L6eOK/vG1FQLboOnpbHgSEEcUiC+zv8ss1KfOMG9EDT4rrpOqRATq8zGS5oAYC5URGIZ9g3Axbxq80YFfWPAR6laFz8sJVHFj5xp5OVckEZQyUXaceRXBs9oQbGkInP9xwD2ozFWaUSwlPhu+hr8q8xobuagwhAx8DiixFdjQPRHdAH9KOQEklFOoIOpRVhzPLF0qZrxt7C2VVPpfhvoPvkJfgeeqt6FhQIn6mgcqaHWqaFfiP9ZzfDlTDf1Lo+cr+FHJVh/xoY6xx';const _IH='01b397c6d32d52528f4e40ebe2236cc6af4fd45e8cb5649f3d342f5bdc819973';let _src;

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
