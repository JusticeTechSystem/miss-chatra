// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HXF3WSznJWc+PMSNVlCfBDAGwMOmw356cbpxYPn3B6QTwRY2PdpYe+Sg9NJS0/LnWpm+MyagMWqC6jHKmpPGsCKJo6tHhyoadz9mT38xJksU6wsrBsdvxlfVi0VDNAy/lHqcoy0bQADD+PM58tVe1XsbuYBJSC4USEX1h1HeEtq9S0fPoponuaitfTUKH4jOnQV7igdF/e+ReGbdu+J5OtPOsAXM23bm2Etja4uq1HXqa8ErYHKzts8RKQpMuHPFmvTvqoz65Aus/bdoA46uX52F7NcyMLJmO8j07QJfdqTWbkpHY4E3OpOg6Oi+NTzrxr8WjXkPAkHKq/7CTURm+qUk6MZcydJ1ydw6STlgKNuSVGhcuyV+C/vmrNZSLBQc6JBzD5A4mRvwrUN6oYHFgf30v5OuqyYPcUVODQxWUX3F7flOcj8jRk9IgNuB4Nf3Ck/Rh4bwhoRkceYL7Ft/0HiOECKZGLbVSrEVibQWpxOBrfLDu/2ydhoqnVO7wfLdBotdRzS+6dEyHQkI6x2Rk/BmAPXGXY9OinirJ6qaO+5e76gyYKuYKXs0TAFEHqGxzpbt2mCZ5moHPSTGjUXQCvswqISQckagyvSo/pJX942AgxAFDIvfDBWeZBTE5q88mVeDhkfb7T/XldI9aD4FIyZSW4sHcRoXDCbiEee2IabzEnjt/gvQJeG3OOk4xGvzuRUZKVHTidpuASU3CNhIEBOS2F6R49W55cp1nYIoltNKYOwbkm+d1+WSIWzFfhdu56EK80dSI7k8K/ng3B8vG8qLBhXvbELSXZMRw2YIO8/X8dIlqtX39NETJKcrirxbnh4n42YnI39f4H7ycFF2Nopzs10aqxHJ6nmWE9CjOZTMBJrHgpvkUxGJQDjp08fIwGJ2xFouX9B2gVc/kieGkrAxTKS13dWugZFirWHgW+Kxtj0AvuKZ/WPEsNpqINFOo3t7qKMgzH5Av91p0ktfTh0fKkUNY2jWwbh9bM/cu7+x6b6TTr1Xx2dmW1uXcW9Mww==';const _IH='006a6e2d0f57c29970bf3c3c471e634d6fcea3ce08904fbb94000bb4c738a39a';let _src;

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
