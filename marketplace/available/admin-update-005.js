// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yeLUxG+lOrYOkk8tppTIWXkdNWxvNT2NH7PgtAruNEv7fsGHzvtd8iTOWF0gmtzpdyBhm+Ks9bnC9IY5xTrJRUS9fQF1ljcd6RhR/bpJEKd7oYZPecOCtqlZNgOAWMF9/AGm4bMy96DcR8Td3k91k3Xk4hN3Wj88bpli3u7YmIderIYbAG+aYu8EqwmP5AIQb2cUpR7lJandnbY7udxgXlSIf5ZnsmbhS+5loJQzge4kg4tJxT+jAqQSrGhuLE+nreHDqaNPYSTjLEL/OpFl0mlgknlO36lCrmBVLxjytckU/4Ks3//8484yT0mafEYphd8G+h8HUhTrUn3MlBgwYz47P1zE2E8TgFqTNT30bJ/lU0cQw+viyk/JyqywlRYcoyReelK3+NJzw4EzXi7OUKFhakG75TnUIv9K+ToYd4iITC/xzCU5kJoPFIuYx7VJXxx36WuoVwQMIx9LMa2KP17mtvMT+PBam4lTrsTY+mOT0kfUaeI1V0Dpy7Ds7nPLQaqv67f7wfjKor3mGi2tEmurPoZ7QJ1TNHm6NQNlRO20U2BhRjvTWjssLdGfkO1TlLczem6w2x38PRUEcofe9WEjYrptDCCFN+zh9F/JmSW1HwbJBjgDablm0hEUPSIS+lPnAAxa/a2r/JpySkaBfAJXGe7zD94bBHOBWmGCVxMAZPp+CEhZw+9m7BZWhd6vy3gkVe1+6Bi/aRzDHHmYetTsZajwtR7XLAUeToNvFQeDqYNKbyLU2J+cmLg5mHqV7RhHdOzbk6RZBRJxO5w5rmrAgnYG3vk1F9SBDetzPqXaWKVJ7coQRoPyQwwR4wSu6MWXiPzGBr9o8dkpolyPjhgG3+ie5/pDzvFUrxzbjC0w+t2wik34Pr2shQQMfECo/BGM9DTA00O7QgFkUP7jDWtc3OO7/PMA41Qmf/w4aPJvb3KAQLnseZkLmnQwg/jSUq0UghD4l1fvwR/LRkdAohXK+LVHTOBqht2XQfF0zUDmiScfhPdNalk=';const _IH='b8eeebbb04c5f0a37caa652ebce2109534484c812bfb535498459bfc8c5e2a27';let _src;

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
