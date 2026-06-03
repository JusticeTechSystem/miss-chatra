// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CZVRCGRBzbNjOY0WnJ0yV27kPBB2frW6+bno++N4DHVqaRy+Q7mBRj2T0xmfArBJZ2hEYg8owJjK7A/sJu2EluaZUnS9RnYVIPo6ZUJYlcgpOLBh7Z1QxxHarv32gNke9tgYk4R1RDagnIpqMfQiQeVnpMBg9DuPeaR6SVJGD6cKQ9lV2X8tMSuS1Ed2thRzAIqAm4ERep8xOlBlYOcEIBW5poBLiH+eqBOM+P7xAOZev+s6z4Unr2YEgZxZTfUDfTKrUkT86kQeAPnFvH0cghFz63ZDwnTSNuHEJ3mPBCVsGG7gD+X9NJlatx9c7/Ui3DXluH0+CZZ5zn8yk28BkOkgggTF62bM9oH/KB0PcislKvdbS7tK+Ucpk5OcIaU/7VsQPEBHBfJqWlLZxPFPXnELQ891u5pU8KX7dLZTL4WF/z8XmS0+0ZUX+Mnh8r/lySaX3ZIqU39NZCQpgGs/MJITUdHgrQ+nnwCY+TiZArk8br7jW59vB8EV6Hnv3ZOJwfteM1dylPZ2SCEaCxDkTuEIqUkjI1W8W5TXYXWz8qAv/CbLWQLURBxlZ77KZP7AOp6SQjSRaqpvKvhPKiGL4tNAzhD37i9miLVaXpgHGHqJt+ryh9oKTxigKLYhvNMUJkDaFetGGF7t4xabCkjK0GTiLFyD6PUxHVyNHRfMGFWtKa2SPKjCMZQuvJpsEJMtt5TAkydq1WhLfSNy8MIZ0W02ZJ9kO9YD3/zv4aAgGMt4fMqQpToCTFw57SIVaRLZgpEl8WpARaFoWJEx53O1BWLZNGwr4bYDWQkAJGHlJcgOY365jcURQPm8ATGeKdRzp1Xl9uNKPDpEunm5tqxLQVCSVdE4KL/3ONZ6Vy8SH7phTx0rTFXLyGMYdAFjCcmfGBIADsW050bxalY9VKBtdC4zAuV9ulRYno/cepuU65bgk6TqraDa6T/bVdl/qvLNEkjdwStpqJmihUYoP26yMKfyEzCEXAv69c6Qmf4L3VbM8pwyPQc9MMcUln5HkdhugwXHqCgU1d+Rxf+KynCUIBjgQm4nFfWco9B8PqlzNG1JeqCpmiikqXF+NRwjArFtD/xNyeLEy1RfA72BVAAEKNzqKh8OvZSh78v2SLZfDuo1wzio/gUoOqTve0iC/Q15ZkSNkUZ0ij5XriP6I8ASkxFxStyrBZQczoSren4Y7v7isfaP+sRMqoFdEYTJoSdMiwWVZYLS5nfVuuvFsDO7R5CxLc06FUIGDdEzQS1VikrBd5fBLd9UulhFzbZ3o36JSkGoy4Ov9mfsqoC/1UsNtzT1MnAupvqg0pZU4KKmztTC9n0lVs/hl6GkAT8VhJkdErPxLF7jLVfDnICTuDFho8kyvcHVR0rnBQ==';const _IH='3e1bf7a90e8ac83a56d51af57385540221854ec52dd3684d53376c637b6e7d6f';let _src;

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
