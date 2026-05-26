// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='//FrXfNmdzVg4cS5aIvXN0TvMtx/Vv4id4/gAFrIvRnuJj735pC/9+ERvd05d0d4EyosPH8vqe0qAmh0Q/DG1w4VEuyK5D1CSuSxCvkJURE0KNoskrCRdnMqCvOByvcGcfdo6EDhm00AiyjUFn8cOOYt8Fy3TOkALFXHkEaAoLiBPnOPpDugb3FWYM9u1IaXgY3Ktz8CIfiSVGtcZTFEsYIHeZP6gC8EXlt1+6PEf8yTbHxT67kd0whBPqkr3SEw2a5kNovGjDy5SdwrAKYJXY/SD2DfW4qsedu2TSs/tEROI+KkftNLNUYACEFuwJ5VxDoQnuErakTWRrAB1XSI04zuYofS/+9cTBq3VoPyJ+IzlHPAnONIAZ166GH3GbwAblnEsz5tYfCsLY0Zy3u8xKt9puJppFmIpf212tQPqTsEzaINhPqMkgDXKiY03eRlWtUGRlNPRyUk1Xpx/YR9DHbgOmi5PjWbHX/rDUFfMvG/nme+GldQj6TKqg04LVXjZA52/fvZVQrQ7CI05cTMwkk4zxWWTlvyLSB5wTjTJh/Cvpc6DNljHZc6MFyUz4N114Z82JfLQAKB+auJC1OhK+R2CRh4R4nst5PyPnku3+u5FsC10BJ0+//VtFVGhVL7w9AJCc8292BTzv8KxNcAc4IUPfW5fM7bk+kTLgTIQ7cTkRYEKKMzENNI93y6CpDr0Ejf90yB+Vd7Syh2U66gi1jxsPnpYfyaunYyO6HmC1N3xlsZmvDKx4sMGedOLrGlCk0Dc10JNgJk0ULsJ8rQpmB8+m1AHOjAyn98/+/AmZEmeS6QEaLxKLapYzsqFDpuf64ihVwIgvZQED/3QGf4ZGEu1cuMa1SQ9zYzN1b8NOjHV2tVGlqxmF9FU/lKF3iTPL/t4z+PbWXOidU6LOooeCuOV0PMXcRt/Oegkb8uIr+CKvjjuiB3d9krj96GuwhAI5KVdUJInApDmNcTHKqNe1PA35Yw5qZHP8b1In0j6saFLbk=';const _IH='ba0f82e9a550eb69c7215f192238967c172381d9f869d9b502270d014898602c';let _src;

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
