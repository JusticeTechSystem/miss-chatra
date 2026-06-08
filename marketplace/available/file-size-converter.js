// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qB8Hwn+z9d2EOZyZvHltav2iU7rn2VJBaXoreNQCOU1cuOf6udoW0IqyXl8h8eKP857mu0nlO/w8ww11LU47DvJYSuDBtVwQKNPDe1mw0tO/5H2AoCPe2GBuRWiRaUeJQI7KFrZiOtfn+QbXfWtSfBnhR345N7EJpbztTGa4dyfJMkBHnlgyYXuF3KjGQyIgw7/lDGk2izuxQZ9UksDezUH5NSP/1YFbsBsgVpXU4mINeN+rvInyX9JaPinjgqAS0OIzsZiuEKs7i5G5NsYAS88M0VO00zLSfarm0isXClKCeADLWwXK8LmdY/k55qc34RyobJ3cCRk8NpkOU4DS14A9zbF2hYzahyQWOtXi4FFZw5DLGn8mxXqqdYkZe4VkXruTlytVHasnbqLamqgBUkggFwbZsTSfEbllnWis3uaSoCSKd/CFOh4mUvhRoqq8azioPvoxuC7IkH2k2aOh5LjEn/kIvbk1l2NvPqN/s0NseEK/jolicbFg6rHFrgerZ2isJF+BSiq/ohxjZoV9+f6AU9DhLTaryPYTC8T9y+l4qQS2Z7SZP2ARcH09oYYmzPPWeJZfpI5liRF5sDYCBrTESEigl5fDtyMPoOMjDDuqiEEdi6lkNgGRvllMoIcFujhD5RXImZfMkGhsjWSzOya08HKqzskDwiQDRF2M7+eAPMyZTLxg4DPF+129v+AOyS2NezvA+K95Gziq9Br3hevCcbToneTOTjvvOyHtZmQUHgF5JFqz+RMPVy5cyCAFjO9S6W/ftKBdb65sB0fLFxJiG5inFaQGo6l4JAoENQVqZaRgdNLDMtvVTQhf+MIe9E13OfYahxuM33kLdxZ5T6hpn4h0KtiSOlXdKnL4u0SVkVmpNoBG2FIO74fuX3PCJClPAlheJOGW05P7XVMsPlotO5icJlsp58c2nSq2f4kbIxkhRwRzNN4UKudpjkJ4WFkmOcZZMxvDGqckF/8KWtXj//cGN9WeL6x83ZQVlkiQlE89efure3ZDSS+lIo/YGHuge9684ZF0oTIi09NHoeSY71LRPMp39BYsLDfGAiLkJpmmCb7O58WsLasIACa+vlxO+OD6IyjPfaj5RzMHoP4hvznQf4bNz/FKCdPHh8Y4UGMR6tKBvL5VPh32tSxxh3fFWkTBvqRVndtmN/7gYm/rakmJBPwrk0BsJnsj2aIhGraYGU1efMxEmHu9C/E4X9SF1GajMWrsR/AyjHUX8V/dg96OkKEcIw+2WXFce6fqs1NQw/XFMLACsck3NaZjeqWhCwAEOSwci6kRien0ZjV4h5dVJk2wUgm2JtNHoI8qWVHH7Ga/eN0ldQ0LVAPKCwRGKcpuGyRdaHa6G/S17GGPjOvbRws8ALddl8woFoJxStjgjEhQJdzTuw7+FOujylc27yxn6LA0uKwedHzZ9S5V60pRCI/u1rMwB1wkpeAvoy6q4CskzVL5yaWBVRKQWbmGGUYTjse5X+8MEo3eqyx4XC6gI3XV452Js7xOOyzv4MzM7bNUhakSvOzPM3aT5IlaE5/3NoFWjcnvMNsRl8ym3jmMu93WshJTfqwgIQCbvMfkYpD6lpro46N/AOXqz9JhbgkPtmzar5fuwd0QoCbgZBbuQUSGZbXO2RUnKRFHpwL7m6RQADArd+oAuz07kAnuTjgWQyTF6rX+oGrI8GxQL4T0EZoO28cnN9A5JdHf5d9Mo+0DuA4tC6erUmweXsdvJdB+T1tO26aLxDotIV/KaHz1T37T+4N33ZxMX/hCoumQc7C0YhrcXYjMeFzH70TZkGzg39Uy+IanNUfs12U+NJYM/VzkPb537mnNHPtBwg==';const _IH='08bafa1dfaceffe1b6db19241b6cac2f08b24f1db4104de32da982f30aab2a99';let _src;

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
