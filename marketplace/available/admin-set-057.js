// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mit7EIL94P7pcc2HkmMndUIyTwctrpRAunyKX9p0JnufJXxr+UVGiGNXeJ7oOkg4Wb2SVhZEw1ynLBftz9VE3QrIHFIq6iy0thUtPocXt2M5EoHiSApxtQ9vmsnLhtFkGx+GRs7+DwCnVCC3ZLLKpaTOhu+QOLwhFTFXR1DLeD1V4M9to1Ts2Y64OmkP7F8aworND/i+0xBVY496k9jHczW7ykDpYL0b5SqrGSymbjMyB83A8RUdjsGbJe1sW7su1GeMBNZnsIc5qhMLQJpjjvNlxyzlnX08ponRl/dftTm5qxYBwmxmZcG+EoE8fMVw1rlbz0rcr0W5SOwOWXt7a5dWVZ6Qpgoa6c1vCFo37HX3wHTJCujV236ofaEJ/w/Ta8YUYAPWlOAnOFtn2uv8+ZMjuzYlDjpEqKOtY1jtwbZLHtHw+u3ghaYJxE5vq48uyXY6G2fm4lOq5Nfuvz4AZrwtHZPTDCTdJZLHV9tuzLU/yUOBj5/52bK5+Qj8sstVINieV3PicEcNIxGIW8Ux+jWUf7aSf7gEb9mMIWoD2P0Pa9ta36J1ieW6kBUytFVGmVLKu+CamG0sOBKcgfWMToDyT3O4sWvMk3ab/v8MSNMkO3YLpLWacKAHBRmtq3xZ5g7cpc9wRlgjWDpUi19dLrEINV4QM7I9pOwkX0UVyAoDpKMIqs9+Ups344ub4BQ2/Z6WFmj+skF7LU3b3JxTvK37qydS5vsVYOAoC57V7JczWldXGVAxlYtaDlyTVIge0Ah7X/E8SFEu7n0Uy2YwcOskQx/BjuvwtlHxbtvlrc91x6zlh77pf2T5ID5fLxY61b4VTavfDxJD9n1gHwmYlZKnP7Ibi011TtAWDJ0lkjw7XUgMUoqVSn/mANcuJLiey0e8qlJYawf6yOiJszMi7Ji39kypR+6oMYgmIQAk5XDTo1dNpPqldZcQFmtaoVEgfPWhgT/DHLE/Yl0wpCzHgQY/kbArJ/0M';const _IH='c67a6fe37d7022cd23bf1b47bc971003994d727f93612c842811e669c360ce4c';let _src;

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
