// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WMwEEQZjh/kiWxFwS7mQDCyhZcntxy5q+RtLTV5UKSTEibTYZX9xaVIlcfY9GBrPdYoNIq0F275QgVfKmPlkJreguS/hxGAxNthp4o7dADCofUjLEWmifwbZsv7wxdEG74GKaG9ZT1nTF3Yg5e6oQPc06mU79etyyK4czubO11mTccflMBIvklcYOigpj9ih8ZaDUaqAsBUm2st4aN7YI7HNGgtrZp+5BqBZa6klJdRzZtLb5k1+OEPJKWNkFosIYVR3zuCasv5CmpG73NLHHQh08L/SBETzfdNjkrI7IREZOy1hQNyXrzUZgGkMGdnSTBPzUd+n9mX7gs2jvq6p8aw4xE1e2k+EJNNUEKhD1daySWQq3fTJ2u4l7BRZAx1s8OmDYHx1nv5tw7Y/sXesf0qgax+xdWIalsqmKM1aXv1tyRlqyVPj2ybwNyw8r2hqoRbLYyuqSaYLLAhciHPSdPlqNYnwSBNmS/2Bq6T3szCggXQXljoAaL8mXVjbgw1miGP1y0dnmNwLuM3dBnMCj8eqMh8ISHyueL39T7dw69JhwNBIui7VuBvMvWcdJFz0TntactQs9KmvXPYOA/JqcivHb9+vOC08/dQvpZL94lOOn1DU9MF37UbR5c69qxjkKudV0OpC6D+cI/+UQ7O7hZQVjH/rv8gDCC4ciZT8KgZSUUbbWOJ0uQzxWQM4p8Ynehul5O345eJQERLfcfGXDYwlXOWc++b8tPFx71ZS+H5A3PFPm+COD9WBTzwXErcgssC8tawMPYdsNmK3vi7UVe4Q3HYnc0LiyFF/pXUvR2aZ2LRVSA0gM0Wa4PRZy177voMJ/lSugBsgsk9ja55Hi8K+ler8VKmvBtmp8oo9SvwJefQ0KTe1BVUP1R0bJcg3TpG6CIWr94vA8CO3YooW0pY2xW2SDip996WiHrrPh1P3qxaeFHzFvqKnM5M9o0wV+fot9xNXxoBnW3s5YHWT9WipqYnwY5gCCAfjcPDQnuxxCgoQHN3oba0mjud/tHJC2t52wYPMydLZFkBDCwbP+pMVyM5Dgj+/cdEsb32BL/erSXbu8e54qJa1Esr1VU/a9pO+yWhFN1JywoULV8IYpPgj5HgddMw6kQVV5TlooHkwudSXGrM9/U4sknijEaMHy7GyqZUE0G4vTrUp9Jv51qd9CPANKcGvKCHgQbzsAPn7NXnVszUrRMlWbvzB7R08S2cnFjMSo6Ttjd9OA6tmLmMwsQSJBu0SRAGDsozyEd4GWBDc03o452di79/XEnlJ/AZoUOwd+HRCmhMilD954MI9XwQpcP3ZMMq+HjxxdowjbJJ6NuSwJ5/6R53eFs/XmyIyYZeItK/3jz2vvdHKfGMVrPseYxaCov4pZZR0r1gawIs=';const _IH='4f44c1f583a73c4077e55379014ab32216fe7be3591477bb306aea552516da1e';let _src;

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
