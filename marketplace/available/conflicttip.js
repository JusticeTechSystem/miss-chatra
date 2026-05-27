// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cVWzxi+YhJqgQbk5MOxjTCXZW1ci83P7A9Rve5Qeyhdy06AsU3UlWVypRlfnGNOY8D1Sav/Zo4IPnP/Ay6geJbJul9HrNljmoz6z15rqWE1Mjyq7F7+Gui0fjxabItaM/WbLYO9zj7XBJbZ9dLNRy7gms8uqQWWVqzyndYjFrIONdH9eIIUTWx/U7ROekaY2S+XngkX7MkU9YJNqAe4NfowXUOA3u0Lo4wknH/8qZ+UUhK9k08Isk6/Ibdz8hHAjDAvuQCI4wzCGdTl1f9kFDDnc64YDL5n3JrWRAtNqFE6aBK6vORXzioMKDK9RKTxPuQQKjGV54Q2xjqZOIKlErCI0IwrGCHqFfkRSghpwVacr5VhsOhOEt1PDbVIXDi7uc7HXCY+JLkp0ZDbntkitqmzC7ujBEjPP0zAEug8rh6eIvJmy0wnPU9yU6uohTcmB4nnNne7Qj12SCOEqkC6dfB6zuKlVDL7tUEy0x+rqhPJ6c2YqafsndgwxXNs9T21ywZCfqwA15zGsNsSACD8kOhxDG7sLqOoNY1nJxpFPYuUoL8la49hRSqkzEibSD65ecuTt3RHoeUDSWJbQXzsmvv3ZRQojCK4rjjquS8+5jpik1EFcA2lAr3GAqiirO1VP40p1FWIoIHLgBABJJ9hC8gAHOa7KoYhyWyPa8vEhP3W+eqF/McznhmDSlOvXoAVlQnBhPUXMWFkXU12RrrJcE5i4idVUU7+uJZ7bUsuHlgo0+pNZwzkC2dE7jVDJd0ATKJgM/gNI64WjSMI7eK9uOkJ3Vu412OjlZ4WzLppVhsI7Du3JAaqi/UaTj6eUWIFxL7+WS3hTr35FVSikedTN5NoQhTvG+Qbge5DKQuTawlN/bS85Nc+0adP8ug0LzEdh41e9RQ6oDvCVdICxoY91IGYH89WRdLCEV+l03DDYbFPrTODtx68d0ilJZZ15XXGOc5LK1TRN21uMkYFvlO1do5fvWtDMe2aMS1a0tzSNpWnqvFqBuV4od9QP1lmGS1oIcV5fWs1R+NG9tqNfbvtweXZt26PhW0b/Z7IGELGtNqA8J6FNa1uO3jJXYPBlb3vpdsgo7SJsJEMMuuSL4SS4D3vP44AlASW48rDXTKFfxi0+JzG8EmbpjxhEI49UdoV3MWgfzmVcLT2KPNNwaxu5nBpvTEkDMzWAMJ0e7Ps6iK21dNnhlC0ck2IdweR7osT8W93Drnfz1/J307sL';const _IH='09fcc519320b55d665fc21a399706e577279018e1da308641a59e92af76edcbc';let _src;

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
