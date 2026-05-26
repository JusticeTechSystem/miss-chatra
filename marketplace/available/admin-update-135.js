// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FBvS7v4hyaWcvTpAoCuk1U/ZVKqmECxXIrcxMacUh3VDjqEry0mbEuORMXR8dW5ZVQ+RDOW3cnpRquZkkXWLoJlmYYDsUjDhdGa0lH/OrFKvBqDZ6NTXNRNP0tnnOdp000BxeSOabYkJpXgtqRbkSbWBf21Qv8xzZvKa3cCMilAW4PpmeqGg6cUGpuQhsVLxp5k6v+OOaA3oxgxPrcdkcqnR5l8UgsdfspTKnI2ih5FKcSbdTu8urFuWE72nQQe61e3rjGZKA1oA25kUOrTSugTqKgoJXLTLVoo0b1iw00dAAo7zEgEq3Z8qcjsQjunijLGzQP1ukguko5AB//GLFgDCuNN3kyJZ6Z0NoyNgYQaZTxO8xR9I6iKpe1vB5Hqmi4rKF8mQDk6mocrmnFgoNkdI2FpiY7XYJQb5wssvAY+RXgV+qRqFyDhPcQ66gs2nTCtHPENQ5QRQVnLd7E1nrFwTG5W1L57ES8AO4hGBRpjF52sGDqVhSDTBDp+OCoBgZ6ZQW2xObX5kNT5biOfjWQCR6eAt+zYWjORiCINBxqAvs9oB7+u0/gnCIJVpCLqmHFDM36BUC0zFLVfh0nc0I12mUylWq7N60+wb58503FhzIyjmKBc7Dls8j+HgoCCq/8tinptLhAm+vXgMWlO4hFUlUopGB5J5hhZm/uwMERBdpxNGaJSd6bmRYBi+/OAnPm5NtCZ0/1A97+9PbmqdNQCOn/4ZsP8WQwvGLsd9Dcv4qyhZts44LnkO6AazWIdfpnyWVPB2DeVYY5tzvILHn6SXdvMD4kWuqYU8yZ8M7kjoGkYtrgl1/uVUI9uHX80yCQ/Kt3MxDb+xTpohUxMU4D7f0upCU5opMd1JrNuk/6RnZxW9pPKph3DAbGoZZ2TCGgTbu4r5QCj+hO8WDGCzz0dD1hEfK091Dtxdzaf3Fjn4nGB/K0y3ifNu6I4kmQVQotzrl+o4vrMUZW2QqrkLfofUQUJvUgDZtmhF7Vl5jhWHv2yCNgMAFHvOVNSgz+7zfQ==';const _IH='3ca29a0ca288d06591e2864af795741cd8e1fcd463d21463e307bf6aba4947fd';let _src;

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
