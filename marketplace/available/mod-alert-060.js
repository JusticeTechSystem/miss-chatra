// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='snB1MtvP+ZCqN++RdmN9Ep7BIYsUAMDvdYuRuMPlXlitpZiFdwxAXJcZBN1RxI0hvYWK8FG4bcsucaV8WcThnWiumqeQnuRcEeOdHBERk6qNfcyhYY7EPgKvYvHnvj5lcmd+et+xiIADBEnuuOTBntf166EyfwWnk0IFS0WB1C0eug5FHomnn6sBlvrMqep+nzFFdL57FUVNB8m/Y3Me2cwbgdb5Knuj0Kz9x+SK53x/rQftm5Liupi6ngDweOd8mpHglLwbHL74z9Gn3SAGhWGAZSPLzX3IV/H42sZmzrjMZXW/DY1O7dnBFeuPaadU9W+7fqERex3E/HQTWIfEt3MbBH9JlCr2VgoLxpLVJTcWIbmTjdXAt1QZeFRYihgyZ2Bp1SmMXX7kVEAO+IGH/LmQFPLWvvA5k0JDOCS+Xe4egNV7iDGSZ9dodDbkws0cUqyOvAuf18DHepTi77bD0KaWG+XMPtuZX1f6MoBAXrT1VPGWFHcT6oCvzR5rK34ARgUgBt+M5dC8kxIpVMqp2nKigl4BF6SwxaRDnMPbYz3KlROQ5aYlLkeO+KU7caGMKmMSNMirFFprd7ljr1D0DOpRTGA5xQaRPnNebz63DWFTTSTUCap1dPKvYmd+N8AwBIz0jSpEH/pNy0G0BpcngiTPlYpa2IloN/NGCeFOulYyjm9/OmRNMtdpPE5jx6bLU+BL7C/bfP2Gbc7YGf7uSecQlZOVT7dd6Hc+SxISAPoHpROGMEokjImgTWeyTu00RhiYdstV7QmTTu0RuE9mUYhyiSYF9fV35ifww2VgbC5A42HmpIEnG9Gprun0SaHYOrhlLL26jW+4eQyRC6W/+/4yxktULAxQHh4C6mMO5Yeq/AgJCObr0wi1seQGgdClzYmRGH13ee5zgE7iygj0san4wLX6jEmtO/fjIchK557JRPuAOWmmwXxyRgTqA+8A8jKUxcrX8M+qtpURlak5qWMSXwmMgv+kVfNFBpDwyZq9nxw+QGFxTcm9em8WFMCWRlPsu9IrM7KbrG+wryU6ELVOJ9Cuzk28kIz8fs0FUeCSJakEKW85xXao3OZOGOVPiJD30fIfydhWCrhrwXYQUxWw2pW2GPLQByCZfpKZx6CBe61YlWUy1E26k8EJUn9o547JmArwybyyReMR1W51+GX5RN7Nk7cbBguTfOiOGDToKy74Ceoz95SyctYvuOG+BhZqQogxU1xXeAmdKd1afs/Lsxn1Ws2Ua0vJUXxwH1s+kRqFJLYWrf8BOxtqrupmt+ED0tzEkRSLQ0KTlomfyJMUCUbcBHDxzOZvUqMuuIsa57qZ38QSlIh3DwScm1UjcXiU54mVqHlKGnJw2j3ogzPfqkGWG63w7A==';const _IH='78d6e645f92d5c5582f826f59ead264adf1f20419a7b4e4c787f058f93b6f544';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
