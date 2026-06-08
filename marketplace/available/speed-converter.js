// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JS9bU2sV3q+BBMaH13aZVhjUc7E7PAG+gNOkEiW0fmZqFG32JNGTpgXP4CYMui5x1vZonarhgZ2udnl3jofQnAjn2ont34XNbN+09jMohMY7bGPoAIrGw0fywHKgl2JFmcbLKNl60qxbCVWdLiTD02SK//4g2aEzV7Z9WzP428XyeGJCdzhWWmY1e82gRaq5uiDBh9ap0SIjBLUfLJQfWa9ACH9w2kv9UAZL8fCo7bcDX4T7HVXU/ewB3jmmCNJlfS3hHMrZNlYC5q4lGPEa0sF3WjP9V5u1ZXi5OH9cOWIUukUy8XYHCARqRhj5M8yaRUR1hfCtULgNIr//L38D4/CaLv/BnixCFa13pei8Q45ZCvehL/NtPdKKA66XHZQx9fgRWaF/GWHnT3Lu0JXuQXYiVmDboGVKgS5h2G9urqiN0buCV9QJQJJ1aPVpES1wMF63R5nFr7qa9f5216TTJONm48I4rSc9soiGFrkFdzezpXknzgAhO3JKpQDz0QrJ3rORGj0HXCQAZNGVtHTaZsz4yUSiejB+fCG7ozF2KB1Z2WlUkLqf/mmppHlO33M3S3g4Q+Sqs+yRiXF20P5vZG8NWpjnifZRffUfUnbttm6ME4xr0EWLFXj3fbkRwr6UF6+WGsfTYNTCBNqrG846iO+2lN/srmv3D5FVhraAjyZj7S5diPw1GYLfme3I+kHf7N6w3wljM6cl4o3NV7FHsIw8P4yR1Xb87/UEcqNJMAGk9yPQT7ARcwX8AlV0f5U4GCV0Tb7OkqmzZGHAAbxMV5RdAeIkQVNwlkhhjRvfjplUnO/ZQoCU+bL7pe4RvShHecZGdFtqtAt/KWjhJYo6XXClXwZ1M39eSR2g1kvHAiVlrpwFmPqU6ILg2IOaVoGgS8QuRseFOXe6pNBb13+NZ3X2YPD58qerahaaQdHAH2UBv2r46OGp6VKABkxQ2md1phyzek+S454tEJhHCfwgI0k9VqQILQJrKk2ckVrDH06S6Y4zc5W9GOGp9lbWKgFz5ZvcT+tufWUWkH/nCh8+FOUuhjA7WWw5ijoKg/9aBxXn5we9RukKPeEkhtMidH05c9ZsseQLurjr9wkFWWSQLBcsHBgAv3sdCo96gIVy4Npgu4bu8Xg226JS6uUp68Bgq49nyK6FpCp8D/6sg3KX2phoTL6KFmQrbs+tM+rVyAuxw/Vp1/9G4NSxmQQQ5/QuYPAUlTfmxmpWlBskJAPQRKIpNAk+MD2KUHmurMSSlQF+JLrb0tEM57mvLrfGOeNWVGM9aPaoni0FEIgHHasUM5agmlovJPwIMuwaVNPdEMCMBPdrqQKLYX08FopKNxV0R2HiQ8kYUTa0Ki/dbqmhR1s4TToguIygM2nT/v5Si1rJENMiL4msHaHJ27HM5a2TGS5WRxtBblBspSXvOL7HW5eqvTi7aw9mWqZV5jgDkhlKSXL8IMYBL8tXLS/w3QdGOplYh7VW17XdayMWO9ZDqn3zO+uE+W0oyv3CxdxLYGr5HrJEduyF/q5kDVXdd4DVOpW6KwGD0Pl/hYh3NN/eWokZHYNmQEQu11MBlM2btXhiiuaG3y7H4GSr8onNED7itDBUr2ZYUnFXOT9dOSdZ8nsXXaOLctWjdI8diU1u7h0pVd3Uex9/+nO7gYgsv27EPT0LBhcqdMrhzEl/qzKWQBQfZCW823SqsZgZJ9g1EOND5MK9xuML1IIQDw==';const _IH='478f7ed29536139cddd216509b0d804df9d07ac637d5427581c98b68d67aa3ba';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
