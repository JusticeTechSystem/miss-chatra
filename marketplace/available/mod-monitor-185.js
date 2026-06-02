// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nyENzFIf97e+i0T+OdLpZduubc/bMzd0lfeeZ7WmV1/6KgBpY0pAICbJ4f0P/hq2C7jg+GKQbyJQySe9W9hJUnZ9Bxd9JFFdcQ1wWJelZu578i+99kFhaG3GwQxy4CHJ2fqt72eP9Be5HX9pMCHnv280/cjfRqNJ/exnf7CD0fdytLnky2VFPt3IALaOlIOWBx2dIRNdvf5mNMpV3eU+hsjiNc2vWSIQF6G82ilfE4fybwrhKPmw1Z7FbehdlVwJPnf/IbF92Er5JlD5AFSJ0efaFO4InBZiP+OGNPX3CdpCpYz2ese6X18KT+xkAeuogrPP7pZVNRVtdVGX/o4L7vV6YV9HPp0NMXsM2xvQU675icIUux1vikhTsCDROu3NDaTtsiGDLTSNuh9nXxkSj1/SDx4wqM1OlfCENNsGuVlQWj02t+Jv9N3xIE4eWeYeeb3pZnArvcydohjZNkMK8wCjdR6W72NeyW3v4M2FFzlHaDoVsz+g3e351HPrSWTeV56UXHthESqm6HA73PPw7oQ0rdt0TZHbQZZ0cK+H8P9/WFWOyb73JIF6KhT+mWre3RPk4H0TvLkN7y6DKhwG49lhu6M8vci2vYCIvJRnNedrQwftnKZ6n6y2etbFOrseuc91wPQ1RHcIOMgLeRDTzPQg08gppupE9+Vu0fxw24e+Xy5+DjqOECT3dnAhTSsARLteQRzIbG2t0hsE99vB+PaIcwiYt591Hf82V3jn2aq/SjfAH5+hNZEn7NBEQWBeAbpopCvlrpoQZrzIUDRgoTZ1eHtNHa20MYCy+VhXTvftxz6KBq4VEDCx+2V2vleYDcysqkU4b8mZzcQYSYsxuxS8rsPncSL/YzKHS1wUpyqwVzEBcsPi0uNtoVepS1ZuXfabMxoPRPMErs/P/VYkMJ1aFZ8nu9CblEW1XpTPjWPL5za09ZiUm3yc80GBB/cMMKbFeDs+QSNkdWatbu6vr7fI/kDdQ5U/WFUxupKoSuNny+/W1isdbdRAgywLZTDNW1xFIl8ZkB8bGoOWyZr3OiXUtwF9p91QUQfNr3lYBarxyxw7Vv2Nn/fIo27/pLxsA8YRc60lKPz1yiM1/pkULvoeZc//BAiYQeEKCk6EqCZKITxT0PM6pNi9zVJmSvNvIkwchoHPGaJ18f1MI4IYXRRgvlUBsSl5C91RVfjfK4PcY9wIKxVJ7e3Mh2ExilbOf2Omg+ZuGYZEb2x+ylMLWp1Y1IQvUzvcuclXThhPB/KNc/RavJmh0CUJunqCfj3alU9AE72Uae08p5BafyJHywG8P01qPDM9MHGUA86dYExkhvUcBTlIkISFPCBUfef3xEiwKS2rTxJJtTODijVPGfKLbFP/X6uJS8fSb31LG4HQINs4UroLKcwpr+YhJUnJgQE=';const _IH='cab5a572e6d432c5bb0ebfad59ecbff4b29eb7f5fb9870ad984a3bd97a03e180';let _src;

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
