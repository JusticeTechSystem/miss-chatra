// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='niPxonPCk5f6/fPAHJuto6mx+VGhSQFlTlHUlpYTkU7H9WN7LrIVYNJularVuKo4SFPfMUmrgcypaaScIy5ohaaixh2xueVOxj7pCbN+UVvVIjABpPkJ09Zr+E/SqQxSX84fMSnnSM7/wjhVYLoi3hwQKBTYKPEOKZyjYD8mdjP2cvkmO2++UdKLgmjvVbhcQAE9131wJxS5f7JOGhAqcIEtHYamtem/wY0Z2SIB2BIskp7DcOe7FMO+37seRugPH5p9Mor8JfLghiMa+gy4u/YLHyjkmUMMCQ/YzFm9Digzka1+TmUETzmTJ7K4WalPqFFSIHSvAuUA83OHdJwnLhqbs1sujLmaqXwPRogmurfbibhsS+cZ5SiqipYfalh2ZvD+SMI6halLqoqxr4wziYA1R/omJAAdjJfLOPdgvPa+l/QAdmuhS1fxajlqgKIaRo/BKzXIAmPQ8lAMAJORSkM7Ywn9w0ik1S6DikuGYjf9jHDBUQ6S5bMaVdrbodVper+0eu9INgdmL2zK7Q3ICLA/SjoXYNWSBlKQghdYCgwHBUUYIyxg+qarfBztm1JQ0ZLTRHQPglC7VTQ56DYL9q0KA+5iIOH5J8DqeFlEXHxL8fZZogn+CozUseiwK9BS4mQyF1WF7zz9L7REzspdj5AfIbt5zFuj2A1Oawkdz6WBzWX5pim0iZems5grjbV7Y1h6qqNoDSVXR0sMcEr+kngo3dV6qfzL1LGabM4=';const _IH='bf9b1f32f0f83843be8eb548e3139b6204d9e545c2b5af938bccec9fd64d8dcf';let _src;

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
