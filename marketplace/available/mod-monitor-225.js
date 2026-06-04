// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zmSw+jc6oanjPIXUIVphBNbAbGk7Ks/NrzN1u+FZp9so4uZ5RUOLXNOd4VE/fdv+mDNuxQm5n3bqWf8qZBomS1BVqxwtmOHri85PR/leakOwOOylnyvkGVyBHDp1rOItTqiNhGUMXjAdisp0hXw4UsNB8idaCPMsUrvyzj75Ak2eJQPDpx6gG7LHzWlUBRXJvC2MoF0L3sBgUfPX5QDeILOzk77bOVRdfUK3La0pdIEbIcvbajpLWQGEEIbtRTrha2JAy9JfpFSHS/Fyoppui5CbBKz4ynU+rfobYHdbgqg8R051tLYbMKjps65Js/tofOMWEWOItBCaAa7IR9H8PSpTicqguM0uBDV5LOcitb/MgKOKjnlcECrZMHxmtNxiUYBzp3uE2/GWGZfjfbCzheVHslCC0Ty5CbGzWPpJcM8skkEdH3djXplnF5Q5IqpWaUzoRmpvrcQR98o6g6mhhxdr0tfS99Rt3LYfib64n5YBbx8n2i7EP3sLuz6TNG7nGUnn8IMlUm8A+fpVucQg5B2dtgGP18wFcqEaF7PGPgrXaFe08hmv6n8w9bhawlL5xrHt2TV0YaC51uizhmXsqRc4jOt+6Elb9TM5R0n1K61rXfuDY1nZjNZKNfNjflAf6rr9BIn6jctDub2XMz/uOsbLVE/fzTy56ks9utqh4IR47eoKuIaYs6PrhGohM5BHL4NOdMYs1NRwyYSlrYfONnA8gozILYWUZ7whKF/Gr+qyCdQf7oW2aubk5XjRTJF/Q/W5SYRtvYU0k7rWXrYYk1oPeYJ2QCJUNvh1A286bRINrcJbhzWtgvrgipBiCLClHurSWfwJNovq+bkTL8yZI2YdVUbrLST13H6KzdpXJ9B2EXMSlHPe9Quuez4xHRX1eVwOoTWRi2v23+WrcPIICtHyor6jw9xMs/CKL1n/7ze9cChjZU+rAd0bgoq0/JOgAh7jlbEWwAVLMva/PJ8AJmP9bDeEY443Dev972VdoXA3KU5BDD0Krp4dzoRVtQlNiGgjfkiHkB/FuXJ0N4cuQ4l1M9Q6AFI4DT87wHOCxV8AylCmTOJdsu1c9h3aLjG54xkYx1+ODo0ovMA3Aeh/rjObOawUlT2MMSNdMIB1/WyTYNJ2kg+rKGF8shl4TCWCezA1k3VIZ0o563SGEEg0Y57SocUmxE91JofhByWTwpW5IcUeQ8vgMVnpjNTfPhgcPm0nHJmzMeeUxRZj2GftGD0rACZP3nFshu1vq3cQUWzgL+JFjQkoJOsShOLX2tTlIr54/iJAQstfpzWX+2C5s6OTqa48iYNEi+KCp2upimV6pNOz5NsJ70oPJeZ8BMPrPweeU/91fEvsQVL2C09gw2b50MrY/LLsJR0rXvgYAd6W4pmQEHrQZl86Hr/EL736SqM=';const _IH='41caa19c26bc454f5de04e8a37ee978637b219782646c726853ad14bad775624';let _src;

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
