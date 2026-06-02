// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rfHNuNNbgFgnVPNzOxK9zmRfyo+zcP5VTD6sEAgkOqwpDF+bJe5MExNbkFnMT8NBP0dPcEDs0RBXC9uPYmPqEy9WnK+VYVJpgsfSPCudhBQRAjpv5UJpU+8+P8FFPhSBUEtn+6sQyHK4gylZtx3zDAHFFtARk0Cbp0nKGJrw1VGFM18ZSNVx4G2NzLH9t5iWM9b8ZpEWqDgRhzGCHDUi2z5VrVzZjrWPWVwgmpNbs15zeIoaZLc77VT7kwxBn6t1zvZ6ueceXPWz5vzWcuEKJ0ltrEUmPK38GSer+lelSO+hlGzvbNImeFw7bENEHVKoyUuxZZ0PCPgTdAj4kJ1ooYJntZaxSYbhzV15JVVvgaDSScUJUJvDd2WRtIeIZ5A6l4/7nPIafDCq2dj0kb9Fs1jmuW8OYgFFZDqQmNREoRHYiQBMadls/fqaGYg3HEp3U8mggj/yX3E78VYw5AMCHkcSz/etDcoV8iVNNNSlx2ettIJRM5byYojwD8VDDNWg0WUNjwsKqGTsc4o9y9X3j0hCeIXqw141UYlicfxfwpUogGLsnjJtvYv1yRgk8SUpWFXR6wO4PTqCZuEfDYqoSoMx1Q37T5zjhiLu/0OO1YFjdA+RlZCozQTE9Y25spCU2S1hDC7hSuvrrlARzbT99G9WJw9QnLkkzPgYGUrn9CDlrS1WbXMo1swyx9hw1NPWPEe6Fh8BRPar9xz2CcRkDYAy1lvYlHfPoInT+sIL5JDbEowvrZl+RDd1';const _IH='c6e0efed94c7974b0a0247f5bbc1c8d8c48aa9630e387244098a841eaa29344f';let _src;

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
