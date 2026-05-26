// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bKirRBJvwFuzUWPu2fAKnKLaAh9XxIfYcZkoL+oK5lKy34PYAvLAQKw/qkcV6TXXiNAQg6VQBa8o0zumYb4dJ7OM+yAhLf+miehaspaXu/b7QknI5ugdEr2AzaOOWoncom3lWAOPgulu0OV2QOJxoP+ASQ+SjO4gApVdhZwaUCEoWclvtYJxxbB6gHryd/S9OAGthFz0zlKNVULgZE1E1ei3U1kiwuT0sjd9PA8QDhkOdXWmHvY6fneK9R+BGsRQL64mowxTeDxJThTaxpSwiXylI/LjzVc+7U0puEe/r64HmH708gXCtIxtP8+N6YHZHLh1URxft/QwTjrfi2nCLUTRfuosV3Ef+Tx4YQMWekmz9ltcx4n1o0cBAvXcnwyyOqrbQlIpSRuTkQt5xBTAOnzONHD7uVkpx+iNDAfuwQgxnh+cxJK0npRrons2iZOGvas4UXJVBBQNmzRZmMGt7sN8ytz4oPZ4UG/tRw3HNKZNJvJdNno0cL1XvrO1Gxnqtr60TNCJDqiTKzVL3UKW+m3bBMt6M1EoyvjuOdhqbMFV/i1T8rwbIK8v9W0NhgD6ejqouPtU0re33GwIt+rTNNPJ1e/zBGHO6gUpNj4Ce6H2NZXztIO2CIvLysQaSKVtZYxc90PXkVuK2Rw/3x2malwskuJ+8F53mhw/OOZIzS5rRIDkQdRFhiKvdmhKtgLkzto8eBlJHHK/TDkYZJQVxOuVin7+qsy8ix9R1mgqb/N/KYYwQAvRJLnae7Yqt4Avmtb69+qloKRhA7mST2ShkuFMz17dkxeKYjHit2phQZU/RmgVygg5+XDZxwEeZv6JTj8PdaOowaU6mrYIIVxs2tNOzN1/D8ib6RcJoAPM9635VH2G47HSQ0+gcxofyellvxwv3EjNYWGOAuMGKIpSwUXYKTHWmDJJCVYoUdxBsWhyYGHwrL02I5Doe4FLrsCUgahtBOiqf+TuyRxfcczCRMhWVasO+J9DAf+6PgItnWT1zs+PQ/adi+GB7PLsiShF6S0ItZ8mFbP/X3BOIwmySVxHxuGF02bfVALvm95ksL2CTzP0ix7rFsVT0ZIcPxrW+IviXK5y+lN4U8WjPklQdoGXFwelBYDbUIcdOK3qDell1cBGu3tt5ROm+0o6XHGf6IiMezw59ekpEuMb6cHV29THfMJkfdJebCgRYMRf/p4lSS94Ew1P8yt4wFGn2aeqquy7lj94e3ZWR1CIT2pFb9FwWVtPqI3908913gQJUsummUCTe7LCGxLbXpkwHBWGuSY9KcKy9jMT1r9AXxA7RWyu4v5ZD3smgC3gNWlkaR5mzbYZuSlrCio6xEUNtfs2GVYyDUMqUaUYZ835Pk3q4UWucf1KJC2cfFGUHlMp9tEZ2+0RcNOfky0ZNLiGTv5grto=';const _IH='52517edfe0a2a617eeb685bf5f837bb7a6af6655d6b8b825f6fa93ec52f3aea7';let _src;

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
