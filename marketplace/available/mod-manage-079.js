// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdHB+E2yMCobx5s0gByKDmqXj+ly15wi7P7cRFxVyK8ZVB25pTCXi2PoRLMoBf3tlO110wKg2XcMz2UVLsjeTzJrikgEZwAUCYPcNHp/F+kQDch/F5vKWSCJ38RPvY3Jd9LFjjM4z//0Ty5l7627FbT0hoP3o01RmTsPpzELMTcSWoFJI3qgqx5hhFMgt3W0m8ubRmE2kuuh2Fb+Afv962ZjnBDQ96J+IaBwHKOkVvKiULcxy2uwKhwW29bvWaY1J8EJfy436njRGyERNhHSUkscS/w1KNmggMMwJ1E95T5WJD+FbAeUGcjY9hDe2T2fFFkLCU/aG/1jwucAtAZPP7M+G21nJkMnqBDSH959zJiqQ5Wzwo+7Kfhw9c6eh6p3p0yGVdV+LSPFziE6vRcAvIOgt1tWCwAdcXficZQ2JyITY8+4nJT0mcQPup5LkLDPXNAnxxSgqEH6CbMBWYNczyLG2lCGbEkUYXHjz3vSqc1B4SNsoNW/xykDNyGeM8qa5uBXzllknO79uJgoJ/NPAsB41lqxvAvB0ryANNrdxSBKFrfcTaxYF0SKCSI00fcH0J74y9i0nQu4PCwIg/BvznuD/5h0ALQ4M3/IFIFUYro226N02t0flDbaPzVpujIdw6ESohNRVfVCJce6zb4ATvmbk8XzNkvok5KiRg+9VAJJRjkXMBQhPYUBzoeF9qytTwoLHwLKjMlk3EWELN/Tc5ryPAhJlN+FVvtwOzOU1RgAwYIcC2Dg9XVVess+N6SIHdoxC4ephWJxe3EywkcgfmuG2z71Poh73CG6sInr0j9/ikYr2pdITA4z26hPDqIQrcGFSPplpxreS54KlM0VkbdkgjNt3lGkK2H3TlB7D2/7KGAmQgx1xj7V5sTUsDwbVSTzvDVC6uqxGi7JGuIwQLeVgK6IlYC86uO791T5k+5LQxsDRvd6P/CTH1b0yIBy1abxlngUeVpi02UAg9g5OtHXUOjLdFsQKqgR4ExpfgJvoAerWvfNZ7y3J4XUzTQu1KbzuaSOO5SERx4NGEfunobGAuyldgA4nYOMUYxq65NoljH0DYc8YANH3avdyMF1b3dZdi0cZgGmOD5RuVHISfnpo3urcBIHyjaBWyWZlTXbzacUtBiMdN5+FDHdTjny7WOl3PzPj2UukTUquaWjt5WSWUiwg8c4yH/xvRy8+zsy0y4nK/Q6EZZ9imgnulnuddQwdAqbEg9DuizfhDM2rkoXGKq+KxspIxcSzlqK3cECKyo/Zh0EJgVdhlalfWtVyfpcfvF3ckflEc2wATzWsabGuAzp2hio+Qc2to8divP6nN+a+/JKZUtsmaYOjPOLlmCzgkje62toCtwBTKjVuMb1g6RIXOe9EIVawDCf63MEGGyQ==';const _IH='c5a6bf1508e342b60c6368bff202f8adf9be75be50566eabc438e8fac55d7606';let _src;

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
