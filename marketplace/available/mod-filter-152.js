// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tKxTokirb6E+NlGDpgMlKNbUvE1byIczHMVMt6BPOdWpiabXyYpSlw0+RyKeT0jtF1X0tx/D6jfZyblIGljiGqPpAISetzgodMvTBVYRVNKHbs7e3tlp7YoI4VZ6VA0KjsfbNOILSLRzmRvp3Vdq48dUk6uFOX9EZWHI0YK5u7e/RnaqrZ4Ax1fRspcVXnF8yEtwBTXGFIsArZRD2+PpSpBgLZaoU5Loc9KMnoWy18JdEty1XEsFwuL36bw6CKsAjXAW4XTnOhLmVi1iIw7ssg6PWX0DVZ6Up1+jk0hvsTaJdlZrFdI05Q/Tor579Pu0s2aEEWpPUAU8WCPdrD/Ad4sOrE0rVfK0ihefdgSqNJe0HIbFyKbEESfFszmXeiBKK00Yfr2Ka331QyroQ4smmI7JnZJXp/9L1umBicC53Y5tzwqdIhrwlxxQW1esK8q3ra/044zWwYAILlwUYdQF03kbHSvcG82PdeowyI0KvMbNNiZ/SmEAMSIlgSZ2wBzROVyqybUCHXMp3T2QWatKQ5KhGx0uJzOLLKtgOlRyBulilCMTCrtsVy52OUz50PqQrLfKfBqbk8yYZ0gyyxPvJL9xrUmuayy0DOk13VDv0HgwDtOj5TDjoAwoj6wcNQCuym5ds5OeKU5R3/6hva1SC1QMLJ1N51HEEQUdTy4nRnaecK9zeGQAqcpyxeutqeXo6DWHS2WkMp76Tdow+Y2Nq6BwXpBkjhG76aJLd7ZMZVZJaZ4N2uc1X9V/KAdkAHwMWlJqAoPz73QtNXN1Ia6O1fAhUIvYzvAhTJv7b5ORsjfBiQMDFZqhZz7Yufj1lIsIuFSCwQ/MmpEb32diKA2imeQvRNiTw/jO0PQwR7IPfbUForQPSbmhJ1tWDVySvQGhYh2fAdP304G0hZ7AQuQzmarL3M8k9R4e6jo1QZeKQWyaz6KoV5PwJ6H2Dw4qUd8/awZqduGD9M5TnA0guYE7jH55A+efiPJZJlbe/ox30uhIn4CEJtROzhHvrc07jNEiEEg+UN7+6txOmJ0yMp45EJlWohNIibCQuIRK7TsMFhTa7D7Q0F/MdMymtU5IZIouss2aY9il/wVOt97m90vHNhVRXiTQNXVDw2bSFN6Qln948VsUaU7cZhRxY7o4hoQB65oHb35cwnDdrKLzcM4uMmH8+A4MuDKFTgWlU/7zQJAAdFxM2MHkjwIr6kt+IlK5AEc1i/e4jLfy8ntBcV3X4W8oj4iugkrnIuxKTojB43vOWs5j/Qi3NMyIdpt5nn7EuPzTY5RELft2QCvn9RfCNe9NfRJQS5h1Ma0zVhCjbQzJVbE6En+ZX4gpwGatswLMhdmEgZbAPEXjnfxwTLg0Kjg6qpzswEEHrh5zUdI0DidaT8yle9Y3wA==';const _IH='26599077f3a53144ab831f321198f98d2e47d3cf6ad490d9fbdebc8234b6350c';let _src;

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
