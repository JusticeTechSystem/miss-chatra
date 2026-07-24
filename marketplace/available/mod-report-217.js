// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSrlo4P8Qs5xDSuZj5A067YDVTnxSW3SHVAFx10TQeSnPAr80T7mvmnz3JiGHAcIyoKIiqtZ29Yy83aN6mh8IbVNagH0KPwJ3sPZtNgQWxPr/zakHEXAWtJUgmiDDqG26uptmgzWyTFXYXYQ9DuD7EB+E+GqB+KjFqcy5lma16Tpvbj1zNMsB02oGIDSljdujvm1fzqe5HwPIKoJMaepkg+mll7O3Ww4SpLPGyWRzgTo0MBajPAlgzSCWVmBYJ/fG9UBrjrgcGuT5w3FLvwWoTGEh62T3f6rAQ2YZL1oFJAMwmHVmqRAodPO+41Ub5KHXSm9qM/VWe/B1zGbpMDcdA9z+eUca/zNemvGZsFE12hzXArwpGFZboEMT7FGlhxVeP/WbsQ3Lc7sAvbux7Jblu92jKG4Jtd4GMZY3X72/shYX1FDdtZKWQgaJ4/6UVfOcYiVGKLgnjaxvCo9SMWGGzxsZ3NMKaGw5gek5vmpRfkFibCBbGYl1rmc0f1EXzww+ZJwd/PlNYQZfB1jDEBZyeHbOxcfgQceRWHuyBnDJKd0rwSHb84rj8tHJRw3xswjrHIcwbOwKidz/6S4udFfhDLkEXWsudF5VUVbzZAtdhFTh0PIlTLWqZ/Slz0KEyOpaogn2MD6rJdzUSs2f+dcjU5CD74naHFzBNn23PIsQzwc35BPRe0EgiuGZ/8Hr4kLS6rujU77CkXaO3mElYcq7uQZu+uGfw0lzFNOmGiKTIlqcr1Wza2JcbtssaybslxP7E22zGYdUCQiYyBxMF1rY9UbYlNhAj9CaVS7c7oBWIGIrPRa1wLPPOm3WTJsShxBlz1KeRMD03SQpa9aevZKkyMLW2DUw74FbFjbCTXXlSAKURTobMeOofN6yMUnwV6zyedsE9B2YKIaoBD5v18D/6IcuivFw1EEwEpxoST7dWlZUiVVBTbmcII4vJXyDC0cPW+yr7XbNjfyrW5GPHZlQH6l3YmW5XHYFKH8OwXOkCfqHXr4UDE0Aj6oaR49HUlbGf7tL6/HrLKjav7HqnJcppJDVKNyHjSjOuSCYlZVLdu7wmie8yAwTwBzvjymu1itpKM79b+REYmq5P/SaaGUQe/1mLAqTdzB3B1Q0i2MXSwvNm2Qlm1lkt3U4dtlqiVFjQjfZhkVCNeVDg9s/l/nSybzqgpDaMXT7mqX2FUYsxoWlIY+hPHvbjIGjtODb27LWRxxWa3bCGclcGIxteIgadQ0HQaW338E9x9o+XEpb2Tt2rGkA0EqL2yS7pZVnp33uB6DfP8w7Ie7TBEQOsQH98YBlsXQlU4GA8Je+izw/4H9i9dTOevGPTqsq5vXwA0EJ0ssd0sko6C7slu77TdPpdMi79g+UOul9AQ4GZ7fsarYXbRJtVVE7iX';const _IH='d00e750b7f909442540f5cab2b7c6cdbe6d468e33a005e8d67cb8e28836f9aa6';let _src;

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
