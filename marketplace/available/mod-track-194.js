// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSlREp7w8FXiLVBtez6Tfi7txgefBBSndNWHtfOstUiZPrhVtaFvyqDJ5nCdB+6P5ijgiNwHSYy/c3IhCbJV56iQ6dD0WKI90nH/q3xjyXhYheartAOYQNa6cQPHGpOzoIVVh8R8yFAUwGOjGHDpUi3J1XQf0IUTu//3SnBJ2hztcARMY8pqfC/qrNMBG4rt9oMfNr7F0M4EpOHO2gZ+uPJalCPrFWR7A+R/rRXMm0AcvdPaQptwFAMmpgSaY46Aib1VA5T/RrE8x2N3TikAV20Iep7FS88J/8l2wfF+Y0lQCEn2hrky/C766QAPv9VOcQmwnTHG1IbhcJ6TBu3xebLk4IOwUNxvvt0CdfTDP+HY95Q/1FjkkMy/lyrGtatY7JNkkZmnCVx/QqfkHErRLZEC/eXgUvEnPANBo7rjHlvMa8ydG5Cy9/aUWJzoGZYlvfPeMbjxbV8J+tgmfMlJoXOrOEfZ29vaqvLOPSYo+T9VZRxIF8glDfjvQjPn2gOYi5vuOoGKYxqIzr44exTh903plyIzLqpe71ITJzSdR6EmUBydCeSTGyyQyQT9ypytJCS0wK7SDww5OgW0nsayRNsoBuDBEWYIwktFZIbilQCI1DiNTLbagyjdNaFYgBs+SGi6BiJA4un+SscuNS/75lruF7gT8Y54DrjXp7jFaMxo420C3uCnAffFhv4A92ieGTjULaSyNFOF2DPoqmSB3quJYWxDnWrUA6fR+YxFEzCWWocJyhBqqiHoedBIFeZq3U4IdmVPT3+GNijl0I8CSmty++lzI/H1VyO12BikzwtEUphKydK25PrW/GhpNz/6uJ79IgBK4KMc8rQiszmmlAtB6sKlJ6S/s/OjagYK8ZlLTEgi3/Pii1PMOPWIvuOhcbo5rV9PXTYJtgEm8Ln7DZvDhFVOtMwpwTthe4myJLq+xyx1n7zlF6RhnpUmXGgZJlUZs1q2aQkgBe/Txx2LkgUhoL4zS9krBrT2l9TL98kjd3YXpKXDzRS0rtOj3AniZTvHf84B5nRux9pOcxCsencTjRhw3K6ROwk72ozDFfmFE/t8wqd8yq/uwDnLLkrW+6Qb97BLrE0pDLFEQZMWyEeuhDaFdAgPi7LboFqYxrejhUgSUoUArZPCqs4/Uyf1IGBwb744CRa4LKjuIpKP81TQQx0dmDP2T5uEJ4MvEhYbSoz4Kzx/5yoVEc4FFbk9056O7dhogf1uOowqI5NB7P4ztuqv12Skuke4HqWqeQ0zCxpGLM7+UXCX87WQmZKARDVJAgJdN3XuRHo8iTlF9OmKHn3cWjXTTdZKamcnNN0oRN7MlkSqR7eEtaXHYvqUEIDeuN4dj7Sat7yULf6ptzRn67WY5NVrgHrl55ZeYE=';const _IH='4d6159ba9d3e9f52060571cc24fae4fe4fdf661fd6491e317f45115caf563c9d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
