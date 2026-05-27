// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sfZko0k+RJglotp4iOlVCXP8cieo4tJI/UZTtyMDuNOX6T7GYqY+xblBTAxWuCQ1hPcrO4bmvI9fCm124lxmtra6hBVlrfCfZf2FQKhh1VK9TE8MAlniASmksevnOwdunKlwjPzPJRQNGzGbMhUPtyprGieYbfz+BsdHNEA9zZ5dJ98J4iU4TbYzHAv0JQCZOD0pxnSbby7ulpad0enynGnPNT6R3U4t+nBsqkiyTxzwmLrHWyq6+yhghjinTEZsMpk9+t5If0AyhInyNjuCgmixp65XXNFIqstwd7YNtHCpwpc8o2h0TH+BtmCA0ikFiXMnIliFsifQqj+QrVKbeYloSElRNUR8DxVv+6myve61TCYoFws+5pKuSeN5qP+Iwc8jE2Z/qS1VypZOfVpUVskvnQ7c3GMj3oiQ0eczHLLLQQdHLUwDAn+lHAGXeMUxMCbxmR3bywAYIsOaa2WJ8PBGe7nOb/aR5sCYp1J+M9mCS2RL7mlRLarsS2wK7NpipCRuMdSawFAv8LR0iFY+yNPjQyMQfEw3J8ZHZvb7e56LxG9ApSEq3SP3/BBkFE/JP/Vk7ejHxibxNwbSPILzXjz0GFF3ATngjsdDI8ujXMglkOM7o+iHLG/fDBnlt/CyWjCpQ59GprAA8aabl9ro6qMxvFqCuT1fYzBxiho4e29yXG7DHnCUs9m+rWsSToXW87Jx+EXJzyNBtXTCDm7Rkkoy+p0QaTteAOeBrkLGP1Vi8597PPRQe6in0WyofRFlvUaa619BtUwrJdH1usRqL35hcLIxPsMpWO0Bdrl5HiEu3+ry2or9X3iiiNEJ8wgh1IFDA0c7poMEXivtqvYIjDbjOkK1HYxf1PNJOudnTUcKm19H0HNkR5OsmDIGVfb8RxeeUlT74+Kdq4hwXo2e+XIPe+xTShXcQW1N1vOcckvbwT0tfpOcBhRFUIl9nMRUo8if7T/g22nklu+E/75nnX1nbHxZPrA2oMaU17tbqlfVFP+qhyrgfIsvE2yzdpPdDtHCExzYXDRg9eQGbCq1Dy/rQD0p5X9qESFwyChfs1CCgCg3BqZdIcK13vPiSJXOcjrn4/h371eku+BgFenF3Kbd65+R8gZYrFb9HGaYoK6rHd0yNELBvAIPJbTNmSUgML7vkl4+q7qKSQE4NW7254kFBgxY0g72/Cq53/VepH95GimMAA1l+siR2uR3HvUzaqmxY+B7FDVylqB6AoSflfqBnOez5R2tRhLNwfoUvlxf1MjgipGw91c4wV6TmGaqyizEVN8w22amShZEtGVvU4zwM8D3tuzei+f6Vtgc7+/xTUh6PD04iyCyto9YJ9wMNgQJmtyspsQ0hu9yWrtG2O+J6GTX5f9Ulw==';const _IH='b2174e67a1f4f8c458bf1350d57dbd3ff6d29bffeeea153f060b44de6b1b607c';let _src;

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
