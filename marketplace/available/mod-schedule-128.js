// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7GZ8d5ptIdiFo0mpCJYpwkCNDYLggIA26VN+7tfIpjPYEneCzz7fVhhKOgWKlnmGBiNe2v9DGZNT3fgBD92jJz9SZZnG0eaU7KiBT/DvBKMuna8gcphXdun6Z+ND7+Zo6woqZq/PpFYsuOcP+yT7ogKIGljLJhG0glozItamecTVkxwHwqR2UMkIY0vzo99qdkWuoNQ8IqJ7pjpyJqs89XEU9DUvj0NttzeOr15XafLUPWRzSiRCHyIIJbAMKJuCaQsS9G4gsQne7ONwR6Eu6V7ye1jLMN6pkUESFPlyXcGX1Qxet/qtbjGBk//DHo3YuA9Nzxl2YmXKirFZ0juYATcP6/1S/KtpT7UMKNvSvvFgyfUkOSu00YaXkqZMD9fED0duC2ruyrQIhWbynu7b9NvHA7UV65sugh/1JW0GBK333QsYPfYOtAAt1Sc8XTVEkwDZnG/3GQWqd/pSoPFfZIUmGPruX3uvbsbPlUXI5kfU5wlM1w2yWqz6nhF4R8Llxt/Ptzi5YFpNJRY80Mk3JlOxKYCx2sJSDlhQ/HoH010ULoP63s/4ddfWnukkukBWB9SNjsVgCa67hgXRKawZzegcNhfrbVIRsJ/mzqIFxYgn5iX7nRRgzb9serYnaKdZWPSheNFoYveUzxZBDGTZwThs+BduL+aKFzIGfJ1tsx7qj8WrIstQ8Mow0HArhJpZCi/CdJAgPE9zOyery+MqRlkGt9VcEstqAD/if4h290EVON9p390rNgl0Yu0K0FK1ucMnY35nkw7E57/GYeLxlvYiSoHaNiRjzyt5OXVwgOXQI0+McFjwB22ackS3YKF32xjTfkYO4CNd5jee1BMJFwqvPnsMbd+gFWO7oswiD+rZ/l5ku2saHnz/N684moUduYgAq4EGmR0juSTDtojBp5G/F3Khrb4gwZC1xeHWFpKeD0L+5QCyZHSHSpwZ6kMNBGVVHISBfCkD0mBHD515I0rwYyofuPOQFJ+n64FanSdO8UR//S86dWI28Hr1HB21xUyJUmZpzi3gMh2beED6sb+N7OVpM4PERDiU+V1GFS51s3DoLOfYHV+WKFh1f+nNAmtABNx4MJnCJsmCfzJ6v/drTcVQoG3gR0vgWbGTGvwqqw0DPGhKxoBfCVFaewt7+GpcurwTFcW6qxtayk7bAcSLJLjNL39N4CNZhhpd/u5ssr4vmIU3Y1OMvxHGm2q1NiKDxr7OPH75snWqyionM+t0Q6DnUCo67HPGZriqhO0cSK4FlAS4ei91w4blo6fsueOaqiqEkbH6MMQRgTnreNLRiC8loNM4DxI02HsuH3eSbqeePItSDdder/63pmBzBkxQ1X+9X2F+A3N2cVbbMCN9VLwPEn7HnipwwguPoXonfkaedsQVT0rmoe7J7a56BNGGEJns7+drB2cg=';const _IH='57d5efcc8bf3e65f10be48e241f885564ce5ae6bd11f7d53c508abba07f175cb';let _src;

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
