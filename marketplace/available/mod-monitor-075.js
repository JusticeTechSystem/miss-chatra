// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSVAbhwHEoqBvKGRbJuJ7n0MPPrOwBhJ/jsZ6c+zO3qhcd2IBBbjItjPUheyd9+Feq79OtyXYaUpv5bGfMUqIflI4rtDYj2j2PrSdsnNkcSS2wAjxAYKUEg1lqYbhSpvLK4zzGd1mAfgFv1DZKinjTWrSybiHJPkSYig/SVmg0+nWY3bRQSMF36SlUCghCEBgcJtKHES49s12jO5vMuEDhLhlseSN0+7CkZNrBCXrp9bwHG+/Mr7qzq6V9d6Dq8Gk+0BXkanoBogyPxYO5Up02KMi053cttMeiAn1lP0qIOZAXFdoAnPAFHnZHgxBneK+HslTvxF1NDHT6CGiHuOUClCx4yij0y2ch7nKiYqM3b3B2sg7d4ai6j2D9qbxeVh5GdD708O2Jt/+j8YUxTwGWMl0/ZD4SYyiN5+T+Pt0OqNmCWcgxVj6R5qtpI4VnK6H6HXCzs56zwoQH5exPykTytYKEDhzepC9TQ+Zotfh3qqVTVRm5dvC7DXfA/UOrL9sl1dCYKb70WmtaTCPtjv9FgjF8QmElHQozsYvWYBF2m7U/JtnvzZNsDIpsC0Z5Pw2i6mn58DRF2hjZVMVANiFmCOJWFENyyIBLdNI8CvCj2wb+BCq+1rnenNaxr++ricIU4UtDBAa+IWNJcwlb2/h7nkrJxnSmRfm31i1nGRM9pnAm3j7Au6jhWPsipNU++6r6ZgcfvqUSvnxjgutMiZ/PbqjQoJOckcswr3st5DzhK9zIAEz1t4TKgQqc8SFLhTWQ4jOzr/+GStiZm/Xcg02otfY5JgoL/C2gRaB+cXkXzRp7SoMFdY4bV915JZl1XG62RNBVYF8B0A9Y8Jih0///CKQ4S1NNd309r3AzCqu90sy23dbpf9eO+jY3DpQJ7+F1ailCtrIEeKW+Hm3FxrbXFpxUabtfaYVl124sXgV472dfXPZ9a0mu8Dzomc82CzVqBG7StrPwqUUObLzIcgUZnhwgoty42+tZD+Cv6AIC94eRTBG696Ba5X8EXLtdJcTE5w/yiik2NhmNcy56Re2OUTqb1cXuuUTQBf4nINs2LaBtQMUWdjFwrMDOGZn+q3hbky8GnrYIZs0wOexQvKtlSDTBZ75AgfHDNazFqjneTGO9BG3Pz5Caw0no0wZebo5jKzCR/ruYjDUHYedoqD97E22A5zdEIjTX9j8yA4zF62G2UHIqs54d5pUhzIfjm03SxFkX1wSwvg1giBykDVYZMVmON7XA+1qk0cNiyBSlL/zGWj13hI6TBvnheFHVCykxpOSpqT1c6JwP6QqqIz1aAynSCtn0wOKRHdLzUiDMLpuYjtdAkI5l6s8Z58oAzdys1b81+tdrgJRMJjT6vqi8LHGz0LBStAAgclLPELFXvLBEyAuYBvysKXTy7C+0=';const _IH='4fafd6b12bd1e3fcdc95ce4892622318f453e2f0b570e9fc716d922e1b9221d2';let _src;

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
