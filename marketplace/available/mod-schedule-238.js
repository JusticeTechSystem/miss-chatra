// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4cZfNd3IAu4Lv7YCpFU0tPRgBG10i5QoJkbnTfXy9TREjKSziUOk7gyiHP5leAwSAHN2bW8voZ8ok+jzX9JF4AJZMoDAkMhRUkEnY6ROvwWLDokEV2ukUb54fX9wYwBUZe7fmIHNVo0CGWzn0lwWYKdPxGd+QsnlyC/lP02fIypzA6/TS4AGs7KGIiz5du1yCFrRoADnnDvtsVflrLdDUA3QdLBH+4klKnzHp0qEmQOIe4N8ekcpz+PbZtGuGuJQSyTGJOnpmw1EFTtQMdunJUR2fealiewNgQcscsUo/x8jZaaPdBro+YSxQz5HLjfpaQ+S6QH1d3lZTICumg7oJP6y9UmCbfd5CFVNjNAUg683nnIqdy234sS52nCyjQGHnWrxp1kTEW735O/v3NpMieJxTfOtm3t/VWnG2+k2yoRVeHYt6lLKbbOs46I4TKhdzKDOZx4UUrn3taNL2GVVQrmztyvAgfO7dXItBAX91SEckbKTAw4jqSb4BO3BQLv/g7F8LZQ2GJyPefisg68nspmj8spr7B2AuASeAnREXRZCrPrOPVcmDM+VChv51GbdUQPeXrAgr3CIe86uDWfkaoASYMMiuZdgdtBiO2w3qi9bvx5Ky9b9CtgLC10F1S9eViS65VhijwQNTOyzHJgjhbJR6qoIY2y+RvDqFinfZl8MV/IikjxWTfbizWFyhEItO41hF+9hot9RbqFDDODqeNBK3tzQzOubgmnTcleDzvmmACzG7gRyxLKLGuF4UZkGNA4w5KPuD3pMpeeGvb9Oen2GtuFeXrGdSfda7sFHF+QPbDjPBk7bhafmqJk1Pzu4nwmsXi1+hxY4Kb1Swk/UaISHnYxFs37dVSHD8I2TKXeCsENnh7pbtzcIgR7C3YgkaTKKn1JxqWUzXvYa+aDzs17R0gmyYnBalVadUzNs9R55QFhKsNGvhkH2y+uZxLc1O//FIdlrTom3l4tvkvuQhD19Yim+mVS1XMHjbp7dmaU5DNWC06+FFhdd7VDrkRnleG6xzxCGHT32jW1QzGUvBrQVM4xYenv7lqoD0KtBte5bnkzbIuDQzpRiDbI6SLnL7GEp7PpOgiNcmDGWBl82H4ud0DnuUNnD/1IuM+/gDKXslUgBBNS3qqJ1JaVa+5GRFonabvRg5woqTMsdNoSRZYsPyofwPZKrcA+GGJ0YK9hANO5aP+JJWwXyrVyrMbpYa2UDifZqJtEgE/SAYn+lZFzktSXcRcxGfRd/S5oC6sjIGAPzCrCcRv5/kMu4D/NvSrJD7Wrr2SRWya/m4m1BXg761gkGjmVXKaVn0REQNRggcYnh2yyfKjaxi6vo9Qc7XMOSmNHlh8X1sl9c7I3eP78M9/nh0UXvk3h2gjp6ZBitmL0fpEKliHHB1NhE1OWi+GTOJ8jzHXHpLVld';const _IH='1922fa924ce232419d6cc24d8752f0fffd6ee4fb3f920f8c0d9fb15231ecaeca';let _src;

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
