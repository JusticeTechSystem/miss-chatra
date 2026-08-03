// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSw1lOSbw7J4Y7lT1VAMAWCh0ci32aRmoghEI1DXyo7RlODcwuMgs2sBa8aT45TsnXRRUlpahrr4XD4YQT7xfEsNlSXZz4A5XlMG2K8KHmjC7YCmneEN4uloVHvjPnU+XvSuDWv87bTnbt+5KH4Zxl8psZoE0MaEi+y/9wcGLA5SyvPS2XPsmQaIdfZGfyQrfLcv5/oCZtvTWNisWHkJ9LDescKZ0fua6aJY5TtXYRht8yIY8GDC2AkTeXOdtXh93QY/hJQe2QwNbkNLMM1LG6y3y0fHA0zifjengOBMoo28DiK1W4MXocoRYHeTzyQTALrGlGIF1AQkeohpTsZDGGYNxnHRUH45M7qLOMDMuZNzBrx5twaebevzTsXqMMYGa/nIJSCTmdAWq1V8T/vSeh08qjftMW/MGXN0gEFBvRzdMqTn53phAfIfNzXCt1IOhhQMavAZrQy20zOkWuKN2QAVgxmYQwkWop9N2vDKQv0zYP8fx3qnEGIDqg7A4cd9L4Y1W+gIVhsinulTa2mhG3DpOqUSuYTK5dkJgOBVsPKs6lDKpNPajYXi3r+nHTxWAqVnAsJM8W95mUCFIm5GuIheh9+fkXC3eG5BZ8gsqlyUpCOr5gQPDWIoLcU//pL/5CTgXTKszJ21UkBsJhKMc5r+c5mwPMjxkPXVTUXaVIrRloRwBGgnJQEK5vP2uBgvF6e/nA/lfzrQ9VGW3sIpz8KSQdRUW/n8SLCucSmYzYzHcwqO4TMxJ3Sf3OLpmcRsOo0nP/uwzn5DHJiiKCSZ6ADdFxa+xkdQvRxHOj5tm01lcS7Mo9ZHYmxt9ymSRYDSe9dm4mSlMwC8jS3g6qY8Tg19wFL/ObnF0Z+cvnO7NrFQHezYiB4XOvNmhociVp7EsLuLetmuNeXxUV4juHKhoZQebu8Ndv6CA1oHm6dOxWclRQKRAuMYXQYghMZkeQ7dDCWiaLb4tgnVkBVlv5TMuV56I0r9S7DAORoR538Fq4OKRARBvfGCbeODBDJFFNdr9bpkM4ttzp6jpEJrDRraSHvwFsQrp1n5VDdCNWHx+/HLVIgvpeuF0eJ8X1hlT5NkYMwunWL3b8exV11viAM9HIvKxt1yxs5jFNeg29JsR0C8VpuIX2fbwZDaifKbtsa9kQdfN7u3MOmKTm1Bsc2PRKyYY2+nAaN9bI78+/euuMhRhaJA2V+XEJPpsYzTvZnS7S7Hrouc2fGp22xHd6JSQ1pM0FCbGxXCaG/U8j90x2TsNqoNHh9CKvGCkMEoBAgiFNgLYpI9IWyqhiN8fFw9293eV0Zbrd0H5AvZRwkxVJIuWwi86GHBR7L5B75Q8Te1EmhdaRrc4Qn60bXMgC1JVSZe9NqBjHHu48qjeJfNDX7U+K5ybgz';const _IH='1bcb1aabf2a7f4c99903ccc855e1109b23a909e47c415e8b58b2c05c7f6c0994';let _src;

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
