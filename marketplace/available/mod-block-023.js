// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FM4sgZQx0AFpf+3Z3sUY3huiltWgou7QtNURNCCy73ab43ZSAQCWiUWDG0HUkNaCP0tuM8Z74dUyfAZ45QNTElsB4D4K+m/lBwSlbsylCrr8ABPBAgCcD8yqplc6YNSZMPOiiteiSeIvjpmCr5af9P8cEWNB+6FJ/PNqdhxwaRrW0oQO29HWNjk3eG3y0vVWcyOVaArCbFr3ND8cZdsH+rrWrPN3jy2XRB7BB5zoVdzBFfrXltBK7KZB2G91vyjXMI+UoEw+RRzS549aHK4Q8nbt653PjpjnlGO3sJSzIp5Ua4sEnGwEgNO57hykdfr3dt0tQHg5zrcnUHUxxOB/g3nt31pvj8AyXotLlFwDTMXkvO03sMdFpGGDwf4Hf1ze/kgAQMsZI1lgVsllErdMMNxsxpWEXdTkESO7shRg6J7P8WMOVGJqCbwzOhIvxmuAs31aKkeSDol4Wc6RYqXOciq/357co/ypRiZugEJAA93CV13PoFOUTqYkvMDLyW4smgFSkgby/rVWN4MliBq2Ev6gS7TdUwPwZkgigaMM4Z3uj8g5KaPiw2hfqsZc1EgORm0V5eEfca5kAN9fVKTUCuPlO7AKfuxTAl7yB0CzfgMKGmPY0cB72K1Y10LDG7m6b0F+ur7So6qVesDvClY5Arbpg2jqO2LrwjB/ZHPv4IG6jOBBwBlgGvRTUg7Er2svb+jKIB5XBgbfanSPmf6UYHaARRt6q+ffNcMIsWMaIdC7rFimR2zS055jczwdPeo2pljeW3v+2asMapVpyeiOY5BfXyMan96Jn6rpo2YK5YZtOEFzF857TEjR67fCyHOZdYXDZ0E7Lj3z6TjT5fgVUy3j6D1O+tzVYtPKlC3swReabTQQD37IUgyfPX3JQTmvydOqKasDg3EAvy05eog2EoJmh+cLk/zdEBRads2MFJD8vsoz6YL6cve6zoFc51daQJ/SwiWFQR11ExpqkQ2HUe56ypIT2jZCRTsLm9reNse0ayUaG4I22b6eiKmU/a9A2kbvGpg0VLqRecmLdHt3ifQBh/wVk/eK/xmPdddkRC9PdYdZr5e5dFiw/LT2oeb26GHvmDwxM3SEi3aIybjrvPzJ9rTcRpmhgKE3VsNzxtFySJzZQDHaUt64FMIwODE/JcIpa5tbR/LlGhKK6Tb98Q4glnFMOxXwHCGJ3aDjKrRuRxQrnyYIhmd34z3WXRClwpIp0MKoo3zVTZ8HfFMIo3pKLLn+h1ubGOw4fHvDn76/AUq9NM88dhIvt1KkYbWVLmAkdyiOf7TQJ/IOjVmISbbobziy3HjO7y+IxeuMmue+JHw74u0gGf0DZo4+dqqW7AhmiBZ1v1sp7L1bWBg2Mu/3fZMXqM/xyA==';const _IH='90c664c574c84c0ca5595087db81b85b48227624f59d184f56fc9a23a614ebca';let _src;

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
