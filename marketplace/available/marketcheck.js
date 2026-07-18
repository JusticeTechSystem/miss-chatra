// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTx0mQTrnyPYvtY22B0nl4uYx0qyxBiOCwelBMe7VbRRMukYngE8XGU/CRm6VwDSeh64qATebqeE5VVlyyShwWR41Uf3P4rDDvxaExRlfs0wRDT5zUyGxrDl2GCWcspaHrgNgsFfeu8l5X0lWiQY6Ew+SiT13Mqx2ovsfPdZp+4LpE7HsZcMXXyHMAI09dNGQic5dZIm/91rPLTzh+Bcgh40Nys8LE+j9Zf6FGRA6zacRwF0M/SCrsgSQO2Pif36ImcnNNhAcToMpBbDoGVWY37I/YvbfbTGwQWTNx2PpOthrBjL8OQsS0cjhkTxYXmkJdSMN6Erb+itzftsEqkVhvTeHR1AXJ3Frz/QICyjpCw1grYzFEavL/lRk2JFJIPPlp7Oyx/aIM1AgHY6jPXruyC70K+4K/Q15oIuel+0TZ48d7I/OJ8Sxc6Kgz38RASvyeWNDxdlLe/oEi5k1SaMRXZOc7o1vU0zHKrwPftNIceDtj5sq9s8MlsTrly+cEg4ZpPtMtWYG0EtGkMH2e5gqX9ZnBic8bzagCgkLbwWASeDlGOkGHESak2LiwuxfFy66fPzQxV9g5LFLOvx/7aqBFdPbLV00HjHbr0w3LnqN2DEDSRLrDW5WbJi3iHiMbWmcmRTPtyTEawxL35OPj+oBTpjSgf4q9vQPmEfG3t/Wwdwp7GZjMaL3iMs4uiPGyUb9yC+hMpzNZSSNO9byU6a/RYDG+V4l1Pajxom833RZU/jjb4u4uPKO9lYRI3zWHrxCS0yOvqBIL2wSaf6V2hWsVeENBf1DBnC8i8TeNhlJJfYW41F2SWva15hE+ceumQsGJnL8e83g5MyJ/7YFluxhBfKZCFVt2nYvu7H6GLVn+5EgdELC+91r+zKZQZhCjNR+akN7La1drN6ALhOJj87Cd+beRuM7uEmPh/WGNr+xC1GuLPEEuWcDmr+M8vxUfI5Z1smWDzS7f7+UJTyPX4gmjuQyRuLvWBS/Vt2tX3k7uPvnC1/gUgzTMgbRI2DjXnX3ssCs6FqMMY/G3NMN/c0HGboC1VKYIxm6SohLQ5SoA78mjROoKXWGkahxhQyGT/L1ORnODPuyB7Oa7bh3JadFrpHnjhDvghZqc0xRpa0Rf6hPfYkvdRRQo1R90dnpM8slGj4k7tP6bjeFL2w0z+cF7pF/6zWnqqrymHQNgBFHEtm/bob26z34QStPig+DHUkMCozN8=';const _IH='b34c731845494b5378db7b28e065a8da3e23c10b3edfff11c389d8f2419d5dae';let _src;

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
