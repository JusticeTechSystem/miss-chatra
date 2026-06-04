// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='78V2pWv/GKalnJcgitYucA2efqwmzdjk99wovGX5vp6CAGjo0IFrdlI7Nz/KKgwvbaxQdUp9vr5AhfgWnxpHgBBElLQyAI1sJxu0GS1l4vSp1pcWvaoQ5yIrjzbiX5kPkgXxeXcU1KtOsJ9ZApWaw5Aq7Lmbfz6g5iHle/FGDaX3C+yEHGXdj3BKomlnFUx2l0rmqRJa+cubC0hh9YdrxKOrctoR6fM2JoEiOALf3O8DUMu5F4iws78WfmKN+BdZtKtaz8DnkE3zqOP857GyM9ltjXaTw42YjXX7R8OzVgK5CxrJoNTUzrs6S+niTocQ+G4xL9ig0YRHvKdo70u+OklCPkC0i3W7UbrAmAfm3bFosOLK4/n+QW6fwwwDqcgpRBUB/RAVEtOf6sTH1YuiDF0+U7MUSxyivF7q+wBQekAAtAJ6obaQu9RvvJO+WMjl3vMymAX0i1ohmlARB7lMqBws786OmMKDKEL5kbJ1ikkDNvKNzPPH7Wl8df3xGHh2NxxGak8wlFMHaQSA5dOLAxzHDGv8H4re4JRaYy1q3kkVwPvUlxRT3AuhT27ucFK+TKLw5cab01hx7XNe7rHC+GRYnFaVyroNhg0McufmT2uR8WmLUQ3ii119YmwdWrUvnzi5k56blfybOUvp0aQdg5QWYpesabyRIe7H3qDmsr42d5Xz1lGaT2P6M2pCNwYNCJXEgPdw4GgfO53l2iDh3zwu9vCRgI66a/L42k2cbT1IeyCdMTzIy5U3hFB8Vky/nL5HipSYd9yzc4M7Mbs8aw0Bmr48ox0PhKa2gZBINvI2h6eg0KqCSgroXvuxpO+9h0yiMrkfEEKoVP+WpQUKaheVrpNBDkC7UHLGWSze3rfC0EiQsatTKeSrq03qYO+qU9p141+GEFCKfsMLs1vP1FB5cQeStDHsFXn/negml8pGOFnrLBflAJGxN9rsemPlL4JU4ightJ6fmuK7elBnw2vedY5atqLVGt3kxpWI7+1e/bBD2vY4w3oceeKZZxB8Qp3kRiULipKfA2aj9vUrHnP9A5xDu02RDNQlJbWPkQHF+7TL2aFcjN7e0fychcneO0YluV1OsnbYIxOn54VtXMD37XDzEQMXFlVREoEL2YMOo3M8vsZtzWOWFlpEEoQ980wr1VmxjGQ3XV32Fi581zs2Q0VUKjptycefF6hnNUFtjt8NG8smkOs5Bu2I+81s85NVSOiEGy7aRPs8YWiwWcYK+xbYrvlLg+xURp/vQpiqV09a8WTJKd/vwFeirN1yzngB/zAiEoyyNJSBQEC1pyrP7W9A1hn76AXouTB0feahvxgANheMOrI/2IgFBy9dkG1SpDWlRj2QkcfDm4XW4Q6pQ9Or6PqV7g==';const _IH='fbbdfea30e3863c554935df9fbe69565e715d5d9ebf4a4b6c0daf9959bad5ce2';let _src;

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
