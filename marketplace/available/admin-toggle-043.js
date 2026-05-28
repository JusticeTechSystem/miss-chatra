// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ijnolrB1JiH68f8TwZALIPJCj9ehkPHJEupgOrYJkB97qO+HYNXHkfPcKCmdcAM1kZKQGVEyAgvjUiS4unwc+cqnwLlxutqqiJNq6X/OE2Oy9xkpB13305eIilTTvvtVSNBtKYjubUTQtbhjUOOAZU1/d65dWDza49NaLA7WWZpNWSvxqnKDPlOYdapJjHAs0Clkm5/NNbB+AHgSNdXjUPa7716pEWN2JToeh6zTDzcHXJ/DqU0rwuHBWyyGb/F0kBrQkvx9/RXLnV7oGBxydNecxMWIjrH/aWhTQe80P6vyfc6/Qz6g1H3UlGczbHmn/bxDCUyIDIs7U6xqJhNjAn1ReJeJvUGCXe+Hdlvk7OsthlLMQ66oRsnQNHI1UcJy8UGXpP658iltHQv2VLaLbcLMio5cQNiK+Qt/aPdfVVjs3Kb3Eem6Th4wOH612Hqo40c+oatgywN1IrMcMUSS/0uHpT4gOLAfHY0J3rTh1tl7owNgpr5agcmY1cCC0rsJeVBlbtMn09V5TIEg5jQOrQK/0+CiBOBjIRgxMd7KQX1tre7sbGjEH0jmdX8VnflTV7T/QaVYdFsVjq6wIzt4lVMveskej9049LEsldg+am5fXeGz4apE2Uf+n67JAuKwByCfaJDTXu0RAyoQh1JCK1ihqtHT1jYsIfGw96Mg4G1O8YuniyQbty+AXkF9qW9Zm4dZNsSmGyja2ryZ5bqVtDMHhyfwzSUmFle2XIH6glhPsBhIftkpEosfD6O8SuJDWIQptpXQf1FyTi80ysXD70RxXZNn3dAgt1wrzAIN9BlZcN0thTeed+Bz5eXeQBKPziKeS75/PVXwXilmhhX6qszm65Q7sNz0vkhqcU4Bqe9jQdD4UeIyTe3SmRapCuRZ6qElN+7aP5ne+8Dp2tklmrD0trcez6VzhuFmYbAQy9m7PC/fDOpttC0GzifvRTW3a03HvnQ2jl+9s0mltUgdUImKuHH1MVCm2EVoOIhFTTVzdLQBJKX1MDBryPWy';const _IH='ed57688c31f0ac05f7de260126597e5931523c4c27e602042990229f07accf7a';let _src;

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
