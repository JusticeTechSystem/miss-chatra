// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4liNXXmRYzmptb7R9hKbZmmdFKF3pYyzMRS5SpNFIHEb4QcZplgCSdOdcpOik+eipjePVBwRDAF2gJ4cfoEmRRGT/rk6l8FkqPz2xjaljCIoqGEzHrjcf7fZyi3741BenpjuxKya3A0Lm9EwL9MtJxNsRkU8R86apBZsgZqBkOuXoE9qNQPTAi9jSsdziKNmlSvIu4TuiqpKgB+sZ10eFqiS+gbpTvXeuNs5ccfkX9vRXkabWBbgE9Cvck7ZzZRBQLm7ViBg/Rf14C5psAhl1U3BbyEVwkf5iML7sqbmfWrs5ucMzrjnP9DO+jBuzoqh/rTwLHR1A4/GnhZXklmLwinum3K2qlatEwExfBzzofz2W0Vi8dUNPfEDyUFu30MlNJtLW23h197swXkB718S/qw9B2Z8pRWlTogi74H6lcmVA14ZMfXOj3jLqxLEfqYIasU+JmIko/NX0uWAQliHGm8JT14YdXrxH6FuISOzhtghCv6rEYVcghCJ9pSOM1jbK8f3cYX+vYdVst+P1d+jSiKkxaXry3kcpt9PvACwNsjPcRrluNeruxJimSeIG45yNztBku1ChOB/NICnC30XEKONA1e7v2F0sLBRGJfFAnWSN2hUFp4nmFUirutI1YXTus+ZQPabzSz08QZR+7K8ziLi7oMUgproCNWri9eEHTl66ZqvCMv+bsjd/83ruOPGVRAb2PHC2PpgHjHKQwGN7hyICAjy8OTUbZTFMh0rG9PxcpgtqKav3kzdAyq2FYpjNL6gP7saueeXn60ULFGm+FBcKwIMInxBAYFu6hXvcjXkxt6hcolh/rjtdaHva27c0aF9R+Zs9QgGIg5hcYGHiuHgYB+yF+s4kYJOUOIV4gOwmbc9hHPbdq9P48wOCNeTs5gk0N8HuXx9OqXRHWJOPjxCdEhiXeuTMWmdRbIf2QgplkaAu/24Ohx05h2FfDUQ40Ng76FUZz+xCy0ABIs+8APH05hU7PBZwXHJOuPy0y+L+BnBQOPFMzMdVcHgwQEISMOdAj2SWR6MHMb/Qdu4KdoHs0MI93fiOoXPWGwdMQKj3R3dazBmWKQV5WTAITBztwmoOstqPeUQXhRum9k0hJPIp/lVHLzZ7qYUWVPMh1Sqm6b63ZC0/er3yFx6Y9K2vbTKCjhUlksxNnwR549muJbF/WxH4Y2ATsEnON5cCBgTDnkCbMkYzq7kkSS1a9ODQZE01LI/LcxDxjaMokooRdoN6b8uqTc8QWsmZhVx7ryDNZFW9u+ApV8iQ1rlUF0x5Zoc80uP9LgjRrkEaZYU4eVgKxmuzsnJg0cjZWDvfqoYlqxam2WU4PuxkUX0wGNVA23EGhE=';const _IH='a1f2d19ffd7ccaf17f7875ebadaf12c9507327129876badd9b9ac2f8c06e9e4d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
