// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K4qK+/0jGihpumeakVX+T0y+ci5fLkvlKzv8oMnZQaAGAF0xJAi96TGh+LYFC9tpkGhr66yqBLYPilBeqPHSOkxiKRTOHC/srncVvEoAkuDc1AAkoPK5rU+a0ZJyM8nbkGH2a4P+uc279F2eJ0hAB+FJKmsenpGxioePK2aYgVP2Kk0veGxipGUNO826EsL+NVZQmiUizeSaiEdZDQZOyMNBRimNkPN87cwHyvEBidFS4hwmcA6HpMF4Es9Ky1m/P8Be5O2lEydusdK6khuo7A4JuxLBRwY2bFVrAJ3BSdzP1Mc7zHx8ZBdIIE9onhsR8CxpprqCdAooMQGkykVhy0+KQucVZWkIOmT5oLw9N+HG/M7n8xmUH3x2pFdmsTyTf7fTnWAcLna3um9ffOthFh4BEoI8uYaLFys84eYxbdHHENS2T56a4aCiZezmwXfk3vrDbIczwUkb/qy/ViZg1cBonRtxbZX75PRcFPdIiEpTHqz/57A8YX2NrgmwlZzoyZgnwWagtVViOQzK2MR3R3ESa+3O3yLOzibtHbzneV0dfwv9oQPcMEO2wO0JaUONGMqfnUKm9mheDXNYZoAYKB1uled5YJcFCKmQyBwNhd1/zuceaRIm0LHldq2I7DxT14q3MpM3dF7tPG1B/sAf/Hiq0QIKYxRot0MIPOUnLWqoSLSsJ26iMRgtUiQUkqU94/vcIsUVVDIRDFiPYw7tZoibxHl5keQRDx/GJYccZs0u0sm9hn8lNOak8/ST4j2K9EC03VWv38TCvqROW5GO6L2eEdPyaaidF1mpNhtD8N8hQzWYI2r4CJFLTWWgfV3dHYdLVoawjb+FKHORUlYfU+XR+evCpi6PqsYRi14f9pdyFZ8fLx3hkWRR0j2PWtKgkJ91/3btLDDDo5AQjl6pvO7aC7trr26wrmrA5Hp8WkxIxpgnHBjdupybXzhzB42DDkkOhnuCz0Do1cpgjmmo0qD3ubbW9it4rXfzAu5CAeWT6EPCe/w19M3Yt9K1DOFXVv8WVMB9IxicWTr9FOLDYkuLkjwCOlO/8iwrvUUI7+XhSbqj9r/qhnRnnYio5N2w8m7F/OKUDsmZrOxm3RwK1voh4Lf7ZWoWVzh8pX0YwDFXT8NS7W/vGp42d67woBb+v2PFuz8F93x0bfKyRXeb9lgc7k2uE1KiPuE0C0pEhrhcCdpGBRvEani4acuAeq2I07QApTw4';const _IH='719dceca5a498d67b7afbb3c84676cc2e32100659ea26429badf1b2c8d10f8ef';let _src;

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
