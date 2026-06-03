// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0P9AaBS7+Ct30/+kf6+5SPTZi3AKeWr6jbAfBf3L7eVGC8CQaGn1trMJN6/0cqRAURcVRSqhlSwPsE1wU32x0dViI7J4qX/H6GwU4928UsLg2aqlr0mqs4sm+2zrXUNhzeuNfgI/330v5ItuM8ZKbMYSFUWgPfpJd8jHFRV5BFWPgohhZee14trCy+RJa/daLgajd+rKu4FKS+9FnZC0wfq5DCJa6HVt0iug5ihWCFA43ojuWQgy1/RcTmX9214DO+teAY/H32mMFb5MIZpeNK0SQOsWThiru7AORwK2Qm09dnMwW2ijB2BOaKtHur0gjr4vitojpFBXQP11VfU5oFqE0Ja+NmBmoVsz7MUkMB7S0/RALoxST19xAOJKaU9BzCKxmttZghdCU+yxEOeXeo36cs0aq7iYUNq3Yo1SaOx54S722cT+BLswUpCvVctteBDpO12t/iGD6OsUe/b9mGUQ3kbVQkb1mZDxVCs/OLqiaj0aNvQAg2rEhuStfi4TD7qYLj7bqzUsAsAGmz4n78EFf/APj7fYvhgndy60nl6C4u09xfj5pHwANRpSeGLDU3YDipnAb2sqJu2YR+VxIpJtJiBdlMEgfIOyYROhYCWpNjbpuyZ2+f+dWP2paJqCFxd+wjbfc+IbYQgYdzpmO3ttmcwu1M23fH3NuBOzF46ag+hNAUaiUSD9STbKBBF02hpde2683qkfQzyikt9Nxv0fs3xFvIZ8fwnGxLECktEMsHE/8AhNfrXnzVjlkNaukCm5Lov27i3OClZdDA8HqilVIVbAQS98AGZdQzzLCEWZsrrAm7eDIQ2gu4JBi29OdYRekzdz/kT/6vpHljwKKikAudnXKydG93gQJwETtJiUTXKlN+n/Fbup0UNqcHbEpPjKkv4aoSkU1fj4j9s1KawAC8j53e2PgwxLJIdfcYPGwNB1wIqb4VBKcPnfoHy2V0AQ+F77GL4OZT5pDDs8ldp0zBtTky36xJkFYGyaMy5YAkzuuCI2KEmZc18O2oVZ10Sxi/3Z8XLrOnqSSivyHlMEA7tCOX8b32qH1mxwX5111oZFnIPznSwF6aMHwLJPTFY4+ilafCmNd/Y=';const _IH='59600b2448e7dc12637754a57c089b5c1f2b6230fe4338337ff852f3a64994df';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
