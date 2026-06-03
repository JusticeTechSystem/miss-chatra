// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s1LdujQY1KXIKbymor7c4ZCyF9UZO3XmDhDuadKZDB4mUOJy1JlhBeywbgRYGb3llVKL+i9AUz4zUeVZl7tiaWlfO9UZvv49rjiSmzKPNJyFiJWKA7i4RrgEFah7mwYMSnu9wRmB0RX737hr0Ut1QPL/wqQ1Tw03dUHbpzb73Devg/cFsTl3+uH8zutyfvsik0oX/+BqJiQBBAzNX42O51hD34AOxb53oJnEFxI5jGP5gQVjoY+6t7S4dsfP5oF3Wgf4T0HEiyNnJmYzpb51IT50i1yLZ4ZnT8ROx6shPPfXW1XVOggeYyCdO4UCaWckiP2ab80dDCXVjbea6EirCI4yNTiH+Do6CrVZHLIazRC3CWltkQYo4FexsppSKZPdwBXVP/f3Y44jX3RensPOAmF9c4tQwKBE7RnSQyWuAtgaNpU6+tDYKwq11VhDjQ9ti+BFSo0daxHBtqsgidGRPb5wBOI+/adHRMITCCbP1xFNGiK0MSerJx6Nrh4278i5Fgg7DrJU2jEYwYb/gnxDEzQ3yu8ZLd4EIdyOIXoYVvpilC2th9/xWDp11gkPCn/q1OL1371Ow09ou+p2XY57X+q0Yvd/pCzVioKIvnSL479bC0PA90dsQupjFyIFgF0IOff3/G0N15bJUci0OSVW7FJlas4sV2g/Iboco2VxQRrhxSqpiN3u4AagknHbcLnVmFvmSPmKwTFFxuLloOtxJYAych1HDtBTwuaMNTTScV5AJVrV3JJoOF6dLdrwYE88DnTdldsfZ1JvHt7EtenO8jyMt6ISirzahZNiD3uBekZHpTxfcVxYZR7FdYh3BLaYHKDdzUkdami7jTLrROOEmFWIPOBzdWquCqgJJHlxUqYwMy2bA5FoVvNefJcy7xnAcRY6OU4rZaTb5HJt/fuVLww7HVliFhXdao7YmjQoe+rIMP4urTQlrIyxczM99+XDbCpwPfQeoP3MU96UihrSy0YTqZwreABnmtSA88fhp71jvyD3CwopGAuyOXwr/qAdfhzE3BoaaNlQalQLiuaPxzqiRClCxseH7c+xeDWs84E4jcat+hMUVuz77easw2TbEdrreY7tWs080L6IlJDLpKC4ABD5MexO0JGQutGXsgIANQnXxBbwYYJUlp3PgR73qZBMgutZQualNgGS8wNNUWfbNQ8eusFBqKm7LYsllcsZLzTo4lv8Dy/KLi+eNCDhgrr//YF8xHVjfCLEF3BCs5rOPJjGhWdbQdAqRApL3zkcyIvJ57qyd2gLlDGP/J1SbEPL4SZA9+ljC1xZMAi0HoSGCM6MMgylu15RpE1twz9mItlhdij+O4go8O/AIM4hts8Wi4is4g6arqs/lxFvGt6Nwy6Xf8STvxfeqJ90k2cy1rk=';const _IH='508267493b0514351a4b5b04b4f511019385a7f38d0ffd6fe16d64be1a6451f7';let _src;

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
