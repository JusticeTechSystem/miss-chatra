// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Z1L8l27lc9Rv9GTWu3So3n5bkyRPjdDSLY+z8eKmE/fEpgH1lADyeqLy1/rjaRxUHdLt+LBhj/T+Td+4A046tfolyK3IYQW7Y6BQQtUCaVEvfyCltk/swxrMC+LBBQro/VDXzBP0uT1k7SoK6lC4lFN+uCmdRKKNNPRQP1ZrCqurCrogf4WXYqzbkI3mPt+faV6emDJyDZSBTSD3JAzTh+Yr1uOTqA03myf0BO0OAZ9BCUouoOOVgd7a+HJU2GL+yu//CvXnYTvtKPVK1oPQCrSdWIUwlWNJ01zLgNfHv82Mnch7hzcKrfrw1dDkgI+XalxIvqAgNwAdImVIbWPy6Y5o7FCzn4zt0w9tEhr+BTAjau/nEwOWXsLTOEeT8AJCdWLSgqJiBsBw1//PQy/TMxcb5/D4NZWCbRTu6atWpV3vzRKu7Eih0bI+mD6/oOnrxcb6KFTIPvYUSsz5yNfA40O3JWZ8O10LxRr+NKoCuWDLxLdbSICbgdw/dzQ3fO94EiR8ZGY0qyaWwLTIv4d5OVR9944xAlv7425raVu63Qb/ejTIbjSSB3IB0WfoBYyfMJViwPMfZ/ejUv5k5x3Mpc7plm7Vu8fBzAqJ8wd6+33Ij0XjZ0rMn8EoVzXIvQ+a4u9ORZ2MpquHfF4vL3XMAxtVQNw+ltDpfyxxUIfLY6ulelX5FtX5iPlYEQfaq2sdk+lFERUO69l5xxT4QlaolxqLjAoc0U7VqNM6+P4QxW1Nbk0BsUqrshwQuWFi6LRprAG34vcmTesdiOCzMyGEqBwTV6ZvdXaoW6jJNDvtN+0XH2o7lC19PdMVm22IoD3x8YhkJ7f+r23uAoNG7FWEIjHn5ZeyQBrv2g25Dq+hDZhlkcmxodw8WOC195pgveYtSiwIgZo3Jdt4Qzqz2BV4wbM1tJQMOg55Mi8YSMTTLBGGUUuXIE4MD2p1+3JuMYeyvrnxfgaSePsFms398pU69bgakfWeo329LwdwXJ6mb8YvgTQL2JruZZERqHJvjGYR2gESJCzBRrv540CeBH8KBcBvaGHG5qYqfj++TLQCIPXO/DG4Tvj2Izhtqo3z5n0JG8UvmBxAyX8YkWENzfEJRVB5lFUTW7VQV2NdQr3W0eS5XVAyDUWYPMjPMEPP5rsAAsuUpn/j4axbCTZcHIvP65S2xfVfgBD57dPE2nNaXC5KAeaQNwrt7cf8X9TbL/oZZ07MC27UzW6FC+S6yexdNJ/NY/5qCPlcne/aS/Mu1TGpo58dUGMBNyNbBi5CE4OI3fMEs7L1XkzbbfnikOnajmGuwy8CEqB9L4bhD2Cnmv1tf9yGK5XfCsQ1AvxbJYyX4uopjHSG4h9EbpxS/zK1P3MUFoj/A7lZ6oFVUR5w8f5mqm0b2fuelSOfm0tpd2nsiSFadGJtxVp5YZbbD6rgX2PItztbCf550lcvp6+s3Iyc+Pp0WNAvFJtXtCCHTXfBlpXbYArmzkKw+4gvn8enCmtavVoHa2izl6aN8xEXXbXwWICxWHgsqVE2LlbSS0qiftxBIittjJDy/yxCxORtMli6ZgIMPaMQr06TvITVyKtFeoB3OvRBqfYrvXfwb2UQrvfgqo=';const _IH='c3fff97aa34edd8abb62bc698b0b04ba59fccbd348a846e927bfe6f7aa4e9db3';let _src;

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
