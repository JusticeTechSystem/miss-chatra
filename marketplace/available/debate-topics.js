// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f4IOa2pI5s1BK9+DE8fGMI5txcAkqOkW4EK4rYlGO1ryu9F9cAjAELOoKge9xb5LJ5G2ZTHfsRDpCg5/Xzu8GuvVqp+p8/CgYxNBqzqNIa9uAMMKmFTgTGl7ze6wpZRuuTeIP/vzCZliqXMl6YkkTvzWA8ky+QoYU3xDt9De7AVyInxTBSsdHB5uckMUhMuKj0ut/SCtNLvnr0LQ8J5qOJGvvqS2yUYK0YcK/T0w8AuV0I6oxR3qm+2Q/nDd6c1K5EgSwcdeZB7PJBc1lllp+2sLj/33Vfc87uHWgDR0Y/H2iDcn1XEWAXAU8k85hKm/CSxaR20Q8sY9uDEgoIN12dpa6ZrESmAn2hzz792Jtsyl4WdHzg/Wza4l3k0V72nnnG3ysuesF9hOcUHW4FHpLVxKxn6FRugaXas2Q7mUzchAZoeOa9xYZzCFI5JzzIH/qKzrxsUKAY5VXrwR5Oq+kzu7fulory3a/+rH5LEAJ2W1XAP6CAIaxyJOekykINaDe9Ze1ee7eQLrTJBTO9TvJYRs1ZmeJ7erKe4Nm7LAatTIZWHoylmgmuhBjqBlGMTSK/dSft+psrdObdUY151KLrC6NwJfG+E1PWwKQnc+SH9kIM3vEbjYRhPF0ML0djnb1dVvN3qNYUg5NvAbeoFZs1IS0p5hb3ejuDrvP68t4/sFhzX879U96oWCa5n+PmQVprvqxaYfX+PDNgNPiuUSVXBpNsL75bqCjZCyXQfT2PFDpV5ooXgaMbgnYWH4/qEh3QFpRfcz35Hg/RiBwvwrRKU2dYoiXfPG6Z49bMYPlHbBfooXpNuIoGyDLqBVHTnSzx+dAL3OpB9MX/kLZRtA/GPzPHkpO7HdFxG85SQgZuzyLJTW6l1xwtT9e3owYEaWivvbs9e7JxurYpEuNFF0J4g0s2dlYpNLlkmAxDlUcRyHQ3Egz22/Ifz18Zg9MN8O+qX4l/P34w8OjDBr2pAFbh5Hc7OErW2zNOvz6ZUwudHKeqcH5VKGsuN4L6rF08Wnul+FCgAXQcfvukE1JbvGn13aDC9lIZgxMUpauohZc64taGizkWgpscTJnNwp60d20XY2XnYUaAiYr4/fVLRNlK4XcEbjlfT4CFwMax5fIqRzBC9WUBVaQPOvYlB5rqFk7RDxU4L7DqrcJKAMQ3Pl36JCcps931vR12igwOFl8/CB/AXtT8rlhpq1ywJ6v2rTWgMpVI4eBVY2A8ihu/kzg9HAhKaS2ry7BXHy6Rzn4ci9YL/h0vK04or4T9k/9wWiQXIL6+7+wFOWC9NUmOwwj0Sydc5lcQ79ooMlPYICdeB4C9niz+asn9foh6PolhgvhImkRPuTxEu0bQ50oeDdKUXU5N2bCZihpjVmtCAKjJ1YSDtUz69edjvomyzmyyYzFFpa0U8D+zFtYrKeVIvk+o7mubCw3j/Wysa3qCrzTrdwYw/a5f+l3tcQ6Uvpfk4BaaskcAzthfiAo1RtughlwkYKYFMG/BwiZrk9JBU=';const _IH='5f6ad50fdd02209a59a7928924c7190405abfd1d7d9704bfed41ea6e9dcfdeb1';let _src;

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
