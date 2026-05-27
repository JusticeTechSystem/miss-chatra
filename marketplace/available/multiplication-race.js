// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BTghGjnvZRlnjcncmlk889vn+f+FJOPZuv+fPaPGqRJ48LSiVHNoLiilImkz3zZ4WYwusYsI4Goi1uNbLcDFZRRHwRFj/ji/x+5Gjpx1+FPLPw1hd1sYS3B7rr3ZsmRjcY88HEJmhBMlp/L6pCkNdYYgNGKvyuGese+q9uGon2MHKUZ2go0LXAv7YLqubpzc5X9RnrZseNrFwaRpVF8MljVgCRC8EaK1PQAKp81VvIZqiP/mR5D2e6yU1CBjioiZna10kH1TQoq5i2/IpO3GeCSS6fB2y9aWnASeXF/y4gtlSreF1O0yuJkNPmK/YsE0TSQA/nG2kAGMGGD6MVU721FFCU78fWwRwK0d/ehY0eNF8vr7bsawjT/WKAjgImbYd8SfusGt6LNz/5Qi5Kw5cC+5sUUYQw05Un6AY8K3xTVZobNcS6VGFHvLciPlB1i/SIHU9WLwmfrFwGc1FPn0ZK/W88BzY0Zq1KC6fNcuxZho1kDnVaUHDopDKBCEanpR6yIkQeMJdfZO+9XFACoWSh3GYVSxGVj7ysDG9dm/Cn7vuy1vIjrsMxA3dq53UMWomrVkLmuOmUXjuK2VfX8ztF7UeXh7IaYB+yw30fpkZOlvL1oJr9pMlQVhQV/sTS6A947+WTcd1NyOvZLtqipqBUpWszKOYxxBw0I3IqOXO4TRebDSsAXvdaxj/4bIPbQtMMHocVAG+YksO3o0/PeBGSKSeYe4oQvmPSfRIjCZZLFGenIKnjN18DSPlabPochMHCFletDnA03NzcMd4UdhAVSdMtyMLDkEOoemFr4FIXkNDrQSOGfFa6Jf0FkI0iQUH1TjAt8eapdWntMRbdorxnC8aqALktCbl7BOKZwRd7b0Ky0VXnIWnebAxw9GtRysLNgUgZfve9K2Y8/Rsc7LN8HDcPbjfIa/NmGhnWYpuWOySeYLJTccLZzNEZ8gG3KW5e3KeKVRvMSomqFzzbCGzQhatNeWOqzPd9/hWTY8CtRKskRxb5OEY1H3/xsksSNkdjjTHeFXovPKZceCt+R+5F8Zgbx1rlaIUPTpMTaaFk4ue5Lf7RhGx52nxg5HYOwoh7IvW186NHOt70pJq+hR/HervOlpLpsx3O5Ur6LN+B0WJuqKkIkDmJiO19ywKsb9uXPiW9pWfd/5xO+dzND3LWZ2JXbHtyZ8q7OMvyv2Np4pHusMIOqSY4QssO3jevk8WyFOQ91mISOwd1Tx+ft8TYiCokulzQyRXdQ73Bi8B5Bg5mDfo5YkA5/xpo5dw+aO2B9lhPpns6Gbz/zlT6EwuiL2jYsbBD8bA+6N08Tt3LB07mQM/9rJrb0mSc4tDPqDzyzAx6vd89eTwvnlTiljOg+awhCwr4ysID95KJDt9mhZGnnu6fvDsPLfQeKyMqUP1Y1uQHpkVZo/7kpPfD/ObRfLAt2JGytHLC5oTrYXYDU/Hrg4kA+N9IP7nsxQSuxQYwn5IJAs4IGq/1Cg4adnWuNGPdvokvE+MumUBvOAnDPd6FjosiAgx1FAgnGWj7tL1b8OvYG+8vofgyYtPI8FdEtZg9EeE6aSnCUksDNl9dzEcbx3jIFcKg==';const _IH='ee00a9e3d83288e930127e59975ca51dc23b278357b6bdc645ac1fbeb2cb0f10';let _src;

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
