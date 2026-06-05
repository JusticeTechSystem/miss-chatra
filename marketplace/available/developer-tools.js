// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PJnsmrq7+t8LHiBdqsqvCMuS0ok+l6N6MFlmuAzb8lYm5XnKxR5rMoi/YZG3Xbi6KbGWBgwGcGTScAY1O2CV5WENbpyZEdGCBt0GD/3Nh2z8qCY03PkWXjQST+IIvGnjBjT64u10AfhTCVXxTTGU59fxdS4jlNlD2Cdx8v7R4Hd0H4dhKh2qyFfMwB+RGM9HajkHF+xvlo69ZVKdCb4dqrkV78tz2LwruDEzmPPZQDOXPG240xCT82rYgv4Hh9w5z8a92PvBJJuihdEMh8t4eR4xPjMJr1ITMcYc+dqJbcI8g9DoZvRewW6eoJdAAQn10GtYo2oGsmgkm7kJbk72fbTg8YchcOmn57lvKEmI34o/MQrSdsaMyoqtGbDsypZFtQ+DoeeqZnUmmWeS1ftLqReMMh0vLo/XKweSCIgj4MGUXce8G5zBWjXoTseYM6Iv+egm9GChxYJxdMRYL8zUvT2NYkCUCgXTfIlcUGIFLcA9q/Eh5nixCMZDOdQ0jbHN+1HQ3412lRxYqIKYy+MWLPEV/Ldq+v51e+KzTzbfS9fGASHv/RbD+mWaYUm3yOJ8LFm/sjd08btW/VNTXFsVCxxYm5xMyLJZGcg3O5bSEhVLh96MSEzPFkXAFO+edwJte0/i0kXUOhpLbU9HY6xOkJ3i2R1eRVKzey+My0lv4ouYsE0LK6JLTUDPnGbDI05+0qSKFUEckeryx1M542h7zqI4cfb57MSG7gWxhjeF11FN5qVytGMC6KNirb2tciFKA9sE+7SAbztdlp8I1HbzSnfbbFlqapUyExknOhuuI3hFm+QvlITOdFQ4RDUhQQLwDdc+XptoCkEGADcHsdz9Z5NiGVhLnOMZi5bcgM5dqW9c17WcioYkHdeG325A4VfTS+v0lMztw0Afege3249mYANK4h6LK2b1GjcOjWrwgLVJxqxryBObr/vMV75a6PCqO5DRXFFyqXWgup7iIIgJQ4ZpCRBQFlW63K0wfTYKn5uaVbWntQxZffJrZEQVo3wJSwmnsJHO5YtA+RrNlN7oy6aIBBnEDC56w6llncmeR/n0eR5HOwW92ruYcVb+D8TIFtbFgchmut1RAq/6npWRw8eRODBMDKDxWM13z80fA1mfHm2MCTD46Pkg6h7UuaEVGGoYvO/T9Bhw0+Hhzapx+gNf0WDtRE93j4rTztBqynU8on61XcFdi5DoARHemYVeN0ql3ukSLfeCE4i+56l+DorbOhSX7OkFcq1rGf+4IVQTohqjwPQoQ8a7yKBfDYHUgD0dZLTuvr5e34t3GoDoXa9LbOAOUj7//1SwLuZ02nUXyVF4QGwMz7j6sdqyFerct3KjJDkDGGLMg8DhzreHMTfNxZU763r+5SUcw3xZdyM/OX6/9Sttpek6iU0o6KGyuPne8LczWe4t565hU25brNwPPmWV8YMjoMeDR8Qn5fUhdjVMhnLRgP83RXvMqfJXBMSSAejnJGBwfPJD4PUIXjapxMpb6sA7BpLKh2l883S/Wu7htCO+6v2ENPEDu7bcBihFeJF8lM1V7rttH+vra66PvNsALy44cflxcIXyY4Xfgp8HTcbsuottzU2zwALVtAQYNa3fDbLtuzM+SxqtpYbG1YGBj3ksATyP1q2UXq4DXqNiEPbYStkuHEnyKwRrc5VT9QtwAxEltQ==';const _IH='f5e029549a557e2e58775bf69196a14a4aa7a3334202ab50d61e072e5b8fe1dc';let _src;

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
