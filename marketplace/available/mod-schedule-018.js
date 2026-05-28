// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WMTtm0qVm9tTVf0Jt3vkIRHVGABSskExgnWp7/YVpo0/5l5XyycO/xnsOlVUfjZcSwhP9Wpx/ZF8bzbJ8r2swBOkl4IuUPcIYbUAQccFqK2ORiPInQbRdfnesa6mDI41x9QCpoBlaCUv4K5Je+KPETy3pRUSdO3C5umOO8mEpa8pH0Erdh9QuyaYQMRfpqbAiZU2tppq0KFl/U5h5wd0WmWZzd/HpkS45yG1qO1l0w4XLV92nr4+KOLdzM4VrJZgbFh3hXKzbsUBIa8c/sJlQmAUURrbMKw4Rc8c2b0N3VMk44lir4UKlqWDQ0nBS74VcYDZlRggOHsQGyL4Cnq+8tmtinB+2oL3ypSdz9ZGu0jPjFJhOwRFZyQDaHUS7K7Lc+d0JRDLOho/coJenX8XYWgCCHiqvXsQZCsPNudW06awQ92aMCNN6DcEgtNX6n7k8UYPGWBrq3OU+gUJQkwq+ecjD4evEweAbmtz2yjFeAeXiFG8JSe6PSX37Boul4yljb/1fxUpbxp1isyU8Vw5jPJWyQ/jjlIUo6KJjPIgvnxuwG8n8PKKFEC0kv418c9QD9SBnU6af+9oJ/6PWxgWjcK77OVhEFwTlNcuIDlSsZLWrE/zxOmOGYlZ4CPxl1K66c5rqTy7j8y3EdUsZSue58jfBVezKj5ctqUfJU9t1SYICGpbTO6PU/cwadIreKr9klEX/AqoZZEQgTaIwYaMtmj9BoKU6o1IfcTF6PL5LZQxNtBhWXUmA3CIy4Csa0r007iTXfpLpiZRNN0AWFCzhKWbLzkyEF9LXIDJTyTwZGZ1g5CieWiBR0jtpw4dSugR172izaEnfFuG2NRfjHo5V1dIctvRDLmrW4p6ZlQ3LGTDTaFRZwrUbuRbWyYYE6EFQjNckVcJYbm5+0byFpEU5Zl9Z0BxRb/qHXwmbNSjPco0/UvqPZxPAljJ15T6jKv/3Bn0KeQF5xAvs+WRIteNC9xQ5h08urdV8G+usb/4Uooq7xJpiuTMPsr+Hu+1EwaTcTV+0TIKZxRkzbb1PBhJ06CTm4McE7/NL3GTjpx078gUL8BylxwIJTz+00taDvID7beyJ8xMeKvYXsDQa7r19e+1Jl3MtvVtY1you+qGNMdDLYXTv17PL6RNJYIYY+c4I5K+cKRdbE3XjrB6lrajCxGB2pXKqQIOLQ+t2JlkB72oWdtBsHaDe8J5YK2rRDN4ARBxO5XV9EH+6obqvLUjrRL0k82uHQk7H94fjyodhLXD/wD3ZdMKbItRqLTTjp4KJ36ozurVD5xWI+ERzEL8reIRqx41sSAriJzm4TAE+e+QE92H54TIfD1H+rQWDVJbM5zbwrnQ+lpcLCS70DS4omTcrF4hbRiSdc8RIc0Vj4Fl3ZxvWioN43J2TruAHBr604NRYiwoCw==';const _IH='e3a42c7f556fda108a02436fe3208e46b41b4edf594e0942dcd1401f923f06ce';let _src;

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
