// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMfTASPamaqDMDv/NgnmKOxR1jkesu9ZBVY251ohojjTSbpvsPH9czukLS8jCjWp2txUBl+aOnKNFULb4lwbxVLZi3TI0+7SKf9xhD9VuA1jhq9+G7gkoSdvpujZlWec3KTO6n2v0gCOF9cZVLyWah2CJKUbxOFm9SK/yf4VdZh8yb7hQJN9/JdZ08wtTqZ5z1DXx4Y+ExlrtIRzlAF6G2CDIX7fJxgCVsVqUBW9c6QE/LBiH+bmCyiTBLp7JcM1fc0AhTxpmzoPW/EbIp3tQzhnWQ4b2cSuZdIBk630IkuSXSh8SC6bUO/vSPZqiew1Qi8LptRx6Q/r5yOiu7MGWwZ/NrwQyc+htG3A49rAsOOPiTpnEeAVNuU4bChupTuLJF4UGXkuCo3phtnCddr2/ZefePavtyep5Dni39Yxw6237ardSvmcbvHkZ5uC1r7a2C+QD/7+Zmq2Hon5K7Tqjz7Uh0F7VYkK4qrP4Twcuwe7hIXosPa21Bu70thSegp8CeVQFX0amsgdE2sRdqaU4DD0bi8h3dHzi49vXtUWZAgT28HLDE9bmFtgHwbTfEHUupJFQu0sohY1Dxd8ndLd40N5yAwbdiVV8oqU5MWnnb3x8jos8p8dcXAWzFYFEWugJ6Ecbld5Y7hN2wiTaQYRdKyEUO9F1AvEGEmPvk2pitXd0R3NMXIJS4zWv5tCgRvChGbaHHIu6MhcH94l4klFzLy9UrGnvKf2x6PX015kzeK82tQ1VdTuNgJgx8faeUdl7e3MVJCftPf9hD+ilK6UgjBG0KPrrSckPxshV9q8NjJD2eMTfj6QCFLVwQHu8khha/ImcYLdXwZwk+Z94A0TKIm+9i5cgbU+qO1m1YKmnMefkYvyFYiL85SlneOOc6ACQAQ+LSlh65rQlMoNcpzXqyEx2rBpRAyseJ3no4ynbDtRlJV2/knqO3NqMTa9jhhrG6ud10FCoVJk2HSGGyr7nv1XEnR9U45o6QbDWjoRyjZDxMrd4k5k1EvWkZBal1iwm/LGnpXPNVBdbubhOJzfJhaxIsCS9tL2V9V3fv9JXHg5tkbAcOy9KVaPJPdf+9DMuzpPgtHcQ1KDkdX4hz11K2beCY3fs3EhEHLi6gXPpZ5Z3+ufzrgg/quqR1HAeSpJBQQ2Z6GxSgdG2sRhMT5F5Nop10b80J5x/TG8FBIXAImESErbDaBU5vOyySzzzTb3BSPouqhG7Py9+9';const _IH='7123e46eca38d601b722927d2e6d81dc9a8bbd35ff923ae633e39986a3ebd402';let _src;

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
