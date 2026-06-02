// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n1Kw5KczJ9v1uFxyJ6gKYLTsCkK/0NZ+1epwPr0f0blLf4+J7yqo6nRmryjsreIqRXkysT2rehm5KZg6YpHMiSdFOyUoqMbmBXLgSXqaWWEbo+/vgYaW1HGE+EpVPov8IQsOjfJ2wnXgEHn5vuuEPOsjKTFXjC2Uimg0BNnR9fNEVFE/kjx5dVxlEtMk6rcpvufFQ0MX25fgvfTOcHorMpZwEh8ryH1y2TA0icEYRDQl0taYMXF7wfvVGxUltDue8QIbOKoR4BmmjUlsXutqEgGdrLmNmFQ0Tikg70yxxcHoG2ZKO5zZrb7+apa8WEflT6SVyQAAqDgPglGWN6A/57FztJFq+n6uvGUXDd181w9J+n+k1S6o7xtVv8ip0SROrkdGLBpBetFa04HDHfdi2OO3jVluRNoyCGmbluO4mVjKKCx9YspV0MPOqT+o8jqjpbt57d/ezrqqO1zqfYhZJF+cvjnl/0kYYR2HB+5kUlqkvC18JROX2XqcQohVo6cwqQOFY3U6c1NxMSDqI4kx/Wg5NCKVWf0lYWG8fG4haih+TCNr7LkpdnJ3pIsgA74KFeqzP2J1M+kXPyqO5NDBexsmbBu0gwsyuN5T3TVHEV57OG++f1f9rSHPqBkVRpOm6Vnn3qveW6f9LoVZOBYMAU/RvDetfxq8naRxn9Gg3RwyZg9CZVN+e6ccuVfi9hxY7VpqIDPCj8s4N/RhSBhvMsgqbfGfOSsOhtfWmLORn8UWmiUwO5gjZzeMM/Yvr2/EGuwxvbLHKoeEjDJKDxFEWaQc9bcOSd14sMp3mLKCGNRgmJ4G0Kry/eJKPJJbHawuL6QNVhnHZIfU3OzBd8WYwOibq90gKxiW8FpMrNEw1MoHAAExWftEKG+8SEA5N1GnRe7aX3JMb4RQOafbQnQJQeDSYc3rHmx2PeVGOL91V1oBpVuFwq6RNa6BOn2KrKNEg7vjKbnXOv0Gd+tkZ9Oya0Dc8XRP+xCZDlVAiwHhy4YgVJZHuZN1ouAu7rY2gS6OboDQIVdej1X7TjJt10iTScrHFcPNwTe0jahzQIjOBat7qLKBsKYo7dObLtDANTRDmdZsA7+R65VVOedo4LUgO6Lm/q00JCH5gUYFi8hzPNCMZw4wUBsdsk6VmnT+KxZBRpRCTUtDYSSB8r3XdaU1DzQsGznIS2+Y/rHOf4m6K754RXZz2nLIbHBr1muO0ejOBOyXx/cnzQFWlM0OtaZdupx5PQG79XPlej1cazCWbnRr491BclE9Y9g2zaUDDm12DuOgWEEPelVuX4T2IR67GRXbNcP3msHAVjC5ao07ldqqzBifjpZTIsx/vfvpIigJOeWqIGIZI8EX+A==';const _IH='22138b3d451ebbeee5ce76a5dd1075bb1cdd3636792e5057b144fb603bfc18bd';let _src;

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
