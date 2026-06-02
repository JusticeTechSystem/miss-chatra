// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RYA0yQRlEuktkL0hvYFe6boyPkZtYlZWcV6GEUnN1mVqFm17+7e1qLGuK8MSS0a+QQf7deOqfcpSQVxhqawY/mvp2P+qKSRxHLuRABrFPm1UUf5IpRvJZZ86uv3R33RSe+V0GZqaEb44jYH4/ubWznBpJ42zKP6IV6c5/wKUqd+8AvwEWci43tGzP4zAzdHg59w5VPNINjVAduhLcnzh7UjMAHAqyjTW6hcodIcdTTnsgI37AGFnTunzaqdYHbduKKkNtmWFFYAlZoYgixIpKV2zXExBIf/YUSk0pPEEJTagU2CEoK0ilRBR6dzEAjm50iaJY2n5aJpuyzLFBstOSjddpCB7tJdbV46KXso2xryeBUMYIDSTqNeEwWponuK11WjsiNt9W24fN6SH1mAvVgBwwCe8UYRGCXL0/PkTfc0Y/TsQwSy1PNMrY4RY6Q4iTjcsUPONogi9gGPiCvRniUXOOturZlhw4/MlKB7kzjCCmrNPGybCOArIBgw5hqabUdWxSNKu8M5OQpNPTDJY65sgPp+f+CA+v0YAR2B4JdLPyublHnEP7iq86QFmF5kqUcSY+mhaTVZj9JJSXx//C+LT1gFg5P4VRNBtv/8g/M5asK1DroNycVysNhKrdiZluXoDOyBNaZaSppHBPf1TJ0a/AQ4EyHo3QkeapzM34N7eOvuwTM4BhFZsOmmogNp5F+B7Mxtb3sjQHXWQhVXzcMgiQiOU0DRjwebVqC2liJg2Pr6B2DKIyjPRAJVUbu6IKR/bqPfOdvBUqxpNrdq26p6lpnFUlrA8HkKteKtL2zMIOKdFvhu4OzUoOlVlNd99WE34DMsnkhl9RL0pC1O5IB0Gf+XMRxn3oo0cjuKnIAcBVWXa3EXljxTxs0fyFxVC0WK3MDNJO4BP3E3Aca0LVXOuIm3H5IhP5NkDIALp6e2/Hauvub3FDMKFhybON/vpaHkQC/GslPD52XSH/pVRGRaaxPfhkvCAPtlnRW3lw/Dt+h+IGnv9uoD6vR+U8947YOVh/OSRlfxrqp7ILCigP8NiFPD/QlcO/AK1AG3fJuIciYUyQbXW78ar3605kt9DQTumnSkMMlC9utkXlN3NSOOKlkCvs4oK6/5LI86Ik5HsJhek+I5mZ02pVbIZ9+N06LTRLcof+Fu6d0qC/SOPZ1AGXejAdRob9RY3amjXGn+oslIS7v6yOgFz0erJ8ixWTBigQantq64bA2EbazYiAYD9GPPPlgO1gthMOSe7Sbo/wHNLvcVL8YqR7BHaT77i89Yl0OnEtOmZj5ts4AJcSMi9avlt3OCczacjSP1JDcrsvRIWpwaDXVLYxyiZes54bGytwt+EpG69sA==';const _IH='b5b5096641175b2aed52322e6dc1a065f769963bb5a0029da5a625189b9f4c63';let _src;

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
