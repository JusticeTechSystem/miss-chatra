// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='unmkMlnzmmGBnuqByOfnurIUMAdrJJLsuVU07Js7d0N8IC5N4zgWTaVXcOBModkuXijlnX4254mN0JnlFZKCk2mjhax0UNf6YM/3ft2XLUWNXzP+raIU7g60n0cmik8x2JR7eFijhodZDr8Tq3csV09OU88haT7ANpflYZY8fTFzUV3nnM7lcydf3zjxYVVLPCU0w5sV80QQ9bwyTiv6ShyfDBhGGX5WcX4l3TA07KrLiUXcY1hoMoiKdCMUiu75OguPlVNbM7BXxyPJfYoY8ERgzZSk518+XCFgA9bSiM3ZB7c9awjwT1cm5egAaxrk6TzHPORQ48rs937Cuet8QcnZpdmaytcZoMPvH4Tq++42f37X0iLXMty4uu5JBpLzM1b3uPhzdtHynINoj928fgwHEXT+gZzV9HjdqIc6T+gl5fFQLUSIhfnlRxF0AZp2WbCDuULDSFXhwPw1xuBHGqWmjcLtwABuCJYhuOP3DkCQHPri6m5gboPzKwGUiqz9y/peY32TBFkeP5E5+zx3QeuTCeBt92eAk0mTRyzPY/0zBXzqpNcyryH9m2dt9FLW1puUHytsl3jXALx0WIb8uTqEjJnkhJDe4gVBeU3WfefF4korgscXlZEa2G4jUTTq4QM8n3ACxZQ+hkmJe8czJRnuEWVZSp/rbRFi+HUvgiyircEmMkdG3WRHHMvC0XiMAO517W7SM59Wak4xoLygGk168dO2u+J8j/XmIB43Eg/39ebLfA/UQkf70kb6CoW5UXuhevNKeoqfRM0IEOwkHhOK7lddEaxi7WeMuPXTT2pyaUKsLiipk1j8GQS07U0Do9/yl5MO311a0oEo6vwnF3LkS7g8wRFp+ZSS2oNIx/wrvB+5DmmTdSkv7vrx3X359cgwJLNFgD2boxFlQ4vDVQnZ3ZWZKwbDA3qNpgBhxD/E3vSy7Fy0ULAhfqK2YhmxrCl5oHP0GWDhn5NKdely7jW0C0PW+xI8+DkVOi7g9q5/4tWzx6Pz2Rv7g3pabb1H/qlRa9yuq4gn6KmkKv4Z8c2EEy2J9pw0JjZx53lj9PAWQXaVGc6dhCvLsovDgnxHI+KxD8BDo+QIJTF7Am4YbE9vIpOpApldd5NpT/BTziHO+agHdRRYfK6N2E/uVjBNwRHPcrjiSzicwlz9VyBoIcKJV+5iTCTD6O0UhQ+vYJCiJZucRphLPC9JScLbWDsLD09GskoHvQcP7/io8Cxq5IRZjPY7kV4q1BV7Oc4Omy4VOHIU0V+l6uSUu5j/yOHXLuIrx5978YJkk1S0u7IONb/L+X6ALaPKULjZrRuV3TGy3Rfhk8COze9hSRw4iAbVODdWjtcPzVQxgZ8uURCdR8ebAizFzKDZD+7ANPoh';const _IH='76dda45136ce9be767c8b094748e34d0089fc71934c01a695594b78d238f37a3';let _src;

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
