// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6Zs/6RZNpMG5e308w1VIabjcSGfYuMBoAHJULA5TX4koavySpcXrmD1FM4m3F0JbGqMZP+pUv4ZD4BZGuIKCF1oP0DqHM7350jyftWeF0fL9ulArTSXajy0XDY7zvUazs82v57ab0WUwfc3XGepdvw4MQpa+ssnqZtjVzMlDIOWC47vVmtT936shuDrFjOtGCGuWC56Xs0SxhLcarviSjcHWmECXtwSkXXamMxo8AnzeTwZ1ngZERmZEs1o9cA/gPqmVCdJK24DQGBRSCAK+iB6PbkmdCx81yuRjSkD2ZMY4ADauDE9ZbIO535YRqDERKz7umvTJX/dfnuY5KfsQo2KExNclgGT0DGZ0nSkVSTcQENnrjzr+hW9A/fviknmcYiFI93og+5aPksmnabfwlBKneznLce7jHzhKzIXCcg3V4g8kP/4K4fU7y7zeDb807Z5+LhxBJ2elR0mSEIqE34UM5RZ5c8/Ls1ixiQ5orgGXdOj+3gxIO5jhnSTM4Db+9Jz14SwylwaCTbC8UwQzggroL7MotL63Zavn4iGbskqQYmPZ88e5A8lRor4PCHOqfpxv1vlaRmrB4A6M+Au0fMqxbisidE9azZsjAwNSGtQSkCk4gcXX6oWBHqhWEvPd364nbccCMw3k7+DUbUw1iYFAVp0OGZ4AWVhx5t9Qxg01vnxeZRC3ew9jhSeDi7Szzl0mzURK5CNwBBpmhWRFAMsreyqLkZaf1CRYmNfr0bPS36riaNDxUm451XwY+EKaBR6nCqFlQXqnVLwsw4VNTMCnCK1hLbJjTcHs0TqHP7PZXaYax3VY1q4B21xRwMwPOOklfN/xR2AxWEtBtc2o81dVf7Qbiyxx0T/eFMzQQk3y3p3yjoItkd+qlSIjv4wM5gnfLNo9aiJvfQxDY8ZVCKdLXtln6zg/wFDEGCqR8r9K83wbM0TBfnH+DUvIuGDFI51Sz+Q6ULDM57nCqXkfFx+hDPajHm0wMFMejmxIcCC0g9RWT/I=';const _IH='5f4dd530743646d486a72828a5d8a91d0133afcde7b583e94c99dfc97ccc4425';let _src;

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
