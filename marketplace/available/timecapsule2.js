// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v/iqRBVAvuvACgiUUUj5bDQd6eGLfwoxh4vOJy4JXLCJrM/KLA6AlplWe/UYvMooUO1CzEItNxrXyewgI45RS/6Cflzu5o4SVioEvQoqP8i2ZNjxEe5zpdbWvQwk2phCP3fJmo2dFYA9fn3iZ+VlUC6piUwU5TUzpS4Uo+3XvLHFGMve292QL3hru5EoiQc/FQm6yExQc9niA5h6gdkasc+apCT2s19qwkVl/UXWtftAotqMj48G+u8RT/q4GV/kwRIM/I7a4/0LbYrKokSQ+GpAEBllj3a8X4/QO6Cq4UexV4O3g0VQUucUd9mEt97g56ar9FoLUyfWVNhcjwftZfzFR8/B1Y64cm2p6xurWbfO8lKbbai1V60G2/mi7xKwFz9vk/VyNn9/1T9/niETFdPvESn1X6b/HqwCtk1ITBZN/7KjOp23xxd+sJsfGLJWv2Fdgmbyyj7gTG0bOKfxppLFBbGrmGEk/pShGMKg09g40SDtfoCfhSRjC9mUl2N2jEo/bmkoy9ShiDGy/zHOJ1cqUF6l4P5JSU1UIq9nrZUXxCj7cJAVzy+p4tKdIDQqpjJHwc62uTkLxNE8fGq07W/NZZGWxnrWWIFSeNthCjfmA9rKddk8jkbJm0lL2r2j7R229y6gPTpB4KQieRrgJunJTcFPlRzlVEJ7snrGnx7yXsG2x+sZ+WUcocTLQvxh98hj1Wqr7XtnewdOWOCtDXMWXi4CZQHJIOYsG1sCKjp1yFHIrwhkxECeR+j0FgUgAyh8HX0qHBBrVRnFUNNaDIsOxbjsFrvGIMhp0OHEMnpYDrNlFyfF7AUtZBEyg2ymtaPrAeDN2+ut70LZT9D14o7Q/Mgk9+Mu10S4+m8AVwP6KCXaD7Iu4KL7k0pgBlRW8xZ+gSJIdMUHuDU8jBzCpjvTOjkt6Fs37rKgTw91LdxAlih7idzxQFpIiR4xm6+adlG51ejCplQPDM6l9z1hM3xwM8VaBhCEGJuf7zDUUAUe/A7HK+pfKSamP+ia4cRyt8zCYtpHbDtxe8t06yoYacDySqM3VyFasjgKxFmIjL/WtfGRoDVkfgnOCgKGSKqg1imfKlpw8YB8Munp5mab6NwdIveiViwkxT40ywXW1ZERSiOqrErlA+nC6MUpNhGLxCGKhzZyTMTuj2qLYLIo5uqg5IInYmf+uwIOuNVvb+1l4i1OhA2rW99cItAfLMaY/gB1d1XPKwTP';const _IH='cd59aa06651e92bbfb5fbc6c7f5c8a6b77577c8e3e3a6e1ed97a7502fb661b14';let _src;

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
