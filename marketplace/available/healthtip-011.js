// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sbthDaautxdM6/dnC6gMCvPbhk7AdNbcPTLUGidh9DoijXdw/HaEuACWC7/VJJomX2KgCM6P0+tUBQr3z+TZQyEdfzSGA9QEgTXVEh/uFwxgWRP5DlKQ6aYP+Y9qdnqwmZJi/h6l5n+wlXAaplbig4cx7egGIpluu2w233nzN+zUCey3F37DvdeLitO3akr20SV8yD8VkOL8fp5TQ3HXfDKjQkf2+1koNInYU6eYkqA++8m9rhA8hUHhLrTdYrPJUr8Q3U9DA/k5H4/IMthVNkLIebgIuE3NhFwYG/2/gq+T6sokhxjgrirqxbfSJ6HACOeQCHrb4dl5mNF12mnCgmWW6TKKWni04C61h5eQfYM7gudXa3Emeo1urT632wn5j50oLZYKrKdhKVvrAwrtj+NXAs6CXM9ioiIvCwwlck6fAdWI4uZhoP9k9OULLAkYsTXe+vS6yMvE8rdkPpdsuQJz3D6KC9JzPXYIWpNGVSlXCuu/1YJciaduWysFt5m1i5ZHCBqP5zlmz+0DP11xJFj5e4YX/GpXYtyn/F+dr5wSRNanAQBqqZ7iH3nZ+QTNrDd7IjGFNQbYxMNlrRffJs6TVM0HjjS0rOL+KEj0fytLzD//Hy09TH/INqtqlBTlWF9ckxZkXnSCMKhcmURHKL6R6we1jn/4hOrbGBVO4419Si2qwAEvmb8/SbC8WPVssEpV73PpMOjyqsKe5Zr393WYOp5VvuFBsHK026qfsyCZPfISl3cwePB7Fs7fYEQ9z5NmnRj+GTTnCNDVDeRH2lxEcZH8WGFeejBeJq6px5Q/u9rnwrdZtrlwXOZEWfDsqG44qKvVoRsUK58AOQKazwn7z9oVTpx/4veC9myCz9gLGgMrWJgXTfjgN063+mm9L1ACfQZaKHG276HJ6Motmv33ngH8bBP4RfcXZmWmWKa2Nu1yn7crb90nUPI=';const _IH='528db874910982425708e68f0004af2cb3190b6b6e065825717106f765903df5';let _src;

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
