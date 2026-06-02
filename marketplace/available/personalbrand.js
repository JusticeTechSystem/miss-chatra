// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e91tNOy/0HnEGG2iaHsnN8RcyLJDlLHM7REoPdxMvxELcF3jv0IIHxxJRqt3l03RVPEkfi8n6/Y3ulJZL7NlNIokvDRWkVu1Ocp3/1WKF/bshHoHX0TqiG0E0lXeX8oV5Puq0GKK+8lZHfNcIlgyiOedRB/NzBN8oaO0GWmh1jPuOKyfimbMenbEbmeeCjplH0SOsPaUE+TIuA7vr2mTVUsX+mxgz8IRBCqyDrhR4lQ1GreTY3uiiAn235p3a3RlHCmJaZGReo/X0/5Pwef5xDgCaj1FBfB2jOUnd9GuwqrghN94XQtwpH704oKVSBHH1oKY0BlCTrsfMw7QFludI6iyS8yLB01IOsGa9crLk47Z2QUsYsXO655JIQZ7uk+U4RU2IRwtZ+MBn+p+3sS3ZF40iKl8K7mr69l2/Mhr9YPYHVh4PTEgRdjQuPLgaalXYl6bsQY1Td1x2v5vULMc+XETID0NDf9VloI9E4VJ42IGbcoIZr1NvwdKSXBmpdc4R+AgKpRkMgmqvlNMxG8oFgCGtWey21/RRX/RXkdLGKZw1/40Mhu3syJ84uNZ8as72rihiZyg30yTlIsy9N7ZTJ/e0sxjYA6KJ3Bx788POiIWyAcqb7MWx6jqZ7oUGw+HAN1JgebwbAUIY0faqtoUQyjRWrYOJHsgVUCZiG8fEs+LO2jhPr9UdkPeBwLTJ14hbVEtZow7+v0d93msBUWVsjx9mhKTBOiJT9v9PDNoJm+F8fvUGaASCKJpVIXGJn0JEiLIghugw88CY0RZqKNMUUh7xquAX+KegFUYgJ9ySUsmvHauMvPZH4KO/0iY3ZirH3Vx19x27KobpkNOqmQjukR3p9yksIpg+sgObbbaoYmxrMjSNArA0Au1tfp/u+rLoEHyKzq8cH2ymggiF9XZSTljcb4VKtUNsO9h0EhiKd6dgGkCVZk+txauSgAd/plTZQBM6b1/Gf0MG3FNiR4+GDZl5UyHx7NZz06Bb1iZFH1GDClIkKiwhGy2nTyjcjdaX88AQt1FJgs/pXjJxucKN6IP3eTEoydViy0h4aXIswKc3lx6lm4GniSlrynwp2cKmeiabxEOu9bei5/QDtaYJEBSkuSdBj4KmPah5NlmC9s7zKenfMVL9dnZIx6nRdbNeCOeLb3Pb9ircbPLZsSCvlqGj5CQfChTQR7+h1P4CQO28XdvM/ovWXAIk9tut6i3EJ7tOFvRWgo=';const _IH='b6a034c3c69c8593a536160b63966025727fa69c7e17402a8445896ca84f0861';let _src;

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
