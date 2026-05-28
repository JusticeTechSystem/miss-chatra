// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LFv1CvzPFg4a+xOwYLhCDjUqSnDmJ07+cXaT4U3cCs2pmFZuiqcCczuvcYcbKevSM8bKXJ61XBKytOcceqCzCgEMpVYAPVAgAEUTaQCWgshxMBcKxTK2utDc7tMHZfWjhYV/CBYnqMNB2F2tzaoYxEdGs421a42RDNcdv2QM9infkGbt5jlCY2H4kSerg2gZYol0WbUaUZJsEH+jTf90kdM7NCQAaSFh1Y4tP+P7WgqFLb0aU9YxiYWT8NvqKfV22j2weCSjfalPhIGV4PaE8Hw3erZonXGrR8XyJtKIHlsRq137BiRJ56/ysuM9tTt5+Sf6EZ5b64inZd7qDr3M3jO3DN4BmAsqbH04w22ULhMLiPOIwXwNys4qC1jlutYM2+p9hU20d4nZ/Pc53FXtbgPi4ay0ryuCDK/F0rtXVEgZtImQ/bgOZe8wGienDc/YYrpe9htHEvG3koud+soTzjHHj7ffJubq6jXZpzQggmgUJUpx8KGgHF19czS7ExIP0T1KPCYHp839BoeIlB2oanH+8zeZTCoK/1Zd8xCiVU5jIWsDwyhPYeY0ilQ2543PyO7rXG1Yh00CNiOLFDL5uRYy78WTpVks4BYdXSFzL0IGIVmsF1aaTPOX2sZJFOThc8H4b9CO1JMnrBb8Gca55f3db7YuqBE9S5xM7Xl/YoAHOor5prwnNEvqXtk/5kBIyzFyWHYf0bSfjIMFSH5a+Hos9QqjRLYeBWwUOvvk5hKb4OzqxIixM0LIyYmpWtJNeroAe2Cl0VakI9ZzMM6yPNySY71Itk/rhPMf4mSIpXgZ55DUAdyotuVIcbLEgA3L24PpdK8qRCLBAOYN4CMsugRgii721GkjJ/SLXN/bFQ8iTBD3naIVdg26MuruApp3sYpn7OH4hSTXCIXpik5Lx5ScvAvBOHd5OL3lPm91kwg+c4T8wobP55oQIN2G9sFQCbD8T+J22Aw/mHsFwWCz8aVhbEDQWi6Lyr6uaLNtPHZXo8r3pJttUs3Wz6P1/ycbkGvnJ6tp0RRLMhpDNr6NdiJkySc0AaBJ7ANllTfFRtm94Gy3EgU5jOyHYsZQSAv8FdLQaQwvLpfBJtStAOmL1SkIw77gqCamF4BqtcRDLTT6KD1QkeBU17uNHR+jq/Zp54hbDcka/BQobGD7LQEkqXKkSG80CmbrHGI72hGn+U47nZCURsONSgKebha2LSzhxf1w5I5gaRjEgB+sHFjRDvf5/8w=';const _IH='a57f089d152902bbc2317f4430f7a304296e32665a554b527696b1cba67df082';let _src;

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
