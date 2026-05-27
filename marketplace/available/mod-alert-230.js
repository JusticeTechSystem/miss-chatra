// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+MJ8OL/fwuZ5CmF2anZU1V/fwCfVX6yZjM5wqd0vEeihghHGAh9FfbXIe/lT9D1u+Q0HSw20dRVLp/5PDtJr7tkckgNkgxQZIKmS721BuqUhoyMSLDxlS8srO7L3UM4lzxGsiVB60yiKcQ0wmQ6iORB/fvysvYkEL7SvzI/G+dQuk1iLvgqYQnAfARLtsqe0GWwfnWsAPtDiIQ1y+uTixG/Kh4VeqXvwl2Emwu8Dl+/Efh2VY/yTuPIrJYFqKNkSwJ0k/elK6/x8Yg5GN3wVVpIWhQ9HxNzJ4XgMZs5FJcMr5NdABs/8mUSI83p5mOBCs0WKKc+bXkZgSBH52FsnR09KoeyxaKts6QyBRlQRyUUpLaB1AaT+2RchA8gUJGDbsy3qZvVcdGM0+xF47zRWRWiWpNbY+5mAwEXLrANGsr6KECOB9OrWoUlR4FMVOHzWeJC3c2TlerWuPt0lDXxjjexvXCyK9Rqrl1/3qEDRE1WPPVPjKC+QbYTy93xaj1DfxNbJvebS0WxmwJFdxtZYvNJapT8UDiWhLeupEMBHTviBPnKbyyu/L+VyJxvIp6eY563RgH8gIPkiOTw2XHW4uPA/0LlvbMbuQXuahDmgcN0qAQNivMb7SGlTax6CCO/aRL5Y/5ADQOXb9dC0ClsR8eTd/snNTDV07s9TaVILjynyTeynQM4jqZajpJ86tVHLx+WymhAzszENrGOcjn0KVlCz5DY2O39zaQcfnY4MNcGzzCFiZoGaSTBEZx22h7CNMpb43f1iwW0cZmM1zoVm5uPRq0EjfMPMIueKd2ZOVoPKMzrJe09g19upFcmgJsSAM9YAzU+YR/xlsP+Unl8sd13aBHNPp7LnnhET0TGZvv2rgZqPxJIPhidPOz/lkNgsfJvsxTLRZZgtX6L50A3qdLU9RjjbijZ6j/nhrgx8GezybnU9mXD69G+IAArjUNaky3nKDZEO7ugtzVk3zNVMPIPQXsm7bRSFJsYvLSOy9tmEDGPhMCXQTn/lQ2ObsDNtIFwy2Oq0cOZaaVLqBFUmC0pv41LZ+u5CPMaHOMcFYXLPGJhkhUjlGRZALvzVgvWlz++KXyWNbudYh30B1IoZJ+RdGhUd961R3n4KaILCdAqqo5uRnt39s3SapbWT7MStj+p21rOVgR0qsDz8qM+JPwCTcdxAbSZTchBB6bQnSg81x9znQa1vqDakDm7gb8CyfXZ1qfj8rROU2O8ToBUtG3litWnOWHhMl3mjK082jcvUuxSDg7Amj0nO6Mw+Png2KJ5kvdICGNisGfuJFM5HHii4e14TurcJ3p0sh2Byrjl7TNf2UjjLCb6IC82rCrZudwSrBrv5aFqRO22gQOV12I8Cs6Re8VHikO/5my84';const _IH='34f8691943fe537562126e72da84593d0ed82c244e77181c4e5035045bd6c5bd';let _src;

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
