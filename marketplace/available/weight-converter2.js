// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DxF6+JjNK+AoD9JjymcvkeRjsXF7ZioGS1p2HRNLs4kp0pqEPnq4xiLqEAI3GFnnAxHxUl01OQhnXvYAVcPeM6PaIrkqi3ytWVMCK9b38zLu5TxB070pBmjVCzohDupAcPX4zAx/y2i3aWKU4VYkXlqnlDqP4Huc15udsTJ2oosSN3Jc1ZNpRFSAT13hlq18XwJPKpBSBpylRn2Lb67UtWJTW+UCDHfDsGxTvIeJq3DxvIR18L3yDrGiDZt3DDZeUXCmEzngoiEGWQ7ncG3/u7DgWauXwXqe7QCy0PGRJGAAZBrqwRcx9q8b5ncFdmJ0pt9JJaOYPF+VDqrfBcyjp8pq1jwxW624nc6Zp4fbF+ZQIJnDNMTkYflASGxyhV7hMKZsHpHpbf4zsstS4n1vdYyXkiM/c05VQOU67wZZhTGqERp29to5cS5hQ01Jj0c4/7GAVC+IUPt1GwMEsO2YaV0scOeggwIcXntmbz8jT0K9ghW+71YL+22QmjAfbv3pS571ZrW0FJUvMLFwYUoXlH66RIV5sOYFeOzLLIEXndCMx6blJv+EVLPI/FibEGejJDpoCdrGD0ZtzHAd24qnBSYyulH9SgNDT4OGzN80MEHEnd/HSwHgPss6bGs+ZP9RE+dxmXaaWWoYwN2i/JE9tmPd2A73WpWUcr2304BSbH9oT7s8OJGFg3iNKsGP8pXWbhny7u461hM0NhmNQ9xXfMdpIWdh/KzQ7I0BCafAsMVlgrrnflxiKeOwPouHi008uT2uXpfTsCp54AxZUtgnrw/9esdh34BMziGAkB5CbxJzla/dzcwT6nYX93LgV6RfDHdhJgApav1gLaZ/7xJX5CE8yMecAuC/LBH+8awjBYNJ1JxSXaeL7zBp8S/VDm8BTbvgCylWiT1V1L+OcH8z8LThBKlWv1qtVgcQXTFl//OGSIjrQQWzO/Dci46bNNquXine+wwqJHw1TPKnj+EwWEkCZwtxJJ8lzlh0CJbcVNZCzWcKnmjB8pf6Lc98qb1KF/6deYOlorB9ka8Adtkuztv+gnnPx827aQ04ij0oFvJw4Bn10B54jhGQc+jmdLlk850yOoZFM6NVbA7ZVroMG0S3m+9QhB6lqvHLXSYSv08yZW89ps1TRZBnfQrxd0MYHy2xn6SPXTKeAguFEBBv/q5lw5uCDdYD6H6G0vvuN63VJE6BJuCD646AiHX1b4JH/JSVXYO14/gklKoAK1J4zpL04wLm9nBeYK9aQX7UHPcDm4fZOrd2p90h6wtZVKc7AxlqIrOz/W/I8aBX+dSTbqe5iWf0AyK6pbDEGNHcdbClYtNqKAfieQaJrOGlMZA750nk+z36VLKq8bmWPYBZb0ZL/f90bPzeSOSpqavVoN3Afk/XmpCpjLsLbdeOrfuVHEry2b25ZR7aQLqRDyNelsiR+ZXeycoJYEYWXcRXnEOtiYt4oGvF4V2/3Tb/ov6h7+tb888h3RJc2wI2uFwXjNcgC2AAuxQ+qgPp69gty3oalpl1AwkJYx7lkiZa0nyF97i4eWqvhvuNKok7gfWU7FxjLs+zYxW06GwmbQlgVM32emgoc6p9H0q7eaDEc6bpQ482yfczCymFRaGB4K6iEiQHqZtPxNsynILSZtwQWaEEquKG3HAo9JgpdpldEUMUNN2OdgcD44vPw+gn2ZrJy8rqu6LExkUC2xvCxtPtSyEDCXeS0l4MvGILYI/fdCI0XC1ayHwj3J/UCg1fnfW2/8Hjy1Fr+aotTg==';const _IH='4f75c54f63bb53151f85567c787929ef2bd4efa9345d35d799c7adcf0547c577';let _src;

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
