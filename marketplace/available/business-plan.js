// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2SsZQe6XN1id2SGbfqSn0nJYttp+4PJWavgzAKczhpruDUOcReFrswhj2KfSak4rQR1R/1HzRKbZV8Q7hwOGhHXw6SLPvqJ8ZCwat+5x/UJvUCXGRCVifYsaa+1rgra4ETfXt5pVq6KJ3nXWM3fRZtAOM0fGGCG+MKMS7ud2VZNuCoNr9wbZ6gTKrMy6ik/6nDo9x5hHR4jZq0fjbYTVlDhMNsdJiu+PHDDus/Y7KVEYMehObrwIzd9XI2qtej+4UycFUnxKxrXkrCF1uMyCRBPrEAyyNLz6AVFUSNLNtWXHa6EoYwLZZNfwQUzn5GljOZLdC4oCHN4BKOvlT9MFd1huiwDAIpD34OinJXmQNc/Vhnd4QnSKw4v3BW9+APjRLVUxYbfrm3Q8ioqH4vFxLMvnR/f8ZH1xbUVb+xQgqaj8sxCF5HaL7ISIE2k0MihyImj7AMcnApyXzK3g5mdL/lb1jTAK0J43t4+TW7FX8lw+Nz05NMeY/15/XHqrbGA29w/07wz2HngpzTzZCWeEnEcz+zMMU6xzoJoTqt6LGPZCiZRnRdfrNSVkneZC4y+gFs/8v4N1236r44ILfVqo4C7YADEgYIOwhQ41nFloJT3FcjeKGcymtZDDvD7bfeku94S/haXXF42TSepPYt2efNe4wvAHd+uzQYQdjEjDf0+kV/sd/9PSa6DHium2auFHToWXVq2Z1+I7bADzlYo3ytrpNi4s/z2T+q3KzYilHePhd/nR2a9ixi0A34zZMCDEA6NQdmaiBtHsvtiy0yZgdOjGF2mocfzQL2EeRqzvxHuK+IW6bhfyu3K8krd5oOv2HpJZguFkZjUeAa8HvtphPo5GmY9QtwQdOqjcnnhzu7ZiMG03mQqdmwLAfTQb+hQ+f4KcCPZKVMrQz0YiSDMXrtCcv/UL4Em1/mVNs0grB9bAWSRzjUeVLRWz4K29hakpdGqskSHcLABTSm/VcGMfqsbAyY0pBVzDzHqJSrgRn5NTnSHxkTzf+2Xu+RwMtObMAb9JeTxhXmwK1qygSEedHHSHh4aB+fbN+LiTvsAzmhH6BNaZctts1xIcbs3UqXWWjTAxV3EQUl8ha7b0HNz+ZIsAzXdDlLf/uwtLj8Xmk8W5notu2iIWBni0LlXrnqRSjWtnVeSh3rWbcny2GUwnCsUo7JZlF4+3GLcAAya/BqEVX7CO8F8fL1WKc9L2iKwVQQ8ewOmr/gvwi9GgIJcKtuJW4dmAv8st7bvFQRfm+se9TJmgnQ/O9xpv8IUUrv3+0SrS8gMYMr3qGAOFrnyy5p5cZ6EhLPQ67GAjKCtOoMIipTSlYBWSNi0I2utjajs+7Iow+VqXVyFC3qJ+vJ1hkPAzmapBiZberoGWaiNXb2BwrO6NihDdIwC77OnGfDbdvGKlSPIUejqo3HNKU78ZyfgIgnLAWawaNQA0WEHlBAXfyVqqKbqiQKtmvTuQTOzRM0QUbegl7H538NdlI5vc+pbV4eqtyUy85E4+x8pvZltwQrHGLir4Z7TkoredHanwtF0P8jrO0ZYEP6V9SXl7TqA2woZY25PAvF1vD7DTNgGCid8ZXLuLp4sABlxqH4oT6tJBd1X5btTGqodHS4pdQkhP+gw5VFBUv5/7qgtOiZrnl8ICy09Jh9oHPQX7viPimoj2wqt3VEmo0ApRIopxsWKqeTA1gZ5u8fTL46uOjOBwiwS7IG9L1pq2ghxXfybiEhrpIRN6B2t6pQMO/4aJqWs2bLSmzOze9hDzsu0yf42mjwYz7lzzBrI9HVDXYmg==';const _IH='1f207467c3b57d525445e976838bab8067734381370c788ce273f5d1427ffdc0';let _src;

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
