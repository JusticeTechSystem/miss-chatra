// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qb2Y8TlVI00KROiBkri1mJFF2phGUkOvw7J7hsu0fdRcGxS0bS5ODueZFsvUSw4+MqPMbRcJMPN2iZiwftv6tcYGUwpgyZe5u6LvI1Wu41DuCu2J2aWyp99JoIB6nIK9HU/Ab1WQK1rcNadEq1vHgoq6Mvpqcc252VPe6eUCwIQwfAJkwl+cTV1Yl5hq5OcWOm+2Ym0PakpZFD+gmf/SAcv4x33FXjtDGBndAVihh2LjS0UcNGkXnkk9d0nho92pGbNFnhwu14V78uhhFxhPklHGFqlLbgCSYUVNzBSGC5cn99OMVuvbM15nc3OKpGuHu7rh/3758B5FqoZzz0Ch0f0+sTm58JSalLLUdJA0V5pxCsEP9gaZV8lw4xQHrItLBnBwj3jAIHiUCa0NJniHn9f9/DKEA8ZQzyPm6gqgXSdoEZwxQtJxHr1Zyq/AJ00Wk81kTBwdqvyVxLqSioPUMiiB5NH+z5PPlgZZ3CUZLvJa5PkT/zCqHRL25lxKe2MeMnjPzmYBzbu1qNW43wYFHvuuasOJ4SkmlV4Ts14BNCopKbb5r6v4/1n7cEu9hp6AE7NAqTlg0bXF4PHCJqVoeqWNcEo2E2VVEs+z0NNWyPMFLWiOwtQCuYmHxNFpernBUDF1Zj3EE4N1ypDFtyX/EWU8DoXRRANXaSXTP/GLDuRSkO73HDLIolZRdfAwqAVSJV2F6oRr/fFo8UmJUwbmR9yqt4y4yBkygt5GHCS7ZblaKSOfdiH5yV+d7eU/H3XeLWZH8jf864tHRS4iAe2tc2+oVeA/lFCxhn/AXj00+cPmkzJURlj00Mur3Y31uAslfEWJ3TgiHBvBJ1Gzx4wIKze6AyNd7aa0+1r1kmIlHZzCFnWnr8lcVW7pjHzW/XydawqFw+3d5/42CXB+H1MQGg1dZ2WFYGcGF6lQq0Fy9KytueFPZB/sOxkAtD1+mvn09lz5+dzaqoBa0dgSKXpKBkYFPRQlQ4qIcbnn1yFbPa8RRMM=';const _IH='3394cb708010dbc2374134df085f16eacae5d69ab76280f629a75a554de5abe3';let _src;

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
