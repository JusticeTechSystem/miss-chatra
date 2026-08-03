// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjReyW6mYwOePnf+0D9oESTGA0LptOupFddE8CBs+rHgIBAHCxBM5R8I+9BS0PZTd0mnD6as3BzQLULe0gFPiw/A8/6Hufg6Z4he8yYls+cVlPUyzd+2lJZbmBAFZXuWmG21xVuCzv+afIe56K+jzClYoQU12sVkDbub0pSjc2KoY81ifVuJFuZXhGl7DgV9imkuN+IV0ga7B0ZN5KFUqaNFUTBMwqfJQYcRVBFlRPdWJ8aiICAIm2j/A7kUcEttrfHdLhQr84rWEOyp6QvCWvNr9w0+jKqkVOuHHgclh6VMF0dnKP/D2u6NkSNxNJUI61kTHJn9VCZlLoDK4vUlxeYlsup0umFxLLb7dSZUI5A3l5wY9ywUa8oNEm74EaPTngUznQLFQiKtpAUxUJxSsLY1+WYimjwR0XVKf6e1x4olTkaWArVOZIX1P6o5WLMUK2kvyrX3tREf225/Xz+K/x6JywEzq4MNLEmQBo2NO7Ka9kSzOij9txv4nilfgikpGkIVUW0BjNRlm8OQwq4uUyDWz9f5V4oBygHOG5bAyTL2sYNNznltW9kdoFtVErUM750nkRPuJFcUhfsViXgvXQX8Ehe7JM0ZBH5Lw9+cSvY0mg2WhkwVR7u1dq70LR9yPOlxEMpiRQSJC6odRsoIsixJynacwbtgd7+K/PUHR3MBFaiwkjIxF2A/2rCxQflmKw2x9k8DcUIpQ2VvF4onhmdEnImydzralGMSEV7aUR7kFbrx4z8uA4kH6ACX74bXE9QGkv6BceGPqHAIPYZRXFDDHT01DSeuAQFtbVZKTUF4rV+b5lWOsSE4xsCMNgSTd6cjfGeagGfPxA6o6YWpUtSZtHSKNRN7QY0bEbKwW2arTfxNeknw3xDjuHE2CifnQ+poCIvsJ19erAJvo5zJnj1dpuAvXQ5LfvsF24pfx6CFqNupc8NAgCS+mrOKjrtPcEZy0w3BztnCR1LN5BBqjj70BPyJJrK1Z9uEytmNlOoJHUI91dqdrIwqIx6BQ9rnO82i7x9FbZ7fv5FyACh42pJ1XT0ymQDMi48LI9G3HG5entXTz53r0qKxgj774mcbJzGKsfRx85wThxG6tHxzt3h5Gi/18EXzffpxjChn9Kuq9bWsNlJEZl/qOOyS2vZmM67E9lEPMdv8QNURW13bn9JlYgDZgJxM3wBGFFT3wac9ZVrb0+G1UKCBm+pkyCCWvAfV3Ro+YeEcFuM8c22BUaGchdbW20U=';const _IH='f92ad850a2d4e6b388e1b26e3c36e05364afc6ed3f5f45827e3f73c5ae7061c2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
