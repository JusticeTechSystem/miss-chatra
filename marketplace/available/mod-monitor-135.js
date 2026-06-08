// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N8Lu/QIY0Ukzk8fIITna/Jp8e3VKmuQpH/C8/Dd9XBBNtTEgSYeP3kWlhKkFgKrT53B+ZsojKTWInBB4tqe0m7bYx2O2Nv98+5Ft+J9Cuubie8QU/YwhRBQtQHXtkAsFEg2fyT6qPK3nC0GmwMB51T+ri04CvjIKXQMs1xnnY9w3wh03MWqdxIaL63i0OzIaE+CA77P7IVzEaacKediq33EwjW2PCzGHadaUHVekWfeaGFrdoLpfx/vV+MXGQLgQ/tsPBSBKrRAibDwARuRg/SWPxoDdGmn1GDo+edQk45WV9IVUZac+nY7lNmgTfjFRew4KUJU5tfWl5IT7SxlmobCyk1byBQ8/goLX8StALOzr3KxRmOikhEZPeSLzZvZURqkIECQGWmZkCwGw4a9C+mQTn/ErVoD3ICYm7Bnx4WOOVSutP9OS3Y1VLxZTrSjnBqt6/lZECjPKpPy5WjornVpQqEuIhO/mmDgqAR9XKNDguJU0xdTPrAhDV7OmqHL9Vn0x3E+jeLDg5rpBjho6QUc1t0rbflZjVw1L+ahMe/JchbkUcCY43sYiuljhY5n83wyNjHw5WBlwpU3L0kVA0R5MOM+3t9JLUBXXK3AZPtzKfkK0M6r5WIAmc8OzwKf8BmR0LBNtUtesRAnXyBaX2L2TPODPz9yFWZj2ElhYVYs1GPMzVcDMRVF4b4huvMjHkxLqVN48cbZjjz+QQE2h1GefYH/cRFZeL+dkGLSDw1tG1OTj8rwtmsktAOFzafzzWL8dtBRr6yO9j49vhq7E/ckKCE9ulrjAw5/fSJmITpBtP3LNb4HNFRQ8OZfPtfJGz0ZF6ng3n+VCr3aFnT/VLS+TN6l00pa8Q4wtj7FoVoNNYjyxVo0qsa1jrCeE94k+8aUSaFcerSW7z+KblZbG3oyjl+UwQgFkdn18xR12/RruNe7HorB0gW1ZdajwQeU3xVk7t+6xX+hBnqpRQW0BEODgU3bZvfxxQAm2u9jF4XO+rhDuLtzuSo0X8bSAwpjjY7IKxfQcBWaTsV8eLG3TWkZK6UzLI8QGK3ApTiZk5GN2V6VOOX1jrcH+WTZ2giHL95Hacza9nc+KcgbUreYeIfsM/6wrMBRO0cTNtORFWj/57ps8gNHX2okrwpfP/qSVJ1QznEgcx2eT7U+AaB+iU38p0sqjn41vb6t4Y+A9q+JRtrdEz0cQsxczrIorUHSEvjcbUhCoLeqDfzgusg8C6drNAAjyvqT2h5NSAMVGbpSMVAV2RoiuxMrHcCapYqafuXjBHlGk0SBWulCury0Wjr6/aStsgiGsAUk5gmABUulreDvwL7R1YHQjvxR7QX6OIEvsYbibC+AM/WJClozd0Toe4WpOUFrGDhXWJAjjWTNg1nifkGyDarZJAoqiquFxJN4=';const _IH='e79907811a1087a410a28a49378de34460d11c1d9b930d390ea92afb914ce30c';let _src;

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
