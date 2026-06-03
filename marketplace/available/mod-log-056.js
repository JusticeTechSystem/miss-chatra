// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZRyV+kag1zyUVvONpdxiYGSTSQEG9H3oOKgPblT2FiwFCLBw6Ww+iOBAS6zVmwMXs7bzTh7J9oGdEqLVNCTZbpI6hz9EYPsS44PydiyFfWYBnVnkd6C67pGKCRmO6KCng+vFAgER2Wdg3s3tJTVNSPycfamj2xMNVI1gUyJsidQ5L6BRKQU7N5B2UDOwAbXEY7AOQ/3hzAybXlZ0x+AtvNalILprm7BtK0Gg36guLS/Mav6TLoaUqFfbC/vYihtLoSsvD5vb20zYKAmQqZ5TpuE2BBg52QpajfT3rrt7HHEowaS9MMvl0+jlP5yyQIdmaXcPky2kvlFPnTHuOUV9IRDuOP+v5VzAlO5q+dZc39iBz0cYIr+0syjp5TqjwNeJk+yzqTxn9BBmgHavXqkyg1y+h9JtX3tF+URKaMhNiRT2uPsTogPH2TWmmpxg9casvfTB9u9ta3hMUOvwGd+bQGLadlsbUdZX0QMAizDclEiVwdXRWMnUrBkwLYK4oOfADc0CxzAdq68IoY9S5kPHgQd/RZ7NJXfBY6j7oPR3Q40zGXYuYN8pSUjpW+cO32FD9R0NTiKUXK0IUUxHt5Zzzp2O27Q9Z1Cu++93XU0K87pdlGx49yhqfBFmwTnSEG0kLkvN5mqDogqrOHc62ujco+bzf8gjHvCPQPOfJsJovBs4UpLtKLN/loLP5U56dy9fxyU4+2AGrA20nRY4ZY/6Es+CuC2fV/8OyawJJvDcucf8x4L7gsEJFPijRUSYTlOInYNuhhayfn7tD1iTrT8yo3l+GrTHsA6bDCyxkD7NG00GCHeM6UdeyujJL7wzvNuAMcjhHkj3sulm30X9Ab8HV7J0BVwh6oXHwkdhAzB6PvEhmIeAGLNvVrltgTn3TSFJggLdt+Q85BfEIysA2Mi/eOEwjeoZ3LAgHYdqx4l9HQIrrVucGEZylJ8yUxJl5gVKLSN8qWHIZYQcGnb75+zEArkwzCdzIhNHrYeGsFEXd0kvbheHcpDJ3Y3e/OKfcoCSU+RNRQjpjEVqp24LyTYZS+aF3askj5n70aXaXvnRJ9CM7pECxVUGOMSASXoK1+Ew8XoKIEGbIhPK522YkoonKn4As8FlutenqfzDAjDBCLHRekRu2wpA2y6wHvzuyG1oPrpAZ0d8hqyllggG0qr0Ji7EbERpqvFWuAzUqNgAuJmpBvta9yIm6KnMB5/n7PFEef0zcITowEBV429CNmI9UTCYfMepEIHbOlKdx66akfJ71Y8mMtVZGkC4sHUAY2dlS7xj+FNbtgqC/XB+hISQf7vh4/uZ5a4sVnNHfH+gLHf6Z7K0NqQaz/Eajmm/oV5aQgLcO3w=';const _IH='2608a29c9a1cdb46e7e7d6a765d86bf27d90d38606a7a9c6f2a3c4dc1d29b766';let _src;

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
