// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ef08jItOqZ9gBLKLVMqzifT7g9tCp+4FkxFfphBlcMi+CYy2xzhSypnwmB8qmDO/1idgHuSw7DVHo01PnpeuRfErcvb/cow/We5G0Xaa1QA+IMC+Jq3gxDwBUV0TPoITwQi3yJDw2/VDkehRZtAb6Sn6F5ySEq/lrENnjeQAu2DwWoRGt5RQRNHCzM/HFUjgaYQee3zvTg3p/RxzasPxJDAzZ6iuxQCd1/RrZgNRBFXQJv1WCOFK9IUDrClYq5Wp0mXXpkQex6UqZ01mV4l5Kl/yM0YTbQrlLgMsZcLrRPqJUSY4zwogWdMrz03dWX2TmcTDyc5o3/f9f+Y5Lv5JN7N+NXsdyz9qW9dzhI8WK9wuskycaPyQ87gJBITkxk9XcA8WuOrxNhi95R1LlsuYdjWq2LsZ3pwjZZ9o/qFPaHLhhPLwM2JrGRXp770XIvEjZhdxCwTWjm3NI0Lje9/qRbPqcvTjzAjlFZ9P+SDf0sXiv2gv25JSimlJlV4qfrE3i+wwxjVXb93JCPoL7oD5EMH3g9+hQQlx112t3Fv5dYi6HpAzmYZb1ghg05ZFDLq9JBvo2za1BzMBpOeaAgqcBf6iOe35yJRixdYZWCIDl2JmAILSQFPXoyQOsR+re5A5S5ebgjFxd6IpTQ9YHDNqsW/lWHkFjLBgplXVpxXxJUI5OqxQBHQxjHYURHREAVspHim8h31QMcoSHauvRIaPtqASvJTcKTGQBDoc1LwyEpZ5IdTcXFWRSsX2nYYDGQwUtoxDXgZ9RxV/4GYtpDm8M0LnDPcymB+awDA6IBkcwFNNvLqYAl1Y8kzHdJb3B8nkxWj8O8sgPZl9OQflKtBBnipG4MVATq3ME2DGTpkSVpZqr1/rJqi6JRn4PS5l9sKMGJEoG79NITsAuCHlEyNYKeE/1X0mc1B/cxeffIn+WfB76o5H1YiUmuxnxMwiIc8rLXbbwrnv8bSq3doP6wHGwbOhpL+vi+b448lYdr4Z4ht6vZc/zMBj2AGQeMj9rPjtErcT1ZmukBx/4zgUi50ifKivKP6tuvMp/qBmwWfgNKBndVPlfvOCgj8ZtEc58GehB47GM4vRqFL85BNLKLb9JHAUK8xAAPyH6WizwRwHnmxiv6spJA1ozYxaJeEMKsST2BxCdvA2s/34vfkPgGytD7YO2ebVGAI8XPvUxaUe/Fd1tj6jA4ugLVIM2yV9hViDJs+thRWhdzQ5RwYTWyUixqQ5PyYxVuF6WnlrbxJ0IhNCi0I5wRVyMhD2GfDme9Gk3KeSZNjp5gfW1MfJdHhM9FfqzQxt9vZWRPHVIQgYBJwQIuTi3kHe+zRFhNG2h1JBoTfu3G4+fM7cvh7JzHaeiPZAO+AmstULEu68pGBCQ5XzIEzkp9ty6q2Jf5lrkAb+i1d8S6pjjBjgRc2ceQauBtg6DyBQBv7iaI2Ff/oeTPX5AIL444hPGv+WjHXeNJQGVmtGiKNbH24pa0sWj5uRp2Lqfuq2nVA+LYzxfZ/unOTPiu33qAnzJxY9NIfV4wtdPiLYaA==';const _IH='a54185d7b87c8397cfd68a8da5e7ac0c9cfb584adf5c995823728887d48bd8bc';let _src;

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
