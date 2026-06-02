// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wJZmM/TJktdvwRADRuiNhK+oAUZlex41Sn0vaXst1Rqo01/fUY6ah+Sq2hN9597pviBYIfWgFn8hHAA+jQ+ZF6GVDVxvEFc2pI6wR2szGHewOdp1OOs5jTSGhxG7qazP2W2xafBESD4Nznc/eTiImUF6SUtVaq9QjXQ5svSorpVYpIHW3HAn7y1u8gMjsMgpOm6kRZYjha+jk/FkWfZxDqmOfhpJrWti4qBTz59vsORfdGPltzBs9I7Jps6bjnRJouQjtrD5YvJ4v6mQig8LOTus0LjLme0VtWLDJo9ghLBXFrlNDVTARsm1ceh1YYzUgmLeX322p2EpnxNGlSH6PdSJD9VVyc22clXOP8FwpESfSHvSFHcDz2f3PqMdZfnUgxv3I520FlBQ2SaWJhqYiecqCYnYa2eypY50Y9e6XiFx8PpACYFJz1vh6BDr24Jhil5agfARdgEXXnlvTyDenoaUGuAcB8F04tjUF+hMGkHX1R5d/OR6s/0oJHcN9O7Q0MK/2A/oqmBJ6rN78tCaC4I2Yo1Py9OIzQksV2IHrmumb/YKCtZ2FgKNgcyXcLEJDtZNDLgYh0nMEKzRYwD1PVxglLus6Mto5y+BLV5FlAHFwmOt2L2d651tL30qvik7lcJELyvacfsAloDk5+b4BNn52hGxZWKl5mrnfVGLwJ1WA2TJmsPWuvtvL91XOzuI9Qqv+I7EUUrMso3adJeFfZ6XdxJPRhLgip5fklL+I3/8ffIQxXOi7/3nwoXPsG/eFy2cvOu5Spbk50ZXDnKcqv+Vq3gYfBD7XrT7T02cyTC7yj3WAg5IgSgnb+BwNZG4Qf4xEbasArDUvoc1RBBQkz5qLwdrA8VN/myhHv3vIxgb07sr/mdlnk0XQ4clRz+tHVmbs+O8IcXnKsGXC1LaOE8xmM2+G67JS5tHEEsVijnryXy9gA4+5yKerLGeab11DTFPpnaBNH5AwHbEbKpXXXvPxgRlJIHgm+m28GEpxZFDYLgFoCUZ32Y=';const _IH='af88c6defb30e56d00edb85811724fedeb27ef4a5b5abd31a9442f2ba42d35d8';let _src;

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
