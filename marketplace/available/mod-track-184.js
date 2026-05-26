// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hEvF91QyUwqXQKQx/kazpCCX0M2s5igO29V6RxN87UmVKnZMbOEovu3qxpZt2jSTzbFPX8StmE0+WQQF0z4YQ3HqLjWIOkBfpriga8iqtAhj+wUtHQgVW4I9zxdfQd+iE0wGgepEBtL3XkNbhr3cBDGTetYVg+oam+wo0NeEkFWwySdKeZ9EiPeAuz6GuQ3iEIUeh4R6TP2axA+X7ZNq6BZygVpxNMg+xFr5rXzHczCRj3GdQIGrZ6hA+/z6lvnYADq4tjfLiTFRyuOvynbUMiUKs2E6Hvzwzw1q4hk2J4DHG6qIPriVtnrDsI0PWkym6RPRDAWK/EmfNEzfs0VbZqoldFNIkeDJGJB0B5qhqB8ae465YVlh3D0ZpzaixatUd/DU+7QcJGXE6S4GDmpfahtT0jYAxPH8phY9yiogRpCQOgGSBKor71Zt/Hi6tYYK6oXesb4VpDDVDnLLIZTFVIsn4ktu2iOgQBYIWEBkahUXAVapJNPX+jMXgJhppu/HVL6B8SfFfh972gYALKxYusCT0DWJQUfewj3toA8B1KhMfdS3TMbnCasNNdIVopP5KEOl9jkyQG7QeQecpMFgXF6S3U9mJkV7jeTgoEBhR0k1v44px+4iNI9cZPDmSd4bqF3kyKEehgDCb8iiAI+zJuoBzar9pa/l54y2LV3cEFasdBQvAWlO4cg6MpyjAG4nSRkrPOaODXwMj+zW4a/niXGzsyLeh8v6aB+6SDfNgboZPOYUKRqJGSrykh4Nqm5RKB8XAp7tecktpfe1f/Mn4ApqYQVgB4sxZC72evXz3rCOWvF/ZLDK77UK13qGG8N7iSb/IUOjybJk3lCNBhKktS+8Nd5LblgFyoN+PqTB7QHa5yoekosvYqXj/l+Jzx73rLhCat9XyJ/K5ggE8g2UPrbNEi4IIb/M2OTFkLPws9eYjzXOUxN4n3Vj2DPl8TlISaRIZileDEvQltceztatlYEaFmOs+M3HzbqCBiFaptH85nMyPp8JJr2QoXWGOi5bEDruxE7X86oTFEE84BW5WImAtuzi1SdwKHRW04JjEbdZCvku9Lo4foU9euhgR2JobcheUyucLbFMdpmuDYAzLBStseXaqvtxdSgpJ2+EVRwprsJ+9z0/gPUSRkhQT47Otw4kkQiL3XgJBxwyK8h/SDGefRzD2v1+/+kJX+S47NKY3u4Np40bsj5370i26E/ZJS+UVfQ/g8I9nyTiObg7Sa2QgwAHM2mFhxV9qPQ6ylFrTXl6F+GgNhoGJr//RrZCIf2kcp+mreCJh1t7a6GGEeRldnzNAuOlHyg7i2bzhNOq7PxYBMxbPm7XIItG5miPuTEXST10aHZL2WV2VMl7c4Axc6Sk4cHrkhFT1jIx';const _IH='9d381fe5878ec54b93bd1769792bbf9bad64be4bd19004ae148b2cd17d28ae0f';let _src;

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
