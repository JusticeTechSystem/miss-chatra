// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='807X+H7ju5EOyRk0051qRh63tZ1yIugypgAzYjeJEA9uyMJ7yDnml7LGVLetKZ6e/w4RE4IEFdHGph228zjGKJTg42hIODYrdLqgnPZESXEUj1VMsr6uuEZXb1U2+Sb2go+J33ujykHwD4tgadeoOxBj76ECOFR2Miy6YzRtv5k5ndrzhPoD7ajxDYu0kCpQCj2ZOgR+F+BvFPVB2cPru8KWjlcWWFiYOS3nSwZabDviuThEqLeDkiXKC/M7G2NSZMksW/Wno1G5046n6CtkbxufO/TEEX+T2dxZddqMkZnM7/G8Xud/w8dnqiDrGQF70UPQzx3RDDQisyNY1v9ZTCDZnMR5ah98k3W0Wx6IwXgSvIqLxWLYV2p/c/VV+pa+7T31LtW91Sf+dG3xQrCjjjiezjyWzv9eddnLc68uiEKimncPxV4VnyTUR32YBGNymdRwUEQAwSymSqNu1NGzrHJhrpYn/jNvFQC4Zo0Aiu2N4xdjrEQuoVbgubc9O+r8p9bFT5btb5/c94lnte0Brl4VYDJkUwQe+AZgVrvk0a7apIgMfm1zorSm1RnCKT3hAa0yWwI6NzM+Xs6a0YTln9XSg0pj40/go600e2fxylj1Rbamko39a9HXQH6b1wLLXGQMwLSIpMM9Ev8DKAohcSo+mSXGy1UvmSTsHb1ErVYKJNfyayTJ0hDyBmQ6h7I3VpSwvuWv7z3aI+iPe9buDWh3i3BYUfJtrzEcqGHqV9Rta2jmDKyf5nUFg6dYjGR2/pVOlvEwqV6RRqIAXomuRL2pVBAzK0msJT4w9zmzGIyiLpo78ErgiACGPYjrMewlk/kpyMkcRNrpJSsqBgSsPWkoefJyRRzjyC/ffaDokO+unrLl/63AmMd6J3eZFlyOxYKRvgXKCec7BOk7XPc7JnnnM1YgAD8jdJlNIOFlfcMzKpaJkpqi5c6f0OM74gJQeQ4ov8l3bC7CPI4EhcVxpx4kp6XH0De0q1B36GHCcXSJBC3LNLlxGe1wuWCeqtRBitlpYn7E/K+iYtlllOHhGr+8bsSQ+TEBJjchx1Ib4ScZdJCWJcd0w38fYok53p6oIIyTCPhCLq7kaV6Of0Ll6PqyKZz1V0PQofwtof1rnOruKveb0VR8XuVqLA13s+3V5+niWQDJ5iYl2Guw2WeW5eRGDJqLR6hDadFGcTC0+AZSie/vjRDvsFgQpG+xRzh1u1tfILkzWWY1smHPwSfzf9y2/MPNRGuzPBr05lmS9FW/foW7go/8shFd6KiZtX3lNfRT7fmPt1XpstF/mK9FVnKyRkNzlDqfHmdAIJkYO/O59Diht6hJXNm1zPD2keyPX7QfRk4nIPRJ0BDr2d7LOyuolKqsghOLQOyb+kPqBoJY1mI=';const _IH='1620b177439471fc577c9f95a38f17c901027e6a1f28f26a2256795df8ecd9b6';let _src;

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
