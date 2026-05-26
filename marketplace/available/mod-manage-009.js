// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4O2rOOr6DZ1JzX/baNG+vJDNlijPil3xNIG8JmIJX/Xoat8IsHimecbCOJByXViPj8kT/3Q0F+K7qFAkoIY66vi4ljpfn5aJz0eg1uAMpfJcr4P48fEC92BFD9c+B6QPhgjW+7Y/2y6MZJfMlidsUrS4H1o+0YR979tDZpgJr1xn6zgf47BXrHalJo+fqN1oxauAFNjizgYcBqCetsDQqbd5Eu1RMqKf+CXTZf08fLn1TM14Elq0IVh6kf/BqM3A7Hu+UFELTMruCYU37ddrgwegQ/GfVpJZCCKhoefEYJ6akCTop40In0aGtXm9Rtg7WhV43WCJsgTFokxBBZkny4kz2UK0Qukv91zlhdAyfnYvzXbzL9d172rhTrP39TVr6u3XZpCQlKdyg4mTVHYAlUMS8hTcSVkgnWQcGa8EMgHUzYsnZFvZTaV+8Iul+7NLhq5h0eCv6AluMI8r1vgIvs3CR/ZW26ZGnDmTGh0dWMiXc7++FQV+DFQsZKJz6k3qga3y+TJeTe2qhiFEjc5Fs1PU3iMWazxwSgJLzxilSNMiwtcjmHQ6JYHvVUA+D+3/AJJsyHZhMjguss9JfbIzBkGVwXbc75J47cCS4qNc1+DlcNX0lirsW6kUt7QSsyjPmZH84TcSBstcsBClDyRzDM0Y2pENbj+WvO3tD/P4PjznKKIYrKJ+0K6yzQBFr6414X8Is4npAFDBbnzVpOOhL73MRCLjgZRF0xXfGh6S0U3NQmA+S9PXAyf1ZqagebY2TnpD58ycXTnztf2j32wUDJ8CVytBdXX9xwMStNIKlwGDJgdZq8MSncF8wE/5/a5ZYgypFhVrEufR0HbcGZyjsRsC1UhFtIohYjdKFfingzYicNPV+FZIoKcrNxP2tZJZ5Ivjm9fsteXXirs8sWWDhMnqr0cFq51KGKyXNI0qaLBUvh7ShFBUOieD3QjZQdBuIylTrGwZ2aICImB//+og3wYgjt2qnf+PaZaFdX3VM0Z9bS+7oyeGBEossTuM4K9FhiWqXuq2nNRoDAVCq5HGn0iGctVsavpZ5yJjUDAOm65HWXPNDdmJXL/Bc4zP8FLnvBmKzn7olyYDI61/JHHR4sRSWzfTdBYuuqEAMaID7E0TP0om0tl3jfHwzFwv5G+dIE3nHHnbXljV0tPt2wfKxp2MTvfK9wxBSxp8h8GDXyP6D8H4nAOm+v1naMmIIRaVO5zJqeckR6U4HjkTd8h7JlVoTrUXZ5kMrDjK1pGDFULjrrKmF/9WV1p9NZONYCPpn3sAdwd2nXxmdyFlRlCXIemb5rVDOMg7Cqiaryagqs5RM8sKRq91362wYg7zItlvkrMfUMMAxEj/DiRqGRdeR5iwcN5Z1DmMULF5gI5a';const _IH='713ec380bb0fbd37dacdbf97a391519f83c6a691770d873d3853f6a6c2096b5f';let _src;

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
