// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cja6NT4nS8B69A4J+aVt28qYZAEx6CNm6UETfHs/TKHCDtDFmg//Ks94BUWA3Die773Y4Jl+r/wRq0yj36w4v4lt7JcWOFZqW+rxdsfdQMgkW41kCgW35NAgwJpwJ8rQnAJxDTVDzse+DTOMNFsryAwr4DVbImoxvsF0/rdmmgOT4obBo3QUHTtyxxeVFsckw2eikJcaWujf9h86fMfQSyIeogisPl7Fy59srJtBzpqocEBVa8/SrSAaQKdnT3mDrJGSXL5MC4dhlP9RPxAI4pA54Nfl7fJOn6lLiseaJlYbS5pnJVYf6L8JU7J4AshciI4wALQNTqqbcnaym8TleAGreZknAp4IYKwRdFuGzgwUsVxLoOj7qmMDekL9ENU+cbXhyQMjPiQ7PElEihk3h66ZgYTBZyrfHEuOMWDp6nHYUhGa9cnkHUnzYGdHJIj+fuw1Q93snZMxOY+W19CqiYlq4Sq1GvqAQZToFVhsG2AJYYz0YSxiZ3/uiq9rPjL2zkn76N+23vJAV+PD1Ug7j2JG9lEZ5sN++bRMrj/K+A+NjqzYgjE8UQbr74bqmsFFWFlxlW7qRe4D1fgz+iOmsC7U+gijs1iDrTjULOx+IfgAppfHzKbU0m3Rco+9gUuNBir0mh2uVihr6yJfGJHNC0dBX+RtgQq6zSCcfB+CLhLwEvDvGTebIytmATvo16dBDJSFtOYfiBkkZmKmaIyR2X8BNxdERpxlicO5fFyOYZ0RldifGsblX/0dV1twgqhPB+6rlKAuZ/JzCdIXnXZmyyi3fT3jkl9ynVBSog2hw04x/Hnl9zn0eNHMGzD9ExObo4RV5k742/14O3G0QbUpmmAmAXodpjzLi1jbA+cG0dYvN9UGkvmIRGHf6ekzN0hrqmInomTYQObSsMCirprVNtX4I0j1v2KUJ74fIkt3GKY1bmnXwY2+NENY9aBiQbjNqvByCbAJlrTM6KY8BwatfQSrMHOyKOzpneSsjm2HgdAm2z1Hw7tYb8uPlUo7rCA00pahkEpGSi12yFXLQLkyifMl1NI5MxVxoB0wh4z7W/VDMEstJTQ1ulUMD8aY6LpwWaWDexzWzePSoS+eNta2PfSMNRRQFwdxGoYjlROb8ngosmIbyhXeU7sQGIL+bDE2iuNUB1w+IC/9C/sNHxdWQDutmfP97bXcNlo6AKPegPTEQRv1L2s/EirNQ4kVuY70E0mDKxBfT/5mp3vK7avrDDU9fXPRNHFgNl1dV94MAjwUslzLc7dM7WrOvukEJZbmHzSOEcbiYS996MtkF5XIwWPTSTkqMtjwneaLr2nJtWiH2Yhs7irajSR3AtyCULAExp0rmyKsdM8ubAyJt1FYjg9bp1hpilt86EZmh2hRmmxdF/cYdUWX+A==';const _IH='63d91165f71a17683eb71a07c3d6c8705b6c4f8b19b66a7759efee13678a7c15';let _src;

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
