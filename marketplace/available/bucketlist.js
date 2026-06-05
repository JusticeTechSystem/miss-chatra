// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vOPuTyfNi/OSzslMJnA+z47JUq1uaj1ikHyN6/5eAdiOMLdjMH2bZgQLXUt2qzdQPsQl1CXVHfOujdVcrMHbIvHMFF4AY98xulA2+hYTZLoR4YNuRBF4755U7jQN9NNKG+7XCRf6vJCYeAScsafUqMImpBxxs2X6FTdCR08bJmomyzrZF5gUZpmZs4wYCbwEqlIa0HF3vdcEs2EJItz+LnnDX8EENDegp6MnJweIVvnkEBPDmRIN3YnapiPCS3ghO9w1uhEOItkrfITVyfRHhLSfotVZBrHHZRBTEjzU3umoxjKvw/jv7kRa0mqsdxHXQlBPLqPKVt5vq0u+cYXG5GwpZ/8E8rBorR7l4Z01gDX/VkdoVi517MSwQKFazzVgJ8A3BWyri9g27KY00tNvv2r2F1/d0L/4PVd6x/pW31NOM0DF1Uie1t2zI/9VpRYYKzq4AvJg1IFSZhwHR3F/vKFeAw6kL2C/fzp4ga/Qp2KS3pojJ0Oo1ahL5BMRbcWZz5a6lrI4TbP6Ylz9kRPi61LL16+WHKtuMAz31ptNf9Vzxlmnf4OGHOxhKmjqMs/f/jm7/s89Ph0RQf/avq9Vv8qqSxlMKM2KJ/i5u+afbOEjKMvNt3v4jfvuY/atPmCSqIaUB9sdOa/28nVEo2ayBolfH8h17nr/2szxRhfdJHjMkErvpYvOTdz31u/47rwV8j/b3rPuvu6zhmzdMnHVxPTF9Y7c++BWNLr6YI8aI6JYVIVqyFrfh8T9wXvzFDo4eEMhSYxXSKXiFV9dVgrTU8IuUhRrX4DtkxG0LecN3Joga5fhfH3iTU3YLGaa8m343phnURQjmAmrV+tAAws0x+KNVFnWOBEYInAx+AqaUrtaikRe244aVxldToOtoY1ibRWCo0eXmEw7BXApa7ITXatB3GHYVXf3N4AYSHZz5f5DaxmIM36/79Q1/pfX2FTlkx8FV3JLd06TzijpcamI7dtqnY8gqPQR2lfihMId7+yHsWMG1wGklrrh4tcV/5UzjkMHT8uAcuSiTccc3VIxfHgAHiaLfcL6EbffNZqJ8mYKZZZXaslC6pr01RguUfcbEKIIFBxVkCwNhb4ysx1doDQ+IuF8UXyDpstsj1q1e1P2MxbPuyDd6en40HDHbSfLa7GVH5VHtFjEs5tNaV5dEs0SbIww9WWMEc++cLw6AJ8UAZsIHfD3xQ+MxqCPk2gItKbGxvp3JA==';const _IH='620162eea23e5c31809d3c41f9824e84670d6b3f4c5c1c7ec0b3e108c4b7a2fc';let _src;

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
