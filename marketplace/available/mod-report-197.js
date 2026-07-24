// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8Ii3s/keTpX8FHOTNz5Oy2iQf7J3kBDsTldX8EvaXcMtWAZQY087gF808BlK9rPWGWISfs3Cb1lakzOvvqkBcSNRoEixWssZmM9HJW+V6N/47oZv6+P4rVBJUnD0BlHFsHISKGB+hhI2xLeS708IebbWe2Mb0cVGJWigOczAV6Km1Sn6aZHh5tQV6YIv/FdBzfzQ3qPx97uzOvidrbTXcFTb7sVI+Gqi4daQ4qN3T/1F2Ev2Xz8WbVhM/s0axxFT6gvqcl10hfAs0mvj2eE49kGG8E0UNhlr+xfySygKcc8Qv7W5ObH+SaR9zgMllP1/LUa/OZezYzDIvLFJ4twTpd1+eUEIR3gL9MBL7b8lF2VN5xlk2LXUECh12jpQtW2PhnMJ94njRAO/zcFSL3hwlnAiRZDZ5UenQy5mSZWhNgr0OE+MJvx8IsM2uecKEPNaLT3BFrqKRcoXGcnwfuJdGkW9dvQ8WotIXP5ASzM3Urw4bev6h77WcUMha8eLUYnYfn9CvDpD7z+zNXSHKhOwxl5Ku0L58SFfq71/8cj7ODP2HSe5Gg811HPlrIS6wUefJW6wNqQVRcJ5irI/IWwVJmfMg9syEWWOiE7UPf/C16z9jVPwjsLJkkIDGYxR9DeVZ0G8GVWBSbXz/EZasHgxLNqM7zylH8ONzOhV3lmmDFeSSFszudabs8/MV/k6hscPTWHNxHLIO/tAmKf8byJoqDop7xFMPOmF/SKSEdqD3lANPs8rMuyQgZaLUBwodnbcDidhLFiEYhw1zxI/g9jXLtP87mTKY8D4qfmhX0AmIQx4euKwMBdxptODvp8RPzqv7SHGX09cDkHQqjdn15wil6gMaCglmXSd4J7kZif97i5+dX2iDqfecQa5OlmWURitgoNO3InPziFhDB1Itl16qsZdvQCnkMx6kHM2iUCIl0iKE9Acdr10Jqpky7pozYub2M61B31srN5JT3gZgA/t5QlW69+4vkymxnF9li8qXrfvhosIwBBGQ/xOdT2TvPvpITQV6mk71pd4N6ByVZc8N7qw+m+v1Uyl5Xiith/45HwFXZ7DqDgucHlftMZQOjqRmmTL6jq5eIX74+r25cZXfSrRcavBHkjYE8c/Ot4dDLcCNA9OjUgDsJpNJ/AiMmPurtmYdxyOvVwYvt0cKKzJk1oCbLLYaoI/N805YxjBaWXU2/HcCSC0+Uy4Fpo4uu/z7gERu6LfuAVUknt0BU5LziwHHYNUdPqtiHoFMd5EsGJ1atFQsNiIRMknA/y8PjXAqYo+a4CEOUTh6bqBXIG7groUqg6+sZo2H98uL6/UcV6LpH+EaaEJXsaTu/CE23k7ErTe9BBIlGb0gCk45++alKjcWbIten2VMF/TbBDfCVGeVmalaa2fU';const _IH='44132cc216342ced0767218f6e8977e3611400c0105c4f7850482742c1ed29a7';let _src;

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
