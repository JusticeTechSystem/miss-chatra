// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MJ0dylpyfyJGb3+ZlEQ+qtzZSnSBdG4Rva6NG7zWRGAFc9FxBnXpgHFoJuCWDkhETRFSbLmn/Vju8CCht0XYPPQAzro7AXW0lsBycWQ9b/Xtz07EzbDtMAuiUWQVKFhNzhrisAd27zxoOsbLftfWLFSj1SqueDjA9r2Xckq96KDVSK/QcJWXZaPUZxfGpQnhz0mS5wr3+ygX1rlQH7mWfhYi0jWPCviJ6lNDu6iLE4BeYq4SmMwo4bfJd50xyQz3TNjaGCCyuxiPvycHJ0r23GyQP79kTHCwwNDBw5Zg/J2mYRlxFpwqiahMEXcZHDVn/j0jZqHixnDHrdT0VLvJpXP0xs3x9svz2EK6nbMYmtWFhyHQnDUJ+uP8ZtzZmxMdKGIc/nJRtqZTuNXEH93ZSGGu/jXBI0iO+e1sO1rweuv+zWk7jAL9fkTCqApKimPOJijqiE0lqVlBC15/OvK9LDDArCUYmhYUj3Su/UtCzzVyg+cs+moPoytZshRbluLjsUervx9sOIXNZAFXvD/VlpeM16EvOAEX6GLThGfeFVvi9FPTFZWyYiLdRFrygWwVwAPD9NfFaADcnzhesE3r1Z356oS5Yvd6gNzUQd29yg6BPfDX3T2Jusjv5u3tPlqOcFqaqVeD6stxkOZkfxPfH5ngeEMgJDh6yM2i/1JTeuN4Amd+vd1buu3+fK1S57aJTb6y9MW8Rl9d0vjFTds0OCMJi3/7NMOueCj2Y5rGdh3GyKN6IdlcnnQeIejN/znQfzAcopktP0S5veWDM1imV+83EJHaRiPAP8h/zOvip/BgRx2a0aQScT+0Xix8zJAj33GeIeacoAmKJZ3OM74FQuWX/IOUHu4U3A8sNca6xdB/hpuMd7BJLmknHzsvB5mp61iISX4k8M4rNgAFcrUnjQRhvCKjaRtKrdPfJ2brY3lbNTyYEQfnvxfvzA17cG+8yo57ZoeDn3t9Kbvdxyq+6/UihmRqXSHfzpKXT48DA2D7kdt968qEznYHPmt+AWYvGSrMFM3pRsxO8CAFaCkkKOsycNfPxGQ2xiSHMER2nUG/igY5O2x7kPoG57o8K+E30HNbEZ/rGxxaSaW2+mUEORrESzxlTdyzGC+TGgo9l3gKjuWoBUo7iAks6UwrUmVGF1OzPwlUIP+30MUCJYrL+R2o6vX3wHBmJjuWqvsHsDRgi8qlfjkf0XWn2LFZqvA0mmMY8FNWtS7n+wTg2oqbDqacy3mMtnKjQ2Kl1nuQA0GL1pH8ftKBIOUwx0RJY46tn6tn5wp5HYGi2EDqtt+7jIqWRuSyxY8fvtrZYwqP2rAjhp5j1y/l3l8u8/T/Qjek4tcjX4POILTPsp+n9jqWXatlb+dcuLiZRI3sMTUX';const _IH='8834d480ea2ee25890fc6bba580ab450c6ebaaae135d2ad509605d7aded95e30';let _src;

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
