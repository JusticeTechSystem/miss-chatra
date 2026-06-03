// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='619nfXdMZJ4DQc3G+1zj+BctGZXeT8z3bgLsoMeodW/2CxU+1wAi0vuD5SW9PtFw98W0njsTgDFjMuwmFqf1iquDzLa3QqDJj5nUIWH+jZLzl4pK36JTOj5CvnO+QSmOV3iG+Xg6tZdQPCJytsgI8YUmbLj+O0pj8UrCtDfd7viIiZl1yAZiwHdQ9+rnj15GiBP3xaQWW6SEzvTG4sLcDPpTkJqmBfKGgvkL9x0OCcByNxFlqdlEszn7aT/8dKaOD69P8eiOcgoEddnFu/IqEQkJYqENYFUUpQ36Zw7nwBP1sY19WQRaqyPnorhqIlEk0uA90282QPlmwsCHXZMhnaVmo+XN2Unr9+G8VVRj59TQku1vJeTGZ8lx3cppQ/loK2JHMnmVondlU61Gq5ELQGqeypbCWD8a6E2qMCRvMK7/9gHy7RqURVrgK6zeor245HcFyLdkAivBlTZEWDCMACRofEXeSGWqkq+AG31h8PKOD9n6vbaWqkyYhNKRuvnRgjs4viZjioBw0vE7vCMO0euXMfApf3lEdT14jMWz7JeqtY1pG2uKYo8QsgF1hH+zqf3niFNcpkcOcd/sK0LWpBbpyNAXa8qnakqKWyApxGhRG3ho523aseAlACp9b/ObRNRlDGndFcZCXmf78wGhL5TMhYwXThA6jEGsT2DvMy1a2SemN+7mYS6JhtpLjPRl1nFe1hhT3+DOmskdaJMqu0QiEGS3kwjY7ifKDfgt64tY5kncjEIwAdyBKwolVK1ACol98OSNEOJ4StDQ61Nai9kJKo+BJLxTfwpnSJtGJYGiK4SlloJhPxzER8vPXWwAP9WY16cvDlIYpv3Kt+lAEGT8Lo6qK2D5xFmn4Y6tD3az1UX/5AMfwUpiQ1vZbJcX96LKmtuAIZyJ/laZ35MYnhS12P8dVwFwgOI911DFEnmLiOrHUkmDVquW+wsRpEh1WaZyrHPozuLNZnTcaOfx2osFi/mDbbvCyTRctoGJUu8FBP7iQDDMxtOPmJrYs5axbeqTMbDtmiBPDJU64s8Q0ZDsjqG82MUx2Sp2DUjVjzBADMeuKEXItAadhBnGUnp+uhxrgYChf7hpL4O6I+S1H1d7Iis6jQwBne94xzzDP3NTl3L8g9/G3sGcukyPhRjM6DsEXRpTnwGfJ8lOa9VyHQmjpR5/zBKA0uFW1Y1NZd2Nz0qgjqK9WQb4Nnptiwt3fl/h';const _IH='3ead4c738ef90056eaa6dc53173d0840c20dd80a5d55a234884420bbb2cd9525';let _src;

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
