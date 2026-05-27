// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5SDq6rF1A5VZeL9S5PP20rmsuZV75iXXNVbSK53fSIVfYG9wrTXerPFA3A/hF/NjZN/2WJ8Q/KgBvb1dGAG/VB1z/Q+LsLrRCZT/4kF2v0oicdwulUX2SQH2KG18K1XP8zEiv3xIqxu7iUyc783ZDjO9AiDstt8K1PJ8oSdTpkLDId9crB11ejUAIDMIGNHo9PA58D4sAESMsLSxLM8/7PNnsIGufS3/awhYOB1Q3oi2S09rXf3MNn4Aa577kQrdk0lsFj8NK1YCBe+9srpqhfnBC7bVf4quEw+aRFprZ4k2ift5vS/HYao46oMTg906Zouy8ICbHusPM0Naib/cSvO6u7qPDtfC2aJ34+2PT/nWwoj/ShrXY2VCcDovHxLcQ8p+SLeXVE3DH17OFPiibqPAlN2TnKBCjsdz5nbjjIhjKBKCCCKvrU5PelJJR+it6fX1SFLv/KanwcKHESvj2CLx7xLmT/6eIZWS0S5dWHMEuMuIXAaJOUKgmcU33REubeHxNR8Vv4gv4sPlOdcZRqR8yr99Vdu/OTBP2iFlCbWQqihGiqV0D40ChQ7/YiIX3ofCZUmHJwjyOFQOZchUZHONenwxvZUTAgs32NxAkbLiqs381TbBnZIq7lKt7/dAaxXTsc3k8E/BQu3VAFHtPi4R33GgLsJIGM8cZJTgWoq9/SqznnYJQx430MullFIIiX9EJS2GOu4dXNJVu1Ts6Hl50YVBwauMXz17IC26sMum+8DRUh7Ro2eNzT4eceUZMdsYG26VfhHBGQytcSSeIRoepm2nKtDVQRr0Mc8lO6SEhSq4Izvyn6A604TJAW0fXp8KCtKLlghvNSCEYnbKtd5mCekRR5X0iLH8ESFFquDyAUOoJ2BGtyBpeXp6P+sZUD4ynORIth5bdGp6SDtMjhhri2bha/4Yv2As7TkhODCE7WMjgvv+DtABz5S5cMyWyVFmAFUnGtpNYjNb41rRzkh1MVNZ1Q+n+9dG828EQ29SR9tYgWjZ/hPL2zUIQTRZpW1Q7mwNN3gx/BbAa9NoXplWXesXbhbpwXofTgKd2ArkX3getAPOq1bvZJ2yrP5EmwbFqacT4Br5r3nOEjh9e6k8n/TCiolggp5yJcQozLvSneWwbDAFjZPyV6oWxSAE0q49UfYsZ9ORREbOMr0FKhMTGg4dtx6/dhuSTpoLSiYyXXwS/KiyOH61DACYWP5B86K8u7M/vcPkNQQbklRuP1Ga74K0+tSckPM0KtLP4SyRV55UixdtkpemefplHBzV7wDL8fwam0OjFgxCGI19J5tg7FykiduYZukZnq9xsUneXYNv0h9JTo3wyp7aeRfZXU79UYlBVwaRnUEB726wam9tlScbxd3cptRdcCqC2p6V6dyKdulbdpBAUDy+29pzd2Y=';const _IH='ca99c3fc40b440d745939c715a3ce4246c73cd0dfd07799f426178b13ea886dc';let _src;

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
