// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aS9puzBKFrA0YoIVjcEV01b8PMmx6P6wXx+O2PcIF/EI8TDUVlgs5VJym/l9FR+tQW8gwjCGINVhwZ8yu4tWbtvFUZluIHq5906EZaI19p95E4vCsrr7UMYcZDMEvIb+NjycjGF1pSrKcDKRUGLyz1zOBCsTNZ6gS0Bqgk5BBZQE1QHlBBh9xbBlk5OGd+WVugXq2rolLuS7fwsPWfPJKyl5JfRvtPoZEJNcBHEopS8+UaXRzF8z5ouGHZMcuf0htUlEuE/VbZsLIz76ikTaLNnXU9TygTck0XFHDPSITm5QGi76baqT2nw3Wdur47vkTAXXThB+hS95YQtFaWE2O+N0YDioliN1g8hv+VrkFueH7gFsdeGg/0v92RZbWD6JoGliIsMr/diAltPg7430V9p3gHFRzUmsTpNMupmH7XhZoXxnx3jeV1kNeOmD9eu4wVbPX9tDdqcrONLUJHoMRCs50IS41NN65YfyUihLwcanhKEYwuTjAbi33jn6eeLu+SWXKl8TiwYsEAiDG3vorpcNNmJFm+jBIpMWUP57EVFw2y1JZwHQHEg4Qc+ODMqP9V+QpmW9Bj/4ULHfnHnNBny1jsA+cdzg5j0f2GH7e4QtlajHhY4P0hDhTXe4vabyVKmmkP14jYtcok3FTxN6MTXjrJZnTu3SjSKnuA1EVNze9O/gfAv1Q9IbUpjCAuo2gGzenezmrf5cFlHYw3zT6mGnC2BJy6Y7J+UlUH2sF3wS+IUq1jvTWJXSRQ+jHeIlXYzkX7bO2V9w1Wji32uca1P+iiJplnN1oG7egStLZww3PKou+Ij7ZW/9jsD7HuCK6hw0IhmRqArx1dKxL3tlEQNnAJl73mbu9MQglj8xdDwt5w87WQk/1UgFOswsCX+c7ZZROZdnkwJ23NvN9hq8PhMBi9LIr4xnrznDfw1eADsKpRiwla0JrLcOq6HMyzR2syfGnhNA6OZNOvGJ4H8O41OOeh0UFOl7Atykkw==';const _IH='d5336f30545bd86f9091c37d05f4b979dd177fce7519d0c7081fde1b171611db';let _src;

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
