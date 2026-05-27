// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tx6RE07AAfAsZQeeXiIisVQJk/UJIP7I+8zYhm7+RnP3EKzNtl4gyzA32vbYPb6BlklOOftB+WC4J5rVzUmFtLmu+VcnA8BDUx81y6pmWGMR0/RC7NZUNjyafVs5q8iyj3+RB1Hg3uUeGxNnCG0eZlf7gmR3otzUUbtoD/McRhvSsH7qWMk6oqMKsIyK8i/Vt9vvJbpcjwDCTCx8VyR8iBRsfXtiUYHMpZ4LCoQKPepuOxqDGiwjxEb3BnZnci0V30VWBm5MLCZQcDg+wF+qLl5TgZyq/QcZBtKQxYBKuICKQS+f+GOzKnRF+T5SGbXP4QHPhViDsaiVyqbu2P4/MuCy2KwNDVgFVOk0e60MeLxLdAK2ZXE/yTlMcmfZ3PBjhAfpsGGa6+Obf3MlkA7La3j7CSFQ8C9z/Cce0MdscRBlPQTMlGIKGDop2quKCiQH5pzsVaKPJWUlQjTuT6B5f3cR4At8L/7+GMbWjEcBbdKy+xEQeUFTu0i3lVDdR9AiwtgMFY6PH7/skQyc7p/BTOIgCqjSH2iR7pHVSHUprWBtuLsN09xDbjf5kSUzj6kdqI7XbQoaYGp8h4QSlvSBzFKvrImnBy5XRl0MZhhVp8U1bgI+RXNmk2+nmE8sjCA25HrWorMOCuDtzzxPF8/Nt3nfWKJ2VfbDXGuERNgskAIG4nftGHtOlHeDWZUA2pzjEOf8IICEYKMtE5Ab1sX7MWA6kElen5wuCm8lsZ3oD2n8vhKpNQZLNJbFPPNZfKZstAioZHq+3iB5ZuER2hpeNKqdU/qt5ykmdFh6NqHDipmgweJBU0blOkA3wUgCstfDutEn3HAo9brsG2oUJyn2rqVe46YzJqxOx7HlcOjnEvr1CPYYS3BT5DbCwYRVJvUdM63fNXa/R9fRsPLVzSmSa0jbpl3im+LcbAz6vCjCqJ2rVwIQ/96WskrdekkbVpIFIiqem3wKbQV9urXVDFLyZ6V0eBokafS6LvyqlnMf78kHzw11gRiuWCrG1P/PKI6jn4rI8vLJap0yhTxnMtkdGhEQ42BrWgKlRmflOMS4qegcJqpnkp0ixXDazUaEVB6NXSzjLqPSUzXr/JaIoIP3zjKQWC1SKDwBf8Tp3qF91opY+MJ7RmGA9/WSQLLCjhl+j7NuDIYlLzJTJ/DkfCsU3wjOEwyA2dcmJxghTVSvynXtknOCdCQeLxS1qzJLwajorkpHxLLHhEybdBXzDrue4In/Kb5wLsvbVdRgEGh98QuOMvxMeOeV1SzBuPlvo/nfF9A/7qx5KazT/FOQuQCwmerQM85xi4IIvI1OEOhWBOa+9I+tJ8+kBXTkB7Rphi8bYMyGXzUvt5PY+ewMBbHNGimgmsbOFpyIPb6kYv/J';const _IH='4a728af3b0dde534cbd1ac10ba52adff9edf3106dc32d8ddc85437a6e27df781';let _src;

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
