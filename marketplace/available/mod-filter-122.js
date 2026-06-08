// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ioJSH4DPpq0m2RzhlgzpVckHRTOGQ0Vui3Fi8mb+Bovanl1YL85IKVsXPfPFjTMBkF+nvbw6G6JI0EPPvENzN3OKJ8htz0yw2eelEdkN1rp3Hn8+Hi7RNVQW6aaRJ/lEuQ3Ms9MWLJRzqRp/Hdh7fNG7y+8xJ0Dhnzsg91Q4jWnyPgBZvPEaIXkBdqEwvhrduxMPkk542DkWP08eAPXAq+zdedEApL66LGUGP1Jr4WLZTVgrn/WFA+WK0W+g0Z+grppsdeZuZBCtRqrSnVOGpD0h/OOwXTOUgTFgyhz7RohIqDHf50ncuK6XIN1njLgzMiW8/lVbXS12NipAq5kstXkD1iYttUiGYHjN/7G/MahV+oWbdE3WExETXrZMv8z6JqPr2TUmHsA8goX+NmSxER9YXgZ7Vk8JLEW5zMuHzErScIuwlzsz5buJMYzRNYVO6z/Pa7k9NMdgoGsDPocGikHWBc/jpun1uhK+ssZ07tfGAKeLJxlwalp5rUdCzROlMbphL+G2b1lsTOhf/CgWJuUsaJCM4+mKw8OdyE4LJD32vUXECAYTnwFQc1nNz1GgkvZqxJllHHRZr0XkdxG7SroZ5mLA2qu9zqwtMpL9UMr5kLkk1crUm60HzSJ1QGRRdTAVIrJiIPDybqBZ47aXcsl+xN7CX8JfwMTUN++nnH1fOg2vPXku/rdtdrmNyLIB/Nwqfl7eGdewmmoM8R/x+WLzjxp3uvb2RY42sU85n8cvn6qxbYNNArdYhBRVHjEDniWabCYy1YcVV4lMFuvnB7KbmgKUyEweNNxSf9EcVjg/aDUBBUBh81Ch/M5PkVT5PpPBZ0Fw1ehkDjqdwOdgzdJAYUf6u1tBqOdRyLbob8JiVz7lz0D2CbCLTvsGmoMihtNJ0mefB3uF9LE5r2GanWjahVF7ixRQVBc839i9josOxDJUVOKxOAJ+KgSRyFcdaJoWXtlijoigxBSIOMKi97Hy5ASsiDcX7COuPjhTPM7jPJb6Jkd3oiBEDW6onHqFV1ALHvA1bzdJ1zwmBo/gmQdSukK+I4awvShDL2tCbm1R2SKKFsjKLQrsj0T1z1ivGWU8nK7rSxZxWBGLDQJGh3vjQPL5iEqqsXOLwgM7rQdUGG2ULqbk1ywqd50VgLiq0w6LgZMPKcfmOORmSACV+HE+urO1n8uQpQNuffPKHEo5ldfXXFyNYa2aDokDgQjFeb//01RW1i8xfN1KsrgmFtXqPPAzzVyoG8qqpLYrK6iuWeATrJk2bmiJfApPSIK7wLhTVgyKfpVkrandOnZT9kl5r1bhJq4zaNp1CCqi8D+gtSRaRDp8yMPtiU/tyTj10JYqSo05P5dXOrn585vcd7uvvqmb9ll6Kw3LvaxbggQsGPxNdV6hOA==';const _IH='164fcf63dfe61b1c7bff9c84b9b1ca51a4393d58063c3e3c693ec366263c4ca0';let _src;

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
