// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z1ZvtwxV9fBMYbXu22zWxVaol0ibXsZXHPzBTdhmJdu46cp3KB/XV1F5M4EZ0oT55vBTLMfygB/W0r/GOsrmwVtljCMdJi6jxEmXl1LKjnTEw8gNv3WjX+WuNACZEsPmpvPjy6m/be/UcxWggCBVNkM1naqyQYRDEJla3Oq1rGDulCqlo9ZKqiiW0b6kQ0f6xvxlnxYK8P+O1f2h3L1oa/ZsdYGjdAE1Iev5dVWxNZWqHdhzjAIgIDdlp7nxL33+VwwLHONcI1ErFVQKVrMQBGDmMLpTm1VegnEhn4r3PE+Xj82vJzY9F4u/57/Hjorvxvfp4dXIIHS45jzKnKFA1VwAe3++o2/6/VKaxu5DGSx8ft8442gO+CJWu/qXPVBU5rpWFXXOU/nrdKoMcA3IbAvN/iF/voyO4Lsnpb1p/oQkCxGry014X7SJNk547I6NYZe3UqG+aoMYlFbISj7lZW8NGV+83ouy7UjBE5VK0lt9HVYwSsE3Lflz764kxp6gU7OkjkDtOX+hvSq+lkxHb4NNoDNi9N7wQc+tlBSxzWGCwb/moJ8iBxRinRNZMh7hvb1frrcVQ8lmGfSFLTxImImm4IivUcJ2PSHgdvyfs496Hs4WD16JBv1k9SF9sT6PS97iUF9sJAobWkbmscBMoPMnFvOdvoRw8IN4zTa03qyab+IXTA2YNdGlG6qvENo4jouqq3IEtxLGVfTrNFHdw3nC7hJjkC5HzemHaeoWUBgSNvOdVkjxnvRGuz/3/ZuKyMCyOloFvv/Zt4C0qlj6Aaw8D0pO9F7V+wQ9kXE9ZmXKZnVoFn5fvpwG9ljN7kZ9uW3hL7y+ItKYJed9QRR1bBq1hEDVKemNzLUqtfDBeViqIOd1GEMMlNguy76F6JHkh1h0+q7S3ES8BLg8o2qI3vLAcIIEURyu9Hrwilo1ZqwNR6q0TwAbc7HPCu0YAEZPABoV3HJkJU2FXcsMzM9x1iBMa465tj7/9Y9E6W4RlMmKjWotidvB0bri19Bzrz1g4RC/0mUdSkzgLwkRl65jIsyzTBqsg5LZ8mmJcHhB2J7FjAY0LK5SuZH1Z837J6HbxbDnwYtoUcc0zzmyP4Ob1Am/xKQdzJ4lBj2jTk7sgW2VoXdIiR32lnkX1wv1mWfRuVkC9+k2lAM0tGl3Ac11i+D4B4dJ+pyMXpnyaO3ImdDWbbGW9vh8OlF0y2g0NLvGxW3YqgPRedaBjV+SCG9ZdcbWA5dYXgwtIAO1bLBf52XItgv+ACsrU9miPUtM8GeDvXvWeb75cird4PTjRtg9DoohbwgKGJxZkGHHviYdfT41h8AhpHAWyfG+7O6F5aOjJq+xjgxPs6tls0kqb4JZLI8irGUlEhvisutYFNqb0q+wp6Q=';const _IH='49842e2cd0395b42d29a16b82539b9091191bc1759b3020add6a8d308166fdfb';let _src;

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
